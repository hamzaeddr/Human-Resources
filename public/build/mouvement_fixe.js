(self["webpackChunk"] = self["webpackChunk"] || []).push([["mouvement_fixe"],{

/***/ "./assets/components/mouvement/fixe.js":
/*!*********************************************!*\
  !*** ./assets/components/mouvement/fixe.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

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
  $(".block_page").html('Gestion des elements fixe');
  var tablePrets = $("#list_prets").DataTable({
    // responsive: true,
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    language: datatablesFrench
  });
  var previousXhr = null;
  var table = $("#list_fixe").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: {
      url: Routing.generate('app_mouvement_fixe_list'),
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
      data: 'montant',
      className: 'text-right'
    }, {
      orderable: false
    }],
    columnDefs: [{
      targets: 0,
      render: function render(data, type, full, meta) {
        return "<input type=\"checkbox\" value=\"".concat(data, "\" class=\"pret_check\"/>");
      }
    }, {
      targets: 4,
      render: function render(data, type, full, meta) {
        if (data && data.date) {
          return moment(data.date).format('YYYY-MM-DD HH:mm:ss');
        }

        return "";
      }
    }, {
      targets: 2,
      render: function render(data, type, full, meta) {
        return full.nom + ' ' + full.prenom;
      }
    }, {
      targets: 5,
      render: function render(data, type, full, meta) {
        return (parseFloat(full.montant) * parseFloat(full.sens)).toLocaleString('fr-Fr', {
          style: 'decimal',
          minimumFractionDigits: 2
        });
      }
    }, {
      targets: 6,
      render: function render(data, type, full, meta) {
        if (full.active == 0) {
          return "<i role=\"button\" class=\"fa-sharp fa-solid fa-circle-xmark enable text-danger\" id=\"".concat(full.id, "\"></i>");
        } else {
          return "<i role=\"button\" class=\"fa-solid fa-circle-notch text-info disable\"  id=\"".concat(full.id, "\"></i>");
        }
      }
    }],
    language: datatablesFrench
  });
  $("#ajouter").on('click', function () {
    $(".input_base").hide();
    $("#ajouter_modal").modal('show');
  });
  var fixes = [];
  var employe = null;
  $('.employe_select').on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var data, request, response, message;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = JSON.parse($(this).find('option:selected').attr('data-json'));
            $("#matricule").val(data.matricule);
            $("#contract").val(data.contract);
            $("#nature").val(data.nature);
            $("#cin").val(data.cin.toUpperCase());
            $("#entrele").val(data.date_anciennete);
            $("#profile").val(data.bareme);
            console.log(data);
            _context.prev = 8;
            _context.next = 11;
            return axios.get(Routing.generate('app_mouvement_echeance_get_base', {
              bareme: data.bareme_id
            }));

          case 11:
            request = _context.sent;
            response = request.data;
            $("#base").val(response);
            employe = data;
            _context.next = 23;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](8);
            console.log(_context.t0);
            message = _context.t0.response.data;
            notyf.dismissAll();
            notyf.error(message);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[8, 17]]);
  })));
  var element = null;
  $('.element_select').on('change', function () {
    var data = JSON.parse($(this).find('option:selected').attr('data-json'));
    $("#sens").val(data.sens);

    if (data.absence == 1) {
      $(".input_base").show();
      $("#montant").prop('readonly', true);
      $("#montant").val("");
    } else {
      $(".input_base").hide();
      $("#montant").prop('readonly', false);
      $("#montant").val("");
    }

    element = data;
  });
  $("#nombrejours").on('keyup', function () {
    var nombrejours = $(this).val();
    $("#montant").val("");

    if (nombrejours > 0) {
      var montant = (parseFloat(nombrejours) * parseFloat($("#base").val()) * parseFloat($("#sens").val())).toFixed(2);
      $("#montant").val(montant);
    }
  });
  $(".add_employe").on('click', function (e) {
    e.preventDefault();

    if (employe == null || element == null) {
      notyf.error('Veuillez remplir tout les champs!');
      return;
    }

    var montant = $("#montant").val();

    if (montant == '') {
      notyf.error('Veuillez remplir le montant!');
      return;
    }

    var sens = $("#sens").val();
    montant = montant * sens;
    var uniqueId = employe.contract_id + '' + element.id;
    var index = fixes.findIndex(function (e) {
      return e.uniqueId == uniqueId;
    });

    if (index == "-1") {
      fixes.push({
        uniqueId: uniqueId,
        employe: employe,
        element: element,
        montant: montant,
        sens: sens
      });
    } else {
      notyf.error('Cette combinaison existait déjà !');
      return;
    }

    renderFixes();
    console.log(fixes);
  });
  $("body").on('click', '.remove_echeance', function () {
    var id = $(this).parents('tr').attr('id');
    var index = fixes.findIndex(function (e) {
      return e.uniqueId == id;
    });
    fixes.splice(index, 1);
    renderFixes();
  });
  $("#add_fixe").on('submit', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var button, formData, request, response, message;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              button = $(document.activeElement);

              if (!(fixes.length == 0)) {
                _context2.next = 5;
                break;
              }

              notyf.error("Vous n'avez aucune element fixe!");
              return _context2.abrupt("return");

            case 5:
              notyf.open({
                type: "info",
                message: "En cours...",
                duration: 9000000,
                dismissible: false
              });
              button.prop('disabled', true);
              formData = new FormData(this);
              formData.append('fixes', JSON.stringify(fixes));
              _context2.prev = 9;
              _context2.next = 12;
              return axios.post(Routing.generate('app_mouvement_fixe_insert'), formData);

            case 12:
              request = _context2.sent;
              response = request.data;
              notyf.dismissAll();
              notyf.success(response);
              element = null;
              employe = null;
              button.prop('disabled', false);
              fixes = [];
              $("#ajouter_modal").modal('hide');
              renderFixes();
              $("#add_fixe")[0].reset();
              renderSelect2();
              _context2.next = 33;
              break;

            case 26:
              _context2.prev = 26;
              _context2.t0 = _context2["catch"](9);
              button.prop('disabled', false);
              console.log(_context2.t0);
              message = _context2.t0.response.data;
              notyf.dismissAll();
              notyf.error(message);

            case 33:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[9, 26]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());

  var renderFixes = function renderFixes() {
    var html = "";
    fixes.map(function (fixe) {
      html += "\n                <tr id=\"".concat(fixe.uniqueId, "\">\n                    <td>").concat(fixe.employe.nom.toUpperCase(), "  ").concat(fixe.employe.prenom.toUpperCase(), "</td>\n                    <td>").concat(fixe.employe.matricule, "</td>\n                    <td>").concat(fixe.employe.contract, "</td>\n                    <td>").concat(fixe.element.designation, "</td>\n                    <td>").concat(parseFloat(fixe.montant * fixe.sens).toLocaleString('fr-Fr', {
        style: 'decimal',
        minimumFractionDigits: 2
      }), "</td>\n                    <td><i role=\"button\" class=\"fa fa-trash text-danger remove_echeance\"></i></td>\n                </tr>\n            ");
    });

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

  $("body").on('click', ".disable", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var request, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            notyf.open({
              type: "info",
              message: "En cours...",
              duration: 9000000,
              dismissible: false
            });
            _context3.next = 4;
            return axios.get(Routing.generate('app_mouvement_fixe_statut', {
              element: $(this).attr('id'),
              statut: 0
            }));

          case 4:
            request = _context3.sent;
            response = request.data;
            table.ajax.reload(null, false);
            notyf.dismissAll();
            _context3.next = 12;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 10]]);
  })));
  $("body").on('click', ".enable", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var request, response;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            notyf.open({
              type: "info",
              message: "En cours...",
              duration: 9000000,
              dismissible: false
            });
            _context4.next = 4;
            return axios.get(Routing.generate('app_mouvement_fixe_statut', {
              element: $(this).attr('id'),
              statut: 1
            }));

          case 4:
            request = _context4.sent;
            response = request.data;
            table.ajax.reload(null, false);
            notyf.dismissAll();
            _context4.next = 12;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 10]]);
  })));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-8f6080","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-7c5317"], () => (__webpack_exec__("./assets/components/mouvement/fixe.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQUFBO1lBT25CM0MsT0FQbUI7WUFXbkJDLFFBWG1CLEdBV1JELE9BQU8sQ0FBQzNDLElBWEE7WUFZekJqQixLQUFLLENBQUNFLElBQU4sQ0FBV3NHLE1BQVgsQ0FBbUIsSUFBbkIsRUFBeUIsS0FBekI7WUFDQXpDLEtBQUssQ0FBQ0MsVUFBTjtZQWJ5QjtZQUFBOztVQUFBO1lBQUE7WUFBQTs7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUFqQztBQW9CSCxDQTVURCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL21vdXZlbWVudC9maXhlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbiAgICAkKFwiLmJsb2NrX3BhZ2VcIikuaHRtbCgnR2VzdGlvbiBkZXMgZWxlbWVudHMgZml4ZScpXHJcbiAgICB2YXIgdGFibGVQcmV0cyA9ICQoXCIjbGlzdF9wcmV0c1wiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIC8vIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcclxuICAgICAgICBsYW5ndWFnZTogZGF0YXRhYmxlc0ZyZW5jaCxcclxuICAgIH0pXHJcblxyXG4gICAgdmFyIHByZXZpb3VzWGhyID0gbnVsbDtcclxuICAgIHZhciB0YWJsZSA9ICQoXCIjbGlzdF9maXhlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfbW91dmVtZW50X2ZpeGVfbGlzdCcpLFxyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbihqcVhIUikge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHByZXZpb3VzIGpxWEhSIG9iamVjdCwgYWJvcnQgaXRcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1hocikge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWGhyLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgY3VycmVudCBqcVhIUiBvYmplY3QgZm9yIHRoZSBuZXcgcmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNYaHIgPSBqcVhIUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgIHtuYW1lOiAncC5pZCcsIGRhdGE6ICdpZCd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ2MuaWQnLCBkYXRhOiAnY29udHJhY3RfaWQnfSxcclxuICAgICAgICAgICAge25hbWU6ICdlbXAubm9tJywgZGF0YTogJ25vbSd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3IuZGVzaWduYXRpb24nLCBkYXRhOiAncnVicmlxdWUnfSxcclxuICAgICAgICAgICAge25hbWU6ICdwLmNyZWF0ZWQnLCBkYXRhOiAnY3JlYXRlZCd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3AubW9udGFudCcsIGRhdGE6ICdtb250YW50JywgY2xhc3NOYW1lOiAndGV4dC1yaWdodCd9LFxyXG4gICAgICAgICAgICB7b3JkZXJhYmxlOiBmYWxzZX0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiAwLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCIke2RhdGF9XCIgY2xhc3M9XCJwcmV0X2NoZWNrXCIvPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IDQsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhICYmIGRhdGEuZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGEuZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiAyLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bGwubm9tICsgJyAnICtmdWxsLnByZW5vbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogNSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VGbG9hdChmdWxsLm1vbnRhbnQpICogcGFyc2VGbG9hdChmdWxsLnNlbnMpKS50b0xvY2FsZVN0cmluZygnZnItRnInLCB7c3R5bGU6ICdkZWNpbWFsJywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IDYsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihmdWxsLmFjdGl2ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGkgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtY2lyY2xlLXhtYXJrIGVuYWJsZSB0ZXh0LWRhbmdlclwiIGlkPVwiJHtmdWxsLmlkfVwiPjwvaT5gXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aSByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUtbm90Y2ggdGV4dC1pbmZvIGRpc2FibGVcIiAgaWQ9XCIke2Z1bGwuaWR9XCI+PC9pPmBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIF0sXHJcbiAgICAgIFxyXG4gICAgICAgIGxhbmd1YWdlOiBkYXRhdGFibGVzRnJlbmNoLFxyXG4gICAgfSk7XHJcbiAgICAkKFwiI2Fqb3V0ZXJcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5pbnB1dF9iYXNlXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI2Fqb3V0ZXJfbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pXHJcblxyXG4gICAgdmFyIGZpeGVzID0gW107XHJcbiAgICB2YXIgZW1wbG95ZSA9IG51bGxcclxuICAgICQoJy5lbXBsb3llX3NlbGVjdCcpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLWpzb24nKSk7XHJcbiAgICAgICAgJChcIiNtYXRyaWN1bGVcIikudmFsKGRhdGEubWF0cmljdWxlKTtcclxuICAgICAgICAkKFwiI2NvbnRyYWN0XCIpLnZhbChkYXRhLmNvbnRyYWN0KTtcclxuICAgICAgICAkKFwiI25hdHVyZVwiKS52YWwoZGF0YS5uYXR1cmUpO1xyXG4gICAgICAgICQoXCIjY2luXCIpLnZhbChkYXRhLmNpbi50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAkKFwiI2VudHJlbGVcIikudmFsKGRhdGEuZGF0ZV9hbmNpZW5uZXRlKTtcclxuICAgICAgICAkKFwiI3Byb2ZpbGVcIikudmFsKGRhdGEuYmFyZW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnYXBwX21vdXZlbWVudF9lY2hlYW5jZV9nZXRfYmFzZScsIHtiYXJlbWU6IGRhdGEuYmFyZW1lX2lkfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNiYXNlXCIpLnZhbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGVtcGxveWUgPSBkYXRhO1xyXG5cclxuICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgdmFyIGVsZW1lbnQgPSBudWxsXHJcbiAgICAkKCcuZWxlbWVudF9zZWxlY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZSgkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmF0dHIoJ2RhdGEtanNvbicpKTtcclxuICAgICAgICAkKFwiI3NlbnNcIikudmFsKGRhdGEuc2VucylcclxuICAgICAgICBpZihkYXRhLmFic2VuY2UgPT0gMSkge1xyXG4gICAgICAgICAgICAkKFwiLmlucHV0X2Jhc2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiI21vbnRhbnRcIikucHJvcCgncmVhZG9ubHknLHRydWUpXHJcbiAgICAgICAgICAgICQoXCIjbW9udGFudFwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIi5pbnB1dF9iYXNlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIiNtb250YW50XCIpLnByb3AoJ3JlYWRvbmx5JyxmYWxzZSlcclxuICAgICAgICAgICAgJChcIiNtb250YW50XCIpLnZhbChcIlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQgPSBkYXRhO1xyXG5cclxuICAgIH0pXHJcbiAgICAkKFwiI25vbWJyZWpvdXJzXCIpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBub21icmVqb3VycyA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgJChcIiNtb250YW50XCIpLnZhbChcIlwiKTtcclxuXHJcbiAgICAgICAgaWYobm9tYnJlam91cnMgPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBtb250YW50ID0gKHBhcnNlRmxvYXQobm9tYnJlam91cnMpICogcGFyc2VGbG9hdCgkKFwiI2Jhc2VcIikudmFsKCkpICogcGFyc2VGbG9hdCgkKFwiI3NlbnNcIikudmFsKCkpICkudG9GaXhlZCgyKVxyXG4gICAgICAgICAgICAkKFwiI21vbnRhbnRcIikudmFsKG1vbnRhbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgIFxyXG4gICAgJChcIi5hZGRfZW1wbG95ZVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYoZW1wbG95ZSA9PSBudWxsIHx8IGVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcignVmV1aWxsZXogcmVtcGxpciB0b3V0IGxlcyBjaGFtcHMhJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1vbnRhbnQgPSAkKFwiI21vbnRhbnRcIikudmFsKCk7XHJcbiAgICAgICAgaWYobW9udGFudCA9PSAnJykge1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcignVmV1aWxsZXogcmVtcGxpciBsZSBtb250YW50IScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBcclxuICAgICAgICB2YXIgc2VucyA9ICQoXCIjc2Vuc1wiKS52YWwoKTtcclxuICAgICAgICBtb250YW50ID0gbW9udGFudCAqIHNlbnM7XHJcbiAgICAgICAgbGV0IHVuaXF1ZUlkID0gZW1wbG95ZS5jb250cmFjdF9pZCsnJytlbGVtZW50LmlkO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGZpeGVzLmZpbmRJbmRleChlID0+IGUudW5pcXVlSWQgPT0gdW5pcXVlSWQpO1xyXG4gICAgICAgIGlmKGluZGV4ID09IFwiLTFcIikge1xyXG4gICAgICAgICAgICBmaXhlcy5wdXNoKHt1bmlxdWVJZCwgZW1wbG95ZSwgZWxlbWVudCwgbW9udGFudCwgc2Vuc30pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdHlmLmVycm9yKCdDZXR0ZSBjb21iaW5haXNvbiBleGlzdGFpdCBkw6lqw6AgIScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbmRlckZpeGVzKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpeGVzKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKCdjbGljaycsICcucmVtb3ZlX2VjaGVhbmNlJyAsZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGlkID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gZml4ZXMuZmluZEluZGV4KGUgPT4gZS51bmlxdWVJZCA9PSBpZClcclxuXHJcbiAgICAgICAgZml4ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgcmVuZGVyRml4ZXMoKTtcclxuICAgIH0pXHJcblxyXG5cclxuICAgICQoXCIjYWRkX2ZpeGVcIikub24oJ3N1Ym1pdCcsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgaWYoZml4ZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgbm90eWYuZXJyb3IoXCJWb3VzIG4nYXZleiBhdWN1bmUgZWxlbWVudCBmaXhlIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbiBjb3Vycy4uLlwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAwMCxkaXNtaXNzaWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBidXR0b24ucHJvcCgnZGlzYWJsZWQnLCB0cnVlKVxyXG5cclxuXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZml4ZXMnLCBKU09OLnN0cmluZ2lmeShmaXhlcykpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9tb3V2ZW1lbnRfZml4ZV9pbnNlcnQnKSwgZm9ybURhdGFcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICBub3R5Zi5zdWNjZXNzKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBlbXBsb3llID0gbnVsbDtcclxuICAgICAgICAgICAgYnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpXHJcblxyXG4gICAgICAgICAgICBmaXhlcyA9IFtdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJChcIiNham91dGVyX21vZGFsXCIpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHJlbmRlckZpeGVzKCk7XHJcbiAgICAgICAgICAgICQoXCIjYWRkX2ZpeGVcIilbMF0ucmVzZXQoKVxyXG4gICAgICAgICAgICByZW5kZXJTZWxlY3QyKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgbm90eWYuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KVxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCByZW5kZXJGaXhlcyA9ICgpID0+IHtcclxuICAgICAgICB2YXIgaHRtbCA9IFwiXCI7XHJcbiAgICAgICAgZml4ZXMubWFwKGZpeGUgPT4ge1xyXG4gICAgICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgICAgIDx0ciBpZD1cIiR7Zml4ZS51bmlxdWVJZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtmaXhlLmVtcGxveWUubm9tLnRvVXBwZXJDYXNlKCl9ICAke2ZpeGUuZW1wbG95ZS5wcmVub20udG9VcHBlckNhc2UoKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke2ZpeGUuZW1wbG95ZS5tYXRyaWN1bGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtmaXhlLmVtcGxveWUuY29udHJhY3R9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtmaXhlLmVsZW1lbnQuZGVzaWduYXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtwYXJzZUZsb2F0KGZpeGUubW9udGFudCAqIGZpeGUuc2VucykudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZyJywge3N0eWxlOiAnZGVjaW1hbCcsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMn0pfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImZhIGZhLXRyYXNoIHRleHQtZGFuZ2VyIHJlbW92ZV9lY2hlYW5jZVwiPjwvaT48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNsaXN0X3ByZXRzXCIpKSB7XHJcbiAgICAgICAgICAgICQoJyNsaXN0X3ByZXRzJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjbGlzdF9wcmV0cyAubGlzdF9wcmV0c19kYXRhXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgdGFibGVQcmV0cyA9ICQoXCIjbGlzdF9wcmV0c1wiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAvLyByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywgXCIuZGlzYWJsZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6XCJpbmZvXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAwMCxkaXNtaXNzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfbW91dmVtZW50X2ZpeGVfc3RhdHV0Jywge2VsZW1lbnQ6ICQodGhpcykuYXR0cignaWQnKSwgc3RhdHV0OiAwfSksXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCBudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywgXCIuZW5hYmxlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG5vdHlmLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW4gY291cnMuLi5cIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA5MDAwMDAwLGRpc21pc3NpYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9tb3V2ZW1lbnRfZml4ZV9zdGF0dXQnLCB7ZWxlbWVudDogJCh0aGlzKS5hdHRyKCdpZCcpLCBzdGF0dXQ6IDF9KSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoIG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG5cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSkiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJodG1sIiwidGFibGVQcmV0cyIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJsYW5ndWFnZSIsImRhdGF0YWJsZXNGcmVuY2giLCJwcmV2aW91c1hociIsInRhYmxlIiwib3JkZXIiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwidHlwZSIsImJlZm9yZVNlbmQiLCJqcVhIUiIsImFib3J0IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInJlc3BvbnNpdmUiLCJzY3JvbGxYIiwiY29sdW1ucyIsIm5hbWUiLCJkYXRhIiwiY2xhc3NOYW1lIiwib3JkZXJhYmxlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJyZW5kZXIiLCJmdWxsIiwibWV0YSIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJub20iLCJwcmVub20iLCJwYXJzZUZsb2F0IiwibW9udGFudCIsInNlbnMiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiYWN0aXZlIiwiaWQiLCJvbiIsImhpZGUiLCJtb2RhbCIsImZpeGVzIiwiZW1wbG95ZSIsIkpTT04iLCJwYXJzZSIsImZpbmQiLCJhdHRyIiwidmFsIiwibWF0cmljdWxlIiwiY29udHJhY3QiLCJuYXR1cmUiLCJjaW4iLCJ0b1VwcGVyQ2FzZSIsImRhdGVfYW5jaWVubmV0ZSIsImJhcmVtZSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsImJhcmVtZV9pZCIsInJlcXVlc3QiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJub3R5ZiIsImRpc21pc3NBbGwiLCJlcnJvciIsImVsZW1lbnQiLCJhYnNlbmNlIiwic2hvdyIsInByb3AiLCJub21icmVqb3VycyIsInRvRml4ZWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1bmlxdWVJZCIsImNvbnRyYWN0X2lkIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJwdXNoIiwicmVuZGVyRml4ZXMiLCJwYXJlbnRzIiwic3BsaWNlIiwiYnV0dG9uIiwiYWN0aXZlRWxlbWVudCIsImxlbmd0aCIsIm9wZW4iLCJkdXJhdGlvbiIsImRpc21pc3NpYmxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInN0cmluZ2lmeSIsInBvc3QiLCJzdWNjZXNzIiwicmVzZXQiLCJyZW5kZXJTZWxlY3QyIiwibWFwIiwiZml4ZSIsImRlc2lnbmF0aW9uIiwiZm4iLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsInN0YXR1dCIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=