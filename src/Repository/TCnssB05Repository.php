<?php

namespace App\Repository;

use App\Entity\TCnssB05;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TCnssB05>
 *
 * @method TCnssB05|null find($id, $lockMode = null, $lockVersion = null)
 * @method TCnssB05|null findOneBy(array $criteria, array $orderBy = null)
 * @method TCnssB05[]    findAll()
 * @method TCnssB05[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TCnssB05Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TCnssB05::class);
    }

//    /**
//     * @return TCnssB05[] Returns an array of TCnssB05 objects
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

//    public function findOneBySomeField($value): ?TCnssB05
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
