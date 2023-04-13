<?php

namespace App\Entity;

use App\Repository\LmatriculationCotiRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LmatriculationCotiRepository::class)]
class LmatriculationCoti
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?PtypeCoti $type_id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $Designation = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_affiliation = null;

    #[ORM\Column]
    private ?int $active = null;

    #[ORM\ManyToOne(inversedBy: 'lmatriculationcotis')]
    private ?LContract $contract_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTypeId(): ?PtypeCoti
    {
        return $this->type_id;
    }

    public function setTypeId(?PtypeCoti $type_id): self
    {
        $this->type_id = $type_id;

        return $this;
    }

    public function getDesignation(): ?\DateTimeInterface
    {
        return $this->Designation;
    }

    public function setDesignation(\DateTimeInterface $Designation): self
    {
        $this->Designation = $Designation;

        return $this;
    }

    public function getDateAffiliation(): ?\DateTimeInterface
    {
        return $this->date_affiliation;
    }

    public function setDateAffiliation(\DateTimeInterface $date_affiliation): self
    {
        $this->date_affiliation = $date_affiliation;

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
