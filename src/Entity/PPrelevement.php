<?php

namespace App\Entity;

use App\Repository\PPrelevementRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PPrelevementRepository::class)]
class PPrelevement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'prelevements')]
    private ?LContract $contract = null;

    #[ORM\ManyToOne(inversedBy: 'prelevements')]
    private ?Prubrique $rubrique = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\Column(nullable: true)]
    private ?float $montant = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateDebut = null;

    #[ORM\Column(nullable: true)]
    private ?float $nombreMois = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = true;

    #[ORM\Column(nullable: true)]
    private ?bool $valider = false;

    #[ORM\OneToMany(mappedBy: 'prelevement', targetEntity: PPrelevementLg::class)]
    private Collection $prelevementLgs;

    #[ORM\ManyToOne]
    private ?PDossier $dossier = null;

    #[ORM\ManyToOne]
    private ?Users $userCreated = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantEcheance = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\ManyToOne]
    private ?PPiece $piece = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motif = null;

    public function __construct()
    {
        $this->prelevementLgs = new ArrayCollection();
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

  

    public function getRubrique(): ?Prubrique
    {
        return $this->rubrique;
    }

    public function setRubrique(?Prubrique $rubrique): self
    {
        $this->rubrique = $rubrique;

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

    public function getMontant(): ?float
    {
        return $this->montant;
    }

    public function setMontant(?float $montant): self
    {
        $this->montant = $montant;

        return $this;
    }


    public function getDateDebut(): ?\DateTimeInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(?\DateTimeInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getNombreMois(): ?float
    {
        return $this->nombreMois;
    }

    public function setNombreMois(?float $nombreMois): self
    {
        $this->nombreMois = $nombreMois;

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

    /**
     * @return Collection<int, PPrelevementLg>
     */
    public function getPrelevementLgs(): Collection
    {
        return $this->prelevementLgs;
    }

    public function addPrelevementLg(PPrelevementLg $prelevementLg): self
    {
        if (!$this->prelevementLgs->contains($prelevementLg)) {
            $this->prelevementLgs->add($prelevementLg);
            $prelevementLg->setPrelevement($this);
        }

        return $this;
    }

    public function removePrelevementLg(PPrelevementLg $prelevementLg): self
    {
        if ($this->prelevementLgs->removeElement($prelevementLg)) {
            // set the owning side to null (unless already changed)
            if ($prelevementLg->getPrelevement() === $this) {
                $prelevementLg->setPrelevement(null);
            }
        }

        return $this;
    }

    public function getDossier(): ?PDossier
    {
        return $this->dossier;
    }

    public function setDossier(?PDossier $dossier): self
    {
        $this->dossier = $dossier;

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

    public function getMontantEcheance(): ?float
    {
        return $this->montantEcheance;
    }

    public function setMontantEcheance(?float $montantEcheance): self
    {
        $this->montantEcheance = $montantEcheance;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getPiece(): ?PPiece
    {
        return $this->piece;
    }

    public function setPiece(?PPiece $piece): self
    {
        $this->piece = $piece;

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
