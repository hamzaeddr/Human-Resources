<?php

namespace App\Entity;

use App\Repository\PbaremeBruteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PbaremeBruteRepository::class)]
class PbaremeBrute
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nature_sal = null;

    #[ORM\ManyToOne(inversedBy: 'pbaremebrutes')]
    private ?Pbareme $Id_bareme = null;

    #[ORM\ManyToOne(inversedBy: 'pbaremebrutes')]
    private ?Prubrique $rubrique_id = null;

    #[ORM\Column(length: 255)]
    private ?string $Base = null;

    #[ORM\Column(length: 255)]
    private ?string $Nom_Base = null;

    #[ORM\Column]
    private ?float $Taux_Ps = null;

    #[ORM\Column(length: 100)]
    private ?string $TTaux_PS = null;

    #[ORM\Column]
    private ?int $Montant_Ps = null;

    #[ORM\Column(length: 100)]
    private ?string $Type_MT = null;

    #[ORM\Column]
    private ?int $Imposable = null;

    #[ORM\Column(length: 100)]
    private ?string $Genre = null;

  
  
   

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNatureSal(): ?string
    {
        return $this->nature_sal;
    }

    public function setNatureSal(string $nature_sal): self
    {
        $this->nature_sal = $nature_sal;

        return $this;
    }

    public function getIdBareme(): ?Pbareme
    {
        return $this->Id_bareme;
    }

    public function setIdBareme(?Pbareme $Id_bareme): self
    {
        $this->Id_bareme = $Id_bareme;

        return $this;
    }

    public function getRubriqueId(): ?Prubrique
    {
        return $this->rubrique_id;
    }

    public function setRubriqueId(?Prubrique $rubrique_id): self
    {
        $this->rubrique_id = $rubrique_id;

        return $this;
    }

    public function getBase(): ?string
    {
        return $this->Base;
    }

    public function setBase(string $Base): self
    {
        $this->Base = $Base;

        return $this;
    }

    public function getNomBase(): ?string
    {
        return $this->Nom_Base;
    }

    public function setNomBase(string $Nom_Base): self
    {
        $this->Nom_Base = $Nom_Base;

        return $this;
    }

    public function getTauxPs(): ?float
    {
        return $this->Taux_Ps;
    }

    public function setTauxPs(float $Taux_Ps): self
    {
        $this->Taux_Ps = $Taux_Ps;

        return $this;
    }

    public function getTTauxPS(): ?string
    {
        return $this->TTaux_PS;
    }

    public function setTTauxPS(string $TTaux_PS): self
    {
        $this->TTaux_PS = $TTaux_PS;

        return $this;
    }

    public function getMontantPs(): ?int
    {
        return $this->Montant_Ps;
    }

    public function setMontantPs(int $Montant_Ps): self
    {
        $this->Montant_Ps = $Montant_Ps;

        return $this;
    }

    public function getTypeMT(): ?string
    {
        return $this->Type_MT;
    }

    public function setTypeMT(string $Type_MT): self
    {
        $this->Type_MT = $Type_MT;

        return $this;
    }

    public function getImposable(): ?int
    {
        return $this->Imposable;
    }

    public function setImposable(int $Imposable): self
    {
        $this->Imposable = $Imposable;

        return $this;
    }

    public function getGenre(): ?string
    {
        return $this->Genre;
    }

    public function setGenre(string $Genre): self
    {
        $this->Genre = $Genre;

        return $this;
    }

    

   
   
}
