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

/* salarie/gestion_salarie/pages/plus_info.html.twig */
class __TwigTemplate_b9543fbca85661eb44a5d8501bf39775 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/pages/plus_info.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/pages/plus_info.html.twig"));

        // line 1
        echo "<div class=\"row\">
    <div class=\"col-md-4 mb-2\">
        <label for=\"contact_cas_urgence\">Contact en cas d'urgence</label>
        <input type=\"text\" name=\"contact_cas_urgence\" id=\"contact_cas_urgence\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"prenom_cas_urgence\">Prenom</label>
        <input type=\"text\" name=\"prenom_cas_urgence\" id=\"prenom_cas_urgence\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"nom_cas_urgence\">Nom</label>
        <input type=\"date\" name=\"nom_cas_urgence\" id=\"nom_cas_urgence\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"degre_parente\">Degré de parenté</label>
        <input type=\"text\" name=\"degre_parente\" id=\"degre_parente\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"adresse_cas_urgence\">Adresse</label>
        <input type=\"text\" name=\"adresse_cas_urgence\" id=\"adresse_cas_urgence\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"telephone_cas_urgence\">Téléphone</label>
        <input type=\"text\" name=\"telephone_cas_urgence\" id=\"telephone_cas_urgence\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"ville_cas_urgence\">Ville</label>
        <input type=\"text\" name=\"ville_cas_urgence\" id=\"ville_cas_urgence\" class=\"form-control\">
    </div>
    
    <div class=\"col-md-12 mb-2 mt-2\">
        <h5>Renseignements familiaux</h5>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"prenom_conjoint\">Prenom conjoint(e)</label>
        <input type=\"text\" name=\"prenom_conjoint\" id=\"prenom_conjoint\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"nom_conjoint\">Nom conjoint(e)</label>
        <input type=\"text\" name=\"nom_conjoint\" id=\"nom_conjoint\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"date_naissance_conjoint\">Date de naissance</label>
        <input type=\"date\" name=\"date_naissance_conjoint\" id=\"date_naissance_conjoint\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"fonction_conjoint\">Fonction</label>
        <input type=\"text\" name=\"fonction_conjoint\" id=\"fonction_conjoint\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"etablissement_conjoint\">Etablissement</label>
        <input type=\"text\" name=\"etablissement_conjoint\" id=\"etablissement_conjoint\" class=\"form-control\">
    </div>
    <div class=\"col-md-12 mb-2 mt-2\">
        <h5>Renseignements concernant les parents</h5>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"nom_prenom_pere\">Nom et prenom de père</label>
        <input type=\"text\" name=\"nom_prenom_pere\" id=\"nom_prenom_pere\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"nom_prenom_mere\">Nom et prenom de mére</label>
        <input type=\"text\" name=\"nom_prenom_mere\" id=\"nom_prenom_mere\" class=\"form-control\">
    </div>
</div>


 <br>
 <hr>

 <button type=\"submit\" class=\"btn btn-secondary\" style=\"float:right;\" form=\"new_plus\">Suivant</button>
";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "salarie/gestion_salarie/pages/plus_info.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"row\">
    <div class=\"col-md-4 mb-2\">
        <label for=\"contact_cas_urgence\">Contact en cas d'urgence</label>
        <input type=\"text\" name=\"contact_cas_urgence\" id=\"contact_cas_urgence\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"prenom_cas_urgence\">Prenom</label>
        <input type=\"text\" name=\"prenom_cas_urgence\" id=\"prenom_cas_urgence\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"nom_cas_urgence\">Nom</label>
        <input type=\"date\" name=\"nom_cas_urgence\" id=\"nom_cas_urgence\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"degre_parente\">Degré de parenté</label>
        <input type=\"text\" name=\"degre_parente\" id=\"degre_parente\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"adresse_cas_urgence\">Adresse</label>
        <input type=\"text\" name=\"adresse_cas_urgence\" id=\"adresse_cas_urgence\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"telephone_cas_urgence\">Téléphone</label>
        <input type=\"text\" name=\"telephone_cas_urgence\" id=\"telephone_cas_urgence\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"ville_cas_urgence\">Ville</label>
        <input type=\"text\" name=\"ville_cas_urgence\" id=\"ville_cas_urgence\" class=\"form-control\">
    </div>
    
    <div class=\"col-md-12 mb-2 mt-2\">
        <h5>Renseignements familiaux</h5>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"prenom_conjoint\">Prenom conjoint(e)</label>
        <input type=\"text\" name=\"prenom_conjoint\" id=\"prenom_conjoint\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"nom_conjoint\">Nom conjoint(e)</label>
        <input type=\"text\" name=\"nom_conjoint\" id=\"nom_conjoint\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"date_naissance_conjoint\">Date de naissance</label>
        <input type=\"date\" name=\"date_naissance_conjoint\" id=\"date_naissance_conjoint\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"fonction_conjoint\">Fonction</label>
        <input type=\"text\" name=\"fonction_conjoint\" id=\"fonction_conjoint\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"etablissement_conjoint\">Etablissement</label>
        <input type=\"text\" name=\"etablissement_conjoint\" id=\"etablissement_conjoint\" class=\"form-control\">
    </div>
    <div class=\"col-md-12 mb-2 mt-2\">
        <h5>Renseignements concernant les parents</h5>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"nom_prenom_pere\">Nom et prenom de père</label>
        <input type=\"text\" name=\"nom_prenom_pere\" id=\"nom_prenom_pere\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"nom_prenom_mere\">Nom et prenom de mére</label>
        <input type=\"text\" name=\"nom_prenom_mere\" id=\"nom_prenom_mere\" class=\"form-control\">
    </div>
</div>


 <br>
 <hr>

 <button type=\"submit\" class=\"btn btn-secondary\" style=\"float:right;\" form=\"new_plus\">Suivant</button>
", "salarie/gestion_salarie/pages/plus_info.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\salarie\\gestion_salarie\\pages\\plus_info.html.twig");
    }
}
