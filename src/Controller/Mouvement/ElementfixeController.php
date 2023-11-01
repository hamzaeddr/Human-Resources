<?php

namespace App\Controller\Mouvement;

use App\Entity\LContract;
use App\Entity\Prubrique;
use App\Controller\ApiController;
use App\Entity\LelementFixe;
use App\Service\CalculPaieService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/mouvement/fixe')]

class ElementfixeController extends AbstractController
{
    private $em;
    private $api;
    private $calculPaieService;
    public function __construct(ManagerRegistry $doctrine, CalculPaieService $calculPaieService, ApiController $api)
    {
        $this->em = $doctrine->getManager();
        $this->calculPaieService = $calculPaieService;
        $this->api = $api;
        
    }
    #[Route('/', name: 'app_mouvement_fixe')]
    public function index(Request $request): Response
    {
        $dossier = $request->getSession()->get('dossier');
        $operations = $this->api->check($this->getUser(), 'app_mouvement_fixe', $this->em, $request);
        if(!is_array($operations)) {
            return $this->redirectToRoute('app_site');  
        }elseif(count($operations) == 0) {
            return $this->render('includes/404.html.twig');
        }
        $contracts = $this->em->getRepository(LContract::class)->findBy(['dossier' => $dossier, 'active' => true]);
        $elements = $this->em->getRepository(Prubrique::class)->findBy(['sens' => [1, -1], 'fixe' => true]);
        
        return $this->render('mouvement/elementfixe/index.html.twig', [
            'elements' => $elements,
            'contracts' => $contracts,
            'operations' => $operations,
        ]);
    }
    #[Route('/app_mouvement_fixe_insert', name: 'app_mouvement_fixe_insert', options:['expose' => true])]
    public function app_mouvement_fixe_insert(Request $request): Response
    {
        $fixes = json_decode($request->get('fixes'));
        foreach ($fixes as $key => $fixe) {
            $contract = $this->em->getRepository(LContract::class)->find($fixe->employe->contract_id);
            $rubrique = $this->em->getRepository(Prubrique::class)->find($fixe->element->id);
            $elementFixe = $this->em->getRepository(LelementFixe::class)->findOneBy(['contract' => $contract, 'rubrique' => $rubrique, 'active' => true]);
            if($elementFixe) {
                return new JsonResponse('Cette combinaison existait déjà', 500);
            }
            $elementFixe = new LelementFixe();
            $elementFixe->setContract($contract);
            $elementFixe->setRubrique($rubrique);
            $elementFixe->setUserCreated($this->getUser());
            $elementFixe->setSens($fixe->sens);
            $elementFixe->setMontant($fixe->montant);

            $this->em->persist($elementFixe);
        }

        $this->em->flush();

        return new JsonResponse('Bien enregistrer');
    }
    #[Route('/app_mouvement_fixe_statut/{element}/{statut}', name: 'app_mouvement_fixe_statut', options:['expose' => true])]
    public function app_mouvement_fixe_statut(LelementFixe $element, $statut): Response
    {
        $element->setActive($statut == 0 ? false : true);

        $this->em->flush();

        return new JsonResponse('Bien enregistrer');
    }
    #[Route('/app_mouvement_fixe_list', name: 'app_mouvement_fixe_list', options: ['expose' => true])]
    public function app_mouvement_fixe_list(Request $request): Response
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
        ->select('p.id, c.id as contract_id, p.created as created,emp.nom, emp.prenom, r.designation as rubrique, p.montant, p.sens, p.active')
        ->from(LelementFixe::class, 'p')
        ->innerJoin('p.contract', 'c')
        ->innerJoin('p.rubrique', 'r')
        ->innerJoin('c.employe', 'emp')
        ->innerJoin('c.dossier', 'd')
        ->andWhere('d = :dossier')
        ->setParameter('dossier', $dossier)
        ;
      
        if (!empty($search)) {
            $queryBuilder->andWhere('(p.id LIKE :search OR emp.nom LIKE :search OR emp.prenom LIKE :search OR r.designation LIKE :search)')
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
        ->from(LelementFixe::class, 'b')
        ->innerJoin('b.contract', 'c')
        ->innerJoin('c.dossier', 'd')
        ->andWhere('d = :dossier')
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
