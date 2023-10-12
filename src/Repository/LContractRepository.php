<?php

namespace App\Repository;

use App\Entity\PPiece;
use App\Entity\Pbareme;
use App\Entity\PDossier;
use App\Entity\Pemploye;
use App\Entity\LContract;
use App\Entity\Pfonction;
use App\Entity\PnatureContract;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<LContract>
 *
 * @method LContract|null find($id, $lockMode = null, $lockVersion = null)
 * @method LContract|null findOneBy(array $criteria, array $orderBy = null)
 * @method LContract[]    findAll()
 * @method LContract[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LContractRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LContract::class);
    }

    public function save(LContract $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(LContract $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return LContract[] Returns an array of LContract objects
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

   public function getNetAPaye($periode, $contract)
   {
        $bulletinLg =  $this->createQueryBuilder('l')
            ->select('bulletinLgs.montant')
            ->innerJoin('l.bulletins', 'bulletin')
            ->innerJoin('bulletin.bulletinLgs', 'bulletinLgs')
            ->innerJoin('bulletinLgs.rubrique', 'rubrique')
            ->innerJoin('bulletin.piece', 'piece')
            ->andWhere('bulletin.periode = :periode')
            ->andWhere('l.id = :contract')
            ->andWhere('bulletinLgs.active = 1')
            ->andWhere('rubrique.id = 5 or rubrique.id = 68') // 5 is net a paye
            ->andWhere('piece.id = 1')
            ->setParameter('periode', $periode)
            ->setParameter('contract', $contract)
            ->getQuery()
            ->getOneOrNullResult()
        ;
        if($bulletinLg and $bulletinLg['montant'])
        {
            return  '<p style="text-align: right !important; margin:0 !important">'.number_format($bulletinLg['montant'], 2, ',' , ' ').'</p>';
        }

        return '<i class="fa-sharp fa-solid fa-circle-xmark text-danger" ></i>';
   }

   public function add_contract($list)
   {
      
        $piece = $this->getEntityManager()->getRepository(PPiece::class)->find(8); // 

        $Lcontract = new LContract();
        $Lcontract->setEmploye(
            $this->getEntityManager()->getRepository(Pemploye::class)->find($list->get('employe_id'))
        );
        $Lcontract->setPnatureContract(
            $this->getEntityManager()->getRepository(PnatureContract::class)->find($list->get('nature_contrat'))

        );
        $date = new \DateTime();
        $Lcontract->setDateDebut($date->setTimestamp(strtotime($list->get('date_contrat'))));
        $Lcontract->setDossier(
            $this->getEntityManager()->getRepository(PDossier::class)->find($list->get('affectation'))

        );

        $Lcontract->setPiece($piece);
        $Lcontract->setfonction(
            $this->getEntityManager()->getRepository(Pfonction::class)->find($list->get('fonction'))

        );
        $Lcontract->setActive(1);
        $Lcontract->setSalaireaffecte($list->get('salaire_affecte'));
        $Lcontract->setDateFin($date->setTimestamp(strtotime($list->get('date_fin'))));
        $Lcontract->setBareme(
             $this->getEntityManager()->getRepository(Pbareme::class)->find($list->get('bareme'))
        );
        $employe = $this->getEntityManager()->getRepository(Pemploye::class)->find($list->get('employe_id'));
        $employe->setActive(1);

        
        $this->getEntityManager()->persist($Lcontract);
        $this->getEntityManager()->persist($employe);

    

    $this->getEntityManager()->flush();

    return $Lcontract->getId();

   }


   public function update_contract($list)
   {
      
        $Lcontract = $this->getEntityManager()->getRepository(LContract::class)->find($list->get('contract_id'));

       
       
        $date = new \DateTime();
        // dd($list->get('date_contrat'));
        $Lcontract->setDateDebut($date->setTimestamp(strtotime($list->get('date_contrat'))));
       
        $Lcontract->setfonction(
            $this->getEntityManager()->getRepository(Pfonction::class)->find($list->get('fonction'))

        );
        
        $Lcontract->setDateFin($date->setTimestamp(strtotime($list->get('date_fin'))));
       
        $this->getEntityManager()->persist($Lcontract);

    

        $this->getEntityManager()->flush();

        return $Lcontract;

    }

    public function findContractAndRib($dossier) {
        return  $this->createQueryBuilder('l')
            ->select('l.id, employe.nom, employe.prenom,lribs.designation as rib')
            ->innerJoin('l.employe', 'employe')
            ->leftJoin('l.lribs', 'lribs')
            ->andWhere('l.dossier = :dossier')
            ->andWhere('l.bareme IS NOT NULL')
            ->andWhere('l.active = 1')
            ->setParameter('dossier', $dossier)
            ->getQuery()
            ->getResult()
        ;
    }
    public function getPersonnels($groupement, $bordereaux, $rubriqueId,  $periodeId, $natureContractId) {
        return  $this->createQueryBuilder('c')
            ->select('employe.nom, employe.prenom, lribs.designation as rib, employe.code, bulletinLgs.montant')
            ->innerJoin('c.bulletins', 'bulletin')
            ->innerJoin('c.employe', 'employe')
            ->innerJoin('bulletin.bordereau', 'bordereau')
            ->innerJoin('bordereau.periode', 'periode')
            ->innerJoin('bulletin.bulletinLgs', 'bulletinLgs')
            ->innerJoin('bulletinLgs.rubrique', 'rubrique')
            ->innerJoin('bordereau.dossier', 'dossier')
            ->innerJoin('bordereau.natureContract', 'natureContract')
            ->leftJoin('c.lribs', 'lribs')
            ->andWhere('dossier.groupement = :groupement')
            ->andWhere('natureContract.id = :natureId')
            ->andWhere('bordereau IN (:bordereaux)')
            ->andWhere('rubrique.id in (5, 68) and rubrique.id = :rubrique_id')
            // ->andWhere('lribs.active = 1')
            ->andWhere('bulletinLgs.active = 1')
            ->andWhere('periode.id = :periode')
            ->setParameter('groupement', $groupement)
            ->setParameter('bordereaux', $bordereaux)
            ->setParameter('rubrique_id', $rubriqueId)
            ->setParameter('periode', $periodeId)
            ->setParameter('natureId', $natureContractId)
            ->getQuery()
            ->getResult()
        ;
    }
}
