/*! For license information please see paie_indeminite.7ff8afdd.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[240],{44154:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){"use strict";o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return A()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=d(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function h(){}function m(){}var y={};u(y,a,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==e&&n.call(g,a)&&(y=g);var b=m.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(i,a,c,s){var u=d(t[i],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==r(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var i;this._invoke=function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=d(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return h.prototype=m,u(b,"constructor",m),u(m,"constructor",h),h.displayName=u(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new _(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),u(b,s,"Generator"),u(b,a,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function i(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,s,"next",t)}function s(t){i(a,r,o,c,s,"throw",t)}c(void 0)}))}}n(34553),n(69826),n(41539),n(40561),n(21249),n(92222),n(68309),n(88674),n(82526),n(41817),n(32165),n(66992),n(78783),n(33948),n(72443),n(39341),n(73706),n(10408),n(69070),n(78011),n(30489),n(89554),n(54747),n(68304),n(65069),n(47042),$(document).ready((function(){$(".block_page").html("Gestion des indeminites");var t=$("#list_indeminite").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:Routing.generate("app_paie_indeminite_list"),processing:!0,serverSide:!0,deferRender:!0,responsive:!0,scrollX:!0,columns:[{name:"b.id",data:"id"},{name:"b.code",data:"code"},{name:"d.designation",data:"dossier"},{name:"b.created ",data:"created"},{name:"b.observation",data:"observation"},{name:"periode.code",data:"code_periode"},{name:"p.designation",data:"paiement"},{name:"b.id",data:"id",orderable:!1,searchable:!1}],columnDefs:[{targets:0,render:function(t,e,n,r){return'<input type="checkbox" value="'.concat(t,'" class="honoraire"/>')}},{targets:3,render:function(t,e,n,r){return t.date?moment(t.date).format("YYYY-MM-DD HH:mm:ss"):""}},{targets:7,render:function(t,e,n,r){return"\n                    "}}],language:datatablesFrench});$("#upload").on("click",(function(){$("#upload_modal").modal("show")}));var e,n=$("#list_indeminites").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],language:datatablesFrench}),r=[];$(".add_employe").on("click",(function(){notyf.open({type:"info",message:"En cours...",duration:9e6,dismissible:!1});var t=$(".employe_select").val(),e=$(".montant").val(),n=$(".montant_mad").val();if(""==t||""==e||""==n)return notyf.dismissAll(),void notyf.error("Veuillez remplir tout les champs!");if("-1"!=r.findIndex((function(e){return e.contract==t})))return notyf.dismissAll(),void notyf.error("Employe déja exist!");var o=$(".employe_select").find("option:selected").attr("data-rib"),a=$(".employe_select").find("option:selected").attr("data-name");r.push({contract:t,name:a,montant:e,montantMad:n,rib:o}),console.log(r),i(),notyf.dismissAll()})),$("body").on("click",".ajouter_rib",(function(t){t.preventDefault(),e=$(this).parents("tr").attr("id"),$("#rib_modal").modal("show")})),$("#add_rib").on("submit",function(){var t=a(o().mark((function t(n){var a,c,s,u,l;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),notyf.open({type:"info",message:"En cours...",duration:9e6,dismissible:!1}),t.prev=2,(a=new FormData(this)).append("contract",e),t.next=7,axios.post(Routing.generate("app_paie_indeminite_add_rib"),a);case 7:c=t.sent,s=c.data,$(".employe_select").html(s.data),renderSelect2(),u=r.findIndex((function(t){return t.contract==e})),"-1"!=u&&(r[u].rib=s.rib,i()),$("#rib_modal").modal("hide"),notyf.dismissAll(),$("#add_rib")[0].reset(),t.next=24;break;case 18:t.prev=18,t.t0=t.catch(2),notyf.dismissAll(),console.log(t.t0),l=t.t0.response.data,notyf.error(l);case 24:case"end":return t.stop()}}),t,this,[[2,18]])})));return function(e){return t.apply(this,arguments)}}()),$("body").on("click",".delete_indeminite",(function(){var t=$(this).parents("tr").attr("id"),e=r.findIndex((function(e){return e.contract==t}));"-1"!=e&&(r.splice(e,1),i())})),$(".upload_file_button").on("click",(function(){$("#upload_file_indeminite").trigger("click")})),$("#upload_file_indeminite").on("change",a(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Swal.fire({title:"Vous voulez vraiment importer ce fichier excel ?",showCancelButton:!0,position:"top",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Valider"}).then(function(){var t=a(o().mark((function t(e){var n,a,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConfirmed){t.next=24;break}return notyf.open({type:"info",message:"En cours...",duration:9e6,dismissible:!1}),(n=new FormData).append("file",$("#upload_file_indeminite").prop("files")[0]),t.prev=4,t.next=7,axios.post(Routing.generate("app_paie_indeminite_import"),n);case 7:a=t.sent,a.data.map((function(t){"-1"==r.findIndex((function(e){return e.contract==t.contract}))&&r.push(t)})),i(),$("#upload_file_indeminite").val(null),$("#upload_file_indeminite").val(null),notyf.dismissAll(),t.next=22;break;case 16:t.prev=16,t.t0=t.catch(4),console.log(t.t0,t.t0.response),c=t.t0.response.data,notyf.error(c),$("#upload_file_indeminite").val(null);case 22:t.next=25;break;case 24:$("#upload_file_indeminite").val(null);case 25:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))),$("#add_indeminite").on("submit",function(){var e=a(o().mark((function e(a){var c,s,u,l,d,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),notyf.open({type:"info",message:"En cours...",duration:9e6,dismissible:!1}),0!=r.length){e.next=6;break}return notyf.dismissAll(),notyf.error("Veuillez ajouter un ou plusieurs bénéficiaires !"),e.abrupt("return");case 6:if((c=$(document.activeElement)).prop("disabled",!0),s=!1,u=new FormData(this),r.map((function(t){if(""==t.rib){var e=n.row("#"+t.contract).index(),r=n.page.len(),o=Math.floor(e/r);return n.page(o).draw(!1),notyf.dismissAll(),notyf.error("Veuillez ajouter un rib!"),void(s=!0)}})),!0!==s){e.next=14;break}return c.prop("disabled",!1),e.abrupt("return");case 14:return u.append("indeminites",JSON.stringify(r)),e.prev=15,e.next=18,axios.post(Routing.generate("app_paie_indeminite_insert"),u);case 18:l=e.sent,d=l.data,r=[],i(),notyf.dismissAll(),notyf.success(d),t.ajax.reload(),c.prop("disabled",!1),$("#upload_modal").modal("hide"),$("#add_indeminite")[0].reset(),renderSelect2(),e.next=38;break;case 31:e.prev=31,e.t0=e.catch(15),c.prop("disabled",!1),console.log(e.t0),f=e.t0.response.data,notyf.dismissAll(),notyf.error(f);case 38:case"end":return e.stop()}}),e,this,[[15,31]])})));return function(t){return e.apply(this,arguments)}}());var i=function(){var t="";r.map((function(e){t+='\n            <tr id="'.concat(e.contract,'">\n                <td>').concat(e.contract,"</td>\n                <td>").concat(e.name,"</td>\n                <td>").concat(e.montant,"</td>\n                <td>").concat(e.montantMad,"</td>\n                <td>").concat(""!=e.rib?e.rib:'<a href="#" class="ajouter_rib">Ajouter RIB ?</a>',"</td>\n                <td><i role=\"button\" class='fa-solid fa-trash text-danger mr-2 delete_indeminite' data-id='").concat(e.contract,"'></i> </td>\n            </tr>\n            ")})),$.fn.DataTable.isDataTable("#list_indeminites")&&$("#list_indeminites").DataTable().clear().destroy(),$("#list_indeminites .list_indeminites_data").html(t),n=$("#list_indeminites").DataTable({lengthMenu:[[1,15,25,50,100,2e13],[1,15,25,50,100,"All"]],language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"}})}}))},83658:(t,e,n)=>{"use strict";var r=n(19781),o=n(43157),i=TypeError,a=Object.getOwnPropertyDescriptor,c=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=c?function(t,e){if(o(t)&&!a(t,"length").writable)throw i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},85117:(t,e,n)=>{"use strict";var r=n(66330),o=TypeError;t.exports=function(t,e){if(!delete t[e])throw o("Cannot delete property "+r(e)+" of "+r(t))}},7207:t=>{var e=TypeError;t.exports=function(t){if(t>9007199254740991)throw e("Maximum allowed index exceeded");return t}},92222:(t,e,n)=>{"use strict";var r=n(82109),o=n(47293),i=n(43157),a=n(70111),c=n(47908),s=n(26244),u=n(7207),l=n(86135),d=n(65417),f=n(81194),p=n(5112),h=n(7392),m=p("isConcatSpreadable"),y=h>=51||!o((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),v=f("concat"),g=function(t){if(!a(t))return!1;var e=t[m];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,arity:1,forced:!y||!v},{concat:function(t){var e,n,r,o,i,a=c(this),f=d(a,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(g(i=-1===e?a:arguments[e]))for(o=s(i),u(p+o),n=0;n<o;n++,p++)n in i&&l(f,p,i[n]);else u(p+1),l(f,p++,i);return f.length=p,f}})},34553:(t,e,n)=>{"use strict";var r=n(82109),o=n(42092).findIndex,i=n(51223),a="findIndex",c=!0;a in[]&&Array(1).findIndex((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},69826:(t,e,n)=>{"use strict";var r=n(82109),o=n(42092).find,i=n(51223),a="find",c=!0;a in[]&&Array(1).find((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},21249:(t,e,n)=>{"use strict";var r=n(82109),o=n(42092).map;r({target:"Array",proto:!0,forced:!n(81194)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},40561:(t,e,n)=>{"use strict";var r=n(82109),o=n(47908),i=n(51400),a=n(19303),c=n(26244),s=n(83658),u=n(7207),l=n(65417),d=n(86135),f=n(85117),p=n(81194)("splice"),h=Math.max,m=Math.min;r({target:"Array",proto:!0,forced:!p},{splice:function(t,e){var n,r,p,y,v,g,b=o(this),w=c(b),_=i(t,w),x=arguments.length;for(0===x?n=r=0:1===x?(n=0,r=w-_):(n=x-2,r=m(h(a(e),0),w-_)),u(w+n-r),p=l(b,r),y=0;y<r;y++)(v=_+y)in b&&d(p,y,b[v]);if(p.length=r,n<r){for(y=_;y<w-r;y++)g=y+n,(v=y+r)in b?b[g]=b[v]:f(b,g);for(y=w;y>w-r+n;y--)f(b,y-1)}else if(n>r)for(y=w-r;y>_;y--)g=y+n-1,(v=y+r-1)in b?b[g]=b[v]:f(b,g);for(y=0;y<n;y++)b[y+_]=arguments[y+2];return s(b,w-r+n),p}})}},t=>{t.O(0,[31,589],(()=>{return e=44154,t(t.s=e);var e}));t.O()}]);