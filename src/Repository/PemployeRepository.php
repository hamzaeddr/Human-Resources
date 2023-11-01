<?php

namespace App\Repository;

use App\Entity\Pemploye;
use App\Entity\PsituationFamiliale;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Pemploye>
 *
 * @method Pemploye|null find($id, $lockMode = null, $lockVersion = null)
 * @method Pemploye|null findOneBy(array $criteria, array $orderBy = null)
 * @method Pemploye[]    findAll()
 * @method Pemploye[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PemployeRepository extends ServiceEntityRepository
{
    
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Pemploye::class);
    }

    public function save(Pemploye $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Pemploye $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

   /**
    * @return Pemploye[] Returns an array of Pemploye objects
    */
   public function findByExampleField($value): array
   {
       return $this->createQueryBuilder('p')
           ->innerJoin('')
           ->andWhere('p.exampleField = :val')
           ->setParameter('val', $value)
           ->orderBy('p.id', 'ASC')
           ->setMaxResults(10)
           ->getQuery()
           ->getResult()
       ;
   }
   public function findEmployeesNotInLContract()
   {
       $qb = $this->createQueryBuilder('pe');
   
       $subQuery = $this->getEntityManager()->createQueryBuilder();
       $subQuery
           ->select('employe.id')
           ->from('App\Entity\LContract', 'lcontract')
           ->innerJoin('lcontract.employe', 'employe');

   
       $qb
           ->where($qb->expr()->notIn('pe.id', $subQuery->getDQL()))
           ->orderBy('pe.id', 'ASC');
   
       return $qb->getQuery()->getResult();
   }
   

   public function New_employe($data)
   {

    $employe = new Pemploye();

    $employe->setNom($data->get('nom'));
    $employe->setPrenom($data->get('prenom'));
    $date = new \DateTime();
    $employe->setDateNaissance($date->setTimestamp(strtotime($data->get('date_naissance'))));
    $employe->setLieuNaissance($data->get('lieu_naissance'));
    $employe->setCin($data->get('cin'));
    $employe->setSexe($data->get('sexe'));
    $employe->setSituationFamilialeId(
        $this->getEntityManager()->getRepository(PsituationFamiliale::class)->find($data->get('situation_familiale'))
    );
    $employe->setAdresse1($data->get('adresse_1'));
    if ($data->get('adresse_2')) {
      $employe->setAdresse2($data->get('adresse_2'));

    }
    $employe->setNationalite($data->get('nationalite'));
    $employe->setSexe($data->get('sexe'));
    $employe->setCodePostal($data->get('code_postal'));

    if ($data->get('code_postal')) {
        $employe->setCodePostal($data->get('code_postal'));

  
      }
    $employe->setVille($data->get('ville'));
    $employe->setPays($data->get('pays'));
    $employe->setTel1($data->get('telephone_1'));

    if ($data->get('telephone_2')) {
        $employe->setTel2($data->get('telephone_2'));

  
      }
    if ($data->get('email')) {
        $employe->setEmail($data->get('email'));

  
      }
    $employe->setActive(0);
  
    $this->getEntityManager()->persist($employe);

        $this->getEntityManager()->flush();

return $employe;


      
   }

   
   public function add_plusinfo($data)
   {

    $employe = $this->getEntityManager()->getRepository(Pemploye::class)->find($data->get('employe_id'));


    $employe->setContacturgent($data->get('contact_cas_urgence'));
    $employe->setPrenomurgence($data->get('prenom_cas_urgence'));
    $employe->setNomurgence($data->get('nom_cas_urgence'));
    $employe->setDegredeparente($data->get('degre_parente'));
    $employe->setAdresseurgence($data->get('adresse_cas_urgence'));
    $employe->setTeleurgence($data->get('telephone_cas_urgence'));
    $employe->setVilleurgence($data->get('ville_cas_urgence'));
    $employe->setPrenomconjoint($data->get('prenom_conjoint'));
    $employe->setNomconjoint($data->get('nom_conjoint'));
    $date = new \DateTime();
    $employe->setDatenaiconjoint($date->setTimestamp(strtotime($data->get('date_naissance_conjoint'))));
    $employe->setNomprenompere($data->get('nom_prenom_pere'));
    $employe->setNomprenommere($data->get('nom_prenom_mere'));
   
  
    $this->getEntityManager()->persist($employe);

        $this->getEntityManager()->flush();

return $employe;


      
   }
}
