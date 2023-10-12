<?php

namespace App\Entity;

use App\Repository\PMotifRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PMotifRepository::class)]
class PMotif
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $designation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $abreviation = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\OneToMany(mappedBy: 'motif', targetEntity: PArretTravail::class)]
    private Collection $arretTravails;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $id_element = null;

    public function __construct()
    {
        $this->arretTravails = new ArrayCollection();
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

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    /**
     * @return Collection<int, PArretTravail>
     */
    public function getArretTravails(): Collection
    {
        return $this->arretTravails;
    }

    public function addArretTravail(PArretTravail $arretTravail): self
    {
        if (!$this->arretTravails->contains($arretTravail)) {
            $this->arretTravails->add($arretTravail);
            $arretTravail->setMotif($this);
        }

        return $this;
    }

    public function removeArretTravail(PArretTravail $arretTravail): self
    {
        if ($this->arretTravails->removeElement($arretTravail)) {
            // set the owning side to null (unless already changed)
            if ($arretTravail->getMotif() === $this) {
                $arretTravail->setMotif(null);
            }
        }

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): static
    {
        $this->code = $code;

        return $this;
    }

    public function getIdElement(): ?string
    {
        return $this->id_element;
    }

    public function setIdElement(?string $id_element): static
    {
        $this->id_element = $id_element;

        return $this;
    }
}
