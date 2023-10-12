<?php

namespace Proxies\__CG__\App\Entity;


/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class PnatureContract extends \App\Entity\PnatureContract implements \Doctrine\ORM\Proxy\Proxy
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
            return ['__isInitialized__', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'id', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'code', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'designation', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'active', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'Abreviation', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'pdureeContracts', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'contract_id', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'type', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'bordereau', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'compteComptables', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'partenaireId'];
        }

        return ['__isInitialized__', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'id', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'code', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'designation', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'active', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'Abreviation', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'pdureeContracts', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'contract_id', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'type', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'bordereau', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'compteComptables', '' . "\0" . 'App\\Entity\\PnatureContract' . "\0" . 'partenaireId'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (PnatureContract $proxy) {
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
    public function getNatureCabId(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNatureCabId', []);

        return parent::getNatureCabId();
    }

    /**
     * {@inheritDoc}
     */
    public function setNatureCabId(int $nature_cab_id): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNatureCabId', [$nature_cab_id]);

        return parent::setNatureCabId($nature_cab_id);
    }

    /**
     * {@inheritDoc}
     */
    public function getCode(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCode', []);

        return parent::getCode();
    }

    /**
     * {@inheritDoc}
     */
    public function setCode(string $code): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCode', [$code]);

        return parent::setCode($code);
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
    public function setDesignation(string $Designation): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDesignation', [$Designation]);

        return parent::setDesignation($Designation);
    }

    /**
     * {@inheritDoc}
     */
    public function getActive(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getActive', []);

        return parent::getActive();
    }

    /**
     * {@inheritDoc}
     */
    public function setActive(int $active): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setActive', [$active]);

        return parent::setActive($active);
    }

    /**
     * {@inheritDoc}
     */
    public function getAbreviation(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAbreviation', []);

        return parent::getAbreviation();
    }

    /**
     * {@inheritDoc}
     */
    public function setAbreviation(string $Abreviation): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAbreviation', [$Abreviation]);

        return parent::setAbreviation($Abreviation);
    }

    /**
     * {@inheritDoc}
     */
    public function getPdureeContracts(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPdureeContracts', []);

        return parent::getPdureeContracts();
    }

    /**
     * {@inheritDoc}
     */
    public function addPdureeContract(\App\Entity\PdureeContract $pdureeContract): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addPdureeContract', [$pdureeContract]);

        return parent::addPdureeContract($pdureeContract);
    }

    /**
     * {@inheritDoc}
     */
    public function removePdureeContract(\App\Entity\PdureeContract $pdureeContract): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removePdureeContract', [$pdureeContract]);

        return parent::removePdureeContract($pdureeContract);
    }

    /**
     * {@inheritDoc}
     */
    public function getContractId(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getContractId', []);

        return parent::getContractId();
    }

    /**
     * {@inheritDoc}
     */
    public function addContractId(\App\Entity\LContract $contractId): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addContractId', [$contractId]);

        return parent::addContractId($contractId);
    }

    /**
     * {@inheritDoc}
     */
    public function removeContractId(\App\Entity\LContract $contractId): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeContractId', [$contractId]);

        return parent::removeContractId($contractId);
    }

    /**
     * {@inheritDoc}
     */
    public function getType(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getType', []);

        return parent::getType();
    }

    /**
     * {@inheritDoc}
     */
    public function setType(?string $type): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setType', [$type]);

        return parent::setType($type);
    }

    /**
     * {@inheritDoc}
     */
    public function getBordereau(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getBordereau', []);

        return parent::getBordereau();
    }

    /**
     * {@inheritDoc}
     */
    public function addBordereau(\App\Entity\PBordereau $bordereau): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addBordereau', [$bordereau]);

        return parent::addBordereau($bordereau);
    }

    /**
     * {@inheritDoc}
     */
    public function removeBordereau(\App\Entity\PBordereau $bordereau): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeBordereau', [$bordereau]);

        return parent::removeBordereau($bordereau);
    }

    /**
     * {@inheritDoc}
     */
    public function getCompteComptables(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCompteComptables', []);

        return parent::getCompteComptables();
    }

    /**
     * {@inheritDoc}
     */
    public function addCompteComptable(\App\Entity\PCompteComptable $compteComptable): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addCompteComptable', [$compteComptable]);

        return parent::addCompteComptable($compteComptable);
    }

    /**
     * {@inheritDoc}
     */
    public function removeCompteComptable(\App\Entity\PCompteComptable $compteComptable): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeCompteComptable', [$compteComptable]);

        return parent::removeCompteComptable($compteComptable);
    }

    /**
     * {@inheritDoc}
     */
    public function getPartenaireId(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPartenaireId', []);

        return parent::getPartenaireId();
    }

    /**
     * {@inheritDoc}
     */
    public function setPartenaireId(?int $partenaireId): \App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPartenaireId', [$partenaireId]);

        return parent::setPartenaireId($partenaireId);
    }

}
