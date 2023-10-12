<?php

namespace App\Entity;

use App\Repository\PsituationFamilialeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PsituationFamilialeRepository::class)]
class PsituationFamiliale
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $Abreviation = null;

    #[ORM\Column(length: 50)]
    private ?string $Designation = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAbreviation(): ?string
    {
        return $this->Abreviation;
    }

    public function setAbreviation(string $Abreviation): self
    {
        $this->Abreviation = $Abreviation;

        return $this;
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
}
