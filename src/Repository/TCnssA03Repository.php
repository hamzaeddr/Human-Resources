<?php

namespace App\Repository;

use App\Entity\TCnssA03;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TCnssA03>
 *
 * @method TCnssA03|null find($id, $lockMode = null, $lockVersion = null)
 * @method TCnssA03|null findOneBy(array $criteria, array $orderBy = null)
 * @method TCnssA03[]    findAll()
 * @method TCnssA03[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TCnssA03Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TCnssA03::class);
    }

//    /**
//     * @return TCnssA03[] Returns an array of TCnssA03 objects
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

//    public function findOneBySomeField($value): ?TCnssA03
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
