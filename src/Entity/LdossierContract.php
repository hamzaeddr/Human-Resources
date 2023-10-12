<?php

namespace App\Entity;

use App\Repository\LdossierContractRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LdossierContractRepository::class)]
class LdossierContract
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'ldossierContracts')]
    private ?Pdossier $dossier_id = null;

    #[ORM\ManyToOne(inversedBy: 'ldossierContracts')]
    private ?LContract $contract_id = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDossierId(): ?Pdossier
    {
        return $this->dossier_id;
    }

    public function setDossierId(?Pdossier $dossier_id): self
    {
        $this->dossier_id = $dossier_id;

        return $this;
    }

    public function getContractId(): ?LContract
    {
        return $this->contract_id;
    }

    public function setContractId(?LContract $contract_id): self
    {
        $this->contract_id = $contract_id;

        return $this;
    }

 
}
