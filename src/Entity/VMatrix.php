<?php

namespace App\Entity;

use App\Repository\VMatrixRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: VMatrixRepository::class)]
class VMatrix
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $designation = null;

    #[ORM\Column(length: 255)]
    private ?string $type = null;

    #[ORM\ManyToOne(inversedBy: 'matrices')]
    private ?Prubrique $rubrique = null;

    #[ORM\Column(nullable: true)]
    private ?int $min = null;

    #[ORM\Column(nullable: true)]
    private ?int $max = null;

    #[ORM\Column(nullable: true)]
    private ?float $taux = null;

    #[ORM\Column(nullable: true)]
    private ?float $plafond = null;

    #[ORM\Column(nullable: true)]
    private ?float $tauxACharge = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(string $designation): self
    {
        $this->designation = $designation;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getRubrique(): ?Prubrique
    {
        return $this->rubrique;
    }

    public function setRubrique(?Prubrique $rubrique): self
    {
        $this->rubrique = $rubrique;

        return $this;
    }

    public function getMin(): ?int
    {
        return $this->min;
    }

    public function setMin(?int $min): self
    {
        $this->min = $min;

        return $this;
    }

    public function getMax(): ?int
    {
        return $this->max;
    }

    public function setMax(?int $max): self
    {
        $this->max = $max;

        return $this;
    }

 
    public function getTaux(): ?float
    {
        return $this->taux;
    }

    public function setTaux(?float $taux): self
    {
        $this->taux = $taux;

        return $this;
    }

    public function getPlafond(): ?float
    {
        return $this->plafond;
    }

    public function setPlafond(float $plafond): self
    {
        $this->plafond = $plafond;

        return $this;
    }

    public function getTauxACharge(): ?float
    {
        return $this->tauxACharge;
    }

    public function setTauxACharge(?float $tauxACharge): self
    {
        $this->tauxACharge = $tauxACharge;

        return $this;
    }

  
}
