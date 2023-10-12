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

/* includes/navbar.html.twig */
class __TwigTemplate_2fd2e3afeca4b30564fa1d0bd5eaae1f extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "includes/navbar.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "includes/navbar.html.twig"));

        // line 1
        echo "<style>
  .navbar {
    position: relative;
  }

  .white-bg {
    position: absolute;
    top: 0;
    left: -1rem;
    width: 140%; /* Adjust the width here (e.g., 120% or any other value you like) */
    height: 100%;
    background-color: white;
    z-index: -1; /* Set the z-index to -1 to place it behind the navbar content */
  }

  .bg-white {
    background-color: white;
    padding: 20px; /* Add padding to the div if needed */
  }

  .navbar-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
    margin: 0;
    padding: 10px;
  }
  .navbar-logo {
  font-size: 24px;
  font-weight: bold;
}
</style>

<nav class=\"navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0\">
 <div class=\"white-bg\"></div>
  <div class=\"container-fluid px-0\">
    <div class=\"d-flex justify-content-between w-100\" id=\"navbarSupportedContent\">
      <div class=\"d-flex align-items-center navbar-title\">

      ";
        // line 45
        echo "            <div class=\"navbar-logo block_page\"></div>

        <!-- Search form -->
          ";
        // line 49
        echo "         
        <!-- / Search form -->
      </div>
      <!-- Navbar links -->
      <ul class=\"navbar-nav align-items-center\">
      
            <div class=\"navbar-logo\"><h2>";
        // line 55
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 55, $this->source); })()), "session", [], "any", false, false, false, 55), "get", [0 => "dossier"], "method", false, false, false, 55), "abreviation", [], "any", false, false, false, 55), "html", null, true);
        echo "</H2></div>
        
        <li class=\"nav-item dropdown ms-lg-3\">
          <a class=\"nav-link dropdown-toggle pt-1 px-0\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">
            <div class=\"media d-flex align-items-center\">
              <img class=\"avatar rounded-circle\" alt=\"Image placeholder\" src=\"";
        // line 60
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("assets/images/avatar-1.png"), "html", null, true);
        echo "\">
              <div class=\"media-body ms-2 text-dark align-items-center d-none d-lg-block\">
                <span class=\"mb-0 font-small fw-bold text-gray-900\">";
        // line 62
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 62, $this->source); })()), "user", [], "any", false, false, false, 62), "username", [], "any", false, false, false, 62), "html", null, true);
        echo "</span>
              </div>
            </div>
          </a>
          <div class=\"dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1\">
            <a class=\"dropdown-item d-flex align-items-center\" href=\"#\" id=\"changement_password\">
              <svg class=\"dropdown-icon text-gray-400 me-2\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z\" clip-rule=\"evenodd\"></path></svg>
              Changement mot de passe
            </a>
            
            <div role=\"separator\" class=\"dropdown-divider my-1\"></div>
            <a class=\"dropdown-item d-flex align-items-center\" href=\"";
        // line 73
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_logout");
        echo "\">
              <svg class=\"dropdown-icon text-danger me-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1\"></path></svg>                
              Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  ";
        // line 83
        echo "</nav>
</br>

<style>
        

#modal_changement_password p {
    font-size: 12px !important;
}
\t
</style>
<div class=\"modal right come-from-modal fade\" id=\"modal_changement_password\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:30%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Modifier mot de passe</h2>
                <a role=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></a>
            </div>
            <div class=\"modal-body\">
              <form id=\"form_changement_password\"> 
                 <div class=\"col-md-12  \">
                      <label class=\"text-size-12\">Mot de passe actuel:</label>
                      <input type=\"password\" class=\"form-control\" name=\"mdp_current\" />
                  </div>
                 <div class=\"col-md-12  \">
                      <label class=\"text-size-12\">Mot de passe:</label>
                      <input type=\"password\" class=\"form-control\" name=\"mdp\" />
                  </div>
                 <div class=\"col-md-12  \">
                      <label class=\"text-size-12\">Confirmation mot de passe:</label>
                      <input type=\"password\" class=\"form-control\" name=\"mdp_confirmation\" />
                  </div>
              </form>
            </div>

            <div class=\"modal-footer justify-content-start\" >
                <button type=\"submit\" class=\"btn btn-secondary\" form=\"form_changement_password\">Enregistre</button>
                <a type=\"button\" class=\"btn btn-link\" data-bs-dismiss=\"modal\">Fermer</a>
            </div>
        </div>
    </div>
