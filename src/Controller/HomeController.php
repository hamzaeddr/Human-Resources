<?php

namespace App\Controller;

use App\Entity\PDossier;
use App\Entity\UsModule;
use App\Entity\UsSousModule;
use App\Entity\UserOperationDossier;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        
    }
    

    #[Route('/', name: 'app_site', options:['expose' => true])]
    public function site(Request $request , ManagerRegistry $doctrine): Response
    {
        if(in_array('ROLE_ADMIN', $this->getUser()->getRoles())){
            $dossiers = $doctrine->getManager()->getRepository(PDossier::class)->findAll();
        } else {
            $dossiers = $doctrine->getManager()->getRepository(UserOperationDossier::class)->finddossier($this->getUser()->getId());        
        }
       
        return $this->render('security/site.html.twig', [
            'dossiers' => $dossiers
        ]);
      
    }

    #[Route('/redirect', name: 'app_redirect', options:['expose' => true])]

    public function redirectsite(Request $request): Response
    {
        $dossier = $this->em->getRepository(PDossier::class)->find($request->get('site_id'));
        $request->getSession()->set('dossier', $dossier);

        if(in_array('ROLE_ADMIN', $this->getUser()->getRoles())){
            $sousModules = $this->em->getRepository(UsSousModule::class)->findAll();
        } else {
            $sousModules = $this->em->getRepository(UsSousModule::class)->findByUserOperations($this->getUser(), $dossier);
        }
        $modules = $this->em->getRepository(UsModule::class)->getModuleBySousModule($sousModules);
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
        if(count($sousModules) < 1) {
            die("Vous n'avez aucun prévilege pour continue cette operation. veuillez contacter votre chef!");
        } 
        // return $this->redirectToRoute('app_salarie_site');

        // return $this->redirectToRoute($sousModules[0]->getLink());

        // $sousModules = $request->getSession()->get('sousmodules');
        

        $redirectUrl =  $sousModules[0]->getlink();

        
        return new JsonResponse(['redirect_url' => $redirectUrl]);


    }
}
