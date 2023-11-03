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
use App\Entity\PArretTravail;
use App\Entity\PPrelevementLg;
use App\Entity\PArretTravailLg;
use App\Controller\ApiController;
use App\Service\CalculPaieService;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\ParameterBag;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as Reader;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
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
        $now = new DateTime();

        // Get the current date in a specific format (e.g., 'Y-m-d H:i:s')
        $currentDate = $now->format('Y-m');
       
        $dossier = $request->getSession()->get('dossier');
        $operations = $this->api->check($this->getUser(), 'app_mouvement_arret', $this->em, $request);
        if(!is_array($operations)) {
            return $this->redirectToRoute('app_site');  
        }elseif(count($operations) == 0) {
            return $this->render('includes/404.html.twig');
        }

        

        // $queryBuilder = $this->em->createQueryBuilder()
        // ->select('a.id as arret_id,p.id as employe_id,p.code as matricule,m.designation as motif,a.DateDebut as date_debut,a.dateFin as date_fin,a.dateReprise as date_rep')
        // ->from(PArretTravail::class, 'a')
        // ->innerJoin('a.contract', 'c')
        // ->innerJoin('c.employe', 'p')
        // ->innerJoin('a.motif', 'm')
        // ->Where('a.active = 1')
        // ->andWhere('c.dossier = :dossier')
        // ->setParameter('dossier', $dossier);
        // $results = $queryBuilder->getQuery()->getResult();

        $pmotif = $this->em->getRepository(PMotif::class)->findBy(['active' => 1 ]);
        
        $queryBuilder = $this->em->createQueryBuilder()
        ->select('contract.id as id, p.nom as nom, p.matricule as matricule , p.prenom')
        ->from(LContract::class, 'contract')
        ->innerJoin('contract.employe', 'p')
        ->innerJoin('contract.dossier', 'd')
        ->Where('contract.active = 1')
        ->andWhere('d.id = :dossier')
        ->setParameter('dossier', $dossier);        // $elements = $this->em->getRepository(Prubrique::class)->findBy(['sens' => [1, -1]]);
        $pemployes = $queryBuilder->getQuery()->getResult();

        return $this->render('mouvement/Arret/index.html.twig', [
            'motifs' => $pmotif,
            'operations' => $operations,
            'pemployes' => $pemployes,
            'date' => $currentDate,
        ]);

    }

    #[Route('/arret_traitement', name: 'app_mouvement_arret_traitement', options:['expose' => true])]
    public function arret_traitement(Request $request): Response
    {
        $startDate = $request->get('datedebut');
        $endDate = $request->get('datefin');
        $dateRanges = $this->generateDateRange($startDate, $endDate);    
        //   dd($dateRanges);
      
        // test period exist : 

//         $arret = $this->em->getRepository(PArretTravail::class)->add_Arret($request);
// // dd($request);

//         $arret_lg = $this->em->getRepository(PArretTravailLg::class)->add_Arret_lg($request,$dateRanges,$arret);

        return new JsonResponse($dateRanges);        
       
    }
    
    #[Route('/arret_traitement_verification', name: 'arret_traitement_verification', options:['expose' => true])]
    public function arret_traitement_verification(Request $request): Response
    {
        $id_cnt = $request->get('id_emp_arret');
        // $endDate = $request->get('datefin');
        // $dateRanges = $this->generateDateRange($startDate, $endDate);    
        // //   dd($dateRanges);
    //   dd($request->get('editedData'));
        // test period exist : 

        foreach ($request->get('editedData') as  $sheet) {
          
           
            $period_exist = $this->period_exist($id_cnt, $this->em);  
          if ($period_exist) {
    
            foreach ($period_exist as $period) {
                       
                        if($sheet['period'] == $period['code']){
    
                            $days = $sheet['days'] + $period['nbr'];
    
                            if ($days > 26) {
                                dd('error');
                                $error = 1;
                                $emp = $sheet[1];
                                $prd = $period['code'];
                            }
                            
                        }
                        
                    }
          }
        }

        $arret = $this->em->getRepository(PArretTravail::class)->add_Arret($request);
// dd($request);

        $arret_lg = $this->em->getRepository(PArretTravailLg::class)->add_Arret_lg($request,$request->get('editedData'),$arret);

        return new JsonResponse($arret_lg);        
       
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
            $period_my = $currentDate->format('mY');
            
            if($daysInMonth > 26){
                $daysInMonth = 26;
            }
    
            $dateRanges[] = [
                'start' => $currentDate->format('Y-m-d'),
                'end' => $monthEndDate->format('Y-m-d'),
                'days' => $daysInMonth,
                'period' => $periode->getid(),
                'period_my' => $period_my,
            ];
    
            $currentDate->modify('first day of next month');

        }
    
        return $dateRanges;
    }

        public function period_exist($emp_id,$em) {
            $query = "SELECT SUM(parret_travail_lg.nombre_jour) as nbr,periode.id,periode.code as code 
            FROM `parret_travail_lg` 
                        INNER JOIN parret_travail ON parret_travail_lg.arret_travail_id=parret_travail.id
                        INNER JOIN lcontract ON lcontract.id=parret_travail.contract_id
                        INNER JOIN periode ON periode.id=parret_travail_lg.periode_id 
                        where lcontract.id=$emp_id group BY periode.id";
                        // dd($query);
                         $stmt = $em->getConnection()->prepare($query);
                         $newstmt = $stmt->executeQuery();   
                         $result = $newstmt->fetchAll();
            return $result;
                     

        }

