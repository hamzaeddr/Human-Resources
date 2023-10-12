<?php

namespace App\Controller\Mouvement;

use DateTime;
use App\Entity\PMotif;
use App\Entity\PPiece;
use App\Entity\PDossier;
use App\Entity\Pemploye;
use App\Entity\LContract;
use App\Entity\Prubrique;
use App\Entity\PPrelevement;
use App\Entity\PPrelevementLg;
use App\Controller\ApiController;
use App\Entity\PArretTravail;
use App\Entity\PArretTravailLg;
use App\Service\CalculPaieService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/mouvement/arret')]
class ArretController extends AbstractController
{
    private $em;
    private $calculPaieService;
    private $api;
    public function __construct(ManagerRegistry $doctrine , CalculPaieService $calculPaieService, ApiController $api)
    {
        $this->em = $doctrine->getManager();
        $this->calculPaieService = $calculPaieService;
        $this->api = $api;
        
    }
    #[Route('/', name: 'app_mouvement_arret', options:['expose' => true])]
    public function index(Request $request): Response
    {
  
       
        // $dossier = $request->getSession()->get('dossier');
        $operations = $this->api->check($this->getUser(), 'app_mouvement_arret', $this->em, $request);
        if(!is_array($operations)) {
            return $this->redirectToRoute('app_site');  
        }elseif(count($operations) == 0) {
            return $this->render('includes/404.html.twig');
        }
        $pmotif = $this->em->getRepository(PMotif::class)->findBy(['active' => 1 ]);
        $queryBuilder = $this->em->createQueryBuilder()
        ->select('contract.id as id, p.nom as nom, p.matricule as matricule , p.prenom')
        ->from(LContract::class, 'contract')
        ->innerJoin('contract.employe', 'p')
        ->innerJoin('contract.dossier', 'd')
        ->Where('contract.active = 1')
        ->andWhere('d.id = :dossier')
        ->setParameter('dossier', 2);        // $elements = $this->em->getRepository(Prubrique::class)->findBy(['sens' => [1, -1]]);
        $pemployes = $queryBuilder->getQuery()->getResult();

        return $this->render('mouvement/Arret/index.html.twig', [
            'motifs' => $pmotif,
            'operations' => $operations,
            'pemployes' => $pemployes,
        ]);
    }

    #[Route('/arret_traitement', name: 'app_mouvement_arret_traitement', options:['expose' => true])]
    public function arret_traitement(Request $request): Response
    {
        $startDate = $request->get('datedebut');
        $endDate = $request->get('datefin');
        $arret = $this->em->getRepository(PArretTravail::class)->add_Arret($request);

        $dateRanges = $this->generateDateRange($startDate, $endDate);    

        $arret = $this->em->getRepository(PArretTravailLg::class)->add_Arret_lg($request,$dateRanges,$arret);

       
    }

    public function generateDateRange($startDate, $endDate) {
        $currentDate = new DateTime($startDate);   // 04-09-2023
        $endDate = new DateTime($endDate);          //31-12-2023

    
        $dateRanges = [];
    
        while ($currentDate <= $endDate) {
            $monthEndDate = clone $currentDate; //04-09-2023
            $monthEndDate->modify('last day of this month'); //30-09-2023
    
            if ($monthEndDate > $endDate) {
                $monthEndDate = $endDate;
            }
    
            $daysInMonth = $monthEndDate->diff($currentDate)->days + 1; // (30-09-2023 - 04-09-2023) + 1 

            $periode = $this->calculPaieService->getPeriode($currentDate->format('mY'));
    
            $dateRanges[] = [
                'start' => $currentDate->format('Y-m-d'),
                'end' => $monthEndDate->format('Y-m-d'),
                'days' => $daysInMonth,
                'period' => $periode->getid(),
            ];
    
            $currentDate->modify('first day of next month');

        }
    
        return $dateRanges;
    }

   


   
    

   
}
