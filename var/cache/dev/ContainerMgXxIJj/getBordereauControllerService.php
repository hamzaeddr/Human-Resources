<?php

namespace ContainerMgXxIJj;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getBordereauControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\Tresorerie\BordereauController' shared autowired service.
     *
     * @return \App\Controller\Tresorerie\BordereauController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'symfony'.\DIRECTORY_SEPARATOR.'framework-bundle'.\DIRECTORY_SEPARATOR.'Controller'.\DIRECTORY_SEPARATOR.'AbstractController.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Controller'.\DIRECTORY_SEPARATOR.'Tresorerie'.\DIRECTORY_SEPARATOR.'BordereauController.php';

        $container->services['App\\Controller\\Tresorerie\\BordereauController'] = $instance = new \App\Controller\Tresorerie\BordereauController(($container->services['doctrine'] ?? $container->getDoctrineService()), ($container->services['App\\Controller\\ApiController'] ?? $container->load('getApiControllerService')), ($container->privates['.debug.http_client'] ?? $container->get_Debug_HttpClientService()));

        $instance->setContainer(($container->privates['.service_locator.jIxfAsi'] ?? $container->load('get_ServiceLocator_JIxfAsiService'))->withContext('App\\Controller\\Tresorerie\\BordereauController', $container));

        return $instance;
    }
}