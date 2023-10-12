<?php

namespace App\Entity;

use App\Repository\PNaturesalarieCabRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PNaturesalarieCabRepository::class)]
class PNaturesalarieCab
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Nature = null;

    #[ORM\Column(length: 100)]
    private ?string $Type = null;

    #[ORM\OneToMany(mappedBy: 'id_nature_sal', targetEntity: PNaturesalarieDet::class)]
    private Collection $pNaturesalaries;

    #[ORM\OneToMany(mappedBy: 'nature_sal_id', targetEntity: Pbareme::class)]
    private Collection $pbaremes;

   

    public function __construct()
    {
        $this->pNaturesalaries = new ArrayCollection();
        $this->pbaremes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNature(): ?string
    {
        return $this->Nature;
    }

    public function setNature(string $Nature): self
    {
        $this->Nature = $Nature;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->Type;
    }

    public function setType(string $Type): self
    {
        $this->Type = $Type;

        return $this;
    }

  

    /**
     * @return Collection<int, PNaturesalarie>
     */
    public function getPNaturesalaries(): Collection
    {
        return $this->pNaturesalaries;
    }

    public function addPNaturesalary(PNaturesalarieDet $pNaturesalary): self
    {
        if (!$this->pNaturesalaries->contains($pNaturesalary)) {
            $this->pNaturesalaries->add($pNaturesalary);
            $pNaturesalary->setIdNatureSal($this);
        }

        return $this;
    }

    public function removePNaturesalary(PNaturesalarieDet $pNaturesalary): self
    {
        if ($this->pNaturesalaries->removeElement($pNaturesalary)) {
            // set the owning side to null (unless already changed)
            if ($pNaturesalary->getIdNatureSal() === $this) {
                $pNaturesalary->setIdNatureSal(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Pbareme>
     */
    public function getPbaremes(): Collection
    {
        return $this->pbaremes;
    }

    public function addPbareme(Pbareme $pbareme): self
    {
        if (!$this->pbaremes->contains($pbareme)) {
            $this->pbaremes->add($pbareme);
            $pbareme->setNatureSalId($this);
        }

        return $this;
    }

    public function removePbareme(Pbareme $pbareme): self
    {
        if ($this->pbaremes->removeElement($pbareme)) {
            // set the owning side to null (unless already changed)
            if ($pbareme->getNatureSalId() === $this) {
                $pbareme->setNatureSalId(null);
            }
        }

        return $this;
    }

   
}
