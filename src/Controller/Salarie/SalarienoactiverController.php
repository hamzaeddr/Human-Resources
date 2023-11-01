<?php

namespace App\Controller\Salarie;
use App\Entity\Diplome;
use App\Entity\Pemploye;
use App\Entity\Pfonction;
use App\Controller\ApiController;
use App\Entity\LContract;
use App\Entity\LmatriculationCoti;
use App\Entity\Pbareme;
use App\Entity\PnatureContract;
use App\Entity\PNaturesalarieCab;
use App\Entity\PsituationFamiliale;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/salarie/salarienoactiver')]

class SalarienoactiverController extends AbstractController
{
    private $em;
    private $api;
    
    public function __construct(ManagerRegistry $doctrine, ApiController $api)
    {
        $this->em = $doctrine->getManager();
        $this->api = $api;
        
    }
    #[Route('/', name: 'app_salarie_salarienoactiver')]
    public function index(Request $request): Response
    {
        $operations = $this->api->check($this->getUser(), 'app_salarie_salarie', $this->em, $request);
        if(!$operations) {
            return new AccessDeniedException();
        }
        $natureSalarieCabs = $this->em->getRepository(PNaturesalarieCab::class)->findAll();
        $situationFamiliales = $this->em->getRepository(PsituationFamiliale::class)->findAll();
        $fonctions = $this->em->getRepository(Pfonction::class)->findAll();
        // // $pemployes = $this->em->getRepository(Pemploye::class)->findBy(['active'=> 0]);
        // $pemployes = $this->em->getRepository(Pemploye::class)->findEmployeesNotInLContract();
        // // dd($pemployes);
        $naturecontract = $this->em->getRepository(PnatureContract::class)->findAll();
        $pbaremes = $this->em->getRepository(Pbareme::class)->findAll();
        // $contract = $this->em->getRepository(LContract::class)->findBy(['active'=> 1]);
        
        return $this->render('salarie/salarienoactiver/index.html.twig', [
            'operations' => $operations,
            'natureSalarieCabs' => $natureSalarieCabs,
            'situationFamiliales' => $situationFamiliales,
            'fonctions' => $fonctions,
            // 'pemployes' => $pemployes,
            // 'contracts' => $contract,
            'naturecontract' => $naturecontract,
            'baremes' => $pbaremes,
        ]);  
    }

    #[Route('/app_salarienoactive_list', name: 'app_salarienoactive_list', options: ['expose' => true])]
    public function app_salarie_salarie_list(Request $request): Response
    {
        
        $draw = $request->query->get('draw');
        $start = $request->query->get('start') ?? 0;
        $length = $request->query->get('length') ?? 10;
        $search = $request->query->all('search')["value"];
        $orderColumnIndex = $request->query->all('order')[0]['column'];
        $orderColumn = $request->query->all("columns")[$orderColumnIndex]['name'];
        $orderDir = $request->query->all('order')[0]['dir'] ?? 'asc';
        $dossier = $request->getSession()->get('dossier');
        // dd($dossier);

        // $qb = $this->createQueryBuilder('pe');
        $qb = $this->em->createQueryBuilder();
   
        $subQuery = $this->em->createQueryBuilder();
        $subQuery
            ->select('employe.id')
            ->from('App\Entity\LContract', 'lcontract')
            ->innerJoin('lcontract.employe', 'employe');
 
    
        // $qb
        //     ->where($qb->expr()->notIn('pe.id', $subQuery->getDQL()))
        //     ->orderBy('pe.id', 'ASC');
    
        // return $qb->getQuery()->getResult();
        
        // $queryBuilder = $this->em->createQueryBuilder()
       $qb ->select('p.id as employe_id, p.email as nature, p.sexe as contract,p.cin, p.nom as nom, p.matricule as matricule , p.prenom')
        ->from(Pemploye::class, 'p')   
        ->where($qb->expr()->notIn('p.id', $subQuery->getDQL()))
        ->orderBy('p.id', 'ASC');

        if (!empty($search)) {
            $qb->andWhere('(p.cin LIKE :search OR c.code LIKE :search OR p.matricule LIKE :search OR  p.nom LIKE :search OR p.prenom LIKE :search)')
                ->setParameter('search', "%$search%");
        }

        if (!empty($orderColumn)) {
            $qb->orderBy("$orderColumn", $orderDir);
        }

        // Paginate results
        $qb->setFirstResult($start)
            ->setMaxResults($length);

        $results = $qb->getQuery()->getResult();
    
        
        // dd($results);
        $totalRecords = $this->em->createQueryBuilder()
        ->select('COUNT(p.id)')
        ->from(Pemploye::class, 'p')
        ->where($qb->expr()->notIn('p.id', $subQuery->getDQL()))
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
