<?php

namespace App\Entity;

use App\Repository\PArretTravailRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PArretTravailRepository::class)]
class PArretTravail
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'arretTravails')]
    private ?LContract $contract = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $DateDebut = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateFin = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateReprise = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = true;

    #[ORM\ManyToOne(inversedBy: 'arretTravails')]
    private ?PMotif $motif = null;

    #[ORM\OneToMany(mappedBy: 'arretTravail', targetEntity: PArretTravailLg::class)]
    private Collection $arretTravailLgs;

    public function __construct()
    {
        $this->arretTravailLgs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDateDebut(): ?\DateTimeInterface
    {
        return $this->DateDebut;
    }

    public function setDateDebut(?\DateTimeInterface $DateDebut): self
    {
        $this->DateDebut = $DateDebut;

        return $this;
    }

    public function getDateFin(): ?\DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(?\DateTimeInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getDateReprise(): ?\DateTimeInterface
    {
        return $this->dateReprise;
    }

    public function setDateReprise(?\DateTimeInterface $dateReprise): self
    {
        $this->dateReprise = $dateReprise;

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

    public function getMotif(): ?PMotif
    {
        return $this->motif;
    }

    public function setMotif(?PMotif $motif): self
    {
        $this->motif = $motif;

        return $this;
    }

    /**
     * @return Collection<int, PArretTravailLg>
     */
    public function getArretTravailLgs(): Collection
    {
        return $this->arretTravailLgs;
    }

    public function addArretTravailLg(PArretTravailLg $arretTravailLg): self
    {
        if (!$this->arretTravailLgs->contains($arretTravailLg)) {
            $this->arretTravailLgs->add($arretTravailLg);
            $arretTravailLg->setArretTravail($this);
        }

        return $this;
    }

    public function removeArretTravailLg(PArretTravailLg $arretTravailLg): self
    {
        if ($this->arretTravailLgs->removeElement($arretTravailLg)) {
            // set the owning side to null (unless already changed)
            if ($arretTravailLg->getArretTravail() === $this) {
                $arretTravailLg->setArretTravail(null);
            }
        }

        return $this;
    }
}
