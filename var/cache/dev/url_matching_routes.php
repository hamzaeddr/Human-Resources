<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'app_site', '_controller' => 'App\\Controller\\HomeController::site'], null, null, null, false, false, null]],
        '/redirect' => [[['_route' => 'app_redirect', '_controller' => 'App\\Controller\\HomeController::redirectsite'], null, null, null, false, false, null]],
        '/mouvement/arret' => [[['_route' => 'app_mouvement_arret', '_controller' => 'App\\Controller\\Mouvement\\ArretController::index'], null, null, null, true, false, null]],
        '/mouvement/arret/arret_traitement' => [[['_route' => 'app_mouvement_arret_traitement', '_controller' => 'App\\Controller\\Mouvement\\ArretController::arret_traitement'], null, null, null, false, false, null]],
        '/mouvement/arret/arret_traitement_verification' => [[['_route' => 'arret_traitement_verification', '_controller' => 'App\\Controller\\Mouvement\\ArretController::arret_traitement_verification'], null, null, null, false, false, null]],
        '/mouvement/arret/arret_canvas' => [[['_route' => 'app_mouvement_arret_mass_canvas', '_controller' => 'App\\Controller\\Mouvement\\ArretController::epreuveCanvas'], null, null, null, false, false, null]],
        '/mouvement/arret/arret_canvas_motif' => [[['_route' => 'app_mouvement_arret_mass_canvas_motif', '_controller' => 'App\\Controller\\Mouvement\\ArretController::epreuveCanvas_motif'], null, null, null, false, false, null]],
        '/mouvement/arret/upload_arret' => [[['_route' => 'app_mouvement_arret_mass_upload', '_controller' => 'App\\Controller\\Mouvement\\ArretController::app_mouvement_arret_mass_upload'], null, null, null, false, false, null]],
        '/mouvement/arret/parret_aff' => [[['_route' => 'app_parret_aff', '_controller' => 'App\\Controller\\Mouvement\\ArretController::app_parret_aff'], null, null, null, false, false, null]],
        '/mouvement/echeance' => [[['_route' => 'app_mouvement_echeance', '_controller' => 'App\\Controller\\Mouvement\\EcheanceController::index'], null, null, null, true, false, null]],
        '/mouvement/echeance/app_mouvement_echeance_insert' => [[['_route' => 'app_mouvement_echeance_insert', '_controller' => 'App\\Controller\\Mouvement\\EcheanceController::app_mouvement_echeance_insert'], null, null, null, false, false, null]],
        '/mouvement/echeance/app_mouvement_echeance_list' => [[['_route' => 'app_mouvement_echeance_list', '_controller' => 'App\\Controller\\Mouvement\\EcheanceController::app_mouvement_echeance_list'], null, null, null, false, false, null]],
        '/mouvement/fixe' => [[['_route' => 'app_mouvement_fixe', '_controller' => 'App\\Controller\\Mouvement\\ElementfixeController::index'], null, null, null, true, false, null]],
        '/mouvement/fixe/app_mouvement_fixe_insert' => [[['_route' => 'app_mouvement_fixe_insert', '_controller' => 'App\\Controller\\Mouvement\\ElementfixeController::app_mouvement_fixe_insert'], null, null, null, false, false, null]],
        '/mouvement/fixe/app_mouvement_fixe_list' => [[['_route' => 'app_mouvement_fixe_list', '_controller' => 'App\\Controller\\Mouvement\\ElementfixeController::app_mouvement_fixe_list'], null, null, null, false, false, null]],
        '/mouvement/prets' => [[['_route' => 'app_mouvement_prets', '_controller' => 'App\\Controller\\Mouvement\\PretsController::index'], null, null, null, true, false, null]],
        '/mouvement/prets/app_mouvement_prets_ajouter' => [[['_route' => 'app_mouvement_prets_ajouter', '_controller' => 'App\\Controller\\Mouvement\\PretsController::app_mouvement_prets_ajouter'], null, null, null, false, false, null]],
        '/mouvement/prets/app_mouvement_prets_list' => [[['_route' => 'app_mouvement_prets_list', '_controller' => 'App\\Controller\\Mouvement\\PretsController::app_mouvement_prets_list'], null, null, null, false, false, null]],
        '/paie/bulletin' => [[['_route' => 'app_paie_bulletin', '_controller' => 'App\\Controller\\Paie\\BulletinController::index'], null, null, null, true, false, null]],
        '/paie/bulletin/app_bulletin_employe_calcul' => [[['_route' => 'app_bulletin_employe_calcul', '_controller' => 'App\\Controller\\Paie\\BulletinController::app_bulletin_employe_calcul'], null, null, null, false, false, null]],
        '/paie/bulletin/app_bulletin_employe_probleme_solves' => [[['_route' => 'app_bulletin_employe_probleme_solves', '_controller' => 'App\\Controller\\Paie\\BulletinController::app_bulletin_employe_probleme_solves'], null, null, null, false, false, null]],
        '/paie/honoraire' => [[['_route' => 'app_paie_honoraire', '_controller' => 'App\\Controller\\Paie\\HonoraireController::index'], null, null, null, true, false, null]],
        '/paie/honoraire/app_paie_honoraire_insert' => [[['_route' => 'app_paie_honoraire_insert', '_controller' => 'App\\Controller\\Paie\\HonoraireController::app_paie_honoraire_insert'], null, null, null, false, false, null]],
        '/paie/honoraire/app_paie_honoraire_list' => [[['_route' => 'app_paie_honoraire_list', '_controller' => 'App\\Controller\\Paie\\HonoraireController::app_paie_honoraire_list'], null, null, null, false, false, null]],
        '/paie/indeminite' => [[['_route' => 'app_paie_indeminite', '_controller' => 'App\\Controller\\Paie\\IndeminiteController::index'], null, null, null, true, false, null]],
        '/paie/indeminite/app_paie_indeminite_add_rib' => [[['_route' => 'app_paie_indeminite_add_rib', '_controller' => 'App\\Controller\\Paie\\IndeminiteController::app_paie_indeminite_add_rib'], null, null, null, false, false, null]],
        '/paie/indeminite/app_paie_indeminite_import' => [[['_route' => 'app_paie_indeminite_import', '_controller' => 'App\\Controller\\Paie\\IndeminiteController::app_paie_indeminite_import'], null, null, null, false, false, null]],
        '/paie/indeminite/app_paie_indeminite_insert' => [[['_route' => 'app_paie_indeminite_insert', '_controller' => 'App\\Controller\\Paie\\IndeminiteController::app_paie_indeminite_insert'], null, null, null, false, false, null]],
        '/paie/indeminite/app_paie_indeminite_list' => [[['_route' => 'app_paie_indeminite_list', '_controller' => 'App\\Controller\\Paie\\IndeminiteController::app_paie_indeminite_list'], null, null, null, false, false, null]],
        '/parametre/user' => [[['_route' => 'app_parametre_user', '_controller' => 'App\\Controller\\Parametre\\UserController::index'], null, null, null, true, false, null]],
        '/parametre/user/app_parametre_user_list' => [[['_route' => 'app_parametre_user_list', '_controller' => 'App\\Controller\\Parametre\\UserController::app_parametre_user_list'], null, null, null, false, false, null]],
        '/parametre/user/app_parametre_user_activer' => [[['_route' => 'app_parametre_user_activer', '_controller' => 'App\\Controller\\Parametre\\UserController::app_parametre_user_activer'], null, null, null, false, false, null]],
        '/parametre/user/app_parametre_user_desactiver' => [[['_route' => 'app_parametre_user_desactiver', '_controller' => 'App\\Controller\\Parametre\\UserController::app_parametre_user_desactiver'], null, null, null, false, false, null]],
        '/reporting/cnss' => [[['_route' => 'app_reporting_cnss', '_controller' => 'App\\Controller\\Reporting\\CnssController::index'], null, null, null, true, false, null]],
        '/reporting/cnss/app_reporting_cnss_import' => [[['_route' => 'app_reporting_cnss_import', '_controller' => 'App\\Controller\\Reporting\\CnssController::app_reporting_cnss_import'], null, null, null, false, false, null]],
        '/salarie/salarie' => [[['_route' => 'app_salarie_salarie', '_controller' => 'App\\Controller\\Salarie\\GestionSalarieController::index'], null, null, null, true, false, null]],
        '/salarie/salarie/app_salarie_salarie_list' => [[['_route' => 'app_salarie_salarie_list', '_controller' => 'App\\Controller\\Salarie\\GestionSalarieController::app_salarie_salarie_list'], null, null, null, false, false, null]],
        '/salarie/salarie/salarienoactive' => [[['_route' => 'app_salarie_salarie_noactive', '_controller' => 'App\\Controller\\Salarie\\GestionSalarieController::salarienoactive'], null, null, null, false, false, null]],
        '/salarie/salarie/new' => [[['_route' => 'app_salarie_salarie_new', '_controller' => 'App\\Controller\\Salarie\\GestionSalarieController::new'], null, null, null, false, false, null]],
        '/salarie/salarie/contract' => [[['_route' => 'app_salarie_contract', '_controller' => 'App\\Controller\\Salarie\\GestionSalarieController::contract'], null, null, null, false, false, null]],
        '/salarie/salarie/cnss' => [[['_route' => 'app_salarie_cnss', '_controller' => 'App\\Controller\\Salarie\\GestionSalarieController::cnss'], null, null, null, false, false, null]],
        '/salarie/salarie/plusinfo' => [[['_route' => 'app_salarie_plusinfo', '_controller' => 'App\\Controller\\Salarie\\GestionSalarieController::plusinfo'], null, null, null, false, false, null]],
        '/salarie/salarie/contractaff' => [[['_route' => 'app_salarie_contractaff', '_controller' => 'App\\Controller\\Salarie\\GestionSalarieController::contractaff'], null, null, null, false, false, null]],
        '/salarie/salarie/contractinfo' => [[['_route' => 'app_salarie_contractinfo', '_controller' => 'App\\Controller\\Salarie\\GestionSalarieController::contractinfo'], null, null, null, false, false, null]],
        '/salarie/salarie/updatecontract' => [[['_route' => 'app_salarie_updatecontract', '_controller' => 'App\\Controller\\Salarie\\GestionSalarieController::updatecontract'], null, null, null, false, false, null]],
        '/salarie/salarie/getmatricule' => [[['_route' => 'app_salarie_get_cnss_cimr', '_controller' => 'App\\Controller\\Salarie\\GestionSalarieController::getmatricule'], null, null, null, false, false, null]],
        '/salarie/salarie/updatecotis' => [[['_route' => 'app_salarie_updatecotis', '_controller' => 'App\\Controller\\Salarie\\GestionSalarieController::updatecotis'], null, null, null, false, false, null]],
        '/salarie/salarienoactiver' => [[['_route' => 'app_salarie_salarienoactiver', '_controller' => 'App\\Controller\\Salarie\\SalarienoactiverController::index'], null, null, null, true, false, null]],
        '/salarie/salarienoactiver/app_salarienoactive_list' => [[['_route' => 'app_salarienoactive_list', '_controller' => 'App\\Controller\\Salarie\\SalarienoactiverController::app_salarie_salarie_list'], null, null, null, false, false, null]],
        '/register' => [[['_route' => 'app_register', '_controller' => 'App\\Controller\\Security\\RegistrationController::register'], null, null, null, false, false, null]],
        '/new' => [[['_route' => 'app_register_new', '_controller' => 'App\\Controller\\Security\\RegistrationController::new'], null, null, null, false, false, null]],
        '/login' => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\Security\\SecurityController::login'], null, null, null, false, false, null]],
        '/app_changement_password' => [[['_route' => 'app_changement_password', '_controller' => 'App\\Controller\\Security\\SecurityController::app_changement_password'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'app_logout', '_controller' => 'App\\Controller\\Security\\SecurityController::logout'], null, null, null, false, false, null]],
        '/tresorerie/bordereau' => [[['_route' => 'app_tresorerie_bordereau', '_controller' => 'App\\Controller\\Tresorerie\\BordereauController::index'], null, null, null, true, false, null]],
        '/tresorerie/bordereau/app_tresorerie_bordereau_list' => [[['_route' => 'app_tresorerie_bordereau_list', '_controller' => 'App\\Controller\\Tresorerie\\BordereauController::app_tresorerie_bordereau_list'], null, null, null, false, false, null]],
        '/tresorerie/bordereau/app_tresorerie_bordereau_valider' => [[['_route' => 'app_tresorerie_bordereau_valider', '_controller' => 'App\\Controller\\Tresorerie\\BordereauController::app_tresorerie_bordereau_valider'], null, null, null, false, false, null]],
        '/tresorerie/bordereau/app_tresorerie_bordereau_devalider' => [[['_route' => 'app_tresorerie_bordereau_devalider', '_controller' => 'App\\Controller\\Tresorerie\\BordereauController::app_tresorerie_bordereau_devalider'], null, null, null, false, false, null]],
        '/tresorerie/bordereau/app_tresorerie_bordereau_integre' => [[['_route' => 'app_tresorerie_bordereau_integre', '_controller' => 'App\\Controller\\Tresorerie\\BordereauController::app_tresorerie_bordereau_integre'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/api/api_get(?'
                    .'|naturesalarietype/([^/]++)(*:210)'
                    .'|bareme(?'
                        .'|/([^/]++)/([^/]++)(*:245)'
                        .'|_contract/([^/]++)/([^/]++)(*:280)'
                    .')'
                    .'|dureecontrat/([^/]++)(*:310)'
                .')'
                .'|/mouvement/(?'
                    .'|arret/parret_aff_details/([^/]++)(*:366)'
                    .'|echeance/app_mouvement_echeance_get_base/([^/]++)(*:423)'
                    .'|fixe/app_mouvement_fixe_statut/([^/]++)/([^/]++)(*:479)'
                    .'|prets/app_mouvement_prets_detail/([^/]++)(*:528)'
                .')'
                .'|/pa(?'
                    .'|ie/(?'
                        .'|bulletin/(?'
                            .'|app_bulletin_employe_(?'
                                .'|list/([^/]++)(*:598)'
                                .'|problemes/([^/]++)(*:624)'
                                .'|bulletin_details/([^/]++)(*:657)'
                            .')'
                            .'|print/([^/]++)(*:680)'
                        .')'
                        .'|honoraire/app_paie_honoraire_import/([^/]++)/([^/]++)/([^/]++)(*:751)'
                    .')'
                    .'|rametre/user/(?'
                        .'|app_parametre_user_(?'
                            .'|operation/([^/]++)/([^/]++)/([^/]++)/([^/]++)(*:843)'
                            .'|sousmodule/([^/]++)/([^/]++)/([^/]++)/([^/]++)(*:897)'
                            .'|module/([^/]++)/([^/]++)/([^/]++)/([^/]++)(*:947)'
                            .'|all/([^/]++)/([^/]++)/([^/]++)(*:985)'
                        .')'
                        .'|getoperations/([^/]++)/([^/]++)(*:1025)'
                    .')'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        210 => [[['_route' => 'api_getnaturesalarietype', '_controller' => 'App\\Controller\\ApiController::api_getnaturesalarietype'], ['natureCab'], null, null, false, true, null]],
        245 => [[['_route' => 'api_getbareme', '_controller' => 'App\\Controller\\ApiController::api_getbaremeprofile'], ['niveau', 'natureCab'], null, null, false, true, null]],
        280 => [[['_route' => 'api_getbareme_contract', '_controller' => 'App\\Controller\\ApiController::api_getbareme_contract'], ['natureContrat', 'profil'], null, null, false, true, null]],
        310 => [[['_route' => 'api_getdureecontrat', '_controller' => 'App\\Controller\\ApiController::api_getdureecontrat'], ['natureContrat'], null, null, false, true, null]],
        366 => [[['_route' => 'app_parret_aff_details', '_controller' => 'App\\Controller\\Mouvement\\ArretController::app_parret_aff_details'], ['code'], null, null, false, true, null]],
        423 => [[['_route' => 'app_mouvement_echeance_get_base', '_controller' => 'App\\Controller\\Mouvement\\EcheanceController::app_mouvement_echeance_get_base'], ['bareme'], null, null, false, true, null]],
        479 => [[['_route' => 'app_mouvement_fixe_statut', '_controller' => 'App\\Controller\\Mouvement\\ElementfixeController::app_mouvement_fixe_statut'], ['element', 'statut'], null, null, false, true, null]],
        528 => [[['_route' => 'app_mouvement_prets_detail', '_controller' => 'App\\Controller\\Mouvement\\PretsController::app_mouvement_prets_detail'], ['prelevement'], null, null, false, true, null]],
        598 => [[['_route' => 'app_bulletin_employe_list', '_controller' => 'App\\Controller\\Paie\\BulletinController::app_bulletin_employe_list'], ['periode'], null, null, false, true, null]],
        624 => [[['_route' => 'app_bulletin_employe_problemes', '_controller' => 'App\\Controller\\Paie\\BulletinController::app_bulletin_employe_problemes'], ['contract'], null, null, false, true, null]],
        657 => [[['_route' => 'app_bulletin_employe_bulletin_details', '_controller' => 'App\\Controller\\Paie\\BulletinController::app_bulletin_employe_bulletin_details'], ['code'], null, null, false, true, null]],
        680 => [[['_route' => 'app_bulletin_employe_bulletin_print', '_controller' => 'App\\Controller\\Paie\\BulletinController::app_bulletin_employe_bulletin_print'], ['bulletin'], null, null, false, true, null]],
        751 => [[['_route' => 'app_paie_honoraire_import', '_controller' => 'App\\Controller\\Paie\\HonoraireController::app_paie_honoraire_import'], ['paiement', 'nature', 'dossier'], null, null, false, true, null]],
        843 => [[['_route' => 'app_parametre_user_operation', '_controller' => 'App\\Controller\\Parametre\\UserController::app_parametre_user_operation'], ['operation', 'userId', 'dossierId', 'type'], null, null, false, true, null]],
        897 => [[['_route' => 'app_parametre_user_sousmodule', '_controller' => 'App\\Controller\\Parametre\\UserController::app_parametre_user_sousmodule'], ['sous_module', 'userId', 'dossierId', 'type'], null, null, false, true, null]],
        947 => [[['_route' => 'app_parametre_user_module', '_controller' => 'App\\Controller\\Parametre\\UserController::app_parametre_user_module'], ['module', 'userId', 'dossierId', 'type'], null, null, false, true, null]],
        985 => [[['_route' => 'app_parametre_user_all', '_controller' => 'App\\Controller\\Parametre\\UserController::app_parametre_user_all'], ['userId', 'dossierId', 'type'], null, null, false, true, null]],
        1025 => [
            [['_route' => 'app_parametre_user_operations', '_controller' => 'App\\Controller\\Parametre\\UserController::operations'], ['user', 'dossier'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
