<?php

namespace App\Repository;

use App\Entity\VMatrix;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<VMatrix>
 *
 * @method VMatrix|null find($id, $lockMode = null, $lockVersion = null)
 * @method VMatrix|null findOneBy(array $criteria, array $orderBy = null)
 * @method VMatrix[]    findAll()
 * @method VMatrix[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VMatrixRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VMatrix::class);
    }

    public function save(VMatrix $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(VMatrix $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return VMatrix[] Returns an array of VMatrix objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('v.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

   public function getNombreAnneeAnciennte($dateAnciennete)
   {
       $now = new \DateTime();
       $now->modify('last day of this month'); //30-09-2023

       $nombreAnneeTravail = $dateAnciennete->diff($now)->y;
       
        
        return $this->createQueryBuilder('v')
            ->where('v.min <= :min')
            ->andWhere('v.max > :max')
            ->andWhere('v.type = :type')
            ->setParameter('min', $nombreAnneeTravail)
            ->setParameter('type', 'anciennete')
            ->setParameter('max', $nombreAnneeTravail)
            ->getQuery()
            ->getOneOrNullResult()
        ;
   }
   public function getTauxIr($montant)
   {
        return $this->createQueryBuilder('v')
            ->where('v.min <= :min')
            ->andWhere('v.max >= :max')
            ->andWhere('v.type = :type')
            ->setParameter('min', $montant)
            ->setParameter('type', 'ir')
            ->setParameter('max', $montant)
            ->getQuery()
            ->getOneOrNullResult()
        ;
   }
}
