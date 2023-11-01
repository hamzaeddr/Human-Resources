<?php

namespace App\Repository;

use App\Entity\TCnssA02;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TCnssA02>
 *
 * @method TCnssA02|null find($id, $lockMode = null, $lockVersion = null)
 * @method TCnssA02|null findOneBy(array $criteria, array $orderBy = null)
 * @method TCnssA02[]    findAll()
 * @method TCnssA02[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TCnssA02Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TCnssA02::class);
    }

//    /**
//     * @return TCnssA02[] Returns an array of TCnssA02 objects
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

//    public function findOneBySomeField($value): ?TCnssA02
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
