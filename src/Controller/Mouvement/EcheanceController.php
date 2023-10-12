<?php

namespace App\Controller\Mouvement;

use App\Entity\LContract;
use App\Entity\Prubrique;
use App\Controller\ApiController;
use App\Entity\LElementEcheance;
use App\Entity\Pbareme;
use App\Entity\PbaremeBrute;
use App\Service\CalculPaieService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/mouvement/echeance')]

class EcheanceController extends AbstractController
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
    #[Route('/', name: 'app_mouvement_echeance')]
    public function index(Request $request): Response
    {
        $dossier = $request->getSession()->get('dossier');
        $operations = $this->api->check($this->getUser(), 'app_mouvement_echeance', $this->em, $request);
        if(!is_array($operations)) {
            return $this->redirectToRoute('app_site');  
        }elseif(count($operations) == 0) {
            return $this->render('includes/404.html.twig');
        }
        $contracts = $this->em->getRepository(LContract::class)->findBy(['dossier' => $dossier, 'active' => true]);
        $elements = $this->em->getRepository(Prubrique::class)->findBy(['sens' => [1, -1]]);
        
        return $this->render('mouvement/echeance/index.html.twig', [
            'contracts' => $contracts,
            'elements' => $elements,
            'operations' => $operations,
        ]);
    }
    #[Route('/app_mouvement_echeance_get_base/{bareme}', name: 'app_mouvement_echeance_get_base', options:['expose' => true])]
    public function app_mouvement_echeance_get_base(Pbareme $bareme): Response
    {
        $rubrique = $this->em->getRepository(Prubrique::class)->find(1);
        $baremebrute = $this->em->getRepository(PbaremeBrute::class)->findOneBy(['bareme' => $bareme, 'rubrique' => $rubrique]);
        if(!$baremebrute) {
            return new JsonResponse('Bareme introuvable veuillez contacter l\'administrateur !', 500);
        }

        return new JsonResponse($baremebrute->getTauxPs());
    }
    #[Route('/app_mouvement_echeance_insert', name: 'app_mouvement_echeance_insert', options:['expose' => true])]
    public function app_mouvement_echeance_insert(Request $request): Response
    {
        $echeances = json_decode($request->get('echeances'));
        foreach ($echeances as $key => $echeance) {

            $periode = $this->calculPaieService->getPeriode($echeance->periode);

            $elementEcheance = new LElementEcheance();
            $elementEcheance->setContract(
                $this->em->getRepository(LContract::class)->find($echeance->employe->contract_id)
            );
            $elementEcheance->setRubrique(
                $this->em->getRepository(Prubrique::class)->find($echeance->element->id)
            );
            $elementEcheance->setDateEcheance($periode->getDate());
            $elementEcheance->setPeriode($periode);
            $elementEcheance->setSens($echeance->sens);
            $elementEcheance->setMontant($echeance->montant);
            $elementEcheance->setUserCreated($this->getUser());


            $this->em->persist($elementEcheance);
        }

        $this->em->flush();

        return new JsonResponse('Bien enregistrer');

    }
    #[Route('/app_mouvement_echeance_list', name: 'app_mouvement_echeance_list', options: ['expose' => true])]
    public function app_mouvement_echeance_list(Request $request): Response
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
        ->select('p.id, c.id as contract_id, p.created as created,emp.nom, emp.prenom,periode.code as periode_code, r.designation as rubrique, p.montant, p.sens, p.active, p.valider, bul.code as bulletin_code, bul.id as bulletin_id')
        ->from(LElementEcheance::class, 'p')
        ->innerJoin('p.contract', 'c')
        ->leftJoin('p.bulletin', 'bul')
        ->innerJoin('p.periode', 'periode')
        ->innerJoin('p.rubrique', 'r')
        ->innerJoin('c.employe', 'emp')
        ->innerJoin('c.dossier', 'd')
        ->andWhere('d = :dossier')
        ->setParameter('dossier', $dossier)
        ;
      
        if (!empty($search)) {
            $queryBuilder->andWhere('(p.id LIKE :search OR emp.nom LIKE :search OR emp.prenom LIKE :search OR r.designation LIKE :search OR periode.code LIKE :search OR bul.code LIKE :search)')
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
        ->from(LElementEcheance::class, 'b')
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
