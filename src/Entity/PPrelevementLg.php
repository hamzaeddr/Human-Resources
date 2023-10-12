<?php

namespace App\Entity;

use App\Repository\PPrelevementLgRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PPrelevementLgRepository::class)]
class PPrelevementLg
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'prelevementLgs')]
    private ?PPrelevement $prelevement = null;

    #[ORM\ManyToOne(inversedBy: 'prelevementLgs')]
    private ?Periode $periode = null;

    #[ORM\Column(nullable: true)]
    private ?float $montant = null;

    #[ORM\Column(nullable: true)]
    private ?bool $valider = false;

    #[ORM\Column(nullable: true)]
    private ?bool $active = true;

    #[ORM\ManyToOne(inversedBy: 'prelevementLgs')]
    private ?Tbulletin $bulletin = null;

    #[ORM\OneToMany(mappedBy: 'prelevementLg', targetEntity: Probleme::class)]
    private Collection $problemes;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motif = null;

    public function __construct()
    {
        $this->problemes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrelevement(): ?PPrelevement
    {
        return $this->prelevement;
    }

    public function setPrelevement(?PPrelevement $prelevement): self
    {
        $this->prelevement = $prelevement;

        return $this;
    }

    public function getPeriode(): ?Periode
    {
        return $this->periode;
    }

    public function setPeriode(?Periode $periode): self
    {
        $this->periode = $periode;

        return $this;
    }

    public function getMontant(): ?float
    {
        return $this->montant;
    }

    public function setMontant(?float $montant): self
    {
        $this->montant = $montant;

        return $this;
    }

    public function isValider(): ?bool
    {
        return $this->valider;
    }

    public function setValider(?bool $valider): self
    {
        $this->valider = $valider;

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

    public function getBulletin(): ?Tbulletin
    {
        return $this->bulletin;
    }

    public function setBulletin(?Tbulletin $bulletin): self
    {
        $this->bulletin = $bulletin;

        return $this;
    }

    /**
     * @return Collection<int, Probleme>
     */
    public function getProblemes(): Collection
    {
        return $this->problemes;
    }

    public function addProbleme(Probleme $probleme): self
    {
        if (!$this->problemes->contains($probleme)) {
            $this->problemes->add($probleme);
            $probleme->setPrelevementLg($this);
        }

        return $this;
    }

    public function removeProbleme(Probleme $probleme): self
    {
        if ($this->problemes->removeElement($probleme)) {
            // set the owning side to null (unless already changed)
            if ($probleme->getPrelevementLg() === $this) {
                $probleme->setPrelevementLg(null);
            }
        }

        return $this;
    }

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(?string $motif): self
    {
        $this->motif = $motif;

        return $this;
    }
}
