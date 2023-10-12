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

/* parametre/user/pages/access.html.twig */
class __TwigTemplate_10ecdab9e97ab8f387396901b2abc22b extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "parametre/user/pages/access.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "parametre/user/pages/access.html.twig"));

        // line 1
        echo "<div class=\"dropdown\" style=\"\">
    <svg style=\"height:1.5rem\" role=\"button\" fill=\"black\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
        <circle cx=\"12\" cy=\"5\" r=\"2\"></circle>
        <circle cx=\"12\" cy=\"12\" r=\"2\"></circle>
        <circle cx=\"12\" cy=\"19\" r=\"2\"></circle>
    </svg>
    <div class=\"dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1\">
        ";
        // line 8
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["operations"]) || array_key_exists("operations", $context) ? $context["operations"] : (function () { throw new RuntimeError('Variable "operations" does not exist.', 8, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["operation"]) {
            // line 9
            echo "            ";
            if ((twig_get_attribute($this->env, $this->source, $context["operation"], "align", [], "any", false, false, false, 9) == true)) {
                // line 10
                echo "            <a data-id=\"";
                echo twig_escape_filter($this->env, (isset($context["id"]) || array_key_exists("id", $context) ? $context["id"] : (function () { throw new RuntimeError('Variable "id" does not exist.', 10, $this->source); })()), "html", null, true);
                echo "\" class=\"dropdown-item d-flex align-items-center text-capitalize ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "classTag", [], "any", false, false, false, 10), "html", null, true);
                echo "\" id=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "idTag", [], "any", false, false, false, 10), "html", null, true);
                echo "\" href=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "link", [], "any", false, false, false, 10), "html", null, true);
                echo "\">
                <i class=\"";
                // line 11
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "icon", [], "any", false, false, false, 11), "html", null, true);
                echo " text-gray-400 me-2\"></i>
                ";
                // line 12
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "designation", [], "any", false, false, false, 12), "html", null, true);
                echo "
            </a>
            ";
            }
            // line 15
            echo "        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['operation'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 16
        echo "    </div>
</div>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "parametre/user/pages/access.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  86 => 16,  80 => 15,  74 => 12,  70 => 11,  59 => 10,  56 => 9,  52 => 8,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"dropdown\" style=\"\">
    <svg style=\"height:1.5rem\" role=\"button\" fill=\"black\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
        <circle cx=\"12\" cy=\"5\" r=\"2\"></circle>
        <circle cx=\"12\" cy=\"12\" r=\"2\"></circle>
        <circle cx=\"12\" cy=\"19\" r=\"2\"></circle>
    </svg>
    <div class=\"dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1\">
        {% for operation in operations %}
            {% if operation.align == true %}
            <a data-id=\"{{ id }}\" class=\"dropdown-item d-flex align-items-center text-capitalize {{operation.classTag}}\" id=\"{{operation.idTag}}\" href=\"{{operation.link}}\">
                <i class=\"{{operation.icon}} text-gray-400 me-2\"></i>
                {{operation.designation}}
            </a>
            {% endif %}
        {% endfor %}
    </div>
</div>", "parametre/user/pages/access.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\parametre\\user\\pages\\access.html.twig");
    }
}
