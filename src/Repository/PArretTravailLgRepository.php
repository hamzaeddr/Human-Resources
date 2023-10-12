<?php

namespace App\Repository;

use App\Entity\PArretTravail;
use App\Entity\PArretTravailLg;
use App\Entity\Periode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PArretTravailLg>
 *
 * @method PArretTravailLg|null find($id, $lockMode = null, $lockVersion = null)
 * @method PArretTravailLg|null findOneBy(array $criteria, array $orderBy = null)
 * @method PArretTravailLg[]    findAll()
 * @method PArretTravailLg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PArretTravailLgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PArretTravailLg::class);
    }

    public function save(PArretTravailLg $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PArretTravailLg $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

      
   public function add_Arret_lg($request,$data,$id)
   {
      
    foreach ($data as $range) {
        $Arret = new PArretTravailLg();

        $Arret->setArretTravail(
            $this->getEntityManager()->getRepository(PArretTravail::class)->find($id)
        );
     
        $date = new \DateTime();
        $Arret->setDateDebut($date->setTimestamp(strtotime($range['start'])));
      
        $date = new \DateTime();
        $Arret->setDateFin($date->setTimestamp(strtotime($range['end'])));
      
        $Arret->setNombreJour($range['days']);
      
        $Arret->setActive(1);
       
        $Arret->setPeriode(
            $this->getEntityManager()->getRepository(Periode::class)->find($range['period'])
        );
        
        $this->getEntityManager()->persist($Arret);
    }
        $arret = $this->getEntityManager()->getRepository(PArretTravail::class)->find($id);
        $arret->setActive(1);
        $this->getEntityManager()->persist($arret);

           
   

    

    $this->getEntityManager()->flush();

    return $Arret->getId();

   }

   public function getNombreJoursArret($contractId, $periode) {
        $arretTravail =  $this->createQueryBuilder('p')
            ->select('contract.id as contract_id, periode.id as periode_id, sum(p.nombreJour) as nombreJours')
            ->innerJoin('p.arretTravail', 'arretTravail')
            ->innerJoin('arretTravail.contract', 'contract')
            ->innerJoin('p.periode', 'periode')
            ->where('contract.id = :contract')
            ->andWhere('p.periode = :periode')
            ->andWhere('arretTravail.active = 1')
            ->andWhere('p.active = 1')
            ->setParameter('contract', $contractId)
            ->setParameter('periode', $periode)
            ->groupBy('contract.id, periode.id')
            ->getQuery()
            ->getOneOrNullResult()
        ;
        // dd($arretTravail);
        if($arretTravail == null) {
            return 0;
        } 
        return $arretTravail['nombreJours'];
   }

//    /**
//     * @return PArretTravailLg[] Returns an array of PArretTravailLg objects
//     */
//    public function findByExampleField($value): array
//    {
    //    return $this->createQueryBuilder('p')
    //        ->andWhere('p.exampleField = :val')
    //        ->setParameter('val', $value)
    //        ->orderBy('p.id', 'ASC')
    //        ->setMaxResults(10)
    //        ->getQuery()
    //        ->getResult()
    //    ;
//    }

//    public function findOneBySomeField($value): ?PArretTravailLg
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
