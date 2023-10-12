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

/* includes/404.html.twig */
class __TwigTemplate_5407881fbc944c5d62c8845ffdfd3a22 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "includes/404.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "includes/404.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
<head>
<title>Access Denied</title>
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>
<meta charset=\"UTF-8\">
<link rel=\"stylesheet\" href=\"style.css\">
<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">
<style>
    body{
background-color: black;
color: white;
}

h1 {
color: red;
}

h6{
color: red;
text-decoration: underline;
}
</style>
</head>
<body>
<div class=\"w3-display-middle\">
<h1 class=\"w3-jumbo w3-animate-top w3-center\"><code>Access Denied</code></h1>
<hr class=\"w3-border-white w3-animate-left\" style=\"margin:auto;width:50%\">
<h3 class=\"w3-center w3-animate-right\">Vous n'êtes pas autorisé à consulter cette page.</h3>
<h3 class=\"w3-center w3-animate-zoom\">🚫🚫🚫🚫</h3>
<h6 class=\"w3-center w3-animate-zoom\"><a href=\"";
        // line 31
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_site");
        echo "\">Page d'accueil</a></h6>
</div>
</body>
</html>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "includes/404.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  75 => 31,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html>
<head>
<title>Access Denied</title>
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>
<meta charset=\"UTF-8\">
<link rel=\"stylesheet\" href=\"style.css\">
<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">
<style>
    body{
background-color: black;
color: white;
}

h1 {
color: red;
}

h6{
color: red;
text-decoration: underline;
}
</style>
</head>
<body>
<div class=\"w3-display-middle\">
<h1 class=\"w3-jumbo w3-animate-top w3-center\"><code>Access Denied</code></h1>
<hr class=\"w3-border-white w3-animate-left\" style=\"margin:auto;width:50%\">
<h3 class=\"w3-center w3-animate-right\">Vous n'êtes pas autorisé à consulter cette page.</h3>
<h3 class=\"w3-center w3-animate-zoom\">🚫🚫🚫🚫</h3>
<h6 class=\"w3-center w3-animate-zoom\"><a href=\"{{path('app_site')}}\">Page d'accueil</a></h6>
</div>
</body>
</html>", "includes/404.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\includes\\404.html.twig");
    }
}
