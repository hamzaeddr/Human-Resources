<?php

namespace App\Controller\Salarie;
use App\Entity\Diplome;
use App\Entity\Pemploye;
use App\Entity\Pfonction;
use App\Controller\ApiController;
use App\Entity\LContract;
use App\Entity\LmatriculationCoti;
use App\Entity\Pbareme;
use App\Entity\PnatureContract;
use App\Entity\PNaturesalarieCab;
use App\Entity\PsituationFamiliale;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
class SalarienoactiverController extends AbstractController
{
    private $em;
    private $api;
    
    public function __construct(ManagerRegistry $doctrine, ApiController $api)
    {
        $this->em = $doctrine->getManager();
        $this->api = $api;
        
    }
    #[Route('/salarie/salarienoactiver', name: 'app_salarie_salarienoactiver')]
    public function index(Request $request): Response
    {
        $operations = $this->api->check($this->getUser(), 'app_salarie_salarie', $this->em, $request);
        if(!$operations) {
            return new AccessDeniedException();
        }
        $natureSalarieCabs = $this->em->getRepository(PNaturesalarieCab::class)->findAll();
        $situationFamiliales = $this->em->getRepository(PsituationFamiliale::class)->findAll();
        $fonctions = $this->em->getRepository(Pfonction::class)->findAll();
        $pemployes = $this->em->getRepository(Pemploye::class)->findBy(['active'=> 0]);
        $naturecontract = $this->em->getRepository(PnatureContract::class)->findAll();
        $pbaremes = $this->em->getRepository(Pbareme::class)->findAll();
        $contract = $this->em->getRepository(LContract::class)->findBy(['active'=> 1]);
        
        return $this->render('salarie/gestion_salarie/index.html.twig', [
            'operations' => $operations,
            'natureSalarieCabs' => $natureSalarieCabs,
            'situationFamiliales' => $situationFamiliales,
            'fonctions' => $fonctions,
            'pemployes' => $pemployes,
            'contracts' => $contract,
            'naturecontract' => $naturecontract,
            'baremes' => $pbaremes,
        ]);  
    }
}
