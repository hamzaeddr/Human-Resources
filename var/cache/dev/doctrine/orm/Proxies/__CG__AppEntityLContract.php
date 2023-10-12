<?php

namespace Proxies\__CG__\App\Entity;


/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class LContract extends \App\Entity\LContract implements \Doctrine\ORM\Proxy\Proxy
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
            return ['__isInitialized__', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'id', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'employe', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'code', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'date_debut', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'date_fin', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'active', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'date_sortie', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'motif_sortie', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'dateAnciennete', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'pnatureContract', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'lcontractFonctions', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'ldossierContracts', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'lmatriculationCotis', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'lribs', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'lmatriculationcotis', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'elementFixes', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'dossier', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'bareme', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'arretTravails', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'elementEcheances', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'priseEnCharge', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'prelevements', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'bulletins', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'problemes', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'fonction', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'Salairegrille', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'Salaireaffecte'];
        }

        return ['__isInitialized__', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'id', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'employe', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'code', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'date_debut', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'date_fin', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'active', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'date_sortie', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'motif_sortie', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'dateAnciennete', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'pnatureContract', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'lcontractFonctions', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'ldossierContracts', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'lmatriculationCotis', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'lribs', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'lmatriculationcotis', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'elementFixes', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'dossier', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'bareme', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'arretTravails', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'elementEcheances', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'priseEnCharge', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'prelevements', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'bulletins', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'problemes', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'fonction', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'Salairegrille', '' . "\0" . 'App\\Entity\\LContract' . "\0" . 'Salaireaffecte'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (LContract $proxy) {
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
    public function getEmploye(): ?\App\Entity\Pemploye
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getEmploye', []);

        return parent::getEmploye();
    }

    /**
     * {@inheritDoc}
     */
    public function setEmploye(?\App\Entity\Pemploye $employe): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setEmploye', [$employe]);

        return parent::setEmploye($employe);
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
    public function setCode(string $code): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCode', [$code]);

        return parent::setCode($code);
    }

    /**
     * {@inheritDoc}
     */
    public function getDateDebut(): ?\DateTimeInterface
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDateDebut', []);

        return parent::getDateDebut();
    }

    /**
     * {@inheritDoc}
     */
    public function setDateDebut(\DateTimeInterface $date_debut): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDateDebut', [$date_debut]);

        return parent::setDateDebut($date_debut);
    }

    /**
     * {@inheritDoc}
     */
    public function getDateFin(): ?\DateTimeInterface
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDateFin', []);

        return parent::getDateFin();
    }

    /**
     * {@inheritDoc}
     */
    public function setDateFin(\DateTimeInterface $date_fin): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDateFin', [$date_fin]);

        return parent::setDateFin($date_fin);
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
    public function setActive(int $active): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setActive', [$active]);

        return parent::setActive($active);
    }

    /**
     * {@inheritDoc}
     */
    public function getDateSortie(): ?\DateTimeInterface
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDateSortie', []);

        return parent::getDateSortie();
    }

    /**
     * {@inheritDoc}
     */
    public function setDateSortie(\DateTimeInterface $date_sortie): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDateSortie', [$date_sortie]);

        return parent::setDateSortie($date_sortie);
    }

    /**
     * {@inheritDoc}
     */
    public function getMotifSortie(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getMotifSortie', []);

        return parent::getMotifSortie();
    }

    /**
     * {@inheritDoc}
     */
    public function setMotifSortie(string $motif_sortie): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setMotifSortie', [$motif_sortie]);

        return parent::setMotifSortie($motif_sortie);
    }

    /**
     * {@inheritDoc}
     */
    public function getDateAnciennete(): ?\DateTimeInterface
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDateAnciennete', []);

        return parent::getDateAnciennete();
    }

    /**
     * {@inheritDoc}
     */
    public function setDateAnciennte(\DateTimeInterface $dateAnciennete): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDateAnciennte', [$dateAnciennete]);

        return parent::setDateAnciennte($dateAnciennete);
    }

    /**
     * {@inheritDoc}
     */
    public function getPnatureContract(): ?\App\Entity\PnatureContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPnatureContract', []);

        return parent::getPnatureContract();
    }

    /**
     * {@inheritDoc}
     */
    public function setPnatureContract(?\App\Entity\PnatureContract $pnatureContract): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPnatureContract', [$pnatureContract]);

        return parent::setPnatureContract($pnatureContract);
    }

    /**
     * {@inheritDoc}
     */
    public function getLcontractFonctions(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLcontractFonctions', []);

        return parent::getLcontractFonctions();
    }

    /**
     * {@inheritDoc}
     */
    public function addLcontractFonction(\App\Entity\LcontractFonction $lcontractFonction): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addLcontractFonction', [$lcontractFonction]);

        return parent::addLcontractFonction($lcontractFonction);
    }

    /**
     * {@inheritDoc}
     */
    public function removeLcontractFonction(\App\Entity\LcontractFonction $lcontractFonction): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeLcontractFonction', [$lcontractFonction]);

        return parent::removeLcontractFonction($lcontractFonction);
    }

    /**
     * {@inheritDoc}
     */
    public function getLdossierContracts(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLdossierContracts', []);

        return parent::getLdossierContracts();
    }

    /**
     * {@inheritDoc}
     */
    public function addLdossierContract(\App\Entity\LdossierContract $ldossierContract): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addLdossierContract', [$ldossierContract]);

        return parent::addLdossierContract($ldossierContract);
    }

    /**
     * {@inheritDoc}
     */
    public function removeLdossierContract(\App\Entity\LdossierContract $ldossierContract): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeLdossierContract', [$ldossierContract]);

        return parent::removeLdossierContract($ldossierContract);
    }

    /**
     * {@inheritDoc}
     */
    public function getLmatriculationCotis(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLmatriculationCotis', []);

        return parent::getLmatriculationCotis();
    }

    /**
     * {@inheritDoc}
     */
    public function addLmatriculationCoti(\App\Entity\LmatriculationCoti $lmatriculationCoti): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addLmatriculationCoti', [$lmatriculationCoti]);

        return parent::addLmatriculationCoti($lmatriculationCoti);
    }

    /**
     * {@inheritDoc}
     */
    public function removeLmatriculationCoti(\App\Entity\LmatriculationCoti $lmatriculationCoti): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeLmatriculationCoti', [$lmatriculationCoti]);

        return parent::removeLmatriculationCoti($lmatriculationCoti);
    }

    /**
     * {@inheritDoc}
     */
    public function getLribs(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLribs', []);

        return parent::getLribs();
    }

    /**
     * {@inheritDoc}
     */
    public function addLrib(\App\Entity\Lrib $lrib): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addLrib', [$lrib]);

        return parent::addLrib($lrib);
    }

    /**
     * {@inheritDoc}
     */
    public function removeLrib(\App\Entity\Lrib $lrib): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeLrib', [$lrib]);

        return parent::removeLrib($lrib);
    }

    /**
     * {@inheritDoc}
     */
    public function getElementFixes(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getElementFixes', []);

        return parent::getElementFixes();
    }

    /**
     * {@inheritDoc}
     */
    public function getActiveElementFixes()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getActiveElementFixes', []);

        return parent::getActiveElementFixes();
    }

    /**
     * {@inheritDoc}
     */
    public function addElementFix(\App\Entity\LelementFixe $elementFix): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addElementFix', [$elementFix]);

        return parent::addElementFix($elementFix);
    }

    /**
     * {@inheritDoc}
     */
    public function removeElementFix(\App\Entity\LelementFixe $elementFix): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeElementFix', [$elementFix]);

        return parent::removeElementFix($elementFix);
    }

    /**
     * {@inheritDoc}
     */
    public function getDossier(): ?\App\Entity\PDossier
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDossier', []);

        return parent::getDossier();
    }

    /**
     * {@inheritDoc}
     */
    public function setDossier(?\App\Entity\PDossier $dossier): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDossier', [$dossier]);

        return parent::setDossier($dossier);
    }

    /**
     * {@inheritDoc}
     */
    public function getBareme(): ?\App\Entity\Pbareme
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getBareme', []);

        return parent::getBareme();
    }

    /**
     * {@inheritDoc}
     */
    public function setBareme(?\App\Entity\Pbareme $bareme): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setBareme', [$bareme]);

        return parent::setBareme($bareme);
    }

    /**
     * {@inheritDoc}
     */
    public function getArretTravails(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getArretTravails', []);

        return parent::getArretTravails();
    }

    /**
     * {@inheritDoc}
     */
    public function addArretTravail(\App\Entity\PArretTravail $arretTravail): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addArretTravail', [$arretTravail]);

        return parent::addArretTravail($arretTravail);
    }

    /**
     * {@inheritDoc}
     */
    public function removeArretTravail(\App\Entity\PArretTravail $arretTravail): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeArretTravail', [$arretTravail]);

        return parent::removeArretTravail($arretTravail);
    }

    /**
     * {@inheritDoc}
     */
    public function getElementEcheances(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getElementEcheances', []);

        return parent::getElementEcheances();
    }

    /**
     * {@inheritDoc}
     */
    public function addElementEcheance(\App\Entity\LElementEcheance $elementEcheance): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addElementEcheance', [$elementEcheance]);

        return parent::addElementEcheance($elementEcheance);
    }

    /**
     * {@inheritDoc}
     */
    public function removeElementEcheance(\App\Entity\LElementEcheance $elementEcheance): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeElementEcheance', [$elementEcheance]);

        return parent::removeElementEcheance($elementEcheance);
    }

    /**
     * {@inheritDoc}
     */
    public function getPriseEnCharge(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPriseEnCharge', []);

        return parent::getPriseEnCharge();
    }

    /**
     * {@inheritDoc}
     */
    public function setPriseEnCharge(?int $priseEnCharge): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPriseEnCharge', [$priseEnCharge]);

        return parent::setPriseEnCharge($priseEnCharge);
    }

    /**
     * {@inheritDoc}
     */
    public function getPrelevements(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPrelevements', []);

        return parent::getPrelevements();
    }

    /**
     * {@inheritDoc}
     */
    public function addPrelevement(\App\Entity\PPrelevement $prelevement): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addPrelevement', [$prelevement]);

        return parent::addPrelevement($prelevement);
    }

    /**
     * {@inheritDoc}
     */
    public function removePrelevement(\App\Entity\PPrelevement $prelevement): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removePrelevement', [$prelevement]);

        return parent::removePrelevement($prelevement);
    }

    /**
     * {@inheritDoc}
     */
    public function getBulletins(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getBulletins', []);

        return parent::getBulletins();
    }

    /**
     * {@inheritDoc}
     */
    public function addBulletin(\App\Entity\Tbulletin $bulletin): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addBulletin', [$bulletin]);

        return parent::addBulletin($bulletin);
    }

    /**
     * {@inheritDoc}
     */
    public function removeBulletin(\App\Entity\Tbulletin $bulletin): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeBulletin', [$bulletin]);

        return parent::removeBulletin($bulletin);
    }

    /**
     * {@inheritDoc}
     */
    public function getProblemes(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getProblemes', []);

        return parent::getProblemes();
    }

    /**
     * {@inheritDoc}
     */
    public function addProbleme(\App\Entity\Probleme $probleme): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addProbleme', [$probleme]);

        return parent::addProbleme($probleme);
    }

    /**
     * {@inheritDoc}
     */
    public function removeProbleme(\App\Entity\Probleme $probleme): \App\Entity\LContract
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeProbleme', [$probleme]);

        return parent::removeProbleme($probleme);
    }

    /**
     * {@inheritDoc}
     */
    public function getfonction(): ?\App\Entity\Pfonction
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getfonction', []);

        return parent::getfonction();
    }

    /**
     * {@inheritDoc}
     */
    public function setfonction(?\App\Entity\Pfonction $fonction): static
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setfonction', [$fonction]);

        return parent::setfonction($fonction);
    }

    /**
     * {@inheritDoc}
     */
    public function getSalairegrille(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSalairegrille', []);

        return parent::getSalairegrille();
    }

    /**
     * {@inheritDoc}
     */
    public function setSalairegrille(?string $Salairegrille): static
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setSalairegrille', [$Salairegrille]);

        return parent::setSalairegrille($Salairegrille);
    }

    /**
     * {@inheritDoc}
     */
    public function getSalaireaffecte(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSalaireaffecte', []);

        return parent::getSalaireaffecte();
    }

    /**
     * {@inheritDoc}
     */
    public function setSalaireaffecte(?string $Salaireaffecte): static
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setSalaireaffecte', [$Salaireaffecte]);

        return parent::setSalaireaffecte($Salaireaffecte);
    }

}