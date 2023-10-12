<?php

namespace ContainerPuCmYNF;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getFosJsRouting_ExtractorService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'fos_js_routing.extractor' shared service.
     *
     * @return \FOS\JsRoutingBundle\Extractor\ExposedRoutesExtractor
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'friendsofsymfony'.\DIRECTORY_SEPARATOR.'jsrouting-bundle'.\DIRECTORY_SEPARATOR.'Extractor'.\DIRECTORY_SEPARATOR.'ExposedRoutesExtractorInterface.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'friendsofsymfony'.\DIRECTORY_SEPARATOR.'jsrouting-bundle'.\DIRECTORY_SEPARATOR.'Extractor'.\DIRECTORY_SEPARATOR.'ExposedRoutesExtractor.php';

        return $container->services['fos_js_routing.extractor'] = new \FOS\JsRoutingBundle\Extractor\ExposedRoutesExtractor(($container->services['router'] ?? $container->getRouterService()), [], $container->targetDir.'', $container->parameters['kernel.bundles']);
    }
}
