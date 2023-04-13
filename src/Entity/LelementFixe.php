<?php

namespace App\Entity;

use App\Repository\LelementFixeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LelementFixeRepository::class)]
class LelementFixe
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToMany(mappedBy: 'lelementFixe', targetEntity: LContract::class)]
    private Collection $contract_id;

    #[ORM\ManyToOne(inversedBy: 'lelementFixes')]
    private ?Prubrique $Rubrique_id = null;

    #[ORM\Column]
    private ?int $Montant = null;

    public function __construct()
    {
        $this->contract_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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
            $contractId->setLelementFixe($this);
        }

        return $this;
    }

    public function removeContractId(LContract $contractId): self
    {
        if ($this->contract_id->removeElement($contractId)) {
            // set the owning side to null (unless already changed)
            if ($contractId->getLelementFixe() === $this) {
                $contractId->setLelementFixe(null);
            }
        }

        return $this;
    }

    public function getRubriqueId(): ?Prubrique
    {
        return $this->Rubrique_id;
    }

    public function setRubriqueId(?Prubrique $Rubrique_id): self
    {
        $this->Rubrique_id = $Rubrique_id;

        return $this;
    }

    public function getMontant(): ?int
    {
        return $this->Montant;
    }

    public function setMontant(int $Montant): self
    {
        $this->Montant = $Montant;

        return $this;
    }
}
