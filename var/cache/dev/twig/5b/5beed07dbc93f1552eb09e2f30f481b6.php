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

/* paie/honoraire/modals/upload.html.twig */
class __TwigTemplate_cd52212dca2350febf197bd8f9b9859d extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "paie/honoraire/modals/upload.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "paie/honoraire/modals/upload.html.twig"));

        // line 1
        echo "
<div class=\"modal right come-from-modal fade\"  id=\"upload_modal\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:60%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Import des honoraires</h2>
                <a type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></a>
            </div>
            <div class=\"modal-body\">
                <form id=\"add_honoraire\">
                    <div class=\"row\">
                        <div class=\"col-md-4\">
                            <label class=\"text-size-12\">Dossier:</label>
                            <select required class=\"form-control select dossier_select\" name=\"dossier\">
                                <option value=\"\">Choix dossier</option>
                                ";
        // line 16
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["dossiers"]) || array_key_exists("dossiers", $context) ? $context["dossiers"] : (function () { throw new RuntimeError('Variable "dossiers" does not exist.', 16, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["dossier"]) {
            // line 17
            echo "                                    <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["dossier"], "id", [], "any", false, false, false, 17), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["dossier"], "abreviation", [], "any", false, false, false, 17), "html", null, true);
            echo " - ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["dossier"], "designation", [], "any", false, false, false, 17), "html", null, true);
            echo "</option>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['dossier'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 19
        echo "                            </select>
                        </div>
                        <div class=\"col-md-8\">
                            <label class=\"text-size-12\">Observation:</label>
                            <input type=\"text\" class=\"form-control\" name=\"observation\" />
                        </div>
                    </div>
                    <div class=\"row mt-2\">
                        
                        <div class=\"col-md-3\">
                            <label required class=\"text-size-12\">Elément:</label>
                            <select class=\"text-uppercase form-control select\" name=\"element\">
                                <option value=\"\">Choix element</option>
                                ";
        // line 32
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["elementHonoraires"]) || array_key_exists("elementHonoraires", $context) ? $context["elementHonoraires"] : (function () { throw new RuntimeError('Variable "elementHonoraires" does not exist.', 32, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["elementHonoraire"]) {
            // line 33
            echo "                                    <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["elementHonoraire"], "id", [], "any", false, false, false, 33), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, $context["elementHonoraire"], "designation", [], "any", false, false, false, 33)), "html", null, true);
            echo "</option>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['elementHonoraire'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 35
        echo "                            </select>
                        </div>
                        <div class=\"col-md-3\">
                            <label required class=\"text-size-12\">Nature:</label>
                            <select class=\"text-uppercase form-control select nature_select\" name=\"nature\">
                                <option value=\"\">Choix nature</option>
                                    <option value=\"médecin\" >";
        // line 41
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, "médecin"), "html", null, true);
        echo "</option>
                                    <option value=\"enseignant\" >";
        // line 42
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, "enseignant"), "html", null, true);
        echo "</option>
                                    <option value=\"autres\" >";
        // line 43
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, "autres"), "html", null, true);
        echo "</option>
                            </select>
                        </div>
                        <div class=\"col-md-3\">
                            <label required class=\"text-size-12\">Paiement:</label>
                            <select class=\"text-uppercase form-control select paiement_select\" name=\"paiement\">
                                <option value=\"\">Choix paiement</option>
                                ";
        // line 50
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["paiements"]) || array_key_exists("paiements", $context) ? $context["paiements"] : (function () { throw new RuntimeError('Variable "paiements" does not exist.', 50, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["paiement"]) {
            // line 51
            echo "
                                    <option value=\"";
            // line 52
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["paiement"], "id", [], "any", false, false, false, 52), "html", null, true);
            echo "\" >";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, $context["paiement"], "designation", [], "any", false, false, false, 52)), "html", null, true);
            echo "</option>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['paiement'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 54
        echo "                            </select>
                        </div>
                        <div class=\"col-md-3\">
                            <label required class=\"text-size-12\">Devise:</label>
                            <select class=\" text-uppercase form-control select\" name=\"devise\">
                                <option value=\"\">Choix devise</option>
                                ";
        // line 60
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["devises"]) || array_key_exists("devises", $context) ? $context["devises"] : (function () { throw new RuntimeError('Variable "devises" does not exist.', 60, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["devise"]) {
            // line 61
            echo "                                    <option  value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["devise"], "id", [], "any", false, false, false, 61), "html", null, true);
            echo "\"";
            if ((twig_get_attribute($this->env, $this->source, $context["devise"], "designation", [], "any", false, false, false, 61) == "mad")) {
                echo " selected ";
            }
            echo ">";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, $context["devise"], "designation", [], "any", false, false, false, 61)), "html", null, true);
            echo "</option>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['devise'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 63
        echo "                            </select>
                        </div>
                    </div>
                </form>
                <hr>
                <div class=\"mb-4\">
                    <button class=\"btn btn-primary\"><i class=\"fa fa-download\"></i></button>
                    <input type=\"file\" id=\"upload_file_honoraire\" style=\"display:none\"/>
                    <button class=\"btn btn-success upload_file_honoraire_button\"><i class=\"fa fa-upload text-white\"></i></button>
                
                </div>
                <table class=\" table table-bordered  table-striped\" id=\"list_bhonoraires\" style=\"width: 100%\">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Béneficiaire</th>
                            <th>Montant</th>
                            <th>Montant MAD</th>
                            <th>Brut MAD</th>
                            <th>IR</th>
                            <th>IR MAD</th>
                            <th>RIB</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class=\"honoraire_list_data\">
                    </tbody>
                </table>
            </div>
            <div class=\"modal-footer justify-content-start\" >
                <button type=\"submit\" class=\"btn btn-secondary\" form=\"add_honoraire\">Enregistre</button>
                <a type=\"button\" class=\"btn btn-link\" data-bs-dismiss=\"modal\">Fermer</a>
            </div>
        </div>
    </div>
