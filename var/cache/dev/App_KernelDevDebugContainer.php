<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerEOIwoaH\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerEOIwoaH/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerEOIwoaH.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerEOIwoaH\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerEOIwoaH\App_KernelDevDebugContainer([
    'container.build_hash' => 'EOIwoaH',
    'container.build_id' => '9b4bd222',
    'container.build_time' => 1698934377,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerEOIwoaH');
