<?php

namespace App\Entity;

use App\Repository\TbulletinLgRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TbulletinLgRepository::class)]
class TbulletinLg
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Tbulletin $bulletin = null;

    #[ORM\ManyToOne(inversedBy: 'bulletinLgs')]
    private ?Prubrique $rubrique = null;

    #[ORM\Column]
    private ?float $montant = null;

    #[ORM\Column(nullable: true)]
    private ?float $sens = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = true;

    #[ORM\Column(nullable: true)]
    private ?float $montantDevise = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBulletin(): ?Tbulletin
    {
        return $this->bulletin;
    }

    public function setBulletin(?Tbulletin $bulletin): self
    {
        $this->bulletin = $bulletin;

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

    public function getMontant(): ?float
    {
        return $this->montant;
    }

    public function setMontant(float $montant): self
    {
        $this->montant = round($montant, 2);

        return $this;
    }

    public function getSens(): ?float
    {
        return $this->sens;
    }

    public function setSens(?float $sens): self
    {
        $this->sens = $sens;

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

    public function getMontantDevise(): ?float
    {
        return $this->montantDevise;
    }

    public function setMontantDevise(?float $montantDevise): self
    {
        $this->montantDevise = $montantDevise;

        return $this;
    }

  
}
