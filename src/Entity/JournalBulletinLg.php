<?php

namespace App\Entity;

use App\Repository\JournalBulletinLgRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: JournalBulletinLgRepository::class)]
class JournalBulletinLg
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'journalBulletinLgs')]
    private ?Tbulletin $bulletin = null;

    #[ORM\ManyToOne(inversedBy: 'journalBulletinLgs')]
    private ?Prubrique $rubrique = null;

    #[ORM\Column(nullable: true)]
    private ?float $montant = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $codeComptable = null;

    #[ORM\Column(nullable: true)]
    private ?int $qte = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = true;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $type = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $sens = null;

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

    public function setMontant(?float $montant): self
    {
        $this->montant = $montant;

        return $this;
    }

    public function getCodeComptable(): ?string
    {
        return $this->codeComptable;
    }

    public function setCodeComptable(?string $codeComptable): self
    {
        $this->codeComptable = $codeComptable;

        return $this;
    }

    public function getQte(): ?int
    {
        return $this->qte;
    }

    public function setQte(?int $qte): self
    {
        $this->qte = $qte;

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

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

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
}
