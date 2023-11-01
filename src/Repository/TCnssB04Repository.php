<?php

namespace App\Repository;

use App\Entity\TCnssB04;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TCnssB04>
 *
 * @method TCnssB04|null find($id, $lockMode = null, $lockVersion = null)
 * @method TCnssB04|null findOneBy(array $criteria, array $orderBy = null)
 * @method TCnssB04[]    findAll()
 * @method TCnssB04[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TCnssB04Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TCnssB04::class);
    }

//    /**
//     * @return TCnssB04[] Returns an array of TCnssB04 objects
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

//    public function findOneBySomeField($value): ?TCnssB04
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
