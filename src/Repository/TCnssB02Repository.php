<?php

namespace App\Repository;

use App\Entity\TCnssB02;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TCnssB02>
 *
 * @method TCnssB02|null find($id, $lockMode = null, $lockVersion = null)
 * @method TCnssB02|null findOneBy(array $criteria, array $orderBy = null)
 * @method TCnssB02[]    findAll()
 * @method TCnssB02[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TCnssB02Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TCnssB02::class);
    }

//    /**
//     * @return TCnssB02[] Returns an array of TCnssB02 objects
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

//    public function findOneBySomeField($value): ?TCnssB02
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
