<?php

namespace App\Entity;

use App\Repository\CabRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CabRepository::class)]
class Cab
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $typePiece;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $dateOperation;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $autreInformation;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $typePaiement;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $typeBanque;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $cheqNum;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $cheqType;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $cheqBnq;
 
    #[ORM\OneToMany(mappedBy: 'cab', targetEntity: Det::class)]
    private $dets;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $idLocal;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $idSysteme;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $idSite;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $descriptionSite;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $idOperation;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $descriptionOperation;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $idPiece;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $datePiece;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantInitial;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantRemise;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantRetenu;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantNet;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantAutre1;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantAutre2;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $flag1;

    #[ORM\Column(type: 'boolean', nullable: true)]
    private $flag2;

    #[ORM\Column(type: 'boolean', nullable: true)]
    private $flag3;

    #[ORM\Column(type: 'boolean', nullable: true)]
    private $flag4;

    #[ORM\Column(type: 'boolean', nullable: true)]
    private $flag5;

    #[ORM\ManyToOne(targetEntity: NaturePiece::class, inversedBy: 'cabs')]
    private $naturePiece;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $idDoc1Asso;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $idDoc2Asso;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $dateInterf;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $descriptionPiece;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $dateCreationPiece;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $descriptionTierPiece;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $idPieceLiee;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $idTierPiece;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $idGrptOps;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $descriptionGrptOps;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $idGrptFinancier;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $dateGrptFinancier;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $descriptionSysteme;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $devise;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $designiationPiece;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $uniqueId = null;


    public function __construct()
    {
        $this->dets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTypePiece(): ?string
    {
        return $this->typePiece;
    }

    public function setTypePiece(?string $typePiece): self
    {
        $this->typePiece = $typePiece;

        return $this;
    }

    public function getDateOperation(): ?\DateTimeInterface
    {
        return $this->dateOperation;
    }

    public function setDateOperation(?\DateTimeInterface $dateOperation): self
    {
        $this->dateOperation = $dateOperation;

        return $this;
    }


    public function getAutreInformation(): ?string
    {
        return $this->autreInformation;
    }

    public function setAutreInformation(?string $autreInformation): self
    {
        $this->autreInformation = $autreInformation;

        return $this;
    }

    public function getTypePaiement(): ?string
    {
        return $this->typePaiement;
    }

    public function setTypePaiement(?string $typePaiement): self
    {
        $this->typePaiement = $typePaiement;

        return $this;
    }

    public function getTypeBanque(): ?int
    {
        return $this->typeBanque;
    }

    public function setTypeBanque(?int $typeBanque): self
    {
        $this->typeBanque = $typeBanque;

        return $this;
    }

    public function getCheqNum(): ?string
    {
        return $this->cheqNum;
    }

    public function setCheqNum(?string $cheqNum): self
    {
        $this->cheqNum = $cheqNum;

        return $this;
    }

    public function getCheqType(): ?string
    {
        return $this->cheqType;
    }

    public function setCheqType(?string $cheqType): self
    {
        $this->cheqType = $cheqType;

        return $this;
    }

    public function getCheqBnq(): ?string
    {
        return $this->cheqBnq;
    }

    public function setCheqBnq(?string $cheqBnq): self
    {
        $this->cheqBnq = $cheqBnq;

        return $this;
    }



    /**
     * @return Collection<int, Det>
     */
    public function getDets(): Collection
    {
        return $this->dets;
    }

    public function addDet(Det $det): self
    {
        if (!$this->dets->contains($det)) {
            $this->dets[] = $det;
            $det->setCab($this);
        }

        return $this;
    }

    public function removeDet(Det $det): self
    {
        if ($this->dets->removeElement($det)) {
            // set the owning side to null (unless already changed)
            if ($det->getCab() === $this) {
                $det->setCab(null);
            }
        }

        return $this;
    }

    public function getIdLocal(): ?int
    {
        return $this->idLocal;
    }

    public function setIdLocal(?int $idLocal): self
    {
        $this->idLocal = $idLocal;

        return $this;
    }

    public function getIdSysteme(): ?int
    {
        return $this->idSysteme;
    }

    public function setIdSysteme(?int $idSysteme): self
    {
        $this->idSysteme = $idSysteme;

        return $this;
    }

    public function getIdSite(): ?int
    {
        return $this->idSite;
    }

    public function setIdSite(?int $idSite): self
    {
        $this->idSite = $idSite;

        return $this;
    }

    public function getDescriptionSite(): ?string
    {
        return $this->descriptionSite;
    }

    public function setDescriptionSite(?string $descriptionSite): self
    {
        $this->descriptionSite = $descriptionSite;

        return $this;
    }

    public function getIdOperation(): ?string
    {
        return $this->idOperation;
    }

    public function setIdOperation(?string $idOperation): self
    {
        $this->idOperation = $idOperation;

        return $this;
    }

    public function getDescriptionOperation(): ?string
    {
        return $this->descriptionOperation;
    }

    public function setDescriptionOperation(?string $descriptionOperation): self
    {
        $this->descriptionOperation = $descriptionOperation;

        return $this;
    }

    public function getIdPiece(): ?int
    {
        return $this->idPiece;
    }

    public function setIdPiece(?int $idPiece): self
    {
        $this->idPiece = $idPiece;

        return $this;
    }

    public function getDatePiece(): ?\DateTimeInterface
    {
        return $this->datePiece;
    }

    public function setDatePiece(?\DateTimeInterface $datePiece): self
    {
        $this->datePiece = $datePiece;

        return $this;
    }

    public function getMontantInitial(): ?float
    {
        return $this->montantInitial;
    }

    public function setMontantInitial(?float $montantInitial): self
    {
        $this->montantInitial = $montantInitial;

        return $this;
    }

    public function getMontantRemise(): ?float
    {
        return $this->montantRemise;
    }

    public function setMontantRemise(?float $montantRemise): self
    {
        $this->montantRemise = $montantRemise;

        return $this;
    }

    public function getMontantRetenu(): ?float
    {
        return $this->montantRetenu;
    }

    public function setMontantRetenu(?float $montantRetenu): self
    {
        $this->montantRetenu = $montantRetenu;

        return $this;
    }

    public function getMontantNet(): ?float
    {
        return $this->montantNet;
    }

    public function setMontantNet(?float $montantNet): self
    {
        $this->montantNet = $montantNet;

        return $this;
    }

    public function getMontantAutre1(): ?float
    {
        return $this->montantAutre1;
    }

    public function setMontantAutre1(?float $montantAutre1): self
    {
        $this->montantAutre1 = $montantAutre1;

        return $this;
    }

    public function getMontantAutre2(): ?float
    {
        return $this->montantAutre2;
    }

    public function setMontantAutre2(?float $montantAutre2): self
    {
        $this->montantAutre2 = $montantAutre2;

        return $this;
    }

    public function getFlag1(): ?int
    {
        return $this->flag1;
    }

    public function setFlag1(?int $flag1): self
    {
        $this->flag1 = $flag1;

        return $this;
    }

    public function isFlag2(): ?bool
    {
        return $this->flag2;
    }

    public function setFlag2(?bool $flag2): self
    {
        $this->flag2 = $flag2;

        return $this;
    }

    public function isFlag3(): ?bool
    {
        return $this->flag3;
    }

    public function setFlag3(?bool $flag3): self
    {
        $this->flag3 = $flag3;

        return $this;
    }

    public function isFlag4(): ?bool
    {
        return $this->flag4;
    }

    public function setFlag4(?bool $flag4): self
    {
        $this->flag4 = $flag4;

        return $this;
    }

    public function isFlag5(): ?bool
    {
        return $this->flag5;
    }

    public function setFlag5(?bool $flag5): self
    {
        $this->flag5 = $flag5;

        return $this;
    }

    public function getNaturePiece(): ?NaturePiece
    {
        return $this->naturePiece;
    }

    public function setNaturePiece(?NaturePiece $naturePiece): self
    {
        $this->naturePiece = $naturePiece;

        return $this;
    }

    public function getIdDoc1Asso(): ?string
    {
        return $this->idDoc1Asso;
    }

    public function setIdDoc1Asso(?string $idDoc1Asso): self
    {
        $this->idDoc1Asso = $idDoc1Asso;

        return $this;
    }

    public function getIdDoc2Asso(): ?string
    {
        return $this->idDoc2Asso;
    }

    public function setIdDoc2Asso(?string $idDoc2Asso): self
    {
        $this->idDoc2Asso = $idDoc2Asso;

        return $this;
    }

    public function getDateInterf(): ?\DateTimeInterface
    {
        return $this->dateInterf;
    }

    public function setDateInterf(?\DateTimeInterface $dateInterf): self
    {
        $this->dateInterf = $dateInterf;

        return $this;
    }

    public function getDescriptionPiece(): ?string
    {
        return $this->descriptionPiece;
    }

    public function setDescriptionPiece(?string $descriptionPiece): self
    {
        $this->descriptionPiece = $descriptionPiece;

        return $this;
    }

    public function getDateCreationPiece(): ?\DateTimeInterface
    {
        return $this->dateCreationPiece;
    }

    public function setDateCreationPiece(?\DateTimeInterface $dateCreationPiece): self
    {
        $this->dateCreationPiece = $dateCreationPiece;

        return $this;
    }

    public function getDescriptionTierPiece(): ?string
    {
        return $this->descriptionTierPiece;
    }

    public function setDescriptionTierPiece(?string $descriptionTierPiece): self
    {
        $this->descriptionTierPiece = $descriptionTierPiece;

        return $this;
    }

    public function getIdPieceLiee(): ?string
    {
        return $this->idPieceLiee;
    }

    public function setIdPieceLiee(?string $idPieceLiee): self
    {
        $this->idPieceLiee = $idPieceLiee;

        return $this;
    }

    public function getIdTierPiece(): ?string
    {
        return $this->idTierPiece;
    }

    public function setIdTierPiece(?string $idTierPiece): self
    {
        $this->idTierPiece = $idTierPiece;

        return $this;
    }

    public function getIdGrptOps(): ?string
    {
        return $this->idGrptOps;
    }

    public function setIdGrptOps(?string $idGrptOps): self
    {
        $this->idGrptOps = $idGrptOps;

        return $this;
    }

    public function getDescriptionGrptOps(): ?string
    {
        return $this->descriptionGrptOps;
    }

    public function setDescriptionGrptOps(?string $descriptionGrptOps): self
    {
        $this->descriptionGrptOps = $descriptionGrptOps;

        return $this;
    }

    public function getIdGrptFinancier(): ?string
    {
        return $this->idGrptFinancier;
    }

    public function setIdGrptFinancier(?string $idGrptFinancier): self
    {
        $this->idGrptFinancier = $idGrptFinancier;

        return $this;
    }

    public function getDateGrptFinancier(): ?\DateTimeInterface
    {
        return $this->dateGrptFinancier;
    }

    public function setDateGrptFinancier(?\DateTimeInterface $dateGrptFinancier): self
    {
        $this->dateGrptFinancier = $dateGrptFinancier;

        return $this;
    }

    public function getDescriptionSysteme(): ?string
    {
        return $this->descriptionSysteme;
    }

    public function setDescriptionSysteme(?string $descriptionSysteme): self
    {
        $this->descriptionSysteme = $descriptionSysteme;

        return $this;
    }

    public function getDevise(): ?string
    {
        return $this->devise;
    }

    public function setDevise(?string $devise): self
    {
        $this->devise = $devise;

        return $this;
    }

    public function getDesigniationPiece(): ?string
    {
        return $this->designiationPiece;
    }

    public function setDesigniationPiece(?string $designiationPiece): self
    {
        $this->designiationPiece = $designiationPiece;

        return $this;
    }

    public function getUniqueId(): ?string
    {
        return $this->uniqueId;
    }

    public function setUniqueId(?string $uniqueId): self
    {
        $this->uniqueId = $uniqueId;

        return $this;
    }

}
