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

/* paie/indeminite/modals/upload.html.twig */
class __TwigTemplate_ddcbc8db70e1f6b34b5564387ca4cd40 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "paie/indeminite/modals/upload.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "paie/indeminite/modals/upload.html.twig"));

        // line 1
        echo "
<div class=\"modal right come-from-modal fade\"  id=\"upload_modal\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:50%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Import des indeminites</h2>
                <a type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" data-dismiss=\"modal\" aria-label=\"Close\"></a>
            </div>
            <div class=\"modal-body\">
                <form id=\"add_indeminite\">
                    <div class=\"row\">
                        <div class=\"col-md-8\">
                            <label class=\"text-size-12\">Observation:</label>
                            <input type=\"text\" class=\"form-control\" name=\"observation\" />
                        </div>
                    </div>
                    <div class=\"row mt-2\">
                        
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Elément:</label>
                            <select class=\"text-uppercase form-control select\" required name=\"element\">
                                <option value=\"\">Choix element</option>
                                ";
        // line 23
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["elements"]) || array_key_exists("elements", $context) ? $context["elements"] : (function () { throw new RuntimeError('Variable "elements" does not exist.', 23, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["element"]) {
            // line 24
            echo "                                    <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["element"], "id", [], "any", false, false, false, 24), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, $context["element"], "designation", [], "any", false, false, false, 24)), "html", null, true);
            echo "</option>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['element'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 26
        echo "                            </select>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Paiement:</label>
                            <select class=\"text-uppercase form-control select paiement_select\" required name=\"paiement\">
                                <option value=\"\">Choix paiement</option>
                                ";
        // line 32
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["paiements"]) || array_key_exists("paiements", $context) ? $context["paiements"] : (function () { throw new RuntimeError('Variable "paiements" does not exist.', 32, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["paiement"]) {
            // line 33
            echo "
                                    <option value=\"";
            // line 34
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["paiement"], "id", [], "any", false, false, false, 34), "html", null, true);
            echo "\" >";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, $context["paiement"], "designation", [], "any", false, false, false, 34)), "html", null, true);
            echo "</option>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['paiement'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 36
        echo "                            </select>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Devise:</label>
                            <select class=\" text-uppercase form-control select\" required name=\"devise\">
                                <option value=\"\">Choix devise</option>
                                ";
        // line 42
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["devises"]) || array_key_exists("devises", $context) ? $context["devises"] : (function () { throw new RuntimeError('Variable "devises" does not exist.', 42, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["devise"]) {
            // line 43
            echo "                                    <option  value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["devise"], "id", [], "any", false, false, false, 43), "html", null, true);
            echo "\"";
            if ((twig_get_attribute($this->env, $this->source, $context["devise"], "designation", [], "any", false, false, false, 43) == "mad")) {
                echo " selected ";
            }
            echo ">";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, $context["devise"], "designation", [], "any", false, false, false, 43)), "html", null, true);
            echo "</option>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['devise'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 45
        echo "                            </select>
                        </div>
                    </div>
                </form>
                <hr>
                <div class=\"row mb-4 align-items-end justify-content-center\">
                    <div class=\"col-md-10\">
                        <div class=\"row align-items-end\">
                            <div class=\"col-md-4\">
                                <label required class=\"text-size-12\">Employe:</label>
                                <select class=\" text-uppercase form-control employe_select select\" name=\"devise\">
                                    <option value=\"\">Choix employe</option>
                                    ";
        // line 57
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["contracts"]) || array_key_exists("contracts", $context) ? $context["contracts"] : (function () { throw new RuntimeError('Variable "contracts" does not exist.', 57, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["contract"]) {
            // line 58
            echo "                                        <option data-rib=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "rib", [], "any", false, false, false, 58), "html", null, true);
            echo "\" data-name=\"";
            echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "nom", [], "any", false, false, false, 58)), "html", null, true);
            echo " ";
            echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "prenom", [], "any", false, false, false, 58)), "html", null, true);
            echo "\"  value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "id", [], "any", false, false, false, 58), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "nom", [], "any", false, false, false, 58)), "html", null, true);
            echo " ";
            echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "prenom", [], "any", false, false, false, 58)), "html", null, true);
            echo "</option>
                                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['contract'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 60
        echo "                                </select>
                            </div>
                            <div class=\"col-md-3\">
                                <label class=\"text-size-12\">Montant:</label>
                                <input type=\"number\"  class=\"form-control montant\" name=\"montant\" />
                            </div>
                            <div class=\"col-md-3\">
                                <label class=\"text-size-12\">Montant Mad:</label>
                                <input type=\"number\"  class=\"form-control montant_mad\" name=\"montant_mad\" />
                            </div>
                            <div class=\"col-md-1\">
                                <button class=\"btn btn-success add_employe\"><i class=\"fa fa-plus text-white\"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class=\"col-md-2 text-end\">
                        <button class=\"btn btn-primary\"><i class=\"fa fa-download\"></i></button>
                        <input type=\"file\" id=\"upload_file_indeminite\" style=\"display:none\"/>
                        <button class=\"btn btn-success upload_file_button\"><i class=\"fa fa-upload text-white\"></i></button>
                    
                    </div>
                </div>
                
              
                <table class=\" table table-bordered  table-striped\" id=\"list_indeminites\" style=\"width: 100%\">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Employe</th>
                            <th>Montant</th>
                            <th>Montant MAD</th>
                            <th width=\"20%\">RIB</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class=\"list_indeminites_data\">
                    </tbody>
                </table>
            </div>
            <div class=\"modal-footer justify-content-start\" >
                <button type=\"submit\" class=\"btn btn-secondary\" form=\"add_indeminite\">Enregistre</button>
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
        return "paie/indeminite/modals/upload.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  171 => 60,  152 => 58,  148 => 57,  134 => 45,  119 => 43,  115 => 42,  107 => 36,  97 => 34,  94 => 33,  90 => 32,  82 => 26,  71 => 24,  67 => 23,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("
<div class=\"modal right come-from-modal fade\"  id=\"upload_modal\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:50%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Import des indeminites</h2>
                <a type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" data-dismiss=\"modal\" aria-label=\"Close\"></a>
            </div>
            <div class=\"modal-body\">
                <form id=\"add_indeminite\">
                    <div class=\"row\">
                        <div class=\"col-md-8\">
                            <label class=\"text-size-12\">Observation:</label>
                            <input type=\"text\" class=\"form-control\" name=\"observation\" />
                        </div>
                    </div>
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
                            <label required class=\"text-size-12\">Paiement:</label>
                            <select class=\"text-uppercase form-control select paiement_select\" required name=\"paiement\">
                                <option value=\"\">Choix paiement</option>
                                {% for paiement in paiements %}

                                    <option value=\"{{paiement.id}}\" >{{paiement.designation|upper}}</option>
                                {% endfor %}
                            </select>
                        </div>
                        <div class=\"col-md-4\">
                            <label required class=\"text-size-12\">Devise:</label>
                            <select class=\" text-uppercase form-control select\" required name=\"devise\">
                                <option value=\"\">Choix devise</option>
                                {% for devise in devises %}
                                    <option  value=\"{{devise.id}}\"{% if devise.designation == 'mad'%} selected {% endif %}>{{devise.designation|upper}}</option>
                                {% endfor %}
                            </select>
                        </div>
                    </div>
                </form>
                <hr>
                <div class=\"row mb-4 align-items-end justify-content-center\">
                    <div class=\"col-md-10\">
                        <div class=\"row align-items-end\">
                            <div class=\"col-md-4\">
                                <label required class=\"text-size-12\">Employe:</label>
                                <select class=\" text-uppercase form-control employe_select select\" name=\"devise\">
                                    <option value=\"\">Choix employe</option>
                                    {% for contract in contracts %}
                                        <option data-rib=\"{{contract.rib}}\" data-name=\"{{contract.nom|capitalize}} {{contract.prenom|capitalize}}\"  value=\"{{contract.id}}\">{{contract.nom|capitalize}} {{contract.prenom|capitalize}}</option>
                                    {% endfor %}
                                </select>
                            </div>
                            <div class=\"col-md-3\">
                                <label class=\"text-size-12\">Montant:</label>
                                <input type=\"number\"  class=\"form-control montant\" name=\"montant\" />
                            </div>
                            <div class=\"col-md-3\">
                                <label class=\"text-size-12\">Montant Mad:</label>
                                <input type=\"number\"  class=\"form-control montant_mad\" name=\"montant_mad\" />
                            </div>
                            <div class=\"col-md-1\">
                                <button class=\"btn btn-success add_employe\"><i class=\"fa fa-plus text-white\"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class=\"col-md-2 text-end\">
                        <button class=\"btn btn-primary\"><i class=\"fa fa-download\"></i></button>
                        <input type=\"file\" id=\"upload_file_indeminite\" style=\"display:none\"/>
                        <button class=\"btn btn-success upload_file_button\"><i class=\"fa fa-upload text-white\"></i></button>
                    
                    </div>
                </div>
                
              
                <table class=\" table table-bordered  table-striped\" id=\"list_indeminites\" style=\"width: 100%\">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Employe</th>
                            <th>Montant</th>
                            <th>Montant MAD</th>
                            <th width=\"20%\">RIB</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class=\"list_indeminites_data\">
                    </tbody>
                </table>
            </div>
            <div class=\"modal-footer justify-content-start\" >
                <button type=\"submit\" class=\"btn btn-secondary\" form=\"add_indeminite\">Enregistre</button>
                <a type=\"button\" class=\"btn btn-link\" data-bs-dismiss=\"modal\"  data-dismiss=\"modal\">Fermer</a>
            </div>
        </div>
    </div>
</div>", "paie/indeminite/modals/upload.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\paie\\indeminite\\modals\\upload.html.twig");
    }
}
