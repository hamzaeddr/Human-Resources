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
    private ?string $designation = null;

    #[ORM\OneToMany(mappedBy: 'rubrique', targetEntity: LelementFixe::class)]
    private Collection $lelementFixes;

    #[ORM\OneToMany(mappedBy: 'rubrique', targetEntity: PbaremeBrute::class)]
    private Collection $PbaremeBrutes;

    #[ORM\Column]
    private ?int $facture = null;

    #[ORM\Column]
    private ?int $paiement = null;

    #[ORM\Column(length: 100)]
    private ?string $fournisseur = null;

    #[ORM\Column]
    private ?int $idArticle = null;

    #[ORM\OneToMany(mappedBy: 'rubrique', targetEntity: LElementEcheance::class)]
    private Collection $elementEcheances;

    #[ORM\OneToMany(mappedBy: 'rubrique', targetEntity: VMatrix::class)]
    private Collection $matrices;

    #[ORM\OneToMany(mappedBy: 'rubrique', targetEntity: TbulletinLg::class)]
    private Collection $bulletinLgs;

    #[ORM\OneToMany(mappedBy: 'rubrique', targetEntity: PBaremeCimr::class)]
    private Collection $baremeCimrs;

    #[ORM\OneToMany(mappedBy: 'rubrique', targetEntity: PPrelevement::class)]
    private Collection $prelevements;

    #[ORM\Column(nullable: true)]
    private ?bool $honoraire = false;

    #[ORM\Column(nullable: true)]
    private ?bool $indeminite = null;

    #[ORM\Column(nullable: true)]
    private ?bool $prets = null;

    #[ORM\Column(nullable: true)]
    private ?float $sens = null;

    #[ORM\Column(nullable: true)]
    private ?bool $absence = null;

    #[ORM\Column(nullable: true)]
    private ?bool $fixe = null;

    #[ORM\OneToMany(mappedBy: 'rubrique', targetEntity: PCompteComptable::class)]
    private Collection $compteComptables;

    #[ORM\Column(nullable: true)]
    private ?bool $journal = null;

    #[ORM\Column(nullable: true)]
    private ?bool $flagInput = null;

    #[ORM\Column(nullable: true)]
    private ?int $siteId = null;

    #[ORM\OneToMany(mappedBy: 'rubrique', targetEntity: JournalBulletinLg::class)]
    private Collection $journalBulletinLgs;

    #[ORM\Column(nullable: true)]
    private ?int $partenaireId = null;

    #[ORM\Column(nullable: true)]
    private ?int $regulArticleUgouvId = null;


    public function __construct()
    {
        $this->lelementFixes = new ArrayCollection();
        $this->PbaremeBrutes = new ArrayCollection();
        $this->elementEcheances = new ArrayCollection();
        $this->matrices = new ArrayCollection();
        $this->bulletinLgs = new ArrayCollection();
        $this->baremeCimrs = new ArrayCollection();
        $this->prelevements = new ArrayCollection();
        $this->compteComptables = new ArrayCollection();
        $this->journalBulletinLgs = new ArrayCollection();
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
        return $this->designation;
    }

    public function setDesignation(string $Designation): self
    {
        $this->designation = $Designation;

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
     * @return Collection<int, PbaremeBrute>
     */
    public function getPbaremeBrutes(): Collection
    {
        return $this->PbaremeBrutes;
    }

    public function addPbaremeBrute(PbaremeBrute $PbaremeBrute): self
    {
        if (!$this->PbaremeBrutes->contains($PbaremeBrute)) {
            $this->PbaremeBrutes->add($PbaremeBrute);
            $PbaremeBrute->setRubriqueId($this);
        }

        return $this;
    }

    public function removePbaremeBrute(PbaremeBrute $PbaremeBrute): self
    {
        if ($this->PbaremeBrutes->removeElement($PbaremeBrute)) {
            // set the owning side to null (unless already changed)
            if ($PbaremeBrute->getRubriqueId() === $this) {
                $PbaremeBrute->setRubriqueId(null);
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
            $elementEcheance->setRubrique($this);
        }

        return $this;
    }

    public function removeElementEcheance(LElementEcheance $elementEcheance): self
    {
        if ($this->elementEcheances->removeElement($elementEcheance)) {
            // set the owning side to null (unless already changed)
            if ($elementEcheance->getRubrique() === $this) {
                $elementEcheance->setRubrique(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, VMatrix>
     */
    public function getMatrices(): Collection
    {
        return $this->matrices;
    }

    public function addMatrix(VMatrix $matrix): self
    {
        if (!$this->matrices->contains($matrix)) {
            $this->matrices->add($matrix);
            $matrix->setRubrique($this);
        }

        return $this;
    }

    public function removeMatrix(VMatrix $matrix): self
    {
        if ($this->matrices->removeElement($matrix)) {
            // set the owning side to null (unless already changed)
            if ($matrix->getRubrique() === $this) {
                $matrix->setRubrique(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TbulletinLg>
     */
    public function getBulletinLgs(): Collection
    {
        return $this->bulletinLgs;
    }

    public function addBulletinLg(TbulletinLg $bulletinLg): self
    {
        if (!$this->bulletinLgs->contains($bulletinLg)) {
            $this->bulletinLgs->add($bulletinLg);
            $bulletinLg->setRubrique($this);
        }

        return $this;
    }

    public function removeBulletinLg(TbulletinLg $bulletinLg): self
    {
        if ($this->bulletinLgs->removeElement($bulletinLg)) {
            // set the owning side to null (unless already changed)
            if ($bulletinLg->getRubrique() === $this) {
                $bulletinLg->setRubrique(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PBaremeCimr>
     */
    public function getBaremeCimrs(): Collection
    {
        return $this->baremeCimrs;
    }

    public function addBaremeCimr(PBaremeCimr $baremeCimr): self
    {
        if (!$this->baremeCimrs->contains($baremeCimr)) {
            $this->baremeCimrs->add($baremeCimr);
            $baremeCimr->setRubrique($this);
        }

        return $this;
    }

    public function removeBaremeCimr(PBaremeCimr $baremeCimr): self
    {
        if ($this->baremeCimrs->removeElement($baremeCimr)) {
            // set the owning side to null (unless already changed)
            if ($baremeCimr->getRubrique() === $this) {
                $baremeCimr->setRubrique(null);
            }
        }

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
            $prelevement->setRubrique($this);
        }

        return $this;
    }

    public function removePrelevement(PPrelevement $prelevement): self
    {
        if ($this->prelevements->removeElement($prelevement)) {
            // set the owning side to null (unless already changed)
            if ($prelevement->getRubrique() === $this) {
                $prelevement->setRubrique(null);
            }
        }

        return $this;
    }

    public function isHonoraire(): ?bool
    {
        return $this->honoraire;
    }

    public function setHonoraire(?bool $honoraire): self
    {
        $this->honoraire = $honoraire;

        return $this;
    }

    public function isIndeminite(): ?bool
    {
        return $this->indeminite;
    }

    public function setIndeminite(?bool $indeminite): self
    {
        $this->indeminite = $indeminite;

        return $this;
    }

    public function isPrets(): ?bool
    {
        return $this->prets;
    }

    public function setPrets(?bool $prets): self
    {
        $this->prets = $prets;

        return $this;
    }

    public function getSens(): ?float
    {
        return $this->sens;
    }

    public function setSens(?float $sens): self
    {
        $this->sens = $sens;

        return $this;
    }

    public function isAbsence(): ?bool
    {
        return $this->absence;
    }

    public function setAbsence(?bool $absence): self
    {
        $this->absence = $absence;

        return $this;
    }

    public function isFixe(): ?bool
    {
        return $this->fixe;
    }

    public function setFixe(?bool $fixe): self
    {
        $this->fixe = $fixe;

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
            $compteComptable->setRubrique($this);
        }

        return $this;
    }

    public function removeCompteComptable(PCompteComptable $compteComptable): self
    {
        if ($this->compteComptables->removeElement($compteComptable)) {
            // set the owning side to null (unless already changed)
            if ($compteComptable->getRubrique() === $this) {
                $compteComptable->setRubrique(null);
            }
        }

        return $this;
    }

    public function isJournal(): ?bool
    {
        return $this->journal;
    }

    public function setJournal(?bool $journal): self
    {
        $this->journal = $journal;

        return $this;
    }

    public function isFlagInput(): ?bool
    {
        return $this->flagInput;
    }

    public function setFlagInput(?bool $flagInput): self
    {
        $this->flagInput = $flagInput;

        return $this;
    }

    public function getSiteId(): ?int
    {
        return $this->siteId;
    }

    public function setSiteId(?int $siteId): self
    {
        $this->siteId = $siteId;

        return $this;
    }

    /**
     * @return Collection<int, JournalBulletinLg>
     */
    public function getJournalBulletinLgs(): Collection
    {
        return $this->journalBulletinLgs;
    }

    public function addJournalBulletinLg(JournalBulletinLg $journalBulletinLg): self
    {
        if (!$this->journalBulletinLgs->contains($journalBulletinLg)) {
            $this->journalBulletinLgs->add($journalBulletinLg);
            $journalBulletinLg->setRubrique($this);
        }

        return $this;
    }

    public function removeJournalBulletinLg(JournalBulletinLg $journalBulletinLg): self
    {
        if ($this->journalBulletinLgs->removeElement($journalBulletinLg)) {
            // set the owning side to null (unless already changed)
            if ($journalBulletinLg->getRubrique() === $this) {
                $journalBulletinLg->setRubrique(null);
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

    public function getRegulArticleUgouvId(): ?int
    {
        return $this->regulArticleUgouvId;
    }

    public function setRegulArticleUgouvId(?int $RegulArticleUgouvId): self
    {
        $this->regulArticleUgouvId = $RegulArticleUgouvId;

        return $this;
    }

}
