<?php

namespace App\Entity;

use App\Repository\TcontractgeneratedRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TcontractgeneratedRepository::class)]
class Tcontractgenerated
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
