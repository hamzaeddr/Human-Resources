<?php

namespace App\Controller\Paie;

use App\Entity\Lrib;
use App\Entity\PPiece;
use App\Entity\PDevise;
use App\Entity\PDossier;
use App\Entity\Pemploye;
use App\Entity\LContract;
use App\Entity\PPaiement;
use App\Entity\Prubrique;
use App\Entity\Tbulletin;
use App\Entity\PBordereau;
use App\Entity\TbulletinLg;
use App\Entity\PnatureContract;
use App\Controller\ApiController;
use App\Service\CalculPaieService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as Reader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\AccessDeniedException;
use Mpdf\Mpdf;


#[Route('/paie/honoraire')]

class HonoraireController extends AbstractController
{
    private $em;
    private $calculPaieService;
    private $api;
    public function __construct(ManagerRegistry $doctrine, CalculPaieService $calculPaieService, ApiController $api)
    {
        $this->em = $doctrine->getManager();
        $this->calculPaieService = $calculPaieService;
        $this->api = $api;
        
    }
    #[Route('/', name: 'app_paie_honoraire')]
    public function index(Request $request): Response
    {
        $operations = $this->api->check($this->getUser(), 'app_paie_honoraire', $this->em, $request);
        if(!is_array($operations)) {
            return $this->redirectToRoute('app_site');  
        }elseif(count($operations) == 0) {
            return $this->render('includes/404.html.twig');
        }
        if(!is_array($operations)) {
            return $this->redirectToRoute('app_site');  
        }elseif(count($operations) == 0) {
            return $this->render('includes/404.html.twig');
        }
        $dossiers = $this->em->getRepository(PDossier::class)->findAll();
        $paiements = $this->em->getRepository(PPaiement::class)->findBy(['active' => true]);
        $devises = $this->em->getRepository(PDevise::class)->findBy(['active' => true]);
        $elementHonoraires = $this->em->getRepository(Prubrique::class)->findBy(['honoraire' => true]);
        return $this->render('paie/honoraire/index.html.twig', [
           'operations' => $operations,
           'paiements' => $paiements,
           'dossiers' => $dossiers,
           'devises' => $devises,
           'elementHonoraires' => $elementHonoraires,
        ]);
    }
    #[Route('/app_paie_honoraire_import/{paiement}/{nature}/{dossier}', name: 'app_paie_honoraire_import', options: ['expose' => true])]
    public function app_paie_honoraire_import(Request $request, PPaiement $paiement, $nature, PDossier $dossier): Response
    {
        // $dossier = $this->em->getRepository(PDossier::class)->find($request->get('dossier'));
        $reader = new Reader();
        $spreadsheet = $reader->load($request->files->get('file'));
        $worksheet = $spreadsheet->getActiveSheet();
        $spreadSheetArys = $worksheet->toArray();

        unset($spreadSheetArys[0]);
        $array = [];
        // dd($spreadSheetArys);
        $count = 0;
        foreach ($spreadSheetArys as $key => $sheet) {
            $sheet[10];
            // $natureContract = $this->em->getRepository(PnatureContract::class)->findOneBy(['type' => $nature, 'designation' => $sheet[10]]);
            $natureContract = $this->em->getRepository(PnatureContract::class)->findOneBy(['designation' => $sheet[10]]);
            // dd($natureContract);
            if(!$natureContract){
                return new JsonResponse('Nature introuvable on ligne '.($key + 1).' !', 500);
            }
            if($paiement->getDesignation() == "virement" && !preg_match('/^[0-9]{24}$/', $sheet[3])) {
                return new JsonResponse('RIB incorrect on ligne '.($key + 1).' !', 500);
            }
            $employe = $this->em->getRepository(Pemploye::class)->findOneBy(['cin' => $sheet[2]]);
            $newEmploye = false;
            if(!$employe) {
                $newEmploye = true;
                $employe = new Pemploye();
                $employe->setNom($sheet[0]);
                $employe->setPrenom($sheet[1]);
                $employe->setCin($sheet[2]);

                $this->em->persist($employe);
            }

            // dd($natureContract);
            // $rib = $this->em->getRepository(Lrib::class)->findOneBy(['designation' => $sheet[3], 'active' => true]);
            $newContract = false;
            $contract = $this->em->getRepository(LContract::class)->findOneBy(['employe' => $employe, 'pnatureContract' => $natureContract, 'dossier' => $dossier]);
            // dd($contract);
            if(!$contract) {
                $newContract = true;
                $contract = new LContract();
                $contract->setEmploye($employe);
                $contract->setDateDebut(new \DateTime('now'));
                $contract->setPnatureContract($natureContract);
                $contract->setDossier($dossier);

                $this->em->persist($contract);
                if($paiement->getDesignation() == "virement") {
                    $rib = new Lrib();
                    $rib->setDesignation($sheet[3]);
                    $rib->setContactId($contract);
                    $this->em->persist($rib);

                }
                
            } else {
                $rib = $this->em->getRepository(Lrib::class)->findOneBy(['contact_id' => $contract, 'active' => true]);
                if(!$rib and $paiement->getDesignation() == "virement") {
                    $rib = new Lrib();
                    $rib->setDesignation($sheet[3]);
                    $rib->setContactId($contract);
                } elseif($paiement->getDesignation() == "virement" && $rib && $rib->getDesignation() != $sheet[3]) {
                    return new JsonResponse('Vous avez un RIB non correspondante sur le même contrat on ligne '.($key + 1).' !', 500);
                }
            }

            $this->em->flush();
            $count++;


            $contracts = [];
            $empContracts = $this->em->getRepository(LContract::class)->findBy(['employe' => $employe, 'dossier' => $dossier, 'active' => true]);
            foreach ($empContracts as $key => $empContract) {
                array_push($contracts, [
                    'id' => $empContract->getId(),
                    'rib' => $this->em->getRepository(Lrib::class)->findOneBy(['contact_id' => $empContract, 'active' => true])->getDesignation(),
                ]);
            }


            array_push($array, [
                'id' => $count,
                'employe_id' => $employe->getId(),
                'nom' => $employe->getNom(),
                'prenom' => $employe->getPrenom(),
                'montant' => $sheet[4],
                'montant_mad' => $sheet[5],
                'brute' => $sheet[6],
                'brute_mad' => $sheet[7],
                'ir' => $sheet[8],
                'ir_mad' => $sheet[9],
                'nature' => $sheet[10],
                'contract_id' => $contract->getId(),
                'rib' => $rib->getDesignation(),
                'contracts' => $contracts,
                'newContract' => $newContract,
                'newEmploye' => $newEmploye,
            ]);
        }

        return new JsonResponse($array);
    }
    #[Route('/app_paie_honoraire_insert', name: 'app_paie_honoraire_insert', options: ['expose' => true])]
    public function app_paie_honoraire_insert(Request $request): Response
    {
        $dossier = $this->em->getRepository(PDossier::class)->find($request->get('dossier'));
        $devise = $this->em->getRepository(PDevise::class)->find($request->get('devise'));
        $element = $this->em->getRepository(Prubrique::class)->find($request->get('element'));
        $paiement = $this->em->getRepository(PPaiement::class)->find($request->get('paiement'));
        $observation = $request->get('observation');
        $periode = $this->calculPaieService->getPeriode();
        $honoraires = json_decode($request->get('honoraires'));
        $nature = $request->get('nature');

        $returnueIR = $this->em->getRepository(Prubrique::class)->find(43);
        $divers = $this->em->getRepository(Prubrique::class)->find(68);
        
        $bordoreau = new PBordereau;
        $bordoreau->setPiece($this->em->getRepository(PPiece::class)->find(5));

        $this->em->persist($bordoreau);

        foreach($honoraires as $honoraire) {

            $bulletin = new Tbulletin();
            $bulletin->setDossier($dossier);
            $bulletin->setDevise($devise);
            $bulletin->setPPiece(
                $this->em->getRepository(PPiece::class)->find(2)
            );
            $bulletin->setPaiement($paiement);
            $bulletin->setObservation($observation);
            $bulletin->setBordereau($bordoreau);
            $bulletin->setContract(
                $this->em->getRepository(LContract::class)->find($honoraire->selectedContract)
            );
            $bulletin->setPeriode($periode);

            $this->em->persist($bulletin);

          
            $bulletinDetRetunueIr = new TbulletinLg();
            $bulletinDetRetunueIr->setBulletin($bulletin);
            $bulletinDetRetunueIr->setRubrique($returnueIR);
            $bulletinDetRetunueIr->setSens(1);
            $bulletinDetRetunueIr->setMontant($honoraire->ir_mad);
            $bulletinDetRetunueIr->setMontantDevise($honoraire->ir);

            $this->em->persist($bulletinDetRetunueIr);
            
            $bulletinDetDivers = new TbulletinLg();
            $bulletinDetDivers->setBulletin($bulletin);
            $bulletinDetDivers->setRubrique($divers);
            $bulletinDetDivers->setSens(1);
            $bulletinDetDivers->setMontant($honoraire->montant_mad);
            $bulletinDetDivers->setMontantDevise($honoraire->montant);
            
            $this->em->persist($bulletinDetDivers);
            
            $bulletinDet = new TbulletinLg();
            $bulletinDet->setBulletin($bulletin);
            $bulletinDet->setRubrique($element);
            $bulletinDet->setSens(1);
            $bulletinDet->setMontant($honoraire->brute_mad);
            $bulletinDet->setMontantDevise($honoraire->brute);
            
            $this->em->persist($bulletinDet);


        }

        $bordoreau->setPeriode($periode);
        $bordoreau->setType('honoraire');
        $bordoreau->setPaiement($paiement);
        $bordoreau->setNature($nature);
        $bordoreau->setUserCreated($this->getUser());
        $bordoreau->setObservation($observation);
        $bordoreau->setDossier($dossier);

        $this->em->flush();

        return new JsonResponse('Bien Enregistrer!');
    }
    #[Route('/app_paie_honoraire_list', name: 'app_paie_honoraire_list', options: ['expose' => true])]
    public function app_paie_honoraire_list(Request $request): Response
    {
       
        $draw = $request->query->get('draw');
        $start = $request->query->get('start') ?? 0;
        $length = $request->query->get('length') ?? 10;
        $search = $request->query->all('search')["value"];
        $orderColumnIndex = $request->query->all('order')[0]['column'];
        $orderColumn = $request->query->all("columns")[$orderColumnIndex]['name'];
        $orderDir = $request->query->all('order')[0]['dir'] ?? 'asc';
        $dossier = $request->getSession()->get('dossier');

        $queryBuilder = $this->em->createQueryBuilder()
        ->select('b.id, periode.code as code_periode, b.created as created,b.observation, b.code, p.designation as paiement, d.designation as dossier')
        ->from(PBordereau::class, 'b')
        ->innerJoin('b.paiement', 'p')
        ->innerJoin('b.dossier', 'd')
        ->innerJoin('b.periode', 'periode')
        ->where('b.type = :type')
        ->andWhere('b.active = 1')
        ->andWhere('d = :dossier')
        ->setParameter('type', 'honoraire')
        ->setParameter('dossier', $dossier)
        ;
        // $results = $queryBuilder->getQuery()->getResult();
        // dd($results);

        // Apply search query
        // dd($queryBuilder);
        if (!empty($search)) {
            $queryBuilder->andWhere('(b.observation LIKE :search OR periode.code LIKE :search OR b.code LIKE :search OR d.designation LIKE :search)')
                ->setParameter('search', "%$search%");
        }

        if (!empty($orderColumn)) {
            $queryBuilder->orderBy("$orderColumn", $orderDir);
        }

        // Paginate results
        $queryBuilder->setFirstResult($start)
            ->setMaxResults($length);

        $results = $queryBuilder->getQuery()->getResult();
        
        // foreach ($results as $key => $contract) {
        //     $results[$key]['DT_RowId'] = $contract['id'];
        //     $results[$key]['nombreJourTravails'] = 26;
        //     $results[$key]['salaire'] = $this->em->getRepository(LContract::class)->getNetAPaye($periode, $contract['id']);
        //     $results[$key]['problemes'] = $this->em->getRepository(Probleme::class)->checkIfTheresProblemes($periode, $contract['id']);
        // }
        
        // dd($results);
        $totalRecords = $this->em->createQueryBuilder()
        ->select('COUNT(b.id)')
        ->from(PBordereau::class, 'b')
        ->where('b.type = :type')
        ->andWhere('b.active = 1')
         ->andWhere('b.dossier = :dossier')
        ->setParameter('type', 'honoraire')
        ->setParameter('dossier', $dossier)
        ->getQuery()
        ->getSingleScalarResult();

        return new JsonResponse([
            'draw' => $draw,
            'recordsTotal' => $totalRecords,
            'recordsFiltered' =>$totalRecords,
            'data' => $results,
        ]);
    }


/////////////////////////// Etét de sortie ///////////////////////////////////////////////////


#[Route('/pdf_honoraire', name: 'app_paie_honoraire_pdf', options: ['expose' => true])]
public function pdf_honoraire(Request $request): Response
{

    // $queryBuilder = $this->em->createQueryBuilder()
    // ->select('b.id, periode.code as code_periode, b.created as created,b.observation, b.code, p.designation as paiement, d.designation as dossier')
    // ->from(PBordereau::class, 'b')
    // ->innerJoin('b.paiement', 'p')
    // ->innerJoin('b.dossier', 'd')
    // ->innerJoin('b.periode', 'periode')
    // ->where('b.type = :type')
    // ->andWhere('b.active = 1')
    // ->andWhere('d = :dossier')
    // ->setParameter('type', 'honoraire')
    // ->setParameter('dossier', $dossier);

    // $results = $queryBuilder->getQuery()->getResult();

    // $html = $this->render("paie/honoraire/pdf/honoraire.html.twig", [
    $html = $this->render("paie/bulletin/pdf/bulletin.html.twig", [
      
    ])->getContent();

    $mpdf = new Mpdf([
        'mode' => 'utf-8',
        'margin_left' => '5',
        'margin_right' => '5',
        ]);
    $mpdf->SetTitle('Honoraire');
    // $mpdf->SetHTMLFooter(
    //     $this->render("planification/pdfs/footer.html.twig")->getContent()
    // );
    $mpdf->WriteHTML($html);
    $mpdf->Output("Honoraire", "I");
}


// }




}
