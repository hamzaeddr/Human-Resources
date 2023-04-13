<?php

namespace App\Entity;

use App\Repository\DiplomeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DiplomeRepository::class)]
class Diplome
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $niveau = null;

    #[ORM\Column(length: 255)]
    private ?string $diplome = null;

    #[ORM\ManyToOne(inversedBy: 'diplomes')]
    private ?Pemploye $Id_employe = null;

    #[ORM\Column]
    private ?int $Desactiver = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNiveau(): ?string
    {
        return $this->niveau;
    }

    public function setNiveau(string $niveau): self
    {
        $this->niveau = $niveau;

        return $this;
    }

    public function getDiplome(): ?string
    {
        return $this->diplome;
    }

    public function setDiplome(string $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    public function getIdEmploye(): ?Pemploye
    {
        return $this->Id_employe;
    }

    public function setIdEmploye(?Pemploye $Id_employe): self
    {
        $this->Id_employe = $Id_employe;

        return $this;
    }

    public function getDesactiver(): ?int
    {
        return $this->Desactiver;
    }

    public function setDesactiver(int $Desactiver): self
    {
        $this->Desactiver = $Desactiver;

        return $this;
    }
}
