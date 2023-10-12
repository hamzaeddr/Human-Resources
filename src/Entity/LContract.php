<?php

namespace App\Entity;

use App\Repository\LContractRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LContractRepository::class)]
class LContract
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Pemploye $employe = null;

   

    #[ORM\Column(length: 50,  nullable:true )]
    private ?string $code = null;

    #[ORM\Column(type: Types::DATE_MUTABLE,  nullable:true )]
    private ?\DateTimeInterface $date_debut = null;

    #[ORM\Column(type: Types::DATE_MUTABLE,  nullable:true )]
    private ?\DateTimeInterface $date_fin = null;

    #[ORM\Column(nullable:true)]
    private ?int $active = 1;

    #[ORM\Column(type: Types::DATE_MUTABLE,  nullable:true )]
    private ?\DateTimeInterface $date_sortie = null;

    #[ORM\Column(length: 50,  nullable:true )]
    private ?string $motif_sortie = null;

    #[ORM\Column(type: Types::DATE_MUTABLE,  nullable:true )]
    private ?\DateTimeInterface $dateAnciennete = null;

    #[ORM\ManyToOne(inversedBy: 'contract_id' )]
    private ?PnatureContract $pnatureContract = null;

    #[ORM\OneToMany(mappedBy: 'contract_id', targetEntity: LcontractFonction::class )]
    private Collection $lcontractFonctions;

    #[ORM\OneToMany(mappedBy: 'contract_id', targetEntity: LdossierContract::class )]
    private Collection $ldossierContracts;

    #[ORM\OneToMany(mappedBy: 'contract_id', targetEntity: LmatriculationCoti::class )]
    private Collection $lmatriculationCotis;

    #[ORM\OneToMany(mappedBy: 'contact_id', targetEntity: Lrib::class )]
    private Collection $lribs;




    #[ORM\OneToMany(mappedBy: 'contract_id', targetEntity: Lmatriculationcoti::class )]
    private Collection $lmatriculationcotis;

    #[ORM\OneToMany(mappedBy: 'contract', targetEntity: LelementFixe::class)]
    private Collection $elementFixes;

    #[ORM\ManyToOne(inversedBy: 'contracts')]
    private ?PDossier $dossier = null;

    #[ORM\ManyToOne(inversedBy: 'contracts')]
    private ?Pbareme $bareme = null;

    #[ORM\OneToMany(mappedBy: 'contract', targetEntity: PArretTravail::class)]
    private Collection $arretTravails;

    #[ORM\OneToMany(mappedBy: 'contract', targetEntity: LElementEcheance::class)]
    private Collection $elementEcheances;

    #[ORM\Column(nullable: true)]
    private ?int $priseEnCharge = 0;

    #[ORM\OneToMany(mappedBy: 'contract', targetEntity: PPrelevement::class)]
    private Collection $prelevements;

    #[ORM\OneToMany(mappedBy: 'contract', targetEntity: Tbulletin::class)]
    private Collection $bulletins;

    #[ORM\OneToMany(mappedBy: 'contract', targetEntity: Probleme::class)]
    private Collection $problemes;

    #[ORM\ManyToOne(inversedBy: 'lContracts')]
    private ?Pfonction $fonction = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Salairegrille = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Salaireaffecte = null;

    #[ORM\ManyToOne]
    private ?PPiece $piece = null;

    public function __construct()
    {
        $this->lcontractFonctions = new ArrayCollection();
        $this->ldossierContracts = new ArrayCollection();
        $this->lmatriculationCotis = new ArrayCollection();
        $this->lribs = new ArrayCollection();
        $this->lmatriculationcotis = new ArrayCollection();
        $this->elementFixes = new ArrayCollection();
        $this->arretTravails = new ArrayCollection();
        $this->elementEcheances = new ArrayCollection();
        $this->prelevements = new ArrayCollection();
        $this->bulletins = new ArrayCollection();
        $this->problemes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmploye(): ?Pemploye
    {
        return $this->employe;
    }

    public function setEmploye(?Pemploye $employe): self
    {
        $this->employe = $employe;

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

    public function getDateDebut(): ?\DateTimeInterface
    {
        return $this->date_debut;
    }

    public function setDateDebut(\DateTimeInterface $date_debut): self
    {
        $this->date_debut = $date_debut;

        return $this;
    }

    public function getDateFin(): ?\DateTimeInterface
    {
        return $this->date_fin;
    }

    public function setDateFin(\DateTimeInterface $date_fin): self
    {
        $this->date_fin = $date_fin;

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

    public function getDateSortie(): ?\DateTimeInterface
    {
        return $this->date_sortie;
    }

    public function setDateSortie(\DateTimeInterface $date_sortie): self
    {
        $this->date_sortie = $date_sortie;

        return $this;
    }

    public function getMotifSortie(): ?string
    {
        return $this->motif_sortie;
    }

    public function setMotifSortie(string $motif_sortie): self
    {
        $this->motif_sortie = $motif_sortie;

        return $this;
    }

    public function getDateAnciennete(): ?\DateTimeInterface
    {
        return $this->dateAnciennete;
    }

    public function setDateAnciennte(\DateTimeInterface $dateAnciennete): self
    {
        $this->dateAnciennete = $dateAnciennete;

        return $this;
    }

    public function getPnatureContract(): ?PnatureContract
    {
        return $this->pnatureContract;
    }

    public function setPnatureContract(?PnatureContract $pnatureContract): self
    {
        $this->pnatureContract = $pnatureContract;

        return $this;
    }

    /**
     * @return Collection<int, LcontractFonction>
     */
    public function getLcontractFonctions(): Collection
    {
        return $this->lcontractFonctions;
    }

    public function addLcontractFonction(LcontractFonction $lcontractFonction): self
    {
        if (!$this->lcontractFonctions->contains($lcontractFonction)) {
            $this->lcontractFonctions->add($lcontractFonction);
            $lcontractFonction->setContractId($this);
        }

        return $this;
    }

    public function removeLcontractFonction(LcontractFonction $lcontractFonction): self
    {
        if ($this->lcontractFonctions->removeElement($lcontractFonction)) {
            // set the owning side to null (unless already changed)
            if ($lcontractFonction->getContractId() === $this) {
                $lcontractFonction->setContractId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, LdossierContract>
     */
    public function getLdossierContracts(): Collection
    {
        return $this->ldossierContracts;
    }

    public function addLdossierContract(LdossierContract $ldossierContract): self
    {
        if (!$this->ldossierContracts->contains($ldossierContract)) {
            $this->ldossierContracts->add($ldossierContract);
            $ldossierContract->setContractId($this);
        }

        return $this;
    }

    public function removeLdossierContract(LdossierContract $ldossierContract): self
    {
        if ($this->ldossierContracts->removeElement($ldossierContract)) {
            // set the owning side to null (unless already changed)
            if ($ldossierContract->getContractId() === $this) {
                $ldossierContract->setContractId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, LmatriculationCotis>
     */
    public function getLmatriculationCotis(): Collection
    {
        return $this->lmatriculationCotis;
    }

    public function addLmatriculationCoti(LmatriculationCoti $lmatriculationCoti): self
    {
        if (!$this->lmatriculationCotis->contains($lmatriculationCoti)) {
            $this->lmatriculationCotis->add($lmatriculationCoti);
            $lmatriculationCoti->setContractId($this);
        }

        return $this;
    }

    public function removeLmatriculationCoti(LmatriculationCoti $lmatriculationCoti): self
    {
        if ($this->lmatriculationCotis->removeElement($lmatriculationCoti)) {
            // set the owning side to null (unless already changed)
            if ($lmatriculationCoti->getContractId() === $this) {
                $lmatriculationCoti->setContractId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Lrib>
     */
    public function getLribs(): Collection
    {
        return $this->lribs;
    }

    public function addLrib(Lrib $lrib): self
    {
        if (!$this->lribs->contains($lrib)) {
            $this->lribs->add($lrib);
            $lrib->setContactId($this);
        }

        return $this;
    }

    public function removeLrib(Lrib $lrib): self
    {
        if ($this->lribs->removeElement($lrib)) {
            // set the owning side to null (unless already changed)
            if ($lrib->getContactId() === $this) {
                $lrib->setContactId(null);
            }
        }

        return $this;
    }

   

    /**
     * @return Collection<int, LelementFixe>
     */
    public function getElementFixes(): Collection
    {
        return $this->elementFixes;
    }

    public function getActiveElementFixes()
    {
        $array = [];
        foreach($this->elementFixes as $elementFix) {
            if($elementFix->isActive()) {
                array_push($array, $elementFix);
            }
        }
        return $array;
    }

    public function addElementFix(LelementFixe $elementFix): self
    {
        if (!$this->elementFixes->contains($elementFix)) {
            $this->elementFixes->add($elementFix);
            $elementFix->setContract($this);
        }

        return $this;
    }

    public function removeElementFix(LelementFixe $elementFix): self
    {
        if ($this->elementFixes->removeElement($elementFix)) {
            // set the owning side to null (unless already changed)
            if ($elementFix->getContract() === $this) {
                $elementFix->setContract(null);
            }
        }

        return $this;
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

    public function getBareme(): ?Pbareme
    {
        return $this->bareme;
    }

    public function setBareme(?Pbareme $bareme): self
    {
        $this->bareme = $bareme;

        return $this;
    }

    /**
     * @return Collection<int, PArretTravail>
     */
    public function getArretTravails(): Collection
    {
        return $this->arretTravails;
    }

    public function addArretTravail(PArretTravail $arretTravail): self
    {
        if (!$this->arretTravails->contains($arretTravail)) {
            $this->arretTravails->add($arretTravail);
            $arretTravail->setContract($this);
        }

        return $this;
    }

    public function removeArretTravail(PArretTravail $arretTravail): self
    {
        if ($this->arretTravails->removeElement($arretTravail)) {
            // set the owning side to null (unless already changed)
            if ($arretTravail->getContract() === $this) {
                $arretTravail->setContract(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, LElementEcheance>
     */
    public function getElementEcheances(): Collection
    {
        return $this->elementEcheances;
    }

    public function addElementEcheance(LElementEcheance $elementEcheance): self
    {
        if (!$this->elementEcheances->contains($elementEcheance)) {
            $this->elementEcheances->add($elementEcheance);
            $elementEcheance->setContract($this);
        }

        return $this;
    }

    public function removeElementEcheance(LElementEcheance $elementEcheance): self
    {
        if ($this->elementEcheances->removeElement($elementEcheance)) {
            // set the owning side to null (unless already changed)
            if ($elementEcheance->getContract() === $this) {
                $elementEcheance->setContract(null);
            }
        }

        return $this;
    }

    public function getPriseEnCharge(): ?int
    {
        return $this->priseEnCharge;
    }

    public function setPriseEnCharge(?int $priseEnCharge): self
    {
        $this->priseEnCharge = $priseEnCharge;

        return $this;
    }

    /**
     * @return Collection<int, PPrelevement>
     */
    public function getPrelevements(): Collection
    {
        return $this->prelevements;
    }

    public function addPrelevement(PPrelevement $prelevement): self
    {
        if (!$this->prelevements->contains($prelevement)) {
            $this->prelevements->add($prelevement);
            $prelevement->setContract($this);
        }

        return $this;
    }

    public function removePrelevement(PPrelevement $prelevement): self
    {
        if ($this->prelevements->removeElement($prelevement)) {
            // set the owning side to null (unless already changed)
            if ($prelevement->getContract() === $this) {
                $prelevement->setContract(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Tbulletin>
     */
    public function getBulletins(): Collection
    {
        return $this->bulletins;
    }

    public function addBulletin(Tbulletin $bulletin): self
    {
        if (!$this->bulletins->contains($bulletin)) {
            $this->bulletins->add($bulletin);
            $bulletin->setContract($this);
        }

        return $this;
    }

    public function removeBulletin(Tbulletin $bulletin): self
    {
        if ($this->bulletins->removeElement($bulletin)) {
            // set the owning side to null (unless already changed)
            if ($bulletin->getContract() === $this) {
                $bulletin->setContract(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Probleme>
     */
    public function getProblemes(): Collection
    {
        return $this->problemes;
    }

    public function addProbleme(Probleme $probleme): self
    {
        if (!$this->problemes->contains($probleme)) {
            $this->problemes->add($probleme);
            $probleme->setContract($this);
        }

        return $this;
    }

    public function removeProbleme(Probleme $probleme): self
    {
        if ($this->problemes->removeElement($probleme)) {
            // set the owning side to null (unless already changed)
            if ($probleme->getContract() === $this) {
                $probleme->setContract(null);
            }
        }

        return $this;
    }

    public function getfonction(): ?Pfonction
    {
        return $this->fonction;
    }

    public function setfonction(?Pfonction $fonction): static
    {
        $this->fonction = $fonction;

        return $this;
    }

    public function getSalairegrille(): ?string
    {
        return $this->Salairegrille;
    }

    public function setSalairegrille(?string $Salairegrille): static
    {
        $this->Salairegrille = $Salairegrille;

        return $this;
    }

    public function getSalaireaffecte(): ?string
    {
        return $this->Salaireaffecte;
    }

    public function setSalaireaffecte(?string $Salaireaffecte): static
    {
        $this->Salaireaffecte = $Salaireaffecte;

        return $this;
    }

    public function getPiece(): ?PPiece
    {
        return $this->piece;
    }

    public function setPiece(?PPiece $piece): static
    {
        $this->piece = $piece;

        return $this;
    }

    
}
