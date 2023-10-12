<?php

namespace ContainerPuCmYNF;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_TTngChGService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.tTngChG' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.tTngChG'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'dossierId' => ['privates', '.errored..service_locator.tTngChG.App\\Entity\\PDossier', NULL, 'Cannot autowire service ".service_locator.tTngChG": it references class "App\\Entity\\PDossier" but no such service exists.'],
            'module' => ['privates', '.errored..service_locator.tTngChG.App\\Entity\\UsModule', NULL, 'Cannot autowire service ".service_locator.tTngChG": it references class "App\\Entity\\UsModule" but no such service exists.'],
            'userId' => ['privates', '.errored..service_locator.tTngChG.App\\Entity\\Users', NULL, 'Cannot autowire service ".service_locator.tTngChG": it references class "App\\Entity\\Users" but no such service exists.'],
        ], [
            'dossierId' => 'App\\Entity\\PDossier',
            'module' => 'App\\Entity\\UsModule',
            'userId' => 'App\\Entity\\Users',
        ]);
    }
}
