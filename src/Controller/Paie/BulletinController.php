<?php

namespace App\Controller\Paie;

use App\Entity\PPiece;
use App\Entity\Periode;
use App\Entity\PDossier;
use App\Entity\Pemploye;
use App\Entity\Probleme;
use App\Entity\LContract;
use App\Entity\Tbulletin;
use App\Entity\PBordereau;
use App\Entity\LelementFixe;
use App\Entity\PPrelevementLg;
use App\Entity\LElementEcheance;
use App\Controller\ApiController;
use App\Entity\PArretTravailLg;
use App\Entity\PPaiement;
use App\Entity\PStatut;
use App\Service\CalculPaieService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/paie/bulletin')]
class BulletinController extends AbstractController
{
    private $em;
    private $calculPaieService;
    private $api;
    public function __construct(ManagerRegistry $doctrine, CalculPaieService $calculPaieService, ApiController $api)
    {
        $this->em = $doctrine->getManager();
        $this->api = $api;
        $this->calculPaieService = $calculPaieService;
        
        
    }
    #[Route('/', name: 'app_paie_bulletin')]
    public function index(Request $request): Response
    {
//         $now = new \DateTime();
// dd($now);

//         $dateAnciennete = new \DateTime('2021-09-16');
//         $nombreAnneeTravail = $dateAnciennete->diff($now)->y;
//         dd($nombreAnneeTravail);

//         $query = "SELECT * FROM `pbareme_brute`";
//         $stmt = $this->em->getConnection()->prepare($query);
//         $newstmt = $stmt->executeQuery();   
//         $result = $newstmt->fetchAll();
//         foreach($result as $a){

//             $bareme_id = $a['bareme_id'];
//             $nature = $a['nature_sal'];
//             $id_bareme_brute = $a['id'];

//             $query = "SELECT bareme FROM `sirh`.`pbareme` WHERE id =$bareme_id limit 1";

//             $stmt = $this->em->getConnection()->prepare($query);
//             $newstmt = $stmt->executeQuery();   
//             $result = $newstmt->fetchAll();
//             $bareme = $result[0]['bareme'];

//             $query = "SELECT * FROM `sirh`.`pbareme` WHERE bareme =$bareme";

//             $stmt = $this->em->getConnection()->prepare($query);
//             $newstmt = $stmt->executeQuery();   
//             $result2 = $newstmt->fetchAll();
//             // dd($nature,$result[0]['designation'],$result);
//                 foreach($result2 as $a){

//                     if ($nature == $a['designation']) {
//                         $new_id = $a['id'];
//                         $query = " UPDATE `pbareme_brute` SET `bareme_id`=$new_id WHERE id =$id_bareme_brute";

//                         $stmt = $this->em->getConnection()->prepare($query);
//                         $newstmt = $stmt->executeQuery();   
//                     }
                  

//                 }


//         }
// dd('ok');

        $operations = $this->api->check($this->getUser(), 'app_paie_bulletin', $this->em, $request);
        if(!is_array($operations)) {
            return $this->redirectToRoute('app_site');  
        }elseif(count($operations) == 0) {
            return $this->render('includes/404.html.twig');
        }
        return $this->render('paie/bulletin/index.html.twig', [
            'operations' => $operations,
        ]);
    }

