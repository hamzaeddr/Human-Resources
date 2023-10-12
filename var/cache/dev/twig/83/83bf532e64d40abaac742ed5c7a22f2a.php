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

/* paie/bulletin/includes/bulletin_details.html.twig */
class __TwigTemplate_2861d6d23b751b95ea0e75b95860e9d1 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "paie/bulletin/includes/bulletin_details.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "paie/bulletin/includes/bulletin_details.html.twig"));

        // line 1
        echo "<div>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Matricule:</b> ";
        // line 4
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["bulletin"]) || array_key_exists("bulletin", $context) ? $context["bulletin"] : (function () { throw new RuntimeError('Variable "bulletin" does not exist.', 4, $this->source); })()), "contract", [], "any", false, false, false, 4), "employe", [], "any", false, false, false, 4), "matricule", [], "any", false, false, false, 4), "html", null, true);
        echo "</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Nom:</b> ";
        // line 7
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["bulletin"]) || array_key_exists("bulletin", $context) ? $context["bulletin"] : (function () { throw new RuntimeError('Variable "bulletin" does not exist.', 7, $this->source); })()), "contract", [], "any", false, false, false, 7), "employe", [], "any", false, false, false, 7), "nom", [], "any", false, false, false, 7), "html", null, true);
        echo "</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Prenom:</b> ";
        // line 10
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["bulletin"]) || array_key_exists("bulletin", $context) ? $context["bulletin"] : (function () { throw new RuntimeError('Variable "bulletin" does not exist.', 10, $this->source); })()), "contract", [], "any", false, false, false, 10), "employe", [], "any", false, false, false, 10), "prenom", [], "any", false, false, false, 10), "html", null, true);
        echo "</p>
        </div>
    </div>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Nature contract:</b> ";
        // line 15
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["bulletin"]) || array_key_exists("bulletin", $context) ? $context["bulletin"] : (function () { throw new RuntimeError('Variable "bulletin" does not exist.', 15, $this->source); })()), "contract", [], "any", false, false, false, 15), "pnatureContract", [], "any", false, false, false, 15), "designation", [], "any", false, false, false, 15), "html", null, true);
        echo "</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Bareme:</b> ";
        // line 18
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["bulletin"]) || array_key_exists("bulletin", $context) ? $context["bulletin"] : (function () { throw new RuntimeError('Variable "bulletin" does not exist.', 18, $this->source); })()), "contract", [], "any", false, false, false, 18), "bareme", [], "any", false, false, false, 18), "bareme", [], "any", false, false, false, 18), "html", null, true);
        echo "</p>
        </div>
        
    </div>
    <hr>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Bulletin:</b> ";
        // line 25
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["bulletin"]) || array_key_exists("bulletin", $context) ? $context["bulletin"] : (function () { throw new RuntimeError('Variable "bulletin" does not exist.', 25, $this->source); })()), "code", [], "any", false, false, false, 25), "html", null, true);
        echo "</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Periode:</b> ";
        // line 28
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["bulletin"]) || array_key_exists("bulletin", $context) ? $context["bulletin"] : (function () { throw new RuntimeError('Variable "bulletin" does not exist.', 28, $this->source); })()), "periode", [], "any", false, false, false, 28), "code", [], "any", false, false, false, 28), "html", null, true);
        echo "</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Imprimer:</b> <i class=\"fa fa-download text-primary bulletin_download\" type=\"button\" id=\"";
        // line 31
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["bulletin"]) || array_key_exists("bulletin", $context) ? $context["bulletin"] : (function () { throw new RuntimeError('Variable "bulletin" does not exist.', 31, $this->source); })()), "id", [], "any", false, false, false, 31), "html", null, true);
        echo "\"></i></p>
        </div>
        
    </div>
    <hr>
    <table class=\"table table-bordered  table-striped\" id=\"list_bulletin_details\">
        <thead>
            <tr>
                <th>#</th>
                <th>Rubrique</th>
                <th>Motant</th>
                <th>Sens</th>
            </tr>
        </thead>
        <tbody>
            ";
        // line 46
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["bulletinLgs"]) || array_key_exists("bulletinLgs", $context) ? $context["bulletinLgs"] : (function () { throw new RuntimeError('Variable "bulletinLgs" does not exist.', 46, $this->source); })()));
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
        foreach ($context['_seq'] as $context["_key"] => $context["bulletinLg"]) {
            // line 47
            echo "                <tr id=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["bulletinLg"], "id", [], "any", false, false, false, 47), "html", null, true);
            echo "\">
                    <td>";
            // line 48
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, false, 48), "html", null, true);
            echo "</td>
                    <td>";
            // line 49
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["bulletinLg"], "rubrique", [], "any", false, false, false, 49), "designation", [], "any", false, false, false, 49), "html", null, true);
            echo "</td>
                    <td style=\"text-align: right !important\">";
            // line 50
            echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["bulletinLg"], "montant", [], "any", false, false, false, 50), 2, ",", " "), "html", null, true);
            echo "</td>
                    <td>";
            // line 51
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["bulletinLg"], "sens", [], "any", false, false, false, 51), "html", null, true);
            echo "</td>
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
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['bulletinLg'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 54
        echo "        </tbody>
    </table>
    

</div>
";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "paie/bulletin/includes/bulletin_details.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  165 => 54,  148 => 51,  144 => 50,  140 => 49,  136 => 48,  131 => 47,  114 => 46,  96 => 31,  90 => 28,  84 => 25,  74 => 18,  68 => 15,  60 => 10,  54 => 7,  48 => 4,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Matricule:</b> {{bulletin.contract.employe.matricule}}</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Nom:</b> {{bulletin.contract.employe.nom}}</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Prenom:</b> {{bulletin.contract.employe.prenom}}</p>
        </div>
    </div>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Nature contract:</b> {{bulletin.contract.pnatureContract.designation}}</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Bareme:</b> {{bulletin.contract.bareme.bareme}}</p>
        </div>
        
    </div>
    <hr>
    <div class=\"row\">
        <div class=\"col-md-4\">
            <p><b>Bulletin:</b> {{bulletin.code}}</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Periode:</b> {{bulletin.periode.code}}</p>
        </div>
        <div class=\"col-md-4\">
            <p><b>Imprimer:</b> <i class=\"fa fa-download text-primary bulletin_download\" type=\"button\" id=\"{{bulletin.id}}\"></i></p>
        </div>
        
    </div>
    <hr>
    <table class=\"table table-bordered  table-striped\" id=\"list_bulletin_details\">
        <thead>
            <tr>
                <th>#</th>
                <th>Rubrique</th>
                <th>Motant</th>
                <th>Sens</th>
            </tr>
        </thead>
        <tbody>
            {% for bulletinLg in bulletinLgs %}
                <tr id=\"{{bulletinLg.id}}\">
                    <td>{{loop.index}}</td>
                    <td>{{bulletinLg.rubrique.designation}}</td>
                    <td style=\"text-align: right !important\">{{bulletinLg.montant|number_format(2, ',', ' ')}}</td>
                    <td>{{bulletinLg.sens}}</td>
                </tr>
            {% endfor %}
        </tbody>
    </table>
    

</div>
", "paie/bulletin/includes/bulletin_details.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\paie\\bulletin\\includes\\bulletin_details.html.twig");
    }
}
