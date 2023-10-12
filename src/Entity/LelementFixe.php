<?php

namespace App\Entity;

use App\Repository\LelementFixeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LelementFixeRepository::class)]
class LelementFixe
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;


    #[ORM\ManyToOne(inversedBy: 'lelementFixes')]
    private ?Prubrique $rubrique = null;

    #[ORM\Column(type:'float')]
    private ?float $montant = null;

    #[ORM\ManyToOne(inversedBy: 'elementFixes')]
    private ?LContract $contract = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = true;

    #[ORM\Column(nullable: true)]
    private ?float $sens = null;

    #[ORM\OneToMany(mappedBy: 'elementFixe', targetEntity: Probleme::class)]
    private Collection $problemes;

    #[ORM\ManyToOne]
    private ?Users $userCreated = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    public function __construct()
    {
        $this->problemes = new ArrayCollection();
        $this->created = new \DateTime();
    }

   

    public function getId(): ?int
    {
        return $this->id;
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

    public function getMontant(): ?float
    {
        return $this->montant;
    }

    public function setMontant(float $Montant): self
    {
        $this->montant = $Montant;

        return $this;
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

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): self
    {
        $this->active = $active;

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
            $probleme->setElementFixe($this);
        }

        return $this;
    }

    public function removeProbleme(Probleme $probleme): self
    {
        if ($this->problemes->removeElement($probleme)) {
            // set the owning side to null (unless already changed)
            if ($probleme->getElementFixe() === $this) {
                $probleme->setElementFixe(null);
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

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }
}
