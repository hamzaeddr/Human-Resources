<?php

namespace App\Repository;

use App\Entity\LContract;
use App\Entity\LmatriculationCoti;
use App\Entity\Lrib;
use App\Entity\PtypeCoti;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LmatriculationCoti>
 *
 * @method LmatriculationCoti|null find($id, $lockMode = null, $lockVersion = null)
 * @method LmatriculationCoti|null findOneBy(array $criteria, array $orderBy = null)
 * @method LmatriculationCoti[]    findAll()
 * @method LmatriculationCoti[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LmatriculationCotiRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LmatriculationCoti::class);
    }

    public function save(LmatriculationCoti $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(LmatriculationCoti $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function add_cnss($list)
   {
      
        $LmatriculationCoti = new LmatriculationCoti();
        $LmatriculationCoti->setTypeId(
            $this->getEntityManager()->getRepository(PtypeCoti::class)->find(1)
        );
        $LmatriculationCoti->setActive(1);
        $date = new \DateTime();
        $LmatriculationCoti->setDateAffiliation($date->setTimestamp(strtotime($list->get('date_declaration_cnss'))));
        $LmatriculationCoti->setContractId(
            $this->getEntityManager()->getRepository(LContract::class)->find($list->get('contract_id'))

        );
        $LmatriculationCoti->setCode($list->get('cnss'));
        $LmatriculationCoti->setDesignation('-');
        
        $this->getEntityManager()->persist($LmatriculationCoti);

    

    $this->getEntityManager()->flush();

    return $LmatriculationCoti;

   }
    public function add_cimr($list)
   {
      
        $LmatriculationCoti = new LmatriculationCoti();
        $LmatriculationCoti->setTypeId(
            $this->getEntityManager()->getRepository(PtypeCoti::class)->find(2)
        );
        $LmatriculationCoti->setActive(1);
        $date = new \DateTime();
        $LmatriculationCoti->setDateAffiliation($date->setTimestamp(strtotime($list->get('date_declaration_cimr'))));
        $LmatriculationCoti->setContractId(
            $this->getEntityManager()->getRepository(LContract::class)->find($list->get('contract_id'))

        );
        $LmatriculationCoti->setCode($list->get('cimr'));
        $LmatriculationCoti->setDesignation('-');
        
        $this->getEntityManager()->persist($LmatriculationCoti);

    

    $this->getEntityManager()->flush();

    return $LmatriculationCoti;

   }
    public function add_rib($list)
   {
      
        $Lrib = new Lrib();
             $Lrib->setContactId(
            $this->getEntityManager()->getRepository(LContract::class)->find($list->get('contract_id'))

        );
        $Lrib->setCode($list->get('rib'));
        $Lrib->setDesignation('-');
        
        $this->getEntityManager()->persist($Lrib);

    

    $this->getEntityManager()->flush();

    return $Lrib;

   }

    public function get_cnss_cimr($list)
   {
      
        $Lrib = new Lrib();
             $Lrib->setContactId(
            $this->getEntityManager()->getRepository(LContract::class)->find($list->get('contract_id'))

        );
        $Lrib->setCode($list->get('rib'));
        $Lrib->setDesignation('-');
        
        $this->getEntityManager()->persist($Lrib);

    

    $this->getEntityManager()->flush();

    return $Lrib;

   }

    public function update_cnss_cimr($list)
   {

    //cnss
    if ($list->get('cnssid') =='0'){

    }
        else{
    # code...
    $cnss = $this->getEntityManager()->getRepository(LmatriculationCoti::class)->find($list->get('cnssid'));

    $date = new \DateTime();
    $cnss->setDateAffiliation($date->setTimestamp(strtotime($list->get('date_cnssup'))));

    $cnss->setCode($list->get('cnssup'));
   

    $this->getEntityManager()->persist($cnss);
}

    ///cimr
    if ($list->get('cimrid') == '0' ) {
    }
    else {

    $cimr = $this->getEntityManager()->getRepository(LmatriculationCoti::class)->find($list->get('cimrid'));

    $date = new \DateTime();

    $cimr->setDateAffiliation($date->setTimestamp(strtotime($list->get('date_cimr'))));
   
    $cimr->setCode($list->get('cimrup'));
    
    $this->getEntityManager()->persist($cimr);

    }

    //rib
    if ($list->get('ribid') == '0' ) {
    }
    else{

    $rib = $this->getEntityManager()->getRepository(Lrib::class)->find($list->get('ribid'));

    $rib->setCode($list->get('ribup'));
    
    $this->getEntityManager()->persist($rib);
    }
    $this->getEntityManager()->flush();
    return 'ok';

   }
//    /**
//     * @return LmatriculationCoti[] Returns an array of LmatriculationCoti objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('l.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?LmatriculationCoti
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
