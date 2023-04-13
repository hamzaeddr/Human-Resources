/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';


// start the Stimulus application
const $ = require("jquery");
const axios = require("axios");
const Swal = require("./components/includes/sweetalert2");

global.$ = global.jQuery = $;
global.axios = axios;
global.Swal = Swal;
const SmoothScroll = require('./components/includes/smooth-scroll.polyfills.min.js');
global.SmoothScroll = SmoothScroll;

require('bootstrap/dist/js/bootstrap.bundle');
require('./components/includes/moment.js');
require('./components/includes/datepicker.min.js');
require('./components/includes/nouislider.min.js');
require('./components/includes/on-screen.umd.min.js');
require('./components/includes/simplebar.min.js');
require("select2");
require("select2/dist/css/select2.css");
require('./components/includes/volt.js');

require("@fortawesome/fontawesome-free/css/all.css");

require("./components/includes/datatables/core");
require("./components/includes/datatables/datatable-bs4");

import './bootstrap';


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
})
global.Toast = Toast;


import { Notyf } from 'notyf';
const notyf = new Notyf({
    position: {
        x: 'right',
        y: 'top',
    },
    duration: 5000,
    types: [
        {
            type: 'info',
            background: '#0948B3',
            icon: {
                className: 'fas fa-info-circle',
                tagName: 'span',
                color: '#fff'
            },
        },
        {
            type: 'warning',
            background: '#F5B759',
            icon: {
                className: 'fas fa-exclamation-triangle',
                tagName: 'span',
                color: '#fff'
            },
        }
    ],
    dismissible: true
});
global.notyf = notyf;


const routes = require("../public/js/fos_js_routes.json");
import Routing from "../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
const routing = Routing.setRoutingData(routes);
global.Routing = Routing;








let cancelToken
const createCancel = () => {
    notyf.dismissAll();
    if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.")
    }
    cancelToken = axios.CancelToken.source()

    return cancelToken
}

global.createCancel = createCancel



$(".select").select2();
$('.modal .select').each(function() {  
    var $p = $(this).parent(); 
    $(this).select2({  
      dropdownParent: $p  
    });  
 });

let dossierId = $('#dossierId').val();
global.dossierId = dossierId;

$('.dossierSelect').on('change', function(){
    dossierId = $(this).val();
    global.dossierId = dossierId;
})

