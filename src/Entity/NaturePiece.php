<?php

namespace App\Entity;

use App\Repository\NaturePieceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: NaturePieceRepository::class)]
class NaturePiece
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $designation;

    #[ORM\OneToMany(mappedBy: 'naturePiece', targetEntity: Cab::class)]
    private $cabs;

    public function __construct()
    {
        $this->cabs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(?string $designation): self
    {
        $this->designation = $designation;

        return $this;
    }

    /**
     * @return Collection<int, Cab>
     */
    public function getCabs(): Collection
    {
        return $this->cabs;
    }

    public function addCab(Cab $cab): self
    {
        if (!$this->cabs->contains($cab)) {
            $this->cabs[] = $cab;
            $cab->setNaturePiece($this);
        }

        return $this;
    }

    public function removeCab(Cab $cab): self
    {
        if ($this->cabs->removeElement($cab)) {
            // set the owning side to null (unless already changed)
            if ($cab->getNaturePiece() === $this) {
                $cab->setNaturePiece(null);
            }
        }

        return $this;
    }
}
