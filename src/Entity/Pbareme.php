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
    private ?string $designation = null;

    #[ORM\Column]
    private ?int $netapayer = null;

    #[ORM\OneToMany(mappedBy: 'bareme', targetEntity: PbaremeBrute::class)]
    private Collection $PbaremeBrutes;



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

    #[ORM\OneToMany(mappedBy: 'pbareme', targetEntity: PNaturesalarieCab::class)]
    private Collection $nature_cab_id;

    #[ORM\ManyToOne(inversedBy: 'pbaremes')]
    private ?PNaturesalarieCab $nature_sal_id = null;

    #[ORM\OneToMany(mappedBy: 'bareme', targetEntity: LContract::class)]
    private Collection $contracts;

    #[ORM\OneToMany(mappedBy: 'bareme', targetEntity: PBaremeCimr::class)]
    private Collection $baremeCimrs;

    public function __construct()
    {
        $this->PbaremeBrutes = new ArrayCollection();
        $this->nature_cab_id = new ArrayCollection();
        $this->contracts = new ArrayCollection();
        $this->baremeCimrs = new ArrayCollection();
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
        return $this->designation;
    }

    public function setDesignation(string $designation): self
    {
        $this->designation = $designation;

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
     * @return Collection<int, PbaremeBrute>
     */
    public function getPbaremeBrutes(): Collection
    {
        return $this->PbaremeBrutes;
    }

    public function addPbaremeBrute(PbaremeBrute $PbaremeBrute): self
    {
        if (!$this->PbaremeBrutes->contains($PbaremeBrute)) {
            $this->PbaremeBrutes->add($PbaremeBrute);
            $PbaremeBrute->setIdBareme($this);
        }

        return $this;
    }

    public function removePbaremeBrute(PbaremeBrute $PbaremeBrute): self
    {
        if ($this->PbaremeBrutes->removeElement($PbaremeBrute)) {
            // set the owning side to null (unless already changed)
            if ($PbaremeBrute->getIdBareme() === $this) {
                $PbaremeBrute->setIdBareme(null);
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
     * @return Collection<int, PNaturesalarieCab>
     */
    public function getNatureCabId(): Collection
    {
        return $this->nature_cab_id;
    }

    public function addNatureCabId(PNaturesalarieCab $natureCabId): self
    {
        if (!$this->nature_cab_id->contains($natureCabId)) {
            $this->nature_cab_id->add($natureCabId);
            $natureCabId->setPbareme($this);
        }

        return $this;
    }

    public function removeNatureCabId(PNaturesalarieCab $natureCabId): self
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

    /**
     * @return Collection<int, LContract>
     */
    public function getContracts(): Collection
    {
        return $this->contracts;
    }

    public function addContract(LContract $contract): self
    {
        if (!$this->contracts->contains($contract)) {
            $this->contracts->add($contract);
            $contract->setBareme($this);
        }

        return $this;
    }

    public function removeContract(LContract $contract): self
    {
        if ($this->contracts->removeElement($contract)) {
            // set the owning side to null (unless already changed)
            if ($contract->getBareme() === $this) {
                $contract->setBareme(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PBaremeCimr>
     */
    public function getBaremeCimrs(): Collection
    {
        return $this->baremeCimrs;
    }

    public function addBaremeCimr(PBaremeCimr $baremeCimr): self
    {
        if (!$this->baremeCimrs->contains($baremeCimr)) {
            $this->baremeCimrs->add($baremeCimr);
            $baremeCimr->setBareme($this);
        }

        return $this;
    }

    public function removeBaremeCimr(PBaremeCimr $baremeCimr): self
    {
        if ($this->baremeCimrs->removeElement($baremeCimr)) {
            // set the owning side to null (unless already changed)
            if ($baremeCimr->getBareme() === $this) {
                $baremeCimr->setBareme(null);
            }
        }

        return $this;
    }
}