</div>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "paie/honoraire/modals/upload.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  177 => 63,  162 => 61,  158 => 60,  150 => 54,  140 => 52,  137 => 51,  133 => 50,  123 => 43,  119 => 42,  115 => 41,  107 => 35,  96 => 33,  92 => 32,  77 => 19,  64 => 17,  60 => 16,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("
<div class=\"modal right come-from-modal fade\"  id=\"upload_modal\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:60%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Import des honoraires</h2>
                <a type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></a>
            </div>
            <div class=\"modal-body\">
                <form id=\"add_honoraire\">
                    <div class=\"row\">
                        <div class=\"col-md-4\">
                            <label class=\"text-size-12\">Dossier:</label>
                            <select required class=\"form-control select dossier_select\" name=\"dossier\">
                                <option value=\"\">Choix dossier</option>
                                {% for dossier in dossiers %}
                                    <option value=\"{{dossier.id}}\">{{dossier.abreviation}} - {{dossier.designation}}</option>
                                {% endfor %}
                            </select>
                        </div>
                        <div class=\"col-md-8\">
                            <label class=\"text-size-12\">Observation:</label>
                            <input type=\"text\" class=\"form-control\" name=\"observation\" />
                        </div>
                    </div>
                    <div class=\"row mt-2\">
                        
                        <div class=\"col-md-3\">
                            <label required class=\"text-size-12\">Elément:</label>
                            <select class=\"text-uppercase form-control select\" name=\"element\">
                                <option value=\"\">Choix element</option>
                                {% for elementHonoraire in elementHonoraires %}
                                    <option value=\"{{elementHonoraire.id}}\">{{elementHonoraire.designation|upper}}</option>
                                {% endfor %}
                            </select>
                        </div>
                        <div class=\"col-md-3\">
                            <label required class=\"text-size-12\">Nature:</label>
                            <select class=\"text-uppercase form-control select nature_select\" name=\"nature\">
                                <option value=\"\">Choix nature</option>
                                    <option value=\"médecin\" >{{\"médecin\"|upper}}</option>
                                    <option value=\"enseignant\" >{{\"enseignant\"|upper}}</option>
                                    <option value=\"autres\" >{{\"autres\"|upper}}</option>
                            </select>
                        </div>
                        <div class=\"col-md-3\">
                            <label required class=\"text-size-12\">Paiement:</label>
                            <select class=\"text-uppercase form-control select paiement_select\" name=\"paiement\">
                                <option value=\"\">Choix paiement</option>
                                {% for paiement in paiements %}

                                    <option value=\"{{paiement.id}}\" >{{paiement.designation|upper}}</option>
                                {% endfor %}
                            </select>
                        </div>
                        <div class=\"col-md-3\">
                            <label required class=\"text-size-12\">Devise:</label>
                            <select class=\" text-uppercase form-control select\" name=\"devise\">
                                <option value=\"\">Choix devise</option>
                                {% for devise in devises %}
                                    <option  value=\"{{devise.id}}\"{% if devise.designation == 'mad'%} selected {% endif %}>{{devise.designation|upper}}</option>
                                {% endfor %}
                            </select>
                        </div>
                    </div>
                </form>
                <hr>
                <div class=\"mb-4\">
                    <button class=\"btn btn-primary\"><i class=\"fa fa-download\"></i></button>
                    <input type=\"file\" id=\"upload_file_honoraire\" style=\"display:none\"/>
                    <button class=\"btn btn-success upload_file_honoraire_button\"><i class=\"fa fa-upload text-white\"></i></button>
                
                </div>
                <table class=\" table table-bordered  table-striped\" id=\"list_bhonoraires\" style=\"width: 100%\">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Béneficiaire</th>
                            <th>Montant</th>
                            <th>Montant MAD</th>
                            <th>Brut MAD</th>
                            <th>IR</th>
                            <th>IR MAD</th>
                            <th>RIB</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class=\"honoraire_list_data\">
                    </tbody>
                </table>
            </div>
            <div class=\"modal-footer justify-content-start\" >
                <button type=\"submit\" class=\"btn btn-secondary\" form=\"add_honoraire\">Enregistre</button>
                <a type=\"button\" class=\"btn btn-link\" data-bs-dismiss=\"modal\">Fermer</a>
            </div>
        </div>
    </div>
</div>", "paie/honoraire/modals/upload.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\paie\\honoraire\\modals\\upload.html.twig");
    }
}
