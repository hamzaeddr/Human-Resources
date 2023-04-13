<?php

namespace App\Entity;

use App\Repository\PnatureContractRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PnatureContractRepository::class)]
class PnatureContract
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $nature_cab_id = null;

    #[ORM\Column(length: 255)]
    private ?string $code = null;

    #[ORM\Column(length: 255)]
    private ?string $Designation = null;

    #[ORM\Column]
    private ?int $active = null;

    #[ORM\Column(length: 50)]
    private ?string $Abreviation = null;

    #[ORM\OneToMany(mappedBy: 'nature_contarct', targetEntity: PdureeContract::class)]
    private Collection $pdureeContracts;

    #[ORM\OneToMany(mappedBy: 'pnatureContract', targetEntity: LContract::class)]
    private Collection $contract_id;

    public function __construct()
    {
        $this->pdureeContracts = new ArrayCollection();
        $this->contract_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNatureCabId(): ?int
    {
        return $this->nature_cab_id;
    }

    public function setNatureCabId(int $nature_cab_id): self
    {
        $this->nature_cab_id = $nature_cab_id;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getDesignation(): ?string
    {
        return $this->Designation;
    }

    public function setDesignation(string $Designation): self
    {
        $this->Designation = $Designation;

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

    public function getAbreviation(): ?string
    {
        return $this->Abreviation;
    }

    public function setAbreviation(string $Abreviation): self
    {
        $this->Abreviation = $Abreviation;

        return $this;
    }

    /**
     * @return Collection<int, PdureeContract>
     */
    public function getPdureeContracts(): Collection
    {
        return $this->pdureeContracts;
    }

    public function addPdureeContract(PdureeContract $pdureeContract): self
    {
        if (!$this->pdureeContracts->contains($pdureeContract)) {
            $this->pdureeContracts->add($pdureeContract);
            $pdureeContract->setNatureContarct($this);
        }

        return $this;
    }

    public function removePdureeContract(PdureeContract $pdureeContract): self
    {
        if ($this->pdureeContracts->removeElement($pdureeContract)) {
            // set the owning side to null (unless already changed)
            if ($pdureeContract->getNatureContarct() === $this) {
                $pdureeContract->setNatureContarct(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, LContract>
     */
    public function getContractId(): Collection
    {
        return $this->contract_id;
    }

    public function addContractId(LContract $contractId): self
    {
        if (!$this->contract_id->contains($contractId)) {
            $this->contract_id->add($contractId);
            $contractId->setPnatureContract($this);
        }

        return $this;
    }

    public function removeContractId(LContract $contractId): self
    {
        if ($this->contract_id->removeElement($contractId)) {
            // set the owning side to null (unless already changed)
            if ($contractId->getPnatureContract() === $this) {
                $contractId->setPnatureContract(null);
            }
        }

        return $this;
    }
}
