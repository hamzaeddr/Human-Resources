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

/* mouvement/prets/modals/ajouter.html.twig */
class __TwigTemplate_112712a927e129bb93afc7b2b92ee8ba extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "mouvement/prets/modals/ajouter.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "mouvement/prets/modals/ajouter.html.twig"));

        // line 1
        echo "
<div class=\"modal right come-from-modal fade\"  id=\"ajouter_modal\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:50%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Ajouter prêt</h2>
                <a type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" data-dismiss=\"modal\" aria-label=\"Close\"></a>
            </div>
            <div class=\"modal-body overflow-auto\">
                <form id=\"add_pret\">
                    <div class=\"row mt-2\">
                        
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Elément:</label>
                            <select class=\"text-uppercase form-control select\" required name=\"element\">
                                <option value=\"\">Choix element</option>
                                ";
        // line 17
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["elements"]) || array_key_exists("elements", $context) ? $context["elements"] : (function () { throw new RuntimeError('Variable "elements" does not exist.', 17, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["element"]) {
            // line 18
            echo "                                    <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["element"], "id", [], "any", false, false, false, 18), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, $context["element"], "designation", [], "any", false, false, false, 18)), "html", null, true);
            echo "</option>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['element'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 20
        echo "                            </select>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Employe:</label>
                            <select class=\" text-uppercase form-control employe_select select\" name=\"contract\">
                                <option value=\"\">Choix employe</option>
                                ";
        // line 26
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["contracts"]) || array_key_exists("contracts", $context) ? $context["contracts"] : (function () { throw new RuntimeError('Variable "contracts" does not exist.', 26, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["contract"]) {
            // line 27
            echo "                                    <option data-rib=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "rib", [], "any", false, false, false, 27), "html", null, true);
            echo "\" data-name=\"";
            echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "nom", [], "any", false, false, false, 27)), "html", null, true);
            echo " ";
            echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "prenom", [], "any", false, false, false, 27)), "html", null, true);
            echo "\"  value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "id", [], "any", false, false, false, 27), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "nom", [], "any", false, false, false, 27)), "html", null, true);
            echo " ";
            echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "prenom", [], "any", false, false, false, 27)), "html", null, true);
            echo "</option>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['contract'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 29
        echo "                            </select>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Motif:</label>
                            <input type=\"text\" class=\"form-control\" id=\"motif\" name=\"motif\" />
                        </div>
                        
                    </div>
                    <div class=\"row mt-2\">
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Début prêt:</label>
                            <input type=\"month\" name=\"periode\" class=\"periode form-control\" id=\"periode\" value=\"";
        // line 40
        echo twig_escape_filter($this->env, twig_date_format_filter($this->env, "now", "Y-m"), "html", null, true);
        echo "\" min=\"";
        echo twig_escape_filter($this->env, twig_date_format_filter($this->env, "now", "Y-m"), "html", null, true);
        echo "\"/>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Montant prêt:</label>
                            <input type=\"number\" class=\"form-control\" id=\"montantpret\" name=\"montantpret\" />
                           
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Montant echeance:</label>
                            <input type=\"number\" class=\"form-control\" id=\"montantecheance\" name=\"montantecheance\" />

                        </div>
                        
                        
                    </div>
                    <div class=\"row mt-2\">
                        
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Nombre de mois:</label>
                            <input type=\"number\" class=\"form-control\" id=\"nombremois\" readonly/>
                        </div>
                        ";
        // line 67
        echo "                        
                    </div>
                </form>
                <hr>               
                <table class=\" table table-bordered  table-striped\" id=\"list_prets\" style=\"width: 100%\">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Periode</th>
                            <th>Montant</th>
                        </tr>
                    </thead>
                    <tbody class=\"list_prets_data\">
                    </tbody>
                </table>
            </div>
            <div class=\"modal-footer justify-content-start\" >
                <button type=\"submit\" class=\"btn btn-secondary\" form=\"add_pret\">Enregistre</button>
                <a type=\"button\" class=\"btn btn-link\" data-bs-dismiss=\"modal\"  data-dismiss=\"modal\">Fermer</a>
            </div>
        </div>
    </div>
</div>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "mouvement/prets/modals/ajouter.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  146 => 67,  120 => 40,  107 => 29,  88 => 27,  84 => 26,  76 => 20,  65 => 18,  61 => 17,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("
<div class=\"modal right come-from-modal fade\"  id=\"ajouter_modal\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:50%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Ajouter prêt</h2>
                <a type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" data-dismiss=\"modal\" aria-label=\"Close\"></a>
            </div>
            <div class=\"modal-body overflow-auto\">
                <form id=\"add_pret\">
                    <div class=\"row mt-2\">
                        
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Elément:</label>
                            <select class=\"text-uppercase form-control select\" required name=\"element\">
                                <option value=\"\">Choix element</option>
                                {% for element in elements %}
                                    <option value=\"{{element.id}}\">{{element.designation|upper}}</option>
                                {% endfor %}
                            </select>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Employe:</label>
                            <select class=\" text-uppercase form-control employe_select select\" name=\"contract\">
                                <option value=\"\">Choix employe</option>
                                {% for contract in contracts %}
                                    <option data-rib=\"{{contract.rib}}\" data-name=\"{{contract.nom|capitalize}} {{contract.prenom|capitalize}}\"  value=\"{{contract.id}}\">{{contract.nom|capitalize}} {{contract.prenom|capitalize}}</option>
                                {% endfor %}
                            </select>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Motif:</label>
                            <input type=\"text\" class=\"form-control\" id=\"motif\" name=\"motif\" />
                        </div>
                        
                    </div>
                    <div class=\"row mt-2\">
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Début prêt:</label>
                            <input type=\"month\" name=\"periode\" class=\"periode form-control\" id=\"periode\" value=\"{{'now'|date('Y-m')}}\" min=\"{{\"now\"|date('Y-m')}}\"/>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Montant prêt:</label>
                            <input type=\"number\" class=\"form-control\" id=\"montantpret\" name=\"montantpret\" />
                           
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Montant echeance:</label>
                            <input type=\"number\" class=\"form-control\" id=\"montantecheance\" name=\"montantecheance\" />

                        </div>
                        
                        
                    </div>
                    <div class=\"row mt-2\">
                        
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Nombre de mois:</label>
                            <input type=\"number\" class=\"form-control\" id=\"nombremois\" readonly/>
                        </div>
                        {# <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Dernier echeance:</label>
                            <input type=\"number\" class=\"form-control\" id=\"dernierecheance\" readonly/>
                   
                        </div>
                         #}
                        
                    </div>
                </form>
                <hr>               
                <table class=\" table table-bordered  table-striped\" id=\"list_prets\" style=\"width: 100%\">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Periode</th>
                            <th>Montant</th>
                        </tr>
                    </thead>
                    <tbody class=\"list_prets_data\">
                    </tbody>
                </table>
            </div>
            <div class=\"modal-footer justify-content-start\" >
                <button type=\"submit\" class=\"btn btn-secondary\" form=\"add_pret\">Enregistre</button>
                <a type=\"button\" class=\"btn btn-link\" data-bs-dismiss=\"modal\"  data-dismiss=\"modal\">Fermer</a>
            </div>
        </div>
    </div>
</div>", "mouvement/prets/modals/ajouter.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\mouvement\\prets\\modals\\ajouter.html.twig");
    }
}
