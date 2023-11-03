<?php

namespace ContainerEOIwoaH;


use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_GTT0RloService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.gTT0Rlo' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.gTT0Rlo'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'natureCab' => ['privates', '.errored..service_locator.gTT0Rlo.App\\Entity\\PNaturesalarieCab', NULL, 'Cannot autowire service ".service_locator.gTT0Rlo": it references class "App\\Entity\\PNaturesalarieCab" but no such service exists.'],
        ], [
            'natureCab' => 'App\\Entity\\PNaturesalarieCab',
        ]);
    }
}
