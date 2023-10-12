<?php

namespace App\Repository;

use App\Entity\PBaremeCimr;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PBaremeCimr>
 *
 * @method PBaremeCimr|null find($id, $lockMode = null, $lockVersion = null)
 * @method PBaremeCimr|null findOneBy(array $criteria, array $orderBy = null)
 * @method PBaremeCimr[]    findAll()
 * @method PBaremeCimr[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PBaremeCimrRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PBaremeCimr::class);
    }

    public function save(PBaremeCimr $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PBaremeCimr $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PBaremeCimr[] Returns an array of PBaremeCimr objects
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

//    public function findOneBySomeField($value): ?PBaremeCimr
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
