<?php

namespace App\Entity;

use App\Repository\ProblemeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProblemeRepository::class)]
class Probleme
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'problemes')]
    private ?Periode $periode = null;

    #[ORM\ManyToOne(inversedBy: 'problemes')]
    private ?LContract $contract = null;

    #[ORM\ManyToOne(inversedBy: 'problemes')]
    private ?LElementEcheance $elementEcheance = null;

    #[ORM\ManyToOne(inversedBy: 'problemes')]
    private ?LelementFixe $elementFixe = null;

    #[ORM\ManyToOne(inversedBy: 'problemes')]
    private ?PPrelevementLg $prelevementLg = null;

    #[ORM\Column(nullable: true)]
    private ?bool $resoudre = false;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motif = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getContract(): ?LContract
    {
        return $this->contract;
    }

    public function setContract(?LContract $contract): self
    {
        $this->contract = $contract;

        return $this;
    }

    public function getElementEcheance(): ?LElementEcheance
    {
        return $this->elementEcheance;
    }

    public function setElementEcheance(?LElementEcheance $elementEcheance): self
    {
        $this->elementEcheance = $elementEcheance;

        return $this;
    }

    public function getElementFixe(): ?LelementFixe
    {
        return $this->elementFixe;
    }

    public function setElementFixe(?LelementFixe $elementFixe): self
    {
        $this->elementFixe = $elementFixe;

        return $this;
    }

    public function getPrelevementLg(): ?PPrelevementLg
    {
        return $this->prelevementLg;
    }

    public function setPrelevementLg(?PPrelevementLg $prelevementLg): self
    {
        $this->prelevementLg = $prelevementLg;

        return $this;
    }

    public function isResoudre(): ?bool
    {
        return $this->resoudre;
    }

    public function setResoudre(?bool $resoudre): self
    {
        $this->resoudre = $resoudre;

        return $this;
    }

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(?string $motif): self
    {
        $this->motif = $motif;

        return $this;
    }
}
