<?php

namespace ContainerOv3v1PJ;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_Y5lWpsKService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.y5lWpsK' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.y5lWpsK'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'App\\Controller\\ApiController::api_getbaremeprofile' => ['privates', '.service_locator.Td4E7gl', 'get_ServiceLocator_Td4E7glService', true],
            'App\\Controller\\ApiController::api_getdureecontrat' => ['privates', '.service_locator.Ys.JvjU', 'get_ServiceLocator_Ys_JvjUService', true],
            'App\\Controller\\ApiController::api_getnaturesalarietype' => ['privates', '.service_locator.gTT0Rlo', 'get_ServiceLocator_GTT0RloService', true],
            'App\\Controller\\HomeController::index' => ['privates', '.service_locator.GQZbvNR', 'get_ServiceLocator_GQZbvNRService', true],
            'App\\Controller\\Security\\RegistrationController::new' => ['privates', '.service_locator.YU8H6ve', 'get_ServiceLocator_YU8H6veService', true],
            'App\\Controller\\Security\\SecurityController::login' => ['privates', '.service_locator.zFcJjKU', 'get_ServiceLocator_ZFcJjKUService', true],
            'App\\Kernel::loadRoutes' => ['privates', '.service_locator.xUrKPVU', 'get_ServiceLocator_XUrKPVUService', true],
            'App\\Kernel::registerContainerConfiguration' => ['privates', '.service_locator.xUrKPVU', 'get_ServiceLocator_XUrKPVUService', true],
            'kernel::loadRoutes' => ['privates', '.service_locator.xUrKPVU', 'get_ServiceLocator_XUrKPVUService', true],
            'kernel::registerContainerConfiguration' => ['privates', '.service_locator.xUrKPVU', 'get_ServiceLocator_XUrKPVUService', true],
            'App\\Controller\\ApiController:api_getbaremeprofile' => ['privates', '.service_locator.Td4E7gl', 'get_ServiceLocator_Td4E7glService', true],
            'App\\Controller\\ApiController:api_getdureecontrat' => ['privates', '.service_locator.Ys.JvjU', 'get_ServiceLocator_Ys_JvjUService', true],
            'App\\Controller\\ApiController:api_getnaturesalarietype' => ['privates', '.service_locator.gTT0Rlo', 'get_ServiceLocator_GTT0RloService', true],
            'App\\Controller\\HomeController:index' => ['privates', '.service_locator.GQZbvNR', 'get_ServiceLocator_GQZbvNRService', true],
            'App\\Controller\\Security\\RegistrationController:new' => ['privates', '.service_locator.YU8H6ve', 'get_ServiceLocator_YU8H6veService', true],
            'App\\Controller\\Security\\SecurityController:login' => ['privates', '.service_locator.zFcJjKU', 'get_ServiceLocator_ZFcJjKUService', true],
            'kernel:loadRoutes' => ['privates', '.service_locator.xUrKPVU', 'get_ServiceLocator_XUrKPVUService', true],
            'kernel:registerContainerConfiguration' => ['privates', '.service_locator.xUrKPVU', 'get_ServiceLocator_XUrKPVUService', true],
        ], [
            'App\\Controller\\ApiController::api_getbaremeprofile' => '?',
            'App\\Controller\\ApiController::api_getdureecontrat' => '?',
            'App\\Controller\\ApiController::api_getnaturesalarietype' => '?',
            'App\\Controller\\HomeController::index' => '?',
            'App\\Controller\\Security\\RegistrationController::new' => '?',
            'App\\Controller\\Security\\SecurityController::login' => '?',
            'App\\Kernel::loadRoutes' => '?',
            'App\\Kernel::registerContainerConfiguration' => '?',
            'kernel::loadRoutes' => '?',
            'kernel::registerContainerConfiguration' => '?',
            'App\\Controller\\ApiController:api_getbaremeprofile' => '?',
            'App\\Controller\\ApiController:api_getdureecontrat' => '?',
            'App\\Controller\\ApiController:api_getnaturesalarietype' => '?',
            'App\\Controller\\HomeController:index' => '?',
            'App\\Controller\\Security\\RegistrationController:new' => '?',
            'App\\Controller\\Security\\SecurityController:login' => '?',
            'kernel:loadRoutes' => '?',
            'kernel:registerContainerConfiguration' => '?',
        ]);
    }
}
