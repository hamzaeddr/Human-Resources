<?php

namespace App\Entity;

use App\Repository\TCnssB00Repository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TCnssB00Repository::class)]
class TCnssB00
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 3, nullable: true)]
    private ?string $typeEnreg = null;

    #[ORM\Column(length: 14, nullable: true)]
    private ?string $identiTransfert = null;

    #[ORM\Column(length: 2, nullable: true)]
    private ?string $cat = null;

    #[ORM\Column(length: 241, nullable: true)]
    private ?string $filler = null;

    #[ORM\Column(length: 6, nullable: true)]
    private ?string $periode = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TCnssA00 $cnssa00 = null;

    #[ORM\OneToMany(mappedBy: 'cnssb00', targetEntity: TCnssB01::class)]
    private Collection $tCnssB01s;

    #[ORM\OneToMany(mappedBy: 'cnssb00', targetEntity: TCnssB02::class)]
    private Collection $tCnssB02s;

    #[ORM\OneToMany(mappedBy: 'cnssb00', targetEntity: TCnssB03::class)]
    private Collection $tCnssB03s;

    #[ORM\OneToMany(mappedBy: 'cnssb00', targetEntity: TCnssB04::class)]
    private Collection $tCnssB04s;

    #[ORM\OneToMany(mappedBy: 'cnssb00', targetEntity: TCnssB05::class)]
    private Collection $tCnssB05s;

    #[ORM\OneToMany(mappedBy: 'cnssb00', targetEntity: TCnssB06::class)]
    private Collection $tCnssB06s;

    public function __construct()
    {
        $this->tCnssB01s = new ArrayCollection();
        $this->tCnssB02s = new ArrayCollection();
        $this->tCnssB03s = new ArrayCollection();
        $this->tCnssB04s = new ArrayCollection();
        $this->tCnssB05s = new ArrayCollection();
        $this->tCnssB06s = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTypeEnreg(): ?string
    {
        return $this->typeEnreg;
    }

    public function setTypeEnreg(?string $typeEnreg): static
    {
        $this->typeEnreg = $typeEnreg;

        return $this;
    }

    public function getIdentiTransfert(): ?string
    {
        return $this->identiTransfert;
    }

    public function setIdentiTransfert(?string $identiTransfert): static
    {
        $this->identiTransfert = $identiTransfert;

        return $this;
    }

    public function getCat(): ?string
    {
        return $this->cat;
    }

    public function setCat(?string $cat): static
    {
        $this->cat = $cat;

        return $this;
    }

    public function getFiller(): ?string
    {
        return $this->filler;
    }

    public function setFiller(?string $filler): static
    {
        $this->filler = $filler;

        return $this;
    }

    public function getPeriode(): ?string
    {
        return $this->periode;
    }

    public function setPeriode(?string $periode): static
    {
        $this->periode = $periode;

        return $this;
    }

    public function getCnssa00(): ?TCnssA00
    {
        return $this->cnssa00;
    }

    public function setCnssa00(?TCnssA00 $cnssa00): static
    {
        $this->cnssa00 = $cnssa00;

        return $this;
    }

    /**
     * @return Collection<int, TCnssB01>
     */
    public function getTCnssB01s(): Collection
    {
        return $this->tCnssB01s;
    }

    public function addTCnssB01(TCnssB01 $tCnssB01): static
    {
        if (!$this->tCnssB01s->contains($tCnssB01)) {
            $this->tCnssB01s->add($tCnssB01);
            $tCnssB01->setCnssb00($this);
        }

        return $this;
    }

    public function removeTCnssB01(TCnssB01 $tCnssB01): static
    {
        if ($this->tCnssB01s->removeElement($tCnssB01)) {
            // set the owning side to null (unless already changed)
            if ($tCnssB01->getCnssb00() === $this) {
                $tCnssB01->setCnssb00(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TCnssB02>
     */
    public function getTCnssB02s(): Collection
    {
        return $this->tCnssB02s;
    }

    public function addTCnssB02(TCnssB02 $tCnssB02): static
    {
        if (!$this->tCnssB02s->contains($tCnssB02)) {
            $this->tCnssB02s->add($tCnssB02);
            $tCnssB02->setCnssb00($this);
        }

        return $this;
    }

    public function removeTCnssB02(TCnssB02 $tCnssB02): static
    {
        if ($this->tCnssB02s->removeElement($tCnssB02)) {
            // set the owning side to null (unless already changed)
            if ($tCnssB02->getCnssb00() === $this) {
                $tCnssB02->setCnssb00(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TCnssB03>
     */
    public function getTCnssB03s(): Collection
    {
        return $this->tCnssB03s;
    }

    public function addTCnssB03(TCnssB03 $tCnssB03): static
    {
        if (!$this->tCnssB03s->contains($tCnssB03)) {
            $this->tCnssB03s->add($tCnssB03);
            $tCnssB03->setCnssb00($this);
        }

        return $this;
    }

    public function removeTCnssB03(TCnssB03 $tCnssB03): static
    {
        if ($this->tCnssB03s->removeElement($tCnssB03)) {
            // set the owning side to null (unless already changed)
            if ($tCnssB03->getCnssb00() === $this) {
                $tCnssB03->setCnssb00(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TCnssB04>
     */
    public function getTCnssB04s(): Collection
    {
        return $this->tCnssB04s;
    }

    public function addTCnssB04(TCnssB04 $tCnssB04): static
    {
        if (!$this->tCnssB04s->contains($tCnssB04)) {
            $this->tCnssB04s->add($tCnssB04);
            $tCnssB04->setCnssb00($this);
        }

        return $this;
    }

    public function removeTCnssB04(TCnssB04 $tCnssB04): static
    {
        if ($this->tCnssB04s->removeElement($tCnssB04)) {
            // set the owning side to null (unless already changed)
            if ($tCnssB04->getCnssb00() === $this) {
                $tCnssB04->setCnssb00(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TCnssB05>
     */
    public function getTCnssB05s(): Collection
    {
        return $this->tCnssB05s;
    }

    public function addTCnssB05(TCnssB05 $tCnssB05): static
    {
        if (!$this->tCnssB05s->contains($tCnssB05)) {
            $this->tCnssB05s->add($tCnssB05);
            $tCnssB05->setCnssb00($this);
        }

        return $this;
    }

    public function removeTCnssB05(TCnssB05 $tCnssB05): static
    {
        if ($this->tCnssB05s->removeElement($tCnssB05)) {
            // set the owning side to null (unless already changed)
            if ($tCnssB05->getCnssb00() === $this) {
                $tCnssB05->setCnssb00(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TCnssB06>
     */
    public function getTCnssB06s(): Collection
    {
        return $this->tCnssB06s;
    }

    public function addTCnssB06(TCnssB06 $tCnssB06): static
    {
        if (!$this->tCnssB06s->contains($tCnssB06)) {
            $this->tCnssB06s->add($tCnssB06);
            $tCnssB06->setCnssb00($this);
        }

        return $this;
    }

    public function removeTCnssB06(TCnssB06 $tCnssB06): static
    {
        if ($this->tCnssB06s->removeElement($tCnssB06)) {
            // set the owning side to null (unless already changed)
            if ($tCnssB06->getCnssb00() === $this) {
                $tCnssB06->setCnssb00(null);
            }
        }

        return $this;
    }
}
