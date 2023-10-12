<?php

namespace App\Entity;

use App\Repository\PBaremeCimrRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PBaremeCimrRepository::class)]
class PBaremeCimr
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'baremeCimrs')]
    private ?Prubrique $rubrique = null;

    #[ORM\ManyToOne(inversedBy: 'baremeCimrs')]
    private ?Pbareme $bareme = null;

    #[ORM\Column(nullable: true)]
    private ?float $taux = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $categorie = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tauxCotis = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $type = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getBareme(): ?Pbareme
    {
        return $this->bareme;
    }

    public function setBareme(?Pbareme $bareme): self
    {
        $this->bareme = $bareme;

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

    public function getCategorie(): ?string
    {
        return $this->categorie;
    }

    public function setCategorie(?string $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getTauxCotis(): ?string
    {
        return $this->tauxCotis;
    }

    public function setTauxCotis(?string $tauxCotis): self
    {
        $this->tauxCotis = $tauxCotis;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }
}
