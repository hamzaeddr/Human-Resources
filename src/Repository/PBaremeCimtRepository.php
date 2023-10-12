<?php

namespace App\Repository;

use App\Entity\PBaremeCimt;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PBaremeCimt>
 *
 * @method PBaremeCimt|null find($id, $lockMode = null, $lockVersion = null)
 * @method PBaremeCimt|null findOneBy(array $criteria, array $orderBy = null)
 * @method PBaremeCimt[]    findAll()
 * @method PBaremeCimt[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PBaremeCimtRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PBaremeCimt::class);
    }

    public function save(PBaremeCimt $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PBaremeCimt $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PBaremeCimt[] Returns an array of PBaremeCimt objects
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

//    public function findOneBySomeField($value): ?PBaremeCimt
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
