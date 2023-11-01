<?php

namespace App\Entity;

use App\Repository\TCnssB02Repository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TCnssB02Repository::class)]
class TCnssB02
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

    #[ORM\Column(length: 2, nullable: true)]
    private ?string $enfants = null;

    #[ORM\Column(length: 6, nullable: true)]
    private ?string $afAPayer = null;

    #[ORM\Column(length: 6, nullable: true)]
    private ?string $afADeduire = null;

    #[ORM\Column(length: 6, nullable: true)]
    private ?string $afNetAPayer = null;

    #[ORM\Column(length: 6, nullable: true)]
    private ?string $afAReverser = null;

    #[ORM\Column(length: 2, nullable: true)]
    private ?string $nJoursDeclares = null;

    #[ORM\Column(length: 13, nullable: true)]
    private ?string $nSalaireReel = null;

    #[ORM\Column(length: 9, nullable: true)]
    private ?string $nSalairePlaf = null;

    #[ORM\Column(nullable: true)]
    private ?string $lSituation = null;

    #[ORM\Column(nullable: true)]
    private ?int $lSituationNum = null;

    #[ORM\Column(length: 19, nullable: true)]
    private ?string $sCtr = null;

    #[ORM\Column(length: 155, nullable: true)]
    private ?string $filler = null;

    #[ORM\Column(length: 60, nullable: true)]
    private ?string $site = null;

    #[ORM\Column(length: 60, nullable: true)]
    private ?string $statut = null;

    #[ORM\ManyToOne(inversedBy: 'tCnssB02s')]
    private ?LContract $contract = null;

    #[ORM\ManyToOne(inversedBy: 'tCnssB02s')]
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

    public function getEnfants(): ?string
    {
        return $this->enfants;
    }

    public function setEnfants(?string $enfants): static
    {
        $this->enfants = $enfants;

        return $this;
    }

    public function getAfAPayer(): ?string
    {
        return $this->afAPayer;
    }

    public function setAfAPayer(?string $afAPayer): static
    {
        $this->afAPayer = $afAPayer;

        return $this;
    }

    public function getAfADeduire(): ?string
    {
        return $this->afADeduire;
    }

    public function setAfADeduire(?string $afADeduire): static
    {
        $this->afADeduire = $afADeduire;

        return $this;
    }

    public function getAfNetAPayer(): ?string
    {
        return $this->afNetAPayer;
    }

    public function setAfNetAPayer(?string $afNetAPayer): static
    {
        $this->afNetAPayer = $afNetAPayer;

        return $this;
    }

    public function getAfAReverser(): ?string
    {
        return $this->afAReverser;
    }

    public function setAfAReverser(?string $afAReverser): static
    {
        $this->afAReverser = $afAReverser;

        return $this;
    }

    public function getNJoursDeclares(): ?string
    {
        return $this->nJoursDeclares;
    }

    public function setNJoursDeclares(?string $nJoursDeclares): static
    {
        $this->nJoursDeclares = $nJoursDeclares;

        return $this;
    }

    public function getNSalaireReel(): ?string
    {
        return $this->nSalaireReel;
    }

    public function setNSalaireReel(?string $nSalaireReel): static
    {
        $this->nSalaireReel = $nSalaireReel;

        return $this;
    }

    public function getNSalairePlaf(): ?string
    {
        return $this->nSalairePlaf;
    }

    public function setNSalairePlaf(?string $nSalairePlaf): static
    {
        $this->nSalairePlaf = $nSalairePlaf;

        return $this;
    }

    public function getLSituationNum(): ?int
    {
        return $this->lSituationNum;
    }

    public function setLSituationNum(?int $lSituationNum): static
    {
        $this->lSituationNum = $lSituationNum;

        return $this;
    }
    public function getLSituation(): ?string
    {
        return $this->lSituation;
    }

    public function setLSituation(?string $lSituation): static
    {
        $this->lSituation = $lSituation;

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

    public function getStatut(): ?string
    {
        return $this->statut;
    }

    public function setStatut(?string $statut): static
    {
        $this->statut = $statut;

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
