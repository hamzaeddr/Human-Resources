<?php

namespace App\Entity;

use App\Repository\TCnssA03Repository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TCnssA03Repository::class)]
class TCnssA03
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 3,nullable: true)]
    private ?string $typeEnreg = null;

    #[ORM\Column(length: 7, nullable: true)]
    private ?string $numAffilie = null;

    #[ORM\Column(length: 6, nullable: true)]
    private ?string $periode = null;

    #[ORM\Column(length: 6, nullable: true)]
    private ?string $nbrSalaries = null;

    #[ORM\Column(length: 6, nullable: true)]
    private ?string $tEnfants = null;

    #[ORM\Column(length: 12, nullable: true)]
    private ?string $tAfAPayer = null;

    #[ORM\Column(length: 12, nullable: true)]
    private ?string $tAfADeduire = null;

    #[ORM\Column(length: 12, nullable: true)]
    private ?string $tAfNetAPayer = null;

    #[ORM\Column(length: 15, nullable: true)]
    private ?string $tNumImma = null;

    #[ORM\Column(length: 12, nullable: true)]
    private ?string $tAfAReverser = null;

    #[ORM\Column(length: 6, nullable: true)]
    private ?string $tJoursDeclares = null;

    #[ORM\Column(length: 15, nullable: true)]
    private ?string $tSalaireReel = null;

    #[ORM\Column(length: 13, nullable: true)]
    private ?string $tSalairePlaf = null;

    #[ORM\Column(length: 19, nullable: true)]
    private ?string $tCtr = null;

    #[ORM\Column(length: 116, nullable: true)]
    private ?string $filler = null;

    #[ORM\ManyToOne(inversedBy: 'tCnssA03s')]
    private ?TCnssA00 $cnssa00 = null;

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

    public function getTEnfants(): ?string
    {
        return $this->tEnfants;
    }

    public function setTEnfants(?string $tEnfants): static
    {
        $this->tEnfants = $tEnfants;

        return $this;
    }

    public function getTAfAPayer(): ?string
    {
        return $this->tAfAPayer;
    }

    public function setTAfAPayer(?string $tAfAPayer): static
    {
        $this->tAfAPayer = $tAfAPayer;

        return $this;
    }

    public function getTAfADeduire(): ?string
    {
        return $this->tAfADeduire;
    }

    public function setTAfADeduire(?string $tAfADeduire): static
    {
        $this->tAfADeduire = $tAfADeduire;

        return $this;
    }

    public function getTAfNetAPayer(): ?string
    {
        return $this->tAfNetAPayer;
    }

    public function setTAfNetAPayer(?string $tAfNetAPayer): static
    {
        $this->tAfNetAPayer = $tAfNetAPayer;

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

    public function getTAfAReverser(): ?string
    {
        return $this->tAfAReverser;
    }

    public function setTAfAReverser(?string $tAfAReverser): static
    {
        $this->tAfAReverser = $tAfAReverser;

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

    public function getCnssa00(): ?TCnssA00
    {
        return $this->cnssa00;
    }

    public function setCnssa00(?TCnssA00 $cnssa00): static
    {
        $this->cnssa00 = $cnssa00;

        return $this;
    }
}
