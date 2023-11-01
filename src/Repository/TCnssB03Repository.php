<?php

namespace App\Repository;

use App\Entity\TCnssB03;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TCnssB03>
 *
 * @method TCnssB03|null find($id, $lockMode = null, $lockVersion = null)
 * @method TCnssB03|null findOneBy(array $criteria, array $orderBy = null)
 * @method TCnssB03[]    findAll()
 * @method TCnssB03[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TCnssB03Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TCnssB03::class);
    }

//    /**
//     * @return TCnssB03[] Returns an array of TCnssB03 objects
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

//    public function findOneBySomeField($value): ?TCnssB03
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
