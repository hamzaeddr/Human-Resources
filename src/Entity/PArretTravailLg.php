<?php

namespace App\Entity;

use App\Repository\PArretTravailLgRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PArretTravailLgRepository::class)]
class PArretTravailLg
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'arretTravailLgs')]
    private ?PArretTravail $arretTravail = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateDebut = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateFin = null;

    #[ORM\Column(nullable: true)]
    private ?float $nombreJour = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = true;

    #[ORM\ManyToOne(inversedBy: 'arretTravailLgs')]
    private ?Periode $periode = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getArretTravail(): ?PArretTravail
    {
        return $this->arretTravail;
    }

    public function setArretTravail(?PArretTravail $arretTravail): self
    {
        $this->arretTravail = $arretTravail;

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

    public function getDateFin(): ?\DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(?\DateTimeInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getNombreJour(): ?float
    {
        return $this->nombreJour;
    }

    public function setNombreJour(?float $nombreJour): self
    {
        $this->nombreJour = $nombreJour;

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

    public function getPeriode(): ?PEriode
    {
        return $this->periode;
    }

    public function setPeriode(?PEriode $periode): self
    {
        $this->periode = $periode;

        return $this;
    }
}
