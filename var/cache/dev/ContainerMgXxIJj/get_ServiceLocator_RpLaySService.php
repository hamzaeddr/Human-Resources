<?php

namespace ContainerMgXxIJj;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_RpLaySService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.Rp_LayS' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.Rp_LayS'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'dossierId' => ['privates', '.errored..service_locator.Rp_LayS.App\\Entity\\PDossier', NULL, 'Cannot autowire service ".service_locator.Rp_LayS": it references class "App\\Entity\\PDossier" but no such service exists.'],
            'sous_module' => ['privates', '.errored..service_locator.Rp_LayS.App\\Entity\\UsSousModule', NULL, 'Cannot autowire service ".service_locator.Rp_LayS": it references class "App\\Entity\\UsSousModule" but no such service exists.'],
            'userId' => ['privates', '.errored..service_locator.Rp_LayS.App\\Entity\\Users', NULL, 'Cannot autowire service ".service_locator.Rp_LayS": it references class "App\\Entity\\Users" but no such service exists.'],
        ], [
            'dossierId' => 'App\\Entity\\PDossier',
            'sous_module' => 'App\\Entity\\UsSousModule',
            'userId' => 'App\\Entity\\Users',
        ]);
    }
}
