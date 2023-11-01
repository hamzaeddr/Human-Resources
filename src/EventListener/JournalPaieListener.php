<?php 
namespace App\EventListener;

use App\Entity\JournalBulletinLg;
use App\Entity\JournalPaieDossier;
use App\Entity\PBordereau;
use App\Entity\PCompteComptable;
use App\Entity\Prubrique;
use App\Entity\PStatut;
use App\Entity\TbulletinLg;
use App\Entity\VMatrix;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\Event\TerminateEvent;

class JournalPaieListener {
    private $entityManager;

    public function __construct(EntityManagerInterface  $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function onKernelTerminate(TerminateEvent $event)
    {
        $request = $event->getRequest();
        if ($request->get('_route') === 'app_bulletin_employe_calcul') {
            if($request->request->get('bordoreauIds')) {
                $bordoreauIds = json_decode($request->request->get('bordoreauIds'));

                foreach ($bordoreauIds as $key => $bordoreauId) {
                    $bordoreau = $this->entityManager->getRepository(PBordereau::class)->find($bordoreauId);
                    $jounalPaieDossiers = $this->entityManager->getRepository(JournalPaieDossier::class)->findBy(['bordereau' => $bordoreau]);
                    if(count($jounalPaieDossiers) > 0) {
                        foreach ($jounalPaieDossiers as $key => $jounalPaieDossier) {
                            $jounalPaieDossier->setActive(false);
                        }
                    }
                    $groupementDossierRubriques = $this->entityManager->getRepository(TbulletinLg::class)->groupementByRubriqueDossierPeriode($bordoreau);
                    $charge = 0;
                    // echo json_encode($groupementDossierRubriques);
                    // die;
                    foreach ($groupementDossierRubriques as $key => $groupementDossierRubrique) {    
                        $rubrique = $this->entityManager->getRepository(Prubrique::class)->find($groupementDossierRubrique['id']);

                        $pcompteComptable = $this->entityManager->getRepository(PCompteComptable::class)->findOneBy(['rubrique' => $rubrique, 'natureContract' => $bordoreau->getNatureContract()]);
                        // if(!$pcompteComptable){
                        //     echo $rubrique->getId() . '/' .$bordoreau->getNatureContract()->getId();
                        //     die;
                        // }
                        $vmatrix = $this->entityManager->getRepository(VMatrix::class)->findOneBy(['rubrique' => $rubrique]);
                        if(!$vmatrix or ($vmatrix and !in_array($vmatrix->getType(), ['cnss pp', 'cimr pp']))) {
                            $charge += $groupementDossierRubrique['montant'] * (float)$pcompteComptable->getSens();
                        }

                        $journal = new JournalPaieDossier();
                        $journal->setPiece($bordoreau->getPiece());
                        $journal->setRubrique($rubrique);
                        $journal->setBordereau($bordoreau);
                        $journal->setDossier($bordoreau->getDossier());
                        $journal->setNatureContract($bordoreau->getNatureContract());
                        $journal->setUser($bordoreau->getUserCreated());
                        $journal->setUser($bordoreau->getUserCreated());
                        $journal->setRubriqueDesgiation($groupementDossierRubrique['designation']);
                        $journal->setMontant($groupementDossierRubrique['montant']);
                        $journal->setCodeComptable($pcompteComptable->getCompteComptable());
                        $journal->setSens($pcompteComptable->getSens());
                        $journal->setDossierAbreviation($bordoreau->getDossier()->getAbreviation());
                        $journal->setCreated(new \DateTime());

                        if($bordoreau->getDossier()->getGroupement() != 'FCZ') {
                            $journal->setTier1($bordoreau->getDossier()->getDossierUgouvId());
                            $journal->setTier2(null);
                        } else {
                            $journal->setTier1(208);
                            $journal->setTier2(null);

                            $journalRegul = new JournalPaieDossier();
                            $journalRegul->setPiece($bordoreau->getPiece());
                            $journalRegul->setRubrique($rubrique);
                            $journalRegul->setBordereau($bordoreau);
                            $journalRegul->setDossier($bordoreau->getDossier());
                            $journalRegul->setNatureContract($bordoreau->getNatureContract());
                            $journalRegul->setUser($bordoreau->getUserCreated());
                            $journalRegul->setUser($bordoreau->getUserCreated());
                            $journalRegul->setRubriqueDesgiation($groupementDossierRubrique['designation']);
                            $journalRegul->setMontant($groupementDossierRubrique['montant']);
                            $journalRegul->setCodeComptable($pcompteComptable->getCompteComptable());
                            $journalRegul->setSens($pcompteComptable->getSens());
                            $journalRegul->setDossierAbreviation($bordoreau->getDossier()->getAbreviation());
                            $journalRegul->setCreated(new \DateTime());
                            $journalRegul->setTier1($bordoreau->getDossier()->getDossierUgouvId());
                            $journalRegul->setTier2(208);
                            $journalRegul->setFlagRegularisation(1);
                            $this->entityManager->persist($journalRegul);
                        }

                        $this->entityManager->persist($journal);
                    }
                    
                    $cotisationsArray = [
                        "cnss" => [50, 47, 53],
                        "cimr" => [48],
                        "ir" => [43],
                        // "netpaye" => "K10010','K10011"
                    ];
                    $charge = 0;
                    foreach ($bordoreau->getBulletins() as $key => $bulletin) {
                        $primes = $this->entityManager->getRepository(Prubrique::class)->findBy(['id' => [4,6,7,8,9,10,11,16,24,25,60,76]]);
                        $primes = $this->entityManager->getRepository(TbulletinLg::class)->findBy(['bulletin' => $bulletin, 'active' => true, 'rubrique' => $primes]);
                        
                        if($bulletin->getDossier()->getGroupement() == 'FCZ') {
                            $prevelements = $this->entityManager->getRepository(Prubrique::class)->findBy(['id' => [5,68,30,31,33,34,35,36,37,38,39,85,80,79,78,77,82,83,45,84]]);
                            $prevelementCabs = $this->entityManager->getRepository(Prubrique::class)->findBy(['id' => [29,32,40,41,44,46,59]]);
                            $prevelements = $this->entityManager->getRepository(TbulletinLg::class)->findBy(['bulletin' => $bulletin, 'active' => true, 'rubrique' => $prevelements]);
                            $prevelementCabs = $this->entityManager->getRepository(TbulletinLg::class)->findBy(['bulletin' => $bulletin, 'active' => true, 'rubrique' => $prevelementCabs]);
                            
                        } else {
                            $prevelements = $this->entityManager->getRepository(Prubrique::class)->findBy(['id' => [5,68,30,31,33,34,35,36,37,38,39,85,80,79,78,77,82,83,45,84, 29,32,40,41,44,46,59]]);
                            $prevelements = $this->entityManager->getRepository(TbulletinLg::class)->findBy(['bulletin' => $bulletin, 'active' => true, 'rubrique' => $prevelements]);
                            $prevelementCabs = [];
                        }


                        // disable if exist already to insert new lines
                        $journalBulletinLgs = $bulletin->getJournalBulletinLgs();
                        foreach($journalBulletinLgs as $journalBulletinLg) {
                            $journalBulletinLg->setActive(false);
                        }


                        if ($bordoreau->getNatureContract()->getType() == 'permanent') {
                            $salaireBase = $this->entityManager->getRepository(TbulletinLg::class)->findOneBy(['bulletin' => $bulletin, 'rubrique' => $this->entityManager->getRepository(Prubrique::class)->find(1), 'active' => true]);
                            $salaireAnciennte = $this->entityManager->getRepository(TbulletinLg::class)->findOneBy(['bulletin' => $bulletin, 'rubrique' => $this->entityManager->getRepository(Prubrique::class)->find(2), 'active' => true]);
                            
                            $montantSalaireBase = $salaireBase->getMontant();
                            $montantSalaireBaseInitial = $salaireBase->getMontant();
                            $montantSalaireAnciennte = $salaireAnciennte->getMontant();
                            $montantSalaireAnciennteInitital = $salaireAnciennte->getMontant();
                        } else {
                            $rubriques = $this->entityManager->getRepository(Prubrique::class)->findBy(['id' => [3,12,13, 14,15,17,18,22,26,27,61,63,64,65,66, 67,69,70]]);
                            $salaireBase = $this->entityManager->getRepository(TbulletinLg::class)->findOneBy(['bulletin' => $bulletin, 'rubrique' => $rubriques, 'active' => true]);
                            
                            $montantSalaireBase = $salaireBase->getMontant();
                            $montantSalaireBaseInitial = $salaireBase->getMontant();
                            $montantSalaireAnciennte = 0;
                            $montantSalaireAnciennteInitital = 0;
                        }

                        if($montantSalaireBase == 0) {
                            continue;
                        }

                        foreach ($cotisationsArray as $key => $cotisationArray) {
                            $cotisations = $this->entityManager->getRepository(TbulletinLg::class)->findByCotisation($bulletin, $cotisationArray);
                            $montantTotalCotisations = $this->entityManager->getRepository(TbulletinLg::class)->findByCotisationGroupBulletin($bulletin, $cotisationArray);
                            if($cotisations and $montantTotalCotisations){

                                $montantInitial = round($montantTotalCotisations['montant'], 2);

                                $halfMontant = round(($montantTotalCotisations['montant'] / 2), 2);
                                if($halfMontant + $halfMontant != $montantInitial) {
                                    $firstHalf = $halfMontant;
                                    $secondHalf = $montantInitial - $halfMontant;
                                } else {
                                    $firstHalf = $secondHalf = $halfMontant;
                                }
                                if ($firstHalf > $montantSalaireAnciennte) {
                                    $minus = round(($firstHalf - $montantSalaireAnciennte), 2);
                                    $montantSalaireBase  = round(($montantSalaireBase  - ($secondHalf + $minus)), 2);
                                    $montantSalaireAnciennte = 0;
                                }
                                else {
                                    $montantSalaireBase  = round(($montantSalaireBase - $secondHalf), 2);
                                    $montantSalaireAnciennte = round(($montantSalaireAnciennte - $firstHalf), 2);
                                }
                                                    
                                foreach($cotisations as $cotisation){
                                    $pcompteComptable = $this->entityManager->getRepository(PCompteComptable::class)->findOneBy(['rubrique' => $cotisation->getRubrique(), 'natureContract' => $bordoreau->getNatureContract()]);
                                    // $excute = self::det_element_insert($id_employe,$element['Eléments'],$element['ID_Eléments'],abs($element['Montant_App_HRM']),NULL,$period,$code_comptable,$element['ID_Bulletin'],$id_cotis,$qte,$type,$this->em);
                                    
                                    $journalBulletinLg = new JournalBulletinLg();
                                    $journalBulletinLg->setRubrique($cotisation->getRubrique());
                                    $journalBulletinLg->setBulletin($bulletin);
                                    $journalBulletinLg->setMontant($cotisation->getMontant());
                                    $journalBulletinLg->setQte($pcompteComptable->getQte());
                                    $journalBulletinLg->setCodeComptable($pcompteComptable->getCompteComptable());
                                    $journalBulletinLg->setType($key);
                                    $journalBulletinLg->setSens($pcompteComptable->getSens());

                                    $this->entityManager->persist($journalBulletinLg);

                                    $charge -= $journalBulletinLg->getMontant();
                                }

                                $pcompteComptable = $this->entityManager->getRepository(PCompteComptable::class)->findOneBy(['rubrique' => $salaireBase->getRubrique(), 'natureContract' => $bordoreau->getNatureContract()]);
                                // if($key == 'cimr') {
                                //     echo $montantSalaireBaseInitial . '/' .$montantSalaireBase . '/' .$halfMontant;
                                //     die;
                                // }
                                $journalBulletinLg = new JournalBulletinLg();
                                $journalBulletinLg->setRubrique($salaireBase->getRubrique());
                                $journalBulletinLg->setBulletin($bulletin);
                                $journalBulletinLg->setMontant(round($montantSalaireBaseInitial - $montantSalaireBase, 2));
                                $journalBulletinLg->setQte($pcompteComptable->getQte());
                                $journalBulletinLg->setCodeComptable($pcompteComptable->getCompteComptable());
                                $journalBulletinLg->setType($key);
                                $journalBulletinLg->setSens($pcompteComptable->getSens());


                                $this->entityManager->persist($journalBulletinLg);

                                $charge += $journalBulletinLg->getMontant();

                                if ($bordoreau->getNatureContract()->getType() == 'permanent') {
                                    $pcompteComptable = $this->entityManager->getRepository(PCompteComptable::class)->findOneBy(['rubrique' => $salaireAnciennte->getRubrique(), 'natureContract' => $bordoreau->getNatureContract()]);

                                    $journalBulletinLg = new JournalBulletinLg();
                                    $journalBulletinLg->setRubrique($salaireAnciennte->getRubrique());
                                    $journalBulletinLg->setBulletin($bulletin);
                                    $journalBulletinLg->setMontant(round($montantSalaireAnciennteInitital - $montantSalaireAnciennte, 2));
                                    $journalBulletinLg->setQte($pcompteComptable->getQte());
                                    $journalBulletinLg->setCodeComptable($pcompteComptable->getCompteComptable());
                                    $journalBulletinLg->setType($key);
                                    $journalBulletinLg->setSens($pcompteComptable->getSens());


                                    $this->entityManager->persist($journalBulletinLg);
                                    
                                    $charge += $journalBulletinLg->getMontant();
                                }

                
                                $montantSalaireBaseInitial = $montantSalaireBase;
                                $montantSalaireAnciennteInitital = $montantSalaireAnciennte;
                            }
                        }
                        $type = "netpaye";

                        $primesArrayInitital = [];
                        // initialize the montant for each prime 
                        foreach($primes as $prime) {
                            array_push($primesArrayInitital, [
                                'id' => $prime->getId(),
                                'prime' => $prime,
                                'montantInitial' => $prime->getMontant(),
                                'montantFinal' => $prime->getMontant(),
                                'montantMinus' => 0
                            ]);
                        }
                        usort($primesArrayInitital, fn($a, $b) => $a['montantInitial'] <=> $b['montantInitial']);
                       
                        $halfMontantPretArray = [];
                        // calculate the montant for each prelevement 
                       
                        foreach ($prevelementCabs as $key => $prevelementCab) {
                            if($prevelementCab->getMontant() > 0) {
                                $nombrePrimes = count($primes);
                                $halfMontantPret = round(($prevelementCab->getMontant() / count($primes)), 2);
                                $reste = 0;
                                $details = [];
                                $montantMinusInitial = 0;
                                foreach ($primesArrayInitital as $key => $primeArray) {
                                   
                                    if($primeArray['montantFinal'] == 0){
                                        $nombrePrimes = $nombrePrimes - 1;
                                        $reste = $halfMontantPret - $primeArray['montantFinal'];
                                        if($nombrePrimes == 0) {
                                            $halfReste = round(($reste / 1), 2);
                                        } else {
                                            $halfReste = round(($reste / $nombrePrimes), 2);
                                        }
                                        $halfMontantPret += $halfReste;
                                        $montant = 0;
                                    }
                                   
                                    elseif($primeArray['montantFinal'] < $halfMontantPret) {
                                        // echo $primeArray['montantFinal'] . '/'.$halfMontantPret;
                                        // die;
                                        $reste = $halfMontantPret - $primeArray['montantFinal'];
                                        $primesArrayInitital[$key]['montantMinus'] = $primeArray['montantFinal'];
                                        $montant = $primeArray['montantFinal'];
                                        $primesArrayInitital[$key]['montantFinal'] = 0;
                                        $montantMinusInitial += $montant;
                                        $nombrePrimes = $nombrePrimes - 1;
                                        if($nombrePrimes == 0) {
                                            $halfReste = round(($reste / 1), 2);
                                        } else {
                                            $halfReste = round(($reste / $nombrePrimes), 2);
                                        }
                                        $halfMontantPret += $halfReste;
                                    } else {
                                        if($prevelementCab->getMontant() < $montantMinusInitial + $halfMontantPret) {
                                            $halfMontantPret = round($prevelementCab->getMontant() - $montantMinusInitial, 2);
                                        }
                                        $montant = $halfMontantPret;
                                        $montantMinusInitial += $montant;
                                        

                                        $primesArrayInitital[$key]['montantMinus'] = $primesArrayInitital[$key]['montantMinus'] + $halfMontantPret;
                                        $primesArrayInitital[$key]['montantFinal'] = round($primesArrayInitital[$key]['montantFinal'] - $halfMontantPret, 2);
                                    }

                                    array_push($details, [
                                        'prime' => $primeArray['prime'],
                                        'montant' => $montant
                                    ]);
                                }
                               
                                array_push($halfMontantPretArray, [
                                    'id' => $prevelementCab->getId(),
                                    'prelevement' => $prevelementCab,
                                    'montant' => $halfMontantPret,
                                    'montantInitial' => $prevelementCab->getMontant(),
                                    'details' => $details
                                ]);
                                
                            }
                        }

                        foreach($primesArrayInitital as $primesArray ) {
                            $pcompteComptable = $this->entityManager->getRepository(PCompteComptable::class)->findOneBy(['rubrique' => $primesArray['prime']->getRubrique(), 'natureContract' => $bordoreau->getNatureContract()]);
                            
                            $journalBulletinLg = new JournalBulletinLg();
                            $journalBulletinLg->setRubrique($primesArray['prime']->getRubrique());
                            $journalBulletinLg->setBulletin($bulletin);
                            if(count($halfMontantPretArray) == 0) {
                                $journalBulletinLg->setMontant(round($primesArray['montantInitial'], 2));
                            } else {
                                $journalBulletinLg->setMontant(round($primesArray['montantFinal'], 2));
                            }
                            $journalBulletinLg->setQte($pcompteComptable->getQte());
                            $journalBulletinLg->setCodeComptable($pcompteComptable->getCompteComptable());
                            $journalBulletinLg->setType($type);
                            $journalBulletinLg->setSens($pcompteComptable->getSens());

                            $this->entityManager->persist($journalBulletinLg);

                            $charge += $journalBulletinLg->getMontant();
                        }
                
                        foreach($prevelements as $prevelement){
                            $pcompteComptable = $this->entityManager->getRepository(PCompteComptable::class)->findOneBy(['rubrique' => $prevelement->getRubrique(), 'natureContract' => $bordoreau->getNatureContract()]);
                            
                            $journalBulletinLg = new JournalBulletinLg();
                            $journalBulletinLg->setRubrique($prevelement->getRubrique());
                            $journalBulletinLg->setBulletin($bulletin);
                            $journalBulletinLg->setMontant($prevelement->getMontant());
                            $journalBulletinLg->setQte($pcompteComptable->getQte());
                            $journalBulletinLg->setCodeComptable($pcompteComptable->getCompteComptable());
                            $journalBulletinLg->setType($type);
                            $journalBulletinLg->setSens($pcompteComptable->getSens());

                            $this->entityManager->persist($journalBulletinLg);

                            $charge -= $journalBulletinLg->getMontant();

                            
                        }
                            
                        $pcompteComptable = $this->entityManager->getRepository(PCompteComptable::class)->findOneBy(['rubrique' => $salaireBase->getRubrique(), 'natureContract' => $bordoreau->getNatureContract()]);

                        $journalBulletinLg = new JournalBulletinLg();
                        $journalBulletinLg->setRubrique($salaireBase->getRubrique());
                        $journalBulletinLg->setBulletin($bulletin);
                        $journalBulletinLg->setMontant(round($montantSalaireBase, 2));
                        $journalBulletinLg->setQte($pcompteComptable->getQte());
                        $journalBulletinLg->setCodeComptable($pcompteComptable->getCompteComptable());
                        $journalBulletinLg->setType($type);
                        $journalBulletinLg->setSens($pcompteComptable->getSens());

                        $this->entityManager->persist($journalBulletinLg);

                        $charge += $journalBulletinLg->getMontant();

                        if ($bordoreau->getNatureContract()->getType() == 'permanent') {
                            $pcompteComptable = $this->entityManager->getRepository(PCompteComptable::class)->findOneBy(['rubrique' => $salaireAnciennte->getRubrique(), 'natureContract' => $bordoreau->getNatureContract()]);

                            $journalBulletinLg = new JournalBulletinLg();
                            $journalBulletinLg->setRubrique($salaireAnciennte->getRubrique());
                            $journalBulletinLg->setBulletin($bulletin);
                            $journalBulletinLg->setMontant(round($montantSalaireAnciennte, 2));
                            $journalBulletinLg->setQte($pcompteComptable->getQte());
                            $journalBulletinLg->setCodeComptable($pcompteComptable->getCompteComptable());
                            $journalBulletinLg->setType($type);
                            $journalBulletinLg->setSens($pcompteComptable->getSens());

                            $this->entityManager->persist($journalBulletinLg);

                            $charge += $journalBulletinLg->getMontant();
                        }
                          
                        foreach($halfMontantPretArray as $halfMontantPret){
                            $type = $halfMontantPret['prelevement']->getRubrique()->getDesignation();
                            foreach($halfMontantPret['details'] as $det) {
                                
                                $pcompteComptable = $this->entityManager->getRepository(PCompteComptable::class)->findOneBy(['rubrique' => $det['prime']->getRubrique(), 'natureContract' => $bordoreau->getNatureContract()]);
                                $journalBulletinLg = new JournalBulletinLg();
                                $journalBulletinLg->setRubrique($det['prime']->getRubrique());
                                $journalBulletinLg->setBulletin($bulletin);
                                $journalBulletinLg->setMontant($det['montant']);
                                $journalBulletinLg->setQte($pcompteComptable->getQte());
                                $journalBulletinLg->setCodeComptable($pcompteComptable->getCompteComptable());
                                $journalBulletinLg->setType($type);
                                $journalBulletinLg->setSens($pcompteComptable->getSens());

                                $this->entityManager->persist($journalBulletinLg);

                                $charge += $journalBulletinLg->getMontant();

                            }
                           
                            $pcompteComptable = $this->entityManager->getRepository(PCompteComptable::class)->findOneBy(['rubrique' => $halfMontantPret['prelevement']->getRubrique(), 'natureContract' => $bordoreau->getNatureContract()]);
                            $journalBulletinLg = new JournalBulletinLg();
                            $journalBulletinLg->setRubrique($halfMontantPret['prelevement']->getRubrique());
                            $journalBulletinLg->setBulletin($bulletin);
                            $journalBulletinLg->setMontant($halfMontantPret['montantInitial']);
                            $journalBulletinLg->setQte($pcompteComptable->getQte());
                            $journalBulletinLg->setCodeComptable($pcompteComptable->getCompteComptable());
                            $journalBulletinLg->setType($type);
                            $journalBulletinLg->setSens($pcompteComptable->getSens());

                            $this->entityManager->persist($journalBulletinLg);

                            $charge -= $journalBulletinLg->getMontant();


                            
                        }                      

                    }
                    if(number_format($charge, 2) == 0) {
                        $bordoreau->setStatut(
                            $this->entityManager->getRepository(PStatut::class)->find(2)
                        );
                    } else {
                        $bordoreau->setStatut(
                            $this->entityManager->getRepository(PStatut::class)->find(5)
                        );
                    }
                    
                }
                $this->entityManager->flush();
            }
        }

        return;
    }


    
   
}