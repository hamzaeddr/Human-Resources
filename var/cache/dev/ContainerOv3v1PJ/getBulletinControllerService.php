<?php

namespace ContainerOv3v1PJ;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getBulletinControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\Paie\BulletinController' shared autowired service.
     *
     * @return \App\Controller\Paie\BulletinController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'symfony'.\DIRECTORY_SEPARATOR.'framework-bundle'.\DIRECTORY_SEPARATOR.'Controller'.\DIRECTORY_SEPARATOR.'AbstractController.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Controller'.\DIRECTORY_SEPARATOR.'Paie'.\DIRECTORY_SEPARATOR.'BulletinController.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Controller'.\DIRECTORY_SEPARATOR.'Service'.\DIRECTORY_SEPARATOR.'CalculPaieService.php';

        $container->services['App\\Controller\\Paie\\BulletinController'] = $instance = new \App\Controller\Paie\BulletinController(($container->services['doctrine'] ?? $container->getDoctrineService()), new \App\Service\CalculPaieService(($container->services['doctrine.orm.default_entity_manager'] ?? $container->getDoctrine_Orm_DefaultEntityManagerService())));

        $instance->setContainer(($container->privates['.service_locator.jIxfAsi'] ?? $container->load('get_ServiceLocator_JIxfAsiService'))->withContext('App\\Controller\\Paie\\BulletinController', $container));

        return $instance;
    }
}
