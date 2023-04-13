<?php

namespace App\Repository;

use App\Entity\LmatriculationCoti;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LmatriculationCoti>
 *
 * @method LmatriculationCoti|null find($id, $lockMode = null, $lockVersion = null)
 * @method LmatriculationCoti|null findOneBy(array $criteria, array $orderBy = null)
 * @method LmatriculationCoti[]    findAll()
 * @method LmatriculationCoti[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LmatriculationCotiRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LmatriculationCoti::class);
    }

    public function save(LmatriculationCoti $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(LmatriculationCoti $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return LmatriculationCoti[] Returns an array of LmatriculationCoti objects
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

//    public function findOneBySomeField($value): ?LmatriculationCoti
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
