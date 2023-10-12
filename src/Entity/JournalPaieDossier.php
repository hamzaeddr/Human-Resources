<?php

namespace App\Entity;

use App\Repository\JournalPaieDossierRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: JournalPaieDossierRepository::class)]
class JournalPaieDossier
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Prubrique $rubrique = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $rubriqueDesgiation = null;

    #[ORM\Column]
    private ?float $montant = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $codeComptable = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $sens = null;

    #[ORM\ManyToOne]
    private ?PBordereau $bordereau = null;

    #[ORM\ManyToOne]
    private ?PDossier $dossier = null;

    #[ORM\ManyToOne]
    private ?PnatureContract $natureContract = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $dossierAbreviation = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\ManyToOne]
    private ?Users $user = null;

    #[ORM\Column(nullable: true)]
    private ?bool $flagRegularisation = false;

    #[ORM\ManyToOne]
    private ?PPiece $piece = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tier1 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tier2 = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = true;


    public function __construct()
    {
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

    public function getRubriqueDesgiation(): ?string
    {
        return $this->rubriqueDesgiation;
    }

    public function setRubriqueDesgiation(?string $rubriqueDesgiation): self
    {
        $this->rubriqueDesgiation = $rubriqueDesgiation;

        return $this;
    }

    public function getMontant(): ?float
    {
        return $this->montant;
    }

    public function setMontant(float $montant): self
    {
        $this->montant = $montant;

        return $this;
    }

    public function getCodeComptable(): ?string
    {
        return $this->codeComptable;
    }

    public function setCodeComptable(?string $codeComptable): self
    {
        $this->codeComptable = $codeComptable;

        return $this;
    }

    public function getSens(): ?string
    {
        return $this->sens;
    }

    public function setSens(?string $sens): self
    {
        $this->sens = $sens;

        return $this;
    }

    public function getBordereau(): ?PBordereau
    {
        return $this->bordereau;
    }

    public function setBordereau(?PBordereau $bordereau): self
    {
        $this->bordereau = $bordereau;

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

    public function getNatureContract(): ?PnatureContract
    {
        return $this->natureContract;
    }

    public function setNatureContract(?PnatureContract $natureContract): self
    {
        $this->natureContract = $natureContract;

        return $this;
    }

    public function getDossierAbreviation(): ?string
    {
        return $this->dossierAbreviation;
    }

    public function setDossierAbreviation(?string $dossierAbreviation): self
    {
        $this->dossierAbreviation = $dossierAbreviation;

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

    public function getUser(): ?Users
    {
        return $this->user;
    }

    public function setUser(?Users $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function isFlagRegularisation(): ?bool
    {
        return $this->flagRegularisation;
    }

    public function setFlagRegularisation(?bool $flagRegularisation): self
    {
        $this->flagRegularisation = $flagRegularisation;

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

    public function getTier1(): ?string
    {
        return $this->tier1;
    }

    public function setTier1(?string $tier1): self
    {
        $this->tier1 = $tier1;

        return $this;
    }

    public function getTier2(): ?string
    {
        return $this->tier2;
    }

    public function setTier2(?string $tier2): self
    {
        $this->tier2 = $tier2;

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
}
