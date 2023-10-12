<?php

namespace App\Entity;

use App\Repository\LElementEcheanceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LElementEcheanceRepository::class)]
class LElementEcheance
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'elementEcheances')]
    private ?LContract $contract = null;

    #[ORM\ManyToOne(inversedBy: 'elementEcheances')]
    private ?Periode $periode = null;

    #[ORM\ManyToOne(inversedBy: 'elementEcheances')]
    private ?Prubrique $rubrique = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateEcheance = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;



    #[ORM\Column(nullable: true)]
    private ?float $sens = null;

    #[ORM\Column(nullable: true)]
    private ?float $montant = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = true;

    #[ORM\Column(nullable: true)]
    private ?bool $valider = false;

    #[ORM\ManyToOne(inversedBy: 'elementEcheances')]
    private ?Tbulletin $bulletin = null;

    #[ORM\OneToMany(mappedBy: 'elementEcheance', targetEntity: Probleme::class)]
    private Collection $problemes;

    #[ORM\ManyToOne]
    private ?Users $userCreated = null;

    public function __construct()
    {
        $this->problemes = new ArrayCollection();
        $this->created = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContract(): ?LContract
    {
        return $this->contract;
    }

    public function setContract(?LContract $contract): self
    {
        $this->contract = $contract;

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

    public function getRubrique(): ?Prubrique
    {
        return $this->rubrique;
    }

    public function setRubrique(?Prubrique $rubrique): self
    {
        $this->rubrique = $rubrique;

        return $this;
    }

    public function getDateEcheance(): ?\DateTimeInterface
    {
        return $this->dateEcheance;
    }

    public function setDateEcheance(?\DateTimeInterface $dateEcheance): self
    {
        $this->dateEcheance = $dateEcheance;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }


    public function getSens(): ?float
    {
        return $this->sens;
    }

    public function setSens(?float $sens): self
    {
        $this->sens = $sens;

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

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): self
    {
        $this->active = $active;

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
            $probleme->setElementEcheance($this);
        }

        return $this;
    }

    public function removeProbleme(Probleme $probleme): self
    {
        if ($this->problemes->removeElement($probleme)) {
            // set the owning side to null (unless already changed)
            if ($probleme->getElementEcheance() === $this) {
                $probleme->setElementEcheance(null);
            }
        }

        return $this;
    }

    public function getUserCreated(): ?Users
    {
        return $this->userCreated;
    }

    public function setUserCreated(?Users $userCreated): self
    {
        $this->userCreated = $userCreated;

        return $this;
    }
}
