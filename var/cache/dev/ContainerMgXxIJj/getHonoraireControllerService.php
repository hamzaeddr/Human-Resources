<?php

namespace ContainerMgXxIJj;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getHonoraireControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\Paie\HonoraireController' shared autowired service.
     *
     * @return \App\Controller\Paie\HonoraireController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'symfony'.\DIRECTORY_SEPARATOR.'framework-bundle'.\DIRECTORY_SEPARATOR.'Controller'.\DIRECTORY_SEPARATOR.'AbstractController.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Controller'.\DIRECTORY_SEPARATOR.'Paie'.\DIRECTORY_SEPARATOR.'HonoraireController.php';

        $container->services['App\\Controller\\Paie\\HonoraireController'] = $instance = new \App\Controller\Paie\HonoraireController(($container->services['doctrine'] ?? $container->getDoctrineService()), ($container->privates['App\\Service\\CalculPaieService'] ?? $container->load('getCalculPaieServiceService')), ($container->services['App\\Controller\\ApiController'] ?? $container->load('getApiControllerService')));

        $instance->setContainer(($container->privates['.service_locator.jIxfAsi'] ?? $container->load('get_ServiceLocator_JIxfAsiService'))->withContext('App\\Controller\\Paie\\HonoraireController', $container));

        return $instance;
    }
}
