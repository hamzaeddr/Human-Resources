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

    #[ORM\Column(length: 255)]
    private ?string $code = null;

    #[ORM\Column(length: 255)]
    private ?string $designation = null;

    #[ORM\Column]
    private ?int $active = null;

    #[ORM\Column(length: 50)]
    private ?string $Abreviation = null;

    #[ORM\OneToMany(mappedBy: 'nature_contarct', targetEntity: PdureeContract::class)]
    private Collection $pdureeContracts;

    #[ORM\OneToMany(mappedBy: 'pnatureContract', targetEntity: LContract::class)]
    private Collection $contract_id;

    #[ORM\OneToMany(mappedBy: 'natureContract', targetEntity: PBordereau::class)]
    private Collection $bordereau;

    #[ORM\OneToMany(mappedBy: 'natureContract', targetEntity: PCompteComptable::class)]
    private Collection $compteComptables;

    #[ORM\Column(nullable: true)]
    private ?int $partenaireId = null;

    #[ORM\ManyToOne(inversedBy: 'pnatureContracts')]
    private ?PtypeContract $type = null;

    public function __construct()
    {
        $this->pdureeContracts = new ArrayCollection();
        $this->contract_id = new ArrayCollection();
        $this->bordereau = new ArrayCollection();
        $this->compteComptables = new ArrayCollection();
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
        return $this->designation;
    }

    public function setDesignation(string $Designation): self
    {
        $this->designation = $Designation;

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

    /**
     * @return Collection<int, PBordereau>
     */
    public function getBordereau(): Collection
    {
        return $this->bordereau;
    }

    public function addBordereau(PBordereau $bordereau): self
    {
        if (!$this->bordereau->contains($bordereau)) {
            $this->bordereau->add($bordereau);
            $bordereau->setNatureContract($this);
        }

        return $this;
    }

    public function removeBordereau(PBordereau $bordereau): self
    {
        if ($this->bordereau->removeElement($bordereau)) {
            // set the owning side to null (unless already changed)
            if ($bordereau->getNatureContract() === $this) {
                $bordereau->setNatureContract(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PCompteComptable>
     */
    public function getCompteComptables(): Collection
    {
        return $this->compteComptables;
    }

    public function addCompteComptable(PCompteComptable $compteComptable): self
    {
        if (!$this->compteComptables->contains($compteComptable)) {
            $this->compteComptables->add($compteComptable);
            $compteComptable->setNatureContract($this);
        }

        return $this;
    }

    public function removeCompteComptable(PCompteComptable $compteComptable): self
    {
        if ($this->compteComptables->removeElement($compteComptable)) {
            // set the owning side to null (unless already changed)
            if ($compteComptable->getNatureContract() === $this) {
                $compteComptable->setNatureContract(null);
            }
        }

        return $this;
    }

    public function getPartenaireId(): ?int
    {
        return $this->partenaireId;
    }

    public function setPartenaireId(?int $partenaireId): self
    {
        $this->partenaireId = $partenaireId;

        return $this;
    }

    public function getType(): ?PtypeContract
    {
        return $this->type;
    }

    public function setType(?PtypeContract $type): static
    {
        $this->type = $type;

        return $this;
    }
}
