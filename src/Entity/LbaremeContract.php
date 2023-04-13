<?php

namespace App\Entity;

use App\Repository\LbaremeContractRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LbaremeContractRepository::class)]
class LbaremeContract
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'lbaremeContracts')]
    private ?LContract $contract_id = null;

    #[ORM\ManyToOne(inversedBy: 'lbaremeContracts')]
    private ?Pbareme $Bareme_id = null;

    #[ORM\Column]
    private ?int $active = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getBaremeId(): ?Pbareme
    {
        return $this->Bareme_id;
    }

    public function setBaremeId(?Pbareme $Bareme_id): self
    {
        $this->Bareme_id = $Bareme_id;

        return $this;
    }

    public function getActive(): ?int
    {
        return $this->active;
    }

    public function setActive(int $active): self
    {
        $this->active = $active;

        return $this;
    }
}
