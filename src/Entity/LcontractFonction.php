<?php

namespace App\Entity;

use App\Repository\LcontractFonctionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LcontractFonctionRepository::class)]
class LcontractFonction
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Pfonction $fonction_id = null;

    #[ORM\ManyToOne(inversedBy: 'lcontractFonctions')]
    private ?LContract $contract_id = null;

   

  
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFonctionId(): ?Pfonction
    {
        return $this->fonction_id;
    }

    public function setFonctionId(?Pfonction $fonction_id): self
    {
        $this->fonction_id = $fonction_id;

        return $this;
    }

   

    

    public function getContractId(): ?LContract
    {
        return $this->contract_id;
    }

    public function setContractId(?LContract $contract_id): self
    {
        $this->contract_id = $contract_id;

        return $this;
    }

   
}
