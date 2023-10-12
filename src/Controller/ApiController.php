<?php

namespace App\Controller;

use App\Entity\LContract;
use App\Entity\PBareme;
use App\Entity\PNiveau;
use App\Entity\PDossier;
use App\Entity\UsModule;
use App\Entity\UsOperation;
use App\Entity\UsSousModule;
use App\Entity\NatureSalarieCab;
use App\Entity\PNaturesalarieCab;
use App\Entity\NatureSalarieContrat;
use App\Entity\PdureeContract;
use App\Entity\PnatureContract;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/api')]
class ApiController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        
    }
    #[Route('/api_getnaturesalarietype/{natureCab}', name: 'api_getnaturesalarietype', options: ['expose' => true])]
    public function api_getnaturesalarietype(PNaturesalarieCab $natureCab)
    {        
        $types = self::dropdown($natureCab->getDets(),'nature type');
        $contrats = self::dropdown($natureCab->getNature(),'nature contrat');
        $niveaux = $this->em->getRepository(PNiveau::class)->findAllNiveauByNatureCab($natureCab);
        $niveaux = self::dropdown($niveaux,'profile');

        return new JsonResponse(['types' => $types, 'contrats' => $contrats, 'niveaux' => $niveaux]);
    }
    #[Route('/api_getbareme/{niveau}/{natureCab}', name: 'api_getbareme', options: ['expose' => true])]
    public function api_getbaremeprofile(PNiveau $niveau, PNaturesalarieCab $natureCab)
    {        
        $baremes = $this->em->getRepository(PBareme::class)->findBy(['natureCab' => $natureCab, 'niveau' => $niveau]);
        $baremes = self::dropdownBareme($baremes,'bareme');
        return new JsonResponse($baremes);
    }
  

    #[Route('/api_getdureecontrat/{natureContrat}', name: 'api_getdureecontrat', options: ['expose' => true])]
    public function api_getdureecontrat(PnatureContract $natureContrat)
    {        
        $dureeContrats = self::dropdown($natureContrat->getPdureeContracts(),'dureé contrat');
        return new JsonResponse($dureeContrats);
    }

    static function dropdown($objects,$choix)
    {
        $data = "<option selected value=''>Choix ".$choix."</option>";
        foreach ($objects as $object) {
            $data .="<option value=".$object->getId()." >".$object->getDesignation()."</option>";
         }
         return $data;
    }


    static function dropdownBareme($objects,$choix)
    {
        $data = "<option selected value=''>Choix ".$choix."</option>";
        foreach ($objects as $object) {

            $data .="<option data-paye=".$object->getNetAPayer()." value=".$object->getId().">".$object->getBareme()."</option>";
         
        }
         return $data;
    }

    public function check($user, $link, $em, $request) {
        if($request->getSession()->get("modules") == null or $request->getSession()->get("dossier") == null){
            return $this->redirectToRoute('app_site');            
        }
        if(in_array('ROLE_ADMIN', $user->getRoles())) {
            $operations = $em->getRepository(UsOperation::class)->findAllBySousModule($link);
            return $operations;
        }
        $dossier = $request->getSession()->get('dossier');
        $operations = $em->getRepository(UsOperation::class)->getOperationByLinkSousModule($user, $link, $dossier);
        return $operations;
    }
}
