(self["webpackChunk"] = self["webpackChunk"] || []).push([["paie_honoraire"],{

/***/ "./assets/components/paie/honoraire.js":
/*!*********************************************!*\
  !*** ./assets/components/paie/honoraire.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.every.js */ "./node_modules/core-js/modules/es.array.every.js");

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(document).ready(function () {
  $(".block_page").html('Gestion des honoraires');
  var table = $("#list_honoraires").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: Routing.generate('app_paie_honoraire_list'),
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
        return "\n                       \n                    ";
      }
    }],
    language: datatablesFrench
  });
  $("#upload").on('click', function () {
    $("#upload_modal").modal('show');
  });
  $(".upload_file_honoraire_button").on('click', function () {
    $("#upload_file_honoraire").trigger('click');
  });
  var honoraires;
  var tableHonoraire;
  $("#upload_file_honoraire").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Swal.fire({
              title: 'Vous voulez vraiment importer ce fichier excel ?',
              showCancelButton: true,
              position: 'top',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Valider'
            }).then( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(result) {
                var nature, paiement, dossier, formData, request, data, message;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!result.isConfirmed) {
                          _context.next = 35;
                          break;
                        }

                        notyf.open({
                          type: "info",
                          message: "En cours...",
                          duration: 9000000
                        });
                        nature = $(".nature_select").val();
                        paiement = $(".paiement_select").val();
                        dossier = $(".dossier_select").val();

                        if (!(nature == '' || paiement == '' || dossier == '')) {
                          _context.next = 9;
                          break;
                        }

                        notyf.dismissAll();
                        notyf.error('Veuillez remplir tous les champs !');
                        return _context.abrupt("return");

                      case 9:
                        formData = new FormData();
                        formData.append("file", $("#upload_file_honoraire").prop("files")[0]);
                        _context.prev = 11;
                        _context.next = 14;
                        return axios.post(Routing.generate("app_paie_honoraire_import", {
                          paiement: paiement,
                          nature: nature,
                          dossier: dossier
                        }), formData);

                      case 14:
                        request = _context.sent;
                        data = request.data;
                        honoraires = data;
                        console.log(data);
                        $("#upload_file_honoraire").val(null);

                        if ($.fn.DataTable.isDataTable("#list_bhonoraires")) {
                          $('#list_bhonoraires').DataTable().clear().destroy();
                          $(".honoraire_list_data").empty();
                        }

                        data.map(function (item) {
                          if (item.newEmploye == false && item.newContract == true) {
                            var html = "<option value=''>choix rib</option>";
                            item.contracts.forEach(function (element) {
                              html += "<option value=\"".concat(element.id, "\">").concat(element.rib, "</option>");
                            });
                          } else {
                            var html = "<option value=\"".concat(item.contract_id, "\">").concat(item.rib, "</option>");
                          }

                          $(".honoraire_list_data").append("\n                        <tr id=\"".concat(item.id, "\">\n                            <td>").concat(item.id, "</td>\n                            <td>").concat(item.nom, " ").concat(item.prenom, "</td>\n                            <td>").concat(parseFloat(item.montant).toLocaleString('fr-Fr', {
                            style: 'decimal',
                            minimumFractionDigits: 2
                          }), "</td>\n                            <td>").concat(parseFloat(item.montant_mad).toLocaleString('fr-Fr', {
                            style: 'decimal',
                            minimumFractionDigits: 2
                          }), "</td>\n                            <td>").concat(parseFloat(item.brute_mad).toLocaleString('fr-Fr', {
                            style: 'decimal',
                            minimumFractionDigits: 2
                          }), "</td>\n                            <td>").concat(parseFloat(item.ir).toLocaleString('fr-Fr', {
                            style: 'decimal',
                            minimumFractionDigits: 2
                          }), "</td>\n                            <td>").concat(parseFloat(item.ir_mad).toLocaleString('fr-Fr', {
                            style: 'decimal',
                            minimumFractionDigits: 2
                          }), "</td>\n                            <td width=\"25%\"><select class=\"select form-control\">").concat(html, "</select></td>\n                            <td><i role=\"button\" class=\"fa fa-trash text-danger remove_honoraire\"></i></td>\n                        </tr>\n                        "));
                        }); // $('body .select2').select2();

                        renderSelect2();
                        tableHonoraire = $("#list_bhonoraires").DataTable({
                          // responsive: true,
                          lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
                          language: {
                            url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                          }
                        });
                        $("#upload_file_honoraire").val(null);
                        notyf.dismissAll();
                        _context.next = 33;
                        break;

                      case 27:
                        _context.prev = 27;
                        _context.t0 = _context["catch"](11);
                        console.log(_context.t0, _context.t0.response);
                        message = _context.t0.response.data;
                        notyf.error(message);
                        $("#upload_file_honoraire").val(null);

                      case 33:
                        _context.next = 36;
                        break;

                      case 35:
                        $("#upload_file_honoraire").val(null);

                      case 36:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[11, 27]]);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  $("body").on('click', '.remove_honoraire', function () {
    var id = $(this).parents('tr').attr('id');
    var index = honoraires.findIndex(function (e) {
      return e.id == id;
    });

    if (index != "-1") {
      honoraires.splice(index, 1);
      console.log(honoraires);
      tableHonoraire.row('#' + id).remove().draw();
    }
  });
  $("#add_honoraire").on("submit", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var button, error, formData, duplicatedHonoraires, request, response, message;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              notyf.open({
                type: "info",
                message: "En cours...",
                duration: 9000000
              });
              button = $(document.activeElement);
              button.prop('disabled', true);
              error = false;
              formData = new FormData(this);
              tableHonoraire.rows().every(function () {
                var data = this.data(); // Array of row data

                console.log(data); // Do something with the row data

                console.log($(data[7]), $(data[7]).val());
                var contractValue = $(data[7]).val();
                var id = data[0];

                if (contractValue == '') {
                  var row = tableHonoraire.row('#' + id);
                  var rowIndex = row.index();
                  var pageLength = tableHonoraire.page.len();
                  var targetPage = Math.floor(rowIndex / pageLength);
                  tableHonoraire.page(targetPage).draw(false);
                  notyf.dismissAll();
                  notyf.error('Veuillez selection un rib!');
                  error = true;
                  return;
                } else {
                  var index = honoraires.findIndex(function (e) {
                    return e.id == id;
                  });
                  honoraires[index].selectedContract = contractValue;
                }
              });

              if (!(error === true)) {
                _context3.next = 10;
                break;
              }

              button.prop('disabled', false);
              return _context3.abrupt("return");

            case 10:
              duplicatedHonoraires = [];
              honoraires.map(function (e) {
                var index = duplicatedHonoraires.findIndex(function (t) {
                  return t.selectedContract == e.selectedContract;
                });

                if (index == '-1') {
                  duplicatedHonoraires.push(e);
                } else {
                  duplicatedHonoraires[index].ir = parseFloat(duplicatedHonoraires[index].ir) + parseFloat(e.ir);
                  duplicatedHonoraires[index].ir_mad = parseFloat(duplicatedHonoraires[index].ir_mad) + parseFloat(e.ir_mad);
                  duplicatedHonoraires[index].brute = parseFloat(duplicatedHonoraires[index].brute) + parseFloat(e.brute);
                  duplicatedHonoraires[index].brute_mad = parseFloat(duplicatedHonoraires[index].brute_mad) + parseFloat(e.brute_mad);
                  duplicatedHonoraires[index].montant = parseFloat(duplicatedHonoraires[index].montant) + parseFloat(e.montant);
                  duplicatedHonoraires[index].montant_mad = parseFloat(duplicatedHonoraires[index].montant_mad) + parseFloat(e.montant_mad);
                }
              }); // console.log(duplicatedHonoraires, honoraires);
              // return;

              formData.append('honoraires', JSON.stringify(duplicatedHonoraires));
              _context3.prev = 13;
              _context3.next = 16;
              return axios.post(Routing.generate('app_paie_honoraire_insert'), formData);

            case 16:
              request = _context3.sent;
              response = request.data;

              if ($.fn.DataTable.isDataTable("#list_bhonoraires")) {
                $('#list_bhonoraires').DataTable().clear().destroy();
                $(".honoraire_list_data").empty();
              }

              $("#add_honoraire")[0].reset();
              renderSelect2();
              notyf.dismissAll();
              notyf.success(response);
              button.prop('disabled', false);
              table.ajax.reload();
              $("#upload_modal").modal('hide');
              _context3.next = 35;
              break;

            case 28:
              _context3.prev = 28;
              _context3.t0 = _context3["catch"](13);
              button.prop('disabled', false);
              console.log(_context3.t0);
              message = _context3.t0.response.data;
              notyf.dismissAll();
              notyf.error(message);

            case 35:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[13, 28]]);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }());
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-8f6080","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-c1d689"], () => (__webpack_exec__("./assets/components/paie/honoraire.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDNkJnRCxRQUQ3QixDQXhERzs7WUFBQTtjQXdEbkJNLE9BeERtQjtjQTREbkIrQixRQTVEbUIsR0E0RFIvQixPQUFPLENBQUM5QyxJQTVEQTs7Y0E4RHpCLElBQUlsQixDQUFDLENBQUNtRSxFQUFGLENBQUs5RCxTQUFMLENBQWUrRCxXQUFmLENBQTJCLG1CQUEzQixDQUFKLEVBQXFEO2dCQUNqRHBFLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCSyxTQUF2QixHQUFtQ2dFLEtBQW5DLEdBQTJDQyxPQUEzQztnQkFDQXRFLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCdUUsS0FBMUI7Y0FDSDs7Y0FDRHZFLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLENBQXBCLEVBQXVCNkgsS0FBdkI7Y0FDQWhDLGFBQWE7Y0FDYjdDLEtBQUssQ0FBQ1EsVUFBTjtjQUNBUixLQUFLLENBQUM4RSxPQUFOLENBQWMvQixRQUFkO2NBQ0FXLE1BQU0sQ0FBQzdDLElBQVAsQ0FBWSxVQUFaLEVBQXdCLEtBQXhCO2NBRUF6RCxLQUFLLENBQUNJLElBQU4sQ0FBV3VILE1BQVg7Y0FDQS9ILENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJpQyxLQUFuQixDQUF5QixNQUF6QjtjQXpFeUI7Y0FBQTs7WUFBQTtjQUFBO2NBQUE7Y0ErRXpCeUUsTUFBTSxDQUFDN0MsSUFBUCxDQUFZLFVBQVosRUFBd0IsS0FBeEI7Y0FFQUksT0FBTyxDQUFDQyxHQUFSO2NBQ01oQixPQWxGbUIsR0FrRlQsYUFBTTZDLFFBQU4sQ0FBZTdFLElBbEZOO2NBbUZ6QjhCLEtBQUssQ0FBQ1EsVUFBTjtjQUNBUixLQUFLLENBQUNTLEtBQU4sQ0FBWVAsT0FBWjs7WUFwRnlCO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQWpDOztJQUFBO01BQUE7SUFBQTtFQUFBO0FBMkZILENBbFFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFpZS9ob25vcmFpcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgICQoXCIuYmxvY2tfcGFnZVwiKS5odG1sKCdHZXN0aW9uIGRlcyBob25vcmFpcmVzJylcclxuXHJcbiAgICB2YXIgdGFibGUgPSAkKFwiI2xpc3RfaG9ub3JhaXJlc1wiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcGFpZV9ob25vcmFpcmVfbGlzdCcpLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICB7bmFtZTogJ2IuaWQnLCBkYXRhOiAnaWQnfSxcclxuICAgICAgICAgICAge25hbWU6ICdiLmNvZGUnLCBkYXRhOiAnY29kZSd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ2QuZGVzaWduYXRpb24nLCBkYXRhOiAnZG9zc2llcid9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ2IuY3JlYXRlZCAnLCBkYXRhOiAnY3JlYXRlZCd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ2Iub2JzZXJ2YXRpb24nLCBkYXRhOiAnb2JzZXJ2YXRpb24nfSxcclxuICAgICAgICAgICAge25hbWU6ICdwZXJpb2RlLmNvZGUnLCBkYXRhOiAnY29kZV9wZXJpb2RlJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAncC5kZXNpZ25hdGlvbicsIGRhdGE6ICdwYWllbWVudCd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ2IuaWQnLCBkYXRhOiAnaWQnLCBvcmRlcmFibGU6IGZhbHNlLCBzZWFyY2hhYmxlOiBmYWxzZX0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiAwLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCIke2RhdGF9XCIgY2xhc3M9XCJob25vcmFpcmVcIi8+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogMyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGEuZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiA3LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICBcclxuICAgICAgICBsYW5ndWFnZTogZGF0YXRhYmxlc0ZyZW5jaCxcclxuICAgIH0pO1xyXG4gICAgJChcIiN1cGxvYWRcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIiN1cGxvYWRfbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pXHJcbiAgICAkKFwiLnVwbG9hZF9maWxlX2hvbm9yYWlyZV9idXR0b25cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIiN1cGxvYWRfZmlsZV9ob25vcmFpcmVcIikudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGhvbm9yYWlyZXM7XHJcbiAgICBsZXQgdGFibGVIb25vcmFpcmU7XHJcbiAgICAkKFwiI3VwbG9hZF9maWxlX2hvbm9yYWlyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdWb3VzIHZvdWxleiB2cmFpbWVudCBpbXBvcnRlciBjZSBmaWNoaWVyIGV4Y2VsID8nLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1ZhbGlkZXInXHJcbiAgICAgICAgfSkudGhlbihhc3luYyAocmVzdWx0KSAgPT4gIHtcclxuICAgICAgICAvKiBSZWFkIG1vcmUgYWJvdXQgaXNDb25maXJtZWQsIGlzRGVuaWVkIGJlbG93ICovXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICAgIG5vdHlmLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6XCJpbmZvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbiBjb3Vycy4uLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA5MDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmF0dXJlID0gJChcIi5uYXR1cmVfc2VsZWN0XCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhaWVtZW50ID0gJChcIi5wYWllbWVudF9zZWxlY3RcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZG9zc2llciA9ICQoXCIuZG9zc2llcl9zZWxlY3RcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBpZihuYXR1cmUgPT0gJycgfHwgcGFpZW1lbnQgPT0gJycgfHwgZG9zc2llciA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBub3R5Zi5lcnJvcignVmV1aWxsZXogcmVtcGxpciB0b3VzIGxlcyBjaGFtcHMgIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsICQoXCIjdXBsb2FkX2ZpbGVfaG9ub3JhaXJlXCIpLnByb3AoXCJmaWxlc1wiKVswXSlcclxuICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKFwiYXBwX3BhaWVfaG9ub3JhaXJlX2ltcG9ydFwiLCB7cGFpZW1lbnQsIG5hdHVyZSwgZG9zc2llcn0pLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBob25vcmFpcmVzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3VwbG9hZF9maWxlX2hvbm9yYWlyZVwiKS52YWwobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2xpc3RfYmhvbm9yYWlyZXNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3RfYmhvbm9yYWlyZXMnKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ob25vcmFpcmVfbGlzdF9kYXRhXCIpLmVtcHR5KClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0ubmV3RW1wbG95ZSA9PSBmYWxzZSAmJiBpdGVtLm5ld0NvbnRyYWN0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gXCI8b3B0aW9uIHZhbHVlPScnPmNob2l4IHJpYjwvb3B0aW9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb250cmFjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtlbGVtZW50LmlkfVwiPiR7ZWxlbWVudC5yaWJ9PC9vcHRpb24+YDsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHRtbCA9IGA8b3B0aW9uIHZhbHVlPVwiJHtpdGVtLmNvbnRyYWN0X2lkfVwiPiR7aXRlbS5yaWJ9PC9vcHRpb24+YDsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmhvbm9yYWlyZV9saXN0X2RhdGFcIikuYXBwZW5kKGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGlkPVwiJHtpdGVtLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7aXRlbS5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7aXRlbS5ub219ICR7aXRlbS5wcmVub219PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke3BhcnNlRmxvYXQoaXRlbS5tb250YW50KS50b0xvY2FsZVN0cmluZygnZnItRnInLCB7c3R5bGU6ICdkZWNpbWFsJywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyfSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke3BhcnNlRmxvYXQoaXRlbS5tb250YW50X21hZCkudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZyJywge3N0eWxlOiAnZGVjaW1hbCcsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMn0pfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtwYXJzZUZsb2F0KGl0ZW0uYnJ1dGVfbWFkKS50b0xvY2FsZVN0cmluZygnZnItRnInLCB7c3R5bGU6ICdkZWNpbWFsJywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyfSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke3BhcnNlRmxvYXQoaXRlbS5pcikudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZyJywge3N0eWxlOiAnZGVjaW1hbCcsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMn0pfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtwYXJzZUZsb2F0KGl0ZW0uaXJfbWFkKS50b0xvY2FsZVN0cmluZygnZnItRnInLCB7c3R5bGU6ICdkZWNpbWFsJywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyfSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjI1JVwiPjxzZWxlY3QgY2xhc3M9XCJzZWxlY3QgZm9ybS1jb250cm9sXCI+JHtodG1sfTwvc2VsZWN0PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGkgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiZmEgZmEtdHJhc2ggdGV4dC1kYW5nZXIgcmVtb3ZlX2hvbm9yYWlyZVwiPjwvaT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICQoJ2JvZHkgLnNlbGVjdDInKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyU2VsZWN0MigpXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlSG9ub3JhaXJlID0gJChcIiNsaXN0X2Job25vcmFpcmVzXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdXBsb2FkX2ZpbGVfaG9ub3JhaXJlXCIpLnZhbChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdXBsb2FkX2ZpbGVfaG9ub3JhaXJlXCIpLnZhbChudWxsKTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3VwbG9hZF9maWxlX2hvbm9yYWlyZVwiKS52YWwobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCAnLnJlbW92ZV9ob25vcmFpcmUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykucGFyZW50cygndHInKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGhvbm9yYWlyZXMuZmluZEluZGV4KChlKSA9PiBlLmlkID09IGlkKTtcclxuICAgICAgICBpZihpbmRleCAhPSBcIi0xXCIpIHtcclxuICAgICAgICAgICAgaG9ub3JhaXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhob25vcmFpcmVzKTtcclxuICAgICAgICAgICAgdGFibGVIb25vcmFpcmUucm93KCcjJytpZCkucmVtb3ZlKCkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjYWRkX2hvbm9yYWlyZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG5vdHlmLm9wZW4oe1xyXG4gICAgICAgICAgICB0eXBlOlwiaW5mb1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA5MDAwMDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBidXR0b24gPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgbGV0IGVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG5cclxuICAgICAgICB0YWJsZUhvbm9yYWlyZS5yb3dzKCkuZXZlcnkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhKCk7IC8vIEFycmF5IG9mIHJvdyBkYXRhXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpOyAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgcm93IGRhdGFcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJChkYXRhWzddKSwgJChkYXRhWzddKS52YWwoKSlcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0VmFsdWUgPSAkKGRhdGFbN10pLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICBpZihjb250cmFjdFZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcm93ID0gdGFibGVIb25vcmFpcmUucm93KCcjJyArIGlkKTtcclxuICAgICAgICAgICAgICAgIHZhciByb3dJbmRleCA9IHJvdy5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhZ2VMZW5ndGggPSB0YWJsZUhvbm9yYWlyZS5wYWdlLmxlbigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldFBhZ2UgPSBNYXRoLmZsb29yKHJvd0luZGV4IC8gcGFnZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0YWJsZUhvbm9yYWlyZS5wYWdlKHRhcmdldFBhZ2UpLmRyYXcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgbm90eWYuZXJyb3IoJ1ZldWlsbGV6IHNlbGVjdGlvbiB1biByaWIhJyk7XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBob25vcmFpcmVzLmZpbmRJbmRleCgoZSkgPT4gZS5pZCA9PSBpZCk7XHJcbiAgICAgICAgICAgICAgICBob25vcmFpcmVzW2luZGV4XS5zZWxlY3RlZENvbnRyYWN0ID0gY29udHJhY3RWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKGVycm9yID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZHVwbGljYXRlZEhvbm9yYWlyZXMgPSBbXVxyXG4gICAgICAgIGhvbm9yYWlyZXMubWFwKGUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBkdXBsaWNhdGVkSG9ub3JhaXJlcy5maW5kSW5kZXgoKHQpID0+IHQuc2VsZWN0ZWRDb250cmFjdCA9PSBlLnNlbGVjdGVkQ29udHJhY3QpO1xyXG4gICAgICAgICAgICBpZihpbmRleCA9PSAnLTEnKSB7XHJcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVkSG9ub3JhaXJlcy5wdXNoKGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlZEhvbm9yYWlyZXNbaW5kZXhdLmlyID0gcGFyc2VGbG9hdChkdXBsaWNhdGVkSG9ub3JhaXJlc1tpbmRleF0uaXIpICsgcGFyc2VGbG9hdChlLmlyKTtcclxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZWRIb25vcmFpcmVzW2luZGV4XS5pcl9tYWQgPSBwYXJzZUZsb2F0KGR1cGxpY2F0ZWRIb25vcmFpcmVzW2luZGV4XS5pcl9tYWQpICsgcGFyc2VGbG9hdChlLmlyX21hZCk7XHJcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVkSG9ub3JhaXJlc1tpbmRleF0uYnJ1dGUgPSBwYXJzZUZsb2F0KGR1cGxpY2F0ZWRIb25vcmFpcmVzW2luZGV4XS5icnV0ZSkgKyBwYXJzZUZsb2F0KGUuYnJ1dGUpO1xyXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlZEhvbm9yYWlyZXNbaW5kZXhdLmJydXRlX21hZCA9IHBhcnNlRmxvYXQoZHVwbGljYXRlZEhvbm9yYWlyZXNbaW5kZXhdLmJydXRlX21hZCkgKyBwYXJzZUZsb2F0KGUuYnJ1dGVfbWFkKTtcclxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZWRIb25vcmFpcmVzW2luZGV4XS5tb250YW50ID0gcGFyc2VGbG9hdChkdXBsaWNhdGVkSG9ub3JhaXJlc1tpbmRleF0ubW9udGFudCkgKyBwYXJzZUZsb2F0KGUubW9udGFudCk7XHJcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVkSG9ub3JhaXJlc1tpbmRleF0ubW9udGFudF9tYWQgPSBwYXJzZUZsb2F0KGR1cGxpY2F0ZWRIb25vcmFpcmVzW2luZGV4XS5tb250YW50X21hZCkgKyBwYXJzZUZsb2F0KGUubW9udGFudF9tYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkdXBsaWNhdGVkSG9ub3JhaXJlcywgaG9ub3JhaXJlcyk7XHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaG9ub3JhaXJlcycsIEpTT04uc3RyaW5naWZ5KGR1cGxpY2F0ZWRIb25vcmFpcmVzKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcGFpZV9ob25vcmFpcmVfaW5zZXJ0JyksIGZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcblxyXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjbGlzdF9iaG9ub3JhaXJlc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnI2xpc3RfYmhvbm9yYWlyZXMnKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICQoXCIuaG9ub3JhaXJlX2xpc3RfZGF0YVwiKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJChcIiNhZGRfaG9ub3JhaXJlXCIpWzBdLnJlc2V0KClcclxuICAgICAgICAgICAgcmVuZGVyU2VsZWN0MigpO1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgIG5vdHlmLnN1Y2Nlc3MocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBidXR0b24ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSlcclxuXHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKClcclxuICAgICAgICAgICAgJChcIiN1cGxvYWRfbW9kYWxcIikubW9kYWwoJ2hpZGUnKTtcclxuXHJcblxyXG5cclxuICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICB9KVxyXG59KSJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImh0bWwiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJjb2x1bW5zIiwibmFtZSIsImRhdGEiLCJvcmRlcmFibGUiLCJzZWFyY2hhYmxlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJyZW5kZXIiLCJ0eXBlIiwiZnVsbCIsIm1ldGEiLCJkYXRlIiwibW9tZW50IiwiZm9ybWF0IiwibGFuZ3VhZ2UiLCJkYXRhdGFibGVzRnJlbmNoIiwib24iLCJtb2RhbCIsInRyaWdnZXIiLCJob25vcmFpcmVzIiwidGFibGVIb25vcmFpcmUiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsInBvc2l0aW9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsIm5vdHlmIiwib3BlbiIsIm1lc3NhZ2UiLCJkdXJhdGlvbiIsIm5hdHVyZSIsInZhbCIsInBhaWVtZW50IiwiZG9zc2llciIsImRpc21pc3NBbGwiLCJlcnJvciIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwcm9wIiwiYXhpb3MiLCJwb3N0IiwicmVxdWVzdCIsImNvbnNvbGUiLCJsb2ciLCJmbiIsImlzRGF0YVRhYmxlIiwiY2xlYXIiLCJkZXN0cm95IiwiZW1wdHkiLCJtYXAiLCJpdGVtIiwibmV3RW1wbG95ZSIsIm5ld0NvbnRyYWN0IiwiY29udHJhY3RzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpZCIsInJpYiIsImNvbnRyYWN0X2lkIiwibm9tIiwicHJlbm9tIiwicGFyc2VGbG9hdCIsIm1vbnRhbnQiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibW9udGFudF9tYWQiLCJicnV0ZV9tYWQiLCJpciIsImlyX21hZCIsInJlbmRlclNlbGVjdDIiLCJ1cmwiLCJyZXNwb25zZSIsInBhcmVudHMiLCJhdHRyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJlIiwic3BsaWNlIiwicm93IiwicmVtb3ZlIiwiZHJhdyIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uIiwiYWN0aXZlRWxlbWVudCIsInJvd3MiLCJldmVyeSIsImNvbnRyYWN0VmFsdWUiLCJyb3dJbmRleCIsInBhZ2VMZW5ndGgiLCJwYWdlIiwibGVuIiwidGFyZ2V0UGFnZSIsIk1hdGgiLCJmbG9vciIsInNlbGVjdGVkQ29udHJhY3QiLCJkdXBsaWNhdGVkSG9ub3JhaXJlcyIsInQiLCJwdXNoIiwiYnJ1dGUiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzZXQiLCJzdWNjZXNzIiwicmVsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==