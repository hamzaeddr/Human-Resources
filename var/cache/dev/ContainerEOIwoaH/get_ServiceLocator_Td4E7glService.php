<?php

namespace ContainerEOIwoaH;


use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_Td4E7glService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.Td4E7gl' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.Td4E7gl'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'natureCab' => ['privates', '.errored..service_locator.Td4E7gl.App\\Entity\\PNaturesalarieCab', NULL, 'Cannot autowire service ".service_locator.Td4E7gl": it references class "App\\Entity\\PNaturesalarieCab" but no such service exists.'],
            'niveau' => ['privates', '.errored.KyCo05w', NULL, 'Cannot determine controller argument for "App\\Controller\\ApiController::api_getbaremeprofile()": the $niveau argument is type-hinted with the non-existent class or interface: "App\\Entity\\PNiveau".'],
        ], [
            'natureCab' => 'App\\Entity\\PNaturesalarieCab',
            'niveau' => '?',
        ]);
    }
}