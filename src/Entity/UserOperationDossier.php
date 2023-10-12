<?php

namespace App\Entity;

use App\Repository\UserOperationDossierRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserOperationDossierRepository::class)]
class UserOperationDossier
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Users $user = null;

    #[ORM\ManyToOne]
    private ?UsOperation $operation = null;

    #[ORM\ManyToOne]
    private ?PDossier $dossier = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?Users
    {
        return $this->user;
    }

    public function setUser(?Users $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getOperation(): ?UsOperation
    {
        return $this->operation;
    }

    public function setOperation(?UsOperation $operation): static
    {
        $this->operation = $operation;

        return $this;
    }

    public function getDossier(): ?PDossier
    {
        return $this->dossier;
    }

    public function setDossier(?PDossier $Dossier): static
    {
        $this->dossier = $Dossier;

        return $this;
    }
}