</div>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "includes/navbar.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  140 => 83,  128 => 73,  114 => 62,  109 => 60,  101 => 55,  93 => 49,  88 => 45,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<style>
  .navbar {
    position: relative;
  }

  .white-bg {
    position: absolute;
    top: 0;
    left: -1rem;
    width: 140%; /* Adjust the width here (e.g., 120% or any other value you like) */
    height: 100%;
    background-color: white;
    z-index: -1; /* Set the z-index to -1 to place it behind the navbar content */
  }

  .bg-white {
    background-color: white;
    padding: 20px; /* Add padding to the div if needed */
  }

  .navbar-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
    margin: 0;
    padding: 10px;
  }
  .navbar-logo {
  font-size: 24px;
  font-weight: bold;
}
</style>

<nav class=\"navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0\">
 <div class=\"white-bg\"></div>
  <div class=\"container-fluid px-0\">
    <div class=\"d-flex justify-content-between w-100\" id=\"navbarSupportedContent\">
      <div class=\"d-flex align-items-center navbar-title\">

      {# <H2 class=\"mb-3\">Salarie</H2> #}
            <div class=\"navbar-logo block_page\"></div>

        <!-- Search form -->
          {# <input type=\"hidden\" id=\"dossierId\" value=\"{{app.session.get('dossier').abreviation}}\" /> #}
         
        <!-- / Search form -->
      </div>
      <!-- Navbar links -->
      <ul class=\"navbar-nav align-items-center\">
      
            <div class=\"navbar-logo\"><h2>{{app.session.get('dossier').abreviation}}</H2></div>
        
        <li class=\"nav-item dropdown ms-lg-3\">
          <a class=\"nav-link dropdown-toggle pt-1 px-0\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">
            <div class=\"media d-flex align-items-center\">
              <img class=\"avatar rounded-circle\" alt=\"Image placeholder\" src=\"{{asset('assets/images/avatar-1.png')}}\">
              <div class=\"media-body ms-2 text-dark align-items-center d-none d-lg-block\">
                <span class=\"mb-0 font-small fw-bold text-gray-900\">{{app.user.username}}</span>
              </div>
            </div>
          </a>
          <div class=\"dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1\">
            <a class=\"dropdown-item d-flex align-items-center\" href=\"#\" id=\"changement_password\">
              <svg class=\"dropdown-icon text-gray-400 me-2\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z\" clip-rule=\"evenodd\"></path></svg>
              Changement mot de passe
            </a>
            
            <div role=\"separator\" class=\"dropdown-divider my-1\"></div>
            <a class=\"dropdown-item d-flex align-items-center\" href=\"{{path('app_logout')}}\">
              <svg class=\"dropdown-icon text-danger me-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1\"></path></svg>                
              Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  {# </div> #}
</nav>
</br>

<style>
        

#modal_changement_password p {
    font-size: 12px !important;
}
\t
</style>
<div class=\"modal right come-from-modal fade\" id=\"modal_changement_password\" aria-labelledby=\"modal-default\" style=\"display: none;\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-dialog-top\" style=\"width:30%;max-width:1000px !important\"  role=\"document\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h2 class=\"modal-title\">Modifier mot de passe</h2>
                <a role=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></a>
            </div>
            <div class=\"modal-body\">
              <form id=\"form_changement_password\"> 
                 <div class=\"col-md-12  \">
                      <label class=\"text-size-12\">Mot de passe actuel:</label>
                      <input type=\"password\" class=\"form-control\" name=\"mdp_current\" />
                  </div>
                 <div class=\"col-md-12  \">
                      <label class=\"text-size-12\">Mot de passe:</label>
                      <input type=\"password\" class=\"form-control\" name=\"mdp\" />
                  </div>
                 <div class=\"col-md-12  \">
                      <label class=\"text-size-12\">Confirmation mot de passe:</label>
                      <input type=\"password\" class=\"form-control\" name=\"mdp_confirmation\" />
                  </div>
              </form>
            </div>

            <div class=\"modal-footer justify-content-start\" >
                <button type=\"submit\" class=\"btn btn-secondary\" form=\"form_changement_password\">Enregistre</button>
                <a type=\"button\" class=\"btn btn-link\" data-bs-dismiss=\"modal\">Fermer</a>
            </div>
        </div>
    </div>
</div>", "includes/navbar.html.twig", "C:\\xampp\\htdocs\\Human-Resources\\templates\\includes\\navbar.html.twig");
    }
}
