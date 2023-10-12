<?php

namespace App\Entity;

use App\Repository\PeriodeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PeriodeRepository::class)]
class Periode
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $abreviation = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date = null;

    #[ORM\OneToMany(mappedBy: 'periode', targetEntity: PArretTravailLg::class)]
    private Collection $arretTravailLgs;

    #[ORM\OneToMany(mappedBy: 'periode', targetEntity: LElementEcheance::class)]
    private Collection $elementEcheances;

    #[ORM\OneToMany(mappedBy: 'periode', targetEntity: Tbulletin::class)]
    private Collection $bulletins;


    #[ORM\OneToMany(mappedBy: 'periode', targetEntity: PPrelevementLg::class)]
    private Collection $prelevementLgs;

    #[ORM\OneToMany(mappedBy: 'periode', targetEntity: Probleme::class)]
    private Collection $problemes;

    #[ORM\OneToMany(mappedBy: 'periode', targetEntity: PBordereau::class)]
    private Collection $bordereaus;

    public function __construct()
    {
        $this->arretTravailLgs = new ArrayCollection();
        $this->elementEcheances = new ArrayCollection();
        $this->bulletins = new ArrayCollection();
        $this->prelevementLgs = new ArrayCollection();
        $this->problemes = new ArrayCollection();
        $this->bordereaus = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getAbreviation(): ?string
    {
        return $this->abreviation;
    }

    public function setAbreviation(?string $abreviation): self
    {
        $this->abreviation = $abreviation;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

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
            $arretTravailLg->setPeriode($this);
        }

        return $this;
    }

    public function removeArretTravailLg(PArretTravailLg $arretTravailLg): self
    {
        if ($this->arretTravailLgs->removeElement($arretTravailLg)) {
            // set the owning side to null (unless already changed)
            if ($arretTravailLg->getPeriode() === $this) {
                $arretTravailLg->setPeriode(null);
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
            $elementEcheance->setPeriode($this);
        }

        return $this;
    }

    public function removeElementEcheance(LElementEcheance $elementEcheance): self
    {
        if ($this->elementEcheances->removeElement($elementEcheance)) {
            // set the owning side to null (unless already changed)
            if ($elementEcheance->getPeriode() === $this) {
                $elementEcheance->setPeriode(null);
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
            $bulletin->setPeriode($this);
        }

        return $this;
    }

    public function removeBulletin(Tbulletin $bulletin): self
    {
        if ($this->bulletins->removeElement($bulletin)) {
            // set the owning side to null (unless already changed)
            if ($bulletin->getPeriode() === $this) {
                $bulletin->setPeriode(null);
            }
        }

        return $this;
    }

   

    /**
     * @return Collection<int, PPrelevementLg>
     */
    public function getPrelevementLgs(): Collection
    {
        return $this->prelevementLgs;
    }

    public function addPrelevementLg(PPrelevementLg $prelevementLg): self
    {
        if (!$this->prelevementLgs->contains($prelevementLg)) {
            $this->prelevementLgs->add($prelevementLg);
            $prelevementLg->setPeriode($this);
        }

        return $this;
    }

    public function removePrelevementLg(PPrelevementLg $prelevementLg): self
    {
        if ($this->prelevementLgs->removeElement($prelevementLg)) {
            // set the owning side to null (unless already changed)
            if ($prelevementLg->getPeriode() === $this) {
                $prelevementLg->setPeriode(null);
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
            $probleme->setPeriode($this);
        }

        return $this;
    }

    public function removeProbleme(Probleme $probleme): self
    {
        if ($this->problemes->removeElement($probleme)) {
            // set the owning side to null (unless already changed)
            if ($probleme->getPeriode() === $this) {
                $probleme->setPeriode(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PBordereau>
     */
    public function getBordereaus(): Collection
    {
        return $this->bordereaus;
    }

    public function addBordereau(PBordereau $bordereau): self
    {
        if (!$this->bordereaus->contains($bordereau)) {
            $this->bordereaus->add($bordereau);
            $bordereau->setPeriode($this);
        }

        return $this;
    }

    public function removeBordereau(PBordereau $bordereau): self
    {
        if ($this->bordereaus->removeElement($bordereau)) {
            // set the owning side to null (unless already changed)
            if ($bordereau->getPeriode() === $this) {
                $bordereau->setPeriode(null);
            }
        }

        return $this;
    }
}
