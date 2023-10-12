<?php

namespace App\Entity;

use App\Repository\PCompteComptableRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PCompteComptableRepository::class)]
class PCompteComptable
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'compteComptables')]
    private ?Prubrique $rubrique = null;

    #[ORM\ManyToOne(inversedBy: 'compteComptables')]
    private ?PnatureContract $natureContract = null;

    #[ORM\Column(nullable: true)]
    private ?int $articleUgouvId = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $articleUgouvRh = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $compteComptable = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $sens = null;

    #[ORM\Column(nullable: true)]
    private ?float $qte = null;

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

    public function getNatureContract(): ?PnatureContract
    {
        return $this->natureContract;
    }

    public function setNatureContract(?PnatureContract $natureContract): self
    {
        $this->natureContract = $natureContract;

        return $this;
    }

    public function getArticleUgouvId(): ?int
    {
        return $this->articleUgouvId;
    }

    public function setArticleUgouvId(?int $articleUgouvId): self
    {
        $this->articleUgouvId = $articleUgouvId;

        return $this;
    }

    public function getArticleUgouvRh(): ?string
    {
        return $this->articleUgouvRh;
    }

    public function setArticleUgouvRh(?string $articleUgouvRh): self
    {
        $this->articleUgouvRh = $articleUgouvRh;

        return $this;
    }

    public function getCompteComptable(): ?string
    {
        return $this->compteComptable;
    }

    public function setCompteComptable(?string $compteComptable): self
    {
        $this->compteComptable = $compteComptable;

        return $this;
    }

    public function getSens(): ?string
    {
        return $this->sens;
    }

    public function setSens(?string $sens): self
    {
        $this->sens = $sens;

        return $this;
    }

    public function getQte(): ?float
    {
        return $this->qte;
    }

    public function setQte(?float $qte): self
    {
        $this->qte = $qte;

        return $this;
    }
}
