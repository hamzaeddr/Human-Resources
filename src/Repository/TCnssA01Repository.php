<?php

namespace App\Repository;

use App\Entity\TCnssA01;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TCnssA01>
 *
 * @method TCnssA01|null find($id, $lockMode = null, $lockVersion = null)
 * @method TCnssA01|null findOneBy(array $criteria, array $orderBy = null)
 * @method TCnssA01[]    findAll()
 * @method TCnssA01[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TCnssA01Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TCnssA01::class);
    }

//    /**
//     * @return TCnssA01[] Returns an array of TCnssA01 objects
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

//    public function findOneBySomeField($value): ?TCnssA01
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
