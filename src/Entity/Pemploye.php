<?php

namespace App\Entity;

use App\Repository\PemployeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PemployeRepository::class )]
class Pemploye
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'code')]
    private ?PsituationFamiliale $situation_familiale_id = null;

    #[ORM\Column(length: 50, nullable:true )]
    private ?string $code = null;

    #[ORM\Column(length: 50,  nullable:true )]
    private ?string $matricule = null;

    #[ORM\Column(length: 50,  nullable:true )]
    private ?string $nom = null;

    #[ORM\Column(length: 255,  nullable:true )]
    private ?string $prenom = null;

    #[ORM\Column(type: Types::DATE_MUTABLE,  nullable:true )]
    private ?\DateTimeInterface $date_naissance = null;

    #[ORM\Column(length: 50,  nullable:true )]
    private ?string $lieu_naissance = null;

    #[ORM\Column(length: 50,  nullable:true )]
    private ?string $sexe = null;

    #[ORM\Column (nullable:true)]
    private ?int $nombre_enfants = null;

    #[ORM\Column (nullable:true)]
    private ?int $nbr_pris_en_charge = null;

    #[ORM\Column(length: 50,  nullable:true )]
    private ?string $cin = null;

    #[ORM\Column(length: 255,  nullable:true )]
    private ?string $adresse1 = null;

    #[ORM\Column(length: 255,  nullable:true )]
    private ?string $adresse2 = null;

    #[ORM\Column(length: 50,  nullable:true )]
    private ?string $code_postal = null;

    #[ORM\Column(length: 50,  nullable:true )]
    private ?string $ville = null;

    #[ORM\Column(length: 50,  nullable:true )]
    private ?string $pays = null;

    #[ORM\Column(length: 50,  nullable:true )]
    private ?string $nationalite = null;

    #[ORM\Column(length: 255,  nullable:true )]
    private ?int $tel1 = null;

    #[ORM\Column(nullable:true )]
    private ?int $tel2 = null;

    #[ORM\Column(length: 255,  nullable:true )]
    private ?string $email = null;

    #[ORM\Column (nullable:true)]
    private ?int $active = null;

    #[ORM\Column(type: Types::DATE_MUTABLE,  nullable:true )]
    private ?\DateTimeInterface $created = null;

    #[ORM\OneToMany(mappedBy: 'Id_employe', targetEntity: Diplome::class )]
    private Collection $diplomes;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Contacturgent = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $prenomurgence = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nomurgence = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $degredeparente = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $adresseurgence = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $teleurgence = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $villeurgence = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $prenomconjoint = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nomconjoint = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $datenaiconjoint = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nomprenompere = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nomprenommere = null;

    #[ORM\OneToMany(mappedBy: 'employe', targetEntity: LContract::class )]
    private Collection $contracts;
    
    public function __construct()
    {
        $this->diplomes = new ArrayCollection();
        $this->contracts = new ArrayCollection();

    }
    
    /**
     * @return Collection<int, LContract>
     */
    public function getContracts(): Collection
    {
        return $this->contracts;

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSituationFamilialeId(): ?PsituationFamiliale
    {
        return $this->situation_familiale_id;
    }

    public function setSituationFamilialeId(?PsituationFamiliale $situation_familiale_id): self
    {
        $this->situation_familiale_id = $situation_familiale_id;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getMatricule(): ?string
    {
        return $this->matricule;
    }

    public function setMatricule(string $matricule): self
    {
        $this->matricule = $matricule;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getDateNaissance(): ?\DateTimeInterface
    {
        return $this->date_naissance;

    }

    public function setDateNaissance(\DateTimeInterface $date_naissance): self
    {
        $this->date_naissance = $date_naissance;

        return $this;
    }

    public function getLieuNaissance(): ?string
    {
        return $this->lieu_naissance;
    }

    public function setLieuNaissance(string $lieu_naissance): self
    {
        $this->lieu_naissance = $lieu_naissance;

        return $this;
    }

    public function getSexe(): ?string
    {
        return $this->sexe;
    }

    public function setSexe(string $sexe): self
    {
        $this->sexe = $sexe;

        return $this;
    }

    public function getNombreEnfants(): ?int
    {
        return $this->nombre_enfants;
    }

    public function setNombreEnfants(int $nombre_enfants): self
    {
        $this->nombre_enfants = $nombre_enfants;

        return $this;
    }

    public function getNbrPrisEnCharge(): ?int
    {
        return $this->nbr_pris_en_charge;
    }

    public function setNbrPrisEnCharge(int $nbr_pris_en_charge): self
    {
        $this->nbr_pris_en_charge = $nbr_pris_en_charge;

        return $this;
    }

    public function getCin(): ?string
    {
        return $this->cin;
    }

    public function setCin(string $cin): self
    {
        $this->cin = $cin;

        return $this;
    }

    public function getAdresse1(): ?string
    {
        return $this->adresse1;
    }

    public function setAdresse1(string $adresse1): self
    {
        $this->adresse1 = $adresse1;

        return $this;
    }

    public function getAdresse2(): ?string
    {
        return $this->adresse2;
    }

    public function setAdresse2(string $adresse2): self
    {
        $this->adresse2 = $adresse2;

        return $this;
    }

    public function getCodePostal(): ?string
    {
        return $this->code_postal;
    }

    public function setCodePostal(string $code_postal): self
    {
        $this->code_postal = $code_postal;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getPays(): ?string
    {
        return $this->pays;
    }

    public function setPays(string $pays): self
    {
        $this->pays = $pays;

        return $this;
    }

    public function getNationalite(): ?string
    {
        return $this->nationalite;
    }

    public function setNationalite(string $nationalite): self
    {
        $this->nationalite = $nationalite;

        return $this;
    }

    public function getTel1(): ?int
    {
        return $this->tel1;
    }

    public function setTel1(int $tel1): self
    {
        $this->tel1 = $tel1;

        return $this;
    }

    public function getTel2(): ?int
    {
        return $this->tel2;
    }

    public function setTel2(int $tel2): self
    {
        $this->tel2 = $tel2;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getActive(): ?int
    {
        return $this->active;
    }

    public function setActive(int $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(\DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }

    /**
     * @return Collection<int, Diplome>
     */
    public function getDiplomes(): Collection
    {
        return $this->diplomes;
    }

    public function addDiplome(Diplome $diplome): self
    {
        if (!$this->diplomes->contains($diplome)) {
            $this->diplomes->add($diplome);
            $diplome->setIdEmploye($this);
        }

        return $this;
    }

    public function removeDiplome(Diplome $diplome): self
    {
        if ($this->diplomes->removeElement($diplome)) {
            // set the owning side to null (unless already changed)
            if ($diplome->getIdEmploye() === $this) {
                $diplome->setIdEmploye(null);
            }
        }

        return $this;
    }


    public function getContacturgent(): ?string
    {
        return $this->Contacturgent;
    }

    public function setContacturgent(?string $Contacturgent): static
    {
        $this->Contacturgent = $Contacturgent;

        return $this;
    }

    public function getPrenomurgence(): ?string
    {
        return $this->prenomurgence;
    }

    public function setPrenomurgence(?string $prenomurgence): static
    {
        $this->prenomurgence = $prenomurgence;

        return $this;
    }

    public function getNomurgence(): ?string
    {
        return $this->nomurgence;
    }

    public function setNomurgence(?string $nomurgence): static
    {
        $this->nomurgence = $nomurgence;

        return $this;
    }

    public function getDegredeparente(): ?string
    {
        return $this->degredeparente;
    }

    public function setDegredeparente(?string $degredeparente): static
    {
        $this->degredeparente = $degredeparente;

        return $this;
    }

    public function getAdresseurgence(): ?string
    {
        return $this->adresseurgence;
    }

    public function setAdresseurgence(?string $adresseurgence): static
    {
        $this->adresseurgence = $adresseurgence;

        return $this;
    }

    public function getTeleurgence(): ?string
    {
        return $this->teleurgence;
    }

    public function setTeleurgence(?string $teleurgence): static
    {
        $this->teleurgence = $teleurgence;

        return $this;
    }

    public function getVilleurgence(): ?string
    {
        return $this->villeurgence;
    }

    public function setVilleurgence(?string $villeurgence): static
    {
        $this->villeurgence = $villeurgence;

        return $this;
    }

    public function getPrenomconjoint(): ?string
    {
        return $this->prenomconjoint;
    }

    public function setPrenomconjoint(?string $prenomconjoint): static
    {
        $this->prenomconjoint = $prenomconjoint;

        return $this;
    }

    public function getNomconjoint(): ?string
    {
        return $this->nomconjoint;
    }

    public function setNomconjoint(?string $nomconjoint): static
    {
        $this->nomconjoint = $nomconjoint;

        return $this;
    }

    public function getDatenaiconjoint(): ?\DateTimeInterface
    {
        return $this->datenaiconjoint;
    }

    public function setDatenaiconjoint(?\DateTimeInterface $datenaiconjoint): static
    {
        $this->datenaiconjoint = $datenaiconjoint;

        return $this;
    }

    public function getNomprenompere(): ?string
    {
        return $this->nomprenompere;
    }

    public function setNomprenompere(?string $nomprenompere): static
    {
        $this->nomprenompere = $nomprenompere;

        return $this;
    }

    public function getNomprenommere(): ?string
    {
        return $this->nomprenommere;
    }

    public function setNomprenommere(?string $nomprenommere): static
    {
        $this->nomprenommere = $nomprenommere;

        return $this;
    }
    public function getActiveContracts()
    {
        $array = [];
        foreach($this->contracts as $contract) {
            if($contract->getActive() == 1) {
                array_push($array, $contract);
            }
        }
        return $array;
    }

}
