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

/* salarie/gestion_salarie/index.html.twig */
class __TwigTemplate_ac42d8ae813a03096c9365080ff31892 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "salarie/gestion_salarie/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "salarie/gestion_salarie/index.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "RH - Gestion des salaries";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "  ";
        // line 7
        echo "    <style>
         /* Add custom row colors */
        ";
        // line 12
        echo "
        /* Style contract icons */
        .checked-icon {
            color: green;
        }

        .unchecked-icon {
            color: red;
        }

        /* Centered vertical alignment for contract icons */
        ";
        // line 27
        echo "
        /* Style text in specific columns */
        ";
        // line 38
        echo "       
</style>
";
        // line 41
        echo "    ";
        $this->loadTemplate("includes/actions.html.twig", "salarie/gestion_salarie/index.html.twig", 41)->display($context);
        // line 42
        echo "        <div class=\"col-12 mb-4\">
            <div class=\"card  border-0 shadow\">
                <div class=\"card-body p-2 m-2\">
                  
                    <table id=\"example\" class=\"table table-bordered table-striped\" style=\"width:100%\">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Matricule</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>CIN</th>
                            <th>Contract</th>
                            <th>Nature contrat</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>

            </div>
        </div>
    </div>
";
        // line 68
        echo "


    ";
        // line 72
        echo "<div class=\"modal right come-from-modal fade\" id=\"contractModal\"  role=\"dialog\" aria-labelledby=\"contractModalLabel\" style=\"display: none;\" aria-hidden=\"true\">

    <div class=\"modal-dialog\" role=\"document\" style=\"width:40%;max-width:1000px !important\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\" id=\"contractModalLabel\">Detail contrats </h5>
                
                <a type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" data-dismiss=\"modal\" aria-label=\"Close\"></a>

            </div>
            <div class=\"modal-body\">
                <table class=\"table table-bordered table-striped\" id=\"contrat_list_details\">
                    <thead>
                        <tr>
                            <th>Contrat</th>
                            <th>Nature contrat</th>
                            <th>Type contract</th>
                            <th width=\"20%\"></th>
                        </tr>
                    </thead>
                    <tbody id=\"contract_body\">
                     
                    </tbody>
                </table>
            </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary contractdetbtn\" data-dismiss=\"modal\">Close</button>
            </div>
        </div>
    </div>
</div>

    ";
        // line 104
        $this->loadTemplate("salarie/gestion_salarie/modals/ajouter.html.twig", "salarie/gestion_salarie/index.html.twig", 104)->display($context);
        // line 105
        echo "    ";
        $this->loadTemplate("salarie/gestion_salarie/modals/modifier.html.twig", "salarie/gestion_salarie/index.html.twig", 105)->display($context);
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 108
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 109
        echo "    ";
        $this->displayParentBlock("javascripts", $context, $blocks);
        echo "
    

    <script>
  
</script>
    ";
        // line 115
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("salarie_salarie");
        echo "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "salarie/gestion_salarie/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  218 => 115,  208 => 109,  198 => 108,  187 => 105,  185 => 104,  151 => 72,  146 => 68,  119 => 42,  116 => 41,  112 => 38,  108 => 27,  95 => 12,  91 => 7,  89 => 6,  79 => 5,  60 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}RH - Gestion des salaries{% endblock %}

{% block body %}
  {# <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\"> #}
    <style>
         /* Add custom row colors */
        {# .table tbody tr:nth-child(odd) {
            background-color: #f2f2f2;
        } #}

        /* Style contract icons */
        .checked-icon {
            color: green;
        }

        .unchecked-icon {
            color: red;
        }

        /* Centered vertical alignment for contract icons */
        {# .contract-cell {
            display: flex;
            align-items: center;
        } #}

        /* Style text in specific columns */
        {# .table td:nth-child(4) {
            font-weight: bold;
            color: blue;
        }

        .table td:nth-child(5) {
            font-style: italic;
            color: purple;
        } #}
       
</style>
{# //////////////////////////////////////////// #}
    {% include 'includes/actions.html.twig' %}
        <div class=\"col-12 mb-4\">
            <div class=\"card  border-0 shadow\">
                <div class=\"card-body p-2 m-2\">
                  
                    <table id=\"example\" class=\"table table-bordered table-striped\" style=\"width:100%\">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Matricule</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>CIN</th>
                            <th>Contract</th>
                            <th>Nature contrat</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>

            </div>
        </div>
    </div>
{# //////////////////////////////////////////// #}



    {# {% include 'salarie/gestion_salarie/modals/contract_detail.html.twig' %} #}
<div class=\"modal right come-from-modal fade\" id=\"contractModal\"  role=\"dialog\" aria-labelledby=\"contractModalLabel\" style=\"display: none;\" aria-hidden=\"true\">

    <div class=\"modal-dialog\" role=\"document\" style=\"width:40%;max-width:1000px !important\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\" id=\"contractModalLabel\">Detail contrats </h5>
                
                <a type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" data-dismiss=\"modal\" aria-label=\"Close\"></a>

            </div>
            <div class=\"modal-body\">
                <table class=\"table table-bordered table-striped\" id=\"contrat_list_details\">
                    <thead>
                        <tr>
                            <th>Contrat</th>
                            <th>Nature contrat</th>
                            <th>Type contract</th>
                            <th width=\"20%\"></th>
                        </tr>
                    </thead>
                    <tbody id=\"contract_body\">
                     
                    </tbody>
                </table>
            </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary contractdetbtn\" data-dismiss=\"modal\">Close</button>
            </div>
        </div>
    </div>
</div>

    {% include 'salarie/gestion_salarie/modals/ajouter.html.twig' %}
    {% include 'salarie/gestion_salarie/modals/modifier.html.twig' %}
{% endblock %}

{% block javascripts %}
    {{parent()}}
    

    <script>
  
</script>
    {{ encore_entry_script_tags('salarie_salarie') }}
{% endblock %}
", "salarie/gestion_salarie/index.html.twig", "C:\\xampp\\htdocs\\SIRH\\templates\\salarie\\gestion_salarie\\index.html.twig");
    }
}
