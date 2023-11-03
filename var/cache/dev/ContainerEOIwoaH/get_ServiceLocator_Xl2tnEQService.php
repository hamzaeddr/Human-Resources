<?php

namespace ContainerEOIwoaH;


use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_Xl2tnEQService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.xl2tnEQ' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.xl2tnEQ'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'natureContrat' => ['privates', '.errored..service_locator.xl2tnEQ.App\\Entity\\PnatureContract', NULL, 'Cannot autowire service ".service_locator.xl2tnEQ": it references class "App\\Entity\\PnatureContract" but no such service exists.'],
        ], [
            'natureContrat' => 'App\\Entity\\PnatureContract',
        ]);
    }
}