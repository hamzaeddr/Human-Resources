<?php

namespace App\Repository;

use App\Entity\TCnssA00;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TCnssA00>
 *
 * @method TCnssA00|null find($id, $lockMode = null, $lockVersion = null)
 * @method TCnssA00|null findOneBy(array $criteria, array $orderBy = null)
 * @method TCnssA00[]    findAll()
 * @method TCnssA00[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TCnssA00Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TCnssA00::class);
    }

//    /**
//     * @return TCnssA00[] Returns an array of TCnssA00 objects
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

//    public function findOneBySomeField($value): ?TCnssA00
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
