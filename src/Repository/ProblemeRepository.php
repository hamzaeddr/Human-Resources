<?php

namespace App\Repository;

use App\Entity\Probleme;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Probleme>
 *
 * @method Probleme|null find($id, $lockMode = null, $lockVersion = null)
 * @method Probleme|null findOneBy(array $criteria, array $orderBy = null)
 * @method Probleme[]    findAll()
 * @method Probleme[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProblemeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Probleme::class);
    }

    public function save(Probleme $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Probleme $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Probleme[] Returns an array of Probleme objects
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

   public function checkIfTheresProblemes($periode, $contract)
   {
       $problems =  $this->createQueryBuilder('p')
            ->innerJoin('p.contract', 'c')
            ->where('p.periode = :periode')
            ->andWhere('c.id = :contract')
            ->andWhere('p.resoudre = 0')
            ->setParameter('contract', $contract)
            ->setParameter('periode', $periode)
            ->getQuery()
            ->getResult()
        ;   
        // dd($problems);
        return count($problems) > 0 ? count($problems) . ' <i class="fa-solid fa-circle-exclamation text-warning fa-lg" type="button" id="problemes"></i>' : '<i class="fa-solid fa-circle-check text-success"></i>';
   }
}
