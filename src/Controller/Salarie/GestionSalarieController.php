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

#[Route('/salarie/salarie')]
class GestionSalarieController extends AbstractController
{
    private $em;
    private $api;
    
    public function __construct(ManagerRegistry $doctrine, ApiController $api)
    {
        $this->em = $doctrine->getManager();
        $this->api = $api;
        
    }
    #[Route('/', name: 'app_salarie_salarie' , options:['expose' => true])]
    public function index(Request $request): Response
    {
        $operations = $this->api->check($this->getUser(), 'app_salarie_salarie', $this->em, $request);
        if(!$operations) {
            return new AccessDeniedException();
        }
        $natureSalarieCabs = $this->em->getRepository(PNaturesalarieCab::class)->findAll();
        $situationFamiliales = $this->em->getRepository(PsituationFamiliale::class)->findAll();
        $fonctions = $this->em->getRepository(Pfonction::class)->findAll();     
        $pemployes = $this->em->getRepository(Pemploye::class)->findAll();
        $naturecontract = $this->em->getRepository(PnatureContract::class)->findAll();
        // dd($naturecontract);:
        $pbaremes = $this->em->getRepository(Pbareme::class)->findAll();

        $contract = $this->em->getRepository(LContract::class)->findBy(['active'=> 1]);
        
        return $this->render('salarie/gestion_salarie/index.html.twig', [
            'operations' => $operations,
            'natureSalarieCabs' => $natureSalarieCabs,
            'situationFamiliales' => $situationFamiliales,
            'fonctions' => $fonctions,
            'pemployes' => $pemployes,
            'contracts' => $contract,
            'naturecontract' => $naturecontract,
            'baremes' => $pbaremes
        ]);
    } 

    #[Route('/app_salarie_salarie_list', name: 'app_salarie_salarie_list', options: ['expose' => true])]
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

        $queryBuilder = $this->em->createQueryBuilder()
        ->select('p.id as employe_id, n.designation as nature, c.code as contract,p.cin, p.nom as nom, p.matricule as matricule , p.prenom')
        ->from(Pemploye::class, 'p')
        ->innerJoin('p.contracts', 'c')
        ->innerJoin('c.pnatureContract', 'n')
        ->Where('c.active = 1')
        ->andWhere('c.dossier = :dossier')
        ->setParameter('dossier', $dossier);

