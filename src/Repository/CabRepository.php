<?php

namespace App\Repository;

use App\Entity\Cab;
use App\Entity\Pemploye;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Cab>
 *
 * @method Cab|null find($id, $lockMode = null, $lockVersion = null)
 * @method Cab|null findOneBy(array $criteria, array $orderBy = null)
 * @method Cab[]    findAll()
 * @method Cab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CabRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Cab::class);
    }

    public function save(Cab $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Cab $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Cab[] Returns an array of Cab objects
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
