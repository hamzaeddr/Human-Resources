<?php

namespace App\Controller\Tresorerie;

use App\Entity\PStatut;
use App\Entity\PBordereau;
use App\Controller\ApiController;
use App\Entity\Cab;
use App\Entity\Det;
use App\Entity\JournalBulletinLg;
use App\Entity\JournalPaieDossier;
use App\Entity\NaturePiece;
use App\Entity\PDossier;
use App\Entity\UaTechniqueDet;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


#[Route('/tresorerie/bordereau')]
class BordereauController extends AbstractController
{
    private $em;
    private $client;
    private $api;
    
    public function __construct(ManagerRegistry $doctrine, ApiController $api, HttpClientInterface $client)
    {
        $this->em = $doctrine->getManager();
        $this->api = $api;
        $this->client = $client;
        
    }
    #[Route('/', name: 'app_tresorerie_bordereau')]
    public function index(Request $request): Response
    {
        $operations = $this->api->check($this->getUser(), 'app_tresorerie_bordereau', $this->em, $request);
        if(!is_array($operations)) {
            return $this->redirectToRoute('app_site');  
        }elseif(count($operations) == 0) {
            return $this->render('includes/404.html.twig');
        }
        return $this->render('tresorerie/bordereau/index.html.twig', [
            'operations' => $operations
        ]);
    }
    #[Route('/app_tresorerie_bordereau_list', name: 'app_tresorerie_bordereau_list', options: ['expose' => true])]
    public function app_tresorerie_bordereau_list(Request $request): Response
    {
        $draw = $request->query->get('draw');
        $start = $request->query->get('start') ?? 0;
        $length = $request->query->get('length') ?? 10;
        $search = $request->query->all('search')["value"];
        $orderColumnIndex = $request->query->all('order')[0]['column'];
        $orderColumn = $request->query->all("columns")[$orderColumnIndex]['name'];
        $orderDir = $request->query->all('order')[0]['dir'] ?? 'asc';
        $queryBuilder = $this->em->createQueryBuilder()
        ->select('b.id, d.designation as dossier_designation, p.abreviation as periode, b.code, b.created, b.type, natureContract.designation, s.designation as statut , s.icon')
        ->from(PBordereau::class, 'b')
        ->innerJoin('b.statut', 's')
        ->innerJoin('b.periode', 'p')
        ->innerJoin('b.dossier', 'd')
        ->leftJoin('b.natureContract', 'natureContract')
        ->where('b.active = 1')
        ;
      
        if (!empty($search)) {
            $queryBuilder->andWhere('(b.id LIKE :search OR p.abreviation LIKE :search OR d.designation LIKE :search OR b.code LIKE :search OR b.type LIKE :search OR natureContract.designation LIKE :search OR s.designation LIKE :search)')
                ->setParameter('search', "%$search%");
        }

        if (!empty($orderColumn)) {
            $queryBuilder->orderBy("$orderColumn", $orderDir);
        }

        // Paginate results
        $queryBuilder->setFirstResult($start)
            ->setMaxResults($length);

        $results = $queryBuilder->getQuery()->getResult();
       
        
        $totalRecords = $this->em->createQueryBuilder()
        ->select('COUNT(b.id)')
        ->from(PBordereau::class, 'b')
        ->where('b.active = 1')
        ->getQuery()
        ->getSingleScalarResult();

        return new JsonResponse([
            'draw' => $draw,
            'recordsTotal' => $totalRecords,
            'recordsFiltered' =>$totalRecords,
            'data' => $results,
        ]);
    }
    #[Route('/app_tresorerie_bordereau_valider', name: 'app_tresorerie_bordereau_valider', options: ['expose' => true])]
    public function app_tresorerie_bordereau_valider(Request $request): Response
    {
        $bordereauIds = json_decode($request->get('bordereauIds'));
        // dd($bordereauIds);
        foreach ($bordereauIds as $key => $bordereauId) {
            $bordereau = $this->em->getRepository(PBordereau::class)->find($bordereauId);
            $bordereau->setStatut(
                $this->em->getRepository(PStatut::class)->find(3)
            );
        }

        $this->em->flush();

        return new JsonResponse("Bien enregistrer");

    }
    #[Route('/app_tresorerie_bordereau_devalider', name: 'app_tresorerie_bordereau_devalider', options: ['expose' => true])]
    public function app_tresorerie_bordereau_devalider(Request $request): Response
    {
        $bordereauIds = json_decode($request->get('bordereauIds'));
        // dd($bordereauIds);
        foreach ($bordereauIds as $key => $bordereauId) {
            $bordereau = $this->em->getRepository(PBordereau::class)->find($bordereauId);
            $bordereau->setStatut(
                $this->em->getRepository(PStatut::class)->find(2)
            );
        }

        $this->em->flush();

        return new JsonResponse("Bien enregistrer");

    }
    #[Route('/app_tresorerie_bordereau_integre', name: 'app_tresorerie_bordereau_integre', options: ['expose' => true])]
    public function app_tresorerie_bordereau_integre(Request $request): Response
    {
        $bordereaux = $this->em->getRepository(PBordereau::class)->findBy([
            'statut' => $this->em->getRepository(PStatut::class)->find(3)
        ]);
        if(count($bordereaux) == 0) {
            return new JsonResponse('Rien à intégrer', 500);
        }
        $groupements = $this->em->getRepository(PDossier::class)->getGroupement();
        $dossierRh = $this->em->getRepository(PDossier::class)->find(47);
    
        $cabs = [];
        foreach ($groupements as $key => $groupement) {
            $journals = $this->em->getRepository(JournalBulletinLg::class)->getCab($bordereaux, $groupement['groupement'], $dossierRh);
            foreach ($journals as $key => $journal) {
                array_push($cabs, $journal);          
            }
            if($groupement['groupement'] == 'FCZ') {
                $journalRegularisations = $this->em->getRepository(JournalBulletinLg::class)->getCabRegularisations($bordereaux, $groupement['groupement'], $dossierRh);
                foreach ($journalRegularisations as $key => $journal) {
                    array_push($cabs, $journal);          
                }
            }
        }

        return new JsonResponse('Please uncomment the code below this error message BordereauController at line 161', 500);

        // $response = $this->client->request('POST', $this->getParameter("api_input")."api/rh/new/cab", [
        //     'body' => [
        //         'cabs' => $cabs,
        //     ],
        //     'verify_peer' => false, 
        //     'verify_host' => false
        // ]);
        // // dd($response->getContent(false), $response->getStatusCode());
        // if($response->getStatusCode() == 200 and $response->getContent() == 'ok') {
        //     foreach ($bordereaux as $key => $bordereau) {
        //         $bordereau->setStatut(
        //             $this->em->getRepository(PStatut::class)->find(4)
        //         );
        //     }
    
        //     $this->em->flush();
        // }
       


        return new JsonResponse("Bien enregistrer");

    }


