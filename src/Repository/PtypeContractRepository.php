<?php

namespace App\Repository;

use App\Entity\PtypeContract;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PtypeContract>
 *
 * @method PtypeContract|null find($id, $lockMode = null, $lockVersion = null)
 * @method PtypeContract|null findOneBy(array $criteria, array $orderBy = null)
 * @method PtypeContract[]    findAll()
 * @method PtypeContract[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PtypeContractRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PtypeContract::class);
    }

//    /**
//     * @return PtypeContract[] Returns an array of PtypeContract objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PtypeContract
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
