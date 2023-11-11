(self["webpackChunk"] = self["webpackChunk"] || []).push([["salarie_salarie"],{

/***/ "./assets/components/salarie/salarie.js":
/*!**********************************************!*\
  !*** ./assets/components/salarie/salarie.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(document).ready(function () {
  $(".block_page").html('Gestion des salaries');
  var employe_id = 0;
  var contract_id = 0;
  var cnssid = 0;
  var cimrid = 0;
  var ribid = 0;
  diplomes = [];
  id_diplome = 0;
  selectedDataAttr = '';

  function hide_show(hide, hide_2, show, show_2) {
    $("body " + show).removeClass('noclick');
    $("body " + show).addClass('click active');
    $("body " + show_2).addClass('show active');
    $("body " + hide).removeClass('click').addClass('noclick').removeClass('active');
    $("body " + hide_2).removeClass('show').removeClass('active');
    return true;
  }

  var previousXhr = null;
  var table = $('#example').DataTable({
    order: [[0, "desc"]],
    ajax: {
      url: Routing.generate('app_salarie_salarie_list'),
      type: "get",
      beforeSend: function beforeSend(jqXHR) {
        // If there's a previous jqXHR object, abort it
        if (previousXhr) {
          previousXhr.abort();
        } // Store the current jqXHR object for the new request


        previousXhr = jqXHR;
      }
    },
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    columns: [{
      name: 'p.id',
      data: 'employe_id'
    }, {
      name: 'p.matricule',
      data: 'matricule'
    }, {
      name: 'p.nom',
      data: 'nom'
    }, {
      name: 'p.prenom',
      data: 'prenom'
    }, {
      name: 'p.cin',
      data: 'cin'
    }, {
      name: 'c.code',
      data: 'contract'
    }, {
      name: 'n.designation',
      data: 'nature'
    }, {
      orderable: false,
      searchable: false,
      data: 'employe_id'
    }],
    columnDefs: [{
      targets: 7,
      render: function render(data, type, full, meta) {
        return "<i class='fa fa-eye text-info contractdet' role=\"button\" id=\"".concat(data, "\"></i>");
      }
    }],
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    language: datatablesFrench
  });
  var natureCab = null;
  $('.nav-pills a').on('click', function (e) {
    $(this).tab('show'); // alert(dossierId)
  });
  $("#ajouter").on('click', function () {
    hide_show('#modal_modifier #plus_info_update', '#modal_modifier #plus_info_update', '#modal_ajouter #etatcivil', '#modal_ajouter #etat_civil');
    hide_show('#modal_modifier #etatcivil_update', '#modal_modifier #etatcivil_update', '#modal_ajouter #etatcivil', '#modal_ajouter #etat_civil');
    hide_show('#modal_modifier #cnss_rib_update', '#modal_modifier #cnss_rib_update', '#modal_ajouter #etatcivil', '#modal_ajouter #etat_civil');
    hide_show('#modal_modifier #contract_update', '#modal_modifier #contrat_update', '#modal_ajouter #etatcivil', '#modal_ajouter #etat_civil');
    hide_show('#modal_ajouter #plus_info', '#modal_ajouter #plus_info', '#modal_ajouter #etatcivil', '#modal_ajouter #etat_civil');
    hide_show('#modal_ajouter #etatcivil', '#modal_ajouter #etatcivil', '#modal_ajouter #etatcivil', '#modal_ajouter #etat_civil');
    hide_show('#modal_ajouter #cnss_rib', '#modal_ajouter #cnss_rib', '#modal_ajouter #etatcivil', '#modal_ajouter #etat_civil');
    hide_show('#modal_ajouter #contract', '#modal_ajouter #contrat', '#modal_ajouter #etatcivil', '#modal_ajouter #etat_civil');
    $("#modal_ajouter").modal("show");
  });
  $("#register").on("submit", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var createCancelTokenHandler, formData, request, response, message;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              createCancelTokenHandler = createCancel();
              formData = new FormData($(this)[0]);
              notyf.open({
                type: "info",
                message: "En cours...",
                duration: 90000
              });
              _context.prev = 4;
              _context.next = 7;
              return axios.post(Routing.generate('app_register_new'), formData, {
                cancelToken: createCancelTokenHandler.token
              });

            case 7:
              request = _context.sent;
              response = request.data;
              _context.next = 11;
              return notyf.dismissAll();

            case 11:
              console.log(response);
              notyf.open({
                type: "info",
                message: response
              });
              _context.next = 21;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](4);
              console.log(_context.t0);
              message = _context.t0.response.data;
              notyf.dismissAll();
              notyf.error(message);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[4, 15]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $(".nature_salarie").on("change", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var createCancelTokenHandler, request, response, message;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              natureCab = $(this).val();

              if (!(natureCab == "")) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return");

            case 4:
              if (natureCab == 1) {
                $(".type_cnss").prop('disabled', false);
              } else {
                $(".type_cnss").prop('disabled', true);
              }

              createCancelTokenHandler = createCancel();
              _context2.prev = 6;
              _context2.next = 9;
              return axios.get(Routing.generate('api_getnaturesalarietype', {
                natureCab: natureCab
              }), {
                cancelToken: createCancelTokenHandler.token
              });

            case 9:
              request = _context2.sent;
              response = request.data;
              $('.nature_type').html(response.types);
              $('.nature_contrat').html(response.contrats);
              $('.profile').html(response.niveaux);
              _context2.next = 22;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](6);
              console.log(_context2.t0);
              message = _context2.t0.response.data;
              notyf.dismissAll();
              notyf.error(message);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[6, 16]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  $('body .situation_familiale').on('change', function () {
    if ($(this).val() == 1) {
      $('#nombre_enfant').prop("disabled", true);
    } else {
      $('#nombre_enfant').prop("disabled", false);
    }
  });
  $(".nature_contrat").on("change", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var createCancelTokenHandler, id, selectedOption, request, response, message;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();

              if (!($(this).val() == "")) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt("return");

            case 3:
              createCancelTokenHandler = createCancel();
              id = $(this).val();
              selectedOption = $(this).find("option:selected"); // Get the value and data-attr attribute of the selected option
              // var selectedValue = selectedOption.val();

              selectedDataAttr = selectedOption.data("attr");
              _context3.prev = 7;
              _context3.next = 10;
              return axios.get(Routing.generate('api_getdureecontrat', {
                'natureContrat': id
              }), {
                cancelToken: createCancelTokenHandler.token
              });

            case 10:
              request = _context3.sent;
              response = request.data;
              $('.duree_contrat').html(response);
              _context3.next = 20;
              break;

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](7);
              console.log(_context3.t0);
              message = _context3.t0.response.data;
              notyf.error(message);

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[7, 15]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  $(".profil").on("change", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
      var createCancelTokenHandler, profil, request2, response2;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();

              if (!($(this).val() == "")) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt("return");

            case 3:
              createCancelTokenHandler = createCancel();
              profil = $(this).val(); // alert(selectedDataAttr);

              _context4.next = 7;
              return axios.get(Routing.generate('api_getbareme_contract', {
                'natureContrat': selectedDataAttr,
                'profil': profil
              }), {
                cancelToken: createCancelTokenHandler.token
              });

            case 7:
              request2 = _context4.sent;
              response2 = request2.data;
              $('.bareme').html(response2);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
  $(".bareme").on("change", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e) {
      var createCancelTokenHandler, selectedOption, selectedDatasal;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              console.log("Dropdown changed");

              if (!($(this).val() == "")) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return");

            case 4:
              createCancelTokenHandler = createCancel();
              selectedOption = $(this).find("option:selected");
              selectedDatasal = selectedOption.data("attr");
              setTimeout(function () {
                // Set the value of the input field
                $('.salaire_grille').val(selectedDatasal);
              }, 100);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }());
  $(".profile").on("change", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
      var createCancelTokenHandler, niveau, request, response, message;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();

              if (!($(this).val() == "")) {
                _context6.next = 3;
                break;
              }

              return _context6.abrupt("return");

            case 3:
              createCancelTokenHandler = createCancel();
              niveau = $(this).val();
              _context6.prev = 5;
              _context6.next = 8;
              return axios.get(Routing.generate('api_getbareme', {
                'niveau': niveau,
                'natureCab': natureCab
              }), {
                cancelToken: createCancelTokenHandler.token
              });

            case 8:
              request = _context6.sent;
              response = request.data;
              $('.bareme').html(response);
              _context6.next = 18;
              break;

            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](5);
              console.log(_context6.t0);
              message = _context6.t0.response.data;
              notyf.error(message);

            case 18:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[5, 13]]);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }());
  $(".bareme").on("change", function (e) {
    e.preventDefault();
    $(".salaire_grille").val($(this).find(":selected").attr('data-paye'));
  });
  $(".salaire_affecte").on("keyup", function (e) {
    var salaireAffecte = $(this).val();

    if (salaireAffecte == "") {
      $('#ppc').val("");
      $('#rpc').val("");
      return;
    }

    var salaireGrille = $(".salaire_grille").val();
    var reste = salaireAffecte - salaireGrille;

    if (reste <= 0) {
      $('#rpc').val((reste * -1).toFixed(2));
      $('#ppc').val("");
    } else {
      $('#rpc').val("");
      $('#ppc').val(reste.toFixed(2));
    }
  });
  $("#rib").on("keyup", function (e) {
    if ($(this).val().length == 24) {
      $(".checkClass").css('color', 'cadetblue');
    } else {
      $(".checkClass").css('color', 'black');
    }
  });
  $("#modal_ajouter #new_salarie").on("submit", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e) {
      var createCancelTokenHandler, formData, request, response, message;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();

              if (!(diplomes.length > 0)) {
                _context7.next = 24;
                break;
              }

              createCancelTokenHandler = createCancel();
              notyf.open({
                type: "info",
                message: "En cours...",
                duration: 90000
              });
              formData = new FormData(this);
              formData.append("diplomes", JSON.stringify(diplomes));
              _context7.prev = 6;
              _context7.next = 9;
              return axios.post(Routing.generate('app_salarie_salarie_new'), formData, {
                cancelToken: createCancelTokenHandler.token
              });

            case 9:
              request = _context7.sent;
              response = request.data;
              employe_id = response; //////////////hide / show 

              hide_show('#modal_ajouter #etatcivil', '#modal_ajouter #etat_civil', '#modal_ajouter #contract', '#modal_ajouter #contrat');
              notyf.dismissAll();
              _context7.next = 22;
              break;

            case 16:
              _context7.prev = 16;
              _context7.t0 = _context7["catch"](6);
              console.log(_context7.t0);
              message = _context7.t0.response.data;
              notyf.dismissAll();
              notyf.error(message);

            case 22:
              _context7.next = 25;
              break;

            case 24:
              notyf.error("Merci de remplir les diplômes");

            case 25:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this, [[6, 16]]);
    }));

    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }()); ////////////////////////////////////////////Diplome //////////////////////////////        

  $(document).on('click', '.btndelete', function () {
    var id = $(this).closest('tr').attr('id');
    $(this).closest('tr').remove();
    var newarray = diplomes.filter(function (item) {
      return item.id != id;
    });
    diplomes = newarray;
  });
  $('.add_diplome').on('click', function () {
    id_diplome = id_diplome + 1;
    var Niveau = $("#modal_ajouter .new_dip").find(":selected").text();
    var Diplome = $("#diplome").val();
    var Designation = $("#designation_diplome").val();
    var Ecole = $("#Ecole_diplome").val();
    $('#body_diplome tr:last').after('<tr id="' + id_diplome + '"><td>' + Niveau + '</td><td id="' + Diplome + '">' + Diplome + '</td><td  id"' + Designation + '">' + Designation + '</td><td  id"' + Ecole + '">' + Ecole + '</td><td><button type="button" class="btn btndelete">x</button></td></tr>');
    diplomes.push({
      "nv_dip": Niveau,
      "Diplome": Diplome,
      "Designation": Designation,
      "Ecole": Ecole,
      "id": id_diplome
    });
  }); ////hide and show popup //////////////////////////////////////////////
  ////////////////////////cnss////////////////////////////

  $("#modal_ajouter #new_contract").on("submit", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e) {
      var createCancelTokenHandler, formData, request, response, message;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();
              createCancelTokenHandler = createCancel();
              notyf.open({
                type: "info",
                message: "En cours...",
                duration: 90000
              });
              formData = new FormData(this);
              formData.append("employe_id", employe_id);
              _context8.prev = 5;
              _context8.next = 8;
              return axios.post(Routing.generate('app_salarie_contract'), formData, {
                cancelToken: createCancelTokenHandler.token
              });

            case 8:
              request = _context8.sent;
              response = request.data;
              contract_id = response; //////////////hide / show 

              hide_show('#modal_ajouter #contract', '#modal_ajouter #contrat', '#modal_ajouter #cnss_rib', '#modal_ajouter #cnss_rib');
              notyf.dismissAll();
              _context8.next = 21;
              break;

            case 15:
              _context8.prev = 15;
              _context8.t0 = _context8["catch"](5);
              console.log(_context8.t0);
              message = _context8.t0.response.data;
              notyf.dismissAll();
              notyf.error(message);

            case 21:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this, [[5, 15]]);
    }));

    return function (_x8) {
      return _ref8.apply(this, arguments);
    };
  }());
  $("#modal_ajouter #new_cnss").on("submit", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(e) {
      var createCancelTokenHandler, formData, request, response, message;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();
              createCancelTokenHandler = createCancel();
              notyf.open({
                type: "info",
                message: "En cours...",
                duration: 90000
              });
              formData = new FormData(this);
              formData.append("contract_id", contract_id);
              _context9.prev = 5;
              _context9.next = 8;
              return axios.post(Routing.generate('app_salarie_cnss'), formData, {
                cancelToken: createCancelTokenHandler.token
              });

            case 8:
              request = _context9.sent;
              response = request.data;
              contract_id = response; //////////////hide / show 

              hide_show('#modal_ajouter #cnss_rib', '#modal_ajouter #cnss_rib', '#modal_ajouter #plus_info', '#modal_ajouter #plus_info');
              notyf.dismissAll();
              _context9.next = 21;
              break;

            case 15:
              _context9.prev = 15;
              _context9.t0 = _context9["catch"](5);
              console.log(_context9.t0);
              message = _context9.t0.response.data;
              notyf.dismissAll();
              notyf.error(message);

            case 21:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this, [[5, 15]]);
    }));

    return function (_x9) {
      return _ref9.apply(this, arguments);
    };
  }());
  $("#modal_ajouter #new_plus").on("submit", /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(e) {
      var createCancelTokenHandler, formData, request, response, message;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              e.preventDefault();
              createCancelTokenHandler = createCancel();
              notyf.open({
                type: "info",
                message: "En cours...",
                duration: 90000
              });
              formData = new FormData(this);
              formData.append("employe_id", employe_id);
              _context10.prev = 5;
              _context10.next = 8;
              return axios.post(Routing.generate('app_salarie_plusinfo'), formData, {
                cancelToken: createCancelTokenHandler.token
              });

            case 8:
              request = _context10.sent;
              response = request.data; //////////////hide / show 

              hide_show('#modal_ajouter #plus_info', '#modal_ajouter #plus_info', '#modal_ajouter #etatcivil', '#modal_ajouter #etatcivil');
              notyf.dismissAll();
              _context10.next = 20;
              break;

            case 14:
              _context10.prev = 14;
              _context10.t0 = _context10["catch"](5);
              console.log(_context10.t0);
              message = _context10.t0.response.data;
              notyf.dismissAll();
              notyf.error(message);

            case 20:
              $("body .btnclose").click();

            case 21:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this, [[5, 14]]);
    }));

    return function (_x10) {
      return _ref10.apply(this, arguments);
    };
  }());
  $(document).on('click', '.contractdet', function () {
    employe_id = $(this).attr('id');
    var createCancelTokenHandler = createCancel();

    try {
      $.ajax({
        type: "POST",
        url: Routing.generate('app_salarie_contractaff'),
        data: 'employe_id=' + employe_id,
        beforeSend: function beforeSend() {
          notyf.open({
            type: "info",
            message: "En cours...",
            duration: 90000
          });
        },
        success: function success(data) {
          if ($.fn.DataTable.isDataTable("#contrat_list_details")) {
            $('#contrat_list_details').DataTable().clear().destroy();
          }

          $('#contract_body').html(data);
          $("#contrat_list_details").DataTable({
            lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
            language: datatablesFrench
          });
          $("#contractModal").modal('show');
          notyf.dismissAll();
        },
        error: function error(data) {}
      });
    } catch (error) {
      console.log(error);
      var message = error.response.data;
      notyf.dismissAll();
      notyf.error(message);
    }
  }); //////////////////////////Update modale ////////////////////////////////////////    

  $(document).on('click', '#editContract', function () {
    hide_show('#modal_modifier #plus_info_update', '#modal_modifier #plus_info_update', '#modal_modifier #contract_update', '#modal_modifier #contrat_update');
    hide_show('#modal_modifier #etatcivil_update', '#modal_modifier #etatcivil_update', '#modal_modifier #contract_update', '#modal_modifier #contrat_update');
    hide_show('#modal_modifier #cnss_rib_update', '#modal_modifier #cnss_rib_update', '#modal_modifier #contract_update', '#modal_modifier #contrat_update');
    hide_show('#modal_ajouter #plus_info', '#modal_ajouter #plus_info', '#modal_modifier #contract_update', '#modal_modifier #contrat_update');
    hide_show('#modal_ajouter #etatcivil', '#modal_ajouter #etatcivil', '#modal_modifier #contract_update', '#modal_modifier #contrat_update');
    hide_show('#modal_ajouter #cnss_rib', '#modal_ajouter #cnss_rib', '#modal_modifier #contract_update', '#modal_modifier #contrat_update');
    hide_show('#modal_ajouter #contrat', '#modal_ajouter #contrat', '#modal_modifier #contract_update', '#modal_modifier #contrat_update');
    contractId = $(this).attr("data-value");
    $('.contractdetbtn').click();
    $("#modal_modifier").modal("show"); // Make an AJAX request to fetch contract details based on the contractId

    $.ajax({
      type: "POST",
      url: Routing.generate('app_salarie_contractinfo'),
      // Adjust the URL to your server endpoint
      data: {
        contract_id: contractId
      },
      // Send the contract ID as data
      beforeSend: function beforeSend() {// Show loading indicator or do other actions before the request is sent
      },
      success: function success(data) {
        var id = data[0]['pnatureid'];
        var dure = data[0]['iddure'];
        var datec = data[0]['date_debut']['date'];
        var datec = datec.split(" ")[0];
        var datef = data[0]['date_fin']['date'];
        var datef = datef.split(" ")[0];
        var salaireaf = data[0]['Salaireaffecte'];
        var salairegrille = data[0]['Salairegrille'];
        var bareme = data[0]['bareme'];
        var fonctionid = data[0]['fonctionid'];
        var dossier = data[0]['dossier'];
        var ppc = data[0]['PPC'];
        var rpc = data[0]['RPC'];
        var profil = data[0]['Profil']; // $("#modal_modifier .nature_contrat option[id='" + id + "']").prop("selected", true);

        var $matchingOption = $("#modal_modifier .bareme option[value='" + bareme + "']");
        $("#modal_modifier .bareme").val($matchingOption.val()).trigger("change");
        $("#modal_modifier .bareme").prop("disabled", true);
        var $matchingbareme = $("#modal_modifier .nature_contrat option[value='" + id + "']");
        $("#modal_modifier .nature_contrat").val($matchingbareme.val()).trigger("change");
        $("#modal_modifier .nature_contrat").prop("disabled", true);
        var $matchingdossier = $("#modal_modifier .affectation option[value='" + dossier + "']");
        $("#modal_modifier .affectation").val($matchingdossier.val()).trigger("change");
        $("#modal_modifier .affectation").prop("disabled", true);
        var $matchingfonction = $("#modal_modifier .fonction option[value='" + fonctionid + "']");
        $("#modal_modifier .fonction").val($matchingfonction.val()).trigger("change");
        $("#modal_modifier .date_contrat").val(datec);
        $("#modal_modifier .date_fin").val(datef);
        setTimeout(function () {
          $("#modal_modifier .salaire_grille").val(salairegrille);
        }, 1000);
        $("body #modal_modifier .salaire_grille").prop("readonly", true);
        $("#modal_modifier .salaire_affecte").val(salaireaf);
        $("body #modal_modifier .salaire_affecte").prop("disabled", true);
        setTimeout(function () {
          $("#modal_modifier #ppc").val(ppc);
        }, 1000);
        $("body #modal_modifier  #ppc").prop("disabled", true);
        setTimeout(function () {
          $("#modal_modifier  #rpc").val(rpc);
        }, 1000);
        $("body #modal_modifier  #rpc").prop("disabled", true); // Handle the success response here, e.g., update the modal content with the fetched details

        setTimeout(function () {
          var $matchingOption2 = $("body #modal_modifier .duree_contrat option[value='" + dure + "']");
          $("body #modal_modifier .duree_contrat").val($matchingOption2.val()).trigger("change");
          $("body #modal_modifier .duree_contrat").prop("disabled", true);
        }, 1500); // 3000 milliseconds = 3 seconds

        setTimeout(function () {
          var $matchingprofil = $("#modal_modifier .profil option[value='" + profil + "']");
          $("body #modal_modifier .profil").val($matchingprofil.val()).trigger("change");
          $("body #modal_modifier .profil").prop("disabled", true);
        }, 1000); // For example, you can populate a form with the fetched data
        // $("#contract-details-form").html(data);
      },
      error: function error(xhr, textStatus, errorThrown) {
        $('.contractdetbtn').click(); // Handle errors, e.g., show an error message

        console.error("Error:", errorThrown);
      }
    });
  });
  $("body #modal_modifier #cntc_btn").on("click", function () {
    var datedebut = $("#modal_modifier .date_contrat").val();
    var datefin = $("#modal_modifier .date_fin").val();
    var fonctionupdate = $("#modal_modifier .fonction").val();

    try {
      $.ajax({
        type: "POST",
        url: Routing.generate('app_salarie_updatecontract'),
        data: {
          'contract_id': contractId,
          'date_contrat': datedebut,
          'date_fin': datefin,
          'fonction': fonctionupdate
        },
        beforeSend: function beforeSend() {
          notyf.open({
            type: "info",
            message: "En cours...",
            duration: 90000
          });
        },
        success: function success(data) {
          $('#contract_body').html(data);
          hide_show('#modal_modifier #contract_update', '#modal_modifier #contrat_update', '#modal_modifier #cnss_rib_update', '#modal_modifier #cnss_rib_update');

          try {
            $.ajax({
              type: "POST",
              url: Routing.generate('app_salarie_get_cnss_cimr'),
              data: {
                'contract_id': contractId
              },
              dataType: "json",
              beforeSend: function beforeSend() {},
              success: function success(data) {
                // 'data' contains the array of objects received from the server
                console.log(data); // Iterate through the array using $.each()

                $.each(data, function (index, item) {
                  // Access properties of each object
                  var id = item.id;
                  var abreviation = item.abreviation;
                  var type_id = item.type_id;
                  var code = item.code;
                  var date_affiliation = item.date_affiliation;
                  var rib = item.rib;
                  var cotisid = item.cotisid;
                  ribid = item.ribid; // Perform actions for each item, e.g., display data

                  console.log("Index:", index);
                  console.log("ID:", id);
                  console.log("Abreviation:", abreviation);
                  console.log("Type ID:", type_id);
                  console.log("Code:", code);
                  console.log("Date Affiliation:", date_affiliation);
                  console.log("RIB:", rib);

                  if (type_id === 1) {
                    $("#modal_modifier #cnss").val(code);
                    $("#modal_modifier #date_declaration_cnss").val(date_affiliation);
                    cnssid = cotisid;
                  } else if (type_id === 2) {
                    $("#modal_modifier #cimr").val(code);
                    $("#modal_modifier #date_declaration_cimr").val(date_affiliation);
                    $("#modal_modifier #rib").val(rib);
                    cimrid = cotisid;
                  }
                });
                notyf.dismissAll();
              },
              error: function error(data) {
                notyf.open({
                  type: "error",
                  message: "Error Mis a jour contract ! !",
                  duration: 90000
                });
              }
            });
          } catch (error) {
            console.log(error);
            var message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
          }

          notyf.dismissAll();
        },
        error: function error(data) {
          notyf.open({
            type: "error",
            message: "Error Mis a jour contract ! !",
            duration: 90000
          });
        }
      });
    } catch (error) {
      console.log(error);
      var message = error.response.data;
      notyf.dismissAll();
      notyf.error(message);
    }
  });
  $("body #modal_modifier #cnss_btn").on("click", function () {
    var cnss = $("#modal_modifier #cnss_rib_update #cnss").val();
    var date_cnss = $("#modal_modifier #cnss_rib_update #date_declaration_cnss").val();
    var cimr = $("#modal_modifier #cnss_rib_update #cimr").val();
    var date_cimr = $("#modal_modifier #cnss_rib_update #date_declaration_cimr").val();
    var ribupdated = $("#modal_modifier #cnss_rib_update #rib").val();

    try {
      $.ajax({
        type: "POST",
        url: Routing.generate('app_salarie_updatecotis'),
        data: {
          'cnssid': cnssid,
          'cimrid': cimrid,
          'cnssup': cnss,
          'date_cnssup': date_cnss,
          'cimrup': cimr,
          'date_cimr': date_cimr,
          'ribup': ribupdated,
          'ribid': ribid
        },
        beforeSend: function beforeSend() {},
        success: function success(data) {
          hide_show('#modal_modifier #plus_info_update', '#modal_modifier #plus_info_update', '#modal_ajouter #etatcivil', '#modal_ajouter #etatcivil'); //  hide_show('#modal_modifier #plus_info_update','#modal_modifier #plus_info_update','civicivil','#modal_modifier #etatcivil_update');

          $("body .btnclose").click();
          notyf.dismissAll();
        },
        error: function error(data) {}
      });
    } catch (error) {
      console.log(error);
      var message = error.response.data;
      notyf.dismissAll();
      notyf.error(message);
    }
  });
  $(document).on('click', '#ajouterContract', function () {
    hide_show('#modal_modifier #plus_info_update', '#modal_modifier #plus_info_update', '#modal_ajouter #contract', '#modal_ajouter #contrat');
    hide_show('#modal_modifier #etatcivil_update', '#modal_modifier #etatcivil_update', '#modal_ajouter #contract', '#modal_ajouter #contrat');
    hide_show('#modal_modifier #cnss_rib_update', '#modal_modifier #cnss_rib_update', '#modal_ajouter #contract', '#modal_ajouter #contrat');
    hide_show('#modal_modifier #contract_update', '#modal_modifier #contrat_update', '#modal_ajouter #contract', '#modal_ajouter #contrat');
    hide_show('#modal_ajouter #plus_info', '#modal_ajouter #plus_info', '#modal_ajouter #contract', '#modal_ajouter #contrat');
    hide_show('#modal_ajouter #etatcivil', '#modal_ajouter #etatcivil', '#modal_ajouter #contract', '#modal_ajouter #contrat');
    hide_show('#modal_ajouter #cnss_rib', '#modal_ajouter #cnss_rib', '#modal_ajouter #contract', '#modal_ajouter #contrat');
    hide_show('#modal_ajouter #contract', '#modal_ajouter #contrat', '#modal_ajouter #contract', '#modal_ajouter #contrat');
    $('#modal_ajouter #contract').click();
    $("body .contractdetbtn").click();
    $("#modal_ajouter").modal("show");
  });
  document.addEventListener("DOMContentLoaded", function () {
    var ellipsisIcons = document.querySelectorAll(".ellipsis");
    ellipsisIcons.forEach(function (icon) {
      icon.addEventListener("click", function () {
        var editButtons = this.nextElementSibling;
        editButtons.style.display = editButtons.style.display === "block" ? "none" : "block";
      });
    });
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/schedulers-fix.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/schedulers-fix.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "./node_modules/core-js/internals/validate-arguments-length.js");

var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var Function = global.Function;

var wrap = function (scheduler) {
  return MSIE ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > 2;
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply(fn, this, args);
    } : fn, timeout);
  } : scheduler;
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
module.exports = {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var $repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var $RangeError = RangeError;
var $String = String;
var floor = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var nativeToFixed = uncurryThis(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = $String(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = fails(function () {
  return nativeToFixed(0.00008, 3) !== '0.000' ||
    nativeToFixed(0.9, 0) !== '1' ||
    nativeToFixed(1.255, 2) !== '1.25' ||
    nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
    if (fractDigits < 0 || fractDigits > 20) throw $RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return $String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat('0', fractDigits - k) + result
        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.set-interval.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-interval.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setInterval = (__webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js").setInterval);

// ie9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: global.setInterval !== setInterval }, {
  setInterval: setInterval
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.set-timeout.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-timeout.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setTimeout = (__webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js").setTimeout);

// ie9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({ global: true, bind: true, forced: global.setTimeout !== setTimeout }, {
  setTimeout: setTimeout
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/web.set-interval */ "./node_modules/core-js/modules/web.set-interval.js");
__webpack_require__(/*! ../modules/web.set-timeout */ "./node_modules/core-js/modules/web.set-timeout.js");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-8f6080"], () => (__webpack_exec__("./assets/components/salarie/salarie.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ2xJRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsa0JBQWtCLDBIQUFrRDtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFzRTtBQUMxRTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDUkQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGlCQUFpQix5SEFBaUQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvRUFBb0U7QUFDeEU7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1JEO0FBQ0EsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDckMsbUJBQU8sQ0FBQyxxRkFBNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zYWxhcmllL3NhbGFyaWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIudG8tZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuc2V0LWludGVydmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC10aW1lb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgICQoXCIuYmxvY2tfcGFnZVwiKS5odG1sKCdHZXN0aW9uIGRlcyBzYWxhcmllcycpXHJcblxyXG4gICAgdmFyIGVtcGxveWVfaWQgPSAwIDtcclxuICAgIHZhciBjb250cmFjdF9pZCA9IDAgO1xyXG4gICAgdmFyIGNuc3NpZCA9IDAgO1xyXG4gICAgdmFyIGNpbXJpZCA9IDAgO1xyXG4gICAgdmFyIHJpYmlkID0gMCA7XHJcbiAgICBkaXBsb21lcyA9ICBbXTtcclxuICAgIGlkX2RpcGxvbWUgPSAwO1xyXG4gICAgc2VsZWN0ZWREYXRhQXR0ciA9ICcnO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVfc2hvdyhoaWRlLGhpZGVfMixzaG93LHNob3dfMil7XHJcbiAgICAgICAgJChcImJvZHkgXCIgK3Nob3cpLnJlbW92ZUNsYXNzKCdub2NsaWNrJyk7XHJcbiAgICAgICAgJChcImJvZHkgXCIgK3Nob3cpLmFkZENsYXNzKCdjbGljayBhY3RpdmUnKTsgXHJcbiAgICAgICAgJChcImJvZHkgXCIgK3Nob3dfMikuYWRkQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7IFxyXG5cclxuICAgICAgICAkKFwiYm9keSBcIiAraGlkZSkucmVtb3ZlQ2xhc3MoJ2NsaWNrJykuYWRkQ2xhc3MoJ25vY2xpY2snKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgXHJcbiAgICAgICAgJChcImJvZHkgXCIgK2hpZGVfMikucmVtb3ZlQ2xhc3MoJ3Nob3cnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICB2YXIgcHJldmlvdXNYaHIgPSBudWxsO1xyXG4gICAgXHJcbiAgICB2YXIgdGFibGUgPSAgJCgnI2V4YW1wbGUnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfc2FsYXJpZV9zYWxhcmllX2xpc3QnKSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbihqcVhIUikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBwcmV2aW91cyBqcVhIUiBvYmplY3QsIGFib3J0IGl0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzWGhyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWGhyLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBjdXJyZW50IGpxWEhSIG9iamVjdCBmb3IgdGhlIG5ldyByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNYaHIgPSBqcVhIUjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgICAgIHtuYW1lOiAncC5pZCcsIGRhdGE6ICdlbXBsb3llX2lkJ30sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogJ3AubWF0cmljdWxlJywgZGF0YTogJ21hdHJpY3VsZSd9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6ICdwLm5vbScsIGRhdGE6ICdub20nfSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOiAncC5wcmVub20nLCBkYXRhOiAncHJlbm9tJ30sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogJ3AuY2luJywgZGF0YTogJ2Npbid9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6ICdjLmNvZGUnLCBkYXRhOiAnY29udHJhY3QnfSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOiAnbi5kZXNpZ25hdGlvbicsIGRhdGE6ICduYXR1cmUnfSxcclxuICAgICAgICAgICAgICAgIHtvcmRlcmFibGU6IGZhbHNlICwgc2VhcmNoYWJsZTogZmFsc2UsIGRhdGE6ICdlbXBsb3llX2lkJ30gXHJcblxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjb2x1bW5EZWZzOiBbIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGkgY2xhc3M9J2ZhIGZhLWV5ZSB0ZXh0LWluZm8gY29udHJhY3RkZXQnIHJvbGU9XCJidXR0b25cIiBpZD1cIiR7ZGF0YX1cIj48L2k+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiBkYXRhdGFibGVzRnJlbmNoLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbmF0dXJlQ2FiID0gbnVsbDtcclxuICAgICAgICAkKCcubmF2LXBpbGxzIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRhYignc2hvdycpICAgICAgICBcclxuICAgICAgICAgICAgLy8gYWxlcnQoZG9zc2llcklkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChcIiNham91dGVyXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX21vZGlmaWVyICNwbHVzX2luZm9fdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNwbHVzX2luZm9fdXBkYXRlJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRjaXZpbCcsJyNtb2RhbF9ham91dGVyICNldGF0X2NpdmlsJyk7XHJcbiAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX21vZGlmaWVyICNldGF0Y2l2aWxfdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNldGF0Y2l2aWxfdXBkYXRlJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRjaXZpbCcsJyNtb2RhbF9ham91dGVyICNldGF0X2NpdmlsJyk7XHJcbiAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX21vZGlmaWVyICNjbnNzX3JpYl91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2Nuc3NfcmliX3VwZGF0ZScsJyNtb2RhbF9ham91dGVyICNldGF0Y2l2aWwnLCcjbW9kYWxfYWpvdXRlciAjZXRhdF9jaXZpbCcpO1xyXG4gICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9tb2RpZmllciAjY29udHJhY3RfdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNjb250cmF0X3VwZGF0ZScsJyNtb2RhbF9ham91dGVyICNldGF0Y2l2aWwnLCcjbW9kYWxfYWpvdXRlciAjZXRhdF9jaXZpbCcpO1xyXG4gICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9ham91dGVyICNwbHVzX2luZm8nLCcjbW9kYWxfYWpvdXRlciAjcGx1c19pbmZvJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRjaXZpbCcsJyNtb2RhbF9ham91dGVyICNldGF0X2NpdmlsJyk7XHJcbiAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX2Fqb3V0ZXIgI2V0YXRjaXZpbCcsJyNtb2RhbF9ham91dGVyICNldGF0Y2l2aWwnLCcjbW9kYWxfYWpvdXRlciAjZXRhdGNpdmlsJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRfY2l2aWwnKTtcclxuICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfYWpvdXRlciAjY25zc19yaWInLCcjbW9kYWxfYWpvdXRlciAjY25zc19yaWInLCcjbW9kYWxfYWpvdXRlciAjZXRhdGNpdmlsJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRfY2l2aWwnKTtcclxuICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfYWpvdXRlciAjY29udHJhY3QnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhdCcsJyNtb2RhbF9ham91dGVyICNldGF0Y2l2aWwnLCcjbW9kYWxfYWpvdXRlciAjZXRhdF9jaXZpbCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICQoXCIjbW9kYWxfYWpvdXRlclwiKS5tb2RhbChcInNob3dcIilcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoXCIjcmVnaXN0ZXJcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlciA9IGNyZWF0ZUNhbmNlbCgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgICAgICB0eXBlOlwiaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbiBjb3Vycy4uLlwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwLFxyXG4gICAgICAgICAgICB9KTsgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcmVnaXN0ZXJfbmV3JyksIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5jZWxUb2tlbjogY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyLnRva2VufVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOlwiaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChcIi5uYXR1cmVfc2FsYXJpZVwiKS5vbihcImNoYW5nZVwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbmF0dXJlQ2FiID0gJCh0aGlzKS52YWwoKVxyXG4gICAgICAgICAgICBpZihuYXR1cmVDYWIgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobmF0dXJlQ2FiID09IDEpIHtcclxuICAgICAgICAgICAgICAgICQoXCIudHlwZV9jbnNzXCIpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnR5cGVfY25zc1wiKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlciA9IGNyZWF0ZUNhbmNlbCgpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBpX2dldG5hdHVyZXNhbGFyaWV0eXBlJywge25hdHVyZUNhYn0pLCBcclxuICAgICAgICAgICAgICAgICAgICB7Y2FuY2VsVG9rZW46IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlci50b2tlbn1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgICQoJy5uYXR1cmVfdHlwZScpLmh0bWwocmVzcG9uc2UudHlwZXMpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdHVyZV9jb250cmF0JykuaHRtbChyZXNwb25zZS5jb250cmF0cyk7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZmlsZScpLmh0bWwocmVzcG9uc2Uubml2ZWF1eCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCdib2R5IC5zaXR1YXRpb25fZmFtaWxpYWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKCQodGhpcykudmFsKCkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgJCgnI25vbWJyZV9lbmZhbnQnKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbm9tYnJlX2VuZmFudCcpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICQoXCIubmF0dXJlX2NvbnRyYXRcIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKCQodGhpcykudmFsKCkgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyID0gY3JlYXRlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSAkKHRoaXMpLmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHZhbHVlIGFuZCBkYXRhLWF0dHIgYXR0cmlidXRlIG9mIHRoZSBzZWxlY3RlZCBvcHRpb25cclxuICAgICAgICAgICAgLy8gdmFyIHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZE9wdGlvbi52YWwoKTtcclxuICAgICAgICAgICAgIHNlbGVjdGVkRGF0YUF0dHIgPSBzZWxlY3RlZE9wdGlvbi5kYXRhKFwiYXR0clwiKTtcclxuICAgIFxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBpX2dldGR1cmVlY29udHJhdCcsIHsnbmF0dXJlQ29udHJhdCc6IGlkfSksIFxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5jZWxUb2tlbjogY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyLnRva2VufVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgJCgnLmR1cmVlX2NvbnRyYXQnKS5odG1sKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgbm90eWYuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChcIi5wcm9maWxcIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnZhbCgpID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlciA9IGNyZWF0ZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICB2YXIgcHJvZmlsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoc2VsZWN0ZWREYXRhQXR0cik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QyID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfZ2V0YmFyZW1lX2NvbnRyYWN0JywgeyduYXR1cmVDb250cmF0Jzogc2VsZWN0ZWREYXRhQXR0ciwgJ3Byb2ZpbCc6cHJvZmlsfSksXHJcbiAgICAgICAgICAgICAgICAgICAgeyBjYW5jZWxUb2tlbjogY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyLnRva2VuIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZTIgPSByZXF1ZXN0Mi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgJCgnLmJhcmVtZScpLmh0bWwocmVzcG9uc2UyKTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKFwiLmJhcmVtZVwiKS5vbihcImNoYW5nZVwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEcm9wZG93biBjaGFuZ2VkXCIpO1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnZhbCgpID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlciA9IGNyZWF0ZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSAkKHRoaXMpLmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgdmFyIHNlbGVjdGVkRGF0YXNhbCA9IHNlbGVjdGVkT3B0aW9uLmRhdGEoXCJhdHRyXCIpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGZpZWxkXHJcbiAgICAgICAgICAgICAgICAkKCcuc2FsYWlyZV9ncmlsbGUnKS52YWwoc2VsZWN0ZWREYXRhc2FsKTtcclxuICAgICAgICAgICAgfSwgMTAwKTsgXHJcblxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAkKFwiLnByb2ZpbGVcIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKCQodGhpcykudmFsKCkgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyID0gY3JlYXRlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIGxldCBuaXZlYXUgPSAkKHRoaXMpLnZhbCgpXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9nZXRiYXJlbWUnLCB7J25pdmVhdSc6bml2ZWF1ICwgJ25hdHVyZUNhYic6bmF0dXJlQ2FifSksIFxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5jZWxUb2tlbjogY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyLnRva2VufVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgJCgnLmJhcmVtZScpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChcIi5iYXJlbWVcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoXCIuc2FsYWlyZV9ncmlsbGVcIikudmFsKCQodGhpcykuZmluZChcIjpzZWxlY3RlZFwiKS5hdHRyKCdkYXRhLXBheWUnKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoXCIuc2FsYWlyZV9hZmZlY3RlXCIpLm9uKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBsZXQgc2FsYWlyZUFmZmVjdGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICBpZihzYWxhaXJlQWZmZWN0ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjcHBjJykudmFsKFwiXCIpXHJcbiAgICAgICAgICAgICAgICAkKCcjcnBjJykudmFsKFwiXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNhbGFpcmVHcmlsbGUgPSAkKFwiLnNhbGFpcmVfZ3JpbGxlXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdGUgPSBzYWxhaXJlQWZmZWN0ZSAtIHNhbGFpcmVHcmlsbGU7XHJcbiAgICAgICAgICAgIGlmKHJlc3RlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICQoJyNycGMnKS52YWwoKHJlc3RlICogLTEpLnRvRml4ZWQoMikpXHJcbiAgICAgICAgICAgICAgICAkKCcjcHBjJykudmFsKFwiXCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjcnBjJykudmFsKFwiXCIpXHJcbiAgICAgICAgICAgICAgICAkKCcjcHBjJykudmFsKHJlc3RlLnRvRml4ZWQoMikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICQoXCIjcmliXCIpLm9uKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnZhbCgpLmxlbmd0aCA9PSAyNCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5jaGVja0NsYXNzXCIpLmNzcygnY29sb3InLCAnY2FkZXRibHVlJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIuY2hlY2tDbGFzc1wiKS5jc3MoJ2NvbG9yJywgJ2JsYWNrJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChcIiNtb2RhbF9ham91dGVyICNuZXdfc2FsYXJpZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGRpcGxvbWVzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyID0gY3JlYXRlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOlwiaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW4gY291cnMuLi5cIixcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTsgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJkaXBsb21lc1wiLEpTT04uc3RyaW5naWZ5KGRpcGxvbWVzKSk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfc2FsYXJpZV9zYWxhcmllX25ldycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5jZWxUb2tlbjogY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyLnRva2VufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICBlbXBsb3llX2lkID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vaGlkZSAvIHNob3cgXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfYWpvdXRlciAjZXRhdGNpdmlsJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRfY2l2aWwnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhY3QnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbm90eWYuZXJyb3IoXCJNZXJjaSBkZSByZW1wbGlyIGxlcyBkaXBsw7RtZXNcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vRGlwbG9tZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gICAgICAgIFxyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0bmRlbGV0ZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgIHZhciBpZCA9ICQodGhpcykuY2xvc2VzdCgndHInKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xyXG4gICAgICAgdmFyIG5ld2FycmF5ID0gZGlwbG9tZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9IGlkKTtcclxuICAgICAgIGRpcGxvbWVzID0gbmV3YXJyYXk7XHJcblxyXG4gICAgXHJcbiB9KTtcclxuIFxyXG4kKCcuYWRkX2RpcGxvbWUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgaWRfZGlwbG9tZSA9IGlkX2RpcGxvbWUgKyAxO1xyXG4gICAgICAgIHZhciBOaXZlYXUgPSAkKFwiI21vZGFsX2Fqb3V0ZXIgLm5ld19kaXBcIikuZmluZChcIjpzZWxlY3RlZFwiKS50ZXh0KCk7XHJcbiAgICAgICAgdmFyIERpcGxvbWUgPSAkKFwiI2RpcGxvbWVcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIERlc2lnbmF0aW9uID0gJChcIiNkZXNpZ25hdGlvbl9kaXBsb21lXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBFY29sZSA9ICQoXCIjRWNvbGVfZGlwbG9tZVwiKS52YWwoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAkKCcjYm9keV9kaXBsb21lIHRyOmxhc3QnKS5hZnRlcignPHRyIGlkPVwiJytpZF9kaXBsb21lICsnXCI+PHRkPicrTml2ZWF1Kyc8L3RkPjx0ZCBpZD1cIicrRGlwbG9tZSArJ1wiPidcclxuICAgICAgICAgICAgICtEaXBsb21lKyc8L3RkPjx0ZCAgaWRcIicrIERlc2lnbmF0aW9uKydcIj4nK0Rlc2lnbmF0aW9uKyc8L3RkPjx0ZCAgaWRcIicrIEVjb2xlKydcIj4nK0Vjb2xlKyc8L3RkPjx0ZD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG5kZWxldGVcIj54PC9idXR0b24+PC90ZD48L3RyPicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpcGxvbWVzLnB1c2goe1wibnZfZGlwXCI6IE5pdmVhdSxcIkRpcGxvbWVcIjpEaXBsb21lLFwiRGVzaWduYXRpb25cIjpEZXNpZ25hdGlvbixcIkVjb2xlXCI6RWNvbGUsXCJpZFwiOmlkX2RpcGxvbWV9KTtcclxuXHJcbn0pO1xyXG4gICAgLy8vL2hpZGUgYW5kIHNob3cgcG9wdXAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2Nuc3MvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgIFxyXG5cclxuICAgICAgICAkKFwiI21vZGFsX2Fqb3V0ZXIgI25ld19jb250cmFjdFwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlciA9IGNyZWF0ZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6XCJpbmZvXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAsXHJcbiAgICAgICAgICAgIH0pOyAgICBcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJlbXBsb3llX2lkXCIsZW1wbG95ZV9pZCk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBwX3NhbGFyaWVfY29udHJhY3QnKSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSwgXHJcbiAgICAgICAgICAgICAgICAgICAge2NhbmNlbFRva2VuOiBjcmVhdGVDYW5jZWxUb2tlbkhhbmRsZXIudG9rZW59XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb250cmFjdF9pZCA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vaGlkZSAvIHNob3cgXHJcbiAgICAgICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9ham91dGVyICNjb250cmFjdCcsJyNtb2RhbF9ham91dGVyICNjb250cmF0JywnI21vZGFsX2Fqb3V0ZXIgI2Nuc3NfcmliJywnI21vZGFsX2Fqb3V0ZXIgI2Nuc3NfcmliJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChcIiNtb2RhbF9ham91dGVyICNuZXdfY25zc1wiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyID0gY3JlYXRlQ2FuY2VsKCk7XHJcbiAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgIHR5cGU6XCJpbmZvXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW4gY291cnMuLi5cIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwLFxyXG4gICAgICAgIH0pOyAgICBcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY29udHJhY3RfaWRcIixjb250cmFjdF9pZCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBwX3NhbGFyaWVfY25zcycpLFxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEsIFxyXG4gICAgICAgICAgICAgICAge2NhbmNlbFRva2VuOiBjcmVhdGVDYW5jZWxUb2tlbkhhbmRsZXIudG9rZW59XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnRyYWN0X2lkID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vL2hpZGUgLyBzaG93IFxyXG4gICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9ham91dGVyICNjbnNzX3JpYicsJyNtb2RhbF9ham91dGVyICNjbnNzX3JpYicsJyNtb2RhbF9ham91dGVyICNwbHVzX2luZm8nLCcjbW9kYWxfYWpvdXRlciAjcGx1c19pbmZvJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICAgICAgICAkKFwiI21vZGFsX2Fqb3V0ZXIgI25ld19wbHVzXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVDYW5jZWxUb2tlbkhhbmRsZXIgPSBjcmVhdGVDYW5jZWwoKTtcclxuICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbiBjb3Vycy4uLlwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAsXHJcbiAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJlbXBsb3llX2lkXCIsZW1wbG95ZV9pZCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBwX3NhbGFyaWVfcGx1c2luZm8nKSxcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLCBcclxuICAgICAgICAgICAgICAgIHtjYW5jZWxUb2tlbjogY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyLnRva2VufVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG5cclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy9oaWRlIC8gc2hvdyBcclxuICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfYWpvdXRlciAjcGx1c19pbmZvJywnI21vZGFsX2Fqb3V0ZXIgI3BsdXNfaW5mbycsJyNtb2RhbF9ham91dGVyICNldGF0Y2l2aWwnLCcjbW9kYWxfYWpvdXRlciAjZXRhdGNpdmlsJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAkKFwiYm9keSAuYnRuY2xvc2VcIikuY2xpY2soKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jb250cmFjdGRldCcsICBmdW5jdGlvbigpIHtcclxuIFxyXG4gICAgICAgIGVtcGxveWVfaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyID0gY3JlYXRlQ2FuY2VsKCk7XHJcbiAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAkLmFqYXgoeyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfc2FsYXJpZV9jb250cmFjdGFmZicpLFxyXG4gICAgICAgICAgICAgICAgZGF0YTonZW1wbG95ZV9pZD0nK2VtcGxveWVfaWQsXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbiBjb3Vycy4uLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjY29udHJhdF9saXN0X2RldGFpbHNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbnRyYXRfbGlzdF9kZXRhaWxzJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb250cmFjdF9ib2R5JykuaHRtbChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2NvbnRyYXRfbGlzdF9kZXRhaWxzXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBkYXRhdGFibGVzRnJlbmNoLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb250cmFjdE1vZGFsXCIpLm1vZGFsKCdzaG93JylcclxuICAgICAgICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LGVycm9yOmZ1bmN0aW9uKGRhdGEpe1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgICBcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9VcGRhdGUgbW9kYWxlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gICAgXHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNlZGl0Q29udHJhY3QnLCAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfbW9kaWZpZXIgI3BsdXNfaW5mb191cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI3BsdXNfaW5mb191cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYWN0X3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjY29udHJhdF91cGRhdGUnKTtcclxuICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9tb2RpZmllciAjZXRhdGNpdmlsX3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjZXRhdGNpdmlsX3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjY29udHJhY3RfdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNjb250cmF0X3VwZGF0ZScpO1xyXG4gICAgICAgIGhpZGVfc2hvdygnI21vZGFsX21vZGlmaWVyICNjbnNzX3JpYl91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2Nuc3NfcmliX3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjY29udHJhY3RfdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNjb250cmF0X3VwZGF0ZScpO1xyXG4gICAgICAgIGhpZGVfc2hvdygnI21vZGFsX2Fqb3V0ZXIgI3BsdXNfaW5mbycsJyNtb2RhbF9ham91dGVyICNwbHVzX2luZm8nLCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYWN0X3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjY29udHJhdF91cGRhdGUnKTtcclxuICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9ham91dGVyICNldGF0Y2l2aWwnLCcjbW9kYWxfYWpvdXRlciAjZXRhdGNpdmlsJywnI21vZGFsX21vZGlmaWVyICNjb250cmFjdF91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYXRfdXBkYXRlJyk7XHJcbiAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfYWpvdXRlciAjY25zc19yaWInLCcjbW9kYWxfYWpvdXRlciAjY25zc19yaWInLCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYWN0X3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjY29udHJhdF91cGRhdGUnKTtcclxuICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9ham91dGVyICNjb250cmF0JywnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYXQnLCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYWN0X3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjY29udHJhdF91cGRhdGUnKTtcclxuXHJcbiAgICAgICAgY29udHJhY3RJZCA9ICQodGhpcykuYXR0cihcImRhdGEtdmFsdWVcIik7XHJcbiAgICAgICAgJCgnLmNvbnRyYWN0ZGV0YnRuJykuY2xpY2soKTtcclxuXHJcbiAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllclwiKS5tb2RhbChcInNob3dcIilcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTWFrZSBhbiBBSkFYIHJlcXVlc3QgdG8gZmV0Y2ggY29udHJhY3QgZGV0YWlscyBiYXNlZCBvbiB0aGUgY29udHJhY3RJZFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9zYWxhcmllX2NvbnRyYWN0aW5mbycpLCAgICAgICAgICAgIC8vIEFkanVzdCB0aGUgVVJMIHRvIHlvdXIgc2VydmVyIGVuZHBvaW50XHJcbiAgICAgICAgICAgIGRhdGE6IHsgY29udHJhY3RfaWQ6IGNvbnRyYWN0SWQgfSwgLy8gU2VuZCB0aGUgY29udHJhY3QgSUQgYXMgZGF0YVxyXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNob3cgbG9hZGluZyBpbmRpY2F0b3Igb3IgZG8gb3RoZXIgYWN0aW9ucyBiZWZvcmUgdGhlIHJlcXVlc3QgaXMgc2VudFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBkYXRhWzBdWydwbmF0dXJlaWQnXTtcclxuICAgICAgICAgICAgICAgIHZhciBkdXJlID0gZGF0YVswXVsnaWRkdXJlJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZWMgPSBkYXRhWzBdWydkYXRlX2RlYnV0J11bJ2RhdGUnXTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlYyA9IGRhdGVjLnNwbGl0KFwiIFwiKVswXTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlZiA9IGRhdGFbMF1bJ2RhdGVfZmluJ11bJ2RhdGUnXTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlZiA9IGRhdGVmLnNwbGl0KFwiIFwiKVswXTtcclxuICAgICAgICAgICAgICAgIHZhciBzYWxhaXJlYWYgPSBkYXRhWzBdWydTYWxhaXJlYWZmZWN0ZSddO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNhbGFpcmVncmlsbGUgPSBkYXRhWzBdWydTYWxhaXJlZ3JpbGxlJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFyZW1lID0gZGF0YVswXVsnYmFyZW1lJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgZm9uY3Rpb25pZCA9IGRhdGFbMF1bJ2ZvbmN0aW9uaWQnXTtcclxuICAgICAgICAgICAgICAgIHZhciBkb3NzaWVyID0gZGF0YVswXVsnZG9zc2llciddO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBwYyA9IGRhdGFbMF1bJ1BQQyddO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJwYyA9IGRhdGFbMF1bJ1JQQyddO1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb2ZpbCA9IGRhdGFbMF1bJ1Byb2ZpbCddO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAkKFwiI21vZGFsX21vZGlmaWVyIC5uYXR1cmVfY29udHJhdCBvcHRpb25baWQ9J1wiICsgaWQgKyBcIiddXCIpLnByb3AoXCJzZWxlY3RlZFwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRtYXRjaGluZ09wdGlvbiA9ICQoXCIjbW9kYWxfbW9kaWZpZXIgLmJhcmVtZSBvcHRpb25bdmFsdWU9J1wiICsgYmFyZW1lICsgXCInXVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAuYmFyZW1lXCIpLnZhbCgkbWF0Y2hpbmdPcHRpb24udmFsKCkpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAuYmFyZW1lXCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRtYXRjaGluZ2JhcmVtZSA9ICQoXCIjbW9kYWxfbW9kaWZpZXIgLm5hdHVyZV9jb250cmF0IG9wdGlvblt2YWx1ZT0nXCIgKyBpZCArIFwiJ11cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXIgLm5hdHVyZV9jb250cmF0XCIpLnZhbCgkbWF0Y2hpbmdiYXJlbWUudmFsKCkpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAubmF0dXJlX2NvbnRyYXRcIikucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgJG1hdGNoaW5nZG9zc2llciA9ICQoXCIjbW9kYWxfbW9kaWZpZXIgLmFmZmVjdGF0aW9uIG9wdGlvblt2YWx1ZT0nXCIgKyBkb3NzaWVyICsgXCInXVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAuYWZmZWN0YXRpb25cIikudmFsKCRtYXRjaGluZ2Rvc3NpZXIudmFsKCkpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAuYWZmZWN0YXRpb25cIikucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgJG1hdGNoaW5nZm9uY3Rpb24gPSAkKFwiI21vZGFsX21vZGlmaWVyIC5mb25jdGlvbiBvcHRpb25bdmFsdWU9J1wiICsgZm9uY3Rpb25pZCArIFwiJ11cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXIgLmZvbmN0aW9uXCIpLnZhbCgkbWF0Y2hpbmdmb25jdGlvbi52YWwoKSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21vZGFsX21vZGlmaWVyIC5kYXRlX2NvbnRyYXRcIikudmFsKGRhdGVjKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21vZGFsX21vZGlmaWVyIC5kYXRlX2ZpblwiKS52YWwoZGF0ZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAuc2FsYWlyZV9ncmlsbGVcIikudmFsKHNhbGFpcmVncmlsbGUpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcImJvZHkgI21vZGFsX21vZGlmaWVyIC5zYWxhaXJlX2dyaWxsZVwiKS5wcm9wKFwicmVhZG9ubHlcIiwgdHJ1ZSk7ICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAuc2FsYWlyZV9hZmZlY3RlXCIpLnZhbChzYWxhaXJlYWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJib2R5ICNtb2RhbF9tb2RpZmllciAuc2FsYWlyZV9hZmZlY3RlXCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTsgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAjcHBjXCIpLnZhbChwcGMpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcImJvZHkgI21vZGFsX21vZGlmaWVyICAjcHBjXCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTsgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAgI3JwY1wiKS52YWwocnBjKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiYm9keSAjbW9kYWxfbW9kaWZpZXIgICNycGNcIikucHJvcChcImRpc2FibGVkXCIsIHRydWUpOyAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgc3VjY2VzcyByZXNwb25zZSBoZXJlLCBlLmcuLCB1cGRhdGUgdGhlIG1vZGFsIGNvbnRlbnQgd2l0aCB0aGUgZmV0Y2hlZCBkZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHt2YXIgJG1hdGNoaW5nT3B0aW9uMiA9ICQoXCJib2R5ICNtb2RhbF9tb2RpZmllciAuZHVyZWVfY29udHJhdCBvcHRpb25bdmFsdWU9J1wiICsgZHVyZSArIFwiJ11cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCJib2R5ICNtb2RhbF9tb2RpZmllciAuZHVyZWVfY29udHJhdFwiKS52YWwoJG1hdGNoaW5nT3B0aW9uMi52YWwoKSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiYm9keSAjbW9kYWxfbW9kaWZpZXIgLmR1cmVlX2NvbnRyYXRcIikucHJvcChcImRpc2FibGVkXCIsIHRydWUpOyAgICAgICAgICAgICAgICB9LCAxNTAwKTsgLy8gMzAwMCBtaWxsaXNlY29uZHMgPSAzIHNlY29uZHNcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3ZhciAkbWF0Y2hpbmdwcm9maWwgPSAkKFwiI21vZGFsX21vZGlmaWVyIC5wcm9maWwgb3B0aW9uW3ZhbHVlPSdcIiArIHByb2ZpbCArIFwiJ11cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCJib2R5ICNtb2RhbF9tb2RpZmllciAucHJvZmlsXCIpLnZhbCgkbWF0Y2hpbmdwcm9maWwudmFsKCkpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcImJvZHkgI21vZGFsX21vZGlmaWVyIC5wcm9maWxcIikucHJvcChcImRpc2FibGVkXCIsIHRydWUpOyAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgeW91IGNhbiBwb3B1bGF0ZSBhIGZvcm0gd2l0aCB0aGUgZmV0Y2hlZCBkYXRhXHJcbiAgICAgICAgICAgICAgICAvLyAkKFwiI2NvbnRyYWN0LWRldGFpbHMtZm9ybVwiKS5odG1sKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgJCgnLmNvbnRyYWN0ZGV0YnRuJykuY2xpY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzLCBlLmcuLCBzaG93IGFuIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3JUaHJvd24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuXHJcblxyXG5cclxuJChcImJvZHkgI21vZGFsX21vZGlmaWVyICNjbnRjX2J0blwiKS5vbihcImNsaWNrXCIsICBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZWRlYnV0ID0gJChcIiNtb2RhbF9tb2RpZmllciAuZGF0ZV9jb250cmF0XCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGVmaW4gPSAkKFwiI21vZGFsX21vZGlmaWVyIC5kYXRlX2ZpblwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIHZhciBmb25jdGlvbnVwZGF0ZSA9ICQoXCIjbW9kYWxfbW9kaWZpZXIgLmZvbmN0aW9uXCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9zYWxhcmllX3VwZGF0ZWNvbnRyYWN0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb250cmFjdF9pZCcgOmNvbnRyYWN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRlX2NvbnRyYXQnIDpkYXRlZGVidXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRlX2ZpbicgOmRhdGVmaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmb25jdGlvbicgOmZvbmN0aW9udXBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XCJpbmZvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbnRyYWN0X2JvZHknKS5odG1sKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYWN0X3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjY29udHJhdF91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2Nuc3NfcmliX3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjY25zc19yaWJfdXBkYXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9zYWxhcmllX2dldF9jbnNzX2NpbXInKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbnRyYWN0X2lkJyA6Y29udHJhY3RJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAnZGF0YScgY29udGFpbnMgdGhlIGFycmF5IG9mIG9iamVjdHMgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIGFycmF5IHVzaW5nICQuZWFjaCgpXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBY2Nlc3MgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFicmV2aWF0aW9uID0gaXRlbS5hYnJldmlhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZV9pZCA9IGl0ZW0udHlwZV9pZDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29kZSA9IGl0ZW0uY29kZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0ZV9hZmZpbGlhdGlvbiA9IGl0ZW0uZGF0ZV9hZmZpbGlhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmliID0gaXRlbS5yaWI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvdGlzaWQgPSBpdGVtLmNvdGlzaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmliaWQgPSBpdGVtLnJpYmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIGFjdGlvbnMgZm9yIGVhY2ggaXRlbSwgZS5nLiwgZGlzcGxheSBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmRleDpcIiwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSUQ6XCIsIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFicmV2aWF0aW9uOlwiLCBhYnJldmlhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUeXBlIElEOlwiLCB0eXBlX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvZGU6XCIsIGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0ZSBBZmZpbGlhdGlvbjpcIiwgZGF0ZV9hZmZpbGlhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSSUI6XCIsIHJpYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVfaWQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI21vZGFsX21vZGlmaWVyICNjbnNzXCIpLnZhbChjb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI21vZGFsX21vZGlmaWVyICNkYXRlX2RlY2xhcmF0aW9uX2Nuc3NcIikudmFsKGRhdGVfYWZmaWxpYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbnNzaWQgPSBjb3Rpc2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZV9pZCA9PT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAjY2ltclwiKS52YWwoY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAjZGF0ZV9kZWNsYXJhdGlvbl9jaW1yXCIpLnZhbChkYXRlX2FmZmlsaWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI21vZGFsX21vZGlmaWVyICNyaWJcIikudmFsKHJpYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpbXJpZCA9IGNvdGlzaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxlcnJvcjpmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXJyb3IgTWlzIGEgam91ciBjb250cmFjdCAhICFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA5MDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikgeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSxlcnJvcjpmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXJyb3IgTWlzIGEgam91ciBjb250cmFjdCAhICFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA5MDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikgeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCJib2R5ICNtb2RhbF9tb2RpZmllciAjY25zc19idG5cIikub24oXCJjbGlja1wiLCAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY25zcyA9ICQoXCIjbW9kYWxfbW9kaWZpZXIgI2Nuc3NfcmliX3VwZGF0ZSAjY25zc1wiKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIGRhdGVfY25zcyA9ICQoXCIjbW9kYWxfbW9kaWZpZXIgI2Nuc3NfcmliX3VwZGF0ZSAjZGF0ZV9kZWNsYXJhdGlvbl9jbnNzXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgY2ltciA9ICQoXCIjbW9kYWxfbW9kaWZpZXIgI2Nuc3NfcmliX3VwZGF0ZSAjY2ltclwiKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIGRhdGVfY2ltciA9ICQoXCIjbW9kYWxfbW9kaWZpZXIgI2Nuc3NfcmliX3VwZGF0ZSAjZGF0ZV9kZWNsYXJhdGlvbl9jaW1yXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgcmlidXBkYXRlZCA9ICQoXCIjbW9kYWxfbW9kaWZpZXIgI2Nuc3NfcmliX3VwZGF0ZSAjcmliXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfc2FsYXJpZV91cGRhdGVjb3RpcycpLFxyXG4gICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2Nuc3NpZCc6Y25zc2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICdjaW1yaWQnOmNpbXJpZCxcclxuICAgICAgICAgICAgICAgICAgICAnY25zc3VwJzpjbnNzLFxyXG4gICAgICAgICAgICAgICAgICAgICdkYXRlX2Nuc3N1cCc6ZGF0ZV9jbnNzLFxyXG4gICAgICAgICAgICAgICAgICAgICdjaW1ydXAnOmNpbXIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGVfY2ltcic6ZGF0ZV9jaW1yLFxyXG4gICAgICAgICAgICAgICAgICAgICdyaWJ1cCc6cmlidXBkYXRlZCxcclxuICAgICAgICAgICAgICAgICAgICAncmliaWQnOnJpYmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfbW9kaWZpZXIgI3BsdXNfaW5mb191cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI3BsdXNfaW5mb191cGRhdGUnLCcjbW9kYWxfYWpvdXRlciAjZXRhdGNpdmlsJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRjaXZpbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICBoaWRlX3Nob3coJyNtb2RhbF9tb2RpZmllciAjcGx1c19pbmZvX3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjcGx1c19pbmZvX3VwZGF0ZScsJ2NpdmljaXZpbCcsJyNtb2RhbF9tb2RpZmllciAjZXRhdGNpdmlsX3VwZGF0ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiYm9keSAuYnRuY2xvc2VcIikuY2xpY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIH0sZXJyb3I6ZnVuY3Rpb24oZGF0YSl7XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgXHJcbiAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgICB9IGNhdGNoIChlcnJvcikgeyAgIFxyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNham91dGVyQ29udHJhY3QnLCAgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfbW9kaWZpZXIgI3BsdXNfaW5mb191cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI3BsdXNfaW5mb191cGRhdGUnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhY3QnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhdCcpO1xyXG4gICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9tb2RpZmllciAjZXRhdGNpdmlsX3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjZXRhdGNpdmlsX3VwZGF0ZScsJyNtb2RhbF9ham91dGVyICNjb250cmFjdCcsJyNtb2RhbF9ham91dGVyICNjb250cmF0Jyk7XHJcbiAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX21vZGlmaWVyICNjbnNzX3JpYl91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2Nuc3NfcmliX3VwZGF0ZScsJyNtb2RhbF9ham91dGVyICNjb250cmFjdCcsJyNtb2RhbF9ham91dGVyICNjb250cmF0Jyk7XHJcbiAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX21vZGlmaWVyICNjb250cmFjdF91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYXRfdXBkYXRlJywnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYWN0JywnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYXQnKTtcclxuICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfYWpvdXRlciAjcGx1c19pbmZvJywnI21vZGFsX2Fqb3V0ZXIgI3BsdXNfaW5mbycsJyNtb2RhbF9ham91dGVyICNjb250cmFjdCcsJyNtb2RhbF9ham91dGVyICNjb250cmF0Jyk7XHJcbiAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX2Fqb3V0ZXIgI2V0YXRjaXZpbCcsJyNtb2RhbF9ham91dGVyICNldGF0Y2l2aWwnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhY3QnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhdCcpO1xyXG4gICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9ham91dGVyICNjbnNzX3JpYicsJyNtb2RhbF9ham91dGVyICNjbnNzX3JpYicsJyNtb2RhbF9ham91dGVyICNjb250cmFjdCcsJyNtb2RhbF9ham91dGVyICNjb250cmF0Jyk7XHJcbiAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYWN0JywnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYXQnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhY3QnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhdCcpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfYWpvdXRlciAjY29udHJhY3QnKS5jbGljaygpO1xyXG4gICAgICAgICAgICAkKFwiYm9keSAuY29udHJhY3RkZXRidG5cIikuY2xpY2soKTtcclxuICAgICAgICAgICAgJChcIiNtb2RhbF9ham91dGVyXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVsbGlwc2lzSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVsbGlwc2lzXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZWxsaXBzaXNJY29ucy5mb3JFYWNoKGZ1bmN0aW9uIChpY29uKSB7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVkaXRCdXR0b25zID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvbnMuc3R5bGUuZGlzcGxheSA9IChlZGl0QnV0dG9ucy5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpID8gXCJub25lXCIgOiBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcclxudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XHJcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XHJcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcclxudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcclxudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGgnKTtcclxuXHJcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXHJcbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcclxuXHJcbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xyXG4gIHJldHVybiBNU0lFID8gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcclxuICAgIHZhciBib3VuZEFyZ3MgPSB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aChhcmd1bWVudHMubGVuZ3RoLCAxKSA+IDI7XHJcbiAgICB2YXIgZm4gPSBpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpO1xyXG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYXBwbHkoZm4sIHRoaXMsIGFyZ3MpO1xyXG4gICAgfSA6IGZuLCB0aW1lb3V0KTtcclxuICB9IDogc2NoZWR1bGVyO1xyXG59O1xyXG5cclxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxyXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXHJcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxyXG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxyXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXHJcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcclxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xyXG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XHJcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xyXG5cclxudmFyICRSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcclxuXHJcbi8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGVhdGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBlYXRcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcclxuICB2YXIgc3RyID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XHJcbiAgdmFyIHJlc3VsdCA9ICcnO1xyXG4gIHZhciBuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShjb3VudCk7XHJcbiAgaWYgKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpIHRocm93ICRSYW5nZUVycm9yKCdXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnMnKTtcclxuICBmb3IgKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpIGlmIChuICYgMSkgcmVzdWx0ICs9IHN0cjtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XHJcblxyXG4vLyBgdGhpc051bWJlclZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10aGlzbnVtYmVydmFsdWVcclxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcygxLjAudmFsdWVPZik7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcclxudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcclxuXHJcbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJyk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XHJcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcclxuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcclxuICB9XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcclxudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XHJcblxyXG52YXIgRklORCA9ICdmaW5kJztcclxudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcclxuXHJcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXHJcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XHJcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xyXG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xyXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XHJcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcclxudmFyIHRoaXNOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZScpO1xyXG52YXIgJHJlcGVhdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jyk7XHJcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xyXG5cclxudmFyICRSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcclxudmFyICRTdHJpbmcgPSBTdHJpbmc7XHJcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XHJcbnZhciByZXBlYXQgPSB1bmN1cnJ5VGhpcygkcmVwZWF0KTtcclxudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xyXG52YXIgbmF0aXZlVG9GaXhlZCA9IHVuY3VycnlUaGlzKDEuMC50b0ZpeGVkKTtcclxuXHJcbnZhciBwb3cgPSBmdW5jdGlvbiAoeCwgbiwgYWNjKSB7XHJcbiAgcmV0dXJuIG4gPT09IDAgPyBhY2MgOiBuICUgMiA9PT0gMSA/IHBvdyh4LCBuIC0gMSwgYWNjICogeCkgOiBwb3coeCAqIHgsIG4gLyAyLCBhY2MpO1xyXG59O1xyXG5cclxudmFyIGxvZyA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgdmFyIG4gPSAwO1xyXG4gIHZhciB4MiA9IHg7XHJcbiAgd2hpbGUgKHgyID49IDQwOTYpIHtcclxuICAgIG4gKz0gMTI7XHJcbiAgICB4MiAvPSA0MDk2O1xyXG4gIH1cclxuICB3aGlsZSAoeDIgPj0gMikge1xyXG4gICAgbiArPSAxO1xyXG4gICAgeDIgLz0gMjtcclxuICB9IHJldHVybiBuO1xyXG59O1xyXG5cclxudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKGRhdGEsIG4sIGMpIHtcclxuICB2YXIgaW5kZXggPSAtMTtcclxuICB2YXIgYzIgPSBjO1xyXG4gIHdoaWxlICgrK2luZGV4IDwgNikge1xyXG4gICAgYzIgKz0gbiAqIGRhdGFbaW5kZXhdO1xyXG4gICAgZGF0YVtpbmRleF0gPSBjMiAlIDFlNztcclxuICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xyXG4gIH1cclxufTtcclxuXHJcbnZhciBkaXZpZGUgPSBmdW5jdGlvbiAoZGF0YSwgbikge1xyXG4gIHZhciBpbmRleCA9IDY7XHJcbiAgdmFyIGMgPSAwO1xyXG4gIHdoaWxlICgtLWluZGV4ID49IDApIHtcclxuICAgIGMgKz0gZGF0YVtpbmRleF07XHJcbiAgICBkYXRhW2luZGV4XSA9IGZsb29yKGMgLyBuKTtcclxuICAgIGMgPSAoYyAlIG4pICogMWU3O1xyXG4gIH1cclxufTtcclxuXHJcbnZhciBkYXRhVG9TdHJpbmcgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gIHZhciBpbmRleCA9IDY7XHJcbiAgdmFyIHMgPSAnJztcclxuICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XHJcbiAgICBpZiAocyAhPT0gJycgfHwgaW5kZXggPT09IDAgfHwgZGF0YVtpbmRleF0gIT09IDApIHtcclxuICAgICAgdmFyIHQgPSAkU3RyaW5nKGRhdGFbaW5kZXhdKTtcclxuICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQoJzAnLCA3IC0gdC5sZW5ndGgpICsgdDtcclxuICAgIH1cclxuICB9IHJldHVybiBzO1xyXG59O1xyXG5cclxudmFyIEZPUkNFRCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmF0aXZlVG9GaXhlZCgwLjAwMDA4LCAzKSAhPT0gJzAuMDAwJyB8fFxyXG4gICAgbmF0aXZlVG9GaXhlZCgwLjksIDApICE9PSAnMScgfHxcclxuICAgIG5hdGl2ZVRvRml4ZWQoMS4yNTUsIDIpICE9PSAnMS4yNScgfHxcclxuICAgIG5hdGl2ZVRvRml4ZWQoMTAwMDAwMDAwMDAwMDAwMDEyOC4wLCAwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnO1xyXG59KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xyXG4gIC8vIFY4IH4gQW5kcm9pZCA0LjMtXHJcbiAgbmF0aXZlVG9GaXhlZCh7fSk7XHJcbn0pO1xyXG5cclxuLy8gYE51bWJlci5wcm90b3R5cGUudG9GaXhlZGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbnVtYmVyLnByb3RvdHlwZS50b2ZpeGVkXHJcbiQoeyB0YXJnZXQ6ICdOdW1iZXInLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xyXG4gIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpIHtcclxuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XHJcbiAgICB2YXIgZnJhY3REaWdpdHMgPSB0b0ludGVnZXJPckluZmluaXR5KGZyYWN0aW9uRGlnaXRzKTtcclxuICAgIHZhciBkYXRhID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gICAgdmFyIHNpZ24gPSAnJztcclxuICAgIHZhciByZXN1bHQgPSAnMCc7XHJcbiAgICB2YXIgZSwgeiwgaiwgaztcclxuXHJcbiAgICAvLyBUT0RPOiBFUzIwMTggaW5jcmVhc2VkIHRoZSBtYXhpbXVtIG51bWJlciBvZiBmcmFjdGlvbiBkaWdpdHMgdG8gMTAwLCBuZWVkIHRvIGltcHJvdmUgdGhlIGltcGxlbWVudGF0aW9uXHJcbiAgICBpZiAoZnJhY3REaWdpdHMgPCAwIHx8IGZyYWN0RGlnaXRzID4gMjApIHRocm93ICRSYW5nZUVycm9yKCdJbmNvcnJlY3QgZnJhY3Rpb24gZGlnaXRzJyk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xyXG4gICAgaWYgKG51bWJlciAhPSBudW1iZXIpIHJldHVybiAnTmFOJztcclxuICAgIGlmIChudW1iZXIgPD0gLTFlMjEgfHwgbnVtYmVyID49IDFlMjEpIHJldHVybiAkU3RyaW5nKG51bWJlcik7XHJcbiAgICBpZiAobnVtYmVyIDwgMCkge1xyXG4gICAgICBzaWduID0gJy0nO1xyXG4gICAgICBudW1iZXIgPSAtbnVtYmVyO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWJlciA+IDFlLTIxKSB7XHJcbiAgICAgIGUgPSBsb2cobnVtYmVyICogcG93KDIsIDY5LCAxKSkgLSA2OTtcclxuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcclxuICAgICAgeiAqPSAweDEwMDAwMDAwMDAwMDAwO1xyXG4gICAgICBlID0gNTIgLSBlO1xyXG4gICAgICBpZiAoZSA+IDApIHtcclxuICAgICAgICBtdWx0aXBseShkYXRhLCAwLCB6KTtcclxuICAgICAgICBqID0gZnJhY3REaWdpdHM7XHJcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xyXG4gICAgICAgICAgbXVsdGlwbHkoZGF0YSwgMWU3LCAwKTtcclxuICAgICAgICAgIGogLT0gNztcclxuICAgICAgICB9XHJcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgcG93KDEwLCBqLCAxKSwgMCk7XHJcbiAgICAgICAgaiA9IGUgLSAxO1xyXG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XHJcbiAgICAgICAgICBkaXZpZGUoZGF0YSwgMSA8PCAyMyk7XHJcbiAgICAgICAgICBqIC09IDIzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXZpZGUoZGF0YSwgMSA8PCBqKTtcclxuICAgICAgICBtdWx0aXBseShkYXRhLCAxLCAxKTtcclxuICAgICAgICBkaXZpZGUoZGF0YSwgMik7XHJcbiAgICAgICAgcmVzdWx0ID0gZGF0YVRvU3RyaW5nKGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDAsIHopO1xyXG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDEgPDwgLWUsIDApO1xyXG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKSArIHJlcGVhdCgnMCcsIGZyYWN0RGlnaXRzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGZyYWN0RGlnaXRzID4gMCkge1xyXG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcclxuICAgICAgcmVzdWx0ID0gc2lnbiArIChrIDw9IGZyYWN0RGlnaXRzXHJcbiAgICAgICAgPyAnMC4nICsgcmVwZWF0KCcwJywgZnJhY3REaWdpdHMgLSBrKSArIHJlc3VsdFxyXG4gICAgICAgIDogc3RyaW5nU2xpY2UocmVzdWx0LCAwLCBrIC0gZnJhY3REaWdpdHMpICsgJy4nICsgc3RyaW5nU2xpY2UocmVzdWx0LCBrIC0gZnJhY3REaWdpdHMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyByZXN1bHQ7XHJcbiAgICB9IHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59KTtcclxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBzZXRJbnRlcnZhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeCcpLnNldEludGVydmFsO1xyXG5cclxuLy8gaWU5LSBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XHJcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXHJcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogZ2xvYmFsLnNldEludGVydmFsICE9PSBzZXRJbnRlcnZhbCB9LCB7XHJcbiAgc2V0SW50ZXJ2YWw6IHNldEludGVydmFsXHJcbn0pO1xyXG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcclxudmFyIHNldFRpbWVvdXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXgnKS5zZXRUaW1lb3V0O1xyXG5cclxuLy8gaWU5LSBzZXRUaW1lb3V0IGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcclxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxyXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRUaW1lb3V0ICE9PSBzZXRUaW1lb3V0IH0sIHtcclxuICBzZXRUaW1lb3V0OiBzZXRUaW1lb3V0XHJcbn0pO1xyXG4iLCIvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XHJcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbCcpO1xyXG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtdGltZW91dCcpO1xyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJodG1sIiwiZW1wbG95ZV9pZCIsImNvbnRyYWN0X2lkIiwiY25zc2lkIiwiY2ltcmlkIiwicmliaWQiLCJkaXBsb21lcyIsImlkX2RpcGxvbWUiLCJzZWxlY3RlZERhdGFBdHRyIiwiaGlkZV9zaG93IiwiaGlkZSIsImhpZGVfMiIsInNob3ciLCJzaG93XzIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicHJldmlvdXNYaHIiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsIm9yZGVyIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInR5cGUiLCJiZWZvcmVTZW5kIiwianFYSFIiLCJhYm9ydCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJyZXNwb25zaXZlIiwic2Nyb2xsWCIsImNvbHVtbnMiLCJuYW1lIiwiZGF0YSIsIm9yZGVyYWJsZSIsInNlYXJjaGFibGUiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsInJlbmRlciIsImZ1bGwiLCJtZXRhIiwibGVuZ3RoTWVudSIsImxhbmd1YWdlIiwiZGF0YXRhYmxlc0ZyZW5jaCIsIm5hdHVyZUNhYiIsIm9uIiwiZSIsInRhYiIsIm1vZGFsIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVDYW5jZWxUb2tlbkhhbmRsZXIiLCJjcmVhdGVDYW5jZWwiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwibm90eWYiLCJvcGVuIiwibWVzc2FnZSIsImR1cmF0aW9uIiwiYXhpb3MiLCJwb3N0IiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsInJlcXVlc3QiLCJyZXNwb25zZSIsImRpc21pc3NBbGwiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ2YWwiLCJwcm9wIiwiZ2V0IiwidHlwZXMiLCJjb250cmF0cyIsIm5pdmVhdXgiLCJpZCIsInNlbGVjdGVkT3B0aW9uIiwiZmluZCIsInByb2ZpbCIsInJlcXVlc3QyIiwicmVzcG9uc2UyIiwic2VsZWN0ZWREYXRhc2FsIiwic2V0VGltZW91dCIsIm5pdmVhdSIsImF0dHIiLCJzYWxhaXJlQWZmZWN0ZSIsInNhbGFpcmVHcmlsbGUiLCJyZXN0ZSIsInRvRml4ZWQiLCJsZW5ndGgiLCJjc3MiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xvc2VzdCIsInJlbW92ZSIsIm5ld2FycmF5IiwiZmlsdGVyIiwiaXRlbSIsIk5pdmVhdSIsInRleHQiLCJEaXBsb21lIiwiRGVzaWduYXRpb24iLCJFY29sZSIsImFmdGVyIiwicHVzaCIsImNsaWNrIiwic3VjY2VzcyIsImZuIiwiaXNEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJjb250cmFjdElkIiwiZHVyZSIsImRhdGVjIiwic3BsaXQiLCJkYXRlZiIsInNhbGFpcmVhZiIsInNhbGFpcmVncmlsbGUiLCJiYXJlbWUiLCJmb25jdGlvbmlkIiwiZG9zc2llciIsInBwYyIsInJwYyIsIiRtYXRjaGluZ09wdGlvbiIsInRyaWdnZXIiLCIkbWF0Y2hpbmdiYXJlbWUiLCIkbWF0Y2hpbmdkb3NzaWVyIiwiJG1hdGNoaW5nZm9uY3Rpb24iLCIkbWF0Y2hpbmdPcHRpb24yIiwiJG1hdGNoaW5ncHJvZmlsIiwieGhyIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiZGF0ZWRlYnV0IiwiZGF0ZWZpbiIsImZvbmN0aW9udXBkYXRlIiwiZGF0YVR5cGUiLCJlYWNoIiwiaW5kZXgiLCJhYnJldmlhdGlvbiIsInR5cGVfaWQiLCJjb2RlIiwiZGF0ZV9hZmZpbGlhdGlvbiIsInJpYiIsImNvdGlzaWQiLCJjbnNzIiwiZGF0ZV9jbnNzIiwiY2ltciIsImRhdGVfY2ltciIsInJpYnVwZGF0ZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZWxsaXBzaXNJY29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaWNvbiIsImVkaXRCdXR0b25zIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==