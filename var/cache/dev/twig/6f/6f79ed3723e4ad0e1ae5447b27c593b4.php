<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* salarie/gestion_salarie/modals/modifier.html.twig */
class __TwigTemplate_28b14b57148f84ef4f5df1750dd48096 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/modals/modifier.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/modals/modifier.html.twig"));

        // line 1
        echo "<style>
        


 .btnclose{
    background-color: #f7f4f4;
 }

</style>

<div class=\"modal right come-from-modal fade\" id=\"modal_modifier\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"max-width:900px !important\" role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Modifier salarie</h2>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
            </div>
            <div class=\"modal-body\">
                <div class=\"card\">
                    <div class=\"card-header\">
                        <ul class=\"nav nav-pills\">                
                            <li class=\"nav-item mr-2\">
                                <a href=\"#etat_civil\" id=\"etatcivil_update\" class=\"nav-link noclick\">Etat Civil</a>
                            </li>
                            <li class=\"nav-item\">
                                <a href=\"#contrat\" id=\"contract_update\" class=\"nav-link active\" >Contrat</a>
                            </li>                
                            <li class=\"nav-item\">
                                <a href=\"#cnss_rib\" id=\"cnss_rib_update\" class=\"nav-link noclick\">Cnss Rib</a>
                            </li>                
                            <li class=\"nav-item\">
                                <a href=\"#plus_info\" id=\"plus_info_update\" class=\"nav-link noclick\">Plus Info</a>
                            </li>                
                        </ul>
                    </div>
                    <div class=\"card-body\">
                    <div class=\"tab-content\">
                            ";
        // line 39
        echo "                                <div class=\"tab-pane fade\" id=\"etat_civil_update\">
                                      <form  id=\"new_salarie\">

                                             ";
        // line 42
        $this->loadTemplate("salarie/gestion_salarie/pages/etat_civil.html.twig", "salarie/gestion_salarie/modals/modifier.html.twig", 42)->display($context);
        echo "     
                                      </form>

                                </div>

                                <div class=\"tab-pane fade show active\" id=\"contrat_update\">
                                    <form  id=\"new_contract\">

                                     ";
        // line 50
        $this->loadTemplate("salarie/gestion_salarie/pages/contrat.html.twig", "salarie/gestion_salarie/modals/modifier.html.twig", 50)->display($context);
        echo "     


                                    </form>                       
                                </div>

                                <div class=\"tab-pane fade\" id=\"cnss_rib_update\">
                                    <form  id=\"new_cnss\">
                                   
                                        ";
        // line 59
        $this->loadTemplate("salarie/gestion_salarie/pages/cnss_rib.html.twig", "salarie/gestion_salarie/modals/modifier.html.twig", 59)->display($context);
        // line 60
        echo "
                                    </form>                                
                                </div>


                                <div class=\"tab-pane fade\" id=\"plus_info_update\">

                                    <form  id=\"new_plus\">

                                    ";
        // line 69
        $this->loadTemplate("salarie/gestion_salarie/pages/plus_info.html.twig", "salarie/gestion_salarie/modals/modifier.html.twig", 69)->display($context);
        echo "    

                                    </form>

                                </div>
                            ";
        // line 75
        echo "                    </div>
                    </div>
                </div>
            </div>
            <div class=\"modal-footer\">
                <button type=\"submit\" class=\"btn btn-secondary\">Enregistre</button>
                <button type=\"button\" class=\"btn btn-link text-gray-600 me-auto btnclose\" st data-bs-dismiss=\"modal\">Fermer</button>
            </div>
        </div>
    </div>
</div>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "salarie/gestion_salarie/modals/modifier.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  131 => 75,  123 => 69,  112 => 60,  110 => 59,  98 => 50,  87 => 42,  82 => 39,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<style>
        


 .btnclose{
    background-color: #f7f4f4;
 }

</style>

<div class=\"modal right come-from-modal fade\" id=\"modal_modifier\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"max-width:900px !important\" role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Modifier salarie</h2>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
            </div>
            <div class=\"modal-body\">
                <div class=\"card\">
                    <div class=\"card-header\">
                        <ul class=\"nav nav-pills\">                
                            <li class=\"nav-item mr-2\">
                                <a href=\"#etat_civil\" id=\"etatcivil_update\" class=\"nav-link noclick\">Etat Civil</a>
                            </li>
                            <li class=\"nav-item\">
                                <a href=\"#contrat\" id=\"contract_update\" class=\"nav-link active\" >Contrat</a>
                            </li>                
                            <li class=\"nav-item\">
                                <a href=\"#cnss_rib\" id=\"cnss_rib_update\" class=\"nav-link noclick\">Cnss Rib</a>
                            </li>                
                            <li class=\"nav-item\">
                                <a href=\"#plus_info\" id=\"plus_info_update\" class=\"nav-link noclick\">Plus Info</a>
                            </li>                
                        </ul>
                    </div>
                    <div class=\"card-body\">
                    <div class=\"tab-content\">
                            {# <form> #}
                                <div class=\"tab-pane fade\" id=\"etat_civil_update\">
                                      <form  id=\"new_salarie\">

                                             {% include 'salarie/gestion_salarie/pages/etat_civil.html.twig' %}     
                                      </form>

                                </div>

                                <div class=\"tab-pane fade show active\" id=\"contrat_update\">
                                    <form  id=\"new_contract\">

                                     {% include 'salarie/gestion_salarie/pages/contrat.html.twig' %}     


                                    </form>                       
                                </div>

                                <div class=\"tab-pane fade\" id=\"cnss_rib_update\">
                                    <form  id=\"new_cnss\">
                                   
                                        {% include 'salarie/gestion_salarie/pages/cnss_rib.html.twig' %}

                                    </form>                                
                                </div>


                                <div class=\"tab-pane fade\" id=\"plus_info_update\">

                                    <form  id=\"new_plus\">

                                    {% include 'salarie/gestion_salarie/pages/plus_info.html.twig' %}    

                                    </form>

                                </div>
                            {# </form> #}
                    </div>
                    </div>
                </div>
            </div>
            <div class=\"modal-footer\">
                <button type=\"submit\" class=\"btn btn-secondary\">Enregistre</button>
                <button type=\"button\" class=\"btn btn-link text-gray-600 me-auto btnclose\" st data-bs-dismiss=\"modal\">Fermer</button>
            </div>
        </div>
    </div>
</div>", "salarie/gestion_salarie/modals/modifier.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\salarie\\gestion_salarie\\modals\\modifier.html.twig");
    }
}
