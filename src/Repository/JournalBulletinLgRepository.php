<?php

namespace App\Repository;

use App\Entity\LContract;
use App\Entity\PCompteComptable;
use App\Entity\JournalBulletinLg;
use App\Entity\TbulletinLg;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<JournalBulletinLg>
 *
 * @method JournalBulletinLg|null find($id, $lockMode = null, $lockVersion = null)
 * @method JournalBulletinLg|null findOneBy(array $criteria, array $orderBy = null)
 * @method JournalBulletinLg[]    findAll()
 * @method JournalBulletinLg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class JournalBulletinLgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, JournalBulletinLg::class);
    }

    public function save(JournalBulletinLg $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(JournalBulletinLg $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return JournalBulletinLg[] Returns an array of JournalBulletinLg objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('j')
//            ->andWhere('j.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('j.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?JournalBulletinLg
//    {
//        return $this->createQueryBuilder('j')
//            ->andWhere('j.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
    public function getCab($bordereaux, $groupement, $dossierRh)
    {
        
        $journals = $this->createQueryBuilder('j')
            ->select('dossier.groupement, 
                dossier.abreviationUgouv as abreviation_site, 
                bordereau.created as date_operation, 
                periode.id as periode_id,
                dossier.abreviation2 as abreviation2_site,
                dossier.DossierUgouvId as id_site, 
                dossier.fcy0 as fcy_0, 
                dossier.cpy0 as cpy_0, 
                natureContract.designation as observation_operation, 
                natureContract.id as natureContract_id, 
                rubrique.id as rubrique_id, 
                rubrique.code as rubrique_code, 
                CONCAT(bordereau.type,\' \',natureContract.designation,\' \', periode.code,\' \', j.type) as observation_cab,
                CONCAT(bordereau.type,\' \',natureContract.designation,\' \', periode.code,\' \', rubrique.designation) as observation_det,
                rubrique.designation as rubrique_designation , 
                SUM(j.montant) as montant, 
                j.codeComptable, 
                rubrique.siteId as rubrique_site_id, 
                rubrique.partenaireId, 
                natureContract.partenaireId as partenaireNatureContractId, 
                j.type ,
                j.qte ,
                j.sens ,

                bordereau.type as type_bordereau')
            ->innerJoin('j.bulletin', 'bulletin')
            ->innerJoin('bulletin.bordereau', 'bordereau')
            ->innerJoin('bordereau.periode', 'periode')
            ->innerJoin('bordereau.dossier', 'dossier')
            ->innerJoin('j.rubrique', 'rubrique')
            ->innerJoin('bordereau.natureContract', 'natureContract')
            ->andWhere('bordereau.id IN (:bordereaux)')
            ->andWhere('j.active = 1')
            ->andWhere('dossier.groupement = :groupement')
            ->setParameter('bordereaux', $bordereaux)
            ->setParameter('groupement', $groupement)
            ->groupBy('periode.id, dossier.groupement, natureContract.id, j.type, rubrique.id')
            ->getQuery()
            ->getResult()
        ;
        // dd($journals);
        $data = [];
        foreach ($journals as $key => $journal) {
            
            $personnels = $this->getEntityManager()->getRepository(LContract::class)->getPersonnels($groupement, $bordereaux, $journal['rubrique_id'],  $journal['periode_id'],$journal['natureContract_id']);
            
            $article = $this->getEntityManager()->getRepository(PCompteComptable::class)->getArticle($journal['rubrique_id'], $journal['natureContract_id']);

            $journal['personnels'] = $personnels;
            $journal['article'] = $article['articleUgouvId'];
            
            $key = $this->custom_array_search($data, $journal['groupement'], $journal['type'], $journal['natureContract_id'], $journal['periode_id']);
            if($journal['type_bordereau'] == 'paie') {
                if(in_array($journal['type'], ['cimr', 'cnss', 'ir', 'cimr pp', 'cnss pp'])) {
                    $naturePiece = 10;
                } elseif ($journal['type'] == 'netpaye') {
                    $naturePiece = 6;
                } else {
                    $naturePiece = 12;
                }
            }else {
                if(in_array($journal['type'], ['cimr', 'cnss', 'ir', 'cimr pp', 'cnss pp'])) {
                    $naturePiece = 10;
                } elseif ($journal['type'] == 'netpaye') {
                    $naturePiece = 8;
                } else {
                    $naturePiece = 12;
                }
            } 

            if($key === false) {
                if($journal['groupement'] == 'FCZ') {
                    
                    array_push($data, [
                        'groupement' => $dossierRh->getGroupement(),
                        'abreviation_site' => $dossierRh->getAbreviationUgouv(),
                        'abreviation2_site' => $dossierRh->getAbreviation2(),
                        'id_site' => $dossierRh->getDossierUgouvId(),
                        'periode_id' => $journal['periode_id'],
                        'fcy_0' => $dossierRh->getFcy0(),
                        'cpy_0' => $dossierRh->getCpy0(),
                        'type' => $journal['type'],
                        'naturePiece' => $naturePiece,
                        'observation_cab' => $journal['observation_cab'],
                        'observation_operation' => $journal['observation_operation'],
                        'natureContract_id' => $journal['natureContract_id'],
                        'type_bordereau' => $journal['type_bordereau'],
                        'partenaireId' => $journal['partenaireId'],
                        'partenaireNatureContractId' => $journal['partenaireNatureContractId'],
                        'details' => [$journal]
                    ]);
                } else {
                    array_push($data, [
                        'groupement' => $journal['groupement'],
                        'abreviation_site' => $journal['abreviation_site'],
                        'abreviation2_site' => $journal['abreviation2_site'],
                        'id_site' => $journal['id_site'],
                        'periode_id' => $journal['periode_id'],
                        'fcy_0' => $journal['fcy_0'],
                        'cpy_0' => $journal['cpy_0'],
                        'type' => $journal['type'],
                        'naturePiece' => $naturePiece,
                        'observation_cab' => $journal['observation_cab'],
                        'observation_operation' => $journal['observation_operation'],
                        'natureContract_id' => $journal['natureContract_id'],
                        'type_bordereau' => $journal['type_bordereau'],
                        'partenaireId' => $journal['partenaireId'],
                        'partenaireNatureContractId' => $journal['partenaireNatureContractId'],
                        'details' => [$journal]
                    ]);
                }
            } else {
                if($journal['partenaireId']) {
                    $data[$key]['partenaireId'] = $journal['partenaireId'];
                }
                array_push($data[$key]['details'], $journal);
            }
            
        }
        // cab cnss pp and cimr pp


        $cabs = $this->getEntityManager()->getRepository(TbulletinLg::class)->getCnssCimrPP($bordereaux, $groupement, $dossierRh);
        foreach ($cabs as $key => $cab) {
            array_push($data, $cab);
        }

        return $data;
    }
    public function getCabRegularisations($bordereaux, $groupement, $dossierRh)
    {
        $journals = $this->createQueryBuilder('j')
            ->select('dossier.groupement, 
                dossier.abreviationUgouv as abreviation_site, 
                bordereau.created as date_operation, 
                periode.id as periode_id,
                dossier.abreviation2 as abreviation2_site,
                dossier.DossierUgouvId as id_site, 
                dossier.fcy0 as fcy_0, 
                dossier.cpy0 as cpy_0, 
                natureContract.designation as observation_operation, 
                natureContract.id as natureContract_id, 
                rubrique.id as rubrique_id, 
                rubrique.code as rubrique_code, 
                CONCAT(\'regularisation \',bordereau.type,\' \',natureContract.designation,\' \', periode.code,\' \', j.type) as observation_cab,
                CONCAT(\'regularisation \',bordereau.type,\' \',natureContract.designation,\' \', periode.code,\' \', rubrique.designation) as observation_det,
                rubrique.designation as rubrique_designation , 
                SUM(j.montant) as montant, 
                j.codeComptable, 
                rubrique.siteId as rubrique_site_id, 
                j.type ,
                j.sens ,
                j.qte ,
                rubrique.regulArticleUgouvId as regulArticleUgouvId, 
                CONCAT(bordereau.type,\'_regularisation\') as type_bordereau')
            ->innerJoin('j.bulletin', 'bulletin')
            ->innerJoin('bulletin.bordereau', 'bordereau')
            ->innerJoin('bordereau.periode', 'periode')
            ->innerJoin('bordereau.dossier', 'dossier')
            ->innerJoin('j.rubrique', 'rubrique')
            ->innerJoin('bordereau.natureContract', 'natureContract')
            ->andWhere('bordereau.id IN (:bordereaux)')
            ->andWhere('j.active = 1')
            ->andWhere('j.qte = 1')
            ->andWhere('dossier.groupement = :groupement')
            ->setParameter('bordereaux', $bordereaux)
            ->setParameter('groupement', $groupement)
            ->groupBy('periode.id, dossier.id, natureContract.id, rubrique.id')
            ->getQuery()
            ->getResult()
        ;
        // dd($journals);
        $data = [];
        foreach ($journals as $key => $journal) {
            if($journal['regulArticleUgouvId'] == null) {
                $article = $this->getEntityManager()->getRepository(PCompteComptable::class)->getArticle($journal['rubrique_id'], $journal['natureContract_id']);
                $journal['article'] = $article['articleUgouvId'];
            } else {
                $journal['article'] = $journal['regulArticleUgouvId'];
            }
            
            
            $key = $this->custom_array_search_regul($data, $journal['id_site'], $journal['natureContract_id'], $journal['periode_id']);
            if($journal['type_bordereau'] == 'paie_regularisation') {
                $naturePiece = 7;
            } else {
                $naturePiece = 9;
            }
            if($key === false) {
                array_push($data, [
                    'groupement' => $journal['groupement'],
                    'abreviation_site' => $journal['abreviation_site'],
                    'abreviation2_site' => $journal['abreviation2_site'],
                    'id_site' => $journal['id_site'],
                    'partenaireId' => $dossierRh->getPartenaireId(), // 3817
                    'periode_id' => $journal['periode_id'],
                    'fcy_0' => $journal['fcy_0'],
                    'cpy_0' => $journal['cpy_0'],
                    'type' => $journal['type'],
                    'naturePiece' => $naturePiece,
                    'observation_cab' => $journal['observation_cab'],
                    'observation_operation' => $journal['observation_operation'],
                    'natureContract_id' => $journal['natureContract_id'],
                    'type_bordereau' => $journal['type_bordereau'],
                    'details' => [$journal]
                ]);
            } else {
                array_push($data[$key]['details'], $journal);
            }
            
        }

        $cabs = $this->getEntityManager()->getRepository(TbulletinLg::class)->getCnssCimrPPRegularisation($bordereaux, $groupement, $dossierRh);

        foreach ($cabs as $key => $cab) {
            $key = $this->custom_array_search_regul($data, $cab['id_site'], $cab['natureContract_id'], $cab['periode_id']);
            array_push($data[$key]['details'], $cab);
        }
        // dd($data);

        return $data;
    }

    function custom_array_search($array, $groupement, $searchValue1, $searchValue2, $periode) {
        foreach ($array as $key => $item) {
            if ($item['groupement'] === $groupement && $item['type'] === $searchValue1 && $item['natureContract_id'] === $searchValue2 && $item['periode_id'] === $periode) {
                return $key; // Return the key/index of the found item
            }
        }
        return false; // Return false if not found
    }
    function custom_array_search_regul($array, $idsite, $searchValue2, $periode) {
        foreach ($array as $key => $item) {
            if ($item['id_site'] === $idsite && $item['natureContract_id'] === $searchValue2 && $item['periode_id'] === $periode) {
                return $key; // Return the key/index of the found item
            }
        }
        return false; // Return false if not found
    }
}
