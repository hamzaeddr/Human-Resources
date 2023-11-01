<?php

namespace App\Repository;

use App\Entity\TCnssB00;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TCnssB00>
 *
 * @method TCnssB00|null find($id, $lockMode = null, $lockVersion = null)
 * @method TCnssB00|null findOneBy(array $criteria, array $orderBy = null)
 * @method TCnssB00[]    findAll()
 * @method TCnssB00[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TCnssB00Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TCnssB00::class);
    }

//    /**
//     * @return TCnssB00[] Returns an array of TCnssB00 objects
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

//    public function findOneBySomeField($value): ?TCnssB00
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
