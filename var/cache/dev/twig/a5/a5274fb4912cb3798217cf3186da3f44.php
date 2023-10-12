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

/* security/login.html.twig */
class __TwigTemplate_7389e7fd468929ebaded5726be1702b1 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/login.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/login.html.twig"));

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
        // line 15
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
                            ";
        // line 34
        if ((isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 34, $this->source); })())) {
            // line 35
            echo "                                <div class=\"alert alert-danger\">";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans(twig_get_attribute($this->env, $this->source, (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 35, $this->source); })()), "messageKey", [], "any", false, false, false, 35), twig_get_attribute($this->env, $this->source, (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 35, $this->source); })()), "messageData", [], "any", false, false, false, 35), "security"), "html", null, true);
            echo "</div>
                            ";
        }
        // line 37
        echo "                            <div class=\"text-center text-md-center mb-4 mt-md-0\">
                                <h1 class=\"mb-0 h3\">Bienvenue!</h1>
                            </div>
                            <form method=\"post\" class=\"mt-4\">
                                <!-- Form -->
                                <div class=\"form-group mb-4\">
                                    <label for=\"email\">Username</label>
                                    <div class=\"input-group\">
                                        <span class=\"input-group-text\" id=\"basic-addon1\">
                                            <i class=\"fa-solid fa-user\"></i>
                                        </span>
                                        <input type=\"text\" class=\"form-control\" value=\"";
        // line 48
        echo twig_escape_filter($this->env, (isset($context["last_username"]) || array_key_exists("last_username", $context) ? $context["last_username"] : (function () { throw new RuntimeError('Variable "last_username" does not exist.', 48, $this->source); })()), "html", null, true);
        echo "\" name=\"username\" placeholder=\"example@company.com\" id=\"email\" autofocus required>
                                    </div>  
                                </div>
                                <!-- End of Form -->
                                <div class=\"form-group\">
                                    <!-- Form -->
                                    <div class=\"form-group mb-4\">
                                        <label for=\"password\">Password</label>
                                        <div class=\"input-group\">
                                            <span class=\"input-group-text\" id=\"basic-addon2\">
                                                <svg class=\"icon icon-xs text-gray-600\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z\" clip-rule=\"evenodd\"></path></svg>
                                            </span>
                                            <input type=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" id=\"password\" required>
                                        </div>  
                                    </div>
                                    <!-- End of Form -->
                                    
                                </div>
                                <div class=\"d-grid\">
                                    <button type=\"submit\" class=\"btn btn-gray-800\">Login</button>
                                </div>

                                <div class=\"text-center mt-4\">
                                        ";
        // line 77
        echo "                                        <div><a href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_register");
        echo "\">Créer un compte ?</a></div>
                                    </div>
                                 <input type=\"hidden\" name=\"_csrf_token\"
                                    value=\"";
        // line 80
        echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken("authenticate"), "html", null, true);
        echo "\"
                                >
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
        return "security/login.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  197 => 13,  187 => 12,  174 => 9,  164 => 8,  136 => 80,  129 => 77,  103 => 48,  90 => 37,  84 => 35,  82 => 34,  61 => 15,  59 => 12,  56 => 11,  54 => 8,  45 => 1,);
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
                            {% if error %}
                                <div class=\"alert alert-danger\">{{ error.messageKey|trans(error.messageData, 'security') }}</div>
                            {% endif %}
                            <div class=\"text-center text-md-center mb-4 mt-md-0\">
                                <h1 class=\"mb-0 h3\">Bienvenue!</h1>
                            </div>
                            <form method=\"post\" class=\"mt-4\">
                                <!-- Form -->
                                <div class=\"form-group mb-4\">
                                    <label for=\"email\">Username</label>
                                    <div class=\"input-group\">
                                        <span class=\"input-group-text\" id=\"basic-addon1\">
                                            <i class=\"fa-solid fa-user\"></i>
                                        </span>
                                        <input type=\"text\" class=\"form-control\" value=\"{{ last_username }}\" name=\"username\" placeholder=\"example@company.com\" id=\"email\" autofocus required>
                                    </div>  
                                </div>
                                <!-- End of Form -->
                                <div class=\"form-group\">
                                    <!-- Form -->
                                    <div class=\"form-group mb-4\">
                                        <label for=\"password\">Password</label>
                                        <div class=\"input-group\">
                                            <span class=\"input-group-text\" id=\"basic-addon2\">
                                                <svg class=\"icon icon-xs text-gray-600\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z\" clip-rule=\"evenodd\"></path></svg>
                                            </span>
                                            <input type=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" id=\"password\" required>
                                        </div>  
                                    </div>
                                    <!-- End of Form -->
                                    
                                </div>
                                <div class=\"d-grid\">
                                    <button type=\"submit\" class=\"btn btn-gray-800\">Login</button>
                                </div>

                                <div class=\"text-center mt-4\">
                                        {# <div class=\"form-check\">
                                            <input class=\"form-check-input\" name=\"_remember_me\" type=\"checkbox\" value=\"\" id=\"remember\">
                                            <label class=\"form-check-label mb-0\" for=\"remember\">
                                              Remember me
                                            </label>
                                        </div> #}
                                        <div><a href=\"{{path('app_register')}}\">Créer un compte ?</a></div>
                                    </div>
                                 <input type=\"hidden\" name=\"_csrf_token\"
                                    value=\"{{ csrf_token('authenticate') }}\"
                                >
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>



    
</body>

</html>
", "security/login.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\security\\login.html.twig");
    }
}
