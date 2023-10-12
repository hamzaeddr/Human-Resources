<?php

namespace Proxies\__CG__\App\Entity;


/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Pbareme extends \App\Entity\Pbareme implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array<string, null> properties to be lazy loaded, indexed by property name
     */
    public static $lazyPropertiesNames = array (
);

    /**
     * @var array<string, mixed> default values of properties to be lazy loaded, with keys being the property names
     *
     * @see \Doctrine\Common\Proxy\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = array (
);



    public function __construct(?\Closure $initializer = null, ?\Closure $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return ['__isInitialized__', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'id', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'niveau_id', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'bareme', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'Designation', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'netapayer', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'PbaremeBrutes', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'Profil', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'Poste', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'Experience', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'Groupe', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'Salaire_brute', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'anc_Profil1', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'anc_Profil2', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'nature_cab_id', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'nature_sal_id', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'contracts', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'baremeCimrs'];
        }

        return ['__isInitialized__', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'id', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'niveau_id', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'bareme', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'Designation', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'netapayer', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'PbaremeBrutes', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'Profil', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'Poste', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'Experience', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'Groupe', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'Salaire_brute', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'anc_Profil1', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'anc_Profil2', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'nature_cab_id', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'nature_sal_id', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'contracts', '' . "\0" . 'App\\Entity\\Pbareme' . "\0" . 'baremeCimrs'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Pbareme $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy::$lazyPropertiesDefaults as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', []);
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load(): void
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', []);
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized(): bool
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized): void
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(\Closure $initializer = null): void
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer(): ?\Closure
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(\Closure $cloner = null): void
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner(): ?\Closure
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @deprecated no longer in use - generated code now relies on internal components rather than generated public API
     * @static
     */
    public function __getLazyProperties(): array
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function getId(): ?int
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', []);

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function getNiveauId(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNiveauId', []);

        return parent::getNiveauId();
    }

    /**
     * {@inheritDoc}
     */
    public function setNiveauId(int $niveau_id): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNiveauId', [$niveau_id]);

        return parent::setNiveauId($niveau_id);
    }

    /**
     * {@inheritDoc}
     */
    public function getBareme(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getBareme', []);

        return parent::getBareme();
    }

    /**
     * {@inheritDoc}
     */
    public function setBareme(int $bareme): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setBareme', [$bareme]);

        return parent::setBareme($bareme);
    }

    /**
     * {@inheritDoc}
     */
    public function getDesignation(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDesignation', []);

        return parent::getDesignation();
    }

    /**
     * {@inheritDoc}
     */
    public function setDesignation(string $Designation): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDesignation', [$Designation]);

        return parent::setDesignation($Designation);
    }

    /**
     * {@inheritDoc}
     */
    public function getNetapayer(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNetapayer', []);

        return parent::getNetapayer();
    }

    /**
     * {@inheritDoc}
     */
    public function setNetapayer(int $netapayer): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNetapayer', [$netapayer]);

        return parent::setNetapayer($netapayer);
    }

    /**
     * {@inheritDoc}
     */
    public function getPbaremeBrutes(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPbaremeBrutes', []);

        return parent::getPbaremeBrutes();
    }

    /**
     * {@inheritDoc}
     */
    public function addPbaremeBrute(\App\Entity\PbaremeBrute $PbaremeBrute): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addPbaremeBrute', [$PbaremeBrute]);

        return parent::addPbaremeBrute($PbaremeBrute);
    }

    /**
     * {@inheritDoc}
     */
    public function removePbaremeBrute(\App\Entity\PbaremeBrute $PbaremeBrute): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removePbaremeBrute', [$PbaremeBrute]);

        return parent::removePbaremeBrute($PbaremeBrute);
    }

    /**
     * {@inheritDoc}
     */
    public function getProfil(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getProfil', []);

        return parent::getProfil();
    }

    /**
     * {@inheritDoc}
     */
    public function setProfil(string $Profil): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setProfil', [$Profil]);

        return parent::setProfil($Profil);
    }

    /**
     * {@inheritDoc}
     */
    public function getPoste(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPoste', []);

        return parent::getPoste();
    }

    /**
     * {@inheritDoc}
     */
    public function setPoste(string $Poste): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPoste', [$Poste]);

        return parent::setPoste($Poste);
    }

    /**
     * {@inheritDoc}
     */
    public function getExperience(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getExperience', []);

        return parent::getExperience();
    }

    /**
     * {@inheritDoc}
     */
    public function setExperience(string $Experience): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setExperience', [$Experience]);

        return parent::setExperience($Experience);
    }

    /**
     * {@inheritDoc}
     */
    public function getGroupe(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getGroupe', []);

        return parent::getGroupe();
    }

    /**
     * {@inheritDoc}
     */
    public function setGroupe(int $Groupe): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setGroupe', [$Groupe]);

        return parent::setGroupe($Groupe);
    }

    /**
     * {@inheritDoc}
     */
    public function getSalaireBrute(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSalaireBrute', []);

        return parent::getSalaireBrute();
    }

    /**
     * {@inheritDoc}
     */
    public function setSalaireBrute(int $Salaire_brute): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setSalaireBrute', [$Salaire_brute]);

        return parent::setSalaireBrute($Salaire_brute);
    }

    /**
     * {@inheritDoc}
     */
    public function getAncProfil1(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAncProfil1', []);

        return parent::getAncProfil1();
    }

    /**
     * {@inheritDoc}
     */
    public function setAncProfil1(int $anc_Profil1): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAncProfil1', [$anc_Profil1]);

        return parent::setAncProfil1($anc_Profil1);
    }

    /**
     * {@inheritDoc}
     */
    public function getAncProfil2(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAncProfil2', []);

        return parent::getAncProfil2();
    }

    /**
     * {@inheritDoc}
     */
    public function setAncProfil2(int $anc_Profil2): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAncProfil2', [$anc_Profil2]);

        return parent::setAncProfil2($anc_Profil2);
    }

    /**
     * {@inheritDoc}
     */
    public function getNatureCabId(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNatureCabId', []);

        return parent::getNatureCabId();
    }

    /**
     * {@inheritDoc}
     */
    public function addNatureCabId(\App\Entity\PNaturesalarieCab $natureCabId): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addNatureCabId', [$natureCabId]);

        return parent::addNatureCabId($natureCabId);
    }

    /**
     * {@inheritDoc}
     */
    public function removeNatureCabId(\App\Entity\PNaturesalarieCab $natureCabId): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeNatureCabId', [$natureCabId]);

        return parent::removeNatureCabId($natureCabId);
    }

    /**
     * {@inheritDoc}
     */
    public function getNatureSalId(): ?\App\Entity\PNaturesalarieCab
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNatureSalId', []);

        return parent::getNatureSalId();
    }

    /**
     * {@inheritDoc}
     */
    public function setNatureSalId(?\App\Entity\PNaturesalarieCab $nature_sal_id): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNatureSalId', [$nature_sal_id]);

        return parent::setNatureSalId($nature_sal_id);
    }

    /**
     * {@inheritDoc}
     */
    public function getContracts(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getContracts', []);

        return parent::getContracts();
    }

    /**
     * {@inheritDoc}
     */
    public function addContract(\App\Entity\LContract $contract): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addContract', [$contract]);

        return parent::addContract($contract);
    }

    /**
     * {@inheritDoc}
     */
    public function removeContract(\App\Entity\LContract $contract): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeContract', [$contract]);

        return parent::removeContract($contract);
    }

    /**
     * {@inheritDoc}
     */
    public function getBaremeCimrs(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getBaremeCimrs', []);

        return parent::getBaremeCimrs();
    }

    /**
     * {@inheritDoc}
     */
    public function addBaremeCimr(\App\Entity\PBaremeCimr $baremeCimr): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addBaremeCimr', [$baremeCimr]);

        return parent::addBaremeCimr($baremeCimr);
    }

    /**
     * {@inheritDoc}
     */
    public function removeBaremeCimr(\App\Entity\PBaremeCimr $baremeCimr): \App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeBaremeCimr', [$baremeCimr]);

        return parent::removeBaremeCimr($baremeCimr);
    }

}