<?php

namespace App\Entity;

use App\Repository\TCnssA01Repository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TCnssA01Repository::class)]
class TCnssA01
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

    #[ORM\Column(length: 40, nullable: true)]
    private ?string $raisonSociale = null;

    #[ORM\Column(length: 40, nullable: true)]
    private ?string $activite = null;

    #[ORM\Column(length: 120, nullable: true)]
    private ?string $adresse = null;

    #[ORM\Column(length: 20, nullable: true)]
    private ?string $ville = null;

    #[ORM\Column(length: 6, nullable: true)]
    private ?string $codePostal = null;

    #[ORM\Column(length: 2, nullable: true)]
    private ?string $codeAgence = null;

    #[ORM\Column(length: 8, nullable: true)]
    private ?string $dateEmission = null;

    #[ORM\Column(length: 8, nullable: true)]
    private ?string $dateExig = null;

    #[ORM\ManyToOne(inversedBy: 'tCnssA01s')]
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

    public function getRaisonSociale(): ?string
    {
        return $this->raisonSociale;
    }

    public function setRaisonSociale(?string $raisonSociale): static
    {
        $this->raisonSociale = $raisonSociale;

        return $this;
    }

    public function getActivite(): ?string
    {
        return $this->activite;
    }

    public function setActivite(?string $activite): static
    {
        $this->activite = $activite;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(?string $adresse): static
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(?string $ville): static
    {
        $this->ville = $ville;

        return $this;
    }

    public function getCodePostal(): ?string
    {
        return $this->codePostal;
    }

    public function setCodePostal(?string $codePostal): static
    {
        $this->codePostal = $codePostal;

        return $this;
    }

    public function getCodeAgence(): ?string
    {
        return $this->codeAgence;
    }

    public function setCodeAgence(?string $codeAgence): static
    {
        $this->codeAgence = $codeAgence;

        return $this;
    }

    public function getDateEmission(): ?string
    {
        return $this->dateEmission;
    }

    public function setDateEmission(?string $dateEmission): static
    {
        $this->dateEmission = $dateEmission;

        return $this;
    }

    public function getDateExig(): ?string
    {
        return $this->dateExig;
    }

    public function setDateExig(?string $dateExig): static
    {
        $this->dateExig = $dateExig;

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
