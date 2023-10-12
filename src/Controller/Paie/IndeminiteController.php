<?php

namespace App\Controller\Paie;

use App\Entity\Lrib;
use App\Entity\PPiece;
use App\Entity\PDevise;
use App\Entity\PDossier;
use App\Entity\LContract;
use App\Entity\PPaiement;
use App\Entity\Prubrique;
use App\Entity\Tbulletin;
use App\Entity\PBordereau;
use App\Entity\TbulletinLg;
use App\Controller\ApiController;
use App\Service\CalculPaieService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as Reader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

#[Route('/paie/indeminite')]

class IndeminiteController extends AbstractController
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

    #[Route('/', name: 'app_paie_indeminite')]
    public function index(Request $request): Response
    {
        $dossier = $request->getSession()->get('dossier');
        $operations = $this->api->check($this->getUser(), 'app_paie_indeminite', $this->em, $request);
        if(!is_array($operations)) {
            return $this->redirectToRoute('app_site');  
        }elseif(count($operations) == 0) {
            return $this->render('includes/404.html.twig');
        }
        $paiements = $this->em->getRepository(PPaiement::class)->findBy(['active' => true]);
        $devises = $this->em->getRepository(PDevise::class)->findBy(['active' => true]);
        $elements = $this->em->getRepository(Prubrique::class)->findBy(['indeminite' => true]);
        $contracts = $this->em->getRepository(LContract::class)->findContractAndRib($dossier);
        // dd($contracts);
        return $this->render('paie/indeminite/index.html.twig', [
            'operations' => $operations,
            'paiements' => $paiements,
            'devises' => $devises,
            'elements' => $elements,
            'contracts' => $contracts,
        ]);
    }
    #[Route('/app_paie_indeminite_add_rib', name: 'app_paie_indeminite_add_rib', options:['expose' => true])]
    public function app_paie_indeminite_add_rib(Request $request): Response
    {
        $dossier = $request->getSession()->get('dossier');

        $contract = $this->em->getRepository(LContract::class)->find($request->get('contract'));
        if(!preg_match('/^[0-9]{24}$/', $request->get('rib'))) {
            return new JsonResponse('RIB incorrect', 500);
        }
        
        $existRibActive = $this->em->getRepository(Lrib::class)->findOneBy(['contact_id' => $contract, 'active' => true]);
        if($existRibActive) {
            return new JsonResponse('RIB déja exist veuillez contacter l\'administrateur!', 500);
        }

        $rib = new Lrib();
        $rib->setDesignation($request->get('rib'));
        $rib->setContactId($contract);
        $rib->setCreated(new \DateTime());

        $this->em->persist($rib);

        $this->em->flush();

        $contracts = $this->em->getRepository(LContract::class)->findContractAndRib($dossier);
        $data = "<option selected value=''>Choix employe</option>";
        foreach ($contracts as $object) {

            $data .="<option data-rib='".$object['rib']."' data-name='".$object['nom']. " " .$object['prenom']."'  value='".$object['id']."'>".$object['nom']. " " .$object['prenom']."</option>";
         
        }

        return new JsonResponse(['rib' => $rib->getDesignation(), 'data' => $data]);
    }

    #[Route('/app_paie_indeminite_import', name: 'app_paie_indeminite_import', options: ['expose' => true])]
    public function app_paie_indeminite_import(Request $request): Response
    {
        // $dossier = $this->em->getRepository(PDossier::class)->find($request->get('dossier'));
        $reader = new Reader();
        $spreadsheet = $reader->load($request->files->get('file'));
        $worksheet = $spreadsheet->getActiveSheet();
        $spreadSheetArys = $worksheet->toArray();
        $dossier = $request->getSession()->get('dossier');

        unset($spreadSheetArys[0]);
        $array = [];
        // dd($spreadSheetArys);
        $count = 0;
        foreach ($spreadSheetArys as $key => $sheet) {
            $contract = $this->em->getRepository(LContract::class)->find($sheet[0]);
            if($contract->getDossier()->getId() != $dossier->getId()) {
                return new JsonResponse('Le contrat n\'est pas affecté à ce dossier on ligne '.($key + 1).' !', 500);
            }
            if(!$contract) {
                return new JsonResponse('Contrat introuvable on ligne '.($key + 1).' !', 500);
            }    

            $rib = $this->em->getRepository(Lrib::class)->findOneBy(['contact_id' => $contract, 'active' => true]);

            array_push($array, [
                'contract' => $contract->getId(),
                'name' => ucwords($contract->getEmploye()->getNom() . ' ' . $contract->getEmploye()->getPrenom()),
                'montant' => $sheet[3],
                'montantMad' => $sheet[4],
                'rib' => $rib ? $rib->getDesignation() : ''
            ]);
        }

        return new JsonResponse($array);
    }
    #[Route('/app_paie_indeminite_insert', name: 'app_paie_indeminite_insert', options: ['expose' => true])]
    public function app_paie_indeminite_insert(Request $request): Response
    {
        $dossier = $this->em->getRepository(PDossier::class)->find($request->getSession()->get('dossier'));
        $devise = $this->em->getRepository(PDevise::class)->find($request->get('devise'));
        $element = $this->em->getRepository(Prubrique::class)->find($request->get('element'));
        $paiement = $this->em->getRepository(PPaiement::class)->find($request->get('paiement'));
        $observation = $request->get('observation');
        $periode = $this->calculPaieService->getPeriode();
        
        $indeminites = json_decode($request->get('indeminites'));


        $netAPayer = $this->em->getRepository(Prubrique::class)->find(5);
        $divers = $this->em->getRepository(Prubrique::class)->find(68);
        
        $bordoreau = new PBordereau;
        $bordoreau->setPiece($this->em->getRepository(PPiece::class)->find(6));

        $this->em->persist($bordoreau);

        foreach($indeminites as $indeminite) {
            $contract = $this->em->getRepository(LContract::class)->find($indeminite->contract);
            
            $bulletin = new Tbulletin();
            $bulletin->setDossier($dossier);
            $bulletin->setDevise($devise);
            $bulletin->setPaiement($paiement);
            $bulletin->setObservation($observation);
            $bulletin->setBordereau($bordoreau);
            $bulletin->setContract($contract);
            $bulletin->setPeriode($periode);
            $bulletin->setPPiece(
                $this->em->getRepository(PPiece::class)->find(3)
            );

            $this->em->persist($bulletin);

          
            $bulletinDet = new TbulletinLg();
            $bulletinDet->setBulletin($bulletin);
            if($contract->getPnatureContract()->getType() == "permanent") {
                $bulletinDet->setRubrique($netAPayer);
            } else {
                $bulletinDet->setRubrique($divers);
            }
            $bulletinDet->setSens(1);
            $bulletinDet->setMontant($indeminite->montantMad);
            $bulletinDet->setMontantDevise($indeminite->montant);

            $this->em->persist($bulletinDet);
            
            $bulletinDet = new TbulletinLg();
            $bulletinDet->setBulletin($bulletin);
            $bulletinDet->setRubrique($element);
            $bulletinDet->setSens(1);
            $bulletinDet->setMontant($indeminite->montantMad);
            $bulletinDet->setMontantDevise($indeminite->montant);
            
            $this->em->persist($bulletinDet);
          


        }

        $bordoreau->setPeriode($periode);
        $bordoreau->setType('indeminite');
        $bordoreau->setPaiement($paiement);
        $bordoreau->setUserCreated($this->getUser());
        $bordoreau->setObservation($observation);
        $bordoreau->setDossier($dossier);

        $this->em->flush();

        return new JsonResponse('Bien Enregistrer!');
    }
    #[Route('/app_paie_indeminite_list', name: 'app_paie_indeminite_list', options: ['expose' => true])]
    public function app_paie_indeminite_list(Request $request): Response
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
        ->setParameter('type', 'indeminite')
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
        ->setParameter('type', 'indeminite')
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
}
