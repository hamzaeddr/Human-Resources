<?php

namespace App\Entity;

use App\Repository\PfonctionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PfonctionRepository::class)]
class Pfonction
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $code = null;

    #[ORM\Column(length: 255)]
    private ?string $Designation = null;

    #[ORM\Column(length: 255)]
    private ?string $corps = null;

    #[ORM\OneToMany(mappedBy: 'fonctionid', targetEntity: LContract::class)]
    private Collection $lContracts;

    public function __construct()
    {
        $this->lContracts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDesignation(): ?string
    {
        return $this->Designation;
    }

    public function setDesignation(string $Designation): self
    {
        $this->Designation = $Designation;

        return $this;
    }

    public function getCorps(): ?string
    {
        return $this->corps;
    }

    public function setCorps(string $corps): self
    {
        $this->corps = $corps;

        return $this;
    }

    /**
     * @return Collection<int, LContract>
     */
    public function getLContracts(): Collection
    {
        return $this->lContracts;
    }

    public function addLContract(LContract $lContract): static
    {
        if (!$this->lContracts->contains($lContract)) {
            $this->lContracts->add($lContract);
            $lContract->setFonctionid($this);
        }

        return $this;
    }

    public function removeLContract(LContract $lContract): static
    {
        if ($this->lContracts->removeElement($lContract)) {
            // set the owning side to null (unless already changed)
            if ($lContract->getFonctionid() === $this) {
                $lContract->setFonctionid(null);
            }
        }

        return $this;
    }
}
