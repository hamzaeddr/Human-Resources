<?php

namespace App\Entity;

use App\Repository\PtypeCotiRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PtypeCotiRepository::class)]
class PtypeCoti
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $abreviation = null;

    #[ORM\Column(length: 50)]
    private ?string $Designation = null;

    public function getId(): ?int
    {
        return $this->id;
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
