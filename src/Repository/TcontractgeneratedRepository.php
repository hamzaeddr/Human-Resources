<?php

namespace App\Repository;

use App\Entity\Tcontractgenerated;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Tcontractgenerated>
 *
 * @method Tcontractgenerated|null find($id, $lockMode = null, $lockVersion = null)
 * @method Tcontractgenerated|null findOneBy(array $criteria, array $orderBy = null)
 * @method Tcontractgenerated[]    findAll()
 * @method Tcontractgenerated[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TcontractgeneratedRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Tcontractgenerated::class);
    }

    public function save(Tcontractgenerated $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Tcontractgenerated $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Tcontractgenerated[] Returns an array of Tcontractgenerated objects
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

//    public function findOneBySomeField($value): ?Tcontractgenerated
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
