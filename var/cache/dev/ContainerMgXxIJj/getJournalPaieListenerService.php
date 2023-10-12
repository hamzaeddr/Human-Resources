<?php

namespace ContainerMgXxIJj;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getJournalPaieListenerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'App\EventListener\JournalPaieListener' shared autowired service.
     *
     * @return \App\EventListener\JournalPaieListener
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'EventListener'.\DIRECTORY_SEPARATOR.'JournalPaieListener.php';

        $a = ($container->services['doctrine.orm.default_entity_manager'] ?? $container->getDoctrine_Orm_DefaultEntityManagerService());

        if (isset($container->privates['App\\EventListener\\JournalPaieListener'])) {
            return $container->privates['App\\EventListener\\JournalPaieListener'];
        }

        return $container->privates['App\\EventListener\\JournalPaieListener'] = new \App\EventListener\JournalPaieListener($a);
    }
}
