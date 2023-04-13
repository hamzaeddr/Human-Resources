<?php

namespace App\Entity;

use App\Repository\PrubriqueRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PrubriqueRepository::class)]
class Prubrique
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $code = null;

    #[ORM\Column(length: 100)]
    private ?string $Designation = null;

    #[ORM\OneToMany(mappedBy: 'Rubrique_id', targetEntity: LelementFixe::class)]
    private Collection $lelementFixes;

    #[ORM\OneToMany(mappedBy: 'rubrique_id', targetEntity: Pbaremebrute::class)]
    private Collection $pbaremebrutes;

    #[ORM\Column]
    private ?int $facture = null;

    #[ORM\Column]
    private ?int $paiement = null;

    #[ORM\Column(length: 100)]
    private ?string $fournisseur = null;

    #[ORM\Column]
    private ?int $idArticle = null;


    public function __construct()
    {
        $this->lelementFixes = new ArrayCollection();
        $this->pbaremebrutes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

   

   

    /**
     * @return Collection<int, LelementFixe>
     */
    public function getLelementFixes(): Collection
    {
        return $this->lelementFixes;
    }

    public function addLelementFix(LelementFixe $lelementFix): self
    {
        if (!$this->lelementFixes->contains($lelementFix)) {
            $this->lelementFixes->add($lelementFix);
            $lelementFix->setRubriqueId($this);
        }

        return $this;
    }

    public function removeLelementFix(LelementFixe $lelementFix): self
    {
        if ($this->lelementFixes->removeElement($lelementFix)) {
            // set the owning side to null (unless already changed)
            if ($lelementFix->getRubriqueId() === $this) {
                $lelementFix->setRubriqueId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Pbaremebrute>
     */
    public function getPbaremebrutes(): Collection
    {
        return $this->pbaremebrutes;
    }

    public function addPbaremebrute(Pbaremebrute $pbaremebrute): self
    {
        if (!$this->pbaremebrutes->contains($pbaremebrute)) {
            $this->pbaremebrutes->add($pbaremebrute);
            $pbaremebrute->setRubriqueId($this);
        }

        return $this;
    }

    public function removePbaremebrute(Pbaremebrute $pbaremebrute): self
    {
        if ($this->pbaremebrutes->removeElement($pbaremebrute)) {
            // set the owning side to null (unless already changed)
            if ($pbaremebrute->getRubriqueId() === $this) {
                $pbaremebrute->setRubriqueId(null);
            }
        }

        return $this;
    }

    public function getFacture(): ?int
    {
        return $this->facture;
    }

    public function setFacture(int $facture): self
    {
        $this->facture = $facture;

        return $this;
    }

    public function getPaiement(): ?int
    {
        return $this->paiement;
    }

    public function setPaiement(int $paiement): self
    {
        $this->paiement = $paiement;

        return $this;
    }

    public function getFournisseur(): ?string
    {
        return $this->fournisseur;
    }

    public function setFournisseur(string $fournisseur): self
    {
        $this->fournisseur = $fournisseur;

        return $this;
    }

    public function getIdArticle(): ?int
    {
        return $this->idArticle;
    }

    public function setIdArticle(int $idArticle): self
    {
        $this->idArticle = $idArticle;

        return $this;
    }

}
