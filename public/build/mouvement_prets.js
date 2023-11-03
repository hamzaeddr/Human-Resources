(self["webpackChunk"] = self["webpackChunk"] || []).push([["mouvement_prets"],{

/***/ "./assets/components/mouvement/prets.js":
/*!**********************************************!*\
  !*** ./assets/components/mouvement/prets.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

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
  $(".block_page").html('Gestion des prets');
  var tablePrets = $("#list_prets").DataTable({
    // responsive: true,
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    language: datatablesFrench
  });
  var table = $("#list_prelevements").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: Routing.generate('app_mouvement_prets_list'),
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    columns: [{
      name: 'p.id',
      data: 'id'
    }, {
      name: 'p.code',
      data: 'code'
    }, {
      name: 'c.id',
      data: 'contract_id'
    }, {
      name: 'emp.nom',
      data: 'nom'
    }, {
      name: 'r.designation',
      data: 'rubrique'
    }, {
      name: 'p.created',
      data: 'created'
    }, {
      name: 'p.montant',
      data: 'montant'
    }, {
      name: 'p.nombreMois',
      data: 'nombreMois'
    }, {
      name: 'p.motif',
      data: 'motif'
    }],
    columnDefs: [{
      targets: 0,
      render: function render(data, type, full, meta) {
        return "<input type=\"checkbox\" value=\"".concat(data, "\" class=\"pret_check\"/>");
      }
    }, {
      targets: 1,
      render: function render(data, type, full, meta) {
        return "<span class='pret_code' id='".concat(full.id, "' role='button'>").concat(data, "</span>");
      }
    }, {
      targets: 5,
      render: function render(data, type, full, meta) {
        console;

        if (data.date) {
          return moment(data.date).format('YYYY-MM-DD HH:mm:ss');
        }

        return "";
      }
    }, {
      targets: 3,
      render: function render(data, type, full, meta) {
        return full.nom + ' ' + full.prenom;
      }
    }],
    language: datatablesFrench
  });
  $("#ajouter").on('click', function () {
    $("#ajouter_modal").modal('show');
  });
  var prets = [];
  $("#montantpret, #montantecheance, #periode").on('change', function () {
    prets = [];
    var periode = $("#periode").val();

    if (periode == '') {
      notyf.error('Veuillez remplir début prêt!');
      return;
    }

    var montantpret = parseFloat($("#montantpret").val());
    var montantecheance = parseFloat($("#montantecheance").val());
    var total = montantpret;

    if (montantpret == '' || montantecheance == '') {
      $("#nombremois").val('');
      $("#dernierecheance").val('');
      return;
    }

    var months = montantpret / montantecheance;

    if (months != Math.floor(Math.abs(months))) {
      months = Math.floor(Math.abs(months)) + 1;
    }

    for (var index = 0; index < months; index++) {
      var newDate = new Date(periode);
      newDate.setMonth(newDate.getMonth() + index); // console.log(total, montantecheance, total <= montantecheance)

      if (total <= montantecheance) {
        prets.push({
          'montant': total,
          'periode': (newDate.getMonth() + 1).toString().padStart(2, '0') + '' + newDate.getFullYear()
        });
      } else {
        total = total - montantecheance;
        prets.push({
          'montant': montantecheance,
          'periode': (newDate.getMonth() + 1).toString().padStart(2, '0') + '' + newDate.getFullYear()
        });
      }
    }

    renderPrets();
  });
  $("#add_pret").on('submit', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var button, formData, request, response, message;
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

              if (!(prets.length == 0)) {
                _context.next = 6;
                break;
              }

              notyf.dismissAll();
              notyf.error('Veuillez ajouter un pret!');
              return _context.abrupt("return");

            case 6:
              button = $(document.activeElement);
              button.prop('disabled', true);
              formData = new FormData(this);
              formData.append('prets', JSON.stringify(prets));
              _context.prev = 10;
              _context.next = 13;
              return axios.post(Routing.generate('app_mouvement_prets_ajouter'), formData);

            case 13:
              request = _context.sent;
              response = request.data;
              prets = [];
              renderPrets();
              notyf.dismissAll();
              notyf.success(response); // table.ajax.reload()

              button.prop('disabled', false);
              $("#ajouter_modal").modal('hide');
              $("#add_pret")[0].reset();
              renderSelect2();
              _context.next = 32;
              break;

            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](10);
              button.prop('disabled', false);
              console.log(_context.t0);
              message = _context.t0.response.data;
              notyf.dismissAll();
              notyf.error(message);

            case 32:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[10, 25]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $("body").on('click', '.pret_code', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var prelevement, request, response, message;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            prelevement = $(this).attr('id');
            notyf.open({
              type: "info",
              message: "En cours...",
              duration: 9000000,
              dismissible: false
            });
            _context2.prev = 2;
            _context2.next = 5;
            return axios.post(Routing.generate('app_mouvement_prets_detail', {
              prelevement: prelevement
            }));

          case 5:
            request = _context2.sent;
            response = request.data;
            $('#modal_prelevement_detail').find('.modal-body').html(response);
            $('#modal_prelevement_detail').find('#list_prelevement_details').DataTable({
              lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
              language: {
                url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
              }
            });
            $('#modal_prelevement_detail').modal('show');
            notyf.dismissAll();
            _context2.next = 19;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](2);
            notyf.dismissAll();
            console.log(_context2.t0);
            message = _context2.t0.response.data;
            notyf.error(message);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 13]]);
  })));

  var renderPrets = function renderPrets() {
    var html = "";
    prets.map(function (pret) {
      html += "\n                <tr>\n                    <td></td>\n                    <td>".concat(pret.periode, "</td>\n                    <td>").concat(parseFloat(pret.montant).toLocaleString('fr-Fr', {
        style: 'decimal',
        minimumFractionDigits: 2
      }), "</td>\n                </tr>\n            ");
    });
    $("#nombremois").val(prets.length);

    if ($.fn.DataTable.isDataTable("#list_prets")) {
      $('#list_prets').DataTable().clear().destroy();
    }

    $("#list_prets .list_prets_data").html(html);
    tablePrets = $("#list_prets").DataTable({
      // responsive: true,
      lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
      }
    });
  };

  $("body").on('click', ".bulletin_download", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            window.open(Routing.generate('app_bulletin_employe_bulletin_print', {
              bulletin: $(this).attr('id')
            }), '_blank');

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-8f6080","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-8384af"], () => (__webpack_exec__("./assets/components/mouvement/prets.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBVW1DLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLG9CQUF0QiwwRUFBNEM7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUN4QytELE1BQU0sQ0FBQ3BDLElBQVAsQ0FBWWxELE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixxQ0FBakIsRUFBd0Q7Y0FBQ3NGLFFBQVEsRUFBRW5HLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFGLElBQVIsQ0FBYSxJQUFiO1lBQVgsQ0FBeEQsQ0FBWixFQUFxRyxRQUFyRzs7VUFEd0M7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FBNUM7QUFHSCxDQXpPRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL21vdXZlbWVudC9wcmV0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgJChcIi5ibG9ja19wYWdlXCIpLmh0bWwoJ0dlc3Rpb24gZGVzIHByZXRzJylcclxuICAgIHZhciB0YWJsZVByZXRzID0gJChcIiNsaXN0X3ByZXRzXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgLy8gcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGRhdGF0YWJsZXNGcmVuY2gsXHJcbiAgICB9KVxyXG4gICAgdmFyIHRhYmxlID0gJChcIiNsaXN0X3ByZWxldmVtZW50c1wiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfbW91dmVtZW50X3ByZXRzX2xpc3QnKSxcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAge25hbWU6ICdwLmlkJywgZGF0YTogJ2lkJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAncC5jb2RlJywgZGF0YTogJ2NvZGUnfSxcclxuICAgICAgICAgICAge25hbWU6ICdjLmlkJywgZGF0YTogJ2NvbnRyYWN0X2lkJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnZW1wLm5vbScsIGRhdGE6ICdub20nfSxcclxuICAgICAgICAgICAge25hbWU6ICdyLmRlc2lnbmF0aW9uJywgZGF0YTogJ3J1YnJpcXVlJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAncC5jcmVhdGVkJywgZGF0YTogJ2NyZWF0ZWQnfSxcclxuICAgICAgICAgICAge25hbWU6ICdwLm1vbnRhbnQnLCBkYXRhOiAnbW9udGFudCd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3Aubm9tYnJlTW9pcycsIGRhdGE6ICdub21icmVNb2lzJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAncC5tb3RpZicsIGRhdGE6ICdtb3RpZid9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29sdW1uRGVmczogWyBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogMCxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiJHtkYXRhfVwiIGNsYXNzPVwicHJldF9jaGVja1wiLz5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiAxLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz0ncHJldF9jb2RlJyBpZD0nJHtmdWxsLmlkfScgcm9sZT0nYnV0dG9uJz4ke2RhdGF9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IDUsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGEuZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiAzLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bGwubm9tICsgJyAnICtmdWxsLnByZW5vbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIF0sXHJcbiAgICAgIFxyXG4gICAgICAgIGxhbmd1YWdlOiBkYXRhdGFibGVzRnJlbmNoLFxyXG4gICAgfSk7XHJcbiAgICAkKFwiI2Fqb3V0ZXJcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIiNham91dGVyX21vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KVxyXG5cclxuICAgIHZhciBwcmV0cyA9IFtdO1xyXG4gICAgJChcIiNtb250YW50cHJldCwgI21vbnRhbnRlY2hlYW5jZSwgI3BlcmlvZGVcIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBwcmV0cyA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgcGVyaW9kZSA9ICQoXCIjcGVyaW9kZVwiKS52YWwoKTtcclxuICAgICAgICBpZihwZXJpb2RlID09ICcnKSB7XHJcbiAgICAgICAgICAgIG5vdHlmLmVycm9yKCdWZXVpbGxleiByZW1wbGlyIGTDqWJ1dCBwcsOqdCEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbW9udGFudHByZXQgPSBwYXJzZUZsb2F0KCQoXCIjbW9udGFudHByZXRcIikudmFsKCkpO1xyXG4gICAgICAgIHZhciBtb250YW50ZWNoZWFuY2UgPSBwYXJzZUZsb2F0KCQoXCIjbW9udGFudGVjaGVhbmNlXCIpLnZhbCgpKTtcclxuICAgICAgICB2YXIgdG90YWwgPSBtb250YW50cHJldDtcclxuICAgICAgICBpZihtb250YW50cHJldCA9PSAnJyB8fCBtb250YW50ZWNoZWFuY2UgPT0gJycpIHtcclxuICAgICAgICAgICAgJChcIiNub21icmVtb2lzXCIpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoXCIjZGVybmllcmVjaGVhbmNlXCIpLnZhbCgnJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtb250aHMgPSBtb250YW50cHJldCAvIG1vbnRhbnRlY2hlYW5jZTtcclxuICAgICAgICBpZihtb250aHMgIT0gTWF0aC5mbG9vcihNYXRoLmFicyhtb250aHMpKSkge1xyXG4gICAgICAgICAgICBtb250aHMgPSBNYXRoLmZsb29yKE1hdGguYWJzKG1vbnRocykpICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtb250aHM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdmFyIG5ld0RhdGUgPSBuZXcgRGF0ZShwZXJpb2RlKTtcclxuICAgICAgICAgICAgbmV3RGF0ZS5zZXRNb250aChuZXdEYXRlLmdldE1vbnRoKCkgKyBpbmRleCApO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b3RhbCwgbW9udGFudGVjaGVhbmNlLCB0b3RhbCA8PSBtb250YW50ZWNoZWFuY2UpXHJcbiAgICAgICAgICAgIGlmKHRvdGFsIDw9IG1vbnRhbnRlY2hlYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgcHJldHMucHVzaCh7J21vbnRhbnQnOiB0b3RhbCwgJ3BlcmlvZGUnIDogKG5ld0RhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSsnJytuZXdEYXRlLmdldEZ1bGxZZWFyKCl9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsID0gdG90YWwgLSBtb250YW50ZWNoZWFuY2U7XHJcbiAgICAgICAgICAgICAgICBwcmV0cy5wdXNoKHsnbW9udGFudCc6IG1vbnRhbnRlY2hlYW5jZSwgJ3BlcmlvZGUnIDogKG5ld0RhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSArJycrbmV3RGF0ZS5nZXRGdWxsWWVhcigpfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlclByZXRzKCk7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjYWRkX3ByZXRcIikub24oJ3N1Ym1pdCcsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgIHR5cGU6XCJpbmZvXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW4gY291cnMuLi5cIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwMDAsZGlzbWlzc2libGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYocHJldHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcignVmV1aWxsZXogYWpvdXRlciB1biBwcmV0IScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBidXR0b24gPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJldHMnLCBKU09OLnN0cmluZ2lmeShwcmV0cykpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBwX21vdXZlbWVudF9wcmV0c19ham91dGVyJyksIGZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcblxyXG4gICAgICAgICAgICBwcmV0cyA9IFtdO1xyXG4gICAgICAgICAgICByZW5kZXJQcmV0cygpO1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgIG5vdHlmLnN1Y2Nlc3MocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAvLyB0YWJsZS5hamF4LnJlbG9hZCgpXHJcbiAgICAgICAgICAgIGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgJChcIiNham91dGVyX21vZGFsXCIpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICQoXCIjYWRkX3ByZXRcIilbMF0ucmVzZXQoKVxyXG4gICAgICAgICAgICByZW5kZXJTZWxlY3QyKCk7XHJcblxyXG5cclxuICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCAnLnByZXRfY29kZScsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBwcmVsZXZlbWVudCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbiBjb3Vycy4uLlwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAwMCxkaXNtaXNzaWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9tb3V2ZW1lbnRfcHJldHNfZGV0YWlsJywge3ByZWxldmVtZW50fSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9wcmVsZXZlbWVudF9kZXRhaWwnKS5maW5kKCcubW9kYWwtYm9keScpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfcHJlbGV2ZW1lbnRfZGV0YWlsJykuZmluZCgnI2xpc3RfcHJlbGV2ZW1lbnRfZGV0YWlscycpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9wcmVsZXZlbWVudF9kZXRhaWwnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCByZW5kZXJQcmV0cyA9ICgpID0+IHtcclxuICAgICAgICB2YXIgaHRtbCA9IFwiXCI7XHJcbiAgICAgICAgcHJldHMubWFwKHByZXQgPT4ge1xyXG4gICAgICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtwcmV0LnBlcmlvZGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtwYXJzZUZsb2F0KHByZXQubW9udGFudCkudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZyJywge3N0eWxlOiAnZGVjaW1hbCcsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMn0pfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNub21icmVtb2lzXCIpLnZhbChwcmV0cy5sZW5ndGgpXHJcbiAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2xpc3RfcHJldHNcIikpIHtcclxuICAgICAgICAgICAgJCgnI2xpc3RfcHJldHMnKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNsaXN0X3ByZXRzIC5saXN0X3ByZXRzX2RhdGFcIikuaHRtbChodG1sKTtcclxuICAgICAgICB0YWJsZVByZXRzID0gJChcIiNsaXN0X3ByZXRzXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIC8vIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCBcIi5idWxsZXRpbl9kb3dubG9hZFwiLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICB3aW5kb3cub3BlbihSb3V0aW5nLmdlbmVyYXRlKCdhcHBfYnVsbGV0aW5fZW1wbG95ZV9idWxsZXRpbl9wcmludCcsIHtidWxsZXRpbjogJCh0aGlzKS5hdHRyKCdpZCcpfSksICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbn0pIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaHRtbCIsInRhYmxlUHJldHMiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51IiwibGFuZ3VhZ2UiLCJkYXRhdGFibGVzRnJlbmNoIiwidGFibGUiLCJvcmRlciIsImFqYXgiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJjb2x1bW5zIiwibmFtZSIsImRhdGEiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsInJlbmRlciIsInR5cGUiLCJmdWxsIiwibWV0YSIsImlkIiwiY29uc29sZSIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJub20iLCJwcmVub20iLCJvbiIsIm1vZGFsIiwicHJldHMiLCJwZXJpb2RlIiwidmFsIiwibm90eWYiLCJlcnJvciIsIm1vbnRhbnRwcmV0IiwicGFyc2VGbG9hdCIsIm1vbnRhbnRlY2hlYW5jZSIsInRvdGFsIiwibW9udGhzIiwiTWF0aCIsImZsb29yIiwiYWJzIiwiaW5kZXgiLCJuZXdEYXRlIiwiRGF0ZSIsInNldE1vbnRoIiwiZ2V0TW9udGgiLCJwdXNoIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImdldEZ1bGxZZWFyIiwicmVuZGVyUHJldHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJvcGVuIiwibWVzc2FnZSIsImR1cmF0aW9uIiwiZGlzbWlzc2libGUiLCJsZW5ndGgiLCJkaXNtaXNzQWxsIiwiYnV0dG9uIiwiYWN0aXZlRWxlbWVudCIsInByb3AiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImF4aW9zIiwicG9zdCIsInJlcXVlc3QiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJyZXNldCIsInJlbmRlclNlbGVjdDIiLCJsb2ciLCJwcmVsZXZlbWVudCIsImF0dHIiLCJmaW5kIiwidXJsIiwibWFwIiwicHJldCIsIm1vbnRhbnQiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm4iLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsIndpbmRvdyIsImJ1bGxldGluIl0sInNvdXJjZVJvb3QiOiIifQ==