<?php

namespace App\Entity;

use App\Repository\PCounterRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PCounterRepository::class)]
class PCounter
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?PDossier $dossier = null;


    #[ORM\Column(nullable: true)]
    private ?int $count = null;

    #[ORM\Column(nullable: true)]
    private ?int $annee = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $dossierAbreviation = null;

    #[ORM\ManyToOne]
    private ?PPiece $piece = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDossier(): ?PDossier
    {
        return $this->dossier;
    }

    public function setDossier(?PDossier $dossier): self
    {
        $this->dossier = $dossier;

        return $this;
    }

 

    public function getCount(): ?int
    {
        return $this->count;
    }

    public function setCount(?int $count): self
    {
        $this->count = $count;

        return $this;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(?int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getDossierAbreviation(): ?string
    {
        return $this->dossierAbreviation;
    }

    public function setDossierAbreviation(?string $dossierAbreviation): self
    {
        $this->dossierAbreviation = $dossierAbreviation;

        return $this;
    }

    public function getPiece(): ?PPiece
    {
        return $this->piece;
    }

    public function setPiece(?PPiece $piece): self
    {
        $this->piece = $piece;

        return $this;
    }
}
