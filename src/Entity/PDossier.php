<?php

namespace App\Entity;

use App\Repository\PDossierRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PDossierRepository::class)]
class PDossier
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 150)]
    private ?string $designation = null;

    #[ORM\Column(length: 150)]
    private ?string $abreviation = null;

    #[ORM\Column(length: 150)]
    private ?string $code = null;

  

    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: LContract::class)]
    private Collection $contracts;

    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: Tbulletin::class)]
    private Collection $bulletins;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $groupement = null;

    #[ORM\Column(nullable: true)]
    private ?int $DossierUgouvId = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $abreviation2 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $abreviationUgouv = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fcy0 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cpy0 = null;

    #[ORM\Column(nullable: true)]
    private ?int $partenaireId = null;

    // #[ORM\OneToMany(mappedBy: 'dossier_id', targetEntity: LdossierContract::class)]
    // private Collection $ldossierContracts;

   

    public function __construct()
    {

        $this->contracts = new ArrayCollection();
        $this->bulletins = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(string $Designation): self
    {
        $this->designation = $Designation;

        return $this;
    }

    public function getAbreviation(): ?string
    {
        return $this->abreviation;
    }

    public function setAbreviation(string $Abreviation): self
    {
        $this->abreviation = $Abreviation;

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


    /**
     * @return Collection<int, LContract>
     */
    public function getContracts(): Collection
    {
        return $this->contracts;
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

    public function addContract(LContract $contract): self
    {
        if (!$this->contracts->contains($contract)) {
            $this->contracts->add($contract);
            $contract->setDossier($this);
        }

        return $this;
    }

    public function removeContract(LContract $contract): self
    {
        if ($this->contracts->removeElement($contract)) {
            // set the owning side to null (unless already changed)
            if ($contract->getDossier() === $this) {
                $contract->setDossier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Tbulletin>
     */
    public function getBulletins(): Collection
    {
        return $this->bulletins;
    }

    public function addBulletin(Tbulletin $bulletin): self
    {
        if (!$this->bulletins->contains($bulletin)) {
            $this->bulletins->add($bulletin);
            $bulletin->setDossier($this);
        }

        return $this;
    }

    public function removeBulletin(Tbulletin $bulletin): self
    {
        if ($this->bulletins->removeElement($bulletin)) {
            // set the owning side to null (unless already changed)
            if ($bulletin->getDossier() === $this) {
                $bulletin->setDossier(null);
            }
        }

        return $this;
    }

    public function getGroupement(): ?string
    {
        return $this->groupement;
    }

    public function setGroupement(?string $groupement): self
    {
        $this->groupement = $groupement;

        return $this;
    }

    public function getDossierUgouvId(): ?int
    {
        return $this->DossierUgouvId;
    }

    public function setDossierUgouvId(?int $DossierUgouvId): self
    {
        $this->DossierUgouvId = $DossierUgouvId;

        return $this;
    }

    public function getAbreviation2(): ?string
    {
        return $this->abreviation2;
    }

    public function setAbreviation2(?string $abreviation2): self
    {
        $this->abreviation2 = $abreviation2;

        return $this;
    }

    public function getAbreviationUgouv(): ?string
    {
        return $this->abreviationUgouv;
    }

    public function setAbreviationUgouv(?string $AbreviationUgouv): self
    {
        $this->abreviationUgouv = $AbreviationUgouv;

        return $this;
    }

    public function getFcy0(): ?string
    {
        return $this->fcy0;
    }

    public function setFcy0(?string $fcy0): self
    {
        $this->fcy0 = $fcy0;

        return $this;
    }

    public function getCpy0(): ?string
    {
        return $this->cpy0;
    }

    public function setCpy0(?string $cpy0): self
    {
        $this->cpy0 = $cpy0;

        return $this;
    }

    public function getPartenaireId(): ?int
    {
        return $this->partenaireId;
    }

    public function setPartenaireId(?int $partenaireId): self
    {
        $this->partenaireId = $partenaireId;

        return $this;
    }
}