    public function insertIntoCabs($data, $uniqueId) {
        $montantInitial = 0;
        $cab = new Cab();
        $cab->setTypePiece(4);
        $cab->setAutreInformation($data['observation_cab']);
        $cab->setTypePaiement('virement');
        $cab->setIdSite($data['id_site']);
        $cab->setDescriptionSite($data['id_site']);
        $cab->setDescriptionPiece($data['type_bordereau']);
        $cab->setDevise('MAD');
        $cab->setDesigniationPiece('FACTURE '.$data['type_bordereau']);
        // $cab->setDescriptionGrptOps($data['type_bordereau']);
        $cab->setDateOperation(new \DateTime('now'));
        $cab->setDateCreationPiece(new \DateTime('now'));
        $cab->setDateInterf(new \DateTime('now'));
        $cab->setUniqueId($uniqueId);
        $cab->setNaturePiece(
            $this->em->getRepository(NaturePiece::class)->find($data['naturePiece'])
        );
        if($data['partenaireId'] == null) {
            $cab->setIdTierPiece($data['partenaireNatureContractId']);
        } else {
            $cab->setIdTierPiece($data['partenaireId']);
        }


        $this->em->persist($cab);

        foreach ($data['details'] as $key => $detail) {
            $det = new Det();
            $det->setCab($cab);
            $det->setRassembleurId($detail['article']);
            $det->setDescriptionRassembleur($detail['codeComptable'].'_'.$detail['rubrique_designation'] . ' : '.$detail['observation_operation'] . '('.$detail['rubrique_code'].')');
            $det->setMontantInitialRassembleur($detail['montant']);
            $det->setQuantiteRassembleur($detail['qte']);
            $montantInitial += (float)$detail['montant'] * (float)$detail['qte'];
            $det->setCompteComptable($detail['codeComptable']);
            if(array_key_exists('sens', $detail)) {
                $det->setSens($detail['sens']);
            }

            $this->em->persist($det);

            if(array_key_exists('personnels', $detail)) {
                foreach ($detail['personnels'] as $key => $personnel) {
                    $detTechnique = new UaTechniqueDet();
                    $detTechnique->setDet($det);
                    $detTechnique->setQuantite(1);
                    $detTechnique->setPrixUnitaire($personnel['montant']);
                    $detTechnique->setObservation($personnel['code']);
                    $detTechnique->setArticle($personnel['nom'] . ' ' .$personnel['prenom'] . '/'.$personnel['rib']);
                    $this->em->persist($detTechnique);
                }
            }
        }


       

        $cab->setMontantInitial(round($montantInitial, 2));

    }


}
