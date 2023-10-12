<?php

namespace App\Entity;

use App\Repository\UaTechniqueCabRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UaTechniqueCabRepository::class)]
class UaTechniqueDet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'float', nullable: true)]
    private $quantite;

    #[ORM\Column(type: 'float', nullable: true)]
    private $prixUnitaire;

    #[ORM\Column(type: 'float', nullable: true)]
    private $tva;

    #[ORM\Column(type: 'float', nullable: true)]
    private $remise;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $article;

    #[ORM\ManyToOne(targetEntity: Det::class, inversedBy: 'dets')]
    private $det;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $observation;


    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuantite(): ?float
    {
        return $this->quantite;
    }

    public function setQuantite(?float $quantite): self
    {
        $this->quantite = $quantite;

        return $this;
    }

    public function getPrixUnitaire(): ?float
    {
        return $this->prixUnitaire;
    }

    public function setPrixUnitaire(?float $prixUnitaire): self
    {
        $this->prixUnitaire = $prixUnitaire;

        return $this;
    }

    public function getTva(): ?float
    {
        return $this->tva;
    }

    public function setTva(?float $tva): self
    {
        $this->tva = $tva;

        return $this;
    }

    public function getRemise(): ?float
    {
        return $this->remise;
    }

    public function setRemise(?float $remise): self
    {
        $this->remise = $remise;

        return $this;
    }

    public function getArticle(): ?string
    {
        return $this->article;
    }

    public function setArticle(?string $article): self
    {
        $this->article = $article;

        return $this;
    }

    public function getDet(): ?Det
    {
        return $this->det;
    }

    public function setDet(?Det $det): self
    {
        $this->det = $det;

        return $this;
    }

    public function getObservation(): ?string
    {
        return $this->observation;
    }

    public function setObservation(?string $observation): self
    {
        $this->observation = $observation;

        return $this;
    }


   
}
