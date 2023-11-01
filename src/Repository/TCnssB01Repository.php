<?php

namespace App\Repository;

use App\Entity\TCnssB01;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TCnssB01>
 *
 * @method TCnssB01|null find($id, $lockMode = null, $lockVersion = null)
 * @method TCnssB01|null findOneBy(array $criteria, array $orderBy = null)
 * @method TCnssB01[]    findAll()
 * @method TCnssB01[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TCnssB01Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TCnssB01::class);
    }

//    /**
//     * @return TCnssB01[] Returns an array of TCnssB01 objects
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

//    public function findOneBySomeField($value): ?TCnssB01
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
