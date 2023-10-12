<?php

namespace App\Repository;

use App\Entity\PPrelevementLg;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PPrelevementLg>
 *
 * @method PPrelevementLg|null find($id, $lockMode = null, $lockVersion = null)
 * @method PPrelevementLg|null findOneBy(array $criteria, array $orderBy = null)
 * @method PPrelevementLg[]    findAll()
 * @method PPrelevementLg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PPrelevementLgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PPrelevementLg::class);
    }

    public function save(PPrelevementLg $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PPrelevementLg $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PPrelevementLg[] Returns an array of PPrelevementLg objects
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

   public function getPrelevementByPeriodeAndContract($contract, $periode)
   {
       return $this->createQueryBuilder('p')
            ->innerJoin('p.prelevement', 'prelevement')
            ->where('p.periode = :periode')
            ->andWhere('prelevement.contract = :contract')
            ->andWhere('p.active = 1')
            // ->andWhere('p.valider = 0')
            ->setParameter('contract', $contract)
            ->setParameter('periode', $periode)
            ->getQuery()
            ->getResult()
        ;
   }
}
