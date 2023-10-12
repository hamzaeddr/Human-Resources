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

/* mouvement/elementfixe/modals/ajouter.html.twig */
class __TwigTemplate_bd3b4ae5a7bccb726298519a1214a9d6 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "mouvement/elementfixe/modals/ajouter.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "mouvement/elementfixe/modals/ajouter.html.twig"));

        // line 1
        echo "
<div class=\"modal right come-from-modal fade\"  id=\"ajouter_modal\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:50%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Ajouter élement fixe</h2>
                <a type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" data-dismiss=\"modal\" aria-label=\"Close\"></a>
            </div>
            <div class=\"modal-body overflow-auto\">
                <form id=\"add_fixe\">
                    <div class=\"row mt-2\">
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Employe:</label>
                            <select class=\" text-uppercase form-control employe_select select\" name=\"contract\">
                                <option value=\"\">Choix employe</option>
                                ";
        // line 16
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["contracts"]) || array_key_exists("contracts", $context) ? $context["contracts"] : (function () { throw new RuntimeError('Variable "contracts" does not exist.', 16, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["contract"]) {
            // line 17
            echo "                                    <option data-json='{\"nom\": \"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["contract"], "employe", [], "any", false, false, false, 17), "nom", [], "any", false, false, false, 17), "html", null, true);
            echo "\", \"prenom\": \"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["contract"], "employe", [], "any", false, false, false, 17), "prenom", [], "any", false, false, false, 17), "html", null, true);
            echo "\",\"contract_id\": \"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "id", [], "any", false, false, false, 17), "html", null, true);
            echo "\", \"bareme_id\": \"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["contract"], "bareme", [], "any", false, false, false, 17), "id", [], "any", false, false, false, 17), "html", null, true);
            echo "\", \"matricule\": \"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["contract"], "employe", [], "any", false, false, false, 17), "code", [], "any", false, false, false, 17), "html", null, true);
            echo "\", \"nature\": \"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["contract"], "bareme", [], "any", false, false, false, 17), "designation", [], "any", false, false, false, 17), "html", null, true);
            echo "\", \"bareme\": \"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["contract"], "bareme", [], "any", false, false, false, 17), "bareme", [], "any", false, false, false, 17), "html", null, true);
            echo "\", \"cin\": \"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["contract"], "employe", [], "any", false, false, false, 17), "cin", [], "any", false, false, false, 17), "html", null, true);
            echo "\", \"date_anciennete\": \"";
            echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "dateAnciennete", [], "any", false, false, false, 17), "d/m/Y"), "html", null, true);
            echo "\", \"contract\": \"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "code", [], "any", false, false, false, 17), "html", null, true);
            echo "\"}' data-name=\"";
            echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["contract"], "employe", [], "any", false, false, false, 17), "nom", [], "any", false, false, false, 17)), "html", null, true);
            echo " ";
            echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["contract"], "employe", [], "any", false, false, false, 17), "prenom", [], "any", false, false, false, 17)), "html", null, true);
            echo "\"  value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "id", [], "any", false, false, false, 17), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["contract"], "employe", [], "any", false, false, false, 17), "nom", [], "any", false, false, false, 17)), "html", null, true);
            echo " ";
            echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["contract"], "employe", [], "any", false, false, false, 17), "prenom", [], "any", false, false, false, 17)), "html", null, true);
            echo "</option>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['contract'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 19
        echo "                            </select>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Matricule:</label>
                            <input type=\"text\" class=\"form-control\" id=\"matricule\" name=\"matricule\" readonly/>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Contrat:</label>
                            <input type=\"text\" class=\"form-control\" id=\"contract\" name=\"contract\" readonly/>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Nature:</label>
                            <input type=\"text\" class=\"form-control\" id=\"nature\" name=\"nature\"readonly />
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Cin:</label>
                            <input type=\"text\" class=\"form-control\" id=\"cin\" name=\"cin\" readonly/>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Entrée le:</label>
                            <input type=\"text\" class=\"form-control\" id=\"entrele\" name=\"entrele\" readonly/>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Profile:</label>
                            <input type=\"text\" class=\"form-control\" id=\"profile\" name=\"profile\" readonly/>
                        </div>
                        
                    </div>
                    <hr>
                    <div class=\"row mt-2 align-items-end \">
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Elément:</label>
                            <select class=\"text-uppercase form-control select element_select\" name=\"element\">
                                <option value=\"\">Choix element</option>
                                ";
        // line 53
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["elements"]) || array_key_exists("elements", $context) ? $context["elements"] : (function () { throw new RuntimeError('Variable "elements" does not exist.', 53, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["element"]) {
            // line 54
            echo "                                    <option data-json='{\"absence\": \"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["element"], "absence", [], "any", false, false, false, 54), "html", null, true);
            echo "\", \"sens\": \"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["element"], "sens", [], "any", false, false, false, 54), "html", null, true);
            echo "\", \"designation\": \"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["element"], "designation", [], "any", false, false, false, 54), "html", null, true);
            echo "\", \"id\": \"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["element"], "id", [], "any", false, false, false, 54), "html", null, true);
            echo "\"}' value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["element"], "id", [], "any", false, false, false, 54), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, $context["element"], "designation", [], "any", false, false, false, 54)), "html", null, true);
            echo "</option>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['element'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 56
        echo "                            </select>
                        </div>
                       
                       <div class=\"col-md-2 input_base\" style=\"display:none\">
                            <label required class=\"text-size-12\">Nombre jours:</label>
                            <input type=\"number\" class=\"form-control\" id=\"nombrejours\" name=\"nombrejours\" />
                        </div>
                        <div class=\"col-md-2 input_base\" style=\"display:none\">
                            <label required class=\"text-size-12\">Base:</label>
                            <input type=\"number\" class=\"form-control\" id=\"base\" name=\"base\" readonly/>

                        </div>
                        
                        <div class=\"col-md-1\">
                            <label required class=\"text-size-12\">Sens:</label>
                            <input type=\"text\" name=\"sens\" class=\"form-control\" id=\"sens\" readonly />
                        </div>
                         <div class=\"col-md-2 input_montant\">
                            <label required class=\"text-size-12\">Montant:</label>
                            <input type=\"number\" class=\"form-control\" id=\"montant\" name=\"montant\" />
                        </div>
                        <div class=\"col-md-1\">
                            <button class=\"btn btn-success add_employe\"><i class=\"fa fa-plus text-white\"></i></button>
                        </div>

                      
                    </div>
                   
                </form>
                <hr>               
                <table class=\" table table-bordered  table-striped\" id=\"list_prets\" style=\"width: 100%\">
                    <thead>
                        <tr>
                            <th>Employe</th>
                            <th>Matricule</th>
                            <th>Contract</th>
                            <th>Element</th>
                            <th>Montant</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class=\"list_prets_data\">
                    </tbody>
                </table>
            </div>
            <div class=\"modal-footer justify-content-start\" >
                <button type=\"submit\" class=\"btn btn-secondary\" form=\"add_echeance\">Enregistre</button>
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
        return "mouvement/elementfixe/modals/ajouter.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  160 => 56,  141 => 54,  137 => 53,  101 => 19,  64 => 17,  60 => 16,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("
<div class=\"modal right come-from-modal fade\"  id=\"ajouter_modal\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:50%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Ajouter élement fixe</h2>
                <a type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" data-dismiss=\"modal\" aria-label=\"Close\"></a>
            </div>
            <div class=\"modal-body overflow-auto\">
                <form id=\"add_fixe\">
                    <div class=\"row mt-2\">
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Employe:</label>
                            <select class=\" text-uppercase form-control employe_select select\" name=\"contract\">
                                <option value=\"\">Choix employe</option>
                                {% for contract in contracts %}
                                    <option data-json='{\"nom\": \"{{contract.employe.nom}}\", \"prenom\": \"{{contract.employe.prenom}}\",\"contract_id\": \"{{contract.id}}\", \"bareme_id\": \"{{contract.bareme.id}}\", \"matricule\": \"{{contract.employe.code}}\", \"nature\": \"{{contract.bareme.designation}}\", \"bareme\": \"{{contract.bareme.bareme}}\", \"cin\": \"{{contract.employe.cin}}\", \"date_anciennete\": \"{{contract.dateAnciennete|date('d/m/Y')}}\", \"contract\": \"{{contract.code}}\"}' data-name=\"{{contract.employe.nom|capitalize}} {{contract.employe.prenom|capitalize}}\"  value=\"{{contract.id}}\">{{contract.employe.nom|capitalize}} {{contract.employe.prenom|capitalize}}</option>
                                {% endfor %}
                            </select>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Matricule:</label>
                            <input type=\"text\" class=\"form-control\" id=\"matricule\" name=\"matricule\" readonly/>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Contrat:</label>
                            <input type=\"text\" class=\"form-control\" id=\"contract\" name=\"contract\" readonly/>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Nature:</label>
                            <input type=\"text\" class=\"form-control\" id=\"nature\" name=\"nature\"readonly />
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Cin:</label>
                            <input type=\"text\" class=\"form-control\" id=\"cin\" name=\"cin\" readonly/>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Entrée le:</label>
                            <input type=\"text\" class=\"form-control\" id=\"entrele\" name=\"entrele\" readonly/>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Profile:</label>
                            <input type=\"text\" class=\"form-control\" id=\"profile\" name=\"profile\" readonly/>
                        </div>
                        
                    </div>
                    <hr>
                    <div class=\"row mt-2 align-items-end \">
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Elément:</label>
                            <select class=\"text-uppercase form-control select element_select\" name=\"element\">
                                <option value=\"\">Choix element</option>
                                {% for element in elements %}
                                    <option data-json='{\"absence\": \"{{element.absence}}\", \"sens\": \"{{element.sens}}\", \"designation\": \"{{element.designation}}\", \"id\": \"{{element.id}}\"}' value=\"{{element.id}}\">{{element.designation|upper}}</option>
                                {% endfor %}
                            </select>
                        </div>
                       
                       <div class=\"col-md-2 input_base\" style=\"display:none\">
                            <label required class=\"text-size-12\">Nombre jours:</label>
                            <input type=\"number\" class=\"form-control\" id=\"nombrejours\" name=\"nombrejours\" />
                        </div>
                        <div class=\"col-md-2 input_base\" style=\"display:none\">
                            <label required class=\"text-size-12\">Base:</label>
                            <input type=\"number\" class=\"form-control\" id=\"base\" name=\"base\" readonly/>

                        </div>
                        
                        <div class=\"col-md-1\">
                            <label required class=\"text-size-12\">Sens:</label>
                            <input type=\"text\" name=\"sens\" class=\"form-control\" id=\"sens\" readonly />
                        </div>
                         <div class=\"col-md-2 input_montant\">
                            <label required class=\"text-size-12\">Montant:</label>
                            <input type=\"number\" class=\"form-control\" id=\"montant\" name=\"montant\" />
                        </div>
                        <div class=\"col-md-1\">
                            <button class=\"btn btn-success add_employe\"><i class=\"fa fa-plus text-white\"></i></button>
                        </div>

                      
                    </div>
                   
                </form>
                <hr>               
                <table class=\" table table-bordered  table-striped\" id=\"list_prets\" style=\"width: 100%\">
                    <thead>
                        <tr>
                            <th>Employe</th>
                            <th>Matricule</th>
                            <th>Contract</th>
                            <th>Element</th>
                            <th>Montant</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class=\"list_prets_data\">
                    </tbody>
                </table>
            </div>
            <div class=\"modal-footer justify-content-start\" >
                <button type=\"submit\" class=\"btn btn-secondary\" form=\"add_echeance\">Enregistre</button>
                <a type=\"button\" class=\"btn btn-link\" data-bs-dismiss=\"modal\"  data-dismiss=\"modal\">Fermer</a>
            </div>
        </div>
    </div>
</div>", "mouvement/elementfixe/modals/ajouter.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\mouvement\\elementfixe\\modals\\ajouter.html.twig");
    }
}
