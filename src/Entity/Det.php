<?php

namespace App\Entity;

use App\Repository\DetRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DetRepository::class)]
class Det
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    

    #[ORM\ManyToOne(targetEntity: Cab::class, inversedBy: 'dets')]
    private $cab;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $rassembleurId;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $descriptionRassembleur;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantInitialRassembleur;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantRetenuRassembleur;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantRemiseRassembleur;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantNetRassembleur;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantAutre1Rassembleur;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantAutre2Rassembleur;

    #[ORM\Column(type: 'float', nullable: true)]
    private $quantiteRassembleur;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $compteComptable;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $autreInformation;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $sens;

    #[ORM\OneToMany(mappedBy: 'det', targetEntity: UaTechniqueDet::class)]
    private $dets;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantMad;

    public function __construct()
    {
        $this->dets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCab(): ?Cab
    {
        return $this->cab;
    }

    public function setCab(?Cab $cab): self
    {
        $this->cab = $cab; 

        return $this;
    }

    public function getRassembleurId(): ?int
    {
        return $this->rassembleurId;
    }

    public function setRassembleurId(?int $rassembleurId): self
    {
        $this->rassembleurId = $rassembleurId;

        return $this;
    }

    public function getDescriptionRassembleur(): ?string
    {
        return $this->descriptionRassembleur;
    }

    public function setDescriptionRassembleur(?string $descriptionRassembleur): self
    {
        $this->descriptionRassembleur = $descriptionRassembleur;

        return $this;
    }

    public function getMontantInitialRassembleur(): ?float
    {
        return $this->montantInitialRassembleur;
    }

    public function setMontantInitialRassembleur(?float $montantInitialRassembleur): self
    {
        $this->montantInitialRassembleur = $montantInitialRassembleur;

        return $this;
    }

    public function getMontantRetenuRassembleur(): ?float
    {
        return $this->montantRetenuRassembleur;
    }

    public function setMontantRetenuRassembleur(?float $montantRetenuRassembleur): self
    {
        $this->montantRetenuRassembleur = $montantRetenuRassembleur;

        return $this;
    }

    public function getMontantRemiseRassembleur(): ?float
    {
        return $this->montantRemiseRassembleur;
    }

    public function setMontantRemiseRassembleur(?float $montantRemiseRassembleur): self
    {
        $this->montantRemiseRassembleur = $montantRemiseRassembleur;

        return $this;
    }

    public function getMontantNetRassembleur(): ?float
    {
        return $this->montantNetRassembleur;
    }

    public function setMontantNetRassembleur(?float $montantNetRassembleur): self
    {
        $this->montantNetRassembleur = $montantNetRassembleur;

        return $this;
    }

    public function getMontantAutre1Rassembleur(): ?float
    {
        return $this->montantAutre1Rassembleur;
    }

    public function setMontantAutre1Rassembleur(?float $montantAutre1Rassembleur): self
    {
        $this->montantAutre1Rassembleur = $montantAutre1Rassembleur;

        return $this;
    }

    public function getMontantAutre2Rassembleur(): ?float
    {
        return $this->montantAutre2Rassembleur;
    }

    public function setMontantAutre2Rassembleur(?float $montantAutre2Rassembleur): self
    {
        $this->montantAutre2Rassembleur = $montantAutre2Rassembleur;

        return $this;
    }

    public function getQuantiteRassembleur(): ?float
    {
        return $this->quantiteRassembleur;
    }

    public function setQuantiteRassembleur(?float $quantiteRassembleur): self
    {
        $this->quantiteRassembleur = $quantiteRassembleur;

        return $this;
    }

    public function getCompteComptable(): ?string
    {
        return $this->compteComptable;
    }

    public function setCompteComptable(?string $compteComptable): self
    {
        $this->compteComptable = $compteComptable;

        return $this;
    }

    public function getAutreInformation(): ?string
    {
        return $this->autreInformation;
    }

    public function setAutreInformation(?string $autreInformation): self
    {
        $this->autreInformation = $autreInformation;

        return $this;
    }

    public function getSens(): ?int
    {
        return $this->sens;
    }

    public function setSens(?int $sens): self
    {
        $this->sens = $sens;

        return $this;
    }

    /**
     * @return Collection<int, UaTechniqueDet>
     */
    public function getDets(): Collection
    {
        return $this->dets;
    }

    public function addDet(UaTechniqueDet $det): self
    {
        if (!$this->dets->contains($det)) {
            $this->dets[] = $det;
            $det->setDetId($this);
        }

        return $this;
    }

    public function removeDet(UaTechniqueDet $det): self
    {
        if ($this->dets->removeElement($det)) {
            // set the owning side to null (unless already changed)
            if ($det->getDetId() === $this) {
                $det->setDetId(null);
            }
        }

        return $this;
    }

    public function getMontantMad(): ?float
    {
        return $this->montantMad;
    }

    public function setMontantMad(?float $montantMad): self
    {
        $this->montantMad = $montantMad;

        return $this;
    }
}
