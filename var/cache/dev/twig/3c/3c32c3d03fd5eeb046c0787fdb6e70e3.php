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

/* paie/bulletin/includes/probleme.html.twig */
class __TwigTemplate_96578d5c9f6d8bd5cc45da7730c02477 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "paie/bulletin/includes/probleme.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "paie/bulletin/includes/probleme.html.twig"));

        // line 1
        echo "<div>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Matricule:</b> ";
        // line 4
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["contract"]) || array_key_exists("contract", $context) ? $context["contract"] : (function () { throw new RuntimeError('Variable "contract" does not exist.', 4, $this->source); })()), "employe", [], "any", false, false, false, 4), "matricule", [], "any", false, false, false, 4), "html", null, true);
        echo "</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Nom:</b> ";
        // line 7
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["contract"]) || array_key_exists("contract", $context) ? $context["contract"] : (function () { throw new RuntimeError('Variable "contract" does not exist.', 7, $this->source); })()), "employe", [], "any", false, false, false, 7), "nom", [], "any", false, false, false, 7), "html", null, true);
        echo "</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Prenom:</b> ";
        // line 10
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["contract"]) || array_key_exists("contract", $context) ? $context["contract"] : (function () { throw new RuntimeError('Variable "contract" does not exist.', 10, $this->source); })()), "employe", [], "any", false, false, false, 10), "prenom", [], "any", false, false, false, 10), "html", null, true);
        echo "</p>
        </div>
    </div>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Nature contract:</b> ";
        // line 15
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["contract"]) || array_key_exists("contract", $context) ? $context["contract"] : (function () { throw new RuntimeError('Variable "contract" does not exist.', 15, $this->source); })()), "pnatureContract", [], "any", false, false, false, 15), "designation", [], "any", false, false, false, 15), "html", null, true);
        echo "</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Bareme:</b> ";
        // line 18
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["contract"]) || array_key_exists("contract", $context) ? $context["contract"] : (function () { throw new RuntimeError('Variable "contract" does not exist.', 18, $this->source); })()), "bareme", [], "any", false, false, false, 18), "bareme", [], "any", false, false, false, 18), "html", null, true);
        echo "</p>
        </div>
        
    </div>
    <hr>
    <table class=\"table table-bordered  table-striped\">
        <thead>
            <tr>
                <th>#</th>
                <th>Type</th>
                <th>Rubrique</th>
                <th>Motant</th>
                <th>Motif</th>
                <th>Periode</th>
            </tr>
        </thead>
        <tbody id=\"list_problemes\">
            ";
        // line 35
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["problemes"]) || array_key_exists("problemes", $context) ? $context["problemes"] : (function () { throw new RuntimeError('Variable "problemes" does not exist.', 35, $this->source); })()));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["probleme"]) {
            // line 36
            echo "                <tr id=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["probleme"], "id", [], "any", false, false, false, 36), "html", null, true);
            echo "\" class=\"tr_problemes\">
                    <td>";
            // line 37
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, false, 37), "html", null, true);
            echo "</td>
                    ";
            // line 38
            if (twig_get_attribute($this->env, $this->source, $context["probleme"], "prelevementLg", [], "any", false, false, false, 38)) {
                // line 39
                echo "                        <td>Prélévement</td>
                        <td>";
                // line 40
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["probleme"], "prelevementLg", [], "any", false, false, false, 40), "prelevement", [], "any", false, false, false, 40), "rubrique", [], "any", false, false, false, 40), "designation", [], "any", false, false, false, 40), "html", null, true);
                echo "</td>
                        <td>";
                // line 41
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["probleme"], "prelevementLg", [], "any", false, false, false, 41), "montant", [], "any", false, false, false, 41), "html", null, true);
                echo "</td>
                    ";
            } elseif (twig_get_attribute($this->env, $this->source,             // line 42
$context["probleme"], "elementEcheance", [], "any", false, false, false, 42)) {
                // line 43
                echo "                        <td>Element echeance</td>
                        <td>";
                // line 44
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["probleme"], "elementEcheance", [], "any", false, false, false, 44), "rubrique", [], "any", false, false, false, 44), "designation", [], "any", false, false, false, 44), "html", null, true);
                echo "</td>
                        <td>";
                // line 45
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["probleme"], "elementEcheance", [], "any", false, false, false, 45), "montant", [], "any", false, false, false, 45), "html", null, true);
                echo "</td>
                    ";
            }
            // line 47
            echo "                    <td>";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["probleme"], "motif", [], "any", false, false, false, 47), "html", null, true);
            echo "</td>
                    <td><input type=\"month\"  class=\"form-control probleme_periode\" value=\"";
            // line 48
            echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_date_modify_filter($this->env, "now", "+1 month"), "Y-m"), "html", null, true);
            echo "\" min=\"";
            echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_date_modify_filter($this->env, "now", "+1 month"), "Y-m"), "html", null, true);
            echo "\"/></td>
                </tr>
            ";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['probleme'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 51
        echo "        </tbody>
    </table>
    

</div>
";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "paie/bulletin/includes/probleme.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  171 => 51,  152 => 48,  147 => 47,  142 => 45,  138 => 44,  135 => 43,  133 => 42,  129 => 41,  125 => 40,  122 => 39,  120 => 38,  116 => 37,  111 => 36,  94 => 35,  74 => 18,  68 => 15,  60 => 10,  54 => 7,  48 => 4,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Matricule:</b> {{contract.employe.matricule}}</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Nom:</b> {{contract.employe.nom}}</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Prenom:</b> {{contract.employe.prenom}}</p>
        </div>
    </div>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Nature contract:</b> {{contract.pnatureContract.designation}}</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Bareme:</b> {{contract.bareme.bareme}}</p>
        </div>
        
    </div>
    <hr>
    <table class=\"table table-bordered  table-striped\">
        <thead>
            <tr>
                <th>#</th>
                <th>Type</th>
                <th>Rubrique</th>
                <th>Motant</th>
                <th>Motif</th>
                <th>Periode</th>
            </tr>
        </thead>
        <tbody id=\"list_problemes\">
            {% for probleme in problemes %}
                <tr id=\"{{probleme.id}}\" class=\"tr_problemes\">
                    <td>{{loop.index}}</td>
                    {% if probleme.prelevementLg %}
                        <td>Prélévement</td>
                        <td>{{probleme.prelevementLg.prelevement.rubrique.designation}}</td>
                        <td>{{probleme.prelevementLg.montant}}</td>
                    {% elseif probleme.elementEcheance %}
                        <td>Element echeance</td>
                        <td>{{probleme.elementEcheance.rubrique.designation}}</td>
                        <td>{{probleme.elementEcheance.montant}}</td>
                    {% endif %}
                    <td>{{probleme.motif}}</td>
                    <td><input type=\"month\"  class=\"form-control probleme_periode\" value=\"{{\"now\"|date_modify(\"+1 month\")|date('Y-m')}}\" min=\"{{\"now\"|date_modify(\"+1 month\")|date('Y-m')}}\"/></td>
                </tr>
            {% endfor%}
        </tbody>
    </table>
    

</div>
", "paie/bulletin/includes/probleme.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\paie\\bulletin\\includes\\probleme.html.twig");
    }
}
