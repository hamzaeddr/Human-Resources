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

/* security/site.html.twig */
class __TwigTemplate_361cbe2ff8bb1aacd895d99c1c61fb77 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'stylesheets' => [$this, 'block_stylesheets'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/site.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/site.html.twig"));

        // line 1
        echo "

<!DOCTYPE html>
<html lang=\"fr\">

<head> 
<title>FCZ - Login</title>
";
        // line 8
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 11
        echo "
";
        // line 12
        $this->displayBlock('javascripts', $context, $blocks);
        // line 18
        echo "
<!-- NOTICE: You can use the _analytics.html partial to include production code specific code & trackers -->

</head>

<body>

    <!-- NOTICE: You can use the _analytics.html partial to include production code specific code & trackers -->
    

    <main>

        <!-- Section -->
        <section class=\"vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center\">
            <div class=\"container\">
                
                <div class=\"row justify-content-center form-bg-image\" >
                    <div class=\"col-12 d-flex align-items-center justify-content-center\">
                        <div class=\"bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500\">
                           
                            <div class=\"text-center text-md-center mb-4 mt-md-0\">
                                <h1 class=\"mb-0 h3\">CHANGER SITE :</h1>
                            </div>
                            <form method=\"post\" class=\"mt-4\">
                                <!-- Form -->
                                <div class=\"form-group mb-4\">
                                    <label for=\"email\">Choix Site : </label>
                                    <div class=\"input-group\">
                                       
                                        <select class=\"select nature_contrat nature_contrat\" name=\"nature_contrat\" id=\"site\"   required >
                                            <option value=\"\" selected>Selectionnez Site :</option>
                                            ";
        // line 49
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["dossiers"]) || array_key_exists("dossiers", $context) ? $context["dossiers"] : (function () { throw new RuntimeError('Variable "dossiers" does not exist.', 49, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["dossier"]) {
            // line 50
            echo "                                                <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["dossier"], "id", [], "any", false, false, false, 50), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["dossier"], "abreviation", [], "any", false, false, false, 50), "html", null, true);
            echo " - ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["dossier"], "designation", [], "any", false, false, false, 50), "html", null, true);
            echo "</option>
                                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['dossier'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 52
        echo "                                        </select> 
                                    </div>  
                                </div>
                                <!-- End of Form -->
                           
                                <div class=\"d-grid\">
                                    <button type=\"button\" id=\"sitechoisir\" class=\"btn btn-gray-800\">Choisir</button>
                                </div>
                                
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>


</body>

</html>
";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 8
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 9
        echo "    ";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("app");
        echo "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 12
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 13
        echo "    ";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("app");
        echo "

 
   
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "security/site.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  176 => 13,  166 => 12,  153 => 9,  143 => 8,  111 => 52,  98 => 50,  94 => 49,  61 => 18,  59 => 12,  56 => 11,  54 => 8,  45 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("

<!DOCTYPE html>
<html lang=\"fr\">

<head> 
<title>FCZ - Login</title>
{% block stylesheets %}
    {{ encore_entry_link_tags('app') }}
{% endblock %}

{% block javascripts %}
    {{ encore_entry_script_tags('app') }}

 
   
{% endblock %}

<!-- NOTICE: You can use the _analytics.html partial to include production code specific code & trackers -->

</head>

<body>

    <!-- NOTICE: You can use the _analytics.html partial to include production code specific code & trackers -->
    

    <main>

        <!-- Section -->
        <section class=\"vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center\">
            <div class=\"container\">
                
                <div class=\"row justify-content-center form-bg-image\" >
                    <div class=\"col-12 d-flex align-items-center justify-content-center\">
                        <div class=\"bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500\">
                           
                            <div class=\"text-center text-md-center mb-4 mt-md-0\">
                                <h1 class=\"mb-0 h3\">CHANGER SITE :</h1>
                            </div>
                            <form method=\"post\" class=\"mt-4\">
                                <!-- Form -->
                                <div class=\"form-group mb-4\">
                                    <label for=\"email\">Choix Site : </label>
                                    <div class=\"input-group\">
                                       
                                        <select class=\"select nature_contrat nature_contrat\" name=\"nature_contrat\" id=\"site\"   required >
                                            <option value=\"\" selected>Selectionnez Site :</option>
                                            {% for dossier in dossiers %}
                                                <option value=\"{{dossier.id}}\">{{dossier.abreviation}} - {{dossier.designation}}</option>
                                            {% endfor %}
                                        </select> 
                                    </div>  
                                </div>
                                <!-- End of Form -->
                           
                                <div class=\"d-grid\">
                                    <button type=\"button\" id=\"sitechoisir\" class=\"btn btn-gray-800\">Choisir</button>
                                </div>
                                
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>


</body>

</html>
", "security/site.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\security\\site.html.twig");
    }
}
