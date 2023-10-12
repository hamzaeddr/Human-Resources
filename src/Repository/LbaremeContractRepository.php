<?php

namespace App\Repository;

use App\Entity\LbaremeContract;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LbaremeContract>
 *
 * @method LbaremeContract|null find($id, $lockMode = null, $lockVersion = null)
 * @method LbaremeContract|null findOneBy(array $criteria, array $orderBy = null)
 * @method LbaremeContract[]    findAll()
 * @method LbaremeContract[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LbaremeContractRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LbaremeContract::class);
    }

    public function save(LbaremeContract $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(LbaremeContract $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return LbaremeContract[] Returns an array of LbaremeContract objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('l.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?LbaremeContract
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
