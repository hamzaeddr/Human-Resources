<?php

namespace App\Repository;

use App\Entity\PtypeCoti;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PtypeCoti>
 *
 * @method PtypeCoti|null find($id, $lockMode = null, $lockVersion = null)
 * @method PtypeCoti|null findOneBy(array $criteria, array $orderBy = null)
 * @method PtypeCoti[]    findAll()
 * @method PtypeCoti[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PtypeCotiRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PtypeCoti::class);
    }

    public function save(PtypeCoti $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PtypeCoti $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PtypeCoti[] Returns an array of PtypeCoti objects
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

//    public function findOneBySomeField($value): ?PtypeCoti
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
