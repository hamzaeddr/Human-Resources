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

/* salarie/gestion_salarie/pages/contrat.html.twig */
class __TwigTemplate_3766246a0c8e8708107532b5dba63911 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/pages/contrat.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/pages/contrat.html.twig"));

        // line 1
        echo "<div class=\"row\">
    <div class=\"col-md-4 mb-2\">
        <label for=\"nature_contrat\">Nature Contrat (*)</label>
        <select class=\"select nature_contrat nature_contrat\" name=\"nature_contrat\"   required >
          <option value=\"\" selected>Choix Nature Contract</option>
            ";
        // line 6
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["naturecontract"]) || array_key_exists("naturecontract", $context) ? $context["naturecontract"] : (function () { throw new RuntimeError('Variable "naturecontract" does not exist.', 6, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["contract"]) {
            // line 7
            echo "                <option id=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "id", [], "any", false, false, false, 7), "html", null, true);
            echo "\"  value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "id", [], "any", false, false, false, 7), "html", null, true);
            echo "\" data-attr =\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "type", [], "any", false, false, false, 7), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["contract"], "designation", [], "any", false, false, false, 7), "html", null, true);
            echo "</option>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['contract'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 9
        echo "                
        </select>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"duree_contrat\">Durée contrat (*)</label>
        <select class=\"select duree_contrat\" name=\"duree_contrat\"  required>
           
        </select>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"date_contrat\">Date contrat (*)</label>
        <input type=\"date\" name=\"date_contrat\" class=\"form-control date_contrat\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"date_contrat\">Date Fin (*)</label>
        <input type=\"date\" name=\"date_fin\" class=\"form-control date_fin\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"affectation\">Affectation (*)</label>
        
        <select class=\"select affectation\" name=\"affectation\" >
            ";
        // line 31
        echo "            ";
        // line 32
        echo "                <option value=\"";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 32, $this->source); })()), "session", [], "any", false, false, false, 32), "get", [0 => "dossier"], "method", false, false, false, 32), "id", [], "any", false, false, false, 32), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 32, $this->source); })()), "session", [], "any", false, false, false, 32), "get", [0 => "dossier"], "method", false, false, false, 32), "abreviation", [], "any", false, false, false, 32), "html", null, true);
        echo "</option selected>
            ";
        // line 34
        echo "        </select>
    </div>
    ";
        // line 42
        echo "    <div class=\"col-md-4 mb-2\">
        <label for=\"profil\">Profil (*)</label>
        <select class=\"select profil\" name=\"profil\"  required>
    <option value=\"\"></option>
    <option value=\"AutoEntrepreneur\">AutoEntrepreneur</option>
    <option value=\"<=Bac\"><=Bac</option>
    <option value=\"Bac+2\">Bac+2</option>
    <option value=\"bac+6\">bac+6</option>
    <option value=\"Bac+3\">Bac+3</option>
    <option value=\"Bac+4\">Bac+4</option>
    <option value=\"Bac+5\">Bac+5</option>
    <option value=\"Bac+6 et plus\">Bac+6 et plus</option>
    <option value=\"Hors Grille\">Hors Grille</option>
    <option value=\"Santé-Métiers\">Santé-Métiers</option>
    <option value=\"Stagiaire\">Stagiaire</option>
    <option value=\"Stagiaire_interne\">Stagiaire_interne</option>
                
        </select>
    </div>

    <div class=\"col-md-4 mb-2\">
        <label for=\"bareme\">Baréme (*)</label>
        <select class=\"select bareme\" name=\"bareme\"  required>
          <option value=\"\" selected>Choix Baréme</option>
            ";
        // line 66
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["baremes"]) || array_key_exists("baremes", $context) ? $context["baremes"] : (function () { throw new RuntimeError('Variable "baremes" does not exist.', 66, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["bareme"]) {
            // line 67
            echo "                <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["bareme"], "id", [], "any", false, false, false, 67), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["bareme"], "profil", [], "any", false, false, false, 67), "html", null, true);
            echo "</option>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['bareme'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 69
        echo "                
        </select>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"fonction\">Fonction (*)</label>
        <select class=\"select fonction\" name=\"fonction\"  required>
            <option value=\"\" selected>Choix fonction</option>
            ";
        // line 76
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["fonctions"]) || array_key_exists("fonctions", $context) ? $context["fonctions"] : (function () { throw new RuntimeError('Variable "fonctions" does not exist.', 76, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["fonction"]) {
            // line 77
            echo "                <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["fonction"], "id", [], "any", false, false, false, 77), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["fonction"], "designation", [], "any", false, false, false, 77), "html", null, true);
            echo "</option>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['fonction'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 79
        echo "        </select>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"salaire_grille\">Salaire Grille: </label>
        <input readonly type=\"number\"  name=\"salaire_grille\"  class=\"form-control salaire_grille\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"salaire_affecte\">Salaire Affecté: </label>
        <input type=\"number\" name=\"salaire_affecte\" id=\"salaire_affecte\" class=\"form-control salaire_affecte\" required>
    </div>
    
    <div class=\"col-md-4 mb-2\">
        <label for=\"ppc\">PPC (*)</label>
        <input  type=\"number\" name=\"ppc\" id=\"ppc\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"rpc\">RPC (*)</label>
        <input  type=\"number\" name=\"rpc\" id=\"rpc\" class=\"form-control\">
    </div>
    
</div>

 <br>
 <hr>

 <button type=\"submit\" class=\"btn btn-secondary\" id=\"cntc_btn\" style=\"float:right;\" form=\"new_contract\">Suivant</button>
";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "salarie/gestion_salarie/pages/contrat.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  170 => 79,  159 => 77,  155 => 76,  146 => 69,  135 => 67,  131 => 66,  105 => 42,  101 => 34,  94 => 32,  92 => 31,  69 => 9,  54 => 7,  50 => 6,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"row\">
    <div class=\"col-md-4 mb-2\">
        <label for=\"nature_contrat\">Nature Contrat (*)</label>
        <select class=\"select nature_contrat nature_contrat\" name=\"nature_contrat\"   required >
          <option value=\"\" selected>Choix Nature Contract</option>
            {% for contract in naturecontract %}
                <option id=\"{{contract.id}}\"  value=\"{{contract.id}}\" data-attr =\"{{contract.type}}\">{{contract.designation}}</option>
            {% endfor %}
                
        </select>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"duree_contrat\">Durée contrat (*)</label>
        <select class=\"select duree_contrat\" name=\"duree_contrat\"  required>
           
        </select>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"date_contrat\">Date contrat (*)</label>
        <input type=\"date\" name=\"date_contrat\" class=\"form-control date_contrat\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"date_contrat\">Date Fin (*)</label>
        <input type=\"date\" name=\"date_fin\" class=\"form-control date_fin\" required>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"affectation\">Affectation (*)</label>
        
        <select class=\"select affectation\" name=\"affectation\" >
            {# <option value=\"\" selected>Choix affectation</option> #}
            {# {% for dossier in app.session.get('dossiers') %} #}
                <option value=\"{{app.session.get('dossier').id}}\">{{app.session.get('dossier').abreviation}}</option selected>
            {# {% endfor %} #}
        </select>
    </div>
    {# <div class=\"col-md-4 mb-2\">
        <label for=\"profile\">Profile (*)</label>
        <select class=\"select profile\" name=\"profile\" id=\"profile\" >
            
        </select>
    </div> #}
    <div class=\"col-md-4 mb-2\">
        <label for=\"profil\">Profil (*)</label>
        <select class=\"select profil\" name=\"profil\"  required>
    <option value=\"\"></option>
    <option value=\"AutoEntrepreneur\">AutoEntrepreneur</option>
    <option value=\"<=Bac\"><=Bac</option>
    <option value=\"Bac+2\">Bac+2</option>
    <option value=\"bac+6\">bac+6</option>
    <option value=\"Bac+3\">Bac+3</option>
    <option value=\"Bac+4\">Bac+4</option>
    <option value=\"Bac+5\">Bac+5</option>
    <option value=\"Bac+6 et plus\">Bac+6 et plus</option>
    <option value=\"Hors Grille\">Hors Grille</option>
    <option value=\"Santé-Métiers\">Santé-Métiers</option>
    <option value=\"Stagiaire\">Stagiaire</option>
    <option value=\"Stagiaire_interne\">Stagiaire_interne</option>
                
        </select>
    </div>

    <div class=\"col-md-4 mb-2\">
        <label for=\"bareme\">Baréme (*)</label>
        <select class=\"select bareme\" name=\"bareme\"  required>
          <option value=\"\" selected>Choix Baréme</option>
            {% for bareme in baremes %}
                <option value=\"{{bareme.id}}\">{{bareme.profil}}</option>
            {% endfor %}
                
        </select>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"fonction\">Fonction (*)</label>
        <select class=\"select fonction\" name=\"fonction\"  required>
            <option value=\"\" selected>Choix fonction</option>
            {% for fonction in fonctions %}
                <option value=\"{{fonction.id}}\">{{fonction.designation}}</option>
            {% endfor %}
        </select>
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"salaire_grille\">Salaire Grille: </label>
        <input readonly type=\"number\"  name=\"salaire_grille\"  class=\"form-control salaire_grille\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"salaire_affecte\">Salaire Affecté: </label>
        <input type=\"number\" name=\"salaire_affecte\" id=\"salaire_affecte\" class=\"form-control salaire_affecte\" required>
    </div>
    
    <div class=\"col-md-4 mb-2\">
        <label for=\"ppc\">PPC (*)</label>
        <input  type=\"number\" name=\"ppc\" id=\"ppc\" class=\"form-control\">
    </div>
    <div class=\"col-md-4 mb-2\">
        <label for=\"rpc\">RPC (*)</label>
        <input  type=\"number\" name=\"rpc\" id=\"rpc\" class=\"form-control\">
    </div>
    
</div>

 <br>
 <hr>

 <button type=\"submit\" class=\"btn btn-secondary\" id=\"cntc_btn\" style=\"float:right;\" form=\"new_contract\">Suivant</button>
", "salarie/gestion_salarie/pages/contrat.html.twig", "C:\\xampp\\htdocs\\SIRH\\templates\\salarie\\gestion_salarie\\pages\\contrat.html.twig");
    }
}
