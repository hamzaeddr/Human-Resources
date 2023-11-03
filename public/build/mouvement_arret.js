(self["webpackChunk"] = self["webpackChunk"] || []).push([["mouvement_arret"],{

/***/ "./assets/components/mouvement/arret.js":
/*!**********************************************!*\
  !*** ./assets/components/mouvement/arret.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

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

$(document).ready(function () {
  var employeId = 0;
  var $table = '';
  table(); // $("#ajouter_modal").modal('show');
  // $('#parret_datatable').DataTable();

  var previousXhr = null;

  function removeAllRows() {
    var table = $('#editable-table').DataTable();
    table.clear().draw();
  }

  function populateTable(data) {
    // Get a reference to the DataTable
    var $table = $('#editable-table').DataTable(); // Clear the existing data from the DataTable

    $table.clear().draw(); // Loop through the data and create rows

    data.forEach(function (row) {
      var $row = $('<tr>');
      $row.append('<td contenteditable="true">' + row.start + '</td>');
      $row.append('<td contenteditable="true">' + row.end + '</td>');
      $row.append('<td contenteditable="true">' + row.days + '</td>');
      $row.append('<td contenteditable="true">' + row.period_my + '</td>');
      $row.append('<td contenteditable="true" hidden>' + row.period + '</td>');
      $row.append('<td><i class="fas fa-trash delete-icon"></i></td>'); // Add more columns as needed

      $table.row.add($row).draw(false); // Add a row and redraw without sorting
    }); // If you have additional DataTable options, set them here

    $table.page('first').draw('page');
    $table.search('').columns().search('').draw();
  }

  $('#editable-table tbody ').on('click', '.delete-icon', function () {
    var row = $('#editable-table').DataTable().row($(this).parents('tr'));
    row.remove().draw();
  });
  $('.add_arret_btn').on('click', function () {
    var editedData = [];
    var id_cnt = $('#id_emp_arret').val();
    var motif = $('.motif_id').val();
    var datedebut = $('#datedebut').val();
    var datefin = $('.datefin').val();
    var datereprise = $('.datereprise').val();
    $('#editable-table tbody tr').each(function () {
      var $row = $(this);
      var column1 = $row.find('td:eq(0)').text();
      var column2 = $row.find('td:eq(1)').text();
      var column3 = $row.find('td:eq(2)').text();
      var column4 = $row.find('td:eq(3)').text(); // Get other columns if necessary

      editedData.push({
        start: column1,
        end: column2,
        days: column3,
        period: column4
      });
    });
    $.ajax({
      type: 'POST',
      url: Routing.generate('arret_traitement_verification'),
      data: {
        editedData: editedData,
        'id_emp_arret': id_cnt,
        'motif_id': motif,
        'datedebut': datedebut,
        'datefin': datefin,
        'datereprise': datereprise
      },
      success: function success(response) {
        // Handle the response from the final processing
        removeAllRows(); // }
        // $table.DataTable().destroy();

        $("#ajouter_modal").modal('hide');
        table();
      },
      error: function error() {
        // Handle errors and hide the spinner in case of failure
        notyf.error('Merci de vérifier le nombre de jours de cet employé pour résoudre le problème !!');
      }
    });
  });

  function table() {
    if ($.fn.DataTable.isDataTable('#parret_datatable')) {
      $('#parret_datatable').DataTable().destroy();
    }

    var table = $('#parret_datatable').DataTable({
      order: [[0, "desc"]],
      ajax: {
        url: Routing.generate('app_parret_aff'),
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
        name: 'a.id',
        data: 'arret_id'
      }, {
        name: 'p.id',
        data: 'employe_id'
      }, {
        name: 'p.code',
        data: 'matricule'
      }, {
        name: 'p.nom',
        data: 'nom'
      }, {
        name: 'p.prenom',
        data: 'prenom'
      }, {
        name: 'm.designation',
        data: 'motif'
      }, {
        name: 'a.DateDebut',
        data: 'date_debut'
      }, {
        name: 'a.dateFin',
        data: 'date_fin'
      }, {
        name: 'a.dateReprise',
        data: 'date_rep'
      }, {
        orderable: false,
        searchable: false,
        data: 'arret_id'
      }],
      columnDefs: [{
        targets: 6,
        render: function render(data, type, full, meta) {
          if (data.date) {
            return moment(data.date).format('YYYY-MM-DD HH:mm:ss');
          }

          return "";
        }
      }, {
        targets: 7,
        render: function render(data, type, full, meta) {
          if (data.date) {
            return moment(data.date).format('YYYY-MM-DD HH:mm:ss');
          }

          return "";
        }
      }, {
        targets: 8,
        render: function render(data, type, full, meta) {
          if (data.date) {
            return moment(data.date).format('YYYY-MM-DD HH:mm:ss');
          }

          return "";
        }
      }, {
        targets: 9,
        render: function render(data, type, full, meta) {
          return "<i class='fa fa-eye text-info arret_details' role=\"button\" data-id=\"".concat(data, "\"></i>");
        }
      }],
      lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
      language: datatablesFrench
    });
  }

  $(document).on('change', '.employe_arret', function () {
    var selectedOption = $(this).find('option:selected'); // Get the values of data-employe and value attributes

    employeId = selectedOption.data('employe');
    var optionValue = selectedOption.val(); // Do something with the data

    console.log('Employe ID:', employeId);
    console.log('Option Value:', optionValue); //data 

    $('#id_emp_arret').val(employeId);
  });
  $(document).on('change', '#upload_file_arret', function () {
    var period_arrt = $('#periode_arrt').val();
    Swal.fire({
      title: 'Vous voulez vraiment importer ce fichier excel ?',
      showCancelButton: true,
      position: 'top',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Valider'
    }).then( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(result) {
        var formData, request, message;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!result.isConfirmed) {
                  _context.next = 23;
                  break;
                }

                notyf.open({
                  type: "info",
                  message: "En cours...",
                  duration: 9000000,
                  dismissible: false
                });
                formData = new FormData();
                formData.append("file", $("#upload_file_arret").prop("files")[0]);
                formData.append("period", period_arrt);
                _context.prev = 5;
                _context.next = 8;
                return axios.post(Routing.generate("app_mouvement_arret_mass_upload"), formData);

              case 8:
                request = _context.sent;
                $("#upload_file_arret").val(null);
                $("#ajouter_modal").modal('hide');
                notyf.dismissAll();
                table();
                _context.next = 21;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](5);
                console.log(_context.t0, _context.t0.response);
                message = _context.t0.response.data;
                notyf.error(message);
                $("#upload_file_arret").val(null);

              case 21:
                _context.next = 24;
                break;

              case 23:
                $("#upload_file_arret").val(null);

              case 24:
                setTimeout(function () {
                  notyf.dismissAll();
                }, 5000);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 15]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
  $(document).on('click', '.add_arret', function () {
    var motif_id = $('.motif_id').val();
    var datedebut = $('.datedebut').val();
    var datefin = $('.datefin').val();
    var datereprise = $('.datereprise').val();
    $.ajax({
      type: "POST",
      url: Routing.generate('app_mouvement_arret_traitement'),
      data: {
        'id_emp_arret': employeId,
        'motif_id': motif_id,
        'datedebut': datedebut,
        'datefin': datefin,
        'datereprise': datereprise
      },
      beforeSend: function beforeSend() {},
      success: function success(data) {
        populateTable(data); //  hide_show('#modal_modifier #plus_info_update','#modal_modifier #plus_info_update','civicivil','#modal_modifier #etatcivil_update');

        $("body .btnclose").click(); //    notyf.dismissAll();
      },
      error: function error(data) {
        $("body .btnclose").click();
      }
    });
  });
  $(document).on('click', '#ajouter', function () {
    $("#ajouter_modal").modal('show');
  });
  $(".upload_file_button").on('click', function () {
    $("#upload_file_arret").trigger('click');
  });
  $(".arret_canva").on('click', function () {
    // Define the URL you want to open
    var urlToOpen = Routing.generate('app_mouvement_arret_mass_canvas'); // Use window.location to open the URL

    window.location.href = urlToOpen;
  });
  $(".arret_motif").on('click', function () {
    // Define the URL you want to open
    var urlToOpen = Routing.generate('app_mouvement_arret_mass_canvas_motif'); // Use window.location to open the URL

    window.location.href = urlToOpen;
  });
  $(".arret_motif").on('click', function () {
    // Define the URL you want to open
    var urlToOpen = Routing.generate('app_mouvement_arret_mass_canvas_motif'); // Use window.location to open the URL

    window.location.href = urlToOpen;
  });
  $("body").on('click', ".arret_details", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var code, request, response, message;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            notyf.open({
              type: "info",
              message: "En cours...",
              duration: 9000000,
              dismissible: false
            });
            code = $(this).attr('data-id');
            _context2.prev = 2;
            _context2.next = 5;
            return axios.post(Routing.generate('app_parret_aff_details', {
              code: code
            }));

          case 5:
            request = _context2.sent;
            response = request.data;
            $('#modal_arret_detail').find('.modal-body').html(response);
            $('#modal_arret_detail').find('#list_arret_details').DataTable({
              lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
              language: {
                url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
              }
            });
            $('#modal_arret_detail').modal('show');
            notyf.dismissAll();
            _context2.next = 19;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);
            message = _context2.t0.response.data;
            notyf.dismissAll();
            notyf.error(message);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 13]]);
  })));
});

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-8f6080","vendors-node_modules_core-js_modules_es_string_search_js-node_modules_core-js_modules_web_timers_js"], () => (__webpack_exec__("./assets/components/mouvement/arret.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU47WUFDQXJELEtBQUssQ0FBQ0QsS0FBTixDQUFZNkMsT0FBWjs7VUFuQ2dDO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLENBQXhDO0FBeUNDLENBcFhEOzs7Ozs7Ozs7OztBQ0FhO0FBQ2IsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakJhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLHFIQUE0QztBQUN4RCx1QkFBdUIsbUJBQU8sQ0FBQywrRkFBaUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzQkFBc0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBbUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL21vdXZlbWVudC9hcnJldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgdmFyIGVtcGxveWVJZCA9IDA7XHJcbiAgICB2YXIgJHRhYmxlID0gJyc7XHJcbiAgICB0YWJsZSgpO1xyXG5cclxuLy8gJChcIiNham91dGVyX21vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbi8vICQoJyNwYXJyZXRfZGF0YXRhYmxlJykuRGF0YVRhYmxlKCk7XHJcbnZhciBwcmV2aW91c1hociA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxSb3dzKCkge1xyXG4gICAgdmFyIHRhYmxlID0gJCgnI2VkaXRhYmxlLXRhYmxlJykuRGF0YVRhYmxlKCk7XHJcbiAgICB0YWJsZS5jbGVhcigpLmRyYXcoKTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlVGFibGUoZGF0YSkge1xyXG4gICAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBEYXRhVGFibGVcclxuICAgIHZhciAkdGFibGUgPSAkKCcjZWRpdGFibGUtdGFibGUnKS5EYXRhVGFibGUoKTtcclxuXHJcbiAgICAvLyBDbGVhciB0aGUgZXhpc3RpbmcgZGF0YSBmcm9tIHRoZSBEYXRhVGFibGVcclxuICAgICR0YWJsZS5jbGVhcigpLmRyYXcoKTtcclxuXHJcbiAgICAvLyBMb29wIHRocm91Z2ggdGhlIGRhdGEgYW5kIGNyZWF0ZSByb3dzXHJcbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgIHZhciAkcm93ID0gJCgnPHRyPicpO1xyXG4gICAgICAgICRyb3cuYXBwZW5kKCc8dGQgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPicgKyByb3cuc3RhcnQgKyAnPC90ZD4nKTtcclxuICAgICAgICAkcm93LmFwcGVuZCgnPHRkIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj4nICsgcm93LmVuZCArICc8L3RkPicpO1xyXG4gICAgICAgICRyb3cuYXBwZW5kKCc8dGQgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPicgKyByb3cuZGF5cyArICc8L3RkPicpO1xyXG4gICAgICAgICRyb3cuYXBwZW5kKCc8dGQgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPicgKyByb3cucGVyaW9kX215ICsgJzwvdGQ+Jyk7XHJcbiAgICAgICAgJHJvdy5hcHBlbmQoJzx0ZCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgaGlkZGVuPicgKyByb3cucGVyaW9kICsgJzwvdGQ+Jyk7XHJcbiAgICAgICAgJHJvdy5hcHBlbmQoJzx0ZD48aSBjbGFzcz1cImZhcyBmYS10cmFzaCBkZWxldGUtaWNvblwiPjwvaT48L3RkPicpO1xyXG4gICAgICAgIC8vIEFkZCBtb3JlIGNvbHVtbnMgYXMgbmVlZGVkXHJcblxyXG4gICAgICAgICR0YWJsZS5yb3cuYWRkKCRyb3cpLmRyYXcoZmFsc2UpOyAvLyBBZGQgYSByb3cgYW5kIHJlZHJhdyB3aXRob3V0IHNvcnRpbmdcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIElmIHlvdSBoYXZlIGFkZGl0aW9uYWwgRGF0YVRhYmxlIG9wdGlvbnMsIHNldCB0aGVtIGhlcmVcclxuICAgICR0YWJsZS5wYWdlKCdmaXJzdCcpLmRyYXcoJ3BhZ2UnKTtcclxuICAgICR0YWJsZS5zZWFyY2goJycpLmNvbHVtbnMoKS5zZWFyY2goJycpLmRyYXcoKTtcclxufVxyXG5cclxuXHJcbiQoJyNlZGl0YWJsZS10YWJsZSB0Ym9keSAnKS5vbignY2xpY2snLCAnLmRlbGV0ZS1pY29uJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIFxyXG4gICAgdmFyIHJvdyA9ICQoJyNlZGl0YWJsZS10YWJsZScpLkRhdGFUYWJsZSgpLnJvdygkKHRoaXMpLnBhcmVudHMoJ3RyJykpO1xyXG4gICAgcm93LnJlbW92ZSgpLmRyYXcoKTtcclxufSk7XHJcblxyXG4kKCcuYWRkX2FycmV0X2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlZGl0ZWREYXRhID0gW107XHJcbiAgICB2YXIgaWRfY250ID0gJCgnI2lkX2VtcF9hcnJldCcpLnZhbCgpO1xyXG4gICAgdmFyIG1vdGlmID0gICQoJy5tb3RpZl9pZCcpLnZhbCgpO1xyXG4gICAgdmFyIGRhdGVkZWJ1dCA9ICAkKCcjZGF0ZWRlYnV0JykudmFsKCk7XHJcbiAgICB2YXIgZGF0ZWZpbiA9ICAkKCcuZGF0ZWZpbicpLnZhbCgpO1xyXG4gICAgdmFyIGRhdGVyZXByaXNlID0gICQoJy5kYXRlcmVwcmlzZScpLnZhbCgpO1xyXG4gIFxyXG4gICAgJCgnI2VkaXRhYmxlLXRhYmxlIHRib2R5IHRyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICRyb3cgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBjb2x1bW4xID0gJHJvdy5maW5kKCd0ZDplcSgwKScpLnRleHQoKTtcclxuICAgICAgICB2YXIgY29sdW1uMiA9ICRyb3cuZmluZCgndGQ6ZXEoMSknKS50ZXh0KCk7XHJcbiAgICAgICAgdmFyIGNvbHVtbjMgPSAkcm93LmZpbmQoJ3RkOmVxKDIpJykudGV4dCgpO1xyXG4gICAgICAgIHZhciBjb2x1bW40ID0gJHJvdy5maW5kKCd0ZDplcSgzKScpLnRleHQoKTtcclxuICAgICAgICAvLyBHZXQgb3RoZXIgY29sdW1ucyBpZiBuZWNlc3NhcnlcclxuXHJcbiAgICAgICAgZWRpdGVkRGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnQ6IGNvbHVtbjEsXHJcbiAgICAgICAgICAgIGVuZDogY29sdW1uMixcclxuICAgICAgICAgICAgZGF5czogY29sdW1uMyxcclxuICAgICAgICAgICAgcGVyaW9kOiBjb2x1bW40LFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FycmV0X3RyYWl0ZW1lbnRfdmVyaWZpY2F0aW9uJyksXHJcbiAgICAgICAgZGF0YTogeyBlZGl0ZWREYXRhOiBlZGl0ZWREYXRhLFxyXG4gICAgICAgICAgICAnaWRfZW1wX2FycmV0JzppZF9jbnQsXHJcbiAgICAgICAgICAgICdtb3RpZl9pZCc6bW90aWYsXHJcbiAgICAgICAgICAgICdkYXRlZGVidXQnOmRhdGVkZWJ1dCxcclxuICAgICAgICAgICAgJ2RhdGVmaW4nOmRhdGVmaW4sXHJcbiAgICAgICAgICAgICdkYXRlcmVwcmlzZSc6ZGF0ZXJlcHJpc2UsIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGZyb20gdGhlIGZpbmFsIHByb2Nlc3NpbmdcclxuICAgICAgICAgICAgcmVtb3ZlQWxsUm93cygpO1xyXG5cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyAkdGFibGUuRGF0YVRhYmxlKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAkKFwiI2Fqb3V0ZXJfbW9kYWxcIikubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgdGFibGUoKTtcclxufSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzIGFuZCBoaWRlIHRoZSBzcGlubmVyIGluIGNhc2Ugb2YgZmFpbHVyZVxyXG4gICAgICAgICAgICBub3R5Zi5lcnJvcignTWVyY2kgZGUgdsOpcmlmaWVyIGxlIG5vbWJyZSBkZSBqb3VycyBkZSBjZXQgZW1wbG95w6kgcG91ciByw6lzb3VkcmUgbGUgcHJvYmzDqG1lICEhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5mdW5jdGlvbiB0YWJsZSgpIHtcclxuXHJcbiAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJyNwYXJyZXRfZGF0YXRhYmxlJykpIHtcclxuICAgICAgICAkKCcjcGFycmV0X2RhdGF0YWJsZScpLkRhdGFUYWJsZSgpLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbnZhciB0YWJsZSA9ICAkKCcjcGFycmV0X2RhdGF0YWJsZScpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIFxyXG4gICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9wYXJyZXRfYWZmJyksXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbihqcVhIUikge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcHJldmlvdXMganFYSFIgb2JqZWN0LCBhYm9ydCBpdFxyXG4gICAgICAgICAgICBpZiAocHJldmlvdXNYaHIpIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzWGhyLmFib3J0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQganFYSFIgb2JqZWN0IGZvciB0aGUgbmV3IHJlcXVlc3RcclxuICAgICAgICAgICAgcHJldmlvdXNYaHIgPSBqcVhIUjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgY29sdW1uczogW1xyXG5cclxuICAgICAgICB7bmFtZTogJ2EuaWQnLCBkYXRhOiAnYXJyZXRfaWQnfSxcclxuICAgICAgICB7bmFtZTogJ3AuaWQnLCBkYXRhOiAnZW1wbG95ZV9pZCd9LFxyXG4gICAgICAgIHtuYW1lOiAncC5jb2RlJywgZGF0YTogJ21hdHJpY3VsZSd9LFxyXG4gICAgICAgIHtuYW1lOiAncC5ub20nLCBkYXRhOiAnbm9tJ30sXHJcbiAgICAgICAge25hbWU6ICdwLnByZW5vbScsIGRhdGE6ICdwcmVub20nfSxcclxuICAgICAgICB7bmFtZTogJ20uZGVzaWduYXRpb24nLCBkYXRhOiAnbW90aWYnfSxcclxuICAgICAgICB7bmFtZTogJ2EuRGF0ZURlYnV0JywgZGF0YTogJ2RhdGVfZGVidXQnfSxcclxuICAgICAgICB7bmFtZTogJ2EuZGF0ZUZpbicsIGRhdGE6ICdkYXRlX2Zpbid9LFxyXG4gICAgICAgIHtuYW1lOiAnYS5kYXRlUmVwcmlzZScsIGRhdGE6ICdkYXRlX3JlcCd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IGZhbHNlICwgc2VhcmNoYWJsZTogZmFsc2UsIGRhdGE6ICdhcnJldF9pZCd9IFxyXG5cclxuICAgIF0sXHJcbiAgXHJcblxyXG4gICAgY29sdW1uRGVmczogWyBcclxuICAgICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFyZ2V0czogNixcclxuICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGEuZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0YXJnZXRzOiA3LFxyXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0YS5kYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IDgsXHJcbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRhLmRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFyZ2V0czogOSxcclxuICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxpIGNsYXNzPSdmYSBmYS1leWUgdGV4dC1pbmZvIGFycmV0X2RldGFpbHMnIHJvbGU9XCJidXR0b25cIiBkYXRhLWlkPVwiJHtkYXRhfVwiPjwvaT5gXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuXHJcbiAgICBcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgIF0sXHJcbiAgICBsYW5ndWFnZTogZGF0YXRhYmxlc0ZyZW5jaCxcclxufSk7XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmVtcGxveWVfYXJyZXQnLCAgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSB2YWx1ZXMgb2YgZGF0YS1lbXBsb3llIGFuZCB2YWx1ZSBhdHRyaWJ1dGVzXHJcbiAgICAgICAgZW1wbG95ZUlkID0gc2VsZWN0ZWRPcHRpb24uZGF0YSgnZW1wbG95ZScpO1xyXG4gICAgICAgIHZhciBvcHRpb25WYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLnZhbCgpO1xyXG5cclxuICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgZGF0YVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFbXBsb3llIElEOicsIGVtcGxveWVJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ09wdGlvbiBWYWx1ZTonLCBvcHRpb25WYWx1ZSk7XHJcbi8vZGF0YSBcclxuICAgICAgICAkKCcjaWRfZW1wX2FycmV0JykudmFsKGVtcGxveWVJZCk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjdXBsb2FkX2ZpbGVfYXJyZXQnLCAgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgcGVyaW9kX2FycnQgPSAkKCcjcGVyaW9kZV9hcnJ0JykudmFsKCk7XHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiAnVm91cyB2b3VsZXogdnJhaW1lbnQgaW1wb3J0ZXIgY2UgZmljaGllciBleGNlbCA/JyxcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnVmFsaWRlcidcclxuICAgIH0pLnRoZW4oYXN5bmMgKHJlc3VsdCkgID0+ICB7XHJcbiAgICAvKiBSZWFkIG1vcmUgYWJvdXQgaXNDb25maXJtZWQsIGlzRGVuaWVkIGJlbG93ICovXHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICBub3R5Zi5vcGVuKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6XCJpbmZvXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogOTAwMDAwMCxkaXNtaXNzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCAkKFwiI3VwbG9hZF9maWxlX2FycmV0XCIpLnByb3AoXCJmaWxlc1wiKVswXSlcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGVyaW9kXCIsIHBlcmlvZF9hcnJ0KVxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKFwiYXBwX21vdXZlbWVudF9hcnJldF9tYXNzX3VwbG9hZFwiKSwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgJChcIiN1cGxvYWRfZmlsZV9hcnJldFwiKS52YWwobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Fqb3V0ZXJfbW9kYWxcIikubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBub3R5Zi5kaXNtaXNzQWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0YWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIG5vdHlmLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgJChcIiN1cGxvYWRfZmlsZV9hcnJldFwiKS52YWwobnVsbCk7XHJcblxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjdXBsb2FkX2ZpbGVfYXJyZXRcIikudmFsKG51bGwpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG5cclxuICAgICAgICB9LCA1MDAwKTtcclxuXHJcbiAgICB9KVxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkX2FycmV0JywgIGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIG1vdGlmX2lkID0gICQoJy5tb3RpZl9pZCcpLnZhbCgpO1xyXG4gICAgICAgIHZhciBkYXRlZGVidXQgPSAgJCgnLmRhdGVkZWJ1dCcpLnZhbCgpO1xyXG4gICAgICAgIHZhciBkYXRlZmluID0gICQoJy5kYXRlZmluJykudmFsKCk7XHJcbiAgICAgICAgdmFyIGRhdGVyZXByaXNlID0gICQoJy5kYXRlcmVwcmlzZScpLnZhbCgpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfbW91dmVtZW50X2FycmV0X3RyYWl0ZW1lbnQnKSxcclxuICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAnaWRfZW1wX2FycmV0JzplbXBsb3llSWQsXHJcbiAgICAgICAgICAgICAgICAnbW90aWZfaWQnOm1vdGlmX2lkLFxyXG4gICAgICAgICAgICAgICAgJ2RhdGVkZWJ1dCc6ZGF0ZWRlYnV0LFxyXG4gICAgICAgICAgICAgICAgJ2RhdGVmaW4nOmRhdGVmaW4sXHJcbiAgICAgICAgICAgICAgICAnZGF0ZXJlcHJpc2UnOmRhdGVyZXByaXNlLFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVRhYmxlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gIGhpZGVfc2hvdygnI21vZGFsX21vZGlmaWVyICNwbHVzX2luZm9fdXBkYXRlJywnI21vZGFsX21vZGlmaWVyICNwbHVzX2luZm9fdXBkYXRlJywnY2l2aWNpdmlsJywnI21vZGFsX21vZGlmaWVyICNldGF0Y2l2aWxfdXBkYXRlJyk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSAuYnRuY2xvc2VcIikuY2xpY2soKTtcclxuXHJcbiAgICAgICAgLy8gICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH0sZXJyb3I6ZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSAuYnRuY2xvc2VcIikuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgXHJcbiAgICAgIFxyXG59KTtcclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNham91dGVyJywgIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICQoXCIjYWpvdXRlcl9tb2RhbFwiKS5tb2RhbCgnc2hvdycpO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuJChcIi51cGxvYWRfZmlsZV9idXR0b25cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiI3VwbG9hZF9maWxlX2FycmV0XCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbn0pXHJcblxyXG4kKFwiLmFycmV0X2NhbnZhXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gRGVmaW5lIHRoZSBVUkwgeW91IHdhbnQgdG8gb3BlblxyXG4gICAgdmFyIHVybFRvT3BlbiA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9tb3V2ZW1lbnRfYXJyZXRfbWFzc19jYW52YXMnKTtcclxuXHJcbiAgICAvLyBVc2Ugd2luZG93LmxvY2F0aW9uIHRvIG9wZW4gdGhlIFVSTFxyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxUb09wZW47XHJcbn0pO1xyXG5cclxuJChcIi5hcnJldF9tb3RpZlwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIC8vIERlZmluZSB0aGUgVVJMIHlvdSB3YW50IHRvIG9wZW5cclxuICAgIHZhciB1cmxUb09wZW4gPSBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfbW91dmVtZW50X2FycmV0X21hc3NfY2FudmFzX21vdGlmJyk7XHJcblxyXG4gICAgLy8gVXNlIHdpbmRvdy5sb2NhdGlvbiB0byBvcGVuIHRoZSBVUkxcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsVG9PcGVuO1xyXG59KTtcclxuXHJcbiQoXCIuYXJyZXRfbW90aWZcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBEZWZpbmUgdGhlIFVSTCB5b3Ugd2FudCB0byBvcGVuXHJcbiAgICB2YXIgdXJsVG9PcGVuID0gUm91dGluZy5nZW5lcmF0ZSgnYXBwX21vdXZlbWVudF9hcnJldF9tYXNzX2NhbnZhc19tb3RpZicpO1xyXG5cclxuICAgIC8vIFVzZSB3aW5kb3cubG9jYXRpb24gdG8gb3BlbiB0aGUgVVJMXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFRvT3BlbjtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsIFwiLmFycmV0X2RldGFpbHNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgbm90eWYub3Blbih7XHJcbiAgICAgICAgdHlwZTpcImluZm9cIixcclxuICAgICAgICBtZXNzYWdlOiBcIkVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgZHVyYXRpb246IDkwMDAwMDAsXHJcbiAgICAgICAgZGlzbWlzc2libGU6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIHZhciBjb2RlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcGFycmV0X2FmZl9kZXRhaWxzJywge2NvZGV9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG5cclxuICAgICAgICAkKCcjbW9kYWxfYXJyZXRfZGV0YWlsJykuZmluZCgnLm1vZGFsLWJvZHknKS5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAkKCcjbW9kYWxfYXJyZXRfZGV0YWlsJykuZmluZCgnI2xpc3RfYXJyZXRfZGV0YWlscycpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnI21vZGFsX2FycmV0X2RldGFpbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgbm90eWYuZGlzbWlzc0FsbCgpO1xyXG4gIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIG5vdHlmLmRpc21pc3NBbGwoKTtcclxuICAgICAgICBub3R5Zi5lcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5cclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XHJcblxyXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyIGltcGxlbWVudGF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC5wcm90b3R5cGUuZmxhZ3NcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcclxuICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgaWYgKHRoYXQuaGFzSW5kaWNlcykgcmVzdWx0ICs9ICdkJztcclxuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XHJcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcclxuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XHJcbiAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xyXG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XHJcbiAgaWYgKHRoYXQudW5pY29kZVNldHMpIHJlc3VsdCArPSAndic7XHJcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xyXG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcclxuXHJcbnZhciBGSU5EID0gJ2ZpbmQnO1xyXG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xyXG5cclxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcclxuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcclxuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XHJcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXHJcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImVtcGxveWVJZCIsIiR0YWJsZSIsInRhYmxlIiwicHJldmlvdXNYaHIiLCJyZW1vdmVBbGxSb3dzIiwiRGF0YVRhYmxlIiwiY2xlYXIiLCJkcmF3IiwicG9wdWxhdGVUYWJsZSIsImRhdGEiLCJmb3JFYWNoIiwicm93IiwiJHJvdyIsImFwcGVuZCIsInN0YXJ0IiwiZW5kIiwiZGF5cyIsInBlcmlvZF9teSIsInBlcmlvZCIsImFkZCIsInBhZ2UiLCJzZWFyY2giLCJjb2x1bW5zIiwib24iLCJwYXJlbnRzIiwicmVtb3ZlIiwiZWRpdGVkRGF0YSIsImlkX2NudCIsInZhbCIsIm1vdGlmIiwiZGF0ZWRlYnV0IiwiZGF0ZWZpbiIsImRhdGVyZXByaXNlIiwiZWFjaCIsImNvbHVtbjEiLCJmaW5kIiwidGV4dCIsImNvbHVtbjIiLCJjb2x1bW4zIiwiY29sdW1uNCIsInB1c2giLCJhamF4IiwidHlwZSIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsIm1vZGFsIiwiZXJyb3IiLCJub3R5ZiIsImZuIiwiaXNEYXRhVGFibGUiLCJkZXN0cm95Iiwib3JkZXIiLCJiZWZvcmVTZW5kIiwianFYSFIiLCJhYm9ydCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJyZXNwb25zaXZlIiwic2Nyb2xsWCIsIm5hbWUiLCJvcmRlcmFibGUiLCJzZWFyY2hhYmxlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJyZW5kZXIiLCJmdWxsIiwibWV0YSIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJsZW5ndGhNZW51IiwibGFuZ3VhZ2UiLCJkYXRhdGFibGVzRnJlbmNoIiwic2VsZWN0ZWRPcHRpb24iLCJvcHRpb25WYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJwZXJpb2RfYXJydCIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJzaG93Q2FuY2VsQnV0dG9uIiwicG9zaXRpb24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwib3BlbiIsIm1lc3NhZ2UiLCJkdXJhdGlvbiIsImRpc21pc3NpYmxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInByb3AiLCJheGlvcyIsInBvc3QiLCJyZXF1ZXN0IiwiZGlzbWlzc0FsbCIsInNldFRpbWVvdXQiLCJtb3RpZl9pZCIsImNsaWNrIiwidHJpZ2dlciIsInVybFRvT3BlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNvZGUiLCJhdHRyIiwiaHRtbCJdLCJzb3VyY2VSb290IjoiIn0=