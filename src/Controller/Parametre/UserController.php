<?php

namespace App\Controller\Parametre;

use App\Entity\Users;
use App\Entity\PDossier;
use App\Entity\UsModule;
use App\Controller\ApiController;
use App\Entity\UserOperationDossier;
use App\Entity\UsOperation;
use App\Entity\UsSousModule;
use App\Service\CalculPaieService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/parametre/user')]
class UserController extends AbstractController
{
    private $em;
    private $calculPaieService;
    private $api;
    public function __construct(ManagerRegistry $doctrine, CalculPaieService $calculPaieService, ApiController $api)
    {
        $this->em = $doctrine->getManager();
        $this->calculPaieService = $calculPaieService; 
        $this->api = $api; 
    }
    #[Route('/', name: 'app_parametre_user')]
    public function index(Request $request): Response
    {
        $operations = $this->api->check($this->getUser(), 'app_parametre_user', $this->em, $request);
        
        if(!is_array($operations)) {
            return $this->redirectToRoute('app_site');  
        }elseif(count($operations) == 0) {
            return $this->render('includes/404.html.twig');
        }
        $modules = $this->em->getRepository(UsModule::class)->findAll();
        $dossiers = $this->em->getRepository(PDossier::class)->findAll();

        return $this->render('parametre/user/index.html.twig', [
            'operations' => $operations,
            'modules' => $modules,
            'dossiers' => $dossiers,
        ]);
    }
    #[Route('/app_parametre_user_list', name: 'app_parametre_user_list', options:['expose' => true])]
    public function app_parametre_user_list(Request $request): Response
    {
        
        $draw = $request->query->get('draw');
        $start = $request->query->get('start') ?? 0;
        $length = $request->query->get('length') ?? 10;
        $search = $request->query->all('search')["value"];
        $orderColumnIndex = $request->query->all('order')[0]['column'];
        $orderColumn = $request->query->all("columns")[$orderColumnIndex]['name'];
        $orderDir = $request->query->all('order')[0]['dir'] ?? 'asc';
        $operations = $this->api->check($this->getUser(), 'app_parametre_user', $this->em, $request);


        $queryBuilder = $this->em->createQueryBuilder()
        ->select('u.nom, u.id, u.prenom, u.email, u.roles, u.username, u.enable')
        ->from(Users::class, 'u')
        ;

        if (!empty($search)) {
            $queryBuilder->andWhere('(u.nom LIKE :search OR u.prenom LIKE :search OR u.email LIKE :search OR u.username LIKE :search)')
                ->setParameter('search', "%$search%");
        }

        if (!empty($orderColumn)) {
            $queryBuilder->orderBy("$orderColumn", $orderDir);
        }

        // Paginate results
        $queryBuilder->setFirstResult($start)
            ->setMaxResults($length);

        $results = $queryBuilder->getQuery()->getResult();
        // dd($results);
        foreach ($results as $key => $user) {
            $results[$key]['actions'] = $this->renderView('parametre/user/pages/access.html.twig', ['operations' => $operations, 'id' => $user['id']]);
            $results[$key]['roles'] = implode(",", $user['roles']);
        }
        
        // dd($results);
        $totalRecords = $this->em->createQueryBuilder()
        ->select('COUNT(d.id)')
        ->from(Users::class, 'd')
        ->getQuery()
        ->getSingleScalarResult();

        return new JsonResponse([
            'draw' => $draw,
            'recordsTotal' => $totalRecords,
            'recordsFiltered' =>$totalRecords,
            'data' => $results,
        ]);
    }
    #[Route('/app_parametre_user_activer', name: 'app_parametre_user_activer', options: ['expose' => true])]
    public function app_parametre_user_activer(Request $request): Response
    {
        $usersIds = json_decode($request->get('usersIds'));
        // dd($bordereauIds);
        foreach ($usersIds as $key => $usersId) {
            $user = $this->em->getRepository(Users::class)->find($usersId);
            $user->setEnable(true);
        }

        $this->em->flush();

        return new JsonResponse("Bien enregistrer");

    }
    #[Route('/app_parametre_user_desactiver', name: 'app_parametre_user_desactiver', options: ['expose' => true])]
    public function app_parametre_user_desactiver(Request $request): Response
    {
        $usersIds = json_decode($request->get('usersIds'));
        // dd($bordereauIds);
        foreach ($usersIds as $key => $usersId) {
            $user = $this->em->getRepository(Users::class)->find($usersId);
            $user->setEnable(false);
        }

        $this->em->flush();

        return new JsonResponse("Bien enregistrer");

    }
    #[Route('/app_parametre_user_operation/{operation}/{userId}/{dossierId}/{type}', name: 'app_parametre_user_operation', options: ['expose' => true])]
    public function app_parametre_user_operation(Request $request, UsOperation $operation, Users $userId, PDossier $dossierId, $type): Response
    {
        if($type == 'add') {
            $userOperationDossier = new UserOperationDossier();
            $userOperationDossier->setUser($userId);
            $userOperationDossier->setDossier($dossierId);
            $userOperationDossier->setOperation($operation);

            $this->em->persist($userOperationDossier);
        } else {
            $userOperationDossier = $this->em->getRepository(UserOperationDossier::class)->findOneBy(['user' => $userId, 'dossier' => $dossierId, 'operation' => $operation]);
            if($userOperationDossier) {
                $this->em->remove($userOperationDossier);
            }
        }
        
        $this->em->flush();

        return new JsonResponse("Bien enregistrer");

    }
    #[Route('/app_parametre_user_sousmodule/{sous_module}/{userId}/{dossierId}/{type}', name: 'app_parametre_user_sousmodule', options: ['expose' => true])]
    public function app_parametre_user_sousmodule(Request $request, UsSousModule $sous_module, Users $userId, PDossier $dossierId, $type): Response
    {
        
        if($type == 'add') {
            foreach ($sous_module->getOperations() as $key => $operation) {
                $userOperationDossier = new UserOperationDossier();
                $userOperationDossier->setUser($userId);
                $userOperationDossier->setDossier($dossierId);
                $userOperationDossier->setOperation($operation);
    
                $this->em->persist($userOperationDossier);
            }
        } else {
            foreach ($sous_module->getOperations() as $key => $operation) {
                $userOperationDossier = $this->em->getRepository(UserOperationDossier::class)->findOneBy(['user' => $userId, 'dossier' => $dossierId, 'operation' => $operation]);
                if($userOperationDossier) {
                    $this->em->remove($userOperationDossier);
                }
            }
        }
        
        $this->em->flush();

        return new JsonResponse("Bien enregistrer");

    }
    #[Route('/app_parametre_user_module/{module}/{userId}/{dossierId}/{type}', name: 'app_parametre_user_module', options: ['expose' => true])]
    public function app_parametre_user_module(Request $request, UsModule $module, Users $userId, PDossier $dossierId, $type): Response
    {
        if($type == 'add') {
            foreach ($module->getSousModules() as $key => $sous_module) {
                foreach ($sous_module->getOperations() as $key => $operation) {
                    $userOperationDossier = new UserOperationDossier();
                    $userOperationDossier->setUser($userId);
                    $userOperationDossier->setDossier($dossierId);
                    $userOperationDossier->setOperation($operation);
        
                    $this->em->persist($userOperationDossier);
                }
            }
        } else {
            foreach ($module->getSousModules() as $key => $sous_module) {
                foreach ($sous_module->getOperations() as $key => $operation) {
                    $userOperationDossier = $this->em->getRepository(UserOperationDossier::class)->findOneBy(['user' => $userId, 'dossier' => $dossierId, 'operation' => $operation]);
                    if($userOperationDossier) {
                        $this->em->remove($userOperationDossier);
                    }
                }
            }
        }
        $this->em->flush();

        return new JsonResponse("Bien enregistrer");

    }
    #[Route('/app_parametre_user_all/{userId}/{dossierId}/{type}', name: 'app_parametre_user_all', options: ['expose' => true])]
    public function app_parametre_user_all(Request $request,  Users $userId, PDossier $dossierId, $type): Response
    {
        $modules = $this->em->getRepository(UsModule::class)->findAll();
        if($type == 'add') {
            foreach ($modules as $key => $module) {
                foreach ($module->getSousModules() as $key => $sous_module) {
                    foreach ($sous_module->getOperations() as $key => $operation) {
                        $userOperationDossier = new UserOperationDossier();
                        $userOperationDossier->setUser($userId);
                        $userOperationDossier->setDossier($dossierId);
                        $userOperationDossier->setOperation($operation);
            
                        $this->em->persist($userOperationDossier);
                    }
                }
            }
        } else {
            foreach ($modules as $key => $module) {
                foreach ($module->getSousModules() as $key => $sous_module) {
                    foreach ($sous_module->getOperations() as $key => $operation) {
                        $userOperationDossier = $this->em->getRepository(UserOperationDossier::class)->findOneBy(['user' => $userId, 'dossier' => $dossierId, 'operation' => $operation]);
                        if($userOperationDossier) {
                            $this->em->remove($userOperationDossier);
                        }
                    }
                }
            }
        }
        $this->em->flush();

        return new JsonResponse("Bien enregistrer");

    }

    #[Route('/getoperations/{user}/{dossier}', name: 'app_parametre_user_operations', options: ['expose' => true])]
    public function operations(Users $user, PDossier $dossier): Response
    {
       $ids = [];
       $userOperationDossiers = $this->em->getRepository(UserOperationDossier::class)->findBy(['user' => $user, 'dossier' => $dossier]);
       foreach ($userOperationDossiers as $userOperationDossier) {
           array_push($ids, ["id" => $userOperationDossier->getOperation()->getId()]);
       }

       return new JsonResponse($ids);
    }
}