        if (!empty($search)) {
            $queryBuilder->andWhere('(p.cin LIKE :search OR c.code LIKE :search OR p.matricule LIKE :search OR  p.nom LIKE :search OR p.prenom LIKE :search)')
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
        $totalRecords = $this->em->createQueryBuilder()
        ->select('COUNT(p.id)')
        ->from(Pemploye::class, 'p')
        ->leftJoin('p.contracts', 'c')
        ->Where('c.active = 1')
        ->andWhere('c.dossier = :dossier')
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

    #[Route('/salarienoactive', name: 'app_salarie_salarie_noactive', options:['expose' => true])]
    public function salarienoactive(Request $request): Response
    {
        $operations = $this->api->check($this->getUser(), 'app_salarie_salarie', $this->em, $request);
        if(!$operations) {
            return new AccessDeniedException();
        }
        $natureSalarieCabs = $this->em->getRepository(PNaturesalarieCab::class)->findAll();
        $situationFamiliales = $this->em->getRepository(PsituationFamiliale::class)->findAll();
        $fonctions = $this->em->getRepository(Pfonction::class)->findAll();
        $pemployes = $this->em->getRepository(Pemploye::class)->findBy(['active'=> 0]);
        $naturecontract = $this->em->getRepository(PnatureContract::class)->findAll();
        $pbaremes = $this->em->getRepository(Pbareme::class)->findAll();
        $contract = $this->em->getRepository(LContract::class)->findBy(['active'=> 1]);
        
        return $this->render('salarie/gestion_salarie/index.html.twig', [
            'operations' => $operations,
            'natureSalarieCabs' => $natureSalarieCabs,
            'situationFamiliales' => $situationFamiliales,
            'fonctions' => $fonctions,
            'pemployes' => $pemployes,
            'contracts' => $contract,
            'naturecontract' => $naturecontract,
            'baremes' => $pbaremes,
        ]);       

    }
    #[Route('/new', name: 'app_salarie_salarie_new', options:['expose' => true])]
    public function new(Request $request): Response
    {
        $employe = $this->em->getRepository(Pemploye::class)->New_employe($request);
        $employe_id = $employe->getId();
        $Diplomes = json_decode($request->get('diplomes'));
        $diplome = $this->em->getRepository(Diplome::class)->add_diplome(
            $Diplomes,$employe_id
        );
        return new JsonResponse($employe_id);        

    }
    #[Route('/contract', name: 'app_salarie_contract', options:['expose' => true])]
    public function contract(Request $request): Response
    {
        $contract = $this->em->getRepository(LContract::class)->add_contract($request);
        
     
        return new JsonResponse($contract);        

    }
    #[Route('/cnss', name: 'app_salarie_cnss', options:['expose' => true])]
    public function cnss(Request $request): Response
    {
      
        $LmatriculationCoti = $this->em->getRepository(LmatriculationCoti::class)->add_cnss($request);
        $LmatriculationCoti = $this->em->getRepository(LmatriculationCoti::class)->add_cimr($request);
        $LmatriculationCoti = $this->em->getRepository(LmatriculationCoti::class)->add_rib($request);
     
        return new JsonResponse('ok');        

    }

    #[Route('/plusinfo', name: 'app_salarie_plusinfo', options:['expose' => true])]
    public function plusinfo(Request $request): Response
    {
        $LmatriculationCoti = $this->em->getRepository(Pemploye::class)->add_plusinfo($request);
     
        return new JsonResponse('ok');        

    }

    #[Route('/contractaff', name: 'app_salarie_contractaff', options:['expose' => true])]
    public function contractaff(Request $request): Response
    {
        $operations = $this->api->check($this->getUser(), 'app_salarie_salarie', $this->em, $request);

        $employe = $request->get('employe_id');
        $queryBuilder = $this->em->createQueryBuilder()
        // n.designation')
        ->select('contract.id as id, contract.code, p.nom as nom, p.matricule as matricule , p.prenom,n.Abreviation,t.designation as type,n.designation')
        // ->select('contract.id as id, contract.code, p.nom as nom, p.matricule as matricule , p.prenom, n.type')
        ->from(LContract::class, 'contract')
        ->innerJoin('contract.employe', 'p')
        ->innerJoin('contract.pnatureContract', 'n')
        ->innerJoin('n.type', 't')
        ->Where('contract.active = 1')
        ->andWhere('contract.employe = :employe')
        ->setParameter('employe', $employe);
        $results = $queryBuilder->getQuery()->getResult();
        // dd($results);
        $data =  $this->render('salarie/gestion_salarie/modals/contract_detail.html.twig', [
            'contracts' => $results,'operations' => $operations
        ])->getContent();
        return new JsonResponse($data);        

    }

    #[Route('/contractinfo', name: 'app_salarie_contractinfo', options:['expose' => true])]
    public function contractinfo(Request $request): Response
    {
        $contract_id = $request->get('contract_id');
        $queryBuilder = $this->em->createQueryBuilder()
        ->select('contract.id as id,p.id as employeid,n.id as pnatureid,
                  n.Abreviation,n.designation,contract.date_fin,contract.date_debut,f.id as fonctionid,f.Designation as fonction,
                  contract.Salaireaffecte,d.Designation as dure,d.id as iddure,b.id as bareme,ds.id as dossier,contract.Salairegrille,contract.PPC,contract.RPC,b.Profil')
        ->from(LContract::class, 'contract')
        ->innerJoin('contract.employe', 'p')
        ->innerJoin('contract.pnatureContract', 'n')
        ->innerJoin('contract.fonction', 'f')
        ->innerJoin('n.pdureeContracts', 'd')
        ->innerJoin('contract.bareme', 'b')
        ->innerJoin('contract.dossier', 'ds')
        ->Where('contract.active = 1')
        ->andWhere('contract.id = :contractid')
        ->setParameter('contractid', $contract_id);
        $results = $queryBuilder->getQuery()->getResult();
        // dd($results);
        return new JsonResponse($results);        

    }

    #[Route('/updatecontract', name: 'app_salarie_updatecontract', options:['expose' => true])]
    public function updatecontract(Request $request): Response
    {

        $updatecontract = $this->em->getRepository(LContract::class)->update_contract($request);
     
        return new JsonResponse($updatecontract);  

    }

    #[Route('/getmatricule', name: 'app_salarie_get_cnss_cimr', options:['expose' => true])]
    public function getmatricule(Request $request): Response
    {

        $contract_id = $request->get('contract_id');
        $queryBuilder = $this->em->createQueryBuilder()
        ->select('contract.id as id,t.abreviation,t.id as type_id, l.code,l.date_affiliation,r.id as ribid,r.code as rib,l.id as cotisid')
        ->from(LContract::class, 'contract')
        ->leftJoin('contract.lmatriculationCotis', 'l')
        ->leftJoin('contract.lribs', 'r')
        ->leftJoin('l.type_id', 't')
        ->Where('contract.active = 1')
        ->andWhere('contract.id = :contractid')
        ->setParameter('contractid', $contract_id);
        $results = $queryBuilder->getQuery()->getResult();


        foreach ($results as &$result) {
            $result['date_affiliation'] = $result['date_affiliation']->format('Y-m-d');
        }
        return new JsonResponse($results);  

    }


    #[Route('/updatecotis', name: 'app_salarie_updatecotis', options:['expose' => true])]
    public function updatecotis(Request $request): Response
    {

        // dd($request->get('date_cnssup'));
        $updatecontract = $this->em->getRepository(LmatriculationCoti::class)->update_cnss_cimr($request);
     
        return new JsonResponse($updatecontract);  

    }

   

}
