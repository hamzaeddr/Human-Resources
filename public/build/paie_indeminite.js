(self["webpackChunk"] = self["webpackChunk"] || []).push([["paie_indeminite"],{

/***/ "./assets/components/paie/indeminite.js":
/*!**********************************************!*\
  !*** ./assets/components/paie/indeminite.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

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

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

$(document).ready(function () {
  $(".block_page").html('Gestion des indeminites');
  var table = $("#list_indeminite").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: Routing.generate('app_paie_indeminite_list'),
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
      data: 'dossier'
    }, {
      name: 'b.created ',
      data: 'created'
    }, {
      name: 'b.observation',
      data: 'observation'
    }, {
      name: 'periode.code',
      data: 'code_periode'
    }, {
      name: 'p.designation',
      data: 'paiement'
    }, {
      name: 'b.id',
      data: 'id',
      orderable: false,
      searchable: false
    }],
    columnDefs: [{
      targets: 0,
      render: function render(data, type, full, meta) {
        return "<input type=\"checkbox\" value=\"".concat(data, "\" class=\"honoraire\"/>");
      }
    }, {
      targets: 3,
      render: function render(data, type, full, meta) {
        if (data.date) {
          return moment(data.date).format('YYYY-MM-DD HH:mm:ss');
        }

        return "";
      }
    }, {
      targets: 7,
      render: function render(data, type, full, meta) {
        return "\n                    ";
      }
    }],
    language: datatablesFrench
  });
  $("#upload").on('click', function () {
    $("#upload_modal").modal('show');
  });
  var tableIndeminites = $("#list_indeminites").DataTable({
    // responsive: true,
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    language: datatablesFrench
  });
  var indeminites = [];
  $(".add_employe").on('click', function () {
    notyf.open({
      type: "info",
      message: "En cours...",
      duration: 9000000,
      dismissible: false
    });
    var contract = $('.employe_select').val();
    var montant = $('.montant').val();
    var montantMad = $('.montant_mad').val();

    if (contract == '' || montant == '' || montantMad == '') {
      notyf.dismissAll();
      notyf.error('Veuillez remplir tout les champs!');
      return;
    }

    var index = indeminites.findIndex(function (i) {
      return i.contract == contract;
    });

    if (index != '-1') {
      notyf.dismissAll();
      notyf.error('Employe déja exist!');
      return;
    }

    var rib = $('.employe_select').find('option:selected').attr('data-rib');
    var name = $('.employe_select').find('option:selected').attr('data-name');
    indeminites.push({
      contract: contract,
      name: name,
      montant: montant,
      montantMad: montantMad,
      rib: rib
    });
    console.log(indeminites);
    renderTableIndiminite();
    notyf.dismissAll();
  });
  var contract_rib;
  $("body").on('click', '.ajouter_rib', function (e) {
    e.preventDefault();
    contract_rib = $(this).parents('tr').attr('id');
    $("#rib_modal").modal('show');
  });
  $("#add_rib").on('submit', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var formData, request, response, index, message;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              notyf.open({
                type: "info",
                message: "En cours...",
                duration: 9000000,
                dismissible: false
              });
              _context.prev = 2;
              formData = new FormData(this);
              formData.append('contract', contract_rib);
              _context.next = 7;
              return axios.post(Routing.generate('app_paie_indeminite_add_rib'), formData);

            case 7:
              request = _context.sent;
              response = request.data;
              $(".employe_select").html(response.data);
              renderSelect2();
              index = indeminites.findIndex(function (e) {
                return e.contract == contract_rib;
              });

              if (index != '-1') {
                indeminites[index].rib = response.rib;
                renderTableIndiminite();
              }

              $("#rib_modal").modal('hide');
              notyf.dismissAll();
              $('#add_rib')[0].reset();
              _context.next = 24;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](2);
              notyf.dismissAll();
              console.log(_context.t0);
              message = _context.t0.response.data;
              notyf.error(message);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[2, 18]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $("body").on('click', '.delete_indeminite', function () {
    var contract = $(this).parents('tr').attr('id');
    var index = indeminites.findIndex(function (e) {
      return e.contract == contract;
    });

    if (index != '-1') {
      indeminites.splice(index, 1);
      renderTableIndiminite();
    }
  });
  $(".upload_file_button").on('click', function () {
    $("#upload_file_indeminite").trigger('click');
  });
  $("#upload_file_indeminite").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            Swal.fire({
              title: 'Vous voulez vraiment importer ce fichier excel ?',
              showCancelButton: true,
              position: 'top',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Valider'
            }).then( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(result) {
                var formData, request, data, message;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!result.isConfirmed) {
                          _context2.next = 24;
                          break;
                        }

                        notyf.open({
                          type: "info",
                          message: "En cours...",
                          duration: 9000000,
                          dismissible: false
                        });
                        formData = new FormData();
                        formData.append("file", $("#upload_file_indeminite").prop("files")[0]);
                        _context2.prev = 4;
                        _context2.next = 7;
                        return axios.post(Routing.generate("app_paie_indeminite_import"), formData);

                      case 7:
                        request = _context2.sent;
                        data = request.data;
                        data.map(function (e) {
                          var index = indeminites.findIndex(function (i) {
                            return i.contract == e.contract;
                          });

                          if (index == '-1') {
                            indeminites.push(e);
                          }
                        });
                        renderTableIndiminite();
                        $("#upload_file_indeminite").val(null);
                        $("#upload_file_indeminite").val(null);
                        notyf.dismissAll();
                        _context2.next = 22;
                        break;

                      case 16:
                        _context2.prev = 16;
                        _context2.t0 = _context2["catch"](4);
                        console.log(_context2.t0, _context2.t0.response);
                        message = _context2.t0.response.data;
                        notyf.error(message);
                        $("#upload_file_indeminite").val(null);

                      case 22:
                        _context2.next = 25;
                        break;

                      case 24:
                        $("#upload_file_indeminite").val(null);

                      case 25:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[4, 16]]);
              }));

              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }());

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  $("#add_indeminite").on('submit', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
      var button, error, formData, request, response, message;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              notyf.open({
                type: "info",
                message: "En cours...",
                duration: 9000000,
                dismissible: false
              });

              if (!(indeminites.length == 0)) {
                _context4.next = 6;
                break;
              }

              notyf.dismissAll();
              notyf.error('Veuillez ajouter un ou plusieurs bénéficiaires !');
              return _context4.abrupt("return");

            case 6:
              button = $(document.activeElement);
              button.prop('disabled', true);
              error = false;
              formData = new FormData(this);
              indeminites.map(function (e) {
                if (e.rib == '') {
                  var row = tableIndeminites.row('#' + e.contract);
                  var rowIndex = row.index();
                  var pageLength = tableIndeminites.page.len();
                  var targetPage = Math.floor(rowIndex / pageLength);
                  tableIndeminites.page(targetPage).draw(false);
                  notyf.dismissAll();
                  notyf.error('Veuillez ajouter un rib!');
                  error = true;
                  return;
                }
              });

              if (!(error === true)) {
                _context4.next = 14;
                break;
              }

              button.prop('disabled', false);
              return _context4.abrupt("return");

            case 14:
              formData.append('indeminites', JSON.stringify(indeminites));
              _context4.prev = 15;
              _context4.next = 18;
              return axios.post(Routing.generate('app_paie_indeminite_insert'), formData);

            case 18:
              request = _context4.sent;
              response = request.data;
              indeminites = [];
              renderTableIndiminite();
              notyf.dismissAll();
              notyf.success(response);
              table.ajax.reload();
              button.prop('disabled', false);
              $("#upload_modal").modal('hide');
              $("#add_indeminite")[0].reset();
              renderSelect2();
              _context4.next = 38;
              break;

            case 31:
              _context4.prev = 31;
              _context4.t0 = _context4["catch"](15);
              button.prop('disabled', false);
              console.log(_context4.t0);
              message = _context4.t0.response.data;
              notyf.dismissAll();
              notyf.error(message);

            case 38:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[15, 31]]);
    }));

    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }());

  var renderTableIndiminite = function renderTableIndiminite() {
    var html = "";
    indeminites.map(function (indeminite) {
      html += "\n            <tr id=\"".concat(indeminite.contract, "\">\n                <td>").concat(indeminite.contract, "</td>\n                <td>").concat(indeminite.name, "</td>\n                <td>").concat(indeminite.montant, "</td>\n                <td>").concat(indeminite.montantMad, "</td>\n                <td>").concat(indeminite.rib != '' ? indeminite.rib : '<a href="#" class="ajouter_rib">Ajouter RIB ?</a>', "</td>\n                <td><i role=\"button\" class='fa-solid fa-trash text-danger mr-2 delete_indeminite' data-id='").concat(indeminite.contract, "'></i> </td>\n            </tr>\n            ");
    });

    if ($.fn.DataTable.isDataTable("#list_indeminites")) {
      $('#list_indeminites').DataTable().clear().destroy();
    }

    $("#list_indeminites .list_indeminites_data").html(html);
    tableIndeminites = $("#list_indeminites").DataTable({
      // responsive: true,
      lengthMenu: [[1, 15, 25, 50, 100, 20000000000000], [1, 15, 25, 50, 100, "All"]],
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
      }
    });
  };
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-set-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/array-set-length.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "./node_modules/core-js/internals/delete-property-or-throw.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/delete-property-or-throw.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


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

/***/ "./node_modules/core-js/modules/es.array.find-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $findIndex = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


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


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var setArrayLength = __webpack_require__(/*! ../internals/array-set-length */ "./node_modules/core-js/internals/array-set-length.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var deletePropertyOrThrow = __webpack_require__(/*! ../internals/delete-property-or-throw */ "./node_modules/core-js/internals/delete-property-or-throw.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    setArrayLength(O, len - actualDeleteCount + insertCount);
    return A;
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-8f6080"], () => (__webpack_exec__("./assets/components/paie/indeminite.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzRCw0QkFBNEIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDM0UsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJDQUEyQztBQUMvRCxNQUFNO0FBQ04sd0NBQXdDLGlCQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFpZS9pbmRlbWluaXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWxldGUtcHJvcGVydHktb3ItdGhyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNwbGljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgJChcIi5ibG9ja19wYWdlXCIpLmh0bWwoJ0dlc3Rpb24gZGVzIGluZGVtaW5pdGVzJylcclxuXHJcbiAgICB2YXIgdGFibGUgPSAkKFwiI2xpc3RfaW5kZW1pbml0ZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcGFpZV9pbmRlbWluaXRlX2xpc3QnKSxcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAge25hbWU6ICdiLmlkJywgZGF0YTogJ2lkJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnYi5jb2RlJywgZGF0YTogJ2NvZGUnfSxcclxuICAgICAgICAgICAge25hbWU6ICdkLmRlc2lnbmF0aW9uJywgZGF0YTogJ2Rvc3NpZXInfSxcclxuICAgICAgICAgICAge25hbWU6ICdiLmNyZWF0ZWQgJywgZGF0YTogJ2NyZWF0ZWQnfSxcclxuICAgICAgICAgICAge25hbWU6ICdiLm9ic2VydmF0aW9uJywgZGF0YTogJ29ic2VydmF0aW9uJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAncGVyaW9kZS5jb2RlJywgZGF0YTogJ2NvZGVfcGVyaW9kZSd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3AuZGVzaWduYXRpb24nLCBkYXRhOiAncGFpZW1lbnQnfSxcclxuICAgICAgICAgICAge25hbWU6ICdiLmlkJywgZGF0YTogJ2lkJywgb3JkZXJhYmxlOiBmYWxzZSwgc2VhcmNoYWJsZTogZmFsc2V9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29sdW1uRGVmczogWyBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogMCxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiJHtkYXRhfVwiIGNsYXNzPVwiaG9ub3JhaXJlXCIvPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IDMsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRhLmRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogNyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGRhdGF0YWJsZXNGcmVuY2gsXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI3VwbG9hZFwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiI3VwbG9hZF9tb2RhbFwiKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgfSlcclxuICBcclxuXHJcbiAgICB2YXIgdGFibGVJbmRlbWluaXRlcyA9ICQoXCIjbGlzdF9pbmRlbWluaXRlc1wiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIC8vIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgIFxyXG4gICAgICAgIGxhbmd1YWdlOiBkYXRhdGFibGVzRnJlbmNoLFxyXG4gICAgfSlcclxuICAgIGxldCBpbmRlbWluaXRlcyA9IFtdO1xyXG4gICAgJChcIi5hZGRfZW1wbG95ZVwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbiBjb3Vycy4uLlwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAwMCxkaXNtaXNzaWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgY29udHJhY3QgPSAkKCcuZW1wbG95ZV9zZWxlY3QnKS52YWwoKTtcclxuICAgICAgICB2YXIgbW9udGFudCA9ICQoJy5tb250YW50JykudmFsKCk7XHJcbiAgICAgICAgdmFyIG1vbnRhbnRNYWQgPSAkKCcubW9udGFudF9tYWQnKS52YWwoKTtcclxuICAgICAgICBpZihjb250cmFjdCA9PSAnJyB8fCBtb250YW50ID09ICcnIHx8IG1vbnRhbnRNYWQgPT0gJycpIHtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcignVmV1aWxsZXogcmVtcGxpciB0b3V0IGxlcyBjaGFtcHMhJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGluZGV4ID0gaW5kZW1pbml0ZXMuZmluZEluZGV4KGkgPT4gaS5jb250cmFjdCA9PSBjb250cmFjdClcclxuICAgICAgICBpZihpbmRleCAhPSAnLTEnKSB7XHJcbiAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgbm90eWYuZXJyb3IoJ0VtcGxveWUgZMOpamEgZXhpc3QhJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJpYiA9ICQoJy5lbXBsb3llX3NlbGVjdCcpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmF0dHIoJ2RhdGEtcmliJyk7XHJcbiAgICAgICAgdmFyIG5hbWUgPSAkKCcuZW1wbG95ZV9zZWxlY3QnKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLW5hbWUnKTtcclxuXHJcbiAgICAgICAgaW5kZW1pbml0ZXMucHVzaCh7Y29udHJhY3QsIG5hbWUsIG1vbnRhbnQsIG1vbnRhbnRNYWQsIHJpYn0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGVtaW5pdGVzKTtcclxuICAgICAgICByZW5kZXJUYWJsZUluZGltaW5pdGUoKTtcclxuXHJcbiAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG5cclxuICAgIH0pXHJcbiAgICBsZXQgY29udHJhY3RfcmliO1xyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywgJy5ham91dGVyX3JpYicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnRyYWN0X3JpYiA9ICQodGhpcykucGFyZW50cygndHInKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICQoXCIjcmliX21vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjYWRkX3JpYlwiKS5vbignc3VibWl0JywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbiBjb3Vycy4uLlwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAwMCxkaXNtaXNzaWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRyYWN0Jyxjb250cmFjdF9yaWIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9wYWllX2luZGVtaW5pdGVfYWRkX3JpYicpLFxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGFcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICQoXCIuZW1wbG95ZV9zZWxlY3RcIikuaHRtbChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgcmVuZGVyU2VsZWN0MigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gaW5kZW1pbml0ZXMuZmluZEluZGV4KGUgPT4gZS5jb250cmFjdCA9PSBjb250cmFjdF9yaWIpXHJcbiAgICAgICAgICAgIGlmKGluZGV4ICE9ICctMScpIHtcclxuICAgICAgICAgICAgICAgIGluZGVtaW5pdGVzW2luZGV4XS5yaWIgPSByZXNwb25zZS5yaWJcclxuICAgICAgICAgICAgICAgIHJlbmRlclRhYmxlSW5kaW1pbml0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoXCIjcmliX21vZGFsXCIpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICQoJyNhZGRfcmliJylbMF0ucmVzZXQoKTtcclxuICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCAnLmRlbGV0ZV9pbmRlbWluaXRlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNvbnRyYWN0ID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpLmF0dHIoJ2lkJylcclxuICAgICAgICBsZXQgaW5kZXggPSBpbmRlbWluaXRlcy5maW5kSW5kZXgoZSA9PiBlLmNvbnRyYWN0ID09IGNvbnRyYWN0KVxyXG4gICAgICAgIGlmKGluZGV4ICE9ICctMScpIHtcclxuICAgICAgICAgICAgaW5kZW1pbml0ZXMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgICByZW5kZXJUYWJsZUluZGltaW5pdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAkKFwiLnVwbG9hZF9maWxlX2J1dHRvblwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiI3VwbG9hZF9maWxlX2luZGVtaW5pdGVcIikudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChcIiN1cGxvYWRfZmlsZV9pbmRlbWluaXRlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1ZvdXMgdm91bGV6IHZyYWltZW50IGltcG9ydGVyIGNlIGZpY2hpZXIgZXhjZWwgPycsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnVmFsaWRlcidcclxuICAgICAgICB9KS50aGVuKGFzeW5jIChyZXN1bHQpICA9PiAge1xyXG4gICAgICAgIC8qIFJlYWQgbW9yZSBhYm91dCBpc0NvbmZpcm1lZCwgaXNEZW5pZWQgYmVsb3cgKi9cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwMDAsZGlzbWlzc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsICQoXCIjdXBsb2FkX2ZpbGVfaW5kZW1pbml0ZVwiKS5wcm9wKFwiZmlsZXNcIilbMF0pXHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZShcImFwcF9wYWllX2luZGVtaW5pdGVfaW1wb3J0XCIpLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaW5kZW1pbml0ZXMuZmluZEluZGV4KGkgPT4gaS5jb250cmFjdCA9PSBlLmNvbnRyYWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPT0gJy0xJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZW1pbml0ZXMucHVzaChlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVGFibGVJbmRpbWluaXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdXBsb2FkX2ZpbGVfaW5kZW1pbml0ZVwiKS52YWwobnVsbCk7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3VwbG9hZF9maWxlX2luZGVtaW5pdGVcIikudmFsKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90eWYuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN1cGxvYWRfZmlsZV9pbmRlbWluaXRlXCIpLnZhbChudWxsKTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3VwbG9hZF9maWxlX2luZGVtaW5pdGVcIikudmFsKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG5cclxuICAgICQoXCIjYWRkX2luZGVtaW5pdGVcIikub24oJ3N1Ym1pdCcsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgIHR5cGU6XCJpbmZvXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW4gY291cnMuLi5cIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwMDAsZGlzbWlzc2libGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoaW5kZW1pbml0ZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcignVmV1aWxsZXogYWpvdXRlciB1biBvdSBwbHVzaWV1cnMgYsOpbsOpZmljaWFpcmVzICEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnV0dG9uID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgICAgICBidXR0b24ucHJvcCgnZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgIGxldCBlcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuXHJcbiAgICAgICAgaW5kZW1pbml0ZXMubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGUucmliID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcm93ID0gdGFibGVJbmRlbWluaXRlcy5yb3coJyMnICsgZS5jb250cmFjdCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcm93SW5kZXggPSByb3cuaW5kZXgoKTtcclxuICAgICAgICAgICAgICAgIHZhciBwYWdlTGVuZ3RoID0gdGFibGVJbmRlbWluaXRlcy5wYWdlLmxlbigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldFBhZ2UgPSBNYXRoLmZsb29yKHJvd0luZGV4IC8gcGFnZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0YWJsZUluZGVtaW5pdGVzLnBhZ2UodGFyZ2V0UGFnZSkuZHJhdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBub3R5Zi5lcnJvcignVmV1aWxsZXogYWpvdXRlciB1biByaWIhJyk7XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKGVycm9yID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2luZGVtaW5pdGVzJywgSlNPTi5zdHJpbmdpZnkoaW5kZW1pbml0ZXMpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9wYWllX2luZGVtaW5pdGVfaW5zZXJ0JyksIGZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcblxyXG4gICAgICAgICAgICBpbmRlbWluaXRlcyA9IFtdO1xyXG4gICAgICAgICAgICByZW5kZXJUYWJsZUluZGltaW5pdGUoKTtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5zdWNjZXNzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKVxyXG4gICAgICAgICAgICBidXR0b24ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSlcclxuXHJcbiAgICAgICAgICAgICQoXCIjdXBsb2FkX21vZGFsXCIpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICQoXCIjYWRkX2luZGVtaW5pdGVcIilbMF0ucmVzZXQoKVxyXG4gICAgICAgICAgICByZW5kZXJTZWxlY3QyKCk7XHJcblxyXG5cclxuICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHJlbmRlclRhYmxlSW5kaW1pbml0ZSA9ICgpID0+IHtcclxuICAgICAgICB2YXIgaHRtbCA9IFwiXCI7XHJcbiAgICAgICAgaW5kZW1pbml0ZXMubWFwKGluZGVtaW5pdGUgPT4ge1xyXG4gICAgICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgPHRyIGlkPVwiJHtpbmRlbWluaXRlLmNvbnRyYWN0fVwiPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7aW5kZW1pbml0ZS5jb250cmFjdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7aW5kZW1pbml0ZS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtpbmRlbWluaXRlLm1vbnRhbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2luZGVtaW5pdGUubW9udGFudE1hZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7aW5kZW1pbml0ZS5yaWIgIT0gJycgPyBpbmRlbWluaXRlLnJpYiA6ICc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYWpvdXRlcl9yaWJcIj5Bam91dGVyIFJJQiA/PC9hPid9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48aSByb2xlPVwiYnV0dG9uXCIgY2xhc3M9J2ZhLXNvbGlkIGZhLXRyYXNoIHRleHQtZGFuZ2VyIG1yLTIgZGVsZXRlX2luZGVtaW5pdGUnIGRhdGEtaWQ9JyR7aW5kZW1pbml0ZS5jb250cmFjdH0nPjwvaT4gPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNsaXN0X2luZGVtaW5pdGVzXCIpKSB7XHJcbiAgICAgICAgICAgICQoJyNsaXN0X2luZGVtaW5pdGVzJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjbGlzdF9pbmRlbWluaXRlcyAubGlzdF9pbmRlbWluaXRlc19kYXRhXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgdGFibGVJbmRlbWluaXRlcyA9ICQoXCIjbGlzdF9pbmRlbWluaXRlc1wiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAvLyByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfVxyXG59KSIsIid1c2Ugc3RyaWN0JztcclxudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XHJcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XHJcblxyXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzLXgvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXHJcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xyXG5cclxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXHJcbnZhciBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPSBERVNDUklQVE9SUyAmJiAhZnVuY3Rpb24gKCkge1xyXG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcclxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcclxuICB0cnkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzLXgvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLmxlbmd0aCA9IDE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcclxuICB9XHJcbn0oKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID8gZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xyXG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XHJcbiAgICB0aHJvdyAkVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHJlYWQgb25seSAubGVuZ3RoJyk7XHJcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XHJcbn0gOiBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XHJcbiAgcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XHJcblxyXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIFApIHtcclxuICBpZiAoIWRlbGV0ZSBPW1BdKSB0aHJvdyAkVHlwZUVycm9yKCdDYW5ub3QgZGVsZXRlIHByb3BlcnR5ICcgKyB0cnlUb1N0cmluZyhQKSArICcgb2YgJyArIHRyeVRvU3RyaW5nKE8pKTtcclxufTtcclxuIiwidmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XHJcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcclxuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcclxuICByZXR1cm4gaXQ7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xyXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xyXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XHJcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcclxudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XHJcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xyXG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XHJcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcclxudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcclxudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xyXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xyXG5cclxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcclxuXHJcbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xyXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XHJcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBhcnJheSA9IFtdO1xyXG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xyXG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XHJcbn0pO1xyXG5cclxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xyXG5cclxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XHJcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xyXG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XHJcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XHJcbn07XHJcblxyXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XHJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxyXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xyXG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcclxuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xyXG4gICAgdmFyIG4gPSAwO1xyXG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xyXG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xyXG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XHJcbiAgICAgICAgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoRSk7XHJcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyBsZW4pO1xyXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIDEpO1xyXG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEEubGVuZ3RoID0gbjtcclxuICAgIHJldHVybiBBO1xyXG4gIH1cclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciAkZmluZEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmRJbmRleDtcclxudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XHJcblxyXG52YXIgRklORF9JTkRFWCA9ICdmaW5kSW5kZXgnO1xyXG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xyXG5cclxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcclxuaWYgKEZJTkRfSU5ERVggaW4gW10pIEFycmF5KDEpW0ZJTkRfSU5ERVhdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRpbmRleFxyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XHJcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcclxuICAgIHJldHVybiAkZmluZEluZGV4KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xyXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkRfSU5ERVgpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcclxudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XHJcblxyXG52YXIgRklORCA9ICdmaW5kJztcclxudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcclxuXHJcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXHJcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XHJcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xyXG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xyXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XHJcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XHJcblxyXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xyXG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XHJcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xyXG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XHJcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcclxudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XHJcbnZhciBzZXRBcnJheUxlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoJyk7XHJcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xyXG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XHJcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcclxudmFyIGRlbGV0ZVByb3BlcnR5T3JUaHJvdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWxldGUtcHJvcGVydHktb3ItdGhyb3cnKTtcclxudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcclxuXHJcbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnc3BsaWNlJyk7XHJcblxyXG52YXIgbWF4ID0gTWF0aC5tYXg7XHJcbnZhciBtaW4gPSBNYXRoLm1pbjtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuc3BsaWNlYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc3BsaWNlXHJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcclxuICBzcGxpY2U6IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQgLyogLCAuLi5pdGVtcyAqLykge1xyXG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcclxuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcclxuICAgIHZhciBhY3R1YWxTdGFydCA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuKTtcclxuICAgIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgdmFyIGluc2VydENvdW50LCBhY3R1YWxEZWxldGVDb3VudCwgQSwgaywgZnJvbSwgdG87XHJcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGluc2VydENvdW50ID0gYWN0dWFsRGVsZXRlQ291bnQgPSAwO1xyXG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcclxuICAgICAgaW5zZXJ0Q291bnQgPSAwO1xyXG4gICAgICBhY3R1YWxEZWxldGVDb3VudCA9IGxlbiAtIGFjdHVhbFN0YXJ0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5zZXJ0Q291bnQgPSBhcmd1bWVudHNMZW5ndGggLSAyO1xyXG4gICAgICBhY3R1YWxEZWxldGVDb3VudCA9IG1pbihtYXgodG9JbnRlZ2VyT3JJbmZpbml0eShkZWxldGVDb3VudCksIDApLCBsZW4gLSBhY3R1YWxTdGFydCk7XHJcbiAgICB9XHJcbiAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobGVuICsgaW5zZXJ0Q291bnQgLSBhY3R1YWxEZWxldGVDb3VudCk7XHJcbiAgICBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIGFjdHVhbERlbGV0ZUNvdW50KTtcclxuICAgIGZvciAoayA9IDA7IGsgPCBhY3R1YWxEZWxldGVDb3VudDsgaysrKSB7XHJcbiAgICAgIGZyb20gPSBhY3R1YWxTdGFydCArIGs7XHJcbiAgICAgIGlmIChmcm9tIGluIE8pIGNyZWF0ZVByb3BlcnR5KEEsIGssIE9bZnJvbV0pO1xyXG4gICAgfVxyXG4gICAgQS5sZW5ndGggPSBhY3R1YWxEZWxldGVDb3VudDtcclxuICAgIGlmIChpbnNlcnRDb3VudCA8IGFjdHVhbERlbGV0ZUNvdW50KSB7XHJcbiAgICAgIGZvciAoayA9IGFjdHVhbFN0YXJ0OyBrIDwgbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQ7IGsrKykge1xyXG4gICAgICAgIGZyb20gPSBrICsgYWN0dWFsRGVsZXRlQ291bnQ7XHJcbiAgICAgICAgdG8gPSBrICsgaW5zZXJ0Q291bnQ7XHJcbiAgICAgICAgaWYgKGZyb20gaW4gTykgT1t0b10gPSBPW2Zyb21dO1xyXG4gICAgICAgIGVsc2UgZGVsZXRlUHJvcGVydHlPclRocm93KE8sIHRvKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGsgPSBsZW47IGsgPiBsZW4gLSBhY3R1YWxEZWxldGVDb3VudCArIGluc2VydENvdW50OyBrLS0pIGRlbGV0ZVByb3BlcnR5T3JUaHJvdyhPLCBrIC0gMSk7XHJcbiAgICB9IGVsc2UgaWYgKGluc2VydENvdW50ID4gYWN0dWFsRGVsZXRlQ291bnQpIHtcclxuICAgICAgZm9yIChrID0gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQ7IGsgPiBhY3R1YWxTdGFydDsgay0tKSB7XHJcbiAgICAgICAgZnJvbSA9IGsgKyBhY3R1YWxEZWxldGVDb3VudCAtIDE7XHJcbiAgICAgICAgdG8gPSBrICsgaW5zZXJ0Q291bnQgLSAxO1xyXG4gICAgICAgIGlmIChmcm9tIGluIE8pIE9bdG9dID0gT1tmcm9tXTtcclxuICAgICAgICBlbHNlIGRlbGV0ZVByb3BlcnR5T3JUaHJvdyhPLCB0byk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoayA9IDA7IGsgPCBpbnNlcnRDb3VudDsgaysrKSB7XHJcbiAgICAgIE9bayArIGFjdHVhbFN0YXJ0XSA9IGFyZ3VtZW50c1trICsgMl07XHJcbiAgICB9XHJcbiAgICBzZXRBcnJheUxlbmd0aChPLCBsZW4gLSBhY3R1YWxEZWxldGVDb3VudCArIGluc2VydENvdW50KTtcclxuICAgIHJldHVybiBBO1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImh0bWwiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJjb2x1bW5zIiwibmFtZSIsImRhdGEiLCJvcmRlcmFibGUiLCJzZWFyY2hhYmxlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJyZW5kZXIiLCJ0eXBlIiwiZnVsbCIsIm1ldGEiLCJkYXRlIiwibW9tZW50IiwiZm9ybWF0IiwibGFuZ3VhZ2UiLCJkYXRhdGFibGVzRnJlbmNoIiwib24iLCJtb2RhbCIsInRhYmxlSW5kZW1pbml0ZXMiLCJpbmRlbWluaXRlcyIsIm5vdHlmIiwib3BlbiIsIm1lc3NhZ2UiLCJkdXJhdGlvbiIsImRpc21pc3NpYmxlIiwiY29udHJhY3QiLCJ2YWwiLCJtb250YW50IiwibW9udGFudE1hZCIsImRpc21pc3NBbGwiLCJlcnJvciIsImluZGV4IiwiZmluZEluZGV4IiwiaSIsInJpYiIsImZpbmQiLCJhdHRyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJUYWJsZUluZGltaW5pdGUiLCJjb250cmFjdF9yaWIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImF4aW9zIiwicG9zdCIsInJlcXVlc3QiLCJyZXNwb25zZSIsInJlbmRlclNlbGVjdDIiLCJyZXNldCIsInNwbGljZSIsInRyaWdnZXIiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsInBvc2l0aW9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsInByb3AiLCJtYXAiLCJsZW5ndGgiLCJidXR0b24iLCJhY3RpdmVFbGVtZW50Iiwicm93Iiwicm93SW5kZXgiLCJwYWdlTGVuZ3RoIiwicGFnZSIsImxlbiIsInRhcmdldFBhZ2UiLCJNYXRoIiwiZmxvb3IiLCJkcmF3IiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJyZWxvYWQiLCJpbmRlbWluaXRlIiwiZm4iLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=