<?php

namespace App\Entity;

use App\Repository\TbulletinRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TbulletinRepository::class)]
class Tbulletin
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $Bulletin_id = null;

    #[ORM\Column(length: 50)]
    private ?string $Period = null;

    #[ORM\Column(length: 50)]
    private ?string $Id_Ets = null;

    #[ORM\Column]
    private ?int $Annee = null;

    #[ORM\ManyToOne(inversedBy: 'bulletin_id')]
    private ?LContract $lContract = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBulletinId(): ?string
    {
        return $this->Bulletin_id;
    }

    public function setBulletinId(string $Bulletin_id): self
    {
        $this->Bulletin_id = $Bulletin_id;

        return $this;
    }

    public function getPeriod(): ?string
    {
        return $this->Period;
    }

    public function setPeriod(string $Period): self
    {
        $this->Period = $Period;

        return $this;
    }

    public function getIdEts(): ?string
    {
        return $this->Id_Ets;
    }

    public function setIdEts(string $Id_Ets): self
    {
        $this->Id_Ets = $Id_Ets;

        return $this;
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

    public function getLContract(): ?LContract
    {
        return $this->lContract;
    }

    public function setLContract(?LContract $lContract): self
    {
        $this->lContract = $lContract;

        return $this;
    }
}
