<?php

namespace App\Entity;

use App\Repository\TCnssB04Repository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TCnssB04Repository::class)]
class TCnssB04
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 3, nullable: true)]
    private ?string $typeEnreg = null;

    #[ORM\Column(length: 7, nullable: true)]
    private ?string $numAffilie = null;

    #[ORM\Column(length: 6, nullable: true)]
    private ?string $periode = null;

    #[ORM\Column(length: 9, nullable: true)]
    private ?string $numAssure = null;

    #[ORM\Column(length: 60, nullable: true)]
    private ?string $nomPrenom = null;

    #[ORM\Column(length: 8, nullable: true)]
    private ?string $numCin = null;

    #[ORM\Column(length: 2, nullable: true)]
    private ?string $nbrJours = null;

    #[ORM\Column(length: 13, nullable: true)]
    private ?string $salReel = null;

    #[ORM\Column(length: 9, nullable: true)]
    private ?string $salPlaf = null;

    #[ORM\Column(length: 19, nullable: true)]
    private ?string $sCtr = null;

    #[ORM\Column(length: 124, nullable: true)]
    private ?string $filler = null;

    #[ORM\Column(length: 60, nullable: true)]
    private ?string $site = null;

    #[ORM\ManyToOne(inversedBy: 'tCnssB04s')]
    private ?LContract $contract = null;

    #[ORM\ManyToOne(inversedBy: 'tCnssB04s')]
    private ?TCnssB00 $cnssb00 = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTypeEnreg(): ?string
    {
        return $this->typeEnreg;
    }

    public function setTypeEnreg(?string $typeEnreg): static
    {
        $this->typeEnreg = $typeEnreg;

        return $this;
    }

    public function getNumAffilie(): ?string
    {
        return $this->numAffilie;
    }

    public function setNumAffilie(?string $numAffilie): static
    {
        $this->numAffilie = $numAffilie;

        return $this;
    }

    public function getPeriode(): ?string
    {
        return $this->periode;
    }

    public function setPeriode(?string $periode): static
    {
        $this->periode = $periode;

        return $this;
    }

    public function getNumAssure(): ?string
    {
        return $this->numAssure;
    }

    public function setNumAssure(?string $numAssure): static
    {
        $this->numAssure = $numAssure;

        return $this;
    }

    public function getNomPrenom(): ?string
    {
        return $this->nomPrenom;
    }

    public function setNomPrenom(?string $nomPrenom): static
    {
        $this->nomPrenom = $nomPrenom;

        return $this;
    }

    public function getNumCin(): ?string
    {
        return $this->numCin;
    }

    public function setNumCin(?string $numCin): static
    {
        $this->numCin = $numCin;

        return $this;
    }

    public function getNbrJours(): ?string
    {
        return $this->nbrJours;
    }

    public function setNbrJours(?string $nbrJours): static
    {
        $this->nbrJours = $nbrJours;

        return $this;
    }

    public function getSalReel(): ?string
    {
        return $this->salReel;
    }

    public function setSalReel(?string $salReel): static
    {
        $this->salReel = $salReel;

        return $this;
    }

    public function getSalPlaf(): ?string
    {
        return $this->salPlaf;
    }

    public function setSalPlaf(?string $salPlaf): static
    {
        $this->salPlaf = $salPlaf;

        return $this;
    }

    public function getSCtr(): ?string
    {
        return $this->sCtr;
    }

    public function setSCtr(?string $sCtr): static
    {
        $this->sCtr = $sCtr;

        return $this;
    }

    public function getFiller(): ?string
    {
        return $this->filler;
    }

    public function setFiller(?string $filler): static
    {
        $this->filler = $filler;

        return $this;
    }

    public function getSite(): ?string
    {
        return $this->site;
    }

    public function setSite(?string $site): static
    {
        $this->site = $site;

        return $this;
    }

    public function getContract(): ?LContract
    {
        return $this->contract;
    }

    public function setContract(?LContract $contract): static
    {
        $this->contract = $contract;

        return $this;
    }

    public function getCnssb00(): ?TCnssB00
    {
        return $this->cnssb00;
    }

    public function setCnssb00(?TCnssB00 $cnssb00): static
    {
        $this->cnssb00 = $cnssb00;

        return $this;
    }
}
