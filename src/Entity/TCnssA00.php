<?php

namespace App\Entity;

use App\Repository\TCnssA00Repository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TCnssA00Repository::class)]
class TCnssA00
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 3, nullable: true)]
    private ?string $typeEnreg = null;

    #[ORM\Column(length: 14, nullable: true)]
    private ?string $IdentiTransfert = null;

    #[ORM\Column(length: 2, nullable: true)]
    private ?string $cat = null;

    #[ORM\Column(length: 241, nullable: true)]
    private ?string $filler = null;

    #[ORM\Column(nullable: true)]
    private ?int $periode = null;

    #[ORM\OneToMany(mappedBy: 'cnssa00', targetEntity: TCnssA01::class)]
    private Collection $tCnssA01s;

    #[ORM\OneToMany(mappedBy: 'cnssa00', targetEntity: TCnssA02::class)]
    private Collection $tCnssA02s;

    #[ORM\OneToMany(mappedBy: 'cnssa00', targetEntity: TCnssA03::class)]
    private Collection $tCnssA03s;

    public function __construct()
    {
        $this->tCnssA01s = new ArrayCollection();
        $this->tCnssA02s = new ArrayCollection();
        $this->tCnssA03s = new ArrayCollection();
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
        return $this->IdentiTransfert;
    }

    public function setIdentiTransfert(?string $IdentiTransfert): static
    {
        $this->IdentiTransfert = $IdentiTransfert;

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

    public function getPeriode(): ?int
    {
        return $this->periode;
    }

    public function setPeriode(?int $periode): static
    {
        $this->periode = $periode;

        return $this;
    }

    /**
     * @return Collection<int, TCnssA01>
     */
    public function getTCnssA01s(): Collection
    {
        return $this->tCnssA01s;
    }

    public function addTCnssA01(TCnssA01 $tCnssA01): static
    {
        if (!$this->tCnssA01s->contains($tCnssA01)) {
            $this->tCnssA01s->add($tCnssA01);
            $tCnssA01->setCnssa00($this);
        }

        return $this;
    }

    public function removeTCnssA01(TCnssA01 $tCnssA01): static
    {
        if ($this->tCnssA01s->removeElement($tCnssA01)) {
            // set the owning side to null (unless already changed)
            if ($tCnssA01->getCnssa00() === $this) {
                $tCnssA01->setCnssa00(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TCnssA02>
     */
    public function getTCnssA02s(): Collection
    {
        return $this->tCnssA02s;
    }

    public function addTCnssA02(TCnssA02 $tCnssA02): static
    {
        if (!$this->tCnssA02s->contains($tCnssA02)) {
            $this->tCnssA02s->add($tCnssA02);
            $tCnssA02->setCnssa00($this);
        }

        return $this;
    }

    public function removeTCnssA02(TCnssA02 $tCnssA02): static
    {
        if ($this->tCnssA02s->removeElement($tCnssA02)) {
            // set the owning side to null (unless already changed)
            if ($tCnssA02->getCnssa00() === $this) {
                $tCnssA02->setCnssa00(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TCnssA03>
     */
    public function getTCnssA03s(): Collection
    {
        return $this->tCnssA03s;
    }

    public function addTCnssA03(TCnssA03 $tCnssA03): static
    {
        if (!$this->tCnssA03s->contains($tCnssA03)) {
            $this->tCnssA03s->add($tCnssA03);
            $tCnssA03->setCnssa00($this);
        }

        return $this;
    }

    public function removeTCnssA03(TCnssA03 $tCnssA03): static
    {
        if ($this->tCnssA03s->removeElement($tCnssA03)) {
            // set the owning side to null (unless already changed)
            if ($tCnssA03->getCnssa00() === $this) {
                $tCnssA03->setCnssa00(null);
            }
        }

        return $this;
    }
}
