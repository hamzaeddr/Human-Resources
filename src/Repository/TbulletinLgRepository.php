<?php

namespace App\Repository;

use App\Entity\TbulletinLg;
use App\Entity\PCompteComptable;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<TbulletinLg>
 *
 * @method TbulletinLg|null find($id, $lockMode = null, $lockVersion = null)
 * @method TbulletinLg|null findOneBy(array $criteria, array $orderBy = null)
 * @method TbulletinLg[]    findAll()
 * @method TbulletinLg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TbulletinLgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TbulletinLg::class);
    }

    public function save(TbulletinLg $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(TbulletinLg $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return TbulletinLg[] Returns an array of TbulletinLg objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

   public function checkPayementAllocation($periode, $contract)
   {
        return $this->createQueryBuilder('t')
            ->innerJoin('t.rubrique', 'rubrique')
            ->innerJoin('t.bulletin', 'bulletin')
            ->innerJoin('bulletin.periode', 'periode')
            ->innerJoin('bulletin.contract', 'contract')
            ->innerJoin('contract.employe', 'employe')
            ->where('rubrique.id = 59')
            ->andWhere('periode = :periode')
            ->andWhere('t.active = 1')
            ->andWhere('employe = :employe')
            ->setParameter('employe', $contract->getEmploye())
            ->setParameter('periode', $periode)
            ->getQuery()
            ->getOneOrNullResult()
        ;
   }
   public function groupementByRubriqueDossierPeriode($bordereau)
   {
        return $this->createQueryBuilder('t')
            ->select('rubrique.id, rubrique.designation, sum(t.montant) as montant')
            ->innerJoin('t.rubrique', 'rubrique')
            ->innerJoin('t.bulletin', 'bulletin')
            ->where('bulletin.periode = :periode')
            ->andWhere('bulletin.bordereau = :bordereau')
            ->andWhere('t.active = 1')
            ->andWhere('rubrique.journal = 1')
            ->setParameter('periode', $bordereau->getPeriode())
            ->setParameter('bordereau', $bordereau)
            ->groupBy('rubrique.id')
            ->getQuery()
            ->getResult()
        ;
   }
   public function findByCotisation($bulletin, $arrayIds)
   {
        return $this->createQueryBuilder('t')
            ->innerJoin('t.rubrique', 'rubrique')
            ->where('rubrique.id IN (:arrayIds)')
            ->andWhere('t.bulletin = :bulletin')
            ->andWhere('t.active = 1')
            ->setParameter('arrayIds', $arrayIds)
            ->setParameter('bulletin', $bulletin)
            ->getQuery()
            ->getResult()
        ;
   }
    public function findByCotisationGroupBulletin($bulletin, $arrayIds)
    {
        // echo $arrayIds;
        // die;
        return $this->createQueryBuilder('t')
            ->select('bulletin.id, sum(t.montant) as montant')
            ->innerJoin('t.rubrique', 'rubrique')
            ->innerJoin('t.bulletin', 'bulletin')
            ->where('rubrique.id IN (:arrayIds)')
            ->andWhere('t.bulletin = :bulletin')
            ->andWhere('t.active = 1')
            ->setParameter('arrayIds', $arrayIds)
            ->setParameter('bulletin', $bulletin)
            ->groupBy('bulletin.id')
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    public function getCnssCimrPP($bordereaux, $groupement, $dossierRh)
    {
        // echo $arrayIds;
        // die;
        $cabs = $this->createQueryBuilder('t')
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
                CONCAT(bordereau.type,\' \',natureContract.designation,\' \', periode.code,\' \', CASE WHEN rubrique.id = 57 THEN \'cimr pp\' ELSE \'cnss pp\'  END) as observation_cab,
                CONCAT(bordereau.type,\' \',natureContract.designation,\' \', periode.code,\' \', rubrique.designation) as observation_det,
                rubrique.designation as rubrique_designation , 
                SUM(t.montant) as montant, 
                rubrique.siteId as rubrique_site_id, 
                rubrique.partenaireId, 
                CASE WHEN rubrique.id = 57 THEN \'cimr pp\' ELSE \'cnss pp\'  END as type,
                bordereau.type as type_bordereau')
            ->innerJoin('t.bulletin', 'bulletin')
            ->innerJoin('bulletin.bordereau', 'bordereau')
            ->innerJoin('bordereau.periode', 'periode')
            ->innerJoin('bordereau.dossier', 'dossier')
            ->innerJoin('t.rubrique', 'rubrique')
            ->innerJoin('bordereau.natureContract', 'natureContract')
            ->Where('bordereau.id IN (:bordereaux)')
            ->andWhere('rubrique.id IN (:rubriqueIds)')
            ->andWhere('t.active = 1')
            ->andWhere('dossier.groupement = :groupement')
            ->setParameter('bordereaux', $bordereaux)
            ->setParameter('rubriqueIds', [57, 51, 52,54, 55, 56, 58])
            ->setParameter('groupement', $groupement)
            ->groupBy('periode.id, dossier.groupement, natureContract.id, rubrique.id')
            ->getQuery()
            ->getResult()
        ;

        $data = [];
        foreach ($cabs as $key => $cab) {
            
            $article = $this->getEntityManager()->getRepository(PCompteComptable::class)->getArticle($cab['rubrique_id'], $cab['natureContract_id']);
            $cab['article'] = $article['articleUgouvId'];
            $cab['codeComptable'] = $article['codeComptable'];
            $cab['qte'] = $article['qte'];
            
           
            $key = $this->custom_array_search($data, $cab['groupement'], $cab['type'], $cab['natureContract_id'], $cab['periode_id']);
           
            if($key === false) {
                if($cab['groupement'] == 'FCZ') {
                    array_push($data, [
                        'groupement' => $dossierRh->getGroupement(),
                        'abreviation_site' => $dossierRh->getAbreviationUgouv(),
                        'abreviation2_site' => $dossierRh->getAbreviation2(),
                        'id_site' => $dossierRh->getDossierUgouvId(),
                        'periode_id' => $cab['periode_id'],
                        'fcy_0' => $dossierRh->getFcy0(),
                        'cpy_0' => $dossierRh->getCpy0(),
                        'type' => $cab['type'],
                        'naturePiece' => 10,
                        'observation_cab' => $cab['observation_cab'],
                        'observation_operation' => $cab['observation_operation'],
                        'natureContract_id' => $cab['natureContract_id'],
                        'type_bordereau' => $cab['type_bordereau'],
                        'partenaireId' => $cab['partenaireId'],
                        'details' => [$cab]
                    ]);
                } else {
                    array_push($data, [
                        'groupement' => $cab['groupement'],
                        'abreviation_site' => $cab['abreviation_site'],
                        'abreviation2_site' => $cab['abreviation2_site'],
                        'id_site' => $cab['id_site'],
                        'periode_id' => $cab['periode_id'],
                        'fcy_0' => $cab['fcy_0'],
                        'cpy_0' => $cab['cpy_0'],
                        'type' => $cab['type'],
                        'naturePiece' => 10,
                        'observation_cab' => $cab['observation_cab'],
                        'observation_operation' => $cab['observation_operation'],
                        'natureContract_id' => $cab['natureContract_id'],
                        'type_bordereau' => $cab['type_bordereau'],
                        'partenaireId' => $cab['partenaireId'],
                        'details' => [$cab]
                    ]);
                }
            } else {
                if($cab['partenaireId']) {
                    $data[$key]['partenaireId'] = $cab['partenaireId'];
                }
                array_push($data[$key]['details'], $cab);
            }
            
        }

        return $data;
    }
    public function getCnssCimrPPRegularisation($bordereaux, $groupement, $dossierRh)
    {
        // echo $arrayIds;
        // die;
        $cabs = $this->createQueryBuilder('t')
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
                CONCAT(\'regularisation \', bordereau.type,\' \',natureContract.designation,\' \', periode.code,\' \', CASE WHEN rubrique.id = 57 THEN \'cimr pp\' ELSE \'cnss pp\'  END) as observation_cab,
                CONCAT(\'regularisation \', bordereau.type,\' \',natureContract.designation,\' \', periode.code,\' \', rubrique.designation) as observation_det,
                rubrique.designation as rubrique_designation , 
                SUM(t.montant) as montant, 
                rubrique.siteId as rubrique_site_id, 
                rubrique.regulArticleUgouvId as regulArticleUgouvId, 
                CASE WHEN rubrique.id = 57 THEN \'regularisation_cimr pp\' ELSE \'regularisation_cnss pp\'  END as type,
                bordereau.type as type_bordereau')
            ->innerJoin('t.bulletin', 'bulletin')
            ->innerJoin('bulletin.bordereau', 'bordereau')
            ->innerJoin('bordereau.periode', 'periode')
            ->innerJoin('bordereau.dossier', 'dossier')
            ->innerJoin('t.rubrique', 'rubrique')
            ->innerJoin('bordereau.natureContract', 'natureContract')
            ->Where('bordereau.id IN (:bordereaux)')
            ->andWhere('rubrique.id IN (:rubriqueIds)')
            ->andWhere('t.active = 1')
            ->andWhere('dossier.groupement = :groupement')
            ->setParameter('bordereaux', $bordereaux)
            ->setParameter('rubriqueIds', [57, 51, 52,54, 55, 56, 58])
            ->setParameter('groupement', $groupement)
            ->groupBy('periode.id, dossier.id, natureContract.id, rubrique.id')
            ->getQuery()
            ->getResult()
        ;

        foreach ($cabs as $key => $cab) {
            $article = $this->getEntityManager()->getRepository(PCompteComptable::class)->getArticle($cab['rubrique_id'], $cab['natureContract_id']);
            if($cab['regulArticleUgouvId'] == null) {
                $cabs[$key]['article'] = $article['articleUgouvId'];

            } else {
                $cabs[$key]['article'] = $cab['regulArticleUgouvId'];
            }
            $cabs[$key]['codeComptable'] = $article['codeComptable'];
            $cabs[$key]['qte'] = $article['qte'];
            $cabs[$key]['partenaireId'] = $dossierRh->getPartenaireId();
        }

        return $cabs;
    }

    function custom_array_search($array, $groupement, $searchValue1, $searchValue2, $periode) {
        foreach ($array as $key => $item) {
            if ($item['groupement'] === $groupement && $item['type'] === $searchValue1 && $item['natureContract_id'] === $searchValue2 && $item['periode_id'] === $periode) {
                return $key; // Return the key/index of the found item
            }
        }
        return false; // Return false if not found
    }
    
}
