<?php

namespace App\Repository;

use App\Entity\LContract;
use App\Entity\PArretTravail;
use App\Entity\PMotif;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PArretTravail>
 *
 * @method PArretTravail|null find($id, $lockMode = null, $lockVersion = null)
 * @method PArretTravail|null findOneBy(array $criteria, array $orderBy = null)
 * @method PArretTravail[]    findAll()
 * @method PArretTravail[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PArretTravailRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PArretTravail::class);
    }

    public function save(PArretTravail $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PArretTravail $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    
   public function add_Arret($list)
   {
      
        $Arret = new PArretTravail();
        $Arret->setContract(
            
            $this->getEntityManager()->getRepository(LContract::class)->find($list->get('id_emp_arret'))
        );
        $Arret->setMotif(

            $this->getEntityManager()->getRepository(PMotif::class)->find($list->get('motif_id'))

        );

        $date = new \DateTime();
        $Arret->setDateDebut($date->setTimestamp(strtotime($list->get('datedebut'))));
      
        $date = new \DateTime();
        $Arret->setDateFin($date->setTimestamp(strtotime($list->get('datefin'))));
      
        $date = new \DateTime();
        $Arret->setDateReprise($date->setTimestamp(strtotime($list->get('datereprise'))));
      
        $Arret->setActive(0);
       

        
        $this->getEntityManager()->persist($Arret);

    

    $this->getEntityManager()->flush();
    // dd($Arret);

    return $Arret->getId();

   }
//    /**
//     * @return PArretTravail[] Returns an array of PArretTravail objects
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

//    public function findOneBySomeField($value): ?PArretTravail
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
