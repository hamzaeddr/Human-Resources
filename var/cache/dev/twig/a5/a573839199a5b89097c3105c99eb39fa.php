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

/* salarie/gestion_salarie/modals/contract_detail.html.twig */
class __TwigTemplate_07cdd716bf341924b707d6873d8d5581 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/modals/contract_detail.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/modals/contract_detail.html.twig"));

        // line 1
        echo "                       ";
        if ((isset($context["contracts"]) || array_key_exists("contracts", $context) ? $context["contracts"] : (function () { throw new RuntimeError('Variable "contracts" does not exist.', 1, $this->source); })())) {
            // line 2
            echo "
                        ";
            // line 3
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["contracts"]) || array_key_exists("contracts", $context) ? $context["contracts"] : (function () { throw new RuntimeError('Variable "contracts" does not exist.', 3, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["contract"]) {
                // line 4
                echo "
                        <tr>
                            <td>";
                // line 6
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "code", [], "any", false, false, false, 6), "html", null, true);
                echo "</td>
                            <td>";
                // line 7
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "designation", [], "any", false, false, false, 7), "html", null, true);
                echo "</td>
                            <td>";
                // line 8
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "type", [], "any", false, false, false, 8), "html", null, true);
                echo "</td>
                            <td>
                                ";
                // line 10
                if ((twig_length_filter($this->env, (isset($context["operations"]) || array_key_exists("operations", $context) ? $context["operations"] : (function () { throw new RuntimeError('Variable "operations" does not exist.', 10, $this->source); })())) > 0)) {
                    // line 11
                    echo "                                    <div class=\"dropdown\" style=\"\">
                                        <!-- Add the 'btn' class to the SVG to make it clickable like a button -->

                                        <svg style=\"height:1.5rem\" role=\"button\" fill=\"black\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                                            <circle cx=\"12\" cy=\"5\" r=\"2\"></circle>
                                            <circle cx=\"12\" cy=\"12\" r=\"2\"></circle>
                                            <circle cx=\"12\" cy=\"19\" r=\"2\"></circle>
                                        </svg>
                                        <div class=\"dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1\">
                                            ";
                    // line 20
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable((isset($context["operations"]) || array_key_exists("operations", $context) ? $context["operations"] : (function () { throw new RuntimeError('Variable "operations" does not exist.', 20, $this->source); })()));
                    foreach ($context['_seq'] as $context["_key"] => $context["operation"]) {
                        // line 21
                        echo "                                                ";
                        if ((twig_get_attribute($this->env, $this->source, $context["operation"], "align", [], "any", false, false, false, 21) == true)) {
                            // line 22
                            echo "                                                <a value=\"";
                            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "id", [], "any", false, false, false, 22), "html", null, true);
                            echo "\" class=\"dropdown-item d-flex align-items-center text-capitalize ";
                            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "classTag", [], "any", false, false, false, 22), "html", null, true);
                            echo "\" id=\"";
                            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "idTag", [], "any", false, false, false, 22), "html", null, true);
                            echo "\" href=\"";
                            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "link", [], "any", false, false, false, 22), "html", null, true);
                            echo "\">
                                                    <i class=\"";
                            // line 23
                            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "icon", [], "any", false, false, false, 23), "html", null, true);
                            echo " text-gray-400 me-2\"></i>
                                                    ";
                            // line 24
                            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "designation", [], "any", false, false, false, 24), "html", null, true);
                            echo "
                                                </a>
                                                ";
                        }
                        // line 27
                        echo "                                            ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['operation'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 28
                    echo "                                        </div>
                                    </div>
                                ";
                }
                // line 31
                echo "                            </td>
                            ";
                // line 36
                echo "                        </tr>
                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['contract'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 38
            echo "                        ";
        } else {
            // line 39
            echo "                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>  <button class=\"btn btn-info\" id=\"ajouterContract\">
                                    <i class=\"fas fa-file-add\"></i> Ajouter Contrat
                                </button></td>
                        </tr>

                        ";
        }
        // line 49
        echo "               ";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "salarie/gestion_salarie/modals/contract_detail.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  147 => 49,  135 => 39,  132 => 38,  125 => 36,  122 => 31,  117 => 28,  111 => 27,  105 => 24,  101 => 23,  90 => 22,  87 => 21,  83 => 20,  72 => 11,  70 => 10,  65 => 8,  61 => 7,  57 => 6,  53 => 4,  49 => 3,  46 => 2,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("                       {% if contracts %}

                        {% for contract in contracts %}

                        <tr>
                            <td>{{ contract.code }}</td>
                            <td>{{ contract.designation }}</td>
                            <td>{{ contract.type }}</td>
                            <td>
                                {% if operations|length > 0 %}
                                    <div class=\"dropdown\" style=\"\">
                                        <!-- Add the 'btn' class to the SVG to make it clickable like a button -->

                                        <svg style=\"height:1.5rem\" role=\"button\" fill=\"black\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                                            <circle cx=\"12\" cy=\"5\" r=\"2\"></circle>
                                            <circle cx=\"12\" cy=\"12\" r=\"2\"></circle>
                                            <circle cx=\"12\" cy=\"19\" r=\"2\"></circle>
                                        </svg>
                                        <div class=\"dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1\">
                                            {% for operation in operations %}
                                                {% if operation.align == true %}
                                                <a value=\"{{ contract.id }}\" class=\"dropdown-item d-flex align-items-center text-capitalize {{operation.classTag}}\" id=\"{{operation.idTag}}\" href=\"{{operation.link}}\">
                                                    <i class=\"{{operation.icon}} text-gray-400 me-2\"></i>
                                                    {{operation.designation}}
                                                </a>
                                                {% endif %}
                                            {% endfor %}
                                        </div>
                                    </div>
                                {% endif %}
                            </td>
                            {# <td><button class=\"btn btn-primary\" id=\"editContract\"value=\"{{ contract.id }}\">Edit</button></td>
                            <td>  <button class=\"btn btn-info\" onclick=\"generatePDF({{ contract.id }})\">
                                    <i class=\"fas fa-file-pdf\"></i> PDF
                                </button></td> #}
                        </tr>
                        {% endfor %}
                        {% else %}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>  <button class=\"btn btn-info\" id=\"ajouterContract\">
                                    <i class=\"fas fa-file-add\"></i> Ajouter Contrat
                                </button></td>
                        </tr>

                        {% endif %}
               ", "salarie/gestion_salarie/modals/contract_detail.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\salarie\\gestion_salarie\\modals\\contract_detail.html.twig");
    }
}
