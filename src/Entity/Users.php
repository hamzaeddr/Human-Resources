<?php

namespace App\Entity;

use App\Repository\UsersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UsersRepository::class)]
#[UniqueEntity(fields: ['username'], message: 'There is already an account with this username')]
class Users implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $username = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nom = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $prenom = null;

    #[ORM\Column]
    private ?bool $enable = false;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $email = null;

    #[ORM\ManyToMany(targetEntity: UsOperation::class, mappedBy: 'users')]
    private Collection $operations;

    #[ORM\ManyToMany(targetEntity: PDossier::class, mappedBy: 'user_id')]
    
    private Collection $pDossiers;

    #[ORM\ManyToMany(targetEntity: PDossier::class, inversedBy: 'users')]
    private Collection $pdossier_id;

    public function __construct()
    { 
        $this->pDossiers = new ArrayCollection();
        $this->pdossier_id = new ArrayCollection();
    }

    // #[ORM\ManyToMany(targetEntity: PDossier::class, mappedBy: 'users')]
    // private Collection $dossiers;

    // public function __construct()
    // {
    //     $this->operations = new ArrayCollection();
    //     $this->dossiers = new ArrayCollection();
    // }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function isEnable(): ?bool
    {
        return $this->enable;
    }

    public function setEnable(bool $enable): self
    {
        $this->enable = $enable;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return Collection<int, UsOperation>
     */
    public function getOperations(): Collection
    {
        return $this->operations;
    }

    public function addOperation(UsOperation $operation): self
    {
        if (!$this->operations->contains($operation)) {
            $this->operations->add($operation);
            $operation->addUser($this);
        }

        return $this;
    }

    public function removeOperation(UsOperation $operation): self
    {
        if ($this->operations->removeElement($operation)) {
            $operation->removeUser($this);
        }

        return $this;
    }

    // /**
    //  * @return Collection<int, PDossier>
    //  */
    // public function getDossiers(): Collection
    // {
    //     return $this->dossiers;
    // }

    // public function addDossier(PDossier $dossier): self
    // {
    //     if (!$this->dossiers->contains($dossier)) {
    //         $this->dossiers->add($dossier);
    //         $dossier->addUser($this);
    //     }

    //     return $this;
    // }

    // public function removeDossier(PDossier $dossier): self
    // {
    //     if ($this->dossiers->removeElement($dossier)) {
    //         $dossier->removeUser($this);
    //     }

    //     return $this;
    // }

    /**
     * @return Collection<int, PDossier>
     */
    public function getPDossiers(): Collection
    {
        return $this->pDossiers;
    }

    public function addPDossier(PDossier $pDossier): self
    {
        if (!$this->pDossiers->contains($pDossier)) {
            $this->pDossiers->add($pDossier);
            $pDossier->addUserId($this);
        }

        return $this;
    }

    public function removePDossier(PDossier $pDossier): self
    {
        if ($this->pDossiers->removeElement($pDossier)) {
            $pDossier->removeUserId($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, PDossier>
     */
    public function getPdossierId(): Collection
    {
        return $this->pdossier_id;
    }

    public function addPdossierId(PDossier $pdossierId): self
    {
        if (!$this->pdossier_id->contains($pdossierId)) {
            $this->pdossier_id->add($pdossierId);
        }

        return $this;
    }

    public function removePdossierId(PDossier $pdossierId): self
    {
        $this->pdossier_id->removeElement($pdossierId);

        return $this;
    }
}
