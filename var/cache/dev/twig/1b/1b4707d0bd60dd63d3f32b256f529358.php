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

/* salarie/gestion_salarie/pages/cnss_rib.html.twig */
class __TwigTemplate_c6b8f5486ab86416bb55826df8b7a05a extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/pages/cnss_rib.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/pages/cnss_rib.html.twig"));

        // line 1
        echo "<div class=\"row\">
    <div class=\"col-md-3 mb-2\">
        <label for=\"cnss\">CNSS (*)</label>
        <input type=\"text\"  name=\"cnss\" id=\"cnss\" class=\"form-control type_cnss\">
    </div>
    <div class=\"col-md-3 mb-2\">
        <label for=\"date_declaration_cnss\">Date déclaration cnss (*)</label>
        <input type=\"date\"  name=\"date_declaration_cnss\" id=\"date_declaration_cnss\" class=\"form-control type_cnss\">
    </div>
    <div class=\"col-md-3 mb-2\">
        <label for=\"cimr\">CIMR (*)</label>
        <input type=\"text\"  name=\"cimr\" id=\"cimr\" class=\"form-control type_cnss\">
    </div>
    <div class=\"col-md-3 mb-2\">
        <label for=\"date_declaration_cimr\">Date déclaration CIMR (*)</label>
        <input type=\"date\"  name=\"date_declaration_cimr\" id=\"date_declaration_cimr\" class=\"form-control type_cnss\">
    </div>
    <div class=\"col-md-3 mb-2\" style=\"position:relative\">
        <label for=\"rib\">RIB (*)</label>
        <input type=\"number\"  name=\"rib\" id=\"rib\" class=\"form-control\">
        <i class=\"fas fa-circle-check checkClass\"></i>
    </div>
    <div class=\"col-md-4 mb-2\">
        
    </div>    
</div>

 <br>
 <hr>

 <button type=\"submit\"  class=\"btn btn-secondary\" id=\"cnss_btn\" style=\"float:right;\" form=\"new_cnss\">Suivant</button>
";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "salarie/gestion_salarie/pages/cnss_rib.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"row\">
    <div class=\"col-md-3 mb-2\">
        <label for=\"cnss\">CNSS (*)</label>
        <input type=\"text\"  name=\"cnss\" id=\"cnss\" class=\"form-control type_cnss\">
    </div>
    <div class=\"col-md-3 mb-2\">
        <label for=\"date_declaration_cnss\">Date déclaration cnss (*)</label>
        <input type=\"date\"  name=\"date_declaration_cnss\" id=\"date_declaration_cnss\" class=\"form-control type_cnss\">
    </div>
    <div class=\"col-md-3 mb-2\">
        <label for=\"cimr\">CIMR (*)</label>
        <input type=\"text\"  name=\"cimr\" id=\"cimr\" class=\"form-control type_cnss\">
    </div>
    <div class=\"col-md-3 mb-2\">
        <label for=\"date_declaration_cimr\">Date déclaration CIMR (*)</label>
        <input type=\"date\"  name=\"date_declaration_cimr\" id=\"date_declaration_cimr\" class=\"form-control type_cnss\">
    </div>
    <div class=\"col-md-3 mb-2\" style=\"position:relative\">
        <label for=\"rib\">RIB (*)</label>
        <input type=\"number\"  name=\"rib\" id=\"rib\" class=\"form-control\">
        <i class=\"fas fa-circle-check checkClass\"></i>
    </div>
    <div class=\"col-md-4 mb-2\">
        
    </div>    
</div>

 <br>
 <hr>

 <button type=\"submit\"  class=\"btn btn-secondary\" id=\"cnss_btn\" style=\"float:right;\" form=\"new_cnss\">Suivant</button>
", "salarie/gestion_salarie/pages/cnss_rib.html.twig", "C:\\xampp\\htdocs\\SIRH\\templates\\salarie\\gestion_salarie\\pages\\cnss_rib.html.twig");
    }
}
