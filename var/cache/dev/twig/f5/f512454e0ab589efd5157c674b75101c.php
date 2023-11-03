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

/* includes/sidebar.html.twig */
class __TwigTemplate_a35370fd0ffc47ea422bf1f05ee7882e extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "includes/sidebar.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "includes/sidebar.html.twig"));

        // line 1
        $context["getCurrentUrl"] = twig_get_attribute($this->env, $this->source, twig_split_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 1, $this->source); })()), "request", [], "any", false, false, false, 1), "pathinfo", [], "any", false, false, false, 1), "/"), 1, [], "array", false, false, false, 1);
        // line 2
        $context["secondCurrentUrl"] = twig_get_attribute($this->env, $this->source, twig_split_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 2, $this->source); })()), "request", [], "any", false, false, false, 2), "pathinfo", [], "any", false, false, false, 2), "/"), 2, [], "array", false, false, false, 2);
        // line 3
        echo "<nav id=\"sidebarMenu\" class=\"sidebar d-lg-block bg-gray-800 text-white collapse\" data-simplebar>
  <div class=\"sidebar-inner px-4 pt-3\">
    
    <ul class=\"nav flex-column pt-3 pt-md-0\">
      <li class=\"mb-5\">
        <a href=\"#\" class=\"nav-link d-flex align-items-center\">
          <span class=\"sidebar-icon\">
            <img src=\"";
        // line 10
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("assets/images/avatar-1.png"), "html", null, true);
        echo "\" height=\"20\" width=\"20\" alt=\"Volt Logo\">
          </span>
          <span class=\"mt-1 ms-1 sidebar-text\">FCZ - RH</span>
        </a>
      </li>
      
      
      ";
        // line 17
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 17, $this->source); })()), "session", [], "any", false, false, false, 17), "get", [0 => "modules"], "method", false, false, false, 17));
        foreach ($context['_seq'] as $context["_key"] => $context["module"]) {
            // line 18
            echo "      <li class=\"nav-item ";
            if (((isset($context["getCurrentUrl"]) || array_key_exists("getCurrentUrl", $context) ? $context["getCurrentUrl"] : (function () { throw new RuntimeError('Variable "getCurrentUrl" does not exist.', 18, $this->source); })()) == twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["module"], "module", [], "any", false, false, false, 18), "prefix", [], "any", false, false, false, 18))) {
                echo " active ";
            }
            echo "\">
        <span
          class=\"nav-link  collapsed  d-flex justify-content-between align-items-center\"
          data-bs-toggle=\"collapse\" data-bs-target=\"#";
            // line 21
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["module"], "module", [], "any", false, false, false, 21), "prefix", [], "any", false, false, false, 21), "html", null, true);
            echo "\" ";
            if (((isset($context["getCurrentUrl"]) || array_key_exists("getCurrentUrl", $context) ? $context["getCurrentUrl"] : (function () { throw new RuntimeError('Variable "getCurrentUrl" does not exist.', 21, $this->source); })()) == twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["module"], "module", [], "any", false, false, false, 21), "prefix", [], "any", false, false, false, 21))) {
                echo " aria-expanded=\"true\" ";
            }
            echo ">
          <span>
            <span class=\"sidebar-icon\">
              <i class=\"icon icon-xs me-2 ";
            // line 24
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["module"], "module", [], "any", false, false, false, 24), "icon", [], "any", false, false, false, 24), "html", null, true);
            echo "\"></i>
              ";
            // line 26
            echo "            </span> 
            <span class=\"sidebar-text\">";
            // line 27
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["module"], "module", [], "any", false, false, false, 27), "designation", [], "any", false, false, false, 27), "html", null, true);
            echo "</span>
          </span>
          <span class=\"link-arrow\">
            <svg class=\"icon icon-sm\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"></path></svg>
          </span>
        </span>
        <div class=\"multi-level collapse ";
            // line 33
            if (((isset($context["getCurrentUrl"]) || array_key_exists("getCurrentUrl", $context) ? $context["getCurrentUrl"] : (function () { throw new RuntimeError('Variable "getCurrentUrl" does not exist.', 33, $this->source); })()) == twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["module"], "module", [], "any", false, false, false, 33), "prefix", [], "any", false, false, false, 33))) {
                echo " show ";
            }
            echo " \" role=\"list\"
          id=\"";
            // line 34
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["module"], "module", [], "any", false, false, false, 34), "prefix", [], "any", false, false, false, 34), "html", null, true);
            echo "\" aria-expanded=\"false\">
          <ul class=\"flex-column nav\">
            ";
            // line 36
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["module"], "sousModule", [], "any", false, false, false, 36));
            foreach ($context['_seq'] as $context["_key"] => $context["sousModule"]) {
                // line 37
                echo "            <li class=\"nav-item  ";
                if ((((isset($context["getCurrentUrl"]) || array_key_exists("getCurrentUrl", $context) ? $context["getCurrentUrl"] : (function () { throw new RuntimeError('Variable "getCurrentUrl" does not exist.', 37, $this->source); })()) == twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["module"], "module", [], "any", false, false, false, 37), "prefix", [], "any", false, false, false, 37)) && ((isset($context["secondCurrentUrl"]) || array_key_exists("secondCurrentUrl", $context) ? $context["secondCurrentUrl"] : (function () { throw new RuntimeError('Variable "secondCurrentUrl" does not exist.', 37, $this->source); })()) == twig_get_attribute($this->env, $this->source, $context["sousModule"], "prefix", [], "any", false, false, false, 37)))) {
                    echo " activeSecondUrl ";
                }
                echo "\">
              <a class=\"nav-link\" href=\"";
                // line 38
                echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath(twig_get_attribute($this->env, $this->source, $context["sousModule"], "link", [], "any", false, false, false, 38));
                echo "\">
                <span class=\"sidebar-text\">";
                // line 39
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["sousModule"], "designation", [], "any", false, false, false, 39), "html", null, true);
                echo "</span>
              </a>
            </li>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['sousModule'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 43
            echo "          </ul>
        </div>
      </li>
      ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['module'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 47
        echo "     
      
    </ul>
  </div>
</nav>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "includes/sidebar.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  150 => 47,  141 => 43,  131 => 39,  127 => 38,  120 => 37,  116 => 36,  111 => 34,  105 => 33,  96 => 27,  93 => 26,  89 => 24,  79 => 21,  70 => 18,  66 => 17,  56 => 10,  47 => 3,  45 => 2,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{%set getCurrentUrl = app.request.pathinfo|split('/')[1]%}
{%set secondCurrentUrl = app.request.pathinfo|split('/')[2]%}
<nav id=\"sidebarMenu\" class=\"sidebar d-lg-block bg-gray-800 text-white collapse\" data-simplebar>
  <div class=\"sidebar-inner px-4 pt-3\">
    
    <ul class=\"nav flex-column pt-3 pt-md-0\">
      <li class=\"mb-5\">
        <a href=\"#\" class=\"nav-link d-flex align-items-center\">
          <span class=\"sidebar-icon\">
            <img src=\"{{asset('assets/images/avatar-1.png')}}\" height=\"20\" width=\"20\" alt=\"Volt Logo\">
          </span>
          <span class=\"mt-1 ms-1 sidebar-text\">FCZ - RH</span>
        </a>
      </li>
      
      
      {% for module in app.session.get('modules') %}
      <li class=\"nav-item {% if getCurrentUrl == module.module.prefix %} active {% endif %}\">
        <span
          class=\"nav-link  collapsed  d-flex justify-content-between align-items-center\"
          data-bs-toggle=\"collapse\" data-bs-target=\"#{{module.module.prefix}}\" {% if getCurrentUrl == module.module.prefix %} aria-expanded=\"true\" {% endif %}>
          <span>
            <span class=\"sidebar-icon\">
              <i class=\"icon icon-xs me-2 {{module.module.icon}}\"></i>
              {# <svg class=\"icon icon-xs me-2\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z\" clip-rule=\"evenodd\"></path><path d=\"M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z\"></path></svg> #}
            </span> 
            <span class=\"sidebar-text\">{{module.module.designation}}</span>
          </span>
          <span class=\"link-arrow\">
            <svg class=\"icon icon-sm\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"></path></svg>
          </span>
        </span>
        <div class=\"multi-level collapse {% if getCurrentUrl == module.module.prefix %} show {% endif %} \" role=\"list\"
          id=\"{{module.module.prefix}}\" aria-expanded=\"false\">
          <ul class=\"flex-column nav\">
            {% for sousModule in module.sousModule %}
            <li class=\"nav-item  {% if getCurrentUrl == module.module.prefix and secondCurrentUrl == sousModule.prefix %} activeSecondUrl {% endif %}\">
              <a class=\"nav-link\" href=\"{{path(sousModule.link)}}\">
                <span class=\"sidebar-text\">{{sousModule.designation}}</span>
              </a>
            </li>
            {% endfor %}
          </ul>
        </div>
      </li>
      {% endfor %}
     
      
    </ul>
  </div>
</nav>", "includes/sidebar.html.twig", "C:\\xampp\\htdocs\\SIRH\\templates\\includes\\sidebar.html.twig");
    }
}
