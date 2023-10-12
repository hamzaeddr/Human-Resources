<?php

namespace App\Repository;

use App\Entity\Det;
use App\Entity\Pemploye;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Det>
 *
 * @method Det|null find($id, $lockMode = null, $lockVersion = null)
 * @method Det|null findOneBy(array $criteria, array $orderBy = null)
 * @method Det[]    findAll()
 * @method Det[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Det::class);
    }

    public function save(Det $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Det $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Det[] Returns an array of Det objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('d.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

   
}
