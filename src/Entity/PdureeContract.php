<?php

namespace App\Entity;

use App\Repository\PdureeContractRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PdureeContractRepository::class)]
class PdureeContract
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $Designation = null;

    #[ORM\Column(length: 255)]
    private ?string $duree_essaie = null;

    #[ORM\Column(length: 255)]
    private ?string $abreviation = null;

    #[ORM\Column(length: 255)]
    private ?string $nbr_mois = null;

    #[ORM\ManyToOne(inversedBy: 'pdureeContracts')]
    private ?PnatureContract $nature_contarct = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->Designation;
    }

    public function setDesignation(string $Designation): self
    {
        $this->Designation = $Designation;

        return $this;
    }

    public function getDureeEssaie(): ?string
    {
        return $this->duree_essaie;
    }

    public function setDureeEssaie(string $duree_essaie): self
    {
        $this->duree_essaie = $duree_essaie;

        return $this;
    }

    public function getAbreviation(): ?string
    {
        return $this->abreviation;
    }

    public function setAbreviation(string $abreviation): self
    {
        $this->abreviation = $abreviation;

        return $this;
    }

    public function getNbrMois(): ?string
    {
        return $this->nbr_mois;
    }

    public function setNbrMois(string $nbr_mois): self
    {
        $this->nbr_mois = $nbr_mois;

        return $this;
    }

    public function getNatureContarct(): ?PnatureContract
    {
        return $this->nature_contarct;
    }

    public function setNatureContarct(?PnatureContract $nature_contarct): self
    {
        $this->nature_contarct = $nature_contarct;

        return $this;
    }
}
