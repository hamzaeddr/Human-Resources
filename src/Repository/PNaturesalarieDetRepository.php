<?php

namespace App\Repository;

use App\Entity\PNaturesalarieDet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PNaturesalarieDet>
 *
 * @method PNaturesalarieDet|null find($id, $lockMode = null, $lockVersion = null)
 * @method PNaturesalarieDet|null findOneBy(array $criteria, array $orderBy = null)
 * @method PNaturesalarieDet[]    findAll()
 * @method PNaturesalarieDet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PNaturesalarieDetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PNaturesalarieDet::class);
    }

    public function save(PNaturesalarieDet $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PNaturesalarieDet $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PNaturesalarieDet[] Returns an array of PNaturesalarieDet objects
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

//    public function findOneBySomeField($value): ?PNaturesalarieDet
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
