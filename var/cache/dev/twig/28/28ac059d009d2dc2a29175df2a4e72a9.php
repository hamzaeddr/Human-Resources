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

/* paie/bulletin/modals/probleme.html.twig */
class __TwigTemplate_4d1540b196b1fdf3e016504050396034 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "paie/bulletin/modals/probleme.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "paie/bulletin/modals/probleme.html.twig"));

        // line 1
        echo "<style>

#modal_probleme p {
    font-size: 12px !important;
}
\t
</style>
<div class=\"modal right come-from-modal fade\" id=\"modal_probleme\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:40%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Problèmes</h2>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
            </div>
            <div class=\"modal-body\">
            </div>
            <div class=\"modal-footer justify-content-start\" >
                <button type=\"submit\" class=\"btn btn-secondary\" id=\"save_problemes\">Enregistre</button>
                <button type=\"button\" class=\"btn btn-link\" data-bs-dismiss=\"modal\">Fermer</button>
            </div>
        </div>
    </div>
</div>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "paie/bulletin/modals/probleme.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<style>

#modal_probleme p {
    font-size: 12px !important;
}
\t
</style>
<div class=\"modal right come-from-modal fade\" id=\"modal_probleme\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:40%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Problèmes</h2>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
            </div>
            <div class=\"modal-body\">
            </div>
            <div class=\"modal-footer justify-content-start\" >
                <button type=\"submit\" class=\"btn btn-secondary\" id=\"save_problemes\">Enregistre</button>
                <button type=\"button\" class=\"btn btn-link\" data-bs-dismiss=\"modal\">Fermer</button>
            </div>
        </div>
    </div>
</div>", "paie/bulletin/modals/probleme.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\paie\\bulletin\\modals\\probleme.html.twig");
    }
}
