<?php

namespace App\Repository;

use App\Entity\LelementFixe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LelementFixe>
 *
 * @method LelementFixe|null find($id, $lockMode = null, $lockVersion = null)
 * @method LelementFixe|null findOneBy(array $criteria, array $orderBy = null)
 * @method LelementFixe[]    findAll()
 * @method LelementFixe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LelementFixeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LelementFixe::class);
    }

    public function save(LelementFixe $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(LelementFixe $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return LelementFixe[] Returns an array of LelementFixe objects
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

//    public function findOneBySomeField($value): ?LelementFixe
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
