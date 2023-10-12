<?php

namespace App\Controller\Salarie;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SalarienoaciveController extends AbstractController
{
    #[Route('/salarienoacive', name: 'app_salarienoacive')]
    public function index(): Response
    {
        return $this->render('salarienoacive/index.html.twig', [
            'controller_name' => 'SalarienoaciveController',
        ]);
    }
}
