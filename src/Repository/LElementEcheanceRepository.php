<?php

namespace App\Repository;

use App\Entity\LElementEcheance;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LElementEcheance>
 *
 * @method LElementEcheance|null find($id, $lockMode = null, $lockVersion = null)
 * @method LElementEcheance|null findOneBy(array $criteria, array $orderBy = null)
 * @method LElementEcheance[]    findAll()
 * @method LElementEcheance[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LElementEcheanceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LElementEcheance::class);
    }

    public function save(LElementEcheance $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(LElementEcheance $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return LElementEcheance[] Returns an array of LElementEcheance objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('l.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?LElementEcheance
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
