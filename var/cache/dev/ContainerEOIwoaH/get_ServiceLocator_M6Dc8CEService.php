<?php

namespace ContainerEOIwoaH;


use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_M6Dc8CEService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.m6Dc8CE' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.m6Dc8CE'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'element' => ['privates', '.errored..service_locator.m6Dc8CE.App\\Entity\\LelementFixe', NULL, 'Cannot autowire service ".service_locator.m6Dc8CE": it references class "App\\Entity\\LelementFixe" but no such service exists.'],
        ], [
            'element' => 'App\\Entity\\LelementFixe',
        ]);
    }
}