    #[Route('/app_bulletin_employe_list/{periode}', name: 'app_bulletin_employe_list', options: ['expose' => true])]
    public function app_bulletin_employe_list(Request $request, $periode): Response
    {
        $date = new \DateTime($periode);
        $periode = $this->calculPaieService->getPeriode($date->format('mY'));
        
        $draw = $request->query->get('draw');
        $start = $request->query->get('start') ?? 0;
        $length = $request->query->get('length') ?? 10;
        $search = $request->query->all('search')["value"];
        $orderColumnIndex = $request->query->all('order')[0]['column'];
        $orderColumn = $request->query->all("columns")[$orderColumnIndex]['name'];
        $orderDir = $request->query->all('order')[0]['dir'] ?? 'asc';
        $dossier = $request->getSession()->get('dossier');
        $queryBuilder = $this->em->createQueryBuilder()
        ->select('b.code as bulletin, contract.id as id, p.nom as nom, p.matricule as matricule , p.prenom')
        ->from(LContract::class, 'contract')
        ->innerJoin('contract.employe', 'p')
        ->innerJoin('contract.bulletins', 'b')
        ->innerJoin('b.piece', 'piece')
        ->Where('contract.active = 1')
        ->andWhere('contract.dossier = :dossier')
        ->andWhere('b.dossier = :dossier')
        ->andWhere('b.periode = :periode')
        ->andWhere('piece.id = 1')
        ->setParameter('dossier', $dossier)
        ->setParameter('periode', $periode);

        if (!empty($search)) {
            $queryBuilder->andWhere('(b.code LIKE :search OR p.matricule LIKE :search OR  p.nom LIKE :search OR p.prenom LIKE :search)')
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
        foreach ($results as $key => $contract) {
            $results[$key]['DT_RowId'] = $contract['id'];
            $results[$key]['nombreJourTravails'] = 26 - $this->em->getRepository(PArretTravailLg::class)->getNombreJoursArret($contract['id'], $periode);
            $results[$key]['salaire'] = $this->em->getRepository(LContract::class)->getNetAPaye($periode, $contract['id']);
            $results[$key]['problemes'] = $this->em->getRepository(Probleme::class)->checkIfTheresProblemes($periode, $contract['id']);
        }
        
        // dd($results);
        $totalRecords = $this->em->createQueryBuilder()
        ->select('COUNT(d.id)')
        ->from(LContract::class, 'd')
        ->innerJoin('d.bulletins', 'bulletins')
        ->innerJoin('bulletins.piece', 'piece')
        ->Where('d.active = 1')
        ->andWhere('d.dossier = :dossier')
        ->andWhere('piece.id = 1')
        ->andWhere('bulletins.periode = :periode')
        ->setParameter('dossier', $dossier)
        ->setParameter('periode', $periode)
        ->getQuery()
        ->getSingleScalarResult();

        return new JsonResponse([
            'draw' => $draw,
            'recordsTotal' => $totalRecords,
            'recordsFiltered' =>$totalRecords,
            'data' => $results,
        ]);
    }
    #[Route('/app_bulletin_employe_calcul', name: 'app_bulletin_employe_calcul', options: ['expose' => true])]
    public function app_bulletin_employe_calcul(Request $request): Response
    {
        // dd($request);
        $dossier = $request->getSession()->get('dossier');
        $dossier = $this->em->getRepository(PDossier::class)->find($dossier);

        $periode = $this->calculPaieService->getPeriode();

        $piece = $this->em->getRepository(PPiece::class)->find(4); // paie

        $bordoreauIds = [];

        foreach($dossier->getActiveContracts() as $contract) {

           

            if(!$contract->getBareme()) {
                continue;
            }
            if($contract->getDateAnciennete() == null) {
                return new JsonResponse('Date anciennete introuvable !', 500, [], JSON_UNESCAPED_UNICODE);
            }
            // get nature contract 
            $natureContract = $contract->getPnatureContract();

            // get nombre jours travail
            $nombreJourTravails = 26 - $this->em->getRepository(PArretTravailLg::class)->getNombreJoursArret($contract->getId(), $periode);
            // dd($nombreJourTravails);
            $bordoreau = $this->em->getRepository(PBordereau::class)->findOneBy(['dossier' => $dossier, 'periode' => $periode, 'piece' => $piece, 'natureContract' => $natureContract]);
            if(!$bordoreau) {
                $bordoreau = new PBordereau;
                $bordoreau->setPiece($piece);
                $bordoreau->setPeriode($periode);
                $bordoreau->setNatureContract($natureContract);
                $bordoreau->setDossier($dossier);
                if($natureContract->getType() == "stagiaires") {
                    $bordoreau->setType('honoraire');
                } else {
                    $bordoreau->setType('paie');
                }
                $bordoreau->setPaiement(
                    $this->em->getRepository(PPaiement::class)->find(1)
                );
                $bordoreau->setStatut(
                    $this->em->getRepository(PStatut::class)->find(1)
                );
                $bordoreau->setUserCreated($this->getUser());

                $this->em->persist($bordoreau);
            }

            if(in_array($bordoreau->getStatut()->getId(), [3, 4])) { // valider , integrer
                return new JsonResponse('Vous ne pouvez pas modifier un bordereau déja ' . $bordoreau->getStatut()->getDesignation() . ' !', 500);
            }

            if($natureContract->getType() == "permanent") {
                $this->calculPaieService->permanentPaie($contract, $nombreJourTravails, $periode, $bordoreau);
            } else if ($natureContract->getType() == "vacataire") {
                $this->calculPaieService->vacatairePaie($contract, $nombreJourTravails, $periode, $bordoreau);
            } else if ($natureContract->getType() == "chefdepole") {
                $this->calculPaieService->chefPolePaie($contract, $nombreJourTravails, $periode, $bordoreau);
            } else if ($natureContract->getType() == "stagiaires") {
                $this->calculPaieService->stagairePaie($contract, $nombreJourTravails, $periode, $bordoreau);
            }
            

            array_push($bordoreauIds, $bordoreau->getId());
        }   

        $bordoreauIds = array_unique($bordoreauIds);

        $request->request->add(['bordoreauIds' => json_encode($bordoreauIds)]);

        return new JsonResponse('Bien enregistrer !', 200);
    }
    #[Route('/app_bulletin_employe_problemes/{contract}', name: 'app_bulletin_employe_problemes', options: ['expose' => true])]
    public function app_bulletin_employe_problemes(LContract $contract): Response
    {
        // dd($request);
        $periode = $this->calculPaieService->getPeriode();
        $problemes = $this->em->getRepository(Probleme::class)->findBy(['periode' => $periode, 'contract' => $contract, 'resoudre' => false]);
        $html = $this->renderView('paie/bulletin/includes/probleme.html.twig', ['problemes' => $problemes, 'contract' => $contract]);
        return new JsonResponse($html);
    }
    #[Route('/app_bulletin_employe_probleme_solves', name: 'app_bulletin_employe_probleme_solves', options: ['expose' => true])]
    public function app_bulletin_employe_probleme_solves(Request $request): Response
    {
        $problemes = json_decode($request->get('problemes'));
        foreach ($problemes as $key => $probleme) {
            $date = new \DateTime($probleme->periode);

            $probleme = $this->em->getRepository(Probleme::class)->find($probleme->id);
            $periode = $this->calculPaieService->getPeriode($date->format('mY'));

            if($probleme->getPrelevementLg()) {
                $prelevementLg = new PPrelevementLg();
                $prelevementLg->setPrelevement($probleme->getPrelevementLg()->getPrelevement());
                $prelevementLg->setMontant($probleme->getPrelevementLg()->getMontant());
                $prelevementLg->setPeriode($periode);

                $this->em->persist($prelevementLg);

                $probleme->getPrelevementLg()->setActive(false);
                
            } else if($probleme->getElementEcheance()) {
                $elementEcheance = new LElementEcheance();
                $elementEcheance->setContract($probleme->getElementEcheance()->getContract());
                $elementEcheance->setPeriode($periode);
                $elementEcheance->setRubrique($probleme->getElementEcheance()->getRubrique());
                $elementEcheance->setDateEcheance($date);
                $elementEcheance->setCreated(new \DateTime('now'));
                $elementEcheance->setSens($probleme->getElementEcheance()->getSens());
                $elementEcheance->setMontant($probleme->getElementEcheance()->getMontant());
                $elementEcheance->setMontant($probleme->getElementEcheance()->getMontant());

                $this->em->persist($elementEcheance);

                $probleme->getElementEcheance()->setActive(false);
            } 

            $probleme->setResoudre(true);
        }
        $this->em->flush();

        return new JsonResponse("Bien Enregistrer");
       
    }
    #[Route('/app_bulletin_employe_bulletin_details/{code}', name: 'app_bulletin_employe_bulletin_details', options: ['expose' => true])]
    public function app_bulletin_employe_bulletin_details($code): Response
    {
        // dd($request);
       $bulletin = $this->em->getRepository(Tbulletin:: class)->findOneBy(['code' => $code]);

       $html = $this->renderView('paie/bulletin/includes/bulletin_details.html.twig', ['bulletin' => $bulletin, 'bulletinLgs' => $bulletin->getActiveBulletinLgs()]);

       return new JsonResponse($html);
    }
    #[Route('/print/{bulletin}', name: 'app_bulletin_employe_bulletin_print', options: ['expose' => true])]
    public function app_bulletin_employe_bulletin_print(Tbulletin $bulletin): Response
    {
        dd($bulletin);


    }
}
