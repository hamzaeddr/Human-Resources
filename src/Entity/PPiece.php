<?php

namespace App\Entity;

use App\Repository\PPieceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PPieceRepository::class)]
class PPiece
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $designation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $abreviation = null;

    #[ORM\OneToMany(mappedBy: 'piece', targetEntity: Tbulletin::class)]
    private Collection $bulletin;

    #[ORM\OneToMany(mappedBy: 'piece', targetEntity: PBordereau::class)]
    private Collection $pBordereaus;

    public function __construct()
    {
        $this->bulletin = new ArrayCollection();
        $this->pBordereaus = new ArrayCollection();
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

    public function getAbreviation(): ?string
    {
        return $this->abreviation;
    }

    public function setAbreviation(?string $abreviation): self
    {
        $this->abreviation = $abreviation;

        return $this;
    }

    /**
     * @return Collection<int, Tbulletin>
     */
    public function getBulletin(): Collection
    {
        return $this->bulletin;
    }

    public function addBulletin(Tbulletin $bulletin): self
    {
        if (!$this->bulletin->contains($bulletin)) {
            $this->bulletin->add($bulletin);
            $bulletin->setPPiece($this);
        }

        return $this;
    }

    public function removeBulletin(Tbulletin $bulletin): self
    {
        if ($this->bulletin->removeElement($bulletin)) {
            // set the owning side to null (unless already changed)
            if ($bulletin->getPPiece() === $this) {
                $bulletin->setPPiece(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PBordereau>
     */
    public function getPBordereaus(): Collection
    {
        return $this->pBordereaus;
    }

    public function addPBordereau(PBordereau $pBordereau): self
    {
        if (!$this->pBordereaus->contains($pBordereau)) {
            $this->pBordereaus->add($pBordereau);
            $pBordereau->setPiece($this);
        }

        return $this;
    }

    public function removePBordereau(PBordereau $pBordereau): self
    {
        if ($this->pBordereaus->removeElement($pBordereau)) {
            // set the owning side to null (unless already changed)
            if ($pBordereau->getPiece() === $this) {
                $pBordereau->setPiece(null);
            }
        }

        return $this;
    }
}
