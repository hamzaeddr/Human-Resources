<?php

namespace App\Controller;

use App\Entity\PDossier;
use App\Entity\UsModule;
use App\Entity\UsSousModule;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(ManagerRegistry $doctrine, Request $request): Response
    {
        if(in_array('ROLE_ADMIN', $this->getUser()->getRoles())){
            $sousModules = $doctrine->getManager()->getRepository(UsSousModule::class)->findAll();
            $dossiers = $doctrine->getManager()->getRepository(PDossier::class)->findAll();
        } else {
            $sousModules = $doctrine->getManager()->getRepository(UsSousModule::class)->findByUserOperations($this->getUser());
            $dossiers = $doctrine->getManager()->getRepository(PDossier::class)->findByUserDossiers($this->getUser());
        }
        $modules = $doctrine->getManager()->getRepository(UsModule::class)->getModuleBySousModule($sousModules);
        $data = [];
        // dd($sousModules);
        foreach($modules as $module) {
            $sousModuleArray = [];
            foreach ($sousModules as $sousModule) {
                if($sousModule->getModule()->getId() == $module->getId()) {
                    // dd($sousModule);
                    array_push($sousModuleArray,$sousModule);
                }
            }
            array_push($data, [
                'module' => $module,
                'sousModule' => $sousModuleArray
            ]);
            
        }
        // dd($data);
        $request->getSession()->set('modules', $data);
        $request->getSession()->set('dossiers', $dossiers);
        if(count($sousModules) < 1) {
            die("Vous n'avez aucun prévilege pour continue cette operation. veuillez contacter votre chef!");
        } else if (count($dossiers) < 1) {
            die("Vous n'avez aucun dossier pour continue cette operation. veuillez contacter votre chef!");

        }
        return $this->redirectToRoute($sousModules[0]->getLink());
    }
}
