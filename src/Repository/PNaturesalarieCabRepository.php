<?php

namespace App\Repository;

use App\Entity\PNaturesalarieCab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PNaturesalarieCab>
 *
 * @method PNaturesalarieCab|null find($id, $lockMode = null, $lockVersion = null)
 * @method PNaturesalarieCab|null findOneBy(array $criteria, array $orderBy = null)
 * @method PNaturesalarieCab[]    findAll()
 * @method PNaturesalarieCab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PNaturesalarieCabRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PNaturesalarieCab::class);
    }

    public function save(PNaturesalarieCab $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PNaturesalarieCab $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PNaturesalarieCab[] Returns an array of PNaturesalarieCab objects
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

//    public function findOneBySomeField($value): ?PNaturesalarieCab
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
