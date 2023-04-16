<?php

namespace App\Controller\Salarie;

use App\Entity\Diplome;
use App\Entity\Pemploye;
use App\Entity\Pfonction;
use App\Controller\ApiController;
use App\Entity\PNaturesalarieCab;
use App\Entity\PsituationFamiliale;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/salarie/salarie')]
class GestionSalarieController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        
    }
    #[Route('/', name: 'app_salarie_salarie')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'app_salarie_salarie', $this->em, $request);
        if(!$operations) {
            return new AccessDeniedException();
        }
        $natureSalarieCabs = $this->em->getRepository(PNaturesalarieCab::class)->findAll();
        $situationFamiliales = $this->em->getRepository(PsituationFamiliale::class)->findAll();
        $fonctions = $this->em->getRepository(Pfonction::class)->findAll();
        // dd($natureSalarieCabs);
        return $this->render('salarie/gestion_salarie/index.html.twig', [
            'operations' => $operations,
            'natureSalarieCabs' => $natureSalarieCabs,
            'situationFamiliales' => $situationFamiliales,
            'fonctions' => $fonctions,
        ]);
    } 
    #[Route('/new', name: 'app_salarie_salarie_new', options:['expose' => true])]
    public function new(Request $request): Response
    {
        $employe = $this->em->getRepository(Pemploye::class)->New_employe($request);
        $employe_id = $employe->getId();
        $Diplomes = json_decode($request->get('diplomes'));
        $diplome = $this->em->getRepository(Diplome::class)->add_diplome(
            $Diplomes,$employe_id
        );
        return new JsonResponse('ok');        

    }
}
