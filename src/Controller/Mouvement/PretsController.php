<?php

namespace App\Controller\Mouvement;

use App\Entity\LContract;
use App\Entity\Prubrique;
use App\Controller\ApiController;
use App\Entity\PDossier;
use App\Entity\PPiece;
use App\Entity\PPrelevement;
use App\Entity\PPrelevementLg;
use App\Service\CalculPaieService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/mouvement/prets')]
class PretsController extends AbstractController
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
    
    #[Route('/', name: 'app_mouvement_prets')]
    public function index(Request $request): Response
    {
        $dossier = $request->getSession()->get('dossier');
        $operations = $this->api->check($this->getUser(), 'app_mouvement_prets', $this->em, $request);
        if(!is_array($operations)) {
            return $this->redirectToRoute('app_site');  
        }elseif(count($operations) == 0) {
            return $this->render('includes/404.html.twig');
        }
        $contracts = $this->em->getRepository(LContract::class)->findContractAndRib($dossier);
        $elements = $this->em->getRepository(Prubrique::class)->findBy(['prets' => true]);

        return $this->render('mouvement/prets/index.html.twig', [
            'operations' => $operations,
            'elements' => $elements,
            'contracts' => $contracts,
        ]);
    }
    #[Route('/app_mouvement_prets_ajouter', name: 'app_mouvement_prets_ajouter', options: ['expose' => true])]
    public function app_mouvement_prets_ajouter(Request $request): Response
    {
        // dd($request);
        $dossier = $this->em->getRepository(PDossier::class)->find($request->getSession()->get('dossier'));
        $prets = json_decode($request->get('prets'));
            
        $prelevement = new PPrelevement();
        $prelevement->setDossier($dossier);
        $prelevement->setMotif($request->get('motif'));
        $prelevement->setPiece(
            $this->em->getRepository(PPiece::class)->find(7)
        );
        $prelevement->setRubrique(
            $this->em->getRepository(Prubrique::class)->find($request->get('element'))
        );
        $prelevement->setContract(
            $this->em->getRepository(LContract::class)->find($request->get('contract'))
        );
        $prelevement->setUserCreated($this->getUser());
        $prelevement->setMontant($request->get('montantpret'));
        $prelevement->setMontantEcheance($request->get('montantecheance'));
        $prelevement->setDateDebut(new \DateTime($request->get('periode').'-01'));
        $prelevement->setNombreMois(count($prets));

        $this->em->persist($prelevement);

        foreach ($prets as $key => $pret) {
            $prelevementDet = new PPrelevementLg();
            $prelevementDet->setPeriode(
                $this->calculPaieService->getPeriode($pret->periode)
            );
            $prelevementDet->setMontant($pret->montant);
            $prelevementDet->setPrelevement($prelevement);

            $this->em->persist($prelevementDet);
        }

        $this->em->flush();

        return new JsonResponse('Bien enregister!');

    }
    #[Route('/app_mouvement_prets_list', name: 'app_mouvement_prets_list', options: ['expose' => true])]
    public function app_mouvement_prets_list(Request $request): Response
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
        ->select('p.id, c.id as contract_id, p.code as code, p.created as created,emp.nom, emp.prenom, r.designation as rubrique, p.montant, p.nombreMois, p.motif')
        ->from(PPrelevement::class, 'p')
        ->innerJoin('p.contract', 'c')
        ->innerJoin('p.rubrique', 'r')
        ->innerJoin('c.employe', 'emp')
        ->innerJoin('p.dossier', 'd')
        ->andWhere('p.active = 1')
        ->andWhere('d = :dossier')
        ->setParameter('dossier', $dossier)
        ;
        // $results = $queryBuilder->getQuery()->getResult();
        // dd($results);

        // Apply search query
        // dd($queryBuilder);
        if (!empty($search)) {
            $queryBuilder->andWhere('(p.code LIKE :search OR emp.nom LIKE :search OR emp.prenom LIKE :search OR r.designation LIKE :search OR p.motif LIKE :search)')
                ->setParameter('search', "%$search%");
        }

        if (!empty($orderColumn)) {
            $queryBuilder->orderBy("$orderColumn", $orderDir);
        }

        // Paginate results
        $queryBuilder->setFirstResult($start)
            ->setMaxResults($length);

        $results = $queryBuilder->getQuery()->getResult();
        // dd($results);
        // foreach ($results as $key => $prelevement) {
        //     $results[$key]['DT_RowId'] = $prelevement['id'];
        //     $results[$key]['validate'] = count($);
        //     $results[$key]['salaire'] = $this->em->getRepository(LContract::class)->getNetAPaye($periode, $contract['id']);
        //     $results[$key]['problemes'] = $this->em->getRepository(Probleme::class)->checkIfTheresProblemes($periode, $contract['id']);
        // }
        
        // dd($results);
        $totalRecords = $this->em->createQueryBuilder()
        ->select('COUNT(b.id)')
        ->from(PPrelevement::class, 'b')
        ->andWhere('b.active = 1')
        ->andWhere('b.dossier = :dossier')
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

    #[Route('/app_mouvement_prets_detail/{prelevement}', name: 'app_mouvement_prets_detail', options: ['expose' => true])]
    public function app_mouvement_prets_detail(PPrelevement $prelevement): Response
    {
        
        $html = $this->renderView('mouvement/prets/includes/details.html.twig', [
            'prelevement' => $prelevement
        ]);

        return new JsonResponse($html);

    }
}
