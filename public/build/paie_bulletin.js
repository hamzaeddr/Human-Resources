(self["webpackChunk"] = self["webpackChunk"] || []).push([["paie_bulletin"],{

/***/ "./assets/components/paie/bulletin.js":
/*!********************************************!*\
  !*** ./assets/components/paie/bulletin.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

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

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

$(document).ready(function () {
  $(".block_page").html('Gestion des bulletins');
  var previousXhr = null;
  var table = $("#list_employes").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: {
      url: Routing.generate('app_bulletin_employe_list', {
        periode: $('#periode').val()
      }),
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
      data: 'id'
    }, {
      name: 'b.code',
      data: 'bulletin'
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
      name: 'nombreJourTravails',
      data: 'nombreJourTravails',
      orderable: false,
      searchable: false
    }, {
      name: 'salaire',
      data: 'salaire',
      orderable: false,
      searchable: false
    }, // {name: 'actions' , data: 'actions', orderable: false , searchable: false},
    {
      orderable: false,
      searchable: false,
      data: 'problemes'
    }],
    columnDefs: [{
      targets: 1,
      render: function render(data, type, full, meta) {
        return "<p type=\"button\" data-id='".concat(data, "' class=\"show_bulletin\">").concat(data, "<p>");
      }
    }],
    language: datatablesFrench
  });
  $('#periode').on('change', function () {
    table.ajax.url(Routing.generate('app_bulletin_employe_list', {
      periode: $('#periode').val()
    })).load();
  });
  $("#generer").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var formData, request, response, message;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            notyf.open({
              type: "info",
              message: "En cours...",
              duration: 9000000000000
            });
            _context.prev = 1;
            formData = new FormData();
            formData.append("dossier", $('.dossierSelect').val());
            _context.next = 6;
            return axios.post(Routing.generate('app_bulletin_employe_calcul'), formData);

          case 6:
            request = _context.sent;
            response = request.data;
            notyf.dismissAll();
            notyf.success(response);
            table.ajax.reload(); //////////////hide / show 
            // hide_show('#etatcivil','#etat_civil','#contract','#contrat');

            _context.next = 19;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            message = _context.t0.response.data;
            notyf.dismissAll();
            notyf.error(message);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  })));
  $("body").on('click', "#problemes", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var contract, formData, request, response, message;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            notyf.open({
              type: "info",
              message: "En cours...",
              duration: 9000000000000
            });
            contract = $(this).parents('tr').attr('id');
            _context2.prev = 2;
            formData = new FormData();
            formData.append("dossier", $('.dossierSelect').val());
            _context2.next = 7;
            return axios.post(Routing.generate('app_bulletin_employe_problemes', {
              'contract': contract
            }), formData);

          case 7:
            request = _context2.sent;
            response = request.data;
            $('#modal_probleme').find('.modal-body').html(response);
            $('#modal_probleme').modal('show'); // table.ajax.reload();
            //////////////hide / show 
            // hide_show('#etatcivil','#etat_civil','#contract','#contrat');

            notyf.dismissAll();
            _context2.next = 20;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);
            message = _context2.t0.response.data;
            notyf.dismissAll();
            notyf.error(message);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 14]]);
  })));
  $("body").on('click', "#save_problemes", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var problemes, formData, request, response, message;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            notyf.open({
              type: "info",
              message: "En cours...",
              duration: 9000000
            });
            $("#save_problemes").attr('disabled', true);
            problemes = [];
            $("body .tr_problemes").map(function () {
              problemes.push({
                'id': $(this).attr('id'),
                'periode': $(this).find('.probleme_periode').val()
              });
            }); // console.log(problemes);
            // return;

            _context3.prev = 4;
            formData = new FormData();
            formData.append("problemes", JSON.stringify(problemes));
            _context3.next = 9;
            return axios.post(Routing.generate('app_bulletin_employe_probleme_solves'), formData);

          case 9:
            request = _context3.sent;
            response = request.data;
            table.ajax.reload();
            $("#save_problemes").attr('disabled', false);
            $('#modal_probleme').find('.modal-body').html('');
            $('#modal_probleme').modal('hide'); //////////////hide / show 
            // hide_show('#etatcivil','#etat_civil','#contract','#contrat');

            notyf.dismissAll();
            notyf.success(response);
            _context3.next = 26;
            break;

          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](4);
            $("#save_problemes").attr('disabled', false);
            console.log(_context3.t0);
            message = _context3.t0.response.data;
            notyf.dismissAll();
            notyf.error(message);

          case 26:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 19]]);
  })));
  $("body").on('click', ".show_bulletin", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var code, request, response, message;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            notyf.open({
              type: "info",
              message: "En cours...",
              duration: 9000000,
              dismissible: false
            });
            code = $(this).attr('data-id');
            _context4.prev = 2;
            _context4.next = 5;
            return axios.post(Routing.generate('app_bulletin_employe_bulletin_details', {
              code: code
            }));

          case 5:
            request = _context4.sent;
            response = request.data;
            $('#modal_bulletin_detail').find('.modal-body').html(response);
            $('#modal_bulletin_detail').find('#list_bulletin_details').DataTable({
              lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
              language: {
                url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
              }
            });
            $('#modal_bulletin_detail').modal('show');
            notyf.dismissAll();
            _context4.next = 19;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            message = _context4.t0.response.data;
            notyf.dismissAll();
            notyf.error(message);

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[2, 13]]);
  })));
  $("body").on('click', ".bulletin_download", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            window.open(Routing.generate('app_bulletin_employe_bulletin_print', {
              bulletin: $(this).attr('id')
            }), '_blank');

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
});

/***/ }),

/***/ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \************************************************************************/
/***/ ((module) => {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
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

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-8f6080"], () => (__webpack_exec__("./assets/components/paie/bulletin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDM0RZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLHFIQUE0QztBQUN4RCx1QkFBdUIsbUJBQU8sQ0FBQywrRkFBaUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzQkFBc0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBbUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG9IQUEyQztBQUN0RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBNEQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhaWUvYnVsbGV0aW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbiAgICAkKFwiLmJsb2NrX3BhZ2VcIikuaHRtbCgnR2VzdGlvbiBkZXMgYnVsbGV0aW5zJylcclxuICAgIHZhciBwcmV2aW91c1hociA9IG51bGw7XHJcblxyXG4gICAgdmFyIHRhYmxlID0gJChcIiNsaXN0X2VtcGxveWVzXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfYnVsbGV0aW5fZW1wbG95ZV9saXN0Jywge3BlcmlvZGU6ICQoJyNwZXJpb2RlJykudmFsKCl9KSxcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oanFYSFIpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBwcmV2aW91cyBqcVhIUiBvYmplY3QsIGFib3J0IGl0XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNYaHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1hoci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQganFYSFIgb2JqZWN0IGZvciB0aGUgbmV3IHJlcXVlc3RcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzWGhyID0ganFYSFI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICB7bmFtZTogJ3AuaWQnLCBkYXRhOiAnaWQnfSxcclxuICAgICAgICAgICAge25hbWU6ICdiLmNvZGUnLCBkYXRhOiAnYnVsbGV0aW4nfSxcclxuICAgICAgICAgICAge25hbWU6ICdwLm1hdHJpY3VsZScsIGRhdGE6ICdtYXRyaWN1bGUnfSxcclxuICAgICAgICAgICAge25hbWU6ICdwLm5vbScsIGRhdGE6ICdub20nfSxcclxuICAgICAgICAgICAge25hbWU6ICdwLnByZW5vbScsIGRhdGE6ICdwcmVub20nfSxcclxuICAgICAgICAgICAge25hbWU6ICdub21icmVKb3VyVHJhdmFpbHMnLCBkYXRhOiAnbm9tYnJlSm91clRyYXZhaWxzJywgb3JkZXJhYmxlOiBmYWxzZSAsIHNlYXJjaGFibGU6IGZhbHNlfSxcclxuICAgICAgICAgICAge25hbWU6ICdzYWxhaXJlJywgZGF0YTogJ3NhbGFpcmUnLCBvcmRlcmFibGU6IGZhbHNlICwgc2VhcmNoYWJsZTogZmFsc2V9LFxyXG4gICAgICAgICAgICAvLyB7bmFtZTogJ2FjdGlvbnMnICwgZGF0YTogJ2FjdGlvbnMnLCBvcmRlcmFibGU6IGZhbHNlICwgc2VhcmNoYWJsZTogZmFsc2V9LFxyXG4gICAgICAgICAgICB7b3JkZXJhYmxlOiBmYWxzZSAsIHNlYXJjaGFibGU6IGZhbHNlLCBkYXRhOiAncHJvYmxlbWVzJ30gXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiAxLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8cCB0eXBlPVwiYnV0dG9uXCIgZGF0YS1pZD0nJHtkYXRhfScgY2xhc3M9XCJzaG93X2J1bGxldGluXCI+JHtkYXRhfTxwPmBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGRhdGF0YWJsZXNGcmVuY2gsXHJcbiAgICB9KTtcclxuICAgICQoJyNwZXJpb2RlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRhYmxlLmFqYXgudXJsKFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9idWxsZXRpbl9lbXBsb3llX2xpc3QnLCB7cGVyaW9kZTogJCgnI3BlcmlvZGUnKS52YWwoKX0pKS5sb2FkKClcclxuXHJcbiAgICB9KVxyXG4gICAgJChcIiNnZW5lcmVyXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG5vdHlmLm9wZW4oe1xyXG4gICAgICAgICAgICB0eXBlOlwiaW5mb1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA5MDAwMDAwMDAwMDAwLFxyXG4gICAgICAgIH0pOyAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImRvc3NpZXJcIiwgJCgnLmRvc3NpZXJTZWxlY3QnKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBwX2J1bGxldGluX2VtcGxveWVfY2FsY3VsJyksXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgIG5vdHlmLnN1Y2Nlc3MocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vaGlkZSAvIHNob3cgXHJcbiAgICAgICAgICAgIC8vIGhpZGVfc2hvdygnI2V0YXRjaXZpbCcsJyNldGF0X2NpdmlsJywnI2NvbnRyYWN0JywnI2NvbnRyYXQnKTtcclxuICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywgXCIjcHJvYmxlbWVzXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG5vdHlmLm9wZW4oe1xyXG4gICAgICAgICAgICB0eXBlOlwiaW5mb1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA5MDAwMDAwMDAwMDAwLFxyXG4gICAgICAgIH0pOyAgXHJcbiAgICAgICAgdmFyIGNvbnRyYWN0ID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImRvc3NpZXJcIiwgJCgnLmRvc3NpZXJTZWxlY3QnKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBwX2J1bGxldGluX2VtcGxveWVfcHJvYmxlbWVzJywgeydjb250cmFjdCc6IGNvbnRyYWN0fSksXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfcHJvYmxlbWUnKS5maW5kKCcubW9kYWwtYm9keScpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfcHJvYmxlbWUnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICAvLyB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy9oaWRlIC8gc2hvdyBcclxuICAgICAgICAgICAgLy8gaGlkZV9zaG93KCcjZXRhdGNpdmlsJywnI2V0YXRfY2l2aWwnLCcjY29udHJhY3QnLCcjY29udHJhdCcpO1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgbm90eWYuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKCdjbGljaycsIFwiI3NhdmVfcHJvYmxlbWVzXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG5vdHlmLm9wZW4oe1xyXG4gICAgICAgICAgICB0eXBlOlwiaW5mb1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA5MDAwMDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjc2F2ZV9wcm9ibGVtZXNcIikuYXR0cignZGlzYWJsZWQnLCB0cnVlKTsgXHJcbiAgICAgICAgdmFyIHByb2JsZW1lcyA9IFtdO1xyXG4gICAgICAgICQoXCJib2R5IC50cl9wcm9ibGVtZXNcIikubWFwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHByb2JsZW1lcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICdpZCc6ICQodGhpcykuYXR0cignaWQnKSxcclxuICAgICAgICAgICAgICAgICdwZXJpb2RlJyA6ICQodGhpcykuZmluZCgnLnByb2JsZW1lX3BlcmlvZGUnKS52YWwoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2JsZW1lcyk7XHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm9ibGVtZXNcIiwgSlNPTi5zdHJpbmdpZnkocHJvYmxlbWVzKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBwX2J1bGxldGluX2VtcGxveWVfcHJvYmxlbWVfc29sdmVzJyksXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIjc2F2ZV9wcm9ibGVtZXNcIikuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAkKCcjbW9kYWxfcHJvYmxlbWUnKS5maW5kKCcubW9kYWwtYm9keScpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfcHJvYmxlbWUnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vaGlkZSAvIHNob3cgXHJcbiAgICAgICAgICAgIC8vIGhpZGVfc2hvdygnI2V0YXRjaXZpbCcsJyNldGF0X2NpdmlsJywnI2NvbnRyYWN0JywnI2NvbnRyYXQnKTtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG5cclxuICAgICAgICAgICAgbm90eWYuc3VjY2VzcyhyZXNwb25zZSk7XHJcblxyXG4gICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAkKFwiI3NhdmVfcHJvYmxlbWVzXCIpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpOyBcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgbm90eWYuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywgXCIuc2hvd19idWxsZXRpblwiLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbiBjb3Vycy4uLlwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAwMCxcclxuICAgICAgICAgICAgZGlzbWlzc2libGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGNvZGUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9idWxsZXRpbl9lbXBsb3llX2J1bGxldGluX2RldGFpbHMnLCB7Y29kZX0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcblxyXG4gICAgICAgICAgICAkKCcjbW9kYWxfYnVsbGV0aW5fZGV0YWlsJykuZmluZCgnLm1vZGFsLWJvZHknKS5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgJCgnI21vZGFsX2J1bGxldGluX2RldGFpbCcpLmZpbmQoJyNsaXN0X2J1bGxldGluX2RldGFpbHMnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCcjbW9kYWxfYnVsbGV0aW5fZGV0YWlsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKCdjbGljaycsIFwiLmJ1bGxldGluX2Rvd25sb2FkXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9idWxsZXRpbl9lbXBsb3llX2J1bGxldGluX3ByaW50Jywge2J1bGxldGluOiAkKHRoaXMpLmF0dHIoJ2lkJyl9KSwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxufSkiLCJ2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcclxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xyXG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xyXG4gIHJldHVybiBpdDtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XHJcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XHJcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcclxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xyXG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcclxudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XHJcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcclxudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xyXG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xyXG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XHJcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XHJcblxyXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xyXG5cclxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXHJcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcclxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGFycmF5ID0gW107XHJcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XHJcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcclxufSk7XHJcblxyXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XHJcblxyXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcclxuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XHJcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcclxuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcclxufTtcclxuXHJcbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXHJcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XHJcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xyXG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XHJcbiAgICB2YXIgbiA9IDA7XHJcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XHJcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XHJcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcclxuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcclxuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIGxlbik7XHJcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgMSk7XHJcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQS5sZW5ndGggPSBuO1xyXG4gICAgcmV0dXJuIEE7XHJcbiAgfVxyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XHJcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xyXG5cclxudmFyIEZJTkQgPSAnZmluZCc7XHJcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XHJcblxyXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xyXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xyXG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcclxuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcclxuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xyXG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xyXG5cclxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXHJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcclxuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xyXG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImh0bWwiLCJwcmV2aW91c1hociIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInBlcmlvZGUiLCJ2YWwiLCJ0eXBlIiwiYmVmb3JlU2VuZCIsImpxWEhSIiwiYWJvcnQiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJjb2x1bW5zIiwibmFtZSIsImRhdGEiLCJvcmRlcmFibGUiLCJzZWFyY2hhYmxlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJyZW5kZXIiLCJmdWxsIiwibWV0YSIsImxhbmd1YWdlIiwiZGF0YXRhYmxlc0ZyZW5jaCIsIm9uIiwibG9hZCIsIm5vdHlmIiwib3BlbiIsIm1lc3NhZ2UiLCJkdXJhdGlvbiIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJheGlvcyIsInBvc3QiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkaXNtaXNzQWxsIiwic3VjY2VzcyIsInJlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNvbnRyYWN0IiwicGFyZW50cyIsImF0dHIiLCJmaW5kIiwibW9kYWwiLCJwcm9ibGVtZXMiLCJtYXAiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpc21pc3NpYmxlIiwiY29kZSIsIndpbmRvdyIsImJ1bGxldGluIl0sInNvdXJjZVJvb3QiOiIifQ==