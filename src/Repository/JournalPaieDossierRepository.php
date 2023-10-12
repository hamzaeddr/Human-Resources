<?php

namespace App\Repository;

use App\Entity\JournalPaieDossier;
use App\Entity\LContract;
use App\Entity\PCompteComptable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<JournalPaieDossier>
 *
 * @method JournalPaieDossier|null find($id, $lockMode = null, $lockVersion = null)
 * @method JournalPaieDossier|null findOneBy(array $criteria, array $orderBy = null)
 * @method JournalPaieDossier[]    findAll()
 * @method JournalPaieDossier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class JournalPaieDossierRepository extends ServiceEntityRepository
{
    private $pcompteComptableRepository;
    public function __construct(ManagerRegistry $registry, PCompteComptableRepository $pcompteComptableRepository)
    {
        parent::__construct($registry, JournalPaieDossier::class);
        $this->pcompteComptableRepository = $pcompteComptableRepository;
    }

    public function save(JournalPaieDossier $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(JournalPaieDossier $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return JournalPaieDossier[] Returns an array of JournalPaieDossier objects
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

    public function getJournaleDePaie($bordereaux, $groupement)
    {
        return $this->createQueryBuilder('j')
            ->select('dossier.groupement, 
                periode.id as periode_id,
                journal_dossier.abreviationUgouv as abreviation_site, 
                j.created as date_operation, 
                journal_dossier.abreviation2 as abreviation2_site,
                journal_dossier.DossierUgouvId as id_site, 
                journal_dossier.fcy0 as fcy_0, 
                journal_dossier.cpy0 as cpy_0, 
                natureContract.designation as observation_operation, 
                natureContract.id as natureContract_id, 
                rubrique.id as rubrique_id, 
                rubrique.designation as rubrique_designation , 
                SUM(j.montant) as montant, 
                j.codeComptable, 
                j.sens, 
                j.tier1 ')
            ->innerJoin('j.bordereau', 'bordereau')
            ->innerJoin('bordereau.periode', 'periode')
            ->innerJoin('bordereau.dossier', 'dossier')
            ->innerJoin('j.dossier', 'journal_dossier')
            ->innerJoin('j.rubrique', 'rubrique')
            ->innerJoin('j.natureContract', 'natureContract')
            ->andWhere('j.bordereau IN (:bordereaux)')
            ->andWhere('j.flagRegularisation = 0')
            ->andWhere('j.active = 1')
            ->andWhere('dossier.groupement = :groupement')
            ->setParameter('bordereaux', $bordereaux)
            ->setParameter('groupement', $groupement)
            ->groupBy('dossier.groupement, natureContract.id, periode.id, rubrique.id')
            ->getQuery()
            ->getResult()
        ;
    }
    public function getJournaleDePaieRegularisation($bordereaux, $groupement)
    {
        return $this->createQueryBuilder('j')
            ->select('dossier.DossierUgouvId as id_site,
                dossier.abreviationUgouv as abreviation_site,
                dossier.abreviation2 as abreviation2_site, 
                dossier.fcy0 as fcy_0, 
                periode.id as periode_id,
                dossier.cpy0 as cpy_0, 
                j.created as date_operation, 
                natureContract.designation as observation_operation, 
                SUM(j.montant) as montant, 
                rubrique.id as rubrique_id, 
                rubrique.designation as rubrique_designation , 
                6898775105 as codeComptable, 
                1 as sens, 
                j.tier1, 
                j.tier2')
            ->innerJoin('j.bordereau', 'bordereau')
            ->innerJoin('bordereau.periode', 'periode')
            ->innerJoin('bordereau.dossier', 'dossier')
            ->innerJoin('j.rubrique', 'rubrique')
            ->innerJoin('j.natureContract', 'natureContract')
            ->andWhere('j.bordereau IN (:bordereaux)')
            ->andWhere('j.flagRegularisation = 1')
            ->andWhere('j.active = 1')
            ->andWhere('dossier.groupement = :groupement')
            ->setParameter('bordereaux', $bordereaux)
            ->setParameter('groupement', $groupement)
            ->groupBy('dossier.id, periode.id')
            ->getQuery()
            ->getResult()
        ;
    }

    // public function getCab($bordereaux, $groupement)
    // {
    //     $journals = $this->createQueryBuilder('j')
    //         ->select('dossier.groupement, 
    //             journal_dossier.abreviationUgouv as abreviation_site, 
    //             j.created as date_operation, 
    //             periode.id as periode_id,
    //             journal_dossier.abreviation2 as abreviation2_site,
    //             journal_dossier.DossierUgouvId as id_site, 
    //             journal_dossier.fcy0 as fcy_0, 
    //             journal_dossier.cpy0 as cpy_0, 
    //             natureContract.designation as observation_operation, 
    //             natureContract.id as natureContract_id, 
    //             rubrique.id as rubrique_id, 
    //             rubrique.code as rubrique_code, 
    //             CONCAT(bordereau.type,\' \',natureContract.designation,\' \', periode.code,\' \', CASE WHEN matrice.type is null THEN rubrique.designation ELSE matrice.type END) as observation,
    //             rubrique.designation as rubrique_designation , 
    //             CASE WHEN matrice.type is null THEN rubrique.designation ELSE matrice.type END as type_rubrique,
    //             SUM(j.montant) as montant, 
    //             j.codeComptable, 
    //             rubrique.siteId as rubrique_site_id, 
    //             j.sens, 
    //             j.tier1,
    //             matrice.type ,
    //             bordereau.type as type_bordereau')
    //         ->innerJoin('j.bordereau', 'bordereau')
    //         ->innerJoin('bordereau.periode', 'periode')
    //         ->innerJoin('bordereau.dossier', 'dossier')
    //         ->innerJoin('j.dossier', 'journal_dossier')
    //         ->innerJoin('j.rubrique', 'rubrique')
    //         ->innerJoin('j.natureContract', 'natureContract')
    //         ->leftJoin('rubrique.matrices', 'matrice')
    //         ->andWhere('j.bordereau IN (:bordereaux)')
    //         ->andWhere('rubrique.flagInput = 1')
    //         ->andWhere('j.flagRegularisation = 0')
    //         ->andWhere('j.active = 1')
    //         ->andWhere('dossier.groupement = :groupement')
    //         ->setParameter('bordereaux', $bordereaux)
    //         ->setParameter('groupement', $groupement)
    //         ->groupBy('dossier.groupement, natureContract.id, rubrique.id, periode.id')
    //         ->getQuery()
    //         ->getResult()
    //     ;
    //     // dd($journals);
    //     $data = [];
    //     foreach ($journals as $key => $journal) {
            
    //         $personnels = $this->getEntityManager()->getRepository(LContract::class)->getPersonnels($groupement, $bordereaux, $journal['rubrique_id'],  $journal['periode_id'],$journal['natureContract_id']);
            
    //         $article = $this->getEntityManager()->getRepository(PCompteComptable::class)->getArticle($journal['rubrique_id'], $journal['natureContract_id']);

    //         $journal['personnels'] = $personnels;
    //         $journal['article'] = $article['articleUgouvId'];

    //         if($journal['type'] == 'cnss') {
    //             $key = $this->custom_array_search($data, 'cnss',$journal['natureContract_id'], $journal['periode_id']);
    //             if($key === false) {
    //                 array_push($data, [
    //                     'groupement' => $journal['groupement'],
    //                     'abreviation_site' => $journal['abreviation_site'],
    //                     'abreviation2_site' => $journal['abreviation2_site'],
    //                     'id_site' => $journal['id_site'],
    //                     'periode_id' => $journal['periode_id'],
    //                     'fcy_0' => $journal['fcy_0'],
    //                     'cpy_0' => $journal['cpy_0'],
    //                     'type' => $journal['type'],
    //                     'observation_operation' => $journal['observation_operation'],
    //                     'observation' => $journal['observation'],
    //                     'natureContract_id' => $journal['natureContract_id'],
    //                     'type_bordereau' => $journal['type_bordereau'],
    //                     'details' => [$journal]
    //                 ]);
    //             } else {
    //                array_push($data[$key]['details'], $journal);
    //             }
    //         } else {
    //             array_push($data, $journal);
    //         }
    //     }


    //     return $data;
    // }

    // function custom_array_search($array, $searchValue1, $searchValue2, $periode) {
    //     foreach ($array as $key => $item) {
    //         if ($item['type'] === $searchValue1 && $item['natureContract_id'] === $searchValue2 && $item['periode_id'] === $periode) {
    //             return $key; // Return the key/index of the found item
    //         }
    //     }
    //     return false; // Return false if not found
    // }
}
