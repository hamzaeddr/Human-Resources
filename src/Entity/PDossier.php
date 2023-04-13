<?php

namespace App\Entity;

use App\Repository\PDossierRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PDossierRepository::class)]
class PDossier
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 150)]
    private ?string $Designation = null;

    #[ORM\Column(length: 150)]
    private ?string $Abreviation = null;

    #[ORM\Column(length: 150)]
    private ?string $code = null;

    #[ORM\ManyToMany(targetEntity: Users::class, inversedBy: 'pDossiers')]
    private Collection $user_id;

    #[ORM\ManyToMany(targetEntity: Users::class, mappedBy: 'pdossier_id')]
    private Collection $users;

    // #[ORM\OneToMany(mappedBy: 'dossier_id', targetEntity: LdossierContract::class)]
    // private Collection $ldossierContracts;

   

    public function __construct()
    {
        $this->user_id = new ArrayCollection();
        // $this->ldossierContracts = new ArrayCollection();
        // $this->userid = new ArrayCollection();
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->Designation;
    }

    public function setDesignation(string $Designation): self
    {
        $this->Designation = $Designation;

        return $this;
    }

    public function getAbreviation(): ?string
    {
        return $this->Abreviation;
    }

    public function setAbreviation(string $Abreviation): self
    {
        $this->Abreviation = $Abreviation;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    /**
     * @return Collection<int, Users>
     */
    public function getUserId(): Collection
    {
        return $this->user_id;
    }

    public function addUserId(Users $userId): self
    {
        if (!$this->user_id->contains($userId)) {
            $this->user_id->add($userId);
        }

        return $this;
    }

    public function removeUserId(Users $userId): self
    {
        $this->user_id->removeElement($userId);

        return $this;
    }

    // /**
    //  * @return Collection<int, LdossierContract>
    //  */
    // public function getLdossierContracts(): Collection
    // {
    //     return $this->ldossierContracts;
    // }

    // public function addLdossierContract(LdossierContract $ldossierContract): self
    // {
    //     if (!$this->ldossierContracts->contains($ldossierContract)) {
    //         $this->ldossierContracts->add($ldossierContract);
    //         $ldossierContract->setDossierId($this);
    //     }

    //     return $this;
    // }

    // public function removeLdossierContract(LdossierContract $ldossierContract): self
    // {
    //     if ($this->ldossierContracts->removeElement($ldossierContract)) {
    //         // set the owning side to null (unless already changed)
    //         if ($ldossierContract->getDossierId() === $this) {
    //             $ldossierContract->setDossierId(null);
    //         }
    //     }

    //     return $this;
    // }

    /**
     * @return Collection<int, Users>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(Users $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
            $user->addPdossierId($this);
        }

        return $this;
    }

    public function removeUser(Users $user): self
    {
        if ($this->users->removeElement($user)) {
            $user->removePdossierId($this);
        }

        return $this;
    }
}
