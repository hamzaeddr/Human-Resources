<?php

namespace App\Entity;

use App\Repository\TbulletinRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TbulletinRepository::class)]
class Tbulletin
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable:true)]
    private ?int $Annee = null;

   
    #[ORM\ManyToOne(inversedBy: 'bulletins')]
    private ?Periode $periode = null;

    #[ORM\OneToMany(mappedBy: 'bulletin', targetEntity: PPrelevementLg::class)]
    private Collection $prelevementLgs;

    #[ORM\OneToMany(mappedBy: 'bulletin', targetEntity: TbulletinLg::class)]
    private Collection $bulletinLgs;

    #[ORM\ManyToOne(inversedBy: 'bulletins')]
    private ?LContract $contract = null;

    #[ORM\OneToMany(mappedBy: 'bulletin', targetEntity: LElementEcheance::class)]
    private Collection $elementEcheances;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\ManyToOne(inversedBy: 'bulletins')]
    private ?PDossier $dossier = null;

    #[ORM\ManyToOne]
    private ?PDevise $devise = null;

    #[ORM\ManyToOne]
    private ?PPaiement $paiement = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $observation = null;

    #[ORM\ManyToOne(inversedBy: 'bulletins')]
    private ?PBordereau $bordereau = null;

    #[ORM\ManyToOne(inversedBy: 'bulletin')]
    #[ORM\JoinColumn(nullable: true)]
    private ?PPiece $piece = null;

    #[ORM\OneToMany(mappedBy: 'bulletin', targetEntity: JournalBulletinLg::class)]
    private Collection $journalBulletinLgs;

    public function __construct()
    {
        $this->prelevementLgs = new ArrayCollection();
        $this->bulletinLgs = new ArrayCollection();
        $this->elementEcheances = new ArrayCollection();
        $this->journalBulletinLgs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAnnee(): ?int
    {
        return $this->Annee;
    }

    public function setAnnee(int $Annee): self
    {
        $this->Annee = $Annee;

        return $this;
    }

    

    public function getPeriode(): ?Periode
    {
        return $this->periode;
    }

    public function setPeriode(?Periode $periode): self
    {
        $this->periode = $periode;

        return $this;
    }

    /**
     * @return Collection<int, PPrelevementLg>
     */
    public function getPrelevements(): Collection
    {
        return $this->prelevementLgs;
    }
    /**
     * @return Collection<int, PPrelevementLg>
     */
    public function getBulletinLgs(): Collection
    {
        return $this->bulletinLgs;
    }
    public function getActiveBulletinLgs()
    {
        $array = [];
        foreach($this->bulletinLgs as $bulletinLg) {
            if($bulletinLg->isActive()) {
                array_push($array, $bulletinLg);
            }
        }
        return $array;
    }

    public function addPrelevement(PPrelevementLg $prelevementLg): self
    {
        if (!$this->prelevementLgs->contains($prelevementLg)) {
            $this->prelevementLgs->add($prelevementLg);
            $prelevementLg->setBulletin($this);
        }

        return $this;
    }

    public function removePrelevement(PPrelevementLg $prelevementLg): self
    {
        if ($this->prelevementLgs->removeElement($prelevementLg)) {
            // set the owning side to null (unless already changed)
            if ($prelevementLg->getBulletin() === $this) {
                $prelevementLg->setBulletin(null);
            }
        }

        return $this;
    }

    public function getContract(): ?LContract
    {
        return $this->contract;
    }

    public function setContract(?LContract $contract): self
    {
        $this->contract = $contract;

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
            $elementEcheance->setBulletin($this);
        }

        return $this;
    }

    public function removeElementEcheance(LElementEcheance $elementEcheance): self
    {
        if ($this->elementEcheances->removeElement($elementEcheance)) {
            // set the owning side to null (unless already changed)
            if ($elementEcheance->getBulletin() === $this) {
                $elementEcheance->setBulletin(null);
            }
        }

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): self
    {
        $this->code = $code;

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

    public function getDevise(): ?PDevise
    {
        return $this->devise;
    }

    public function setDevise(?PDevise $devise): self
    {
        $this->devise = $devise;

        return $this;
    }

    public function getPaiement(): ?PPaiement
    {
        return $this->paiement;
    }

    public function setPaiement(?PPaiement $paiement): self
    {
        $this->paiement = $paiement;

        return $this;
    }

    public function getObservation(): ?string
    {
        return $this->observation;
    }

    public function setObservation(?string $observation): self
    {
        $this->observation = $observation;

        return $this;
    }

    public function getBordereau(): ?PBordereau
    {
        return $this->bordereau;
    }

    public function setBordereau(?PBordereau $bordereau): self
    {
        $this->bordereau = $bordereau;

        return $this;
    }

    public function getPPiece(): ?PPiece
    {
        return $this->piece;
    }

    public function setPPiece(?PPiece $piece): self
    {
        $this->piece = $piece;

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
            $journalBulletinLg->setBulletin($this);
        }

        return $this;
    }

    public function removeJournalBulletinLg(JournalBulletinLg $journalBulletinLg): self
    {
        if ($this->journalBulletinLgs->removeElement($journalBulletinLg)) {
            // set the owning side to null (unless already changed)
            if ($journalBulletinLg->getBulletin() === $this) {
                $journalBulletinLg->setBulletin(null);
            }
        }

        return $this;
    }
}
