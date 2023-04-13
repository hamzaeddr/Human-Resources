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
    private ?Pemploye $employe_id = null;

    #[ORM\OneToMany(mappedBy: 'lContract', targetEntity: Tbulletin::class)]
    private Collection $bulletin_id;

    #[ORM\Column(length: 50)]
    private ?string $code = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_debut = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_fin = null;

    #[ORM\Column]
    private ?int $active = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_sortie = null;

    #[ORM\Column(length: 50)]
    private ?string $motif_sortie = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_ancient = null;

    #[ORM\ManyToOne(inversedBy: 'contract_id')]
    private ?PnatureContract $pnatureContract = null;

    #[ORM\OneToMany(mappedBy: 'contract_id', targetEntity: LcontractFonction::class)]
    private Collection $lcontractFonctions;

    #[ORM\OneToMany(mappedBy: 'contract_id', targetEntity: LdossierContract::class)]
    private Collection $ldossierContracts;

    #[ORM\OneToMany(mappedBy: 'contract_id', targetEntity: LmatriculationCoti::class)]
    private Collection $lmatriculationCotis;

    #[ORM\OneToMany(mappedBy: 'contact_id', targetEntity: Lrib::class)]
    private Collection $lribs;

    #[ORM\OneToMany(mappedBy: 'contract_id', targetEntity: LbaremeContract::class)]
    private Collection $lbaremeContracts;

    #[ORM\ManyToOne(inversedBy: 'contract_id')]
    private ?LelementFixe $lelementFixe = null;

    #[ORM\OneToMany(mappedBy: 'contract_id', targetEntity: Lmatriculationcoti::class)]
    private Collection $lmatriculationcotis;

    public function __construct()
    {
        $this->bulletin_id = new ArrayCollection();
        $this->lcontractFonctions = new ArrayCollection();
        $this->ldossierContracts = new ArrayCollection();
        $this->lmatriculationCotis = new ArrayCollection();
        $this->lribs = new ArrayCollection();
        $this->lbaremeContracts = new ArrayCollection();
        $this->lmatriculationcotis = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmployeId(): ?Pemploye
    {
        return $this->employe_id;
    }

    public function setEmployeId(?Pemploye $employe_id): self
    {
        $this->employe_id = $employe_id;

        return $this;
    }

    /**
     * @return Collection<int, Tbulletin>
     */
    public function getBulletinId(): Collection
    {
        return $this->bulletin_id;
    }

    public function addBulletinId(Tbulletin $bulletinId): self
    {
        if (!$this->bulletin_id->contains($bulletinId)) {
            $this->bulletin_id->add($bulletinId);
            $bulletinId->setLContract($this);
        }

        return $this;
    }

    public function removeBulletinId(Tbulletin $bulletinId): self
    {
        if ($this->bulletin_id->removeElement($bulletinId)) {
            // set the owning side to null (unless already changed)
            if ($bulletinId->getLContract() === $this) {
                $bulletinId->setLContract(null);
            }
        }

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

    public function getDateAncient(): ?\DateTimeInterface
    {
        return $this->date_ancient;
    }

    public function setDateAncient(\DateTimeInterface $date_ancient): self
    {
        $this->date_ancient = $date_ancient;

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

    public function addLmatriculationCoti(LmatriculationCotis $lmatriculationCoti): self
    {
        if (!$this->lmatriculationCotis->contains($lmatriculationCoti)) {
            $this->lmatriculationCotis->add($lmatriculationCoti);
            $lmatriculationCoti->setContractId($this);
        }

        return $this;
    }

    public function removeLmatriculationCoti(LmatriculationCotis $lmatriculationCoti): self
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
     * @return Collection<int, LbaremeContract>
     */
    public function getLbaremeContracts(): Collection
    {
        return $this->lbaremeContracts;
    }

    public function addLbaremeContract(LbaremeContract $lbaremeContract): self
    {
        if (!$this->lbaremeContracts->contains($lbaremeContract)) {
            $this->lbaremeContracts->add($lbaremeContract);
            $lbaremeContract->setContractId($this);
        }

        return $this;
    }

    public function removeLbaremeContract(LbaremeContract $lbaremeContract): self
    {
        if ($this->lbaremeContracts->removeElement($lbaremeContract)) {
            // set the owning side to null (unless already changed)
            if ($lbaremeContract->getContractId() === $this) {
                $lbaremeContract->setContractId(null);
            }
        }

        return $this;
    }

    public function getLelementFixe(): ?LelementFixe
    {
        return $this->lelementFixe;
    }

    public function setLelementFixe(?LelementFixe $lelementFixe): self
    {
        $this->lelementFixe = $lelementFixe;

        return $this;
    }
}
