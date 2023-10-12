<?php

namespace ContainerOv3v1PJ;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolderf407f = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerae49d = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties7fd7c = [
        
    ];

    public function getConnection()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getConnection', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getMetadataFactory', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getExpressionBuilder', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'beginTransaction', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getCache', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getCache();
    }

    public function transactional($func)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'transactional', array('func' => $func), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'wrapInTransaction', array('func' => $func), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'commit', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->commit();
    }

    public function rollback()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'rollback', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getClassMetadata', array('className' => $className), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'createQuery', array('dql' => $dql), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'createNamedQuery', array('name' => $name), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'createQueryBuilder', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'flush', array('entity' => $entity), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'clear', array('entityName' => $entityName), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->clear($entityName);
    }

    public function close()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'close', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->close();
    }

    public function persist($entity)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'persist', array('entity' => $entity), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'remove', array('entity' => $entity), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->remove($entity);
    }

    public function refresh($entity, ?int $lockMode = null)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'refresh', array('entity' => $entity, 'lockMode' => $lockMode), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->refresh($entity, $lockMode);
    }

    public function detach($entity)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'detach', array('entity' => $entity), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'merge', array('entity' => $entity), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getRepository', array('entityName' => $entityName), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'contains', array('entity' => $entity), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getEventManager', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getConfiguration', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'isOpen', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getUnitOfWork', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getProxyFactory', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'initializeObject', array('obj' => $obj), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'getFilters', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'isFiltersStateClean', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'hasFilters', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return $this->valueHolderf407f->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializerae49d = $initializer;

        return $instance;
    }

    public function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, ?\Doctrine\Common\EventManager $eventManager = null)
    {
        static $reflection;

        if (! $this->valueHolderf407f) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolderf407f = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolderf407f->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, '__get', ['name' => $name], $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        if (isset(self::$publicProperties7fd7c[$name])) {
            return $this->valueHolderf407f->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderf407f;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderf407f;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderf407f;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderf407f;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, '__isset', array('name' => $name), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderf407f;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolderf407f;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, '__unset', array('name' => $name), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderf407f;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolderf407f;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, '__clone', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        $this->valueHolderf407f = clone $this->valueHolderf407f;
    }

    public function __sleep()
    {
        $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, '__sleep', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;

        return array('valueHolderf407f');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerae49d = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerae49d;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerae49d && ($this->initializerae49d->__invoke($valueHolderf407f, $this, 'initializeProxy', array(), $this->initializerae49d) || 1) && $this->valueHolderf407f = $valueHolderf407f;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolderf407f;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolderf407f;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