//       public function generateDateRange($startDate, $endDate) {
//     $currentDate = new DateTime($startDate);
//     $endDate = new DateTime($endDate);

//     $dateRanges = [];

//     while ($currentDate <= $endDate) {
//         $monthEndDate = clone $currentDate;
//         $monthEndDate->modify('last day of this month');

//         if ($monthEndDate > $endDate) {
//             $monthEndDate = $endDate;
//         }

//         // Calculate the number of days excluding Sundays
//         $daysInMonth = 0;
//         while ($currentDate <= $monthEndDate) {
//             if ($currentDate->format('N') != 7) { // Exclude Sunday (7)
//                 $daysInMonth++;
//             }
//             $currentDate->modify('+1 day');
//         }

//         // Check if the days in the month exceed 26, if so, move to the next period
//         if ($daysInMonth > 26) {
//             // You need to determine how many days to move to the next period
//             $daysToMove = $daysInMonth - 26;
//             // Adjust the $endDate accordingly
//             $endDate->modify('+' . $daysToMove . ' days');
//         }

//         // Get the period for the current month
//         $periode = $this->calculPaieService->getPeriode($currentDate->format('mY'));

//         $dateRanges[] = [
//             'start' => $currentDate->format('Y-m-d'),
//             'end' => $monthEndDate->format('Y-m-d'),
//             'days' => $daysInMonth,
//             'period' => $periode->getid(),
//         ];

//         // Move to the next month
//         $currentDate->modify('first day of next month');
//     }

//     return $dateRanges;
// }

    // }
   
 
#[Route('/arret_canvas', name: 'app_mouvement_arret_mass_canvas', options:['expose' => true])]

public function epreuveCanvas() {
    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();
    $sheet->setCellValue('A1', 'ID_Motif');
    $sheet->setCellValue('B1', 'Id_employe');
    $sheet->setCellValue('C1', 'Date arret');
    $sheet->setCellValue('D1', 'Fin Previsionnelle');
    $sheet->setCellValue('E1', 'Reprise de travail ');
  

    $writer = new Xlsx($spreadsheet);
    $fileName = 'canvas_arret.xlsx';
    $temp_file = tempnam(sys_get_temp_dir(), $fileName);
    $writer->save($temp_file);

    return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
}
#[Route('/arret_canvas_motif', name: 'app_mouvement_arret_mass_canvas_motif', options:['expose' => true])]

