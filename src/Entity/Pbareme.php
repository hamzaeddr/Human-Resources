<?php

namespace App\Entity;

use App\Repository\PbaremeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PbaremeRepository::class)]
class Pbareme
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $niveau_id = null;

    #[ORM\Column]
    private ?int $bareme = null;

    #[ORM\Column(length: 255)]
    private ?string $Designation = null;

    #[ORM\Column]
    private ?int $netapayer = null;

    #[ORM\OneToMany(mappedBy: 'Id_bareme', targetEntity: PbaremeBrute::class)]
    private Collection $pbaremebrutes;

    #[ORM\OneToMany(mappedBy: 'Bareme_id', targetEntity: LbaremeContract::class)]
    private Collection $lbaremeContracts;

    #[ORM\Column(length: 150)]
    private ?string $Profil = null;

    #[ORM\Column(length: 255)]
    private ?string $Poste = null;

    #[ORM\Column(length: 255)]
    private ?string $Experience = null;

   

    #[ORM\Column]
    private ?int $Groupe = null;

    #[ORM\Column]
    private ?int $Salaire_brute = null;

    #[ORM\Column]
    private ?int $anc_Profil1 = null;

    #[ORM\Column]
    private ?int $anc_Profil2 = null;

    #[ORM\OneToMany(mappedBy: 'pbareme', targetEntity: PnaturesalarieCab::class)]
    private Collection $nature_cab_id;

    #[ORM\ManyToOne(inversedBy: 'pbaremes')]
    private ?PNaturesalarieCab $nature_sal_id = null;

    public function __construct()
    {
        $this->pbaremebrutes = new ArrayCollection();
        $this->lbaremeContracts = new ArrayCollection();
        $this->nature_cab_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNiveauId(): ?int
    {
        return $this->niveau_id;
    }

    public function setNiveauId(int $niveau_id): self
    {
        $this->niveau_id = $niveau_id;

        return $this;
    }

   

    public function getBareme(): ?int
    {
        return $this->bareme;
    }

    public function setBareme(int $bareme): self
    {
        $this->bareme = $bareme;

        return $this;
    }

    public function getDesignation(): ?string
    {
        return $this->Designation;
    }

    public function setDesignation(string $Designation): self
    {
        $this->Designation = $Designation;

        return $this;
    }

    public function getNetapayer(): ?int
    {
        return $this->netapayer;
    }

    public function setNetapayer(int $netapayer): self
    {
        $this->netapayer = $netapayer;

        return $this;
    }

    /**
     * @return Collection<int, Pbaremebrute>
     */
    public function getPbaremebrutes(): Collection
    {
        return $this->pbaremebrutes;
    }

    public function addPbaremebrute(PbaremeBrute $pbaremebrute): self
    {
        if (!$this->pbaremebrutes->contains($pbaremebrute)) {
            $this->pbaremebrutes->add($pbaremebrute);
            $pbaremebrute->setIdBareme($this);
        }

        return $this;
    }

    public function removePbaremebrute(PbaremeBrute $pbaremebrute): self
    {
        if ($this->pbaremebrutes->removeElement($pbaremebrute)) {
            // set the owning side to null (unless already changed)
            if ($pbaremebrute->getIdBareme() === $this) {
                $pbaremebrute->setIdBareme(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, LbaremeContract>
     */
    public function getLbaremeContracts(): Collection
    {
        return $this->lbaremeContracts;
    }

    public function addLbaremeContract(LbaremeContract $lbaremeContract): self
    {
        if (!$this->lbaremeContracts->contains($lbaremeContract)) {
            $this->lbaremeContracts->add($lbaremeContract);
            $lbaremeContract->setBaremeId($this);
        }

        return $this;
    }

    public function removeLbaremeContract(LbaremeContract $lbaremeContract): self
    {
        if ($this->lbaremeContracts->removeElement($lbaremeContract)) {
            // set the owning side to null (unless already changed)
            if ($lbaremeContract->getBaremeId() === $this) {
                $lbaremeContract->setBaremeId(null);
            }
        }

        return $this;
    }

    public function getProfil(): ?string
    {
        return $this->Profil;
    }

    public function setProfil(string $Profil): self
    {
        $this->Profil = $Profil;

        return $this;
    }

    public function getPoste(): ?string
    {
        return $this->Poste;
    }

    public function setPoste(string $Poste): self
    {
        $this->Poste = $Poste;

        return $this;
    }

    public function getExperience(): ?string
    {
        return $this->Experience;
    }

    public function setExperience(string $Experience): self
    {
        $this->Experience = $Experience;

        return $this;
    }


    public function getGroupe(): ?int
    {
        return $this->Groupe;
    }

    public function setGroupe(int $Groupe): self
    {
        $this->Groupe = $Groupe;

        return $this;
    }

    public function getSalaireBrute(): ?int
    {
        return $this->Salaire_brute;
    }

    public function setSalaireBrute(int $Salaire_brute): self
    {
        $this->Salaire_brute = $Salaire_brute;

        return $this;
    }

    public function getAncProfil1(): ?int
    {
        return $this->anc_Profil1;
    }

    public function setAncProfil1(int $anc_Profil1): self
    {
        $this->anc_Profil1 = $anc_Profil1;

        return $this;
    }

    public function getAncProfil2(): ?int
    {
        return $this->anc_Profil2;
    }

    public function setAncProfil2(int $anc_Profil2): self
    {
        $this->anc_Profil2 = $anc_Profil2;

        return $this;
    }

    /**
     * @return Collection<int, PnaturesalarieCab>
     */
    public function getNatureCabId(): Collection
    {
        return $this->nature_cab_id;
    }

    public function addNatureCabId(PnaturesalarieCab $natureCabId): self
    {
        if (!$this->nature_cab_id->contains($natureCabId)) {
            $this->nature_cab_id->add($natureCabId);
            $natureCabId->setPbareme($this);
        }

        return $this;
    }

    public function removeNatureCabId(PnaturesalarieCab $natureCabId): self
    {
        if ($this->nature_cab_id->removeElement($natureCabId)) {
            // set the owning side to null (unless already changed)
            if ($natureCabId->getPbareme() === $this) {
                $natureCabId->setPbareme(null);
            }
        }

        return $this;
    }

    public function getNatureSalId(): ?PNaturesalarieCab
    {
        return $this->nature_sal_id;
    }

    public function setNatureSalId(?PNaturesalarieCab $nature_sal_id): self
    {
        $this->nature_sal_id = $nature_sal_id;

        return $this;
    }
}
