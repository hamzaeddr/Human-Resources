<?php

namespace App\Repository;

use App\Entity\PdureeContract;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PdureeContract>
 *
 * @method PdureeContract|null find($id, $lockMode = null, $lockVersion = null)
 * @method PdureeContract|null findOneBy(array $criteria, array $orderBy = null)
 * @method PdureeContract[]    findAll()
 * @method PdureeContract[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PdureeContractRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PdureeContract::class);
    }

    public function save(PdureeContract $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PdureeContract $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }


    public function finddureByContractId($contractId)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.nature_contarct_id = :cntId')
            ->setParameter('cntId', $contractId)
            ->getQuery()
            ->getResult();
    }

//    /**
//     * @return PdureeContract[] Returns an array of PdureeContract objects
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

//    public function findOneBySomeField($value): ?PdureeContract
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
