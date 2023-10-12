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

/* parametre/user/modals/modifier.html.twig */
class __TwigTemplate_6043e62115dd0e003ea551e644e67f68 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "parametre/user/modals/modifier.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "parametre/user/modals/modifier.html.twig"));

        // line 1
        echo "<style>
#modifier_modal span {
    font-size: 12px !important;
}
\t
</style>
<div class=\"modal right come-from-modal fade\"  id=\"modifier_modal\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:40%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Modifier User</h2>
                <a type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></a>
            </div>
            <div class=\"modal-body\">
                <div>
                    <h4>Section information</h4>
                </div>

                <hr>
                <div>
                    <h4>Section privilège</h4>
                    <div class=\"row\">
                        <div class=\"col-md-4\">
                            <label class=\"text-size-12\">Dossier:</label>
                            <select required class=\"form-control select dossier_select\" name=\"dossier\">
                                <option value=\"\">Choix dossier</option>
                                ";
        // line 27
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["dossiers"]) || array_key_exists("dossiers", $context) ? $context["dossiers"] : (function () { throw new RuntimeError('Variable "dossiers" does not exist.', 27, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["dossier"]) {
            // line 28
            echo "                                    <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["dossier"], "id", [], "any", false, false, false, 28), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["dossier"], "abreviation", [], "any", false, false, false, 28), "html", null, true);
            echo " - ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["dossier"], "designation", [], "any", false, false, false, 28), "html", null, true);
            echo "</option>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['dossier'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 30
        echo "                            </select>
                        </div>
                    </div>
                        
                    <div class=\"mt-4\">
                        <div class=\"privilege\">
                            <ul>
                                <span><input type=\"checkbox\" class=\"tous\"/> Tous</span>
                                <div class=\"privilege__list\">
                                ";
        // line 39
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["modules"]) || array_key_exists("modules", $context) ? $context["modules"] : (function () { throw new RuntimeError('Variable "modules" does not exist.', 39, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["module"]) {
            // line 40
            echo "                                <li role=\"button\"><h4 class=\"Collapsable modules\"> <input type=\"checkbox\" data-id=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["module"], "id", [], "any", false, false, false, 40), "html", null, true);
            echo "\" class=\"inputModule\" /> ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["module"], "designation", [], "any", false, false, false, 40), "html", null, true);
            echo "</h4>
                                    <ul style=\"display:none\">
                                        ";
            // line 42
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["module"], "sousModules", [], "any", false, false, false, 42));
            foreach ($context['_seq'] as $context["_key"] => $context["sousModule"]) {
                // line 43
                echo "                                        <li role=\"button\">
                                            <span class=\"Collapsable sousModules\" style=\"font-size:14px\"><input type=\"checkbox\" data-module=\"";
                // line 44
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["sousModule"], "id", [], "any", false, false, false, 44), "html", null, true);
                echo "\" class=\"inputSousModule\" /> ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["sousModule"], "designation", [], "any", false, false, false, 44), "html", null, true);
                echo "</span>
                                            <ul style=\"display:none\" class=\"listOfButtons\">
                                                ";
                // line 46
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["sousModule"], "operations", [], "any", false, false, false, 46));
                foreach ($context['_seq'] as $context["_key"] => $context["operation"]) {
                    // line 47
                    echo "                                                    <li role=\"button\" for=\"operation-";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "id", [], "any", false, false, false, 47), "html", null, true);
                    echo "\">  <span  class=\"Collapsable buttons\"> <input type=\"checkbox\" id=\"operation-";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "id", [], "any", false, false, false, 47), "html", null, true);
                    echo "\" class=\"";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "id", [], "any", false, false, false, 47), "html", null, true);
                    echo " inputOperation\" data-operation=\"";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "id", [], "any", false, false, false, 47), "html", null, true);
                    echo "\" /> ";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["operation"], "designation", [], "any", false, false, false, 47), "html", null, true);
                    echo "</span></li>
                                                ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['operation'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 49
                echo "                                            </ul>
                                        </li>
                                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['sousModule'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 52
            echo "
                                    </ul>
                                </li>
                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['module'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 56
        echo "                                </div>
                                
                            </ul>
                        </div>
                    
                    </div>
                </div>



                
            </div>
            
        </div>
    </div>
</div>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "parametre/user/modals/modifier.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  163 => 56,  154 => 52,  146 => 49,  129 => 47,  125 => 46,  118 => 44,  115 => 43,  111 => 42,  103 => 40,  99 => 39,  88 => 30,  75 => 28,  71 => 27,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<style>
#modifier_modal span {
    font-size: 12px !important;
}
\t
</style>
<div class=\"modal right come-from-modal fade\"  id=\"modifier_modal\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:40%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Modifier User</h2>
                <a type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></a>
            </div>
            <div class=\"modal-body\">
                <div>
                    <h4>Section information</h4>
                </div>

                <hr>
                <div>
                    <h4>Section privilège</h4>
                    <div class=\"row\">
                        <div class=\"col-md-4\">
                            <label class=\"text-size-12\">Dossier:</label>
                            <select required class=\"form-control select dossier_select\" name=\"dossier\">
                                <option value=\"\">Choix dossier</option>
                                {% for dossier in dossiers %}
                                    <option value=\"{{dossier.id}}\">{{dossier.abreviation}} - {{dossier.designation}}</option>
                                {% endfor %}
                            </select>
                        </div>
                    </div>
                        
                    <div class=\"mt-4\">
                        <div class=\"privilege\">
                            <ul>
                                <span><input type=\"checkbox\" class=\"tous\"/> Tous</span>
                                <div class=\"privilege__list\">
                                {% for module in modules %}
                                <li role=\"button\"><h4 class=\"Collapsable modules\"> <input type=\"checkbox\" data-id=\"{{module.id}}\" class=\"inputModule\" /> {{module.designation}}</h4>
                                    <ul style=\"display:none\">
                                        {% for sousModule in module.sousModules %}
                                        <li role=\"button\">
                                            <span class=\"Collapsable sousModules\" style=\"font-size:14px\"><input type=\"checkbox\" data-module=\"{{sousModule.id}}\" class=\"inputSousModule\" /> {{sousModule.designation}}</span>
                                            <ul style=\"display:none\" class=\"listOfButtons\">
                                                {% for operation in sousModule.operations %}
                                                    <li role=\"button\" for=\"operation-{{operation.id}}\">  <span  class=\"Collapsable buttons\"> <input type=\"checkbox\" id=\"operation-{{operation.id}}\" class=\"{{operation.id}} inputOperation\" data-operation=\"{{operation.id}}\" /> {{operation.designation}}</span></li>
                                                {% endfor %}
                                            </ul>
                                        </li>
                                        {% endfor %}

                                    </ul>
                                </li>
                                {% endfor %}
                                </div>
                                
                            </ul>
                        </div>
                    
                    </div>
                </div>



                
            </div>
            
        </div>
    </div>
</div>", "parametre/user/modals/modifier.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\parametre\\user\\modals\\modifier.html.twig");
    }
}