public function epreuveCanvas_motif() {
  
   
    $count = 0;
    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();
    $sheet->setCellValue('A1', 'ID_Motif');
    $sheet->setCellValue('B1', 'Designation');
    $i=2;
    $pmotifs = $this->em->getRepository(PMotif::class)->findBy(['active' => 1]);
    
    foreach ($pmotifs as $motif) {
                  
                    $sheet->setCellValue('A'.$i, $motif->getId());
                    $sheet->setCellValue('B'.$i, $motif->getDesignation());
               
                    $i++;
                    $count++;
    }
  

    $writer = new Xlsx($spreadsheet);
    $fileName = 'canvas_Motif.xlsx';
    $temp_file = tempnam(sys_get_temp_dir(), $fileName);
    $writer->save($temp_file);

    return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
}

#[Route('/upload_arret', name: 'app_mouvement_arret_mass_upload', options: ['expose' => true])]
    public function app_mouvement_arret_mass_upload(Request $request ): Response
    {
        // $dossier = $this->em->getRepository(PDossier::class)->find($request->get('dossier'));
        $dossier = $request->getSession()->get('dossier');
        $error = 0;
        $prd = '';
        $reader = new Reader();
        $spreadsheet = $reader->load($request->files->get('file'));
        $period = $request->get('period');
        $worksheet = $spreadsheet->getActiveSheet();
        $spreadSheetArys = $worksheet->toArray();

        unset($spreadSheetArys[0]);
        $array = [];
        // dd($spreadSheetArys);
        $count = 0;
        foreach ($spreadSheetArys as $key => $sheet) {

         $pempl = $this->em->getRepository(LContract::class)->findBy(['dossier' => $dossier, 'id' => $sheet[1]]);
            if (empty($pempl)) {
                # code...
                $error = 1;
                return new JsonResponse('L employe avec contrat '.$sheet[1].' introvable dans ce site', 500);

            }
           
        //  $id_emp = 0;
        // foreach ($pemployes as $employe ) {
        //     $id_emp = $employe->getId();
        // }
        $startDate = $sheet[2];
        $parsedDate = strtotime($startDate);
        if ($parsedDate !== false) {
            $startDate = date("Y-m-d", $parsedDate);
        }
        $endDate = $sheet[3];
        $parsedDate = strtotime($endDate);
        if ($parsedDate !== false) {
            $endDate = date("Y-m-d", $parsedDate);
        }
                $code_emp = $sheet[1];
            
        // Extract the year and month from the period, start date, and end date
        list($periodYear, $periodMonth) = explode('-', $period);
        list($startYear, $startMonth, $startDay) = explode('-', $startDate);
        list($endYear, $endMonth, $endDay) = explode('-', $endDate);

        // Convert year and month components to integers
        $periodYear = (int)$periodYear;
        $periodMonth = (int)$periodMonth;
        $startYear = (int)$startYear;
        $startMonth = (int)$startMonth;
        $endYear = (int)$endYear;
        $endMonth = (int)$endMonth;

        // Calculate the difference in months between period and start date
        $monthsDifference = ($periodYear - $startYear) * 12 + ($periodMonth - $startMonth);

        // Update the end date by adding the months difference
        $endMonth += $monthsDifference;
        while ($endMonth > 12) {
            $endMonth -= 12;
            $endYear++;
        }

        // Update $startdate to match $period
        $startMonth = $periodMonth;
        $startYear = $periodYear;

        // Update $enddate
        $endDate = sprintf("%04d-%02d-%02d", $endYear, $endMonth, $endDay);
        $startDate = sprintf("%04d-%02d-%02d", $startYear, $startMonth, $startDay);


        $dateRanges = $this->generateDateRange($startDate, $endDate);  
        $period_exist = $this->period_exist($sheet[1], $this->em);  
      if ($period_exist) {

        foreach ($period_exist as $period) {
                foreach ($dateRanges as $date) {
                   
                    if($date['period'] == $period['id']){

                        $days = $date['days'] + $period['nbr'];

                        if ($days > 26) {
                            $error = 1;
                            $emp = $sheet[1];
                            $prd = $period['code'];
                        }
                        
                    }
                    
                }
                }
      }
    }
    // dd($error);
    if($error == 0){
    foreach ($spreadSheetArys as $key => $sheet) {
        $newArray = [];
        // $pemployes = $this->em->getRepository(Pemploye::class)->findBy(['code' => $sheet[1]]);
        // // $pemployes = $this->em->getRepository(Pemploye::class)->findBy(['code' => $sheet[1]]);
        // $contract = $this->em->getRepository(LContract::class)->findOneBy(['active'=> 1 , 'employe' =>$pemployes]);
        // $id_emp = 0;
        // if ($contract) {
        //     $id_emp = $contract->getId();

        // }
     
        $newArray = new ParameterBag([
            "id_emp_arret" => $sheet[1], // Combine elements 0 and 1
            "motif_id" => $sheet[0], // Element 2
            "datedebut" => date('Y-m-d', strtotime($sheet[2])), // Format date for element 3
            "datefin" => date('Y-m-d', strtotime($sheet[3])), // Format date for element 4
            "datereprise" => date('Y-m-d', strtotime($sheet[4])), 
        ]);

            // $startDate = $sheet[2];
            // $endDate = $sheet[3];
            $dateRanges = $this->generateDateRange($startDate, $endDate);  
            $period_exist = $this->period_exist($newArray->get('id_emp_arret'), $this->em);  
          
            $arret = $this->em->getRepository(PArretTravail::class)->add_Arret($newArray);
            $arretlg = $this->em->getRepository(PArretTravailLg::class)->add_Arret_lg($newArray,$dateRanges,$arret);
    
        }
    }

    else{
        // dd($employe->getcode());
        return new JsonResponse('L employe avec le matricule'.$emp.' a plusieurs de 26 jrs periode  '.$prd, 500);

    }

        return new JsonResponse('ok');
    }

    
    #[Route('/parret_aff', name: 'app_parret_aff', options: ['expose' => true])]
    public function app_parret_aff(Request $request): Response
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
        ->select('a.id as arret_id,p.id as employe_id,p.nom,p.prenom,p.code as matricule,m.designation as motif,a.DateDebut as date_debut,a.dateFin as date_fin,a.dateReprise as date_rep')
        ->from(PArretTravail::class, 'a')
        ->innerJoin('a.contract', 'c')
        ->innerJoin('c.employe', 'p')
        ->innerJoin('a.motif', 'm')
        ->Where('a.active = 1')
        ->andWhere('c.dossier = :dossier')
        ->setParameter('dossier', $dossier);
      
        if (!empty($search)) {
            $queryBuilder->andWhere('(a.id LIKE :search OR p.id LIKE :search OR m.designation LIKE :search OR  a.DateDebut LIKE :search OR a.dateFin LIKE :search OR a.dateReprise LIKE :search)')
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
        
        // dd($results);
        $totalRecords = $this->em->createQueryBuilder()
        ->select('COUNT(a.id)')
        ->from(PArretTravail::class, 'a')
        ->innerJoin('a.contract', 'c')
        ->innerJoin('c.employe', 'p')
        ->innerJoin('a.motif', 'm')
        ->Where('a.active = 1')
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


    #[Route('/parret_aff_details/{code}', name: 'app_parret_aff_details', options: ['expose' => true])]
    public function app_parret_aff_details($code): Response
    {
        // dd($code)
        $arret = $this->em->getRepository(PArretTravail:: class)->find(['id' => $code]);
        // dd($arret->getArretTravailLgs());
        $html = $this->renderView('mouvement/Arret/includes/arret_detail.html.twig', ['arret' => $arret, 'arretLgs' => $arret->getArretTravailLgs()]);

       return new JsonResponse($html);
        
}

   
}
