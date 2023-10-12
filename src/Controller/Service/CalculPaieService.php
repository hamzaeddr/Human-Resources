<?php

namespace App\Service;

use App\Entity\PPiece;
use App\Entity\PDevise;
use App\Entity\Periode;
use App\Entity\VMatrix;
use App\Entity\Probleme;
use App\Entity\PPaiement;
use App\Entity\Prubrique;
use App\Entity\Tbulletin;
use App\Entity\PBaremeCimr;
use App\Entity\TbulletinLg;
use App\Entity\PbaremeBrute;
use App\Entity\PPrelevement;
use App\Entity\PPrelevementLg;
use App\Entity\LElementEcheance;
use Doctrine\ORM\EntityManagerInterface;

class CalculPaieService
{
    private $em;
    private $nombreJourTravails;
    private $bulletin;
    private $contract;
    private $salaireBrute;
    private $salaireNetTheorique;
    private $salaireBase;
    private $salaireBaseTheorique;
    private $salaireBruteImposable;
    private $salaireImposableTheorique;
    private $sommeCotisation;
    private $sommeCotisationTheorique;
    private $irNet;
    private $irNetTheorique;
    private $salaireNetImposable;
    private $salaireNetImposableTheorique;
    private $sommePrelevement;
    private $periode;
    private $salaireNetPayer;
    private $prelevemtents;
    private $bordoreau;


 
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->em = $entityManager;
    }

    public function permanentPaie($contract, $nombreJourTravails, $periode, $bordoreau) {
        $this->bordoreau = $bordoreau;
        $this->nombreJourTravails = $nombreJourTravails;
        $this->contract = $contract;
        $this->periode = $periode;

        $rubriqueSalaireBase = $this->em->getRepository(Prubrique::class)->find(1);
        $baremeBruteSalaireDeBase = $this->em->getRepository(PbaremeBrute::class)->findOneBy(['bareme' => $contract->getBareme(), 'rubrique' => $rubriqueSalaireBase]);
        
        $this->salaireBaseTheorique = 26 * $baremeBruteSalaireDeBase->getTauxPs();
        $this->salaireBase = $nombreJourTravails * $baremeBruteSalaireDeBase->getTauxPs();

        $this->sommeCotisation = 0;
        $this->sommeCotisationTheorique = 0;
        $this->irNet = 0;
        $this->irNetTheorique = 0;
        $this->salaireBrute = 0;
        $this->salaireNetTheorique = $this->salaireBaseTheorique;
        $this->sommePrelevement = 0;
        $this->salaireBruteImposable = $this->salaireBrute = $this->salaireBase;
        $this->salaireImposableTheorique = 0;
        $this->salaireNetImposable = 0;
        $this->salaireNetImposableTheorique= 0;
        $this->prelevemtents = [];

        
        $this->setBulletinCab();

        // salaire de base 

        $bulletinDet = new TbulletinLg();                
        $bulletinDet->setMontant($this->salaireBase);            
        $bulletinDet->setBulletin($this->bulletin);
        $bulletinDet->setRubrique($rubriqueSalaireBase);
        $bulletinDet->setSens(1);

        $this->em->persist($bulletinDet);

       
        // primes
        $this->calculPrime();
        
        // prime anciennete
        $this->calculAnciennete();

        // cotisation cnss
        $this->calculCotisationCnss();
        
        // cotisation cimr
        $this->calculCotisationCimr();
        
        // prelevement IR
        $this->calculPrelevementIr();
    
        // Elements Fixe
        $this->calculElementFixe();
        
        
        // elements echeance
        
        $this->calculElementEcheance();

       
        
        $this->salaireNetPayer = round($this->salaireBrute - ($this->sommeCotisation + $this->irNet), 2);
        $this->salaireNetTheorique -= ($this->sommeCotisationTheorique + $this->irNetTheorique);
        $this->salaireNetTheorique = round($this->salaireNetTheorique,2);
       
        // prelevement echeance et fixe
        $this->removePrelevementFromSalaireNet();
        
        // dd('hi');
        // prelevement
        $this->calculPrelevement();       
        
        // allocation
        $this->calculAllocation();
        
        
        $bulletinDet = new TbulletinLg();
        $bulletinDet->setMontant($this->salaireNetPayer - round($this->sommePrelevement, 2));
        $bulletinDet->setSens(1);
        $bulletinDet->setRubrique(
            $this->em->getRepository(Prubrique::class)->find(5)
        );
        $bulletinDet->setBulletin($this->bulletin);

        $this->em->persist($bulletinDet);


        $this->em->flush();
    
    
       
        // dd($contract->getActiveElementFixes(), $salaireNetImposable, $cotisation);

        return 'good';

    
           
    }
    public function setBulletinCab() {
        $bulletin = $this->em->getRepository(Tbulletin::class)->findOneBy(['contract' => $this->contract, 'periode' => $this->periode]);
        if($bulletin) {
            foreach($bulletin->getBulletinLgs() as $bulletinLg) {
                $bulletinLg->setActive(false);
            }
            
            $this->em->flush();
            
            $this->bulletin = $bulletin;
            $this->bulletin->setBordereau($this->bordoreau);
        } else {
            $this->bulletin = new Tbulletin();
            $this->bulletin->setContract($this->contract);
            $this->bulletin->setPeriode($this->periode);
            $this->bulletin->setPPiece(
                $this->em->getRepository(PPiece::class)->find(1)
            );
            $this->bulletin->setPaiement(
                $this->em->getRepository(PPaiement::class)->find(1)
            );
            $this->bulletin->setDevise(
                $this->em->getRepository(PDevise::class)->find(1)
            );
            $this->bulletin->setDossier($this->contract->getDossier());
            $this->bulletin->setBordereau($this->bordoreau);
    
            $this->em->persist($this->bulletin);
        }
        // return ['montant' => ];
    }
    public function calculPrime() {
        $primes = $this->em->getRepository(PbaremeBrute::class)->findBy(['type' => 'prime', 'bareme' => $this->contract->getBareme()]);
        $countPrime = 0;
        foreach($primes as $prime){
            $countPrime++;
           
            $montant = round($this->nombreJourTravails * ($prime->getMontant() / 26),2);
            
        
            $bulletinDet = new TbulletinLg();                
            $bulletinDet->setMontant($montant);            
            $bulletinDet->setBulletin($this->bulletin);
            $bulletinDet->setRubrique($prime->getRubrique());
            $bulletinDet->setSens(1);

            $this->em->persist($bulletinDet);

            $this->salaireBrute += $montant;
            $this->salaireNetTheorique += $prime->getMontant();
        }

        // return ['montant' => ];
    }
    public function calculAnciennete()
    {
        $vmatirxAnciennte = $this->em->getRepository(VMatrix::class)->getNombreAnneeAnciennte($this->contract->getDateAnciennete());

        if($vmatirxAnciennte) {

            $montant = round($this->salaireBase * ($vmatirxAnciennte->getTaux() / 100), 2);
            // dd($this->salaireBase,$montant);
            // if ($montant == 525) {
            //     dd($this->salaireBase,$montant);

            // }
          
            $bulletinDet = new TbulletinLg();                
            $bulletinDet->setMontant($montant);            
            $bulletinDet->setBulletin($this->bulletin);
            $bulletinDet->setRubrique($vmatirxAnciennte->getRubrique());
            $bulletinDet->setSens(1);

            $this->em->persist($bulletinDet);

            $this->salaireBrute += $montant;
            $this->salaireNetTheorique += ($this->salaireBaseTheorique * ($vmatirxAnciennte->getTaux() / 100));
            $this->salaireBruteImposable += $montant;
            $this->salaireImposableTheorique = $this->salaireBaseTheorique + ($this->salaireBaseTheorique * ($vmatirxAnciennte->getTaux() / 100));
        }
    }
    public function calculCotisationCnss()
    {
        $cotisations = $this->em->getRepository(VMatrix::class)->findBy(['type' => ['cnss', 'cnss pp']]);
        $count = 0;
        foreach($cotisations as $cotisation)
        {
            $count++;
            $bulletinDet = new TbulletinLg();
            if($cotisation->getPlafond() > 0 && $this->salaireBruteImposable > $cotisation->getPlafond()){
                $montant = round(($cotisation->getPlafond() * ($cotisation->getTaux() / 100)), 2);                
                
                if($cotisation->getType() == "cnss") {
                    $this->sommeCotisation += $montant;
                    $this->sommeCotisationTheorique += $montant;
                }
            }else{
                $montant = round(($this->salaireBruteImposable * ($cotisation->getTaux() / 100)), 2);
                if($cotisation->getType() == "cnss") {
                    $this->sommeCotisation += $montant;
                    $this->sommeCotisationTheorique +=$this->salaireImposableTheorique * ($cotisation->getTaux() / 100);
                }
            }

            $bulletinDet->setMontant($montant);
            $bulletinDet->setSens(-1);
            $bulletinDet->setRubrique($cotisation->getRubrique());
            $bulletinDet->setBulletin($this->bulletin);


            $this->em->persist($bulletinDet);
        }
    }
    public function calculCotisationCimr()
    {
        $cotisations = $this->em->getRepository(PBaremeCimr::class)->findBy(['type' => ['cimr', 'cimr pp'], 'bareme' => $this->contract->getBareme()]);
        foreach($cotisations as $cotisation)
        {
            $bulletinDet = new TbulletinLg();
            $montant = round($this->salaireBruteImposable * ($cotisation->getTaux() / 100), 2);
            if($cotisation->getType() == "cimr") {
                $this->sommeCotisation += $montant;
                $this->sommeCotisationTheorique += $this->salaireImposableTheorique * ($cotisation->getTaux() / 100);
            }

            $bulletinDet->setMontant($montant);
            $bulletinDet->setSens(-1);
            $bulletinDet->setRubrique($cotisation->getRubrique());
            $bulletinDet->setBulletin($this->bulletin);

            $this->em->persist($bulletinDet);
        }
    }
    public function calculPrelevementIr($pourcentage = null)
    {
        $this->salaireNetImposable = $this->salaireBruteImposable - ($this->sommeCotisation + ($this->salaireBruteImposable*0.2));
        $this->salaireNetImposableTheorique = $this->salaireImposableTheorique - ($this->sommeCotisationTheorique + ($this->salaireImposableTheorique * 0.2));
        if(!$pourcentage) {
            $cotisation = $this->em->getRepository(VMatrix::class)->getTauxIr($this->salaireNetImposable);
            $cotisationTheorique = $this->em->getRepository(VMatrix::class)->getTauxIr($this->salaireNetImposableTheorique);
            if($cotisationTheorique) {
                $irBruteTheorique = ($this->salaireNetImposableTheorique * ($cotisationTheorique->getTaux() / 100)) - $cotisationTheorique->getPlafond();
                $this->irNetTheorique = $irBruteTheorique - ($this->contract->getPriseEnCharge() * $cotisationTheorique->getTauxACharge());
            }
            if($cotisation){
                $irBrute = ($this->salaireNetImposable * ($cotisation->getTaux() / 100)) - $cotisation->getPlafond();
                $this->irNet = $irBrute - ($this->contract->getPriseEnCharge() * $cotisation->getTauxACharge());
    
                if($this->irNet > 0) {
                    $bulletinDet = new TbulletinLg();
                    $bulletinDet->setMontant($this->irNet);
                    $bulletinDet->setSens(-1);
                    $bulletinDet->setRubrique($cotisation->getRubrique());
                    $bulletinDet->setBulletin($this->bulletin);
            
                    $this->em->persist($bulletinDet);
                } else {
                    $this->irNet = 0;
                }
            }
            

        } else {
            $this->irNetTheorique = $this->salaireBrute * $pourcentage;
            $this->irNet = $this->salaireBrute * $pourcentage;
            if($this->irNet > 0) {
                $bulletinDet = new TbulletinLg();
                $bulletinDet->setMontant($this->irNet);
                $bulletinDet->setSens(-1);
                $bulletinDet->setRubrique($this->em->getRepository(Prubrique::class)->find(43));
                $bulletinDet->setBulletin($this->bulletin);
        
                $this->em->persist($bulletinDet);
            } else {
                $this->irNet = 0;
            }
        }

    }
    public function calculElementFixe()
    {
        // dd($this->contract->getActiveElementFixes()[1]);
      
        foreach ($this->contract->getActiveElementFixes() as $key => $elementFixe) {
            if($elementFixe->getSens() == 1) {
                $bulletinDet = new TbulletinLg();
                $montant = round(($this->nombreJourTravails * ($elementFixe->getMontant() / 26)), 2);
                $this->salaireBrute += $montant;
                $this->salaireNetTheorique += round($elementFixe->getMontant(), 2);
                $bulletinDet->setMontant($montant);
                $bulletinDet->setSens($elementFixe->getSens());
                $bulletinDet->setRubrique($elementFixe->getRubrique());
                $bulletinDet->setBulletin($this->bulletin);
                $this->em->persist($bulletinDet);
            } else {
                $montant = $elementFixe->getMontant();
                // $this->sommePrelevement += $montant;
                array_push($this->prelevemtents, [
                    'objet' => $elementFixe,
                    'type' => 'element fixe',
                ]);

            }
    
        }
    }
    public function calculElementEcheance()
    {
        $elementEcheances = $this->em->getRepository(LElementEcheance::class)->findBy(['contract' => $this->contract, 'periode' => $this->periode, 'active' => true]);
        foreach ($elementEcheances as $key => $elementEcheance) {
            $bulletinDet = new TbulletinLg();

            if($elementEcheance->getRubrique()->getId() == 16){ // Prime Provi. de Compensation
                $montant = round($this->nombreJourTravails * ($elementEcheance->getMontant() / 26), 2);
            }
            else {
                $montant = round($elementEcheance->getMontant(), 2);
            }

            if($elementEcheance->getSens() == -1) {
                array_push($this->prelevemtents, [
                    'objet' => $elementEcheance,
                    'type' => 'element echeance',
                ]);
            } else {
                $this->salaireBrute += $montant;
                $bulletinDet->setMontant($montant);
                $bulletinDet->setSens($elementEcheance->getSens());
                $bulletinDet->setRubrique($elementEcheance->getRubrique());
                $bulletinDet->setBulletin($this->bulletin);
        
                $this->em->persist($bulletinDet);
            }

            
        }
    }
    public function calculPrelevement()
    {
        $prelevementLgs = $this->em->getRepository(PPrelevementLg::class)->getPrelevementByPeriodeAndContract($this->contract, $this->periode);
      
        foreach($prelevementLgs as $prelevementLg){

            $bulletinDet = $this->em->getRepository(TbulletinLg::class)->findOneBy(['bulletin' => $this->bulletin, 'active' => true, 'rubrique' => $prelevementLg->getPrelevement()->getRubrique()]);
            // $this->sommePrelevement += $prelevementLg->getMontant();
            if($prelevementLg->getMontant() > $this->salaireNetPayer) {
                // $probleme = $this->em->getRepository(Probleme::class)->findOneBy(['periode' => $this->periode, 'contract' => $this->contract, 'prelevementLg' => $prelevementLg]);
                // if(!$probleme) {
                //     $probleme = new Probleme();
                //     $probleme->setPeriode($this->periode);
                //     $probleme->setContract($this->contract);
                //     $probleme->setPrelevementLg($prelevementLg);
                //     $probleme->setMotif('Solde insuffisant !');
    
                //     $this->em->persist($probleme);
                // }
                $prelevementLg->setActive(false);
                $prelevementLg->setValider(false);
                $prelevementLg->setMotif('Solde insuffisant!');
                $prelevementLg->setBulletin(null);

                $lastPrelevementDet = $this->em->getRepository(PPrelevementLg::class)->findBy(['prelevement' => $prelevementLg->getPrelevement()], ['id' => 'desc'])[0];
                $newPeriode = $lastPrelevementDet->getPeriode()->getDate()->modify('+1 month');
                $newPeriode = $this->getPeriode($newPeriode->format('mY'));

                $prelevementDet = new PPrelevementLg();
                $prelevementDet->setPeriode($newPeriode);
                $prelevementDet->setMontant($prelevementLg->getMontant());
                $prelevementDet->setPrelevement($prelevementLg->getPrelevement());
    
                $this->em->persist($prelevementDet);
                

            } else {
                if($bulletinDet) {
                    $bulletinDet->setMontant($bulletinDet->getMontant() + $prelevementLg->getMontant());
                } else {
                    $bulletinDet = new TbulletinLg();
                    $bulletinDet->setMontant($prelevementLg->getMontant());
                    $bulletinDet->setSens(-1);
                    $bulletinDet->setRubrique($prelevementLg->getPrelevement()->getRubrique());
                    $bulletinDet->setBulletin($this->bulletin);
    
                    $this->em->persist($bulletinDet);
    
                    $prelevementLg->setBulletin($this->bulletin);
                    $prelevementLg->setValider(true);
                }

                $this->salaireNetPayer -= $prelevementLg->getMontant();
            }

            
        }
    }
    public function calculAllocation()
    {
        $checkAllocation = $this->em->getRepository(TbulletinLg::class)->checkPayementAllocation($this->periode, $this->contract);        
        if(!$checkAllocation && $this->salaireNetPayer > 0){
            if($this->salaireNetTheorique >= 10000){
                $montant = 100;
            }else if($this->salaireNetTheorique > 5050){
                $montant=50;
            }else{
                $montant=0;
            }

            if($this->salaireNetPayer < $montant){
                $montant = $this->salaireNetPayer;
            }

            $this->salaireNetPayer -= $montant;

            $bulletinDet = new TbulletinLg();
            $bulletinDet->setMontant($montant);
            $bulletinDet->setSens(-1);
            $bulletinDet->setRubrique($this->em->getRepository(Prubrique::class)->find(59));
            $bulletinDet->setBulletin($this->bulletin);

            $this->em->persist($bulletinDet);
          
        }
    }
    public function removePrelevementFromSalaireNet() {
       
        foreach($this->prelevemtents as $prelevement) {
            if($prelevement['objet']->getMontant() > $this->salaireNetPayer) {
                // problemes
                if($prelevement['type'] == "element echeance") {
                    $probleme = $this->em->getRepository(Probleme::class)->findOneBy(['periode' => $this->periode, 'contract' => $this->contract, 'elementEcheance' => $prelevement['objet']]);
                } else {
                    // element fixe
                    // $probleme = $this->em->getRepository(Probleme::class)->findOneBy(['periode' => $this->periode, 'contract' => $this->contract, 'elementFixe' => $prelevement['objet']]);
                }
                if($prelevement['type'] == "element echeance" and !$probleme) {
                    $probleme = new Probleme();
                    $probleme->setPeriode($this->periode);
                    $probleme->setContract($this->contract);
                    $probleme->setMotif('Solde insuffisant !');
                    // if($prelevement['type'] == "element echeance") {
                    $probleme->setElementEcheance($prelevement['objet']);
                    // } else {
                    //     $probleme->setElementFixe($prelevement['objet']);
                    // }
                    $this->em->persist($probleme);
                }
            } else {
                $this->salaireNetPayer -= $prelevement['objet']->getMontant();
                $bulletinDet = new TbulletinLg();
                $bulletinDet->setMontant($prelevement['objet']->getMontant());
                $bulletinDet->setSens($prelevement['objet']->getSens());
                $bulletinDet->setRubrique($prelevement['objet']->getRubrique());
                $bulletinDet->setBulletin($this->bulletin);
                $this->em->persist($bulletinDet);
                if($prelevement['type'] == "element echeance") {
                    $prelevement['objet']->setBulletin($this->bulletin);
                    $prelevement['objet']->setValider(true);
                }
            }
        }
    }
    public function getPeriode($code = null) {
        if($code === null) {
            $code = date('mY');
            // $code = '082023';
            $periode = $this->em->getRepository(Periode::class)->findOneBy(['code' => $code]);
        } else {
            $periode = $this->em->getRepository(Periode::class)->findOneBy(['code' => $code]);
        }

        if(!$periode) {
            $periode = new Periode();
            $periode->setCode($code);
            $periode->setAbreviation($code);
            $month = substr($code, 0, 2);
            $year = substr($code, -4);
            $periode->setDate(new \DateTime($year.'-'.$month.'-01'));
            $this->em->persist($periode);
            $this->em->flush();
        }

        return $periode;
    }  

    public function vacatairePaie($contract, $nombreJourTravails, $periode, $bordoreau) {
        $this->bordoreau = $bordoreau;
        
        $this->nombreJourTravails = $nombreJourTravails;
        $this->contract = $contract;
        $this->periode = $periode;

        $rubriqueSalaireBase = $this->em->getRepository(Prubrique::class)->find(1);
        $baremeBruteSalaireDeBase = $this->em->getRepository(PbaremeBrute::class)->findOneBy(['bareme' => $contract->getBareme(), 'rubrique' => $rubriqueSalaireBase]);
        
        $this->salaireBaseTheorique = 26 * $baremeBruteSalaireDeBase->getTauxPs();
        $this->salaireBase = $nombreJourTravails * $baremeBruteSalaireDeBase->getTauxPs();

        $this->sommeCotisation = 0;
        $this->sommeCotisationTheorique = 0;
        $this->irNet = 0;
        $this->irNetTheorique = 0;
        $this->salaireBrute = 0;
        $this->salaireNetTheorique = $this->salaireBaseTheorique;
        $this->sommePrelevement = 0;
        $this->salaireBruteImposable = $this->salaireBrute = $this->salaireBase;
        $this->salaireImposableTheorique = 0;
        $this->salaireNetImposable = 0;
        $this->salaireNetImposableTheorique= 0;
        $this->prelevemtents = [];
       

        $this->setBulletinCab();
      
        // salaire de base 
        
        $bulletinDet = new TbulletinLg();                
        $bulletinDet->setMontant($this->salaireBase);            
        $bulletinDet->setBulletin($this->bulletin);
        $bulletinDet->setRubrique($rubriqueSalaireBase);
        $bulletinDet->setSens(1);
        
        $this->em->persist($bulletinDet);
        
        // primes
        $this->calculPrime();
        
        // prime anciennete
        // $this->calculAnciennete();        
        
        // prelevement IR
        
        // Elements Fixe
        $this->calculElementFixe();


        $this->calculPrelevementIr(0.3);
        
        // elements echeance
        $this->calculElementEcheance();

        $this->salaireNetPayer = $this->salaireBrute - ($this->sommeCotisation + $this->irNet);
        $this->salaireNetTheorique -= ($this->sommeCotisationTheorique + $this->irNetTheorique);
        $this->salaireNetTheorique = round($this->salaireNetTheorique,2);

        // prelevement echeance et fixe
        $this->removePrelevementFromSalaireNet();
        
        
        // prelevement
        $this->calculPrelevement();
        
        // dd('hi');
        // allocation

        $this->calculAllocation();
        

        $bulletinDet = new TbulletinLg();
        $bulletinDet->setMontant($this->salaireNetPayer);
        $bulletinDet->setSens(1);
        $bulletinDet->setRubrique(
            $this->em->getRepository(Prubrique::class)->find(5)
        );
        $bulletinDet->setBulletin($this->bulletin);

        $this->em->persist($bulletinDet);


        $this->em->flush();
    
    
       
        // dd($contract->getActiveElementFixes(), $salaireNetImposable, $cotisation);

        return 'good';

    
           
    }
    public function chefPolePaie($contract, $nombreJourTravails, $periode, $bordoreau) {
        $this->bordoreau = $bordoreau;
        
        $this->nombreJourTravails = $nombreJourTravails;
        $this->contract = $contract;
        $this->periode = $periode;

        $rubriqueSalaireBase = $this->em->getRepository(Prubrique::class)->find(1);
        $baremeBruteSalaireDeBase = $this->em->getRepository(PbaremeBrute::class)->findOneBy(['bareme' => $contract->getBareme(), 'rubrique' => $rubriqueSalaireBase]);
        
        $this->salaireBaseTheorique = 26 * $baremeBruteSalaireDeBase->getTauxPs();
        $this->salaireBase = $nombreJourTravails * $baremeBruteSalaireDeBase->getTauxPs();

        $this->sommeCotisation = 0;
        $this->sommeCotisationTheorique = 0;
        $this->irNet = 0;
        $this->irNetTheorique = 0;
        $this->salaireBrute = 0;
        $this->salaireNetTheorique = $this->salaireBaseTheorique;
        $this->sommePrelevement = 0;
        $this->salaireBruteImposable = $this->salaireBrute = $this->salaireBase;
        $this->salaireImposableTheorique = 0;
        $this->salaireNetImposable = 0;
        $this->salaireNetImposableTheorique= 0;
        $this->prelevemtents = [];


        $this->setBulletinCab();

        // salaire de base 
        
        $bulletinDet = new TbulletinLg();                
        $bulletinDet->setMontant($this->salaireBase);            
        $bulletinDet->setBulletin($this->bulletin);
        $bulletinDet->setRubrique($rubriqueSalaireBase);
        $bulletinDet->setSens(1);
        
        $this->em->persist($bulletinDet);
        
        // primes
        $this->calculPrime();
        
        // Elements Fixe
        $this->calculElementFixe();

        // prelevement Ir
        $this->calculPrelevementIr(0.17);
        
        // elements echeance
        $this->calculElementEcheance();

        $this->salaireNetPayer = $this->salaireBrute - ($this->sommeCotisation + $this->irNet);
        $this->salaireNetTheorique -= ($this->sommeCotisationTheorique + $this->irNetTheorique);
        $this->salaireNetTheorique = round($this->salaireNetTheorique,2);

        // prelevement echeance et fixe
        $this->removePrelevementFromSalaireNet();
        
        // prelevement
        $this->calculPrelevement();
        
        // dd('hi');
        // allocation
    

        $this->calculAllocation();
        

        $bulletinDet = new TbulletinLg();
        $bulletinDet->setMontant($this->salaireNetPayer);
        $bulletinDet->setSens(1);
        $bulletinDet->setRubrique(
            $this->em->getRepository(Prubrique::class)->find(5)
        );
        $bulletinDet->setBulletin($this->bulletin);

        $this->em->persist($bulletinDet);


        $this->em->flush();
    
    
       
        // dd($contract->getActiveElementFixes(), $salaireNetImposable, $cotisation);

        return 'good';

    
           
    }
    public function stagairePaie($contract, $nombreJourTravails, $periode, $bordoreau) {
        
        $this->nombreJourTravails = $nombreJourTravails;
        $this->contract = $contract;
        $this->periode = $periode;
        $this->bordoreau = $bordoreau;


        $rubriqueSalaireBase = $this->em->getRepository(Prubrique::class)->find(1);
        $baremeBruteSalaireDeBase = $this->em->getRepository(PbaremeBrute::class)->findOneBy(['bareme' => $contract->getBareme(), 'rubrique' => $rubriqueSalaireBase]);
        
        $this->salaireBaseTheorique = 26 * $baremeBruteSalaireDeBase->getTauxPs();
        $this->salaireBase = $nombreJourTravails * $baremeBruteSalaireDeBase->getTauxPs();

        $this->sommeCotisation = 0;
        $this->sommeCotisationTheorique = 0;
        $this->irNet = 0;
        $this->irNetTheorique = 0;
        $this->salaireBrute = 0;
        $this->salaireNetTheorique = $this->salaireBaseTheorique;
        $this->sommePrelevement = 0;
        $this->salaireBruteImposable = $this->salaireBrute = $this->salaireBase;
        $this->salaireImposableTheorique = 0;
        $this->salaireNetImposable = 0;
        $this->salaireNetImposableTheorique= 0;
        $this->prelevemtents = [];


        $this->setBulletinCab();

        // salaire de base 
        
        $bulletinDet = new TbulletinLg();                
        $bulletinDet->setMontant($this->salaireBase);            
        $bulletinDet->setBulletin($this->bulletin);
        $bulletinDet->setRubrique(
            $this->em->getRepository(Prubrique::class)->find(65)
        );
        $bulletinDet->setSens(1);
        
        $this->em->persist($bulletinDet);
        
        // primes
        $this->calculPrime();
        
        // Elements Fixe
        $this->calculElementFixe();
        
        // elements echeance
        $this->calculElementEcheance();


        $this->salaireNetPayer = $this->salaireBrute - ($this->sommeCotisation + $this->irNet);
        $this->salaireNetTheorique -= ($this->sommeCotisationTheorique + $this->irNetTheorique);
        $this->salaireNetTheorique = round($this->salaireNetTheorique,2);

        // prelevement echeance et fixe
        $this->removePrelevementFromSalaireNet();
        
        // prelevement
        $this->calculPrelevement();
        
        // dd('hi');
        // allocation



        $this->calculAllocation();
        

        $bulletinDet = new TbulletinLg();
        $bulletinDet->setMontant($this->salaireNetPayer);
        $bulletinDet->setSens(1);
        $bulletinDet->setRubrique(
            $this->em->getRepository(Prubrique::class)->find(68)
        );
        $bulletinDet->setBulletin($this->bulletin);

        $this->em->persist($bulletinDet);


        $this->em->flush();
    
    
       
        // dd($contract->getActiveElementFixes(), $salaireNetImposable, $cotisation);

        return 'good';

    
           
    }
}