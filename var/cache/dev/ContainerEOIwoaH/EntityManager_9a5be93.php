<?php

namespace ContainerEOIwoaH;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolderb8696 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializereee02 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties7c744 = [
        
    ];

    public function getConnection()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getConnection', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getMetadataFactory', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getExpressionBuilder', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'beginTransaction', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->beginTransaction();
    }

    public function getCache()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getCache', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getCache();
    }

    public function transactional($func)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'transactional', array('func' => $func), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'wrapInTransaction', array('func' => $func), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'commit', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->commit();
    }

    public function rollback()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'rollback', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getClassMetadata', array('className' => $className), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'createQuery', array('dql' => $dql), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'createNamedQuery', array('name' => $name), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'createQueryBuilder', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'flush', array('entity' => $entity), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'clear', array('entityName' => $entityName), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->clear($entityName);
    }

    public function close()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'close', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->close();
    }

    public function persist($entity)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'persist', array('entity' => $entity), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'remove', array('entity' => $entity), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->remove($entity);
    }

    public function refresh($entity, ?int $lockMode = null)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'refresh', array('entity' => $entity, 'lockMode' => $lockMode), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->refresh($entity, $lockMode);
    }

    public function detach($entity)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'detach', array('entity' => $entity), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'merge', array('entity' => $entity), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getRepository', array('entityName' => $entityName), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'contains', array('entity' => $entity), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getEventManager', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getConfiguration', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'isOpen', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getUnitOfWork', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getProxyFactory', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'initializeObject', array('obj' => $obj), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'getFilters', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'isFiltersStateClean', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'hasFilters', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return $this->valueHolderb8696->hasFilters();
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

        $instance->initializereee02 = $initializer;

        return $instance;
    }

    public function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, ?\Doctrine\Common\EventManager $eventManager = null)
    {
        static $reflection;

        if (! $this->valueHolderb8696) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolderb8696 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolderb8696->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, '__get', ['name' => $name], $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        if (isset(self::$publicProperties7c744[$name])) {
            return $this->valueHolderb8696->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb8696;

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

        $targetObject = $this->valueHolderb8696;
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
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, '__set', array('name' => $name, 'value' => $value), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb8696;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderb8696;
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
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, '__isset', array('name' => $name), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb8696;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolderb8696;
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
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, '__unset', array('name' => $name), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb8696;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolderb8696;
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
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, '__clone', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        $this->valueHolderb8696 = clone $this->valueHolderb8696;
    }

    public function __sleep()
    {
        $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, '__sleep', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;

        return array('valueHolderb8696');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializereee02 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializereee02;
    }

    public function initializeProxy() : bool
    {
        return $this->initializereee02 && ($this->initializereee02->__invoke($valueHolderb8696, $this, 'initializeProxy', array(), $this->initializereee02) || 1) && $this->valueHolderb8696 = $valueHolderb8696;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolderb8696;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolderb8696;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
