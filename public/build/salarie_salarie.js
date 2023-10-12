(self["webpackChunk"] = self["webpackChunk"] || []).push([["salarie_salarie"],{

/***/ "./assets/components/salarie/salarie.js":
/*!**********************************************!*\
  !*** ./assets/components/salarie/salarie.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

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

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(document).ready(function () {
  diplomes = [];
  id_diplome = 0;

  function hide_show(hide, hide_2, show, show_2) {
    $("body " + show).removeClass('noclick');
    $("body " + show).addClass('click active');
    $("body " + show_2).addClass('show active');
    $("body " + hide).removeClass('click');
    $("body " + hide).addClass('noclick');
    $("body " + hide).removeClass('active');
    $("body " + hide_2).removeClass('show active');
    return true;
  } // var table = $("#datatables_gestion_inscription").DataTable({
  //     lengthMenu: [
  //         [10, 15, 25, 50, 100, 20000000000000],
  //         [10, 15, 25, 50, 100, "All"],
  //     ],
  //     order: [[0, "desc"]],
  //     ajax: "/inscription/groupes/list",
  //     processing: true,
  //     serverSide: true,
  //     deferRender: true,
  //     responsive: true,
  //     scrollX: true,
  //     drawCallback: function () {
  //         idInscription.forEach((e) => {
  //             $("body tr#" + e)
  //             .find("input")
  //             .prop("checked", true);
  //         });
  //         $("body tr#" + id_inscription).addClass('active_databales')
  //     },
  //     language: {
  //         url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
  //     },
  // });


  $('#example').DataTable({
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    },
    lengthMenu: [[20, 40, 60, 80, 100, 20000000000000], [20, 40, 60, 80, 100, "All"]]
  });
  var natureCab = null;
  $('.nav-pills a').on('click', function (e) {
    $(this).tab('show'); // alert(dossierId)
  });
  $("#ajouter").on('click', function () {
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
  $('#situation_familiale').on('change', function () {
    if ($(this).val() == 1) {
      $('#nombre_enfant').prop("disabled", true);
    } else {
      $('#nombre_enfant').prop("disabled", false);
    }
  });
  $(".nature_contrat").on("change", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var createCancelTokenHandler, id, request, response, message;
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
              _context3.prev = 5;
              _context3.next = 8;
              return axios.get(Routing.generate('api_getdureecontrat', {
                'natureContrat': id
              }), {
                cancelToken: createCancelTokenHandler.token
              });

            case 8:
              request = _context3.sent;
              response = request.data;
              $('.duree_contrat').html(response);
              _context3.next = 18;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](5);
              console.log(_context3.t0);
              message = _context3.t0.response.data;
              notyf.error(message);

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[5, 13]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  $(".profile").on("change", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
      var createCancelTokenHandler, niveau, request, response, message;
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
              niveau = $(this).val();
              _context4.prev = 5;
              _context4.next = 8;
              return axios.get(Routing.generate('api_getbareme', {
                'niveau': niveau,
                'natureCab': natureCab
              }), {
                cancelToken: createCancelTokenHandler.token
              });

            case 8:
              request = _context4.sent;
              response = request.data;
              $('.bareme').html(response);
              _context4.next = 18;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](5);
              console.log(_context4.t0);
              message = _context4.t0.response.data;
              notyf.error(message);

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[5, 13]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
  $(".bareme").on("change", function (e) {
    e.preventDefault();
    $("#salaire_grille").val($(this).find(":selected").attr('data-paye'));
  });
  $("#salaire_affecte").on("keyup", function (e) {
    var salaireAffecte = $(this).val();

    if (salaireAffecte == "") {
      $('#ppc').val("");
      $('#rpc').val("");
      return;
    }

    var salaireGrille = $("#salaire_grille").val();
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
  $("#new_salarie").on("submit", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e) {
      var createCancelTokenHandler, formData, request, response, message;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(diplomes.length > 0)) {
                _context5.next = 23;
                break;
              }

              e.preventDefault();
              createCancelTokenHandler = createCancel();
              notyf.open({
                type: "info",
                message: "En cours...",
                duration: 90000
              });
              formData = new FormData(this);
              formData.append("diplomes", JSON.stringify(diplomes));
              _context5.prev = 6;
              _context5.next = 9;
              return axios.post(Routing.generate('app_salarie_salarie_new'), formData, {
                cancelToken: createCancelTokenHandler.token
              });

            case 9:
              request = _context5.sent;
              response = request.data; //////////////hide / show 

              hide_show('#etatcivil', '#etat_civil', '#contract', '#contrat');
              notyf.dismissAll();
              _context5.next = 21;
              break;

            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](6);
              console.log(_context5.t0);
              message = _context5.t0.response.data;
              notyf.dismissAll();
              notyf.error(message);

            case 21:
              _context5.next = 24;
              break;

            case 23:
              notyf.error("Merci de remplir les diplômes");

            case 24:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[6, 15]]);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
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
    var Niveau = $("#nv_diplome").find(":selected").text();
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
});

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

/***/ "./node_modules/core-js/modules/es.json.to-string-tag.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.to-string-tag.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.to-string-tag.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.to-string-tag.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


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

/***/ "./node_modules/core-js/modules/es.symbol.async-iterator.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.async-iterator.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ "./node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.to-string-tag.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.to-string-tag.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ "./node_modules/core-js/internals/well-known-symbol-define.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag(getBuiltIn('Symbol'), 'Symbol');


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-effffa"], () => (__webpack_exec__("./assets/components/salarie/salarie.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLENBQUM7QUFDRDtBQUNBLGtCQUFrQjtBQUNsQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLCtDQUErQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDbElELDRCQUE0QixtQkFBTyxDQUFDLDJHQUF1Qzs7QUFFM0U7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBLGlCQUFpQixtQkFBTyxDQUFDLG1GQUEyQjtBQUNwRCw0QkFBNEIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDM0UscUJBQXFCLG1CQUFPLENBQUMsNkZBQWdDOztBQUU3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvc2FsYXJpZS9zYWxhcmllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5qc29uLnRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5tYXRoLnRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIudG8tZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wudG8tc3RyaW5nLXRhZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIGRpcGxvbWVzID0gIFtdO1xyXG4gICAgaWRfZGlwbG9tZSA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZV9zaG93KGhpZGUsaGlkZV8yLHNob3csc2hvd18yKXtcclxuICAgICAgICAkKFwiYm9keSBcIiArc2hvdykucmVtb3ZlQ2xhc3MoJ25vY2xpY2snKTtcclxuICAgICAgICAkKFwiYm9keSBcIiArc2hvdykuYWRkQ2xhc3MoJ2NsaWNrIGFjdGl2ZScpOyBcclxuICAgICAgICAkKFwiYm9keSBcIiArc2hvd18yKS5hZGRDbGFzcygnc2hvdyBhY3RpdmUnKTsgXHJcblxyXG4gICAgICAgICQoXCJib2R5IFwiICtoaWRlKS5yZW1vdmVDbGFzcygnY2xpY2snKTtcclxuICAgICAgICAkKFwiYm9keSBcIiAraGlkZSkuYWRkQ2xhc3MoJ25vY2xpY2snKTsgXHJcbiAgICAgICAgJChcImJvZHkgXCIgK2hpZGUpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsgXHJcbiAgICAgICAgJChcImJvZHkgXCIgK2hpZGVfMikucmVtb3ZlQ2xhc3MoJ3Nob3cgYWN0aXZlJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyB2YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvblwiKS5EYXRhVGFibGUoe1xyXG4gICAgLy8gICAgIGxlbmd0aE1lbnU6IFtcclxuICAgIC8vICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgIC8vICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgLy8gICAgIF0sXHJcbiAgICAvLyAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgIC8vICAgICBhamF4OiBcIi9pbnNjcmlwdGlvbi9ncm91cGVzL2xpc3RcIixcclxuICAgIC8vICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgLy8gICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAvLyAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAvLyAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIC8vICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgLy8gICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgICBpZEluc2NyaXB0aW9uLmZvckVhY2goKGUpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgIC8vICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgIC8vICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfaW5zY3JpcHRpb24pLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJylcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGxhbmd1YWdlOiB7XHJcbiAgICAvLyAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vIH0pO1xyXG4gICAgICAgICQoJyNleGFtcGxlJykuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzIwLCA0MCwgNjAsIDgwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzIwLCA0MCwgNjAsIDgwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBuYXR1cmVDYWIgPSBudWxsO1xyXG4gICAgICAgICQoJy5uYXYtcGlsbHMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudGFiKCdzaG93JykgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBhbGVydChkb3NzaWVySWQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKFwiI2Fqb3V0ZXJcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJChcIiNtb2RhbF9ham91dGVyXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChcIiNyZWdpc3RlclwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyID0gY3JlYXRlQ2FuY2VsKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6XCJpbmZvXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAsXHJcbiAgICAgICAgICAgIH0pOyAgICBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9yZWdpc3Rlcl9uZXcnKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAge2NhbmNlbFRva2VuOiBjcmVhdGVDYW5jZWxUb2tlbkhhbmRsZXIudG9rZW59XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIG5vdHlmLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6XCJpbmZvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKFwiLm5hdHVyZV9zYWxhcmllXCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBuYXR1cmVDYWIgPSAkKHRoaXMpLnZhbCgpXHJcbiAgICAgICAgICAgIGlmKG5hdHVyZUNhYiA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihuYXR1cmVDYWIgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi50eXBlX2Nuc3NcIikucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIudHlwZV9jbnNzXCIpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyID0gY3JlYXRlQ2FuY2VsKCk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfZ2V0bmF0dXJlc2FsYXJpZXR5cGUnLCB7bmF0dXJlQ2FifSksIFxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5jZWxUb2tlbjogY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyLnRva2VufVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdHVyZV90eXBlJykuaHRtbChyZXNwb25zZS50eXBlcyk7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF0dXJlX2NvbnRyYXQnKS5odG1sKHJlc3BvbnNlLmNvbnRyYXRzKTtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9maWxlJykuaHRtbChyZXNwb25zZS5uaXZlYXV4KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgbm90eWYuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJyNzaXR1YXRpb25fZmFtaWxpYWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKCQodGhpcykudmFsKCkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgJCgnI25vbWJyZV9lbmZhbnQnKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbm9tYnJlX2VuZmFudCcpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICQoXCIubmF0dXJlX2NvbnRyYXRcIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKCQodGhpcykudmFsKCkgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyID0gY3JlYXRlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICQodGhpcykudmFsKClcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9nZXRkdXJlZWNvbnRyYXQnLCB7J25hdHVyZUNvbnRyYXQnOiBpZH0pLCBcclxuICAgICAgICAgICAgICAgICAgICB7Y2FuY2VsVG9rZW46IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlci50b2tlbn1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgICQoJy5kdXJlZV9jb250cmF0JykuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKFwiLnByb2ZpbGVcIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKCQodGhpcykudmFsKCkgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyID0gY3JlYXRlQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgIGxldCBuaXZlYXUgPSAkKHRoaXMpLnZhbCgpXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9nZXRiYXJlbWUnLCB7J25pdmVhdSc6bml2ZWF1ICwgJ25hdHVyZUNhYic6bmF0dXJlQ2FifSksIFxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5jZWxUb2tlbjogY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyLnRva2VufVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgJCgnLmJhcmVtZScpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChcIi5iYXJlbWVcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoXCIjc2FsYWlyZV9ncmlsbGVcIikudmFsKCQodGhpcykuZmluZChcIjpzZWxlY3RlZFwiKS5hdHRyKCdkYXRhLXBheWUnKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoXCIjc2FsYWlyZV9hZmZlY3RlXCIpLm9uKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBsZXQgc2FsYWlyZUFmZmVjdGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICBpZihzYWxhaXJlQWZmZWN0ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjcHBjJykudmFsKFwiXCIpXHJcbiAgICAgICAgICAgICAgICAkKCcjcnBjJykudmFsKFwiXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNhbGFpcmVHcmlsbGUgPSAkKFwiI3NhbGFpcmVfZ3JpbGxlXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdGUgPSBzYWxhaXJlQWZmZWN0ZSAtIHNhbGFpcmVHcmlsbGU7XHJcbiAgICAgICAgICAgIGlmKHJlc3RlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICQoJyNycGMnKS52YWwoKHJlc3RlICogLTEpLnRvRml4ZWQoMikpXHJcbiAgICAgICAgICAgICAgICAkKCcjcHBjJykudmFsKFwiXCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjcnBjJykudmFsKFwiXCIpXHJcbiAgICAgICAgICAgICAgICAkKCcjcHBjJykudmFsKHJlc3RlLnRvRml4ZWQoMikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICQoXCIjcmliXCIpLm9uKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnZhbCgpLmxlbmd0aCA9PSAyNCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5jaGVja0NsYXNzXCIpLmNzcygnY29sb3InLCAnY2FkZXRibHVlJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIuY2hlY2tDbGFzc1wiKS5jc3MoJ2NvbG9yJywgJ2JsYWNrJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChcIiNuZXdfc2FsYXJpZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICBpZihkaXBsb21lcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlciA9IGNyZWF0ZUNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZGlwbG9tZXNcIixKU09OLnN0cmluZ2lmeShkaXBsb21lcykpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBwX3NhbGFyaWVfc2FsYXJpZV9uZXcnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuY2VsVG9rZW46IGNyZWF0ZUNhbmNlbFRva2VuSGFuZGxlci50b2tlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy9oaWRlIC8gc2hvdyBcclxuICAgICAgICAgICAgICAgICAgICBoaWRlX3Nob3coJyNldGF0Y2l2aWwnLCcjZXRhdF9jaXZpbCcsJyNjb250cmFjdCcsJyNjb250cmF0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBub3R5Zi5lcnJvcihcIk1lcmNpIGRlIHJlbXBsaXIgbGVzIGRpcGzDtG1lc1wiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9EaXBsb21lIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgICAgICAgXHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuZGVsZXRlJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgdmFyIGlkID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XHJcbiAgICAgICB2YXIgbmV3YXJyYXkgPSBkaXBsb21lcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT0gaWQpO1xyXG4gICAgICAgZGlwbG9tZXMgPSBuZXdhcnJheTtcclxuXHJcbiAgICBcclxuIH0pO1xyXG4gXHJcbiQoJy5hZGRfZGlwbG9tZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBpZF9kaXBsb21lID0gaWRfZGlwbG9tZSArIDE7XHJcbiAgICAgICAgdmFyIE5pdmVhdSA9ICQoXCIjbnZfZGlwbG9tZVwiKS5maW5kKFwiOnNlbGVjdGVkXCIpLnRleHQoKTtcclxuICAgICAgICB2YXIgRGlwbG9tZSA9ICQoXCIjZGlwbG9tZVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgRGVzaWduYXRpb24gPSAkKFwiI2Rlc2lnbmF0aW9uX2RpcGxvbWVcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIEVjb2xlID0gJChcIiNFY29sZV9kaXBsb21lXCIpLnZhbCgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICQoJyNib2R5X2RpcGxvbWUgdHI6bGFzdCcpLmFmdGVyKCc8dHIgaWQ9XCInK2lkX2RpcGxvbWUgKydcIj48dGQ+JytOaXZlYXUrJzwvdGQ+PHRkIGlkPVwiJytEaXBsb21lICsnXCI+J1xyXG4gICAgICAgICAgICAgK0RpcGxvbWUrJzwvdGQ+PHRkICBpZFwiJysgRGVzaWduYXRpb24rJ1wiPicrRGVzaWduYXRpb24rJzwvdGQ+PHRkICBpZFwiJysgRWNvbGUrJ1wiPicrRWNvbGUrJzwvdGQ+PHRkPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bmRlbGV0ZVwiPng8L2J1dHRvbj48L3RkPjwvdHI+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlwbG9tZXMucHVzaCh7XCJudl9kaXBcIjogTml2ZWF1LFwiRGlwbG9tZVwiOkRpcGxvbWUsXCJEZXNpZ25hdGlvblwiOkRlc2lnbmF0aW9uLFwiRWNvbGVcIjpFY29sZSxcImlkXCI6aWRfZGlwbG9tZX0pO1xyXG5cclxufSk7XHJcbiAgICAvLy8vaGlkZSBhbmQgc2hvdyBwb3B1cCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgIFxyXG5cclxuXHJcblxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICAiLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBlYXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gIHZhciBzdHIgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoY291bnQpO1xuICBpZiAobiA8IDAgfHwgbiA9PSBJbmZpbml0eSkgdGhyb3cgJFJhbmdlRXJyb3IoJ1dyb25nIG51bWJlciBvZiByZXBldGl0aW9ucycpO1xuICBmb3IgKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpIGlmIChuICYgMSkgcmVzdWx0ICs9IHN0cjtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbi8vIGB0aGlzTnVtYmVyVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10aGlzbnVtYmVydmFsdWVcbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoMS4wLnZhbHVlT2YpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcblxuLy8gSlNPTltAQHRvU3RyaW5nVGFnXSBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1qc29uLUBAdG9zdHJpbmd0YWdcbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwidmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG5cbi8vIE1hdGhbQEB0b1N0cmluZ1RhZ10gcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC1AQHRvc3RyaW5ndGFnXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgdGhpc051bWJlclZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RoaXMtbnVtYmVyLXZhbHVlJyk7XG52YXIgJHJlcGVhdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyICRSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciByZXBlYXQgPSB1bmN1cnJ5VGhpcygkcmVwZWF0KTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciBuYXRpdmVUb0ZpeGVkID0gdW5jdXJyeVRoaXMoMS4wLnRvRml4ZWQpO1xuXG52YXIgcG93ID0gZnVuY3Rpb24gKHgsIG4sIGFjYykge1xuICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG59O1xuXG52YXIgbG9nID0gZnVuY3Rpb24gKHgpIHtcbiAgdmFyIG4gPSAwO1xuICB2YXIgeDIgPSB4O1xuICB3aGlsZSAoeDIgPj0gNDA5Nikge1xuICAgIG4gKz0gMTI7XG4gICAgeDIgLz0gNDA5NjtcbiAgfVxuICB3aGlsZSAoeDIgPj0gMikge1xuICAgIG4gKz0gMTtcbiAgICB4MiAvPSAyO1xuICB9IHJldHVybiBuO1xufTtcblxudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKGRhdGEsIG4sIGMpIHtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBjMiA9IGM7XG4gIHdoaWxlICgrK2luZGV4IDwgNikge1xuICAgIGMyICs9IG4gKiBkYXRhW2luZGV4XTtcbiAgICBkYXRhW2luZGV4XSA9IGMyICUgMWU3O1xuICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xuICB9XG59O1xuXG52YXIgZGl2aWRlID0gZnVuY3Rpb24gKGRhdGEsIG4pIHtcbiAgdmFyIGluZGV4ID0gNjtcbiAgdmFyIGMgPSAwO1xuICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgYyArPSBkYXRhW2luZGV4XTtcbiAgICBkYXRhW2luZGV4XSA9IGZsb29yKGMgLyBuKTtcbiAgICBjID0gKGMgJSBuKSAqIDFlNztcbiAgfVxufTtcblxudmFyIGRhdGFUb1N0cmluZyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBpbmRleCA9IDY7XG4gIHZhciBzID0gJyc7XG4gIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICBpZiAocyAhPT0gJycgfHwgaW5kZXggPT09IDAgfHwgZGF0YVtpbmRleF0gIT09IDApIHtcbiAgICAgIHZhciB0ID0gJFN0cmluZyhkYXRhW2luZGV4XSk7XG4gICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdCgnMCcsIDcgLSB0Lmxlbmd0aCkgKyB0O1xuICAgIH1cbiAgfSByZXR1cm4gcztcbn07XG5cbnZhciBGT1JDRUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuYXRpdmVUb0ZpeGVkKDAuMDAwMDgsIDMpICE9PSAnMC4wMDAnIHx8XG4gICAgbmF0aXZlVG9GaXhlZCgwLjksIDApICE9PSAnMScgfHxcbiAgICBuYXRpdmVUb0ZpeGVkKDEuMjU1LCAyKSAhPT0gJzEuMjUnIHx8XG4gICAgbmF0aXZlVG9GaXhlZCgxMDAwMDAwMDAwMDAwMDAwMTI4LjAsIDApICE9PSAnMTAwMDAwMDAwMDAwMDAwMDEyOCc7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICBuYXRpdmVUb0ZpeGVkKHt9KTtcbn0pO1xuXG4vLyBgTnVtYmVyLnByb3RvdHlwZS50b0ZpeGVkYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbnVtYmVyLnByb3RvdHlwZS50b2ZpeGVkXG4kKHsgdGFyZ2V0OiAnTnVtYmVyJywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XG4gICAgdmFyIGZyYWN0RGlnaXRzID0gdG9JbnRlZ2VyT3JJbmZpbml0eShmcmFjdGlvbkRpZ2l0cyk7XG4gICAgdmFyIGRhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgdmFyIHNpZ24gPSAnJztcbiAgICB2YXIgcmVzdWx0ID0gJzAnO1xuICAgIHZhciBlLCB6LCBqLCBrO1xuXG4gICAgLy8gVE9ETzogRVMyMDE4IGluY3JlYXNlZCB0aGUgbWF4aW11bSBudW1iZXIgb2YgZnJhY3Rpb24gZGlnaXRzIHRvIDEwMCwgbmVlZCB0byBpbXByb3ZlIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgIGlmIChmcmFjdERpZ2l0cyA8IDAgfHwgZnJhY3REaWdpdHMgPiAyMCkgdGhyb3cgJFJhbmdlRXJyb3IoJ0luY29ycmVjdCBmcmFjdGlvbiBkaWdpdHMnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChudW1iZXIgIT0gbnVtYmVyKSByZXR1cm4gJ05hTic7XG4gICAgaWYgKG51bWJlciA8PSAtMWUyMSB8fCBudW1iZXIgPj0gMWUyMSkgcmV0dXJuICRTdHJpbmcobnVtYmVyKTtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgc2lnbiA9ICctJztcbiAgICAgIG51bWJlciA9IC1udW1iZXI7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPiAxZS0yMSkge1xuICAgICAgZSA9IGxvZyhudW1iZXIgKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMCwgeik7XG4gICAgICAgIGogPSBmcmFjdERpZ2l0cztcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgIG11bHRpcGx5KGRhdGEsIDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XG4gICAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDEsIDEpO1xuICAgICAgICBkaXZpZGUoZGF0YSwgMik7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDAsIHopO1xuICAgICAgICBtdWx0aXBseShkYXRhLCAxIDw8IC1lLCAwKTtcbiAgICAgICAgcmVzdWx0ID0gZGF0YVRvU3RyaW5nKGRhdGEpICsgcmVwZWF0KCcwJywgZnJhY3REaWdpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhY3REaWdpdHMgPiAwKSB7XG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyAoayA8PSBmcmFjdERpZ2l0c1xuICAgICAgICA/ICcwLicgKyByZXBlYXQoJzAnLCBmcmFjdERpZ2l0cyAtIGspICsgcmVzdWx0XG4gICAgICAgIDogc3RyaW5nU2xpY2UocmVzdWx0LCAwLCBrIC0gZnJhY3REaWdpdHMpICsgJy4nICsgc3RyaW5nU2xpY2UocmVzdWx0LCBrIC0gZnJhY3REaWdpdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gc2lnbiArIHJlc3VsdDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC1kZWZpbmUnKTtcblxuLy8gYFN5bWJvbC5hc3luY0l0ZXJhdG9yYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wuYXN5bmNpdGVyYXRvclxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtZGVmaW5lJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcblxuLy8gYFN5bWJvbC50b1N0cmluZ1RhZ2Agd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnRvc3RyaW5ndGFnXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9zdHJpbmd0YWdcbnNldFRvU3RyaW5nVGFnKGdldEJ1aWx0SW4oJ1N5bWJvbCcpLCAnU3ltYm9sJyk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJkaXBsb21lcyIsImlkX2RpcGxvbWUiLCJoaWRlX3Nob3ciLCJoaWRlIiwiaGlkZV8yIiwic2hvdyIsInNob3dfMiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJEYXRhVGFibGUiLCJsYW5ndWFnZSIsInVybCIsImxlbmd0aE1lbnUiLCJuYXR1cmVDYWIiLCJvbiIsImUiLCJ0YWIiLCJtb2RhbCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlQ2FuY2VsVG9rZW5IYW5kbGVyIiwiY3JlYXRlQ2FuY2VsIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm5vdHlmIiwib3BlbiIsInR5cGUiLCJtZXNzYWdlIiwiZHVyYXRpb24iLCJheGlvcyIsInBvc3QiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsImRpc21pc3NBbGwiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ2YWwiLCJwcm9wIiwiZ2V0IiwiaHRtbCIsInR5cGVzIiwiY29udHJhdHMiLCJuaXZlYXV4IiwiaWQiLCJuaXZlYXUiLCJmaW5kIiwiYXR0ciIsInNhbGFpcmVBZmZlY3RlIiwic2FsYWlyZUdyaWxsZSIsInJlc3RlIiwidG9GaXhlZCIsImxlbmd0aCIsImNzcyIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbG9zZXN0IiwicmVtb3ZlIiwibmV3YXJyYXkiLCJmaWx0ZXIiLCJpdGVtIiwiTml2ZWF1IiwidGV4dCIsIkRpcGxvbWUiLCJEZXNpZ25hdGlvbiIsIkVjb2xlIiwiYWZ0ZXIiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==