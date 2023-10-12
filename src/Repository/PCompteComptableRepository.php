<?php

namespace App\Repository;

use App\Entity\PCompteComptable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PCompteComptable>
 *
 * @method PCompteComptable|null find($id, $lockMode = null, $lockVersion = null)
 * @method PCompteComptable|null findOneBy(array $criteria, array $orderBy = null)
 * @method PCompteComptable[]    findAll()
 * @method PCompteComptable[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PCompteComptableRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PCompteComptable::class);
    }

    public function save(PCompteComptable $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PCompteComptable $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PCompteComptable[] Returns an array of PCompteComptable objects
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

   public function getArticle($rubriqueId, $natureContractId)
   {
        return $this->createQueryBuilder('c')
            ->select('c.articleUgouvId, c.compteComptable as codeComptable, c.qte')
            ->innerJoin('c.natureContract', 'nc')
            ->innerJoin('c.rubrique', 'r')
            ->where('r.id = :rubrique')
            ->andWhere('nc.id = :naturecontract')
            ->setParameter('rubrique',$rubriqueId)
            ->setParameter('naturecontract',$natureContractId)
            ->getQuery()
            ->getOneOrNullResult()
        ;
   }
}
