<?php

namespace App\Controller\Reporting;

use App\Entity\TCnssA00;
use App\Entity\TCnssA01;
use App\Entity\TCnssA02;
use App\Entity\TCnssA03;
use App\Entity\TCnssB00;
use App\Entity\TCnssB01;
use App\Entity\Tbulletin;
use App\Entity\TbulletinLg;
use App\Entity\PArretTravailLg;
use App\Controller\ApiController;
use App\Entity\LmatriculationCoti;
use App\Entity\TCnssB02;
use App\Entity\TCnssB03;
use App\Service\CalculPaieService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Finder\SplFileInfo;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/reporting/cnss')]
class CnssController extends AbstractController
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
    #[Route('/', name: 'app_reporting_cnss')]
    public function index(Request $request): Response
    {
        $operations = $this->api->check($this->getUser(), 'app_reporting_cnss', $this->em, $request);
        if(!is_array($operations)) {
            return $this->redirectToRoute('app_site');  
        }elseif(count($operations) == 0) {
            return $this->render('includes/404.html.twig');
        }
        return $this->render('reporting/cnss/index.html.twig', [
            'operations' => $operations,
        ]);
    }
    #[Route('/app_reporting_cnss_import', name: 'app_reporting_cnss_import', options: ['expose' => true])]
    public function app_reporting_cnss_import(Request $request): Response
    {
        $file = $request->files->get('file');
        if(!$file){
            return new JsonResponse('Veuillez import un fichier', 500);
        }

        $file = new SplFileInfo($file, '', '');
        
        $cnssFile = explode("\n", $file->getContents());
        // dd($cnssFile);
        $tcnssA00 = null;

        foreach($cnssFile as $cnss)
        {
          
            if(substr($cnss,0,3)=='A00')
            {
                $cnss00=trim($cnss);
                $cnss00=trim($cnss00,'A00A0');
                // $periode=$this->calculPaieService->getPeriode(date('mY', strtotime('last month')));
                $tcnssA00 = new TCnssA00();
                $tcnssA00->setPeriode(date('Ym', strtotime('last month')));
                $tcnssA00->setTypeEnreg('A00');
                $tcnssA00->setIdentiTransfert($cnss00);
                $tcnssA00->setCat('A0');
                $tcnssA00->setFiller('');

                $this->em->persist($tcnssA00);
                
            }
            elseif(substr($cnss,0,3)=='A01')
            {
                $cnss01 =preg_split('/\s{2,}/', $cnss);
               //dd($cnss01);
                $Num_Affilie=substr($cnss01[0],3,7);
                
                $Raison_Sociale=substr($cnss01[0],16);
                
                $periode=substr($cnss01[0],10,-strlen($Raison_Sociale));
                $C_Code=explode(" ", $cnss01[3]);
               
                if(sizeof($C_Code) == 1)
                {
                    $Code_Agence=substr(trim($C_Code[0]),0,-16);
                    $Date_Exig=substr(trim($C_Code[0]),10);
                    $Date_Emission=substr(trim($C_Code[0]),2,8);
                    $Code_Postal=null;
                }
                else{
                    $Code_Agence=substr(trim($C_Code[1]),0,-16);
                    $Date_Exig=substr(trim($C_Code[1]),10);
                    $Date_Emission=substr(trim($C_Code[1]),2,8);
                    $Code_Postal=$C_Code[0];
                }

                $tcnssA01 = new TCnssA01();
                $tcnssA01->setCnssa00($tcnssA00);
                $tcnssA01->setTypeEnreg('A01');
                $tcnssA01->setNumAffilie($Num_Affilie);
                $tcnssA01->setPeriode($periode);
                $tcnssA01->setRaisonSociale($Raison_Sociale);
                $tcnssA01->setAdresse($cnss01[1]);
                $tcnssA01->setVille($cnss01[2]);
                $tcnssA01->setCodePostal($Code_Postal);
                $tcnssA01->setCodeAgence($Code_Agence);
                $tcnssA01->setDateEmission($Date_Emission);
                $tcnssA01->setDateExig($Date_Exig);
                
                $this->em->persist($tcnssA01);              
              
              
            }
            elseif(substr($cnss,0,3)=='A02'){
                
                $cnss2=trim($cnss);
                $nom_prenom=str_replace("'","''",trim(substr($cnss2,25,-20)));
                $Num_Affilie=substr($cnss2,-strlen($cnss2)+3,7);
                $Période=substr($cnss2,-strlen($cnss2)+10,6);
                $Num_Assure=substr($cnss2,-strlen($cnss2)+16,9);
                $Enfants=substr($cnss2,-20,2);
                $AF_A_Payer=substr($cnss2,-18,6);
                $AF_A_Deduire=substr($cnss2,-12,6);
                $AF_Net_A_Payer=substr($cnss2,-6);
                
                $tcnssA02 = new TCnssA02();
                $tcnssA02->setCnssa00($tcnssA00);
                $tcnssA02->setTypeEnreg('A02');
                $tcnssA02->setNumAffilie($Num_Affilie);
                $tcnssA02->setPeriode($Période);
                $tcnssA02->setNumAssure($Num_Assure);
                $tcnssA02->setNomPrenom($nom_prenom);
                $tcnssA02->setEnfants($Enfants);
                $tcnssA02->setAfAPayer($AF_A_Payer);
                $tcnssA02->setAfADeduire($AF_A_Deduire);
                $tcnssA02->setAfNetAPayer($AF_Net_A_Payer);

                $this->em->persist($tcnssA02);
            }
            elseif(substr($cnss,0,3)=='A03'){ 
                $cnss03=trim($cnss);
                $Num_Affilie=substr($cnss03,-strlen($cnss03)+3,7);    
                $Période=substr($cnss03,-strlen($cnss03)+10,6); 
                $Nbr_Salaries=substr($cnss03,-strlen($cnss03)+16,6); 
                $T_Enfants=substr($cnss03,-56,5);
                $T_AF_A_Payer=substr($cnss03,-51,12);
                $T_AF_A_Deduire=substr($cnss03,-39,12);
                $T_AF_Net_A_Payer=substr($cnss03,-27,12);
                $T_Num_Imma=substr($cnss03,-15);

                $tcnssA03 = new TCnssA03();
                $tcnssA03->setCnssa00($tcnssA00);
                $tcnssA03->setTypeEnreg('A03');
                $tcnssA03->setNumAffilie($Num_Affilie);
                $tcnssA03->setPeriode($Période);
                $tcnssA03->setNbrSalaries($Nbr_Salaries);
                $tcnssA03->setTEnfants($T_Enfants);
                $tcnssA03->setTAfAPayer($T_AF_A_Payer);
                $tcnssA03->setTAfADeduire($T_AF_A_Deduire);
                $tcnssA03->setTAfNetAPayer($T_AF_Net_A_Payer);
                $tcnssA03->setTNumImma($T_Num_Imma);

                $this->em->persist($tcnssA03);
              
            }
       
        
        }

        // $this->em->flush();

        $nbr_salaries=0;
        $jour_decale=0;
        $num_imma=0;
        $salaireR=0;
        $salaireP=0;
        $T_Ctr=0;

        $T_nbr_salaries=0;
        $T_jour_decale=0;
        $T_num_imma=0;
        $T_salaireR=0;
        $T_salaireP=0;
        $T_Ctr6=0;

        $periode = date('Ym', strtotime('last month'));
        $periode1=substr($periode, 4, strlen($periode)-4).substr($periode,0, 4);

        $periode1 = $this->calculPaieService->getPeriode($periode1);

        $tcnssB00 = $this->em->getRepository(TCnssB00::class)->findOneBy(['identiTransfert' => $tcnssA00->getIdentiTransfert(), 'periode' => $periode]);
        if(!$tcnssB00) {
            $num_affilie = substr($tcnssA00->getIdentiTransfert(), 0, 7);
            $tcnssB00 = new TCnssB00();
            $tcnssB00->setTypeEnreg('B00');
            $tcnssB00->setCnssa00($tcnssA00);
            $tcnssB00->setIdentiTransfert($tcnssA00->getIdentiTransfert());
            $tcnssB00->setCat('B0');
            $tcnssB00->setPeriode($periode);

            $this->em->persist($tcnssB00);

            foreach ($tcnssA00->getTCnssA01s() as $key => $value) {
                $tcnssB01 = new TCnssB01();
                $tcnssB01->setTypeEnreg('B01');
                $tcnssB01->setCnssb00($tcnssB00);
                $tcnssB01->setNumAffilie($value->getNumAffilie());
                $tcnssB01->setPeriode($value->getPeriode());
                $tcnssB01->setRaisonSociale($value->getRaisonSociale());
                $tcnssB01->setAdresse($value->getAdresse());
                $tcnssB01->setVille($value->getVille());
                $tcnssB01->setCodePostal($value->getCodePostal());
                $tcnssB01->setCodeAgence($value->getCodeAgence());
                $tcnssB01->setDateEmission($value->getDateEmission());
                $tcnssB01->setDateExig($value->getDateEmission());

                $this->em->persist($tcnssB01);
            }

            foreach($tcnssA00->getTCnssA02s() as $value)
            {
                $numCat=0;
                $categorie='';
                
                $cnssPersonnel = $this->em->getRepository(LmatriculationCoti::class)->findOneBy(['code' => $value->getNumAssure()]);
                if($cnssPersonnel and $cnssPersonnel->getContractId()) {
                    $contract = $cnssPersonnel->getContractId();
                    if($contract and $contract->getPnatureContract() and $contract->getPnatureContract()->geType() == 'permanent') {
                        $queryBuilder = $this->em->createQueryBuilder();
                        $montantImposable = $queryBuilder->select('SUM(TbulletinLg.montant) as reel, CASE WHEN (SUM(TbulletinLg.montant) > 6000) THEN 600000 ELSE SUM(TbulletinLg.montant) END as plafond')
                                    ->from(TbulletinLg::class, 'TbulletinLg')
                                    ->innerJoin('TbulletinLg.bulletin', 'bulletin')
                                    ->innerJoin('TbulletinLg.rubrique', 'rubrique')
                                    ->where('bulletin.contract = :contract')
                                    ->andWhere('rubrique.imposable = 1')
                                    ->andWhere('TbulletinLg.active = 1')
                                    ->andWhere('bulletin.periode = :periode1')
                                    ->setParametre('contract', $contract)
                                    ->setParametre('periode1', $periode1)
                                    ->getQuery()
                                    ->getOneOrNullResult()
                        ;

                        $nombreJourTravail = 26 - $this->em->getRepository(PArretTravailLg::class)->getNombreJoursArret($contract->getId(), $periode1);
                        
                        if($nombreJourTravail < 26) {
                            $motif = $this->em->getRepository(PArretTravailLg::class)->getMotifArretTravail($contract->getId(), $periode1);
                            $categorie = $motif['code'];
                            switch ($categorie) {
                                case 'DE':
                                    $numCat=2;
                                    break;
                                case 'IT':
                                    $numCat=3;
                                    break;
                                case 'IL':
                                    $numCat=4;
                                    break;
                                case 'AT':
                                    $numCat=5;
                                    break;
                                case 'CS':
                                    $numCat=6;
                                    break;
                                case 'MS':
                                    $numCat=7;
                                    break;
                                case 'MP':
                                    $numCat=8;
                                    break;
                                default:
                                    $numCat =0;
                            }
                        }


                    }

                } else {
                    $categorie='SO'; 
                    $numCat=1;
                    $nbrJour=0; 
                }
                
             
                
                


                
                
                $S_Ctr=intval($numCat+$value->getAfAPayer()+$nbrJour+$value->getEnfants()+$value->getNumAssure()+$montantImposable["reel"]+$montantImposable["plafond"]);

                $tcnssB02 = new TCnssB02();
                $tcnssB02->setCnssb00($tcnssB00);
                $tcnssB02->setContract($contract);
                $tcnssB02->setTypeEnreg('B02');
                $tcnssB02->setNumAffilie($value->getNumAffilie());
                $tcnssB02->setPeriode($periode1);
                $tcnssB02->setNumAssure($value->getNumAssure());
                $tcnssB02->setNomPrenom(str_replace("'","''",$value->getNomPrenom()));
                $tcnssB02->setEnfants($value->getEnfants());
                $tcnssB02->setAfAPayer($value->getAfAPayer());
                $tcnssB02->setAfADeduire($value->getAfADeduire());
                $tcnssB02->setAfNetAPayer($value->getAfNetAPayer());
                $tcnssB02->setSite($contract->getDossier()->getCode());
                $tcnssB02->setNJoursDeclares($nbrJour);
                $tcnssB02->setLSituation($categorie);
                $tcnssB02->setLSituationNum($numCat);
                $tcnssB02->setNSalaireReel($montantImposable["reel"]);
                $tcnssB02->setNSalairePlaf($montantImposable["plafond"]);
                $tcnssB02->setSCtr($S_Ctr);

                $this->em->persist($tcnssB02);
            

                $jour_decale = $jour_decale+$nbrJour;
        
                $salaireR = intval($salaireR+$montantImposable["reel"]);
                $salaireP=$salaireP+$montantImposable["plafond"];
                $T_Ctr = $T_Ctr + $S_Ctr; 
                 
            }

            
            foreach($tcnssA00->getTCnssA03s() as $value)
            {   
                $tcnssB03 = new TCnssB03();

                $tcnssB03->setCnssb00($tcnssB00);
                $tcnssA03->setTypeEnreg('B03');
                $tcnssA03->setNumAffilie($value->getNumAffilie());
                $tcnssA03->setPeriode($periode1);
                $tcnssA03->setNbrSalaries($value->getNbrSalaries());
                $tcnssA03->setTEnfants($value->getTEnfants());
                $tcnssA03->setTAfAPayer($value->getTAfAPayer());
                $tcnssA03->setTAfADeduire($value->getTAfADeduire());
                $tcnssA03->setTAfNetAPayer($value->getTAfNetAPayer());
                $tcnssA03->setTNumImma($value->getTNumImma());
                $tcnssA03->setTAfAReverser($value->getTAfAReverser());
                $tcnssA03->setTJoursDeclares($jour_decale);
                $tcnssA03->setTSalaireReel($salaireR);
                $tcnssA03->setTSalairePlaf($salaireP);
                $tcnssA03->setTCtr($T_Ctr);

                $this->em->persist($tcnssA03);

                $T_nbr_salaries=$T_nbr_salaries+$value->getNbrSalaries();
                $T_jour_decale=$T_jour_decale+$jour_decale;
                $T_num_imma=$T_num_imma+$value->getTNumImma();
                $T_salaireR=$T_salaireR+$salaireR;
                $T_salaireP=$T_salaireP+$salaireP;
                $T_Ctr6=$T_Ctr6+$T_Ctr;
                
            }

            $jour_decale=0;
            
            $salaireR=0;
            $salaireP=0;
            $T_Ctr=0;
            
            $sql4 = "
            select c.ID_Employer,e.Affiliation,c.CNSS,e.Code 
            from pCNSS c 
            inner join pBulletins b on c.ID_Employer=b.ID_Employer and b.période=$periode1 
            inner join pEmployes emp on emp.ID_Employer=b.ID_Employer 
            inner join pEtablissement e on e.ID_Etablissement=b.id_ETS 
            where  b.obs is null and Nature_Type!='AutoEntrepreneur' and e.Affiliation='$num_affilie' and c.cnss not in(select Num_Assure from cnss_a02  where Période=$periode)";
            $stmt4 = $this->getDoctrine()->getConnection()->prepare($sql4);
            $stmt4->execute();
            $data4 = $stmt4->fetchAll();
            //dd($data4);
            if($data4!=null)
            {
                foreach($data4 as $row4)
                {
                    $sql = "select  b.Nom,B.Prénom,b.CIN,REPLACE(CAST(b.SBI AS NUMERIC(18,2)),'.','') as  Reel ,REPLACE(CAST(b.SBI_Plaf AS NUMERIC(18,2)),'.','') as Plafond   from  Q_SBI_Vir b where Période=$periode1 and ID_Employer='".$row4["ID_Employer"]."'";
                    $stmt4 = $this->getDoctrine()->getConnection()->prepare($sql);
                    $stmt4->execute();
                    $datab04 = $stmt4->fetch();
                    $sql = "select lg.Base_App_HRM from pBulletins b inner join  pBulletins_LG lg on b.ID_Bulletin=lg.ID_Bulletin where  b.obs is null and lg.ID_Eléments='R10001' and Période=$periode1 and ID_Employer='".$row4["ID_Employer"]."'";
                    $stmt4 = $this->getDoctrine()->getConnection()->prepare($sql);
                    $stmt4->execute();
                    $dataBaselg4 = $stmt4->fetch();
                    $nbrJour=substr($dataBaselg4["Base_App_HRM"],0,2);
                    $str = str_replace('\'',' ',$datab04["Nom"].' '.$datab04["Prénom"]);
                    if (is_numeric($row4["CNSS"]))
                    {
                       $cnss=$row4["CNSS"];
                    }else{
                        $cnss=0;
                    }
                    
                    $S_Ctr=round($datab04["Plafond"]+$datab04["Reel"]+$cnss+$nbrJour);
                    $sql4="INSERT INTO cnss_b04(ID_Employer, Type_Enreg, Num_Affilie, Période, Num_Assure, Nom_Prenom,Num_CIN,site,Nbr_Jours,Sal_Reel, Sal_Plaf, S_Ctr)   VALUES ('".$row4["ID_Employer"]."','B04','$num_affilie','$periode','".$row4["CNSS"]."','$str','".$datab04["CIN"]."','".$row4["Code"]."','$nbrJour','".$datab04["Reel"]."','".$datab04["Plafond"]."','$S_Ctr')";
                    $stmt4 = $this->getDoctrine()->getConnection()->prepare($sql4);
                    $stmt4->execute();
                    $nbr_salaries++;
                    $jour_decale=$jour_decale+$nbrJour;
                    $num_imma=$num_imma+$cnss;
                    $salaireR=$salaireR+$datab04["Reel"];
                    $salaireP=$salaireP+$datab04["Plafond"];
                    
                
                    //dd($sql4);
                }
            } else {
                $sql4="INSERT INTO cnss_b04( Type_Enreg, Num_Affilie, Période, Num_Assure, Nbr_Jours,Sal_Reel, Sal_Plaf)   VALUES ('B04','$num_affilie','$periode','0','0','0','0')";
                $stmt4 = $this->getDoctrine()->getConnection()->prepare($sql4);
                $stmt4->execute();
            }

            $T_Ctr=$nbr_salaries+$jour_decale+$num_imma+$salaireR+$salaireP;
            $sql5="INSERT INTO cnss_b05(Type_Enreg, Num_Affilie, Période, Nbr_Salaries, T_Num_Imma, T_Jours_Declares, T_Salaire_Reel, T_Salaire_Plaf, T_Ctr) VALUES ('B05','$num_affilie', '$periode','$nbr_salaries','$num_imma','$jour_decale','$salaireR','$salaireP','$T_Ctr')";
            $stmt5 = $this->getDoctrine()->getConnection()->prepare($sql5);
            $stmt5->execute();
    
            $T_nbr_salaries=$T_nbr_salaries+$nbr_salaries;
            $T_jour_decale=$T_jour_decale+$jour_decale;
            $T_num_imma=$T_num_imma+$num_imma;
            $T_salaireR=$T_salaireR+$salaireR;
            $T_salaireP=$T_salaireP+$salaireP;
            $T_Ctr6=$T_Ctr6+$T_Ctr;

            $sql6="INSERT INTO cnss_b06(Type_Enreg, Num_Affilie, Période, Nbr_Salaries, T_Num_Imma, T_Jours_Declares, T_Salaire_Reel, T_Salaire_Plaf, T_Ctr) VALUES ('B06','$num_affilie', '$periode','$T_nbr_salaries','$T_num_imma','$T_jour_decale','$T_salaireR','$T_salaireP','$T_Ctr6')";
            $stmt6 = $this->getDoctrine()->getConnection()->prepare($sql6);
            $stmt6->execute();
                
                
            
        }

        return new JsonResponse(1);
     
        
   
    }
}
