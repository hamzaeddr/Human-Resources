<?php

namespace App\Entity;

use App\Repository\PNaturesalarieDetRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PNaturesalarieRepository::class)]
class PNaturesalarieDet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Designation = null;

   

    #[ORM\ManyToOne(inversedBy: 'pNaturesalaries')]
    private ?PNaturesalarieCab $id_nature_sal = null;

  
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

   
    public function getIdNatureSal(): ?PNaturesalarieCab
    {
        return $this->id_nature_sal;
    }

    public function setIdNatureSal(?PNaturesalarieCab $id_nature_sal): self
    {
        $this->id_nature_sal = $id_nature_sal;

        return $this;
    }
}
