(self["webpackChunk"] = self["webpackChunk"] || []).push([["tresorerie_bordereau"],{

/***/ "./assets/components/tresorerie/bordereau.js":
/*!***************************************************!*\
  !*** ./assets/components/tresorerie/bordereau.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

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
  $(".block_page").html('Gestion des bordereaux');
  var previousXhr = null;
  var table = $("#list_bordereau").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: {
      url: Routing.generate('app_tresorerie_bordereau_list'),
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
      name: 'b.id',
      data: 'id'
    }, {
      name: 'b.code',
      data: 'code'
    }, {
      name: 'd.designation',
      data: 'dossier_designation'
    }, {
      name: 'p.abreviation',
      data: 'periode'
    }, {
      name: 'b.type',
      data: 'type'
    }, {
      name: 'natureContract.designation',
      data: 'designation'
    }, {
      name: 'b.created',
      data: 'created'
    }, {
      name: 's.icon',
      data: 'icon'
    }],
    columnDefs: [{
      targets: 0,
      render: function render(data, type, full, meta) {
        if (full.statut == 'problème' || full.statut == 'en cours') {
          return '';
        } else if (full.statut == 'intégré') {
          return "<input type=\"checkbox\" value=\"".concat(data, "\" class=\"\" checked disabled/>");
        }

        return "<input type=\"checkbox\" value=\"".concat(data, "\" class=\"bordereau_check\"/>");
      }
    }, {
      targets: 6,
      render: function render(data, type, full, meta) {
        if (data && data.date) {
          return moment(data.date).format('YYYY-MM-DD HH:mm:ss');
        }

        return "";
      }
    }, {
      targets: 7,
      render: function render(data, type, full, meta) {
        return "<i class='".concat(data, "'></i> ").concat(full.statut);
      }
    }],
    language: datatablesFrench
  });
  $("#valider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var bordereauIds;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            bordereauIds = [];
            $('.bordereau_check:checked').each(function () {
              bordereauIds.push($(this).val());
            });

            if (!(bordereauIds.length == 0)) {
              _context2.next = 6;
              break;
            }

            notyf.dismissAll();
            notyf.error('Veuillez selectionné un ou plusieur bordereau');
            return _context2.abrupt("return");

          case 6:
            swalWithBootstrapButtons.fire({
              showClass: {
                popup: 'animatedSwal flipInX faster'
              },
              position: 'top',
              title: "Confirmation ?",
              text: "Voulez vous vraiment valider ?",
              type: "warning",
              showCancelButton: true,
              focusConfirm: true,
              showCloseButton: true,
              confirmButtonText: "<i class='fa fa-check'></i> Oui!",
              cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
            }).then( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(result) {
                var formData, request, response, message;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!result.isConfirmed) {
                          _context.next = 20;
                          break;
                        }

                        notyf.open({
                          type: "info",
                          message: "En cours...",
                          duration: 9000000,
                          dismissible: false
                        });
                        formData = new FormData();
                        formData.append('bordereauIds', JSON.stringify(bordereauIds));
                        _context.prev = 4;
                        _context.next = 7;
                        return axios.post(Routing.generate('app_tresorerie_bordereau_valider'), formData);

                      case 7:
                        request = _context.sent;
                        response = request.data;
                        notyf.dismissAll();
                        notyf.success(response);
                        table.ajax.reload();
                        _context.next = 20;
                        break;

                      case 14:
                        _context.prev = 14;
                        _context.t0 = _context["catch"](4);
                        console.log(_context.t0);
                        message = _context.t0.response.data;
                        notyf.dismissAll();
                        notyf.error(message);

                      case 20:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[4, 14]]);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  $("#devalider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var bordereauIds;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            bordereauIds = [];
            $('.bordereau_check:checked').each(function () {
              bordereauIds.push($(this).val());
            });

            if (!(bordereauIds.length == 0)) {
              _context4.next = 6;
              break;
            }

            notyf.dismissAll();
            notyf.error('Veuillez selectionné un ou plusieur bordereau');
            return _context4.abrupt("return");

          case 6:
            swalWithBootstrapButtons.fire({
              showClass: {
                popup: 'animatedSwal flipInX faster'
              },
              position: 'top',
              title: "Confirmation ?",
              text: "Voulez vous vraiment devalider ?",
              type: "warning",
              showCancelButton: true,
              focusConfirm: true,
              showCloseButton: true,
              confirmButtonText: "<i class='fa fa-check'></i> Oui!",
              cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
            }).then( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(result) {
                var formData, request, response, message;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!result.isConfirmed) {
                          _context3.next = 20;
                          break;
                        }

                        notyf.open({
                          type: "info",
                          message: "En cours...",
                          duration: 9000000,
                          dismissible: false
                        });
                        formData = new FormData();
                        formData.append('bordereauIds', JSON.stringify(bordereauIds));
                        _context3.prev = 4;
                        _context3.next = 7;
                        return axios.post(Routing.generate('app_tresorerie_bordereau_devalider'), formData);

                      case 7:
                        request = _context3.sent;
                        response = request.data;
                        notyf.dismissAll();
                        notyf.success(response);
                        table.ajax.reload();
                        _context3.next = 20;
                        break;

                      case 14:
                        _context3.prev = 14;
                        _context3.t0 = _context3["catch"](4);
                        console.log(_context3.t0);
                        message = _context3.t0.response.data;
                        notyf.dismissAll();
                        notyf.error(message);

                      case 20:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, null, [[4, 14]]);
              }));

              return function (_x2) {
                return _ref4.apply(this, arguments);
              };
            }());

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  $("#integre").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            swalWithBootstrapButtons.fire({
              showClass: {
                popup: 'animatedSwal flipInX faster'
              },
              position: 'top',
              title: "Confirmation ?",
              text: "Voulez vous vraiment integere ?",
              type: "warning",
              showCancelButton: true,
              focusConfirm: true,
              showCloseButton: true,
              confirmButtonText: "<i class='fa fa-check'></i> Oui!",
              cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
            }).then( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(result) {
                var request, response, message;
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        if (!result.isConfirmed) {
                          _context5.next = 18;
                          break;
                        }

                        notyf.open({
                          type: "info",
                          message: "En cours...",
                          duration: 9000000,
                          dismissible: false
                        });
                        _context5.prev = 2;
                        _context5.next = 5;
                        return axios.post(Routing.generate('app_tresorerie_bordereau_integre'));

                      case 5:
                        request = _context5.sent;
                        response = request.data;
                        notyf.dismissAll();
                        notyf.success(response);
                        table.ajax.reload();
                        _context5.next = 18;
                        break;

                      case 12:
                        _context5.prev = 12;
                        _context5.t0 = _context5["catch"](2);
                        console.log(_context5.t0);
                        message = _context5.t0.response.data;
                        notyf.dismissAll();
                        notyf.error(message);

                      case 18:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, null, [[2, 12]]);
              }));

              return function (_x3) {
                return _ref6.apply(this, arguments);
              };
            }());

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-8f6080"], () => (__webpack_exec__("./assets/components/tresorerie/bordereau.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFEc0I7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FBMUI7QUFrREgsQ0F6UEQ7Ozs7Ozs7Ozs7QUNBQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxjQUFjLG1CQUFPLENBQUMsMkVBQXVCO0FBQzdDLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyx3QkFBd0IsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDbkUsK0JBQStCLG1CQUFPLENBQUMsbUhBQTJDO0FBQ2xGLHFCQUFxQixtQkFBTyxDQUFDLHlGQUE4QjtBQUMzRCx5QkFBeUIsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDcEUsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDO0FBQzFGLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxpQkFBaUIsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQXdEO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3RyZXNvcmVyaWUvYm9yZGVyZWF1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbiAgICAkKFwiLmJsb2NrX3BhZ2VcIikuaHRtbCgnR2VzdGlvbiBkZXMgYm9yZGVyZWF1eCcpXHJcbiAgIFxyXG5cclxuICAgIHZhciBwcmV2aW91c1hociA9IG51bGw7XHJcbiAgICB2YXIgdGFibGUgPSAkKFwiI2xpc3RfYm9yZGVyZWF1XCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfdHJlc29yZXJpZV9ib3JkZXJlYXVfbGlzdCcpLFxyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbihqcVhIUikge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHByZXZpb3VzIGpxWEhSIG9iamVjdCwgYWJvcnQgaXRcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1hocikge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWGhyLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgY3VycmVudCBqcVhIUiBvYmplY3QgZm9yIHRoZSBuZXcgcmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNYaHIgPSBqcVhIUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgIHtuYW1lOiAnYi5pZCcsIGRhdGE6ICdpZCd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ2IuY29kZScsIGRhdGE6ICdjb2RlJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnZC5kZXNpZ25hdGlvbicsIGRhdGE6ICdkb3NzaWVyX2Rlc2lnbmF0aW9uJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAncC5hYnJldmlhdGlvbicsIGRhdGE6ICdwZXJpb2RlJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnYi50eXBlJywgZGF0YTogJ3R5cGUnfSxcclxuICAgICAgICAgICAge25hbWU6ICduYXR1cmVDb250cmFjdC5kZXNpZ25hdGlvbicsIGRhdGE6ICdkZXNpZ25hdGlvbid9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ2IuY3JlYXRlZCcsIGRhdGE6ICdjcmVhdGVkJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAncy5pY29uJywgZGF0YTogJ2ljb24nfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFsgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IDAsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihmdWxsLnN0YXR1dCA9PSAncHJvYmzDqG1lJyB8fCBmdWxsLnN0YXR1dCA9PSAnZW4gY291cnMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihmdWxsLnN0YXR1dCA9PSAnaW50w6lncsOpJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIiR7ZGF0YX1cIiBjbGFzcz1cIlwiIGNoZWNrZWQgZGlzYWJsZWQvPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiJHtkYXRhfVwiIGNsYXNzPVwiYm9yZGVyZWF1X2NoZWNrXCIvPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IDYsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhICYmIGRhdGEuZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGEuZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IDcsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxpIGNsYXNzPScke2RhdGF9Jz48L2k+ICR7ZnVsbC5zdGF0dXR9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIF0sXHJcbiAgICAgIFxyXG4gICAgICAgIGxhbmd1YWdlOiBkYXRhdGFibGVzRnJlbmNoLFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBcclxuICAgICQoXCIjdmFsaWRlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYm9yZGVyZWF1SWRzID0gW107XHJcbiAgICAgICAgJCgnLmJvcmRlcmVhdV9jaGVjazpjaGVja2VkJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBib3JkZXJlYXVJZHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihib3JkZXJlYXVJZHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcignVmV1aWxsZXogc2VsZWN0aW9ubsOpIHVuIG91IHBsdXNpZXVyIGJvcmRlcmVhdScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHZhbGlkZXIgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZm9jdXNDb25maXJtOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jaGVjayc+PC9pPiBPdWkhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oYXN5bmMgKHJlc3VsdCkgID0+ICB7XHJcbiAgICAgICAgLyogUmVhZCBtb3JlIGFib3V0IGlzQ29uZmlybWVkLCBpc0RlbmllZCBiZWxvdyAqL1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOlwiaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW4gY291cnMuLi5cIixcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYm9yZGVyZWF1SWRzJywgSlNPTi5zdHJpbmdpZnkoYm9yZGVyZWF1SWRzKSk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfdHJlc29yZXJpZV9ib3JkZXJlYXVfdmFsaWRlcicpLCBmb3JtRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBub3R5Zi5zdWNjZXNzKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgICQoXCIjZGV2YWxpZGVyXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBib3JkZXJlYXVJZHMgPSBbXTtcclxuICAgICAgICAkKCcuYm9yZGVyZWF1X2NoZWNrOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGJvcmRlcmVhdUlkcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKGJvcmRlcmVhdUlkcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgIG5vdHlmLmVycm9yKCdWZXVpbGxleiBzZWxlY3Rpb25uw6kgdW4gb3UgcGx1c2lldXIgYm9yZGVyZWF1Jyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZGV2YWxpZGVyID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGZvY3VzQ29uZmlybTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KS50aGVuKGFzeW5jIChyZXN1bHQpICA9PiAge1xyXG4gICAgICAgIC8qIFJlYWQgbW9yZSBhYm91dCBpc0NvbmZpcm1lZCwgaXNEZW5pZWQgYmVsb3cgKi9cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzbWlzc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYm9yZGVyZWF1SWRzJywgSlNPTi5zdHJpbmdpZnkoYm9yZGVyZWF1SWRzKSk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfdHJlc29yZXJpZV9ib3JkZXJlYXVfZGV2YWxpZGVyJyksIGZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLnN1Y2Nlc3MocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgJChcIiNpbnRlZ3JlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IGludGVnZXJlID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGZvY3VzQ29uZmlybTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgIH0pLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8qIFJlYWQgbW9yZSBhYm91dCBpc0NvbmZpcm1lZCwgaXNEZW5pZWQgYmVsb3cgKi9cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzbWlzc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfdHJlc29yZXJpZV9ib3JkZXJlYXVfaW50ZWdyZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLnN1Y2Nlc3MocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KSIsInZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xyXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XHJcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XHJcbiAgcmV0dXJuIGl0O1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcclxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcclxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xyXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XHJcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xyXG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcclxudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xyXG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XHJcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XHJcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcclxudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcclxuXHJcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XHJcblxyXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcclxuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxyXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYXJyYXkgPSBbXTtcclxuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcclxuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xyXG59KTtcclxuXHJcbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcclxuXHJcbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xyXG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcclxuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xyXG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xyXG59O1xyXG5cclxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcclxuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHtcclxuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XHJcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcclxuICAgIHZhciBuID0gMDtcclxuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcclxuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcclxuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xyXG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xyXG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgbGVuKTtcclxuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyAxKTtcclxuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBBLmxlbmd0aCA9IG47XHJcbiAgICByZXR1cm4gQTtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJodG1sIiwicHJldmlvdXNYaHIiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiYmVmb3JlU2VuZCIsImpxWEhSIiwiYWJvcnQiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJjb2x1bW5zIiwibmFtZSIsImRhdGEiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsInJlbmRlciIsImZ1bGwiLCJtZXRhIiwic3RhdHV0IiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImxhbmd1YWdlIiwiZGF0YXRhYmxlc0ZyZW5jaCIsIm9uIiwiYm9yZGVyZWF1SWRzIiwiZWFjaCIsInB1c2giLCJ2YWwiLCJsZW5ndGgiLCJub3R5ZiIsImRpc21pc3NBbGwiLCJlcnJvciIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsImZpcmUiLCJzaG93Q2xhc3MiLCJwb3B1cCIsInBvc2l0aW9uIiwidGl0bGUiLCJ0ZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImZvY3VzQ29uZmlybSIsInNob3dDbG9zZUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsIm9wZW4iLCJtZXNzYWdlIiwiZHVyYXRpb24iLCJkaXNtaXNzaWJsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiYXhpb3MiLCJwb3N0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwic3VjY2VzcyIsInJlbG9hZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9