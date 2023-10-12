<?php

namespace App\Entity;

use App\Repository\PBordereauRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PBordereauRepository::class)]
class PBordereau
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

   

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\ManyToOne(inversedBy: 'bordereaus')]
    private ?Periode $periode = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $type = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\ManyToOne]
    private ?Users $userCreated = null;

    #[ORM\ManyToOne]
    private ?PDossier $dossier = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nature = null;

    #[ORM\OneToMany(mappedBy: 'bordereau', targetEntity: Tbulletin::class)]
    private Collection $bulletins;

    #[ORM\ManyToOne]
    private ?PPaiement $paiement = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $observation = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = true;

    #[ORM\ManyToOne(inversedBy: 'pBordereaus')]
    private ?PPiece $piece = null;

    #[ORM\ManyToOne(inversedBy: 'bordereau')]
    private ?PnatureContract $natureContract = null;

    #[ORM\ManyToOne]
    private ?PStatut $statut = null;

  

    public function __construct()
    {
        $this->bulletins = new ArrayCollection();
        $this->created = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

   

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): self
    {
        $this->created = $created;

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

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

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

    public function getUserCreated(): ?Users
    {
        return $this->userCreated;
    }

    public function setUserCreated(?Users $userCreated): self
    {
        $this->userCreated = $userCreated;

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

    public function getNature(): ?string
    {
        return $this->nature;
    }

    public function setNature(?string $nature): self
    {
        $this->nature = $nature;

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
            $bulletin->setBordereau($this);
        }

        return $this;
    }

    public function removeBulletin(Tbulletin $bulletin): self
    {
        if ($this->bulletins->removeElement($bulletin)) {
            // set the owning side to null (unless already changed)
            if ($bulletin->getBordereau() === $this) {
                $bulletin->setBordereau(null);
            }
        }

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

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function getPiece(): ?PPiece
    {
        return $this->piece;
    }

    public function setPiece(?PPiece $piece): self
    {
        $this->piece = $piece;

        return $this;
    }

    public function getNatureContract(): ?PnatureContract
    {
        return $this->natureContract;
    }

    public function setNatureContract(?PnatureContract $natureContract): self
    {
        $this->natureContract = $natureContract;

        return $this;
    }

    public function getStatut(): ?PStatut
    {
        return $this->statut;
    }

    public function setStatut(?PStatut $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    
}
