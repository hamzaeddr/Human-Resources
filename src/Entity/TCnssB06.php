<?php

namespace App\Entity;

use App\Repository\TCnssB06Repository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TCnssB06Repository::class)]
class TCnssB06
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

    #[ORM\Column(length: 6, nullable: true)]
    private ?string $nbrSalaries = null;

    #[ORM\Column(length: 15, nullable: true)]
    private ?string $tNumImma = null;

    #[ORM\Column(length: 6, nullable: true)]
    private ?string $tJoursDeclares = null;

    #[ORM\Column(length: 15, nullable: true)]
    private ?string $tSalaireReel = null;

    #[ORM\Column(length: 13, nullable: true)]
    private ?string $tSalairePlaf = null;

    #[ORM\Column(length: 19, nullable: true)]
    private ?string $tCtr = null;

    #[ORM\Column(length: 170, nullable: true)]
    private ?string $filler = null;

    #[ORM\ManyToOne(inversedBy: 'tCnssB06s')]
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

    public function getNbrSalaries(): ?string
    {
        return $this->nbrSalaries;
    }

    public function setNbrSalaries(?string $nbrSalaries): static
    {
        $this->nbrSalaries = $nbrSalaries;

        return $this;
    }

    public function getTNumImma(): ?string
    {
        return $this->tNumImma;
    }

    public function setTNumImma(?string $tNumImma): static
    {
        $this->tNumImma = $tNumImma;

        return $this;
    }

    public function getTJoursDeclares(): ?string
    {
        return $this->tJoursDeclares;
    }

    public function setTJoursDeclares(?string $tJoursDeclares): static
    {
        $this->tJoursDeclares = $tJoursDeclares;

        return $this;
    }

    public function getTSalaireReel(): ?string
    {
        return $this->tSalaireReel;
    }

    public function setTSalaireReel(?string $tSalaireReel): static
    {
        $this->tSalaireReel = $tSalaireReel;

        return $this;
    }

    public function getTSalairePlaf(): ?string
    {
        return $this->tSalairePlaf;
    }

    public function setTSalairePlaf(?string $tSalairePlaf): static
    {
        $this->tSalairePlaf = $tSalairePlaf;

        return $this;
    }

    public function getTCtr(): ?string
    {
        return $this->tCtr;
    }

    public function setTCtr(?string $tCtr): static
    {
        $this->tCtr = $tCtr;

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
