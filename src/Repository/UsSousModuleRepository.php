<?php

namespace App\Repository;

use App\Entity\UsSousModule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<UsSousModule>
 *
 * @method UsSousModule|null find($id, $lockMode = null, $lockVersion = null)
 * @method UsSousModule|null findOneBy(array $criteria, array $orderBy = null)
 * @method UsSousModule[]    findAll()
 * @method UsSousModule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsSousModuleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UsSousModule::class);
    }

    public function add(UsSousModule $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(UsSousModule $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
    public function findByUserOperations($user, $dossier) {
        return $this->createQueryBuilder('u')
            ->innerJoin('u.operations', "usOperation")
            ->innerJoin('usOperation.userOperationDossiers', "userOperationDossier")
            ->where('userOperationDossier.user = :user')
            ->andWhere('userOperationDossier.dossier = :dossier')
            ->setParameter('user', $user)
            ->setParameter('dossier', $dossier)
            ->getQuery()
            ->getResult()
        ;
        // dd($request);
    }

//    /**
//     * @return UsSousModule[] Returns an array of UsSousModule objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('u.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?UsSousModule
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
