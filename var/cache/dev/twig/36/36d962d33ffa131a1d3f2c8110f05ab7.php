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

/* salarie/gestion_salarie/pages/etat_civil.html.twig */
class __TwigTemplate_51ff5c0091177168abddb4c6e0b4688f extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/pages/etat_civil.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/pages/etat_civil.html.twig"));

        // line 1
        echo "<div >
<div class=\"row\">
    <div class=\"col-md-4 mb-2\">
        <label for=\"nom\">Nom (*)</label>
        <input type=\"text\" name=\"nom\" id=\"nom\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"prenom\">Prenom (*)</label>
        <input type=\"text\" name=\"prenom\" id=\"prenom\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"date_naissance\">Né(e) le (*)</label>
        <input type=\"date\" name=\"date_naissance\"  id=\"date_naissance\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"cin\">Lieu de naissance (*)</label>
        <input type=\"text\" name=\"lieu_naissance\" id=\"lieu_naissance\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"cin\">CIN (*)</label>
        <input type=\"text\" name=\"cin\" id=\"cin\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"sexe\">Sexe (*)</label>
        <select class=\"select\" name=\"sexe\"  required>
            <option disabled>Choix sexe</option>
            <option value=\"F\">Féminin</option>
            <option value=\"M\">Masculin</option>
        </select>
    </div>
    ";
        // line 40
        echo "    ";
        // line 47
        echo "    <div class=\"col-md-4 mb-2\">
        <label for=\"situation_familiale\">Situation familiale (*)</label>
        <select class=\"select situation_familiale\" name=\"situation_familiale\"  required>
            <option value=\"\" selected>Choix situation familiale</option>
            ";
        // line 51
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["situationFamiliales"]) || array_key_exists("situationFamiliales", $context) ? $context["situationFamiliales"] : (function () { throw new RuntimeError('Variable "situationFamiliales" does not exist.', 51, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["situationFamiliale"]) {
            // line 52
            echo "                <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["situationFamiliale"], "id", [], "any", false, false, false, 52), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["situationFamiliale"], "designation", [], "any", false, false, false, 52), "html", null, true);
            echo "</option>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['situationFamiliale'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 54
        echo "            
        </select>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"nombre_enfant\">Nombre enfants (*)</label>
        <input type=\"number\" disabled name=\"nombre_enfant\" id=\"nombre_enfant\" class=\"form-control\" required>
        
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"adresse_1\">Adresse 1 (*)</label>
        <input type=\"text\" name=\"adresse_1\" id=\"adresse_1\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"adresse_2\">Adresse 2 </label>
        <input type=\"text\" name=\"adresse_2\" id=\"adresse_2\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"nationalite\">Nationalité (*)</label>
        <input type=\"text\" name=\"nationalite\" id=\"nationalite\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"code_postal\">Code postal </label>
        <input type=\"text\" name=\"code_postal\" id=\"code_postal\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"ville\">Ville (*)</label>
        <input type=\"text\" name=\"ville\" id=\"ville\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"pays\">Pays (*)</label>
        <input type=\"text\" name=\"pays\" id=\"pays\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"telephone_1\">Téléphone 1 (*)</label>
        <input type=\"number\" name=\"telephone_1\" id=\"telephone_1\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"telephone_2\">Téléphone 2 </label>
        <input type=\"number\" name=\"telephone_2\" id=\"telephone_2\" class=\"form-control\" >
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"email\">Email</label>
        <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" >
    </div>
    
</div>
<br>
</hr>

<div class=\"row\">
                <label for=\"nv_diplome\"><h2>Diplome :</h2></label>
            <div class=\"col-md-2 mb-2\">
                <label >Niveau (*)</label>
                <select name=\"nv_diplome\"   class=\"select new_dip\" >
                    <option value=\"\" >Choix Niveau</option>
                        <option value=\"\"></option>
                        <option value=\"niv_bac\">niveau bac</option>
                        <option value=\"bac\"  >bac</option>
                        <option value=\"bac+2\">bac + 2</option>
                        <option value=\"bac+3\">bac + 3</option>
                        <option value=\"bac+4\">bac + 4</option>
                        <option value=\"bac+5\">bac + 5</option>
                        <option value=\"bac+6\">bac + 6</option>
                        <option value=\"bac+7\">bac + 7</option>
                    
                </select>
            </div>

            <div class=\"col-md-3 mb-2\">
                <label for=\"diplome\">Diplome (*)</label>
                <input type=\"text\"  name=\"diplome\" id=\"diplome\" class=\"form-control\">
                
            </div>

            <div class=\"col-md-3 mb-2\">
                <label for=\"designation_diplome\">Description (*)</label>
                <input type=\"text\" name=\"designation_diplome\" id=\"designation_diplome\" class=\"form-control\">
            </div>

            <div class=\"col-md-3 mb-2\">
                <label for=\"designation_diplome\">Ecole (*)</label>
                <input type=\"text\" name=\"Ecole_diplome\" id=\"Ecole_diplome\" class=\"form-control\">
            </div>

            <div class=\"col-md-3 mb-2\" style=\"display: grid;
            width: 0%;\">
                <label for=\"adresse_1\">Ajouter </label>
                <button type=\"button\" class=\"btn btn-gray-800 d-inline-flex align-items-center me-2 add_diplome\">
                    <svg class=\"icon icon-xs me-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6v6m0 0v6m0-6h6m-6 0H6\"></path></svg>
                </button>
            </div>

    </hr>

    <div class=\"col-md-12 my-4\">

            <table class=\"table table-striped table-hover table-bordered table_diplome\" id=\"editable-sample\">
                                    <thead>
                                    <tr>
                                        <th>Niveau</th>
                                        <th>Diplome</th>
                                        <th>Description</th>
                                        <th>Ecole</th>
                                <th>DELETE</th>
                                    </tr>
                                    </thead>
                                    <tbody id=\"body_diplome\">

                                    <tr>
                                    
                                    </tr>
                                    
                                    </tbody>
                                    
                                    </table>
        </div>
</div>



 </div>
 <br>
 <hr>

 <button type=\"submit\" class=\"btn btn-secondary\" style=\"float:right;\" form=\"new_salarie\">Suivant</button>
";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "salarie/gestion_salarie/pages/etat_civil.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  98 => 54,  87 => 52,  83 => 51,  77 => 47,  75 => 40,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div >
<div class=\"row\">
    <div class=\"col-md-4 mb-2\">
        <label for=\"nom\">Nom (*)</label>
        <input type=\"text\" name=\"nom\" id=\"nom\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"prenom\">Prenom (*)</label>
        <input type=\"text\" name=\"prenom\" id=\"prenom\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"date_naissance\">Né(e) le (*)</label>
        <input type=\"date\" name=\"date_naissance\"  id=\"date_naissance\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"cin\">Lieu de naissance (*)</label>
        <input type=\"text\" name=\"lieu_naissance\" id=\"lieu_naissance\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"cin\">CIN (*)</label>
        <input type=\"text\" name=\"cin\" id=\"cin\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"sexe\">Sexe (*)</label>
        <select class=\"select\" name=\"sexe\"  required>
            <option disabled>Choix sexe</option>
            <option value=\"F\">Féminin</option>
            <option value=\"M\">Masculin</option>
        </select>
    </div>
    {# <div class=\"col-md-4 mb-2\">
        <label for=\"nature_salarie\">Nature Salarié (*)</label>
        <select class=\"select nature_salarie\" name=\"nature_salarie\" id=\"nature_salarie\" >
            <option value=\"\" selected>Choix nature salarié</option>
            {% for natureSalarieCab in natureSalarieCabs %}
                <option value=\"{{natureSalarieCab.id}}\">{{natureSalarieCab.Nature}}</option>
            {% endfor %}
        </select>
    </div> #}
    {# <div class=\"col-md-4 mb-2\">
        <label for=\"nature_type\">Nature Type (*)</label>
        <select class=\"select nature_type\" name=\"nature_type\" id=\"nature_type\" >
            <option disabled>Choix nature type</option>
            
        </select>
    </div> #}
    <div class=\"col-md-4 mb-2\">
        <label for=\"situation_familiale\">Situation familiale (*)</label>
        <select class=\"select situation_familiale\" name=\"situation_familiale\"  required>
            <option value=\"\" selected>Choix situation familiale</option>
            {% for situationFamiliale in situationFamiliales %}
                <option value=\"{{situationFamiliale.id}}\">{{situationFamiliale.designation}}</option>
            {% endfor %}
            
        </select>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"nombre_enfant\">Nombre enfants (*)</label>
        <input type=\"number\" disabled name=\"nombre_enfant\" id=\"nombre_enfant\" class=\"form-control\" required>
        
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"adresse_1\">Adresse 1 (*)</label>
        <input type=\"text\" name=\"adresse_1\" id=\"adresse_1\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"adresse_2\">Adresse 2 </label>
        <input type=\"text\" name=\"adresse_2\" id=\"adresse_2\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"nationalite\">Nationalité (*)</label>
        <input type=\"text\" name=\"nationalite\" id=\"nationalite\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"code_postal\">Code postal </label>
        <input type=\"text\" name=\"code_postal\" id=\"code_postal\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"ville\">Ville (*)</label>
        <input type=\"text\" name=\"ville\" id=\"ville\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"pays\">Pays (*)</label>
        <input type=\"text\" name=\"pays\" id=\"pays\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"telephone_1\">Téléphone 1 (*)</label>
        <input type=\"number\" name=\"telephone_1\" id=\"telephone_1\" class=\"form-control\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"telephone_2\">Téléphone 2 </label>
        <input type=\"number\" name=\"telephone_2\" id=\"telephone_2\" class=\"form-control\" >
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"email\">Email</label>
        <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" >
    </div>
    
</div>
<br>
</hr>

<div class=\"row\">
                <label for=\"nv_diplome\"><h2>Diplome :</h2></label>
            <div class=\"col-md-2 mb-2\">
                <label >Niveau (*)</label>
                <select name=\"nv_diplome\"   class=\"select new_dip\" >
                    <option value=\"\" >Choix Niveau</option>
                        <option value=\"\"></option>
                        <option value=\"niv_bac\">niveau bac</option>
                        <option value=\"bac\"  >bac</option>
                        <option value=\"bac+2\">bac + 2</option>
                        <option value=\"bac+3\">bac + 3</option>
                        <option value=\"bac+4\">bac + 4</option>
                        <option value=\"bac+5\">bac + 5</option>
                        <option value=\"bac+6\">bac + 6</option>
                        <option value=\"bac+7\">bac + 7</option>
                    
                </select>
            </div>

            <div class=\"col-md-3 mb-2\">
                <label for=\"diplome\">Diplome (*)</label>
                <input type=\"text\"  name=\"diplome\" id=\"diplome\" class=\"form-control\">
                
            </div>

            <div class=\"col-md-3 mb-2\">
                <label for=\"designation_diplome\">Description (*)</label>
                <input type=\"text\" name=\"designation_diplome\" id=\"designation_diplome\" class=\"form-control\">
            </div>

            <div class=\"col-md-3 mb-2\">
                <label for=\"designation_diplome\">Ecole (*)</label>
                <input type=\"text\" name=\"Ecole_diplome\" id=\"Ecole_diplome\" class=\"form-control\">
            </div>

            <div class=\"col-md-3 mb-2\" style=\"display: grid;
            width: 0%;\">
                <label for=\"adresse_1\">Ajouter </label>
                <button type=\"button\" class=\"btn btn-gray-800 d-inline-flex align-items-center me-2 add_diplome\">
                    <svg class=\"icon icon-xs me-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6v6m0 0v6m0-6h6m-6 0H6\"></path></svg>
                </button>
            </div>

    </hr>

    <div class=\"col-md-12 my-4\">

            <table class=\"table table-striped table-hover table-bordered table_diplome\" id=\"editable-sample\">
                                    <thead>
                                    <tr>
                                        <th>Niveau</th>
                                        <th>Diplome</th>
                                        <th>Description</th>
                                        <th>Ecole</th>
                                <th>DELETE</th>
                                    </tr>
                                    </thead>
                                    <tbody id=\"body_diplome\">

                                    <tr>
                                    
                                    </tr>
                                    
                                    </tbody>
                                    
                                    </table>
        </div>
</div>



 </div>
 <br>
 <hr>

 <button type=\"submit\" class=\"btn btn-secondary\" style=\"float:right;\" form=\"new_salarie\">Suivant</button>
", "salarie/gestion_salarie/pages/etat_civil.html.twig", "C:\\xampp\\htdocs\\SIRH\\templates\\salarie\\gestion_salarie\\pages\\etat_civil.html.twig");
    }
}
