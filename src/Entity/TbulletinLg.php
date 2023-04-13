<?php

namespace App\Entity;

use App\Repository\TbulletinLgRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TbulletinLgRepository::class)]
class TbulletinLg
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Tbulletin $Id_Bulletin = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdBulletin(): ?Tbulletin
    {
        return $this->Id_Bulletin;
    }

    public function setIdBulletin(?Tbulletin $Id_Bulletin): self
    {
        $this->Id_Bulletin = $Id_Bulletin;

        return $this;
    }
}
