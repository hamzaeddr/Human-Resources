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

/* mouvement/prets/includes/details.html.twig */
class __TwigTemplate_d5a6481659fc17baf90752b559e6d62f extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "mouvement/prets/includes/details.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "mouvement/prets/includes/details.html.twig"));

        // line 1
        echo "<div>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Matricule:</b> ";
        // line 4
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["prelevement"]) || array_key_exists("prelevement", $context) ? $context["prelevement"] : (function () { throw new RuntimeError('Variable "prelevement" does not exist.', 4, $this->source); })()), "contract", [], "any", false, false, false, 4), "employe", [], "any", false, false, false, 4), "matricule", [], "any", false, false, false, 4), "html", null, true);
        echo "</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Nom:</b> ";
        // line 7
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["prelevement"]) || array_key_exists("prelevement", $context) ? $context["prelevement"] : (function () { throw new RuntimeError('Variable "prelevement" does not exist.', 7, $this->source); })()), "contract", [], "any", false, false, false, 7), "employe", [], "any", false, false, false, 7), "nom", [], "any", false, false, false, 7), "html", null, true);
        echo "</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Prenom:</b> ";
        // line 10
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["prelevement"]) || array_key_exists("prelevement", $context) ? $context["prelevement"] : (function () { throw new RuntimeError('Variable "prelevement" does not exist.', 10, $this->source); })()), "contract", [], "any", false, false, false, 10), "employe", [], "any", false, false, false, 10), "prenom", [], "any", false, false, false, 10), "html", null, true);
        echo "</p>
        </div>
    </div>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Nature contract:</b> ";
        // line 15
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["prelevement"]) || array_key_exists("prelevement", $context) ? $context["prelevement"] : (function () { throw new RuntimeError('Variable "prelevement" does not exist.', 15, $this->source); })()), "contract", [], "any", false, false, false, 15), "pnatureContract", [], "any", false, false, false, 15), "designation", [], "any", false, false, false, 15), "html", null, true);
        echo "</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Bareme:</b> ";
        // line 18
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["prelevement"]) || array_key_exists("prelevement", $context) ? $context["prelevement"] : (function () { throw new RuntimeError('Variable "prelevement" does not exist.', 18, $this->source); })()), "contract", [], "any", false, false, false, 18), "bareme", [], "any", false, false, false, 18), "bareme", [], "any", false, false, false, 18), "html", null, true);
        echo "</p>
        </div>
        
    </div>
    <hr>
    <table class=\"table table-bordered  table-striped\" id=\"list_prelevement_details\">
        <thead>
            <tr>
                <th>#</th>
                <th>Prelevement</th>
                <th>Periode</th>
                <th>Motant</th>
                <th>Motif</th>
                <th>Statut</th>
                <th>Bulletin</th>
            </tr>
        </thead>
        <tbody id=\"list_details\">
            ";
        // line 36
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["prelevement"]) || array_key_exists("prelevement", $context) ? $context["prelevement"] : (function () { throw new RuntimeError('Variable "prelevement" does not exist.', 36, $this->source); })()), "prelevementLgs", [], "any", false, false, false, 36));
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
        foreach ($context['_seq'] as $context["_key"] => $context["prelevementDet"]) {
            // line 37
            echo "                <tr id=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["prelevementDet"], "id", [], "any", false, false, false, 37), "html", null, true);
            echo "\">
                    <td>";
            // line 38
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, false, 38), "html", null, true);
            echo "</td>
                    <td>";
            // line 39
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["prelevementDet"], "prelevement", [], "any", false, false, false, 39), "code", [], "any", false, false, false, 39), "html", null, true);
            echo "</td>
                    <td>";
            // line 40
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["prelevementDet"], "periode", [], "any", false, false, false, 40), "code", [], "any", false, false, false, 40), "html", null, true);
            echo "</td>
                    <td>";
            // line 41
            echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["prelevementDet"], "montant", [], "any", false, false, false, 41), 2, ",", " "), "html", null, true);
            echo "</td>
                    <td>";
            // line 42
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["prelevementDet"], "motif", [], "any", false, false, false, 42), "html", null, true);
            echo "</td>
                    <td class=\"text-center\">
                        ";
            // line 44
            if ((twig_get_attribute($this->env, $this->source, $context["prelevementDet"], "valider", [], "any", false, false, false, 44) == true)) {
                // line 45
                echo "                            <i class=\"fa-solid fa-circle-check text-success\"></i>
                        ";
            } elseif ((twig_get_attribute($this->env, $this->source,             // line 46
$context["prelevementDet"], "active", [], "any", false, false, false, 46) == false)) {
                // line 47
                echo "                            <i class=\"fa-solid fa-circle-xmark text-danger\"></i>
                        ";
            } else {
                // line 49
                echo "                            <i class=\"fa-solid fa-circle-notch text-info\"></i>
                        ";
            }
            // line 51
            echo "                    </td>
                    <td>
                        ";
            // line 53
            if (((twig_get_attribute($this->env, $this->source, $context["prelevementDet"], "valider", [], "any", false, false, false, 53) == true) && twig_get_attribute($this->env, $this->source, $context["prelevementDet"], "bulletin", [], "any", false, false, false, 53))) {
                // line 54
                echo "                           <span role=\"button\" class=\"bulletin_download\" id=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["prelevementDet"], "bulletin", [], "any", false, false, false, 54), "id", [], "any", false, false, false, 54), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["prelevementDet"], "bulletin", [], "any", false, false, false, 54), "code", [], "any", false, false, false, 54), "html", null, true);
                echo "</span>
                        ";
            }
            // line 56
            echo "                    </td>
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
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['prelevementDet'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 59
        echo "        </tbody>
    </table>
    

</div>
";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "mouvement/prets/includes/details.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  183 => 59,  167 => 56,  159 => 54,  157 => 53,  153 => 51,  149 => 49,  145 => 47,  143 => 46,  140 => 45,  138 => 44,  133 => 42,  129 => 41,  125 => 40,  121 => 39,  117 => 38,  112 => 37,  95 => 36,  74 => 18,  68 => 15,  60 => 10,  54 => 7,  48 => 4,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Matricule:</b> {{prelevement.contract.employe.matricule}}</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Nom:</b> {{prelevement.contract.employe.nom}}</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Prenom:</b> {{prelevement.contract.employe.prenom}}</p>
        </div>
    </div>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Nature contract:</b> {{prelevement.contract.pnatureContract.designation}}</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Bareme:</b> {{prelevement.contract.bareme.bareme}}</p>
        </div>
        
    </div>
    <hr>
    <table class=\"table table-bordered  table-striped\" id=\"list_prelevement_details\">
        <thead>
            <tr>
                <th>#</th>
                <th>Prelevement</th>
                <th>Periode</th>
                <th>Motant</th>
                <th>Motif</th>
                <th>Statut</th>
                <th>Bulletin</th>
            </tr>
        </thead>
        <tbody id=\"list_details\">
            {% for prelevementDet in prelevement.prelevementLgs %}
                <tr id=\"{{prelevementDet.id}}\">
                    <td>{{loop.index}}</td>
                    <td>{{prelevementDet.prelevement.code}}</td>
                    <td>{{prelevementDet.periode.code}}</td>
                    <td>{{prelevementDet.montant|number_format(2, ',', ' ')}}</td>
                    <td>{{prelevementDet.motif}}</td>
                    <td class=\"text-center\">
                        {% if prelevementDet.valider == true %}
                            <i class=\"fa-solid fa-circle-check text-success\"></i>
                        {% elseif prelevementDet.active == false %}
                            <i class=\"fa-solid fa-circle-xmark text-danger\"></i>
                        {% else %}
                            <i class=\"fa-solid fa-circle-notch text-info\"></i>
                        {% endif %}
                    </td>
                    <td>
                        {% if prelevementDet.valider == true and prelevementDet.bulletin %}
                           <span role=\"button\" class=\"bulletin_download\" id=\"{{prelevementDet.bulletin.id}}\">{{prelevementDet.bulletin.code}}</span>
                        {% endif %}
                    </td>
                </tr>
            {% endfor %}
        </tbody>
    </table>
    

</div>
", "mouvement/prets/includes/details.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\mouvement\\prets\\includes\\details.html.twig");
    }
}
