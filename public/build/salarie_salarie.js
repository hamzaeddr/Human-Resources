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
              profil = $(this).val();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNsSUQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGtCQUFrQiwwSEFBa0Q7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBc0U7QUFDMUU7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxpQkFBaUIseUhBQWlEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQW9FO0FBQ3hFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNSRDtBQUNBLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3JDLG1CQUFPLENBQUMscUZBQTRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvc2FsYXJpZS9zYWxhcmllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubnVtYmVyLnRvLWZpeGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5zZXQtdGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbiAgICAkKFwiLmJsb2NrX3BhZ2VcIikuaHRtbCgnR2VzdGlvbiBkZXMgc2FsYXJpZXMnKVxyXG5cclxuICAgIHZhciBlbXBsb3llX2lkID0gMCA7XHJcbiAgICB2YXIgY29udHJhY3RfaWQgPSAwIDtcclxuICAgIHZhciBjbnNzaWQgPSAwIDtcclxuICAgIHZhciBjaW1yaWQgPSAwIDtcclxuICAgIHZhciByaWJpZCA9IDAgO1xyXG4gICAgZGlwbG9tZXMgPSAgW107XHJcbiAgICBpZF9kaXBsb21lID0gMDtcclxuICAgIHNlbGVjdGVkRGF0YUF0dHIgPSAnJztcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlX3Nob3coaGlkZSxoaWRlXzIsc2hvdyxzaG93XzIpe1xyXG4gICAgICAgICQoXCJib2R5IFwiICtzaG93KS5yZW1vdmVDbGFzcygnbm9jbGljaycpO1xyXG4gICAgICAgICQoXCJib2R5IFwiICtzaG93KS5hZGRDbGFzcygnY2xpY2sgYWN0aXZlJyk7IFxyXG4gICAgICAgICQoXCJib2R5IFwiICtzaG93XzIpLmFkZENsYXNzKCdzaG93IGFjdGl2ZScpOyBcclxuXHJcbiAgICAgICAgJChcImJvZHkgXCIgK2hpZGUpLnJlbW92ZUNsYXNzKCdjbGljaycpLmFkZENsYXNzKCdub2NsaWNrJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgIFxyXG4gICAgICAgICQoXCJib2R5IFwiICtoaWRlXzIpLnJlbW92ZUNsYXNzKCdzaG93JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdmFyIHByZXZpb3VzWGhyID0gbnVsbDtcclxuICAgIFxyXG4gICAgdmFyIHRhYmxlID0gICQoJyNleGFtcGxlJykuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX3NhbGFyaWVfc2FsYXJpZV9saXN0JyksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oanFYSFIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcHJldmlvdXMganFYSFIgb2JqZWN0LCBhYm9ydCBpdFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1hocikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1hoci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgY3VycmVudCBqcVhIUiBvYmplY3QgZm9yIHRoZSBuZXcgcmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWGhyID0ganFYSFI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogJ3AuaWQnLCBkYXRhOiAnZW1wbG95ZV9pZCd9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6ICdwLm1hdHJpY3VsZScsIGRhdGE6ICdtYXRyaWN1bGUnfSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOiAncC5ub20nLCBkYXRhOiAnbm9tJ30sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogJ3AucHJlbm9tJywgZGF0YTogJ3ByZW5vbSd9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6ICdwLmNpbicsIGRhdGE6ICdjaW4nfSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOiAnYy5jb2RlJywgZGF0YTogJ2NvbnRyYWN0J30sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogJ24uZGVzaWduYXRpb24nLCBkYXRhOiAnbmF0dXJlJ30sXHJcbiAgICAgICAgICAgICAgICB7b3JkZXJhYmxlOiBmYWxzZSAsIHNlYXJjaGFibGU6IGZhbHNlLCBkYXRhOiAnZW1wbG95ZV9pZCd9IFxyXG5cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgY29sdW1uRGVmczogWyBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiA3LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxpIGNsYXNzPSdmYSBmYS1leWUgdGV4dC1pbmZvIGNvbnRyYWN0ZGV0JyByb2xlPVwiYnV0dG9uXCIgaWQ9XCIke2RhdGF9XCI+PC9pPmBcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsYW5ndWFnZTogZGF0YXRhYmxlc0ZyZW5jaCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG5hdHVyZUNhYiA9IG51bGw7XHJcbiAgICAgICAgJCgnLm5hdi1waWxscyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50YWIoJ3Nob3cnKSAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KGRvc3NpZXJJZClcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoXCIjYWpvdXRlclwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9tb2RpZmllciAjcGx1c19pbmZvX3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjcGx1c19pbmZvX3VwZGF0ZScsJyNtb2RhbF9ham91dGVyICNldGF0Y2l2aWwnLCcjbW9kYWxfYWpvdXRlciAjZXRhdF9jaXZpbCcpO1xyXG4gICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9tb2RpZmllciAjZXRhdGNpdmlsX3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjZXRhdGNpdmlsX3VwZGF0ZScsJyNtb2RhbF9ham91dGVyICNldGF0Y2l2aWwnLCcjbW9kYWxfYWpvdXRlciAjZXRhdF9jaXZpbCcpO1xyXG4gICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9tb2RpZmllciAjY25zc19yaWJfdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNjbnNzX3JpYl91cGRhdGUnLCcjbW9kYWxfYWpvdXRlciAjZXRhdGNpdmlsJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRfY2l2aWwnKTtcclxuICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYWN0X3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjY29udHJhdF91cGRhdGUnLCcjbW9kYWxfYWpvdXRlciAjZXRhdGNpdmlsJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRfY2l2aWwnKTtcclxuICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfYWpvdXRlciAjcGx1c19pbmZvJywnI21vZGFsX2Fqb3V0ZXIgI3BsdXNfaW5mbycsJyNtb2RhbF9ham91dGVyICNldGF0Y2l2aWwnLCcjbW9kYWxfYWpvdXRlciAjZXRhdF9jaXZpbCcpO1xyXG4gICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9ham91dGVyICNldGF0Y2l2aWwnLCcjbW9kYWxfYWpvdXRlciAjZXRhdGNpdmlsJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRjaXZpbCcsJyNtb2RhbF9ham91dGVyICNldGF0X2NpdmlsJyk7XHJcbiAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX2Fqb3V0ZXIgI2Nuc3NfcmliJywnI21vZGFsX2Fqb3V0ZXIgI2Nuc3NfcmliJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRjaXZpbCcsJyNtb2RhbF9ham91dGVyICNldGF0X2NpdmlsJyk7XHJcbiAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYWN0JywnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYXQnLCcjbW9kYWxfYWpvdXRlciAjZXRhdGNpdmlsJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRfY2l2aWwnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkKFwiI21vZGFsX2Fqb3V0ZXJcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKFwiI3JlZ2lzdGVyXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVDYW5jZWxUb2tlbkhhbmRsZXIgPSBjcmVhdGVDYW5jZWwoKTtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgICAgIG5vdHlmLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW4gY291cnMuLi5cIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA5MDAwMCxcclxuICAgICAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBwX3JlZ2lzdGVyX25ldycpLCBcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB7Y2FuY2VsVG9rZW46IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlci50b2tlbn1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgbm90eWYuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICQoXCIubmF0dXJlX3NhbGFyaWVcIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG5hdHVyZUNhYiA9ICQodGhpcykudmFsKClcclxuICAgICAgICAgICAgaWYobmF0dXJlQ2FiID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG5hdHVyZUNhYiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnR5cGVfY25zc1wiKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIi50eXBlX2Nuc3NcIikucHJvcCgnZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVDYW5jZWxUb2tlbkhhbmRsZXIgPSBjcmVhdGVDYW5jZWwoKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9nZXRuYXR1cmVzYWxhcmlldHlwZScsIHtuYXR1cmVDYWJ9KSwgXHJcbiAgICAgICAgICAgICAgICAgICAge2NhbmNlbFRva2VuOiBjcmVhdGVDYW5jZWxUb2tlbkhhbmRsZXIudG9rZW59XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF0dXJlX3R5cGUnKS5odG1sKHJlc3BvbnNlLnR5cGVzKTtcclxuICAgICAgICAgICAgICAgICQoJy5uYXR1cmVfY29udHJhdCcpLmh0bWwocmVzcG9uc2UuY29udHJhdHMpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2ZpbGUnKS5odG1sKHJlc3BvbnNlLm5pdmVhdXgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnYm9keSAuc2l0dWF0aW9uX2ZhbWlsaWFsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnZhbCgpID09IDEpIHtcclxuICAgICAgICAgICAgICAgICQoJyNub21icmVfZW5mYW50JykucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnI25vbWJyZV9lbmZhbnQnKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKFwiLm5hdHVyZV9jb250cmF0XCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnZhbCgpID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlciA9IGNyZWF0ZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gJCh0aGlzKS5maW5kKFwib3B0aW9uOnNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSB2YWx1ZSBhbmQgZGF0YS1hdHRyIGF0dHJpYnV0ZSBvZiB0aGUgc2VsZWN0ZWQgb3B0aW9uXHJcbiAgICAgICAgICAgIC8vIHZhciBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRPcHRpb24udmFsKCk7XHJcbiAgICAgICAgICAgICBzZWxlY3RlZERhdGFBdHRyID0gc2VsZWN0ZWRPcHRpb24uZGF0YShcImF0dHJcIik7XHJcbiAgICBcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9nZXRkdXJlZWNvbnRyYXQnLCB7J25hdHVyZUNvbnRyYXQnOiBpZH0pLCBcclxuICAgICAgICAgICAgICAgICAgICB7Y2FuY2VsVG9rZW46IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlci50b2tlbn1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgICQoJy5kdXJlZV9jb250cmF0JykuaHRtbChyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCIucHJvZmlsXCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS52YWwoKSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVDYW5jZWxUb2tlbkhhbmRsZXIgPSBjcmVhdGVDYW5jZWwoKTtcclxuICAgICAgICAgICAgdmFyIHByb2ZpbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0MiA9IGF3YWl0IGF4aW9zLmdldChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBpX2dldGJhcmVtZV9jb250cmFjdCcsIHsnbmF0dXJlQ29udHJhdCc6IHNlbGVjdGVkRGF0YUF0dHIsICdwcm9maWwnOnByb2ZpbH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgY2FuY2VsVG9rZW46IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlci50b2tlbiB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UyID0gcmVxdWVzdDIuZGF0YTtcclxuICAgICAgICAgICAgICAgICQoJy5iYXJlbWUnKS5odG1sKHJlc3BvbnNlMik7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChcIi5iYXJlbWVcIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcGRvd24gY2hhbmdlZFwiKTtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS52YWwoKSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVDYW5jZWxUb2tlbkhhbmRsZXIgPSBjcmVhdGVDYW5jZWwoKTtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gJCh0aGlzKS5maW5kKFwib3B0aW9uOnNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgIHZhciBzZWxlY3RlZERhdGFzYWwgPSBzZWxlY3RlZE9wdGlvbi5kYXRhKFwiYXR0clwiKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBmaWVsZFxyXG4gICAgICAgICAgICAgICAgJCgnLnNhbGFpcmVfZ3JpbGxlJykudmFsKHNlbGVjdGVkRGF0YXNhbCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7IFxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgJChcIi5wcm9maWxlXCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnZhbCgpID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlciA9IGNyZWF0ZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICBsZXQgbml2ZWF1ID0gJCh0aGlzKS52YWwoKVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfZ2V0YmFyZW1lJywgeyduaXZlYXUnOm5pdmVhdSAsICduYXR1cmVDYWInOm5hdHVyZUNhYn0pLCBcclxuICAgICAgICAgICAgICAgICAgICB7Y2FuY2VsVG9rZW46IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlci50b2tlbn1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgICQoJy5iYXJlbWUnKS5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgbm90eWYuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICQoXCIuYmFyZW1lXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKFwiLnNhbGFpcmVfZ3JpbGxlXCIpLnZhbCgkKHRoaXMpLmZpbmQoXCI6c2VsZWN0ZWRcIikuYXR0cignZGF0YS1wYXllJykpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKFwiLnNhbGFpcmVfYWZmZWN0ZVwiKS5vbihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgbGV0IHNhbGFpcmVBZmZlY3RlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgaWYoc2FsYWlyZUFmZmVjdGUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgJCgnI3BwYycpLnZhbChcIlwiKVxyXG4gICAgICAgICAgICAgICAgJCgnI3JwYycpLnZhbChcIlwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzYWxhaXJlR3JpbGxlID0gJChcIi5zYWxhaXJlX2dyaWxsZVwiKS52YWwoKTtcclxuICAgICAgICAgICAgbGV0IHJlc3RlID0gc2FsYWlyZUFmZmVjdGUgLSBzYWxhaXJlR3JpbGxlO1xyXG4gICAgICAgICAgICBpZihyZXN0ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjcnBjJykudmFsKChyZXN0ZSAqIC0xKS50b0ZpeGVkKDIpKVxyXG4gICAgICAgICAgICAgICAgJCgnI3BwYycpLnZhbChcIlwiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnI3JwYycpLnZhbChcIlwiKVxyXG4gICAgICAgICAgICAgICAgJCgnI3BwYycpLnZhbChyZXN0ZS50b0ZpeGVkKDIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAkKFwiI3JpYlwiKS5vbihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS52YWwoKS5sZW5ndGggPT0gMjQpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuY2hlY2tDbGFzc1wiKS5jc3MoJ2NvbG9yJywgJ2NhZGV0Ymx1ZScpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmNoZWNrQ2xhc3NcIikuY3NzKCdjb2xvcicsICdibGFjaycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICQoXCIjbW9kYWxfYWpvdXRlciAjbmV3X3NhbGFyaWVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZihkaXBsb21lcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlciA9IGNyZWF0ZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZGlwbG9tZXNcIixKU09OLnN0cmluZ2lmeShkaXBsb21lcykpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBwX3NhbGFyaWVfc2FsYXJpZV9uZXcnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuY2VsVG9rZW46IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlci50b2tlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZV9pZCA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vL2hpZGUgLyBzaG93IFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX2Fqb3V0ZXIgI2V0YXRjaXZpbCcsJyNtb2RhbF9ham91dGVyICNldGF0X2NpdmlsJywnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYWN0JywnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90eWYuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG5vdHlmLmVycm9yKFwiTWVyY2kgZGUgcmVtcGxpciBsZXMgZGlwbMO0bWVzXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0RpcGxvbWUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICAgICAgICBcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG5kZWxldGUnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKTtcclxuICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuICAgICAgIHZhciBuZXdhcnJheSA9IGRpcGxvbWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPSBpZCk7XHJcbiAgICAgICBkaXBsb21lcyA9IG5ld2FycmF5O1xyXG5cclxuICAgIFxyXG4gfSk7XHJcbiBcclxuJCgnLmFkZF9kaXBsb21lJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGlkX2RpcGxvbWUgPSBpZF9kaXBsb21lICsgMTtcclxuICAgICAgICB2YXIgTml2ZWF1ID0gJChcIiNtb2RhbF9ham91dGVyIC5uZXdfZGlwXCIpLmZpbmQoXCI6c2VsZWN0ZWRcIikudGV4dCgpO1xyXG4gICAgICAgIHZhciBEaXBsb21lID0gJChcIiNkaXBsb21lXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBEZXNpZ25hdGlvbiA9ICQoXCIjZGVzaWduYXRpb25fZGlwbG9tZVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgRWNvbGUgPSAkKFwiI0Vjb2xlX2RpcGxvbWVcIikudmFsKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgJCgnI2JvZHlfZGlwbG9tZSB0cjpsYXN0JykuYWZ0ZXIoJzx0ciBpZD1cIicraWRfZGlwbG9tZSArJ1wiPjx0ZD4nK05pdmVhdSsnPC90ZD48dGQgaWQ9XCInK0RpcGxvbWUgKydcIj4nXHJcbiAgICAgICAgICAgICArRGlwbG9tZSsnPC90ZD48dGQgIGlkXCInKyBEZXNpZ25hdGlvbisnXCI+JytEZXNpZ25hdGlvbisnPC90ZD48dGQgIGlkXCInKyBFY29sZSsnXCI+JytFY29sZSsnPC90ZD48dGQ+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuZGVsZXRlXCI+eDwvYnV0dG9uPjwvdGQ+PC90cj4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXBsb21lcy5wdXNoKHtcIm52X2RpcFwiOiBOaXZlYXUsXCJEaXBsb21lXCI6RGlwbG9tZSxcIkRlc2lnbmF0aW9uXCI6RGVzaWduYXRpb24sXCJFY29sZVwiOkVjb2xlLFwiaWRcIjppZF9kaXBsb21lfSk7XHJcblxyXG59KTtcclxuICAgIC8vLy9oaWRlIGFuZCBzaG93IHBvcHVwIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9jbnNzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICBcclxuXHJcbiAgICAgICAgJChcIiNtb2RhbF9ham91dGVyICNuZXdfY29udHJhY3RcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVDYW5jZWxUb2tlbkhhbmRsZXIgPSBjcmVhdGVDYW5jZWwoKTtcclxuICAgICAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgICAgICB0eXBlOlwiaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbiBjb3Vycy4uLlwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwLFxyXG4gICAgICAgICAgICB9KTsgICAgXHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZW1wbG95ZV9pZFwiLGVtcGxveWVfaWQpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9zYWxhcmllX2NvbnRyYWN0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEsIFxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5jZWxUb2tlbjogY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyLnRva2VufVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgY29udHJhY3RfaWQgPSByZXNwb25zZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vL2hpZGUgLyBzaG93IFxyXG4gICAgICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfYWpvdXRlciAjY29udHJhY3QnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhdCcsJyNtb2RhbF9ham91dGVyICNjbnNzX3JpYicsJyNtb2RhbF9ham91dGVyICNjbnNzX3JpYicpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCIjbW9kYWxfYWpvdXRlciAjbmV3X2Nuc3NcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlciA9IGNyZWF0ZUNhbmNlbCgpO1xyXG4gICAgICAgIG5vdHlmLm9wZW4oe1xyXG4gICAgICAgICAgICB0eXBlOlwiaW5mb1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA5MDAwMCxcclxuICAgICAgICB9KTsgICAgXHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbnRyYWN0X2lkXCIsY29udHJhY3RfaWQpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9zYWxhcmllX2Nuc3MnKSxcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLCBcclxuICAgICAgICAgICAgICAgIHtjYW5jZWxUb2tlbjogY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyLnRva2VufVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBjb250cmFjdF9pZCA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy9oaWRlIC8gc2hvdyBcclxuICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfYWpvdXRlciAjY25zc19yaWInLCcjbW9kYWxfYWpvdXRlciAjY25zc19yaWInLCcjbW9kYWxfYWpvdXRlciAjcGx1c19pbmZvJywnI21vZGFsX2Fqb3V0ZXIgI3BsdXNfaW5mbycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICAgICAgJChcIiNtb2RhbF9ham91dGVyICNuZXdfcGx1c1wiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyID0gY3JlYXRlQ2FuY2VsKCk7XHJcbiAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgIHR5cGU6XCJpbmZvXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW4gY291cnMuLi5cIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwLFxyXG4gICAgICAgIH0pOyAgICBcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZW1wbG95ZV9pZFwiLGVtcGxveWVfaWQpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9zYWxhcmllX3BsdXNpbmZvJyksXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YSwgXHJcbiAgICAgICAgICAgICAgICB7Y2FuY2VsVG9rZW46IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlci50b2tlbn1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vaGlkZSAvIHNob3cgXHJcbiAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX2Fqb3V0ZXIgI3BsdXNfaW5mbycsJyNtb2RhbF9ham91dGVyICNwbHVzX2luZm8nLCcjbW9kYWxfYWpvdXRlciAjZXRhdGNpdmlsJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRjaXZpbCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJChcImJvZHkgLmJ0bmNsb3NlXCIpLmNsaWNrKCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY29udHJhY3RkZXQnLCAgZnVuY3Rpb24oKSB7XHJcbiBcclxuICAgICAgICBlbXBsb3llX2lkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlciA9IGNyZWF0ZUNhbmNlbCgpO1xyXG4gICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgJC5hamF4KHsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX3NhbGFyaWVfY29udHJhY3RhZmYnKSxcclxuICAgICAgICAgICAgICAgIGRhdGE6J2VtcGxveWVfaWQ9JytlbXBsb3llX2lkLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XCJpbmZvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW4gY291cnMuLi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2NvbnRyYXRfbGlzdF9kZXRhaWxzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjb250cmF0X2xpc3RfZGV0YWlscycpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkKCcjY29udHJhY3RfYm9keScpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb250cmF0X2xpc3RfZGV0YWlsc1wiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogZGF0YXRhYmxlc0ZyZW5jaCxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29udHJhY3RNb2RhbFwiKS5tb2RhbCgnc2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSxlcnJvcjpmdW5jdGlvbihkYXRhKXtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7ICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgbm90eWYuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICAgXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vVXBkYXRlIG1vZGFsZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICAgIFxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjZWRpdENvbnRyYWN0JywgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGhpZGVfc2hvdygnI21vZGFsX21vZGlmaWVyICNwbHVzX2luZm9fdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNwbHVzX2luZm9fdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNjb250cmFjdF91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYXRfdXBkYXRlJyk7XHJcbiAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfbW9kaWZpZXIgI2V0YXRjaXZpbF91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2V0YXRjaXZpbF91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYWN0X3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjY29udHJhdF91cGRhdGUnKTtcclxuICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9tb2RpZmllciAjY25zc19yaWJfdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNjbnNzX3JpYl91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYWN0X3VwZGF0ZScsJyNtb2RhbF9tb2RpZmllciAjY29udHJhdF91cGRhdGUnKTtcclxuICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9ham91dGVyICNwbHVzX2luZm8nLCcjbW9kYWxfYWpvdXRlciAjcGx1c19pbmZvJywnI21vZGFsX21vZGlmaWVyICNjb250cmFjdF91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYXRfdXBkYXRlJyk7XHJcbiAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfYWpvdXRlciAjZXRhdGNpdmlsJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRjaXZpbCcsJyNtb2RhbF9tb2RpZmllciAjY29udHJhY3RfdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNjb250cmF0X3VwZGF0ZScpO1xyXG4gICAgICAgIGhpZGVfc2hvdygnI21vZGFsX2Fqb3V0ZXIgI2Nuc3NfcmliJywnI21vZGFsX2Fqb3V0ZXIgI2Nuc3NfcmliJywnI21vZGFsX21vZGlmaWVyICNjb250cmFjdF91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYXRfdXBkYXRlJyk7XHJcbiAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfYWpvdXRlciAjY29udHJhdCcsJyNtb2RhbF9ham91dGVyICNjb250cmF0JywnI21vZGFsX21vZGlmaWVyICNjb250cmFjdF91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYXRfdXBkYXRlJyk7XHJcblxyXG4gICAgICAgIGNvbnRyYWN0SWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXZhbHVlXCIpO1xyXG4gICAgICAgICQoJy5jb250cmFjdGRldGJ0bicpLmNsaWNrKCk7XHJcblxyXG4gICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXJcIikubW9kYWwoXCJzaG93XCIpXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1ha2UgYW4gQUpBWCByZXF1ZXN0IHRvIGZldGNoIGNvbnRyYWN0IGRldGFpbHMgYmFzZWQgb24gdGhlIGNvbnRyYWN0SWRcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfc2FsYXJpZV9jb250cmFjdGluZm8nKSwgICAgICAgICAgICAvLyBBZGp1c3QgdGhlIFVSTCB0byB5b3VyIHNlcnZlciBlbmRwb2ludFxyXG4gICAgICAgICAgICBkYXRhOiB7IGNvbnRyYWN0X2lkOiBjb250cmFjdElkIH0sIC8vIFNlbmQgdGhlIGNvbnRyYWN0IElEIGFzIGRhdGFcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdG9yIG9yIGRvIG90aGVyIGFjdGlvbnMgYmVmb3JlIHRoZSByZXF1ZXN0IGlzIHNlbnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZGF0YVswXVsncG5hdHVyZWlkJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgZHVyZSA9IGRhdGFbMF1bJ2lkZHVyZSddO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGVjID0gZGF0YVswXVsnZGF0ZV9kZWJ1dCddWydkYXRlJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZWMgPSBkYXRlYy5zcGxpdChcIiBcIilbMF07XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZWYgPSBkYXRhWzBdWydkYXRlX2ZpbiddWydkYXRlJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZWYgPSBkYXRlZi5zcGxpdChcIiBcIilbMF07XHJcbiAgICAgICAgICAgICAgICB2YXIgc2FsYWlyZWFmID0gZGF0YVswXVsnU2FsYWlyZWFmZmVjdGUnXTtcclxuICAgICAgICAgICAgICAgIHZhciBzYWxhaXJlZ3JpbGxlID0gZGF0YVswXVsnU2FsYWlyZWdyaWxsZSddO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhcmVtZSA9IGRhdGFbMF1bJ2JhcmVtZSddO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvbmN0aW9uaWQgPSBkYXRhWzBdWydmb25jdGlvbmlkJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgZG9zc2llciA9IGRhdGFbMF1bJ2Rvc3NpZXInXTtcclxuICAgICAgICAgICAgICAgIHZhciBwcGMgPSBkYXRhWzBdWydQUEMnXTtcclxuICAgICAgICAgICAgICAgIHZhciBycGMgPSBkYXRhWzBdWydSUEMnXTtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9maWwgPSBkYXRhWzBdWydQcm9maWwnXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gJChcIiNtb2RhbF9tb2RpZmllciAubmF0dXJlX2NvbnRyYXQgb3B0aW9uW2lkPSdcIiArIGlkICsgXCInXVwiKS5wcm9wKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkbWF0Y2hpbmdPcHRpb24gPSAkKFwiI21vZGFsX21vZGlmaWVyIC5iYXJlbWUgb3B0aW9uW3ZhbHVlPSdcIiArIGJhcmVtZSArIFwiJ11cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXIgLmJhcmVtZVwiKS52YWwoJG1hdGNoaW5nT3B0aW9uLnZhbCgpKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXIgLmJhcmVtZVwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkbWF0Y2hpbmdiYXJlbWUgPSAkKFwiI21vZGFsX21vZGlmaWVyIC5uYXR1cmVfY29udHJhdCBvcHRpb25bdmFsdWU9J1wiICsgaWQgKyBcIiddXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21vZGFsX21vZGlmaWVyIC5uYXR1cmVfY29udHJhdFwiKS52YWwoJG1hdGNoaW5nYmFyZW1lLnZhbCgpKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXIgLm5hdHVyZV9jb250cmF0XCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRtYXRjaGluZ2Rvc3NpZXIgPSAkKFwiI21vZGFsX21vZGlmaWVyIC5hZmZlY3RhdGlvbiBvcHRpb25bdmFsdWU9J1wiICsgZG9zc2llciArIFwiJ11cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXIgLmFmZmVjdGF0aW9uXCIpLnZhbCgkbWF0Y2hpbmdkb3NzaWVyLnZhbCgpKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXIgLmFmZmVjdGF0aW9uXCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRtYXRjaGluZ2ZvbmN0aW9uID0gJChcIiNtb2RhbF9tb2RpZmllciAuZm9uY3Rpb24gb3B0aW9uW3ZhbHVlPSdcIiArIGZvbmN0aW9uaWQgKyBcIiddXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21vZGFsX21vZGlmaWVyIC5mb25jdGlvblwiKS52YWwoJG1hdGNoaW5nZm9uY3Rpb24udmFsKCkpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAuZGF0ZV9jb250cmF0XCIpLnZhbChkYXRlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAuZGF0ZV9maW5cIikudmFsKGRhdGVmKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXIgLnNhbGFpcmVfZ3JpbGxlXCIpLnZhbChzYWxhaXJlZ3JpbGxlKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJib2R5ICNtb2RhbF9tb2RpZmllciAuc2FsYWlyZV9ncmlsbGVcIikucHJvcChcInJlYWRvbmx5XCIsIHRydWUpOyAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXIgLnNhbGFpcmVfYWZmZWN0ZVwiKS52YWwoc2FsYWlyZWFmKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiYm9keSAjbW9kYWxfbW9kaWZpZXIgLnNhbGFpcmVfYWZmZWN0ZVwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7ICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXIgI3BwY1wiKS52YWwocHBjKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJib2R5ICNtb2RhbF9tb2RpZmllciAgI3BwY1wiKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXIgICNycGNcIikudmFsKHJwYyk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcImJvZHkgI21vZGFsX21vZGlmaWVyICAjcnBjXCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTsgICBcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgdGhlIHN1Y2Nlc3MgcmVzcG9uc2UgaGVyZSwgZS5nLiwgdXBkYXRlIHRoZSBtb2RhbCBjb250ZW50IHdpdGggdGhlIGZldGNoZWQgZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7dmFyICRtYXRjaGluZ09wdGlvbjIgPSAkKFwiYm9keSAjbW9kYWxfbW9kaWZpZXIgLmR1cmVlX2NvbnRyYXQgb3B0aW9uW3ZhbHVlPSdcIiArIGR1cmUgKyBcIiddXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiYm9keSAjbW9kYWxfbW9kaWZpZXIgLmR1cmVlX2NvbnRyYXRcIikudmFsKCRtYXRjaGluZ09wdGlvbjIudmFsKCkpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcImJvZHkgI21vZGFsX21vZGlmaWVyIC5kdXJlZV9jb250cmF0XCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTsgICAgICAgICAgICAgICAgfSwgMTUwMCk7IC8vIDMwMDAgbWlsbGlzZWNvbmRzID0gMyBzZWNvbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHt2YXIgJG1hdGNoaW5ncHJvZmlsID0gJChcIiNtb2RhbF9tb2RpZmllciAucHJvZmlsIG9wdGlvblt2YWx1ZT0nXCIgKyBwcm9maWwgKyBcIiddXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiYm9keSAjbW9kYWxfbW9kaWZpZXIgLnByb2ZpbFwiKS52YWwoJG1hdGNoaW5ncHJvZmlsLnZhbCgpKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJib2R5ICNtb2RhbF9tb2RpZmllciAucHJvZmlsXCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTsgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIHlvdSBjYW4gcG9wdWxhdGUgYSBmb3JtIHdpdGggdGhlIGZldGNoZWQgZGF0YVxyXG4gICAgICAgICAgICAgICAgLy8gJChcIiNjb250cmFjdC1kZXRhaWxzLWZvcm1cIikuaHRtbChkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICQoJy5jb250cmFjdGRldGJ0bicpLmNsaWNrKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9ycywgZS5nLiwgc2hvdyBhbiBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yVGhyb3duKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcblxyXG5cclxuXHJcbiQoXCJib2R5ICNtb2RhbF9tb2RpZmllciAjY250Y19idG5cIikub24oXCJjbGlja1wiLCAgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGVkZWJ1dCA9ICQoXCIjbW9kYWxfbW9kaWZpZXIgLmRhdGVfY29udHJhdFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlZmluID0gJChcIiNtb2RhbF9tb2RpZmllciAuZGF0ZV9maW5cIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm9uY3Rpb251cGRhdGUgPSAkKFwiI21vZGFsX21vZGlmaWVyIC5mb25jdGlvblwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfc2FsYXJpZV91cGRhdGVjb250cmFjdCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY29udHJhY3RfaWQnIDpjb250cmFjdElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGF0ZV9jb250cmF0JyA6ZGF0ZWRlYnV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGF0ZV9maW4nIDpkYXRlZmluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZm9uY3Rpb24nIDpmb25jdGlvbnVwZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlwiaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbiBjb3Vycy4uLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjb250cmFjdF9ib2R5JykuaHRtbChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX21vZGlmaWVyICNjb250cmFjdF91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2NvbnRyYXRfdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNjbnNzX3JpYl91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2Nuc3NfcmliX3VwZGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfc2FsYXJpZV9nZXRfY25zc19jaW1yJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb250cmFjdF9pZCcgOmNvbnRyYWN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ2RhdGEnIGNvbnRhaW5zIHRoZSBhcnJheSBvZiBvYmplY3RzIHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlclxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBhcnJheSB1c2luZyAkLmVhY2goKVxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWNjZXNzIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBpdGVtLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhYnJldmlhdGlvbiA9IGl0ZW0uYWJyZXZpYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGVfaWQgPSBpdGVtLnR5cGVfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBpdGVtLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGVfYWZmaWxpYXRpb24gPSBpdGVtLmRhdGVfYWZmaWxpYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJpYiA9IGl0ZW0ucmliO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3Rpc2lkID0gaXRlbS5jb3Rpc2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpYmlkID0gaXRlbS5yaWJpZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUGVyZm9ybSBhY3Rpb25zIGZvciBlYWNoIGl0ZW0sIGUuZy4sIGRpc3BsYXkgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5kZXg6XCIsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIklEOlwiLCBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBYnJldmlhdGlvbjpcIiwgYWJyZXZpYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHlwZSBJRDpcIiwgdHlwZV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb2RlOlwiLCBjb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGUgQWZmaWxpYXRpb246XCIsIGRhdGVfYWZmaWxpYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUklCOlwiLCByaWIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlX2lkID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAjY25zc1wiKS52YWwoY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAjZGF0ZV9kZWNsYXJhdGlvbl9jbnNzXCIpLnZhbChkYXRlX2FmZmlsaWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY25zc2lkID0gY290aXNpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVfaWQgPT09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXIgI2NpbXJcIikudmFsKGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWxfbW9kaWZpZXIgI2RhdGVfZGVjbGFyYXRpb25fY2ltclwiKS52YWwoZGF0ZV9hZmZpbGlhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbF9tb2RpZmllciAjcmliXCIpLnZhbChyaWIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaW1yaWQgPSBjb3Rpc2lkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sZXJyb3I6ZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdHlmLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVycm9yIE1pcyBhIGpvdXIgY29udHJhY3QgISAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90eWYuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIH0sZXJyb3I6ZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdHlmLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVycm9yIE1pcyBhIGpvdXIgY29udHJhY3QgISAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgICBcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgbm90eWYuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKFwiYm9keSAjbW9kYWxfbW9kaWZpZXIgI2Nuc3NfYnRuXCIpLm9uKFwiY2xpY2tcIiwgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGNuc3MgPSAkKFwiI21vZGFsX21vZGlmaWVyICNjbnNzX3JpYl91cGRhdGUgI2Nuc3NcIikudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBkYXRlX2Nuc3MgPSAkKFwiI21vZGFsX21vZGlmaWVyICNjbnNzX3JpYl91cGRhdGUgI2RhdGVfZGVjbGFyYXRpb25fY25zc1wiKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIGNpbXIgPSAkKFwiI21vZGFsX21vZGlmaWVyICNjbnNzX3JpYl91cGRhdGUgI2NpbXJcIikudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBkYXRlX2NpbXIgPSAkKFwiI21vZGFsX21vZGlmaWVyICNjbnNzX3JpYl91cGRhdGUgI2RhdGVfZGVjbGFyYXRpb25fY2ltclwiKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIHJpYnVwZGF0ZWQgPSAkKFwiI21vZGFsX21vZGlmaWVyICNjbnNzX3JpYl91cGRhdGUgI3JpYlwiKS52YWwoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX3NhbGFyaWVfdXBkYXRlY290aXMnKSxcclxuICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICdjbnNzaWQnOmNuc3NpZCxcclxuICAgICAgICAgICAgICAgICAgICAnY2ltcmlkJzpjaW1yaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Nuc3N1cCc6Y25zcyxcclxuICAgICAgICAgICAgICAgICAgICAnZGF0ZV9jbnNzdXAnOmRhdGVfY25zcyxcclxuICAgICAgICAgICAgICAgICAgICAnY2ltcnVwJzpjaW1yLFxyXG4gICAgICAgICAgICAgICAgICAgICdkYXRlX2NpbXInOmRhdGVfY2ltcixcclxuICAgICAgICAgICAgICAgICAgICAncmlidXAnOnJpYnVwZGF0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JpYmlkJzpyaWJpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX21vZGlmaWVyICNwbHVzX2luZm9fdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNwbHVzX2luZm9fdXBkYXRlJywnI21vZGFsX2Fqb3V0ZXIgI2V0YXRjaXZpbCcsJyNtb2RhbF9ham91dGVyICNldGF0Y2l2aWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgaGlkZV9zaG93KCcjbW9kYWxfbW9kaWZpZXIgI3BsdXNfaW5mb191cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI3BsdXNfaW5mb191cGRhdGUnLCdjaXZpY2l2aWwnLCcjbW9kYWxfbW9kaWZpZXIgI2V0YXRjaXZpbF91cGRhdGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcImJvZHkgLmJ0bmNsb3NlXCIpLmNsaWNrKCk7XHJcblxyXG4gICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICB9LGVycm9yOmZ1bmN0aW9uKGRhdGEpe1xyXG4gICBcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgIFxyXG4gICBcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgICBcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWpvdXRlckNvbnRyYWN0JywgIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX21vZGlmaWVyICNwbHVzX2luZm9fdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNwbHVzX2luZm9fdXBkYXRlJywnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYWN0JywnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYXQnKTtcclxuICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfbW9kaWZpZXIgI2V0YXRjaXZpbF91cGRhdGUnLCcjbW9kYWxfbW9kaWZpZXIgI2V0YXRjaXZpbF91cGRhdGUnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhY3QnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhdCcpO1xyXG4gICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9tb2RpZmllciAjY25zc19yaWJfdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNjbnNzX3JpYl91cGRhdGUnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhY3QnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhdCcpO1xyXG4gICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9tb2RpZmllciAjY29udHJhY3RfdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNjb250cmF0X3VwZGF0ZScsJyNtb2RhbF9ham91dGVyICNjb250cmFjdCcsJyNtb2RhbF9ham91dGVyICNjb250cmF0Jyk7XHJcbiAgICAgICAgICAgIGhpZGVfc2hvdygnI21vZGFsX2Fqb3V0ZXIgI3BsdXNfaW5mbycsJyNtb2RhbF9ham91dGVyICNwbHVzX2luZm8nLCcjbW9kYWxfYWpvdXRlciAjY29udHJhY3QnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhdCcpO1xyXG4gICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9ham91dGVyICNldGF0Y2l2aWwnLCcjbW9kYWxfYWpvdXRlciAjZXRhdGNpdmlsJywnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYWN0JywnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYXQnKTtcclxuICAgICAgICAgICAgaGlkZV9zaG93KCcjbW9kYWxfYWpvdXRlciAjY25zc19yaWInLCcjbW9kYWxfYWpvdXRlciAjY25zc19yaWInLCcjbW9kYWxfYWpvdXRlciAjY29udHJhY3QnLCcjbW9kYWxfYWpvdXRlciAjY29udHJhdCcpO1xyXG4gICAgICAgICAgICBoaWRlX3Nob3coJyNtb2RhbF9ham91dGVyICNjb250cmFjdCcsJyNtb2RhbF9ham91dGVyICNjb250cmF0JywnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYWN0JywnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYXQnKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsX2Fqb3V0ZXIgI2NvbnRyYWN0JykuY2xpY2soKTtcclxuICAgICAgICAgICAgJChcImJvZHkgLmNvbnRyYWN0ZGV0YnRuXCIpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICQoXCIjbW9kYWxfYWpvdXRlclwiKS5tb2RhbChcInNob3dcIik7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIFxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGxpcHNpc0ljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lbGxpcHNpc1wiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsbGlwc2lzSWNvbnMuZm9yRWFjaChmdW5jdGlvbiAoaWNvbikge1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlZGl0QnV0dG9ucyA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRCdXR0b25zLnN0eWxlLmRpc3BsYXkgPSAoZWRpdEJ1dHRvbnMuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgICIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xyXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xyXG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XHJcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XHJcbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoJyk7XHJcblxyXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xyXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XHJcblxyXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcclxuICByZXR1cm4gTVNJRSA/IGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XHJcbiAgICB2YXIgYm91bmRBcmdzID0gdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoYXJndW1lbnRzLmxlbmd0aCwgMSkgPiAyO1xyXG4gICAgdmFyIGZuID0gaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKTtcclxuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGFwcGx5KGZuLCB0aGlzLCBhcmdzKTtcclxuICAgIH0gOiBmbiwgdGltZW91dCk7XHJcbiAgfSA6IHNjaGVkdWxlcjtcclxufTtcclxuXHJcbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcclxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcclxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcclxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXHJcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcclxudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xyXG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcclxuXHJcbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XHJcblxyXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwZWF0XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XHJcbiAgdmFyIHN0ciA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xyXG4gIHZhciByZXN1bHQgPSAnJztcclxuICB2YXIgbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoY291bnQpO1xyXG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyAkUmFuZ2VFcnJvcignV3JvbmcgbnVtYmVyIG9mIHJlcGV0aXRpb25zJyk7XHJcbiAgZm9yICg7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKSBpZiAobiAmIDEpIHJlc3VsdCArPSBzdHI7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xyXG5cclxuLy8gYHRoaXNOdW1iZXJWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdGhpc251bWJlcnZhbHVlXHJcbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoMS4wLnZhbHVlT2YpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XHJcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XHJcblxyXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xyXG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XHJcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XHJcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xyXG5cclxudmFyIEZJTkQgPSAnZmluZCc7XHJcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XHJcblxyXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xyXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xyXG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcclxuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcclxuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xyXG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XHJcbnZhciB0aGlzTnVtYmVyVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUnKTtcclxudmFyICRyZXBlYXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdCcpO1xyXG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcclxuXHJcbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XHJcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xyXG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xyXG52YXIgcmVwZWF0ID0gdW5jdXJyeVRoaXMoJHJlcGVhdCk7XHJcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcclxudmFyIG5hdGl2ZVRvRml4ZWQgPSB1bmN1cnJ5VGhpcygxLjAudG9GaXhlZCk7XHJcblxyXG52YXIgcG93ID0gZnVuY3Rpb24gKHgsIG4sIGFjYykge1xyXG4gIHJldHVybiBuID09PSAwID8gYWNjIDogbiAlIDIgPT09IDEgPyBwb3coeCwgbiAtIDEsIGFjYyAqIHgpIDogcG93KHggKiB4LCBuIC8gMiwgYWNjKTtcclxufTtcclxuXHJcbnZhciBsb2cgPSBmdW5jdGlvbiAoeCkge1xyXG4gIHZhciBuID0gMDtcclxuICB2YXIgeDIgPSB4O1xyXG4gIHdoaWxlICh4MiA+PSA0MDk2KSB7XHJcbiAgICBuICs9IDEyO1xyXG4gICAgeDIgLz0gNDA5NjtcclxuICB9XHJcbiAgd2hpbGUgKHgyID49IDIpIHtcclxuICAgIG4gKz0gMTtcclxuICAgIHgyIC89IDI7XHJcbiAgfSByZXR1cm4gbjtcclxufTtcclxuXHJcbnZhciBtdWx0aXBseSA9IGZ1bmN0aW9uIChkYXRhLCBuLCBjKSB7XHJcbiAgdmFyIGluZGV4ID0gLTE7XHJcbiAgdmFyIGMyID0gYztcclxuICB3aGlsZSAoKytpbmRleCA8IDYpIHtcclxuICAgIGMyICs9IG4gKiBkYXRhW2luZGV4XTtcclxuICAgIGRhdGFbaW5kZXhdID0gYzIgJSAxZTc7XHJcbiAgICBjMiA9IGZsb29yKGMyIC8gMWU3KTtcclxuICB9XHJcbn07XHJcblxyXG52YXIgZGl2aWRlID0gZnVuY3Rpb24gKGRhdGEsIG4pIHtcclxuICB2YXIgaW5kZXggPSA2O1xyXG4gIHZhciBjID0gMDtcclxuICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XHJcbiAgICBjICs9IGRhdGFbaW5kZXhdO1xyXG4gICAgZGF0YVtpbmRleF0gPSBmbG9vcihjIC8gbik7XHJcbiAgICBjID0gKGMgJSBuKSAqIDFlNztcclxuICB9XHJcbn07XHJcblxyXG52YXIgZGF0YVRvU3RyaW5nID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICB2YXIgaW5kZXggPSA2O1xyXG4gIHZhciBzID0gJyc7XHJcbiAgd2hpbGUgKC0taW5kZXggPj0gMCkge1xyXG4gICAgaWYgKHMgIT09ICcnIHx8IGluZGV4ID09PSAwIHx8IGRhdGFbaW5kZXhdICE9PSAwKSB7XHJcbiAgICAgIHZhciB0ID0gJFN0cmluZyhkYXRhW2luZGV4XSk7XHJcbiAgICAgIHMgPSBzID09PSAnJyA/IHQgOiBzICsgcmVwZWF0KCcwJywgNyAtIHQubGVuZ3RoKSArIHQ7XHJcbiAgICB9XHJcbiAgfSByZXR1cm4gcztcclxufTtcclxuXHJcbnZhciBGT1JDRUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5hdGl2ZVRvRml4ZWQoMC4wMDAwOCwgMykgIT09ICcwLjAwMCcgfHxcclxuICAgIG5hdGl2ZVRvRml4ZWQoMC45LCAwKSAhPT0gJzEnIHx8XHJcbiAgICBuYXRpdmVUb0ZpeGVkKDEuMjU1LCAyKSAhPT0gJzEuMjUnIHx8XHJcbiAgICBuYXRpdmVUb0ZpeGVkKDEwMDAwMDAwMDAwMDAwMDAxMjguMCwgMCkgIT09ICcxMDAwMDAwMDAwMDAwMDAwMTI4JztcclxufSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcclxuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxyXG4gIG5hdGl2ZVRvRml4ZWQoe30pO1xyXG59KTtcclxuXHJcbi8vIGBOdW1iZXIucHJvdG90eXBlLnRvRml4ZWRgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW51bWJlci5wcm90b3R5cGUudG9maXhlZFxyXG4kKHsgdGFyZ2V0OiAnTnVtYmVyJywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcclxuICB0b0ZpeGVkOiBmdW5jdGlvbiB0b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKSB7XHJcbiAgICB2YXIgbnVtYmVyID0gdGhpc051bWJlclZhbHVlKHRoaXMpO1xyXG4gICAgdmFyIGZyYWN0RGlnaXRzID0gdG9JbnRlZ2VyT3JJbmZpbml0eShmcmFjdGlvbkRpZ2l0cyk7XHJcbiAgICB2YXIgZGF0YSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgIHZhciBzaWduID0gJyc7XHJcbiAgICB2YXIgcmVzdWx0ID0gJzAnO1xyXG4gICAgdmFyIGUsIHosIGosIGs7XHJcblxyXG4gICAgLy8gVE9ETzogRVMyMDE4IGluY3JlYXNlZCB0aGUgbWF4aW11bSBudW1iZXIgb2YgZnJhY3Rpb24gZGlnaXRzIHRvIDEwMCwgbmVlZCB0byBpbXByb3ZlIHRoZSBpbXBsZW1lbnRhdGlvblxyXG4gICAgaWYgKGZyYWN0RGlnaXRzIDwgMCB8fCBmcmFjdERpZ2l0cyA+IDIwKSB0aHJvdyAkUmFuZ2VFcnJvcignSW5jb3JyZWN0IGZyYWN0aW9uIGRpZ2l0cycpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcclxuICAgIGlmIChudW1iZXIgIT0gbnVtYmVyKSByZXR1cm4gJ05hTic7XHJcbiAgICBpZiAobnVtYmVyIDw9IC0xZTIxIHx8IG51bWJlciA+PSAxZTIxKSByZXR1cm4gJFN0cmluZyhudW1iZXIpO1xyXG4gICAgaWYgKG51bWJlciA8IDApIHtcclxuICAgICAgc2lnbiA9ICctJztcclxuICAgICAgbnVtYmVyID0gLW51bWJlcjtcclxuICAgIH1cclxuICAgIGlmIChudW1iZXIgPiAxZS0yMSkge1xyXG4gICAgICBlID0gbG9nKG51bWJlciAqIHBvdygyLCA2OSwgMSkpIC0gNjk7XHJcbiAgICAgIHogPSBlIDwgMCA/IG51bWJlciAqIHBvdygyLCAtZSwgMSkgOiBudW1iZXIgLyBwb3coMiwgZSwgMSk7XHJcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcclxuICAgICAgZSA9IDUyIC0gZTtcclxuICAgICAgaWYgKGUgPiAwKSB7XHJcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMCwgeik7XHJcbiAgICAgICAgaiA9IGZyYWN0RGlnaXRzO1xyXG4gICAgICAgIHdoaWxlIChqID49IDcpIHtcclxuICAgICAgICAgIG11bHRpcGx5KGRhdGEsIDFlNywgMCk7XHJcbiAgICAgICAgICBqIC09IDc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG11bHRpcGx5KGRhdGEsIHBvdygxMCwgaiwgMSksIDApO1xyXG4gICAgICAgIGogPSBlIC0gMTtcclxuICAgICAgICB3aGlsZSAoaiA+PSAyMykge1xyXG4gICAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgMjMpO1xyXG4gICAgICAgICAgaiAtPSAyMztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgaik7XHJcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMSwgMSk7XHJcbiAgICAgICAgZGl2aWRlKGRhdGEsIDIpO1xyXG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtdWx0aXBseShkYXRhLCAwLCB6KTtcclxuICAgICAgICBtdWx0aXBseShkYXRhLCAxIDw8IC1lLCAwKTtcclxuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoZGF0YSkgKyByZXBlYXQoJzAnLCBmcmFjdERpZ2l0cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChmcmFjdERpZ2l0cyA+IDApIHtcclxuICAgICAgayA9IHJlc3VsdC5sZW5ndGg7XHJcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyAoayA8PSBmcmFjdERpZ2l0c1xyXG4gICAgICAgID8gJzAuJyArIHJlcGVhdCgnMCcsIGZyYWN0RGlnaXRzIC0gaykgKyByZXN1bHRcclxuICAgICAgICA6IHN0cmluZ1NsaWNlKHJlc3VsdCwgMCwgayAtIGZyYWN0RGlnaXRzKSArICcuJyArIHN0cmluZ1NsaWNlKHJlc3VsdCwgayAtIGZyYWN0RGlnaXRzKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSBzaWduICsgcmVzdWx0O1xyXG4gICAgfSByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufSk7XHJcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xyXG52YXIgc2V0SW50ZXJ2YWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXgnKS5zZXRJbnRlcnZhbDtcclxuXHJcbi8vIGllOS0gc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxyXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxyXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRJbnRlcnZhbCAhPT0gc2V0SW50ZXJ2YWwgfSwge1xyXG4gIHNldEludGVydmFsOiBzZXRJbnRlcnZhbFxyXG59KTtcclxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBzZXRUaW1lb3V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jykuc2V0VGltZW91dDtcclxuXHJcbi8vIGllOS0gc2V0VGltZW91dCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XHJcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcclxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuc2V0VGltZW91dCAhPT0gc2V0VGltZW91dCB9LCB7XHJcbiAgc2V0VGltZW91dDogc2V0VGltZW91dFxyXG59KTtcclxuIiwiLy8gVE9ETzogUmVtb3ZlIHRoaXMgbW9kdWxlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBzcGxpdCB0byBtb2R1bGVzIGxpc3RlZCBiZWxvd1xyXG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwnKTtcclxucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuc2V0LXRpbWVvdXQnKTtcclxuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaHRtbCIsImVtcGxveWVfaWQiLCJjb250cmFjdF9pZCIsImNuc3NpZCIsImNpbXJpZCIsInJpYmlkIiwiZGlwbG9tZXMiLCJpZF9kaXBsb21lIiwic2VsZWN0ZWREYXRhQXR0ciIsImhpZGVfc2hvdyIsImhpZGUiLCJoaWRlXzIiLCJzaG93Iiwic2hvd18yIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInByZXZpb3VzWGhyIiwidGFibGUiLCJEYXRhVGFibGUiLCJvcmRlciIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiYmVmb3JlU2VuZCIsImpxWEhSIiwiYWJvcnQiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJjb2x1bW5zIiwibmFtZSIsImRhdGEiLCJvcmRlcmFibGUiLCJzZWFyY2hhYmxlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJyZW5kZXIiLCJmdWxsIiwibWV0YSIsImxlbmd0aE1lbnUiLCJsYW5ndWFnZSIsImRhdGF0YWJsZXNGcmVuY2giLCJuYXR1cmVDYWIiLCJvbiIsImUiLCJ0YWIiLCJtb2RhbCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyIiwiY3JlYXRlQ2FuY2VsIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm5vdHlmIiwib3BlbiIsIm1lc3NhZ2UiLCJkdXJhdGlvbiIsImF4aW9zIiwicG9zdCIsImNhbmNlbFRva2VuIiwidG9rZW4iLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkaXNtaXNzQWxsIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidmFsIiwicHJvcCIsImdldCIsInR5cGVzIiwiY29udHJhdHMiLCJuaXZlYXV4IiwiaWQiLCJzZWxlY3RlZE9wdGlvbiIsImZpbmQiLCJwcm9maWwiLCJyZXF1ZXN0MiIsInJlc3BvbnNlMiIsInNlbGVjdGVkRGF0YXNhbCIsInNldFRpbWVvdXQiLCJuaXZlYXUiLCJhdHRyIiwic2FsYWlyZUFmZmVjdGUiLCJzYWxhaXJlR3JpbGxlIiwicmVzdGUiLCJ0b0ZpeGVkIiwibGVuZ3RoIiwiY3NzIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsb3Nlc3QiLCJyZW1vdmUiLCJuZXdhcnJheSIsImZpbHRlciIsIml0ZW0iLCJOaXZlYXUiLCJ0ZXh0IiwiRGlwbG9tZSIsIkRlc2lnbmF0aW9uIiwiRWNvbGUiLCJhZnRlciIsInB1c2giLCJjbGljayIsInN1Y2Nlc3MiLCJmbiIsImlzRGF0YVRhYmxlIiwiY2xlYXIiLCJkZXN0cm95IiwiY29udHJhY3RJZCIsImR1cmUiLCJkYXRlYyIsInNwbGl0IiwiZGF0ZWYiLCJzYWxhaXJlYWYiLCJzYWxhaXJlZ3JpbGxlIiwiYmFyZW1lIiwiZm9uY3Rpb25pZCIsImRvc3NpZXIiLCJwcGMiLCJycGMiLCIkbWF0Y2hpbmdPcHRpb24iLCJ0cmlnZ2VyIiwiJG1hdGNoaW5nYmFyZW1lIiwiJG1hdGNoaW5nZG9zc2llciIsIiRtYXRjaGluZ2ZvbmN0aW9uIiwiJG1hdGNoaW5nT3B0aW9uMiIsIiRtYXRjaGluZ3Byb2ZpbCIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImRhdGVkZWJ1dCIsImRhdGVmaW4iLCJmb25jdGlvbnVwZGF0ZSIsImRhdGFUeXBlIiwiZWFjaCIsImluZGV4IiwiYWJyZXZpYXRpb24iLCJ0eXBlX2lkIiwiY29kZSIsImRhdGVfYWZmaWxpYXRpb24iLCJyaWIiLCJjb3Rpc2lkIiwiY25zcyIsImRhdGVfY25zcyIsImNpbXIiLCJkYXRlX2NpbXIiLCJyaWJ1cGRhdGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsbGlwc2lzSWNvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImljb24iLCJlZGl0QnV0dG9ucyIsIm5leHRFbGVtZW50U2libGluZyIsInN0eWxlIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=