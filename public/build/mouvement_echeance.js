(self["webpackChunk"] = self["webpackChunk"] || []).push([["mouvement_echeance"],{

/***/ "./assets/components/mouvement/echeance.js":
/*!*************************************************!*\
  !*** ./assets/components/mouvement/echeance.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

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
  $(".block_page").html('Gestion des echeances');
  var tablePrets = $("#list_prets").DataTable({
    // responsive: true,
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    language: datatablesFrench
  });
  var table = $("#list_echeance").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: Routing.generate('app_mouvement_echeance_list'),
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
      name: 'periode.code',
      data: 'periode_code'
    }, {
      name: 'p.montant',
      data: 'montant',
      className: 'text-right'
    }, {
      orderable: false
    }, {
      orderable: false
    }],
    columnDefs: [{
      targets: 0,
      render: function render(data, type, full, meta) {
        if (full.valider == 1) {
          return "<input type=\"checkbox\" value=\"".concat(data, "\" class=\"pret_check\" disabled/>");
        } else {
          return "<input type=\"checkbox\" value=\"".concat(data, "\" class=\"pret_check\"/>");
        }
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
      targets: 6,
      render: function render(data, type, full, meta) {
        return (parseFloat(full.montant) * parseFloat(full.sens)).toLocaleString('fr-Fr', {
          style: 'decimal',
          minimumFractionDigits: 2
        });
      }
    }, {
      targets: 7,
      render: function render(data, type, full, meta) {
        if (full.valider) {
          return '<i class="fa-sharp fa-solid fa-circle-check text-success" ></i>';
        } else if (full.active == 0) {
          return '<i class="fa-sharp fa-solid fa-circle-xmark text-danger" ></i>';
        } else {
          return ' <i class="fa-solid fa-circle-notch text-info"></i>';
        }
      }
    }, {
      targets: 8,
      render: function render(data, type, full, meta) {
        if (full.bulletin_code == null) {
          return '';
        }

        return "<span role=\"button\" class=\"bulletin_download\" id=\"".concat(full.bulletin_id, "\">").concat(full.bulletin_code, "</span>");
      }
    }],
    language: datatablesFrench
  });
  $("#ajouter").on('click', function () {
    $(".input_base").hide();
    $("#ajouter_modal").modal('show');
  });
  var echeances = [];
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
    var periode = $("#periode").val();

    if (employe == null || element == null || periode == '') {
      notyf.error('Veuillez remplir tout les champs!');
      return;
    }

    var montant = $("#montant").val();
    var sens = $("#sens").val();
    montant = montant * sens;
    var newDate = new Date(periode);
    periode = (newDate.getMonth() + 1).toString().padStart(2, '0') + '' + newDate.getFullYear();
    var uniqueId = employe.contract_id + '' + element.id + '' + periode;
    var index = echeances.findIndex(function (e) {
      return e.uniqueId == uniqueId;
    });

    if (index == "-1") {
      echeances.push({
        uniqueId: uniqueId,
        employe: employe,
        element: element,
        montant: montant,
        sens: sens,
        periode: periode
      });
    } else {
      notyf.error('Cette combinaison existait déjà !');
      return;
    }

    renderEcheances();
    console.log(echeances);
  });
  $("body").on('click', '.remove_echeance', function () {
    var id = $(this).parents('tr').attr('id');
    var index = echeances.findIndex(function (e) {
      return e.uniqueId == id;
    });
    echeances.splice(index, 1);
    renderEcheances();
  });
  $("#add_echeance").on('submit', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var button, formData, request, response, message;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              button = $(document.activeElement);

              if (!(echeances.length == 0)) {
                _context2.next = 5;
                break;
              }

              notyf.error("Vous n'avez aucune echeance!");
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
              formData.append('echeances', JSON.stringify(echeances));
              _context2.prev = 9;
              _context2.next = 12;
              return axios.post(Routing.generate('app_mouvement_echeance_insert'), formData);

            case 12:
              request = _context2.sent;
              response = request.data;
              notyf.dismissAll();
              notyf.success(response);
              element = null;
              employe = null;
              button.prop('disabled', false);
              echeances = [];
              $("#ajouter_modal").modal('hide');
              renderEcheances();
              $("#add_echeance")[0].reset();
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

  var renderEcheances = function renderEcheances() {
    var html = "";
    echeances.map(function (echeance) {
      html += "\n                <tr id=\"".concat(echeance.uniqueId, "\">\n                    <td>").concat(echeance.employe.nom.toUpperCase(), "  ").concat(echeance.employe.prenom.toUpperCase(), "</td>\n                    <td>").concat(echeance.employe.matricule, "</td>\n                    <td>").concat(echeance.employe.contract, "</td>\n                    <td>").concat(echeance.element.designation, "</td>\n                    <td>").concat(echeance.periode, "</td>\n                    <td>").concat(parseFloat(echeance.montant * echeance.sens).toLocaleString('fr-Fr', {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-8f6080","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-8384af"], () => (__webpack_exec__("./assets/components/mouvement/echeance.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL21vdXZlbWVudC9lY2hlYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVsZXRlLXByb3BlcnR5LW9yLXRocm93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zcGxpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIudG8tZml4ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgICQoXCIuYmxvY2tfcGFnZVwiKS5odG1sKCdHZXN0aW9uIGRlcyBlY2hlYW5jZXMnKVxyXG4gICAgdmFyIHRhYmxlUHJldHMgPSAkKFwiI2xpc3RfcHJldHNcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAvLyByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICBcclxuICAgICAgICBsYW5ndWFnZTogZGF0YXRhYmxlc0ZyZW5jaCxcclxuICAgIH0pXHJcbiAgICB2YXIgdGFibGUgPSAkKFwiI2xpc3RfZWNoZWFuY2VcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX21vdXZlbWVudF9lY2hlYW5jZV9saXN0JyksXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgIHtuYW1lOiAncC5pZCcsIGRhdGE6ICdpZCd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ2MuaWQnLCBkYXRhOiAnY29udHJhY3RfaWQnfSxcclxuICAgICAgICAgICAge25hbWU6ICdlbXAubm9tJywgZGF0YTogJ25vbSd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3IuZGVzaWduYXRpb24nLCBkYXRhOiAncnVicmlxdWUnfSxcclxuICAgICAgICAgICAge25hbWU6ICdwLmNyZWF0ZWQnLCBkYXRhOiAnY3JlYXRlZCd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3BlcmlvZGUuY29kZScsIGRhdGE6ICdwZXJpb2RlX2NvZGUnfSxcclxuICAgICAgICAgICAge25hbWU6ICdwLm1vbnRhbnQnLCBkYXRhOiAnbW9udGFudCcsIGNsYXNzTmFtZTogJ3RleHQtcmlnaHQnfSxcclxuICAgICAgICAgICAge29yZGVyYWJsZTogZmFsc2V9LFxyXG4gICAgICAgICAgICB7b3JkZXJhYmxlOiBmYWxzZX0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiAwLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZnVsbC52YWxpZGVyID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCIke2RhdGF9XCIgY2xhc3M9XCJwcmV0X2NoZWNrXCIgZGlzYWJsZWQvPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCIke2RhdGF9XCIgY2xhc3M9XCJwcmV0X2NoZWNrXCIvPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiA0LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YSAmJiBkYXRhLmRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRhLmRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogMixcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdWxsLm5vbSArICcgJyArZnVsbC5wcmVub207XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IDYsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlRmxvYXQoZnVsbC5tb250YW50KSAqIHBhcnNlRmxvYXQoZnVsbC5zZW5zKSkudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZyJywge3N0eWxlOiAnZGVjaW1hbCcsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMn0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiA3LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZnVsbC52YWxpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGkgY2xhc3M9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1jaXJjbGUtY2hlY2sgdGV4dC1zdWNjZXNzXCIgPjwvaT4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGZ1bGwuYWN0aXZlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aSBjbGFzcz1cImZhLXNoYXJwIGZhLXNvbGlkIGZhLWNpcmNsZS14bWFyayB0ZXh0LWRhbmdlclwiID48L2k+J1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlLW5vdGNoIHRleHQtaW5mb1wiPjwvaT4nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiA4LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZnVsbC5idWxsZXRpbl9jb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxzcGFuIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImJ1bGxldGluX2Rvd25sb2FkXCIgaWQ9XCIke2Z1bGwuYnVsbGV0aW5faWR9XCI+JHtmdWxsLmJ1bGxldGluX2NvZGV9PC9zcGFuPmBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIF0sXHJcbiAgICAgIFxyXG4gICAgICAgIGxhbmd1YWdlOiBkYXRhdGFibGVzRnJlbmNoLFxyXG4gICAgfSk7XHJcbiAgICAkKFwiI2Fqb3V0ZXJcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5pbnB1dF9iYXNlXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI2Fqb3V0ZXJfbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pXHJcblxyXG4gICAgdmFyIGVjaGVhbmNlcyA9IFtdO1xyXG4gICAgdmFyIGVtcGxveWUgPSBudWxsXHJcbiAgICAkKCcuZW1wbG95ZV9zZWxlY3QnKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKCQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykuYXR0cignZGF0YS1qc29uJykpO1xyXG4gICAgICAgICQoXCIjbWF0cmljdWxlXCIpLnZhbChkYXRhLm1hdHJpY3VsZSk7XHJcbiAgICAgICAgJChcIiNjb250cmFjdFwiKS52YWwoZGF0YS5jb250cmFjdCk7XHJcbiAgICAgICAgJChcIiNuYXR1cmVcIikudmFsKGRhdGEubmF0dXJlKTtcclxuICAgICAgICAkKFwiI2NpblwiKS52YWwoZGF0YS5jaW4udG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgJChcIiNlbnRyZWxlXCIpLnZhbChkYXRhLmRhdGVfYW5jaWVubmV0ZSk7XHJcbiAgICAgICAgJChcIiNwcm9maWxlXCIpLnZhbChkYXRhLmJhcmVtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9tb3V2ZW1lbnRfZWNoZWFuY2VfZ2V0X2Jhc2UnLCB7YmFyZW1lOiBkYXRhLmJhcmVtZV9pZH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjYmFzZVwiKS52YWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBlbXBsb3llID0gZGF0YTtcclxuXHJcbiAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgbm90eWYuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIHZhciBlbGVtZW50ID0gbnVsbFxyXG4gICAgJCgnLmVsZW1lbnRfc2VsZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLWpzb24nKSk7XHJcbiAgICAgICAgJChcIiNzZW5zXCIpLnZhbChkYXRhLnNlbnMpXHJcbiAgICAgICAgaWYoZGF0YS5hYnNlbmNlID09IDEpIHtcclxuICAgICAgICAgICAgJChcIi5pbnB1dF9iYXNlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIiNtb250YW50XCIpLnByb3AoJ3JlYWRvbmx5Jyx0cnVlKVxyXG4gICAgICAgICAgICAkKFwiI21vbnRhbnRcIikudmFsKFwiXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIuaW5wdXRfYmFzZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjbW9udGFudFwiKS5wcm9wKCdyZWFkb25seScsZmFsc2UpXHJcbiAgICAgICAgICAgICQoXCIjbW9udGFudFwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50ID0gZGF0YTtcclxuXHJcbiAgICB9KVxyXG4gICAgJChcIiNub21icmVqb3Vyc1wiKS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbm9tYnJlam91cnMgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICQoXCIjbW9udGFudFwiKS52YWwoXCJcIik7XHJcblxyXG4gICAgICAgIGlmKG5vbWJyZWpvdXJzID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgbW9udGFudCA9IChwYXJzZUZsb2F0KG5vbWJyZWpvdXJzKSAqIHBhcnNlRmxvYXQoJChcIiNiYXNlXCIpLnZhbCgpKSAqIHBhcnNlRmxvYXQoJChcIiNzZW5zXCIpLnZhbCgpKSApLnRvRml4ZWQoMilcclxuICAgICAgICAgICAgJChcIiNtb250YW50XCIpLnZhbChtb250YW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICBcclxuICAgICQoXCIuYWRkX2VtcGxveWVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHZhciBwZXJpb2RlID0gJChcIiNwZXJpb2RlXCIpLnZhbCgpO1xyXG4gICAgICAgIGlmKGVtcGxveWUgPT0gbnVsbCB8fCBlbGVtZW50ID09IG51bGwgfHwgcGVyaW9kZSA9PSAnJykge1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcignVmV1aWxsZXogcmVtcGxpciB0b3V0IGxlcyBjaGFtcHMhJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1vbnRhbnQgPSAkKFwiI21vbnRhbnRcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIHNlbnMgPSAkKFwiI3NlbnNcIikudmFsKCk7XHJcbiAgICAgICAgbW9udGFudCA9IG1vbnRhbnQgKiBzZW5zO1xyXG4gICAgICAgIHZhciBuZXdEYXRlID0gbmV3IERhdGUocGVyaW9kZSk7XHJcbiAgICAgICAgcGVyaW9kZSA9IChuZXdEYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykrJycrbmV3RGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgbGV0IHVuaXF1ZUlkID0gZW1wbG95ZS5jb250cmFjdF9pZCsnJytlbGVtZW50LmlkKycnK3BlcmlvZGU7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gZWNoZWFuY2VzLmZpbmRJbmRleChlID0+IGUudW5pcXVlSWQgPT0gdW5pcXVlSWQpO1xyXG4gICAgICAgIGlmKGluZGV4ID09IFwiLTFcIikge1xyXG4gICAgICAgICAgICBlY2hlYW5jZXMucHVzaCh7dW5pcXVlSWQsIGVtcGxveWUsIGVsZW1lbnQsIG1vbnRhbnQsIHNlbnMsIHBlcmlvZGV9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcignQ2V0dGUgY29tYmluYWlzb24gZXhpc3RhaXQgZMOpasOgICEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXJFY2hlYW5jZXMoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZWNoZWFuY2VzKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKCdjbGljaycsICcucmVtb3ZlX2VjaGVhbmNlJyAsZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGlkID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gZWNoZWFuY2VzLmZpbmRJbmRleChlID0+IGUudW5pcXVlSWQgPT0gaWQpXHJcblxyXG4gICAgICAgIGVjaGVhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICByZW5kZXJFY2hlYW5jZXMoKTtcclxuICAgIH0pXHJcblxyXG5cclxuICAgICQoXCIjYWRkX2VjaGVhbmNlXCIpLm9uKCdzdWJtaXQnLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBidXR0b24gPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGlmKGVjaGVhbmNlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcihcIlZvdXMgbidhdmV6IGF1Y3VuZSBlY2hlYW5jZSFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgICAgIHR5cGU6XCJpbmZvXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW4gY291cnMuLi5cIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDkwMDAwMDAsZGlzbWlzc2libGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuXHJcblxyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VjaGVhbmNlcycsIEpTT04uc3RyaW5naWZ5KGVjaGVhbmNlcykpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9tb3V2ZW1lbnRfZWNoZWFuY2VfaW5zZXJ0JyksIGZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICAgICAgbm90eWYuc3VjY2VzcyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgZW1wbG95ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgZWNoZWFuY2VzID0gW107XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKFwiI2Fqb3V0ZXJfbW9kYWxcIikubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgcmVuZGVyRWNoZWFuY2VzKCk7XHJcbiAgICAgICAgICAgICQoXCIjYWRkX2VjaGVhbmNlXCIpWzBdLnJlc2V0KClcclxuICAgICAgICAgICAgcmVuZGVyU2VsZWN0MigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSlcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgY29uc3QgcmVuZGVyRWNoZWFuY2VzID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBodG1sID0gXCJcIjtcclxuICAgICAgICBlY2hlYW5jZXMubWFwKGVjaGVhbmNlID0+IHtcclxuICAgICAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICA8dHIgaWQ9XCIke2VjaGVhbmNlLnVuaXF1ZUlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke2VjaGVhbmNlLmVtcGxveWUubm9tLnRvVXBwZXJDYXNlKCl9ICAke2VjaGVhbmNlLmVtcGxveWUucHJlbm9tLnRvVXBwZXJDYXNlKCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtlY2hlYW5jZS5lbXBsb3llLm1hdHJpY3VsZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke2VjaGVhbmNlLmVtcGxveWUuY29udHJhY3R9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtlY2hlYW5jZS5lbGVtZW50LmRlc2lnbmF0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7ZWNoZWFuY2UucGVyaW9kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke3BhcnNlRmxvYXQoZWNoZWFuY2UubW9udGFudCAqIGVjaGVhbmNlLnNlbnMpLnRvTG9jYWxlU3RyaW5nKCdmci1GcicsIHtzdHlsZTogJ2RlY2ltYWwnLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDJ9KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aSByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJmYSBmYS10cmFzaCB0ZXh0LWRhbmdlciByZW1vdmVfZWNoZWFuY2VcIj48L2k+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjbGlzdF9wcmV0c1wiKSkge1xyXG4gICAgICAgICAgICAkKCcjbGlzdF9wcmV0cycpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2xpc3RfcHJldHMgLmxpc3RfcHJldHNfZGF0YVwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgIHRhYmxlUHJldHMgPSAkKFwiI2xpc3RfcHJldHNcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgLy8gcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKCdjbGljaycsIFwiLmJ1bGxldGluX2Rvd25sb2FkXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9idWxsZXRpbl9lbXBsb3llX2J1bGxldGluX3ByaW50Jywge2J1bGxldGluOiAkKHRoaXMpLmF0dHIoJ2lkJyl9KSwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxufSkiLCIndXNlIHN0cmljdCc7XHJcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xyXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xyXG5cclxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy14L25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxyXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcclxuXHJcbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxyXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcclxuICAvLyBtYWtlcyBubyBzZW5zZSB3aXRob3V0IHByb3BlciBzdHJpY3QgbW9kZSBzdXBwb3J0XHJcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy14L25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XHJcbiAgfVxyXG59KCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcclxuICBpZiAoaXNBcnJheShPKSAmJiAhZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sICdsZW5ndGgnKS53cml0YWJsZSkge1xyXG4gICAgdGhyb3cgJFR5cGVFcnJvcignQ2Fubm90IHNldCByZWFkIG9ubHkgLmxlbmd0aCcpO1xyXG4gIH0gcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xyXG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xyXG4gIHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xyXG5cclxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBQKSB7XHJcbiAgaWYgKCFkZWxldGUgT1tQXSkgdGhyb3cgJFR5cGVFcnJvcignQ2Fubm90IGRlbGV0ZSBwcm9wZXJ0eSAnICsgdHJ5VG9TdHJpbmcoUCkgKyAnIG9mICcgKyB0cnlUb1N0cmluZyhPKSk7XHJcbn07XHJcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcclxuXHJcbi8vIGB0aGlzTnVtYmVyVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRoaXNudW1iZXJ2YWx1ZVxyXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKDEuMC52YWx1ZU9mKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyICRmaW5kSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZEluZGV4O1xyXG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcclxuXHJcbnZhciBGSU5EX0lOREVYID0gJ2ZpbmRJbmRleCc7XHJcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XHJcblxyXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xyXG5pZiAoRklORF9JTkRFWCBpbiBbXSkgQXJyYXkoMSlbRklORF9JTkRFWF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZGluZGV4XHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcclxuICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xyXG4gICAgcmV0dXJuICRmaW5kSW5kZXgodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXHJcbmFkZFRvVW5zY29wYWJsZXMoRklORF9JTkRFWCk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcclxudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xyXG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XHJcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xyXG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xyXG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcclxudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xyXG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XHJcbnZhciBkZWxldGVQcm9wZXJ0eU9yVGhyb3cgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVsZXRlLXByb3BlcnR5LW9yLXRocm93Jyk7XHJcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XHJcblxyXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NwbGljZScpO1xyXG5cclxudmFyIG1heCA9IE1hdGgubWF4O1xyXG52YXIgbWluID0gTWF0aC5taW47XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLnNwbGljZWAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNwbGljZVxyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XHJcbiAgc3BsaWNlOiBmdW5jdGlvbiBzcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50IC8qICwgLi4uaXRlbXMgKi8pIHtcclxuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XHJcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XHJcbiAgICB2YXIgYWN0dWFsU3RhcnQgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbik7XHJcbiAgICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgIHZhciBpbnNlcnRDb3VudCwgYWN0dWFsRGVsZXRlQ291bnQsIEEsIGssIGZyb20sIHRvO1xyXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpbnNlcnRDb3VudCA9IGFjdHVhbERlbGV0ZUNvdW50ID0gMDtcclxuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIGluc2VydENvdW50ID0gMDtcclxuICAgICAgYWN0dWFsRGVsZXRlQ291bnQgPSBsZW4gLSBhY3R1YWxTdGFydDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluc2VydENvdW50ID0gYXJndW1lbnRzTGVuZ3RoIC0gMjtcclxuICAgICAgYWN0dWFsRGVsZXRlQ291bnQgPSBtaW4obWF4KHRvSW50ZWdlck9ySW5maW5pdHkoZGVsZXRlQ291bnQpLCAwKSwgbGVuIC0gYWN0dWFsU3RhcnQpO1xyXG4gICAgfVxyXG4gICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKGxlbiArIGluc2VydENvdW50IC0gYWN0dWFsRGVsZXRlQ291bnQpO1xyXG4gICAgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCBhY3R1YWxEZWxldGVDb3VudCk7XHJcbiAgICBmb3IgKGsgPSAwOyBrIDwgYWN0dWFsRGVsZXRlQ291bnQ7IGsrKykge1xyXG4gICAgICBmcm9tID0gYWN0dWFsU3RhcnQgKyBrO1xyXG4gICAgICBpZiAoZnJvbSBpbiBPKSBjcmVhdGVQcm9wZXJ0eShBLCBrLCBPW2Zyb21dKTtcclxuICAgIH1cclxuICAgIEEubGVuZ3RoID0gYWN0dWFsRGVsZXRlQ291bnQ7XHJcbiAgICBpZiAoaW5zZXJ0Q291bnQgPCBhY3R1YWxEZWxldGVDb3VudCkge1xyXG4gICAgICBmb3IgKGsgPSBhY3R1YWxTdGFydDsgayA8IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50OyBrKyspIHtcclxuICAgICAgICBmcm9tID0gayArIGFjdHVhbERlbGV0ZUNvdW50O1xyXG4gICAgICAgIHRvID0gayArIGluc2VydENvdW50O1xyXG4gICAgICAgIGlmIChmcm9tIGluIE8pIE9bdG9dID0gT1tmcm9tXTtcclxuICAgICAgICBlbHNlIGRlbGV0ZVByb3BlcnR5T3JUaHJvdyhPLCB0byk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChrID0gbGVuOyBrID4gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQgKyBpbnNlcnRDb3VudDsgay0tKSBkZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgayAtIDEpO1xyXG4gICAgfSBlbHNlIGlmIChpbnNlcnRDb3VudCA+IGFjdHVhbERlbGV0ZUNvdW50KSB7XHJcbiAgICAgIGZvciAoayA9IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50OyBrID4gYWN0dWFsU3RhcnQ7IGstLSkge1xyXG4gICAgICAgIGZyb20gPSBrICsgYWN0dWFsRGVsZXRlQ291bnQgLSAxO1xyXG4gICAgICAgIHRvID0gayArIGluc2VydENvdW50IC0gMTtcclxuICAgICAgICBpZiAoZnJvbSBpbiBPKSBPW3RvXSA9IE9bZnJvbV07XHJcbiAgICAgICAgZWxzZSBkZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgdG8pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGsgPSAwOyBrIDwgaW5zZXJ0Q291bnQ7IGsrKykge1xyXG4gICAgICBPW2sgKyBhY3R1YWxTdGFydF0gPSBhcmd1bWVudHNbayArIDJdO1xyXG4gICAgfVxyXG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQgKyBpbnNlcnRDb3VudCk7XHJcbiAgICByZXR1cm4gQTtcclxuICB9XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XHJcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcclxudmFyIHRoaXNOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZScpO1xyXG52YXIgJHJlcGVhdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jyk7XHJcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xyXG5cclxudmFyICRSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcclxudmFyICRTdHJpbmcgPSBTdHJpbmc7XHJcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XHJcbnZhciByZXBlYXQgPSB1bmN1cnJ5VGhpcygkcmVwZWF0KTtcclxudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xyXG52YXIgbmF0aXZlVG9GaXhlZCA9IHVuY3VycnlUaGlzKDEuMC50b0ZpeGVkKTtcclxuXHJcbnZhciBwb3cgPSBmdW5jdGlvbiAoeCwgbiwgYWNjKSB7XHJcbiAgcmV0dXJuIG4gPT09IDAgPyBhY2MgOiBuICUgMiA9PT0gMSA/IHBvdyh4LCBuIC0gMSwgYWNjICogeCkgOiBwb3coeCAqIHgsIG4gLyAyLCBhY2MpO1xyXG59O1xyXG5cclxudmFyIGxvZyA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgdmFyIG4gPSAwO1xyXG4gIHZhciB4MiA9IHg7XHJcbiAgd2hpbGUgKHgyID49IDQwOTYpIHtcclxuICAgIG4gKz0gMTI7XHJcbiAgICB4MiAvPSA0MDk2O1xyXG4gIH1cclxuICB3aGlsZSAoeDIgPj0gMikge1xyXG4gICAgbiArPSAxO1xyXG4gICAgeDIgLz0gMjtcclxuICB9IHJldHVybiBuO1xyXG59O1xyXG5cclxudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKGRhdGEsIG4sIGMpIHtcclxuICB2YXIgaW5kZXggPSAtMTtcclxuICB2YXIgYzIgPSBjO1xyXG4gIHdoaWxlICgrK2luZGV4IDwgNikge1xyXG4gICAgYzIgKz0gbiAqIGRhdGFbaW5kZXhdO1xyXG4gICAgZGF0YVtpbmRleF0gPSBjMiAlIDFlNztcclxuICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xyXG4gIH1cclxufTtcclxuXHJcbnZhciBkaXZpZGUgPSBmdW5jdGlvbiAoZGF0YSwgbikge1xyXG4gIHZhciBpbmRleCA9IDY7XHJcbiAgdmFyIGMgPSAwO1xyXG4gIHdoaWxlICgtLWluZGV4ID49IDApIHtcclxuICAgIGMgKz0gZGF0YVtpbmRleF07XHJcbiAgICBkYXRhW2luZGV4XSA9IGZsb29yKGMgLyBuKTtcclxuICAgIGMgPSAoYyAlIG4pICogMWU3O1xyXG4gIH1cclxufTtcclxuXHJcbnZhciBkYXRhVG9TdHJpbmcgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gIHZhciBpbmRleCA9IDY7XHJcbiAgdmFyIHMgPSAnJztcclxuICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XHJcbiAgICBpZiAocyAhPT0gJycgfHwgaW5kZXggPT09IDAgfHwgZGF0YVtpbmRleF0gIT09IDApIHtcclxuICAgICAgdmFyIHQgPSAkU3RyaW5nKGRhdGFbaW5kZXhdKTtcclxuICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQoJzAnLCA3IC0gdC5sZW5ndGgpICsgdDtcclxuICAgIH1cclxuICB9IHJldHVybiBzO1xyXG59O1xyXG5cclxudmFyIEZPUkNFRCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmF0aXZlVG9GaXhlZCgwLjAwMDA4LCAzKSAhPT0gJzAuMDAwJyB8fFxyXG4gICAgbmF0aXZlVG9GaXhlZCgwLjksIDApICE9PSAnMScgfHxcclxuICAgIG5hdGl2ZVRvRml4ZWQoMS4yNTUsIDIpICE9PSAnMS4yNScgfHxcclxuICAgIG5hdGl2ZVRvRml4ZWQoMTAwMDAwMDAwMDAwMDAwMDEyOC4wLCAwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnO1xyXG59KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xyXG4gIC8vIFY4IH4gQW5kcm9pZCA0LjMtXHJcbiAgbmF0aXZlVG9GaXhlZCh7fSk7XHJcbn0pO1xyXG5cclxuLy8gYE51bWJlci5wcm90b3R5cGUudG9GaXhlZGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbnVtYmVyLnByb3RvdHlwZS50b2ZpeGVkXHJcbiQoeyB0YXJnZXQ6ICdOdW1iZXInLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xyXG4gIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpIHtcclxuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XHJcbiAgICB2YXIgZnJhY3REaWdpdHMgPSB0b0ludGVnZXJPckluZmluaXR5KGZyYWN0aW9uRGlnaXRzKTtcclxuICAgIHZhciBkYXRhID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gICAgdmFyIHNpZ24gPSAnJztcclxuICAgIHZhciByZXN1bHQgPSAnMCc7XHJcbiAgICB2YXIgZSwgeiwgaiwgaztcclxuXHJcbiAgICAvLyBUT0RPOiBFUzIwMTggaW5jcmVhc2VkIHRoZSBtYXhpbXVtIG51bWJlciBvZiBmcmFjdGlvbiBkaWdpdHMgdG8gMTAwLCBuZWVkIHRvIGltcHJvdmUgdGhlIGltcGxlbWVudGF0aW9uXHJcbiAgICBpZiAoZnJhY3REaWdpdHMgPCAwIHx8IGZyYWN0RGlnaXRzID4gMjApIHRocm93ICRSYW5nZUVycm9yKCdJbmNvcnJlY3QgZnJhY3Rpb24gZGlnaXRzJyk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xyXG4gICAgaWYgKG51bWJlciAhPSBudW1iZXIpIHJldHVybiAnTmFOJztcclxuICAgIGlmIChudW1iZXIgPD0gLTFlMjEgfHwgbnVtYmVyID49IDFlMjEpIHJldHVybiAkU3RyaW5nKG51bWJlcik7XHJcbiAgICBpZiAobnVtYmVyIDwgMCkge1xyXG4gICAgICBzaWduID0gJy0nO1xyXG4gICAgICBudW1iZXIgPSAtbnVtYmVyO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWJlciA+IDFlLTIxKSB7XHJcbiAgICAgIGUgPSBsb2cobnVtYmVyICogcG93KDIsIDY5LCAxKSkgLSA2OTtcclxuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcclxuICAgICAgeiAqPSAweDEwMDAwMDAwMDAwMDAwO1xyXG4gICAgICBlID0gNTIgLSBlO1xyXG4gICAgICBpZiAoZSA+IDApIHtcclxuICAgICAgICBtdWx0aXBseShkYXRhLCAwLCB6KTtcclxuICAgICAgICBqID0gZnJhY3REaWdpdHM7XHJcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xyXG4gICAgICAgICAgbXVsdGlwbHkoZGF0YSwgMWU3LCAwKTtcclxuICAgICAgICAgIGogLT0gNztcclxuICAgICAgICB9XHJcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgcG93KDEwLCBqLCAxKSwgMCk7XHJcbiAgICAgICAgaiA9IGUgLSAxO1xyXG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XHJcbiAgICAgICAgICBkaXZpZGUoZGF0YSwgMSA8PCAyMyk7XHJcbiAgICAgICAgICBqIC09IDIzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXZpZGUoZGF0YSwgMSA8PCBqKTtcclxuICAgICAgICBtdWx0aXBseShkYXRhLCAxLCAxKTtcclxuICAgICAgICBkaXZpZGUoZGF0YSwgMik7XHJcbiAgICAgICAgcmVzdWx0ID0gZGF0YVRvU3RyaW5nKGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDAsIHopO1xyXG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDEgPDwgLWUsIDApO1xyXG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKSArIHJlcGVhdCgnMCcsIGZyYWN0RGlnaXRzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGZyYWN0RGlnaXRzID4gMCkge1xyXG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcclxuICAgICAgcmVzdWx0ID0gc2lnbiArIChrIDw9IGZyYWN0RGlnaXRzXHJcbiAgICAgICAgPyAnMC4nICsgcmVwZWF0KCcwJywgZnJhY3REaWdpdHMgLSBrKSArIHJlc3VsdFxyXG4gICAgICAgIDogc3RyaW5nU2xpY2UocmVzdWx0LCAwLCBrIC0gZnJhY3REaWdpdHMpICsgJy4nICsgc3RyaW5nU2xpY2UocmVzdWx0LCBrIC0gZnJhY3REaWdpdHMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyByZXN1bHQ7XHJcbiAgICB9IHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaHRtbCIsInRhYmxlUHJldHMiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51IiwibGFuZ3VhZ2UiLCJkYXRhdGFibGVzRnJlbmNoIiwidGFibGUiLCJvcmRlciIsImFqYXgiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJjb2x1bW5zIiwibmFtZSIsImRhdGEiLCJjbGFzc05hbWUiLCJvcmRlcmFibGUiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsInJlbmRlciIsInR5cGUiLCJmdWxsIiwibWV0YSIsInZhbGlkZXIiLCJkYXRlIiwibW9tZW50IiwiZm9ybWF0Iiwibm9tIiwicHJlbm9tIiwicGFyc2VGbG9hdCIsIm1vbnRhbnQiLCJzZW5zIiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImFjdGl2ZSIsImJ1bGxldGluX2NvZGUiLCJidWxsZXRpbl9pZCIsIm9uIiwiaGlkZSIsIm1vZGFsIiwiZWNoZWFuY2VzIiwiZW1wbG95ZSIsIkpTT04iLCJwYXJzZSIsImZpbmQiLCJhdHRyIiwidmFsIiwibWF0cmljdWxlIiwiY29udHJhY3QiLCJuYXR1cmUiLCJjaW4iLCJ0b1VwcGVyQ2FzZSIsImRhdGVfYW5jaWVubmV0ZSIsImJhcmVtZSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsImJhcmVtZV9pZCIsInJlcXVlc3QiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJub3R5ZiIsImRpc21pc3NBbGwiLCJlcnJvciIsImVsZW1lbnQiLCJhYnNlbmNlIiwic2hvdyIsInByb3AiLCJub21icmVqb3VycyIsInRvRml4ZWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwZXJpb2RlIiwibmV3RGF0ZSIsIkRhdGUiLCJnZXRNb250aCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRGdWxsWWVhciIsInVuaXF1ZUlkIiwiY29udHJhY3RfaWQiLCJpZCIsImluZGV4IiwiZmluZEluZGV4IiwicHVzaCIsInJlbmRlckVjaGVhbmNlcyIsInBhcmVudHMiLCJzcGxpY2UiLCJidXR0b24iLCJhY3RpdmVFbGVtZW50IiwibGVuZ3RoIiwib3BlbiIsImR1cmF0aW9uIiwiZGlzbWlzc2libGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic3RyaW5naWZ5IiwicG9zdCIsInN1Y2Nlc3MiLCJyZXNldCIsInJlbmRlclNlbGVjdDIiLCJtYXAiLCJlY2hlYW5jZSIsImRlc2lnbmF0aW9uIiwiZm4iLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsInVybCIsIndpbmRvdyIsImJ1bGxldGluIl0sInNvdXJjZVJvb3QiOiIifQ==