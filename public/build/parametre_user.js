(self["webpackChunk"] = self["webpackChunk"] || []).push([["parametre_user"],{

/***/ "./assets/components/parametre/user.js":
/*!*********************************************!*\
  !*** ./assets/components/parametre/user.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

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

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(document).ready(function () {
  $(".block_page").html('Parametrage users');
  var previousXhr = null;
  var userId = null;
  var dossierId = null;
  $("body").on('click', '#modifier', function (e) {
    e.preventDefault();
    userId = $(this).attr('data-id');
    $("#modifier_modal").modal("show");
  });
  var table = $("#list_users").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: {
      url: Routing.generate('app_parametre_user_list'),
      type: "get" // beforeSend: function(jqXHR) {
      //     // If there's a previous jqXHR object, abort it
      //     if (previousXhr) {
      //         previousXhr.abort();
      //     }
      //     // Store the current jqXHR object for the new request
      //     previousXhr = jqXHR;
      // }

    },
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    columns: [{
      name: 'u.id',
      data: 'id'
    }, {
      name: 'u.username',
      data: 'username'
    }, {
      name: 'u.nom',
      data: 'nom'
    }, {
      name: 'u.prenom',
      data: 'prenom'
    }, {
      name: 'u.email',
      data: 'email'
    }, {
      name: 'u.roles',
      data: 'roles'
    }, {
      orderable: false,
      searchable: false,
      data: "enable"
    }, {
      orderable: false,
      searchable: false,
      data: "actions"
    }],
    columnDefs: [{
      targets: 0,
      render: function render(data, type, full, meta) {
        return "<input type=\"checkbox\" value=\"".concat(data, "\" class=\"user_check\"/>");
      }
    }, {
      targets: 6,
      render: function render(data, type, full, meta) {
        if (data == true) {
          return "<i class=\"fa fa-unlock text-success\"/>";
        } else {
          return "<i class=\"fa fa-lock text-danger\"/>";
        }
      }
    }],
    language: datatablesFrench
  });
  $("#desactiver").on('click', function (e) {
    e.preventDefault();
    var usersIds = [];
    $('.user_check:checked').each(function () {
      usersIds.push($(this).val());
    });

    if (usersIds.length == 0) {
      notyf.dismissAll();
      notyf.error('Veuillez selectionné un ou plusieur user');
      return;
    }

    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment désactiver ?",
      type: "warning",
      showCancelButton: true,
      focusConfirm: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(result) {
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
                formData.append('usersIds', JSON.stringify(usersIds));
                _context.prev = 4;
                _context.next = 7;
                return axios.post(Routing.generate('app_parametre_user_desactiver'), formData);

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
        return _ref.apply(this, arguments);
      };
    }());
  });
  $("#activer").on('click', function (e) {
    e.preventDefault();
    var usersIds = [];
    $('.user_check:checked').each(function () {
      usersIds.push($(this).val());
    });

    if (usersIds.length == 0) {
      notyf.dismissAll();
      notyf.error('Veuillez selectionné un ou plusieur user');
      return;
    }

    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment activer ?",
      type: "warning",
      showCancelButton: true,
      focusConfirm: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(result) {
        var formData, request, response, message;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!result.isConfirmed) {
                  _context2.next = 20;
                  break;
                }

                notyf.open({
                  type: "info",
                  message: "En cours...",
                  duration: 9000000,
                  dismissible: false
                });
                formData = new FormData();
                formData.append('usersIds', JSON.stringify(usersIds));
                _context2.prev = 4;
                _context2.next = 7;
                return axios.post(Routing.generate('app_parametre_user_activer'), formData);

              case 7:
                request = _context2.sent;
                response = request.data;
                notyf.dismissAll();
                notyf.success(response);
                table.ajax.reload();
                _context2.next = 20;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](4);
                console.log(_context2.t0);
                message = _context2.t0.response.data;
                notyf.dismissAll();
                notyf.error(message);

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 14]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
  $(".dossier_select").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var request, response, index, element, message;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!($(this).val() == "")) {
              _context3.next = 5;
              break;
            }

            dossierId = null;
            $(".buttons input").map(function (e) {
              $(this).prop("checked", false);
            });
            checkInputIfAllChildAreChecked();
            return _context3.abrupt("return");

          case 5:
            notyf.open({
              type: "info",
              message: "En cours...",
              duration: 9000000,
              dismissible: false
            });
            dossierId = $(this).val();
            _context3.prev = 7;
            _context3.next = 10;
            return axios.post(Routing.generate('app_parametre_user_operations', {
              user: userId,
              dossier: dossierId
            }));

          case 10:
            request = _context3.sent;
            response = request.data;
            $(".buttons input").map(function (e) {
              $(this).prop("checked", false);
            });
            checkInputIfAllChildAreChecked();

            for (index = 0; index < response.length; index++) {
              element = response[index];
              $(".buttons ." + element.id).prop("checked", true);
            }

            checkInputIfAllChildAreChecked();
            notyf.dismissAll();
            _context3.next = 23;
            break;

          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](7);
            console.log(_context3.t0, _context3.t0.response);
            message = _context3.t0.response.data;

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[7, 19]]);
  })));
  $(".Collapsable").on("click", function () {
    $(this).parent().children().toggle();
    $(this).toggle();
  });

  var checkInputIfAllChildAreChecked = function checkInputIfAllChildAreChecked() {
    // console.log($(".sousModules"));
    $(".sousModules").each(function () {
      if ($(this).parent().find('.inputOperation').not(':checked').length === 0) {
        $(this).find(".inputSousModule").prop("checked", true);
      } else {
        $(this).find(".inputSousModule").prop("checked", false);
      }
    });
    $(".modules").each(function () {
      if ($(this).parent().find('.inputSousModule').not(':checked').length === 0) {
        $(this).find(".inputModule").prop("checked", true);
      } else {
        $(this).find(".inputModule").prop("checked", false);
      }
    }); // console.log($('.modules').find(".inputModule").not(':checked'))

    if ($('.modules').find(".inputModule").not(':checked').length === 0) {
      $('.tous').prop("checked", true);
    } else {
      $('.tous').prop("checked", false);
    }
  };

  $(".inputOperation").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var url, operation, request, response, message;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(dossierId == null)) {
              _context4.next = 4;
              break;
            }

            notyf.dismissAll();
            notyf.error('Veuillez selectionné un dossier');
            return _context4.abrupt("return");

          case 4:
            operation = $(this).attr("data-operation");

            if ($(this).is(":checked")) {
              // $(".inputOperation").parent().parent().find("input:checkbox").prop("checked", true);
              url = Routing.generate('app_parametre_user_operation', {
                operation: operation,
                userId: userId,
                dossierId: dossierId,
                type: 'add'
              });
            } else {
              // $(".inputOperation").parent().parent().find("input:checkbox").prop("checked", false);
              url = Routing.generate('app_parametre_user_operation', {
                operation: operation,
                userId: userId,
                dossierId: dossierId,
                type: 'remove'
              });
            }

            checkInputIfAllChildAreChecked();
            _context4.prev = 7;
            _context4.next = 10;
            return axios.post(url);

          case 10:
            request = _context4.sent;
            response = request.data;
            _context4.next = 18;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](7);
            message = _context4.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[7, 14]]);
  })));
  $(".inputSousModule").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var url, sous_module, request, response, message;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!(dossierId == null)) {
              _context5.next = 4;
              break;
            }

            notyf.dismissAll();
            notyf.error('Veuillez selectionné un dossier');
            return _context5.abrupt("return");

          case 4:
            sous_module = $(this).attr("data-module");

            if ($(this).is(":checked")) {
              $(this).parent().parent().find(".inputOperation").prop("checked", true);
              url = Routing.generate('app_parametre_user_sousmodule', {
                sous_module: sous_module,
                userId: userId,
                dossierId: dossierId,
                type: 'add'
              });
            } else {
              $(this).parent().parent().find(".inputOperation").prop("checked", false);
              url = Routing.generate('app_parametre_user_sousmodule', {
                sous_module: sous_module,
                userId: userId,
                dossierId: dossierId,
                type: 'remove'
              });
            }

            checkInputIfAllChildAreChecked();
            _context5.prev = 7;
            _context5.next = 10;
            return axios.post(url);

          case 10:
            request = _context5.sent;
            response = request.data;
            _context5.next = 18;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](7);
            message = _context5.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this, [[7, 14]]);
  })));
  $(".inputModule").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var url, module, request, response, message;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!(dossierId == null)) {
              _context6.next = 4;
              break;
            }

            notyf.dismissAll();
            notyf.error('Veuillez selectionné un dossier');
            return _context6.abrupt("return");

          case 4:
            module = $(this).attr("data-id");

            if ($(this).is(":checked")) {
              $(this).parent().parent().find("input:checkbox").prop("checked", true);
              url = Routing.generate('app_parametre_user_module', {
                module: module,
                userId: userId,
                dossierId: dossierId,
                type: 'add'
              });
            } else {
              $(this).parent().parent().find("input:checkbox").prop("checked", false);
              url = Routing.generate('app_parametre_user_module', {
                module: module,
                userId: userId,
                dossierId: dossierId,
                type: 'remove'
              });
            }

            checkInputIfAllChildAreChecked();
            _context6.prev = 7;
            _context6.next = 10;
            return axios.post(url);

          case 10:
            request = _context6.sent;
            response = request.data;
            _context6.next = 18;
            break;

          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](7);
            message = _context6.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this, [[7, 14]]);
  })));
  $(".tous").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var url, request, response, message;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (!(dossierId == null)) {
              _context7.next = 4;
              break;
            }

            notyf.dismissAll();
            notyf.error('Veuillez selectionné un dossier');
            return _context7.abrupt("return");

          case 4:
            if ($(this).is(":checked")) {
              $(".tous").parent().parent().find("input:checkbox").prop("checked", true);
              url = Routing.generate('app_parametre_user_all', {
                userId: userId,
                dossierId: dossierId,
                type: 'add'
              });
            } else {
              $(".tous").parent().parent().find("input:checkbox").prop("checked", false); // $(".inputOperation").parent().parent().find("input:checkbox").prop("checked", false);

              url = Routing.generate('app_parametre_user_all', {
                userId: userId,
                dossierId: dossierId,
                type: 'remove'
              });
            }

            checkInputIfAllChildAreChecked();
            _context7.prev = 6;
            _context7.next = 9;
            return axios.post(url);

          case 9:
            request = _context7.sent;
            response = request.data;
            _context7.next = 17;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](6);
            message = _context7.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this, [[6, 13]]);
  })));
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-8f6080"], () => (__webpack_exec__("./assets/components/parametre/user.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDZCxNQUFNLEVBQU5BLE1BQUQ7Z0JBQVNDLFNBQVMsRUFBVEEsU0FBVDtnQkFBbUJjLElBQUksRUFBRTtjQUF6QixDQUEzQyxDQUFOO1lBQ0g7O1lBQ0Q0RCw4QkFBOEI7WUFoQlg7WUFBQTtZQUFBLE9Ba0JPVixLQUFLLENBQUNDLElBQU4sQ0FBV3RELEdBQVgsQ0FsQlA7O1VBQUE7WUFrQlR1RCxPQWxCUztZQW1CVEMsUUFuQlMsR0FtQkVELE9BQU8sQ0FBQzVDLElBbkJWO1lBQUE7WUFBQTs7VUFBQTtZQUFBO1lBQUE7WUFxQlRrQyxPQXJCUyxHQXFCQyxhQUFNVyxRQUFOLENBQWU3QyxJQXJCaEI7WUFzQmZpRSxLQUFLLENBQUM5QyxJQUFOLENBQVc7Y0FDUCtDLElBQUksRUFBRSxPQURDO2NBRVAzQyxLQUFLLEVBQUVXO1lBRkEsQ0FBWDs7VUF0QmU7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FBdkI7QUE2QkgsQ0EvWEQ7Ozs7Ozs7Ozs7O0FDQWE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVkscUhBQTRDO0FBQ3hELHVCQUF1QixtQkFBTyxDQUFDLCtGQUFpQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNCQUFzQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFtRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsb0hBQTJDO0FBQ3RELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUE0RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFyYW1ldHJlL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbiAgICAkKFwiLmJsb2NrX3BhZ2VcIikuaHRtbCgnUGFyYW1ldHJhZ2UgdXNlcnMnKVxyXG4gICAgXHJcbiAgICB2YXIgcHJldmlvdXNYaHIgPSBudWxsO1xyXG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XHJcbiAgICBsZXQgZG9zc2llcklkID0gbnVsbDtcclxuICAgICQoXCJib2R5XCIpLm9uKCdjbGljaycsICcjbW9kaWZpZXInLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdXNlcklkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgIH0pXHJcbiAgICB2YXIgdGFibGUgPSAkKFwiI2xpc3RfdXNlcnNcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9wYXJhbWV0cmVfdXNlcl9saXN0JyksXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIC8vIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKGpxWEhSKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBJZiB0aGVyZSdzIGEgcHJldmlvdXMganFYSFIgb2JqZWN0LCBhYm9ydCBpdFxyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHByZXZpb3VzWGhyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcHJldmlvdXNYaHIuYWJvcnQoKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIC8vIFN0b3JlIHRoZSBjdXJyZW50IGpxWEhSIG9iamVjdCBmb3IgdGhlIG5ldyByZXF1ZXN0XHJcbiAgICAgICAgICAgIC8vICAgICBwcmV2aW91c1hociA9IGpxWEhSO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAge25hbWU6ICd1LmlkJywgZGF0YTogJ2lkJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAndS51c2VybmFtZScsIGRhdGE6ICd1c2VybmFtZSd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3Uubm9tJywgZGF0YTogJ25vbSd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3UucHJlbm9tJywgZGF0YTogJ3ByZW5vbSd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3UuZW1haWwnLCBkYXRhOiAnZW1haWwnfSxcclxuICAgICAgICAgICAge25hbWU6ICd1LnJvbGVzJywgZGF0YTogJ3JvbGVzJ30sXHJcbiAgICAgICAgICAgIHtvcmRlcmFibGU6IGZhbHNlICwgc2VhcmNoYWJsZTogZmFsc2UsZGF0YTpcImVuYWJsZVwifSxcclxuICAgICAgICAgICAge29yZGVyYWJsZTogZmFsc2UgLCBzZWFyY2hhYmxlOiBmYWxzZSwgZGF0YTpcImFjdGlvbnNcIn0gXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiAwLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCIke2RhdGF9XCIgY2xhc3M9XCJ1c2VyX2NoZWNrXCIvPmA7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiA2LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGkgY2xhc3M9XCJmYSBmYS11bmxvY2sgdGV4dC1zdWNjZXNzXCIvPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aSBjbGFzcz1cImZhIGZhLWxvY2sgdGV4dC1kYW5nZXJcIi8+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuIFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGRhdGF0YWJsZXNGcmVuY2gsXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI2Rlc2FjdGl2ZXJcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgdXNlcnNJZHMgPSBbXTtcclxuICAgICAgICAkKCcudXNlcl9jaGVjazpjaGVja2VkJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB1c2Vyc0lkcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHVzZXJzSWRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgbm90eWYuZXJyb3IoJ1ZldWlsbGV6IHNlbGVjdGlvbm7DqSB1biBvdSBwbHVzaWV1ciB1c2VyJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZMOpc2FjdGl2ZXIgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZm9jdXNDb25maXJtOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jaGVjayc+PC9pPiBPdWkhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oYXN5bmMgKHJlc3VsdCkgID0+ICB7XHJcbiAgICAgICAgLyogUmVhZCBtb3JlIGFib3V0IGlzQ29uZmlybWVkLCBpc0RlbmllZCBiZWxvdyAqL1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOlwiaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW4gY291cnMuLi5cIixcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2Vyc0lkcycsIEpTT04uc3RyaW5naWZ5KHVzZXJzSWRzKSk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcGFyYW1ldHJlX3VzZXJfZGVzYWN0aXZlcicpLCBmb3JtRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBub3R5Zi5zdWNjZXNzKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgICQoXCIjYWN0aXZlclwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciB1c2Vyc0lkcyA9IFtdO1xyXG4gICAgICAgICQoJy51c2VyX2NoZWNrOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHVzZXJzSWRzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYodXNlcnNJZHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcignVmV1aWxsZXogc2VsZWN0aW9ubsOpIHVuIG91IHBsdXNpZXVyIHVzZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBhY3RpdmVyID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGZvY3VzQ29uZmlybTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KS50aGVuKGFzeW5jIChyZXN1bHQpICA9PiAge1xyXG4gICAgICAgIC8qIFJlYWQgbW9yZSBhYm91dCBpc0NvbmZpcm1lZCwgaXNEZW5pZWQgYmVsb3cgKi9cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzbWlzc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJzSWRzJywgSlNPTi5zdHJpbmdpZnkodXNlcnNJZHMpKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9wYXJhbWV0cmVfdXNlcl9hY3RpdmVyJyksIGZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLnN1Y2Nlc3MocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIuZG9zc2llcl9zZWxlY3RcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoJCh0aGlzKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGRvc3NpZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICQoXCIuYnV0dG9ucyBpbnB1dFwiKS5tYXAoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNoZWNrSW5wdXRJZkFsbENoaWxkQXJlQ2hlY2tlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vdHlmLm9wZW4oe1xyXG4gICAgICAgICAgICB0eXBlOlwiaW5mb1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA5MDAwMDAwLFxyXG4gICAgICAgICAgICBkaXNtaXNzaWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb3NzaWVySWQgPSAkKHRoaXMpLnZhbCgpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnYXBwX3BhcmFtZXRyZV91c2VyX29wZXJhdGlvbnMnLCB7dXNlcjogdXNlcklkLCBkb3NzaWVyOiBkb3NzaWVySWR9KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiLmJ1dHRvbnMgaW5wdXRcIikubWFwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjaGVja0lucHV0SWZBbGxDaGlsZEFyZUNoZWNrZWQoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJlc3BvbnNlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHJlc3BvbnNlW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICQoXCIuYnV0dG9ucyAuXCIrZWxlbWVudC5pZCkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaGVja0lucHV0SWZBbGxDaGlsZEFyZUNoZWNrZWQoKTtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIuQ29sbGFwc2FibGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oKS50b2dnbGUoKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZSgpO1xyXG4gICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc3QgY2hlY2tJbnB1dElmQWxsQ2hpbGRBcmVDaGVja2VkID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCQoXCIuc291c01vZHVsZXNcIikpO1xyXG4gICAgICAgICQoXCIuc291c01vZHVsZXNcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuaW5wdXRPcGVyYXRpb24nKS5ub3QoJzpjaGVja2VkJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoXCIuaW5wdXRTb3VzTW9kdWxlXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKFwiLmlucHV0U291c01vZHVsZVwiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICAgICAgJChcIi5tb2R1bGVzXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKCQodGhpcykucGFyZW50KCkuZmluZCgnLmlucHV0U291c01vZHVsZScpLm5vdCgnOmNoZWNrZWQnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChcIi5pbnB1dE1vZHVsZVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChcIi5pbnB1dE1vZHVsZVwiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCQoJy5tb2R1bGVzJykuZmluZChcIi5pbnB1dE1vZHVsZVwiKS5ub3QoJzpjaGVja2VkJykpXHJcbiAgICAgICAgaWYoJCgnLm1vZHVsZXMnKS5maW5kKFwiLmlucHV0TW9kdWxlXCIpLm5vdCgnOmNoZWNrZWQnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgJCgnLnRvdXMnKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcudG91cycpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9ICAgXHJcblxyXG4gICAgJChcIi5pbnB1dE9wZXJhdGlvblwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZihkb3NzaWVySWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgIG5vdHlmLmVycm9yKCdWZXVpbGxleiBzZWxlY3Rpb25uw6kgdW4gZG9zc2llcicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB1cmw7XHJcbiAgICAgICAgbGV0IG9wZXJhdGlvbiA9ICQodGhpcykuYXR0cihcImRhdGEtb3BlcmF0aW9uXCIpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAgICAgICAgIC8vICQoXCIuaW5wdXRPcGVyYXRpb25cIikucGFyZW50KCkucGFyZW50KCkuZmluZChcImlucHV0OmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcGFyYW1ldHJlX3VzZXJfb3BlcmF0aW9uJywge29wZXJhdGlvbiwgdXNlcklkLCBkb3NzaWVySWQsIHR5cGU6J2FkZCd9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gJChcIi5pbnB1dE9wZXJhdGlvblwiKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiaW5wdXQ6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcGFyYW1ldHJlX3VzZXJfb3BlcmF0aW9uJywge29wZXJhdGlvbiwgdXNlcklkLCBkb3NzaWVySWQsIHR5cGU6J3JlbW92ZSd9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoZWNrSW5wdXRJZkFsbENoaWxkQXJlQ2hlY2tlZCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KHVybCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiLmlucHV0U291c01vZHVsZVwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZihkb3NzaWVySWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgIG5vdHlmLmVycm9yKCdWZXVpbGxleiBzZWxlY3Rpb25uw6kgdW4gZG9zc2llcicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB1cmw7XHJcbiAgICAgICAgbGV0IHNvdXNfbW9kdWxlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1tb2R1bGVcIik7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmlucHV0T3BlcmF0aW9uXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcGFyYW1ldHJlX3VzZXJfc291c21vZHVsZScsIHtzb3VzX21vZHVsZSwgdXNlcklkLCBkb3NzaWVySWQsdHlwZTogJ2FkZCd9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmlucHV0T3BlcmF0aW9uXCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnYXBwX3BhcmFtZXRyZV91c2VyX3NvdXNtb2R1bGUnLCB7c291c19tb2R1bGUsIHVzZXJJZCwgZG9zc2llcklkLCB0eXBlOidyZW1vdmUnfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hlY2tJbnB1dElmQWxsQ2hpbGRBcmVDaGVja2VkKClcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCh1cmwpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIi5pbnB1dE1vZHVsZVwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZihkb3NzaWVySWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgIG5vdHlmLmVycm9yKCdWZXVpbGxleiBzZWxlY3Rpb25uw6kgdW4gZG9zc2llcicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB1cmw7XHJcbiAgICAgICAgbGV0IG1vZHVsZSA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIik7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiaW5wdXQ6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9wYXJhbWV0cmVfdXNlcl9tb2R1bGUnLCB7bW9kdWxlLCB1c2VySWQsIGRvc3NpZXJJZCwgdHlwZTogJ2FkZCd9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiaW5wdXQ6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcGFyYW1ldHJlX3VzZXJfbW9kdWxlJywge21vZHVsZSwgdXNlcklkLCBkb3NzaWVySWQsIHR5cGU6ICdyZW1vdmUnfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja0lucHV0SWZBbGxDaGlsZEFyZUNoZWNrZWQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCh1cmwpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiLnRvdXNcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWYoZG9zc2llcklkID09IG51bGwpIHtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcignVmV1aWxsZXogc2VsZWN0aW9ubsOpIHVuIGRvc3NpZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdXJsO1xyXG4gICAgICAgIGlmKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAgICAgICAgICQoXCIudG91c1wiKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiaW5wdXQ6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9wYXJhbWV0cmVfdXNlcl9hbGwnLCB7dXNlcklkLCBkb3NzaWVySWQsdHlwZTogJ2FkZCd9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoXCIudG91c1wiKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiaW5wdXQ6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyAkKFwiLmlucHV0T3BlcmF0aW9uXCIpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCJpbnB1dDpjaGVja2JveFwiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9wYXJhbWV0cmVfdXNlcl9hbGwnLCB7dXNlcklkLCBkb3NzaWVySWQsdHlwZTogJ3JlbW92ZSd9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hlY2tJbnB1dElmQWxsQ2hpbGRBcmVDaGVja2VkKCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QodXJsKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbn0pXHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xyXG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcclxuXHJcbnZhciBGSU5EID0gJ2ZpbmQnO1xyXG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xyXG5cclxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcclxuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcclxuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XHJcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXHJcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcclxudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcclxuXHJcbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XHJcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcclxuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJodG1sIiwicHJldmlvdXNYaHIiLCJ1c2VySWQiLCJkb3NzaWVySWQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF0dHIiLCJtb2RhbCIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInR5cGUiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJjb2x1bW5zIiwibmFtZSIsImRhdGEiLCJvcmRlcmFibGUiLCJzZWFyY2hhYmxlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJyZW5kZXIiLCJmdWxsIiwibWV0YSIsImxhbmd1YWdlIiwiZGF0YXRhYmxlc0ZyZW5jaCIsInVzZXJzSWRzIiwiZWFjaCIsInB1c2giLCJ2YWwiLCJsZW5ndGgiLCJub3R5ZiIsImRpc21pc3NBbGwiLCJlcnJvciIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsImZpcmUiLCJzaG93Q2xhc3MiLCJwb3B1cCIsInBvc2l0aW9uIiwidGl0bGUiLCJ0ZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImZvY3VzQ29uZmlybSIsInNob3dDbG9zZUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsIm9wZW4iLCJtZXNzYWdlIiwiZHVyYXRpb24iLCJkaXNtaXNzaWJsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiYXhpb3MiLCJwb3N0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwic3VjY2VzcyIsInJlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwcm9wIiwiY2hlY2tJbnB1dElmQWxsQ2hpbGRBcmVDaGVja2VkIiwidXNlciIsImRvc3NpZXIiLCJpbmRleCIsImVsZW1lbnQiLCJpZCIsInBhcmVudCIsImNoaWxkcmVuIiwidG9nZ2xlIiwiZmluZCIsIm5vdCIsIm9wZXJhdGlvbiIsImlzIiwiVG9hc3QiLCJpY29uIiwic291c19tb2R1bGUiLCJtb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9