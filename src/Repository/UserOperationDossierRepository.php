<?php

namespace App\Repository;

use App\Entity\UserOperationDossier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<UserOperationDossier>
 *
 * @method UserOperationDossier|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserOperationDossier|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserOperationDossier[]    findAll()
 * @method UserOperationDossier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserOperationDossierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserOperationDossier::class);
    }

   /**
    * @return UserOperationDossier[] Returns an array of UserOperationDossier objects
    */
   public function finddossier($value): array
   {
       return $this->createQueryBuilder('user')
       ->select('DISTINCT d.designation,d.id,d.abreviation')
       ->innerJoin('user.dossier', 'd')
       ->innerJoin('user.user', 'u')
       ->Where('u.id = :id')
       ->setParameter('id', $value)
           ->getQuery()
           ->getResult()
       ;
       
   }

//    public function findOneBySomeField($value): ?UserOperationDossier
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
