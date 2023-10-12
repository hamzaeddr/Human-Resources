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

/* security/register.html.twig */
class __TwigTemplate_55e20090d55f6ef8c20e0a7138f6e235 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/register.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/register.html.twig"));

        // line 1
        echo "
<!DOCTYPE html>
<html lang=\"en\">

<head> 
<title>FCZ - Register</title>
";
        // line 7
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 10
        echo "
";
        // line 11
        $this->displayBlock('javascripts', $context, $blocks);
        // line 15
        echo "

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
                                <h1 class=\"mb-0 h3\">Create Account </h1>
                            </div>
                            <form id=\"register\" method=\"POST\" class=\"mt-4\">
                                <!-- Form -->
                                <div class=\"form-group mb-4\">
                                    <label for=\"email\">Username</label>
                                    <div class=\"input-group\">
                                        <span class=\"input-group-text\" id=\"basic-addon1\">
                                            <i class=\"fa-solid fa-user\"></i>
                                        </span>
                                        <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"p.nom\" id=\"username\" autofocus required>
                                    </div>  
                                </div>
                                <div class=\"form-group mb-4\">
                                    <label for=\"email\">Nom</label>
                                    <div class=\"input-group\">
                                        <span class=\"input-group-text\" id=\"basic-addon1\">
                                            <i class=\"fa-solid fa-user\"></i>
                                        </span>
                                        <input type=\"text\" name=\"nom\" class=\"form-control\" placeholder=\"nom\" id=\"nom\" autofocus required>
                                    </div>  
                                </div>
                                <div class=\"form-group mb-4\">
                                    <label for=\"email\">Prenom</label>
                                    <div class=\"input-group\">
                                        <span class=\"input-group-text\" id=\"basic-addon1\">
                                            <i class=\"fa-solid fa-user\"></i>
                                        </span>
                                        <input type=\"text\" name=\"prenom\" class=\"form-control\" placeholder=\"prenom\" id=\"prenom\" autofocus required>
                                    </div>  
                                </div>
                                <div class=\"form-group mb-4\">
                                    <label for=\"email\">Email</label>
                                    <div class=\"input-group\">
                                        <span class=\"input-group-text\" id=\"basic-addon1\">
                                            <svg class=\"icon icon-xs text-gray-600\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"></path><path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"></path></svg>
                                        </span>
                                        <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"example@company.com\" id=\"email\" autofocus required>
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
                                    <!-- Form -->
                                    <div class=\"form-group mb-4\">
                                        <label for=\"confirm_password\">Confirm Password</label>
                                        <div class=\"input-group\">
                                            <span class=\"input-group-text\" id=\"basic-addon2\">
                                                <svg class=\"icon icon-xs text-gray-600\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z\" clip-rule=\"evenodd\"></path></svg>
                                            </span>
                                            <input type=\"password\" name=\"passwordc\" placeholder=\"Confirm Password\" class=\"form-control\" id=\"confirm_password\" required>
                                        </div>  
                                    </div>
                                    <!-- End of Form -->
                                   
                                </div>
                                <div class=\"d-grid\">
                                    <button type=\"submit\" class=\"btn btn-gray-800\">Sign up</button>
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

    // line 7
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 8
        echo "    ";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("app");
        echo "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 11
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 12
        echo "    ";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("app");
        echo "
    ";
        // line 13
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("security_register");
        echo "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "security/register.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  207 => 13,  202 => 12,  192 => 11,  179 => 8,  169 => 7,  60 => 15,  58 => 11,  55 => 10,  53 => 7,  45 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("
<!DOCTYPE html>
<html lang=\"en\">

<head> 
<title>FCZ - Register</title>
{% block stylesheets %}
    {{ encore_entry_link_tags('app') }}
{% endblock %}

{% block javascripts %}
    {{ encore_entry_script_tags('app') }}
    {{ encore_entry_script_tags('security_register') }}
{% endblock %}


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
                                <h1 class=\"mb-0 h3\">Create Account </h1>
                            </div>
                            <form id=\"register\" method=\"POST\" class=\"mt-4\">
                                <!-- Form -->
                                <div class=\"form-group mb-4\">
                                    <label for=\"email\">Username</label>
                                    <div class=\"input-group\">
                                        <span class=\"input-group-text\" id=\"basic-addon1\">
                                            <i class=\"fa-solid fa-user\"></i>
                                        </span>
                                        <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"p.nom\" id=\"username\" autofocus required>
                                    </div>  
                                </div>
                                <div class=\"form-group mb-4\">
                                    <label for=\"email\">Nom</label>
                                    <div class=\"input-group\">
                                        <span class=\"input-group-text\" id=\"basic-addon1\">
                                            <i class=\"fa-solid fa-user\"></i>
                                        </span>
                                        <input type=\"text\" name=\"nom\" class=\"form-control\" placeholder=\"nom\" id=\"nom\" autofocus required>
                                    </div>  
                                </div>
                                <div class=\"form-group mb-4\">
                                    <label for=\"email\">Prenom</label>
                                    <div class=\"input-group\">
                                        <span class=\"input-group-text\" id=\"basic-addon1\">
                                            <i class=\"fa-solid fa-user\"></i>
                                        </span>
                                        <input type=\"text\" name=\"prenom\" class=\"form-control\" placeholder=\"prenom\" id=\"prenom\" autofocus required>
                                    </div>  
                                </div>
                                <div class=\"form-group mb-4\">
                                    <label for=\"email\">Email</label>
                                    <div class=\"input-group\">
                                        <span class=\"input-group-text\" id=\"basic-addon1\">
                                            <svg class=\"icon icon-xs text-gray-600\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"></path><path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"></path></svg>
                                        </span>
                                        <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"example@company.com\" id=\"email\" autofocus required>
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
                                    <!-- Form -->
                                    <div class=\"form-group mb-4\">
                                        <label for=\"confirm_password\">Confirm Password</label>
                                        <div class=\"input-group\">
                                            <span class=\"input-group-text\" id=\"basic-addon2\">
                                                <svg class=\"icon icon-xs text-gray-600\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z\" clip-rule=\"evenodd\"></path></svg>
                                            </span>
                                            <input type=\"password\" name=\"passwordc\" placeholder=\"Confirm Password\" class=\"form-control\" id=\"confirm_password\" required>
                                        </div>  
                                    </div>
                                    <!-- End of Form -->
                                   
                                </div>
                                <div class=\"d-grid\">
                                    <button type=\"submit\" class=\"btn btn-gray-800\">Sign up</button>
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
", "security/register.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\security\\register.html.twig");
    }
}
