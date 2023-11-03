<?php

namespace App\Entity;

use App\Repository\PtypeContractRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PtypeContractRepository::class)]
class PtypeContract
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $designation = null;

    #[ORM\OneToMany(mappedBy: 'type', targetEntity: PnatureContract::class)]
    private Collection $pnatureContracts;

    #[ORM\Column(length: 70, nullable: true)]
    private ?string $abreviation = null;

    public function __construct()
    {
        $this->pnatureContracts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(?string $designation): static
    {
        $this->designation = $designation;

        return $this;
    }

    /**
     * @return Collection<int, PnatureContract>
     */
    public function getPnatureContracts(): Collection
    {
        return $this->pnatureContracts;
    }

    public function addPnatureContract(PnatureContract $pnatureContract): static
    {
        if (!$this->pnatureContracts->contains($pnatureContract)) {
            $this->pnatureContracts->add($pnatureContract);
            $pnatureContract->setType($this);
        }

        return $this;
    }

    public function removePnatureContract(PnatureContract $pnatureContract): static
    {
        if ($this->pnatureContracts->removeElement($pnatureContract)) {
            // set the owning side to null (unless already changed)
            if ($pnatureContract->getType() === $this) {
                $pnatureContract->setType(null);
            }
        }

        return $this;
    }

    public function getAbreviation(): ?string
    {
        return $this->abreviation;
    }

    public function setAbreviation(?string $abreviation): self
    {
        $this->abreviation = $abreviation;

        return $this;
    }
}
