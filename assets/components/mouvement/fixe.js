$(document).ready(function  () {
    $(".block_page").html('Gestion des elements fixe')
    var tablePrets = $("#list_prets").DataTable({
        // responsive: true,
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        
        language: datatablesFrench,
    })

    var previousXhr = null;
    var table = $("#list_fixe").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: {
            url: Routing.generate('app_mouvement_fixe_list'),
            type: "get",
            beforeSend: function(jqXHR) {
                // If there's a previous jqXHR object, abort it
                if (previousXhr) {
                    previousXhr.abort();
                }
                // Store the current jqXHR object for the new request
                previousXhr = jqXHR;
            }
        },
        processing: true,
        serverSide: true,
        deferRender: true,
        responsive: true,
        scrollX: true,
        columns: [
            {name: 'p.id', data: 'id'},
            {name: 'c.id', data: 'contract_id'},
            {name: 'emp.nom', data: 'nom'},
            {name: 'r.designation', data: 'rubrique'},
            {name: 'p.created', data: 'created'},
            {name: 'p.montant', data: 'montant', className: 'text-right'},
            {orderable: false},
        ],
        columnDefs: [ 
            {
                targets: 0,
                render: function(data, type, full, meta) {
                    return `<input type="checkbox" value="${data}" class="pret_check"/>`;
                }
            },
           
            {
                targets: 4,
                render: function(data, type, full, meta) {
                    if(data && data.date) {
                        return moment(data.date).format('YYYY-MM-DD HH:mm:ss');
                    }
                    return "";
                }
            },
            {
                targets: 2,
                render: function(data, type, full, meta) {
                    return full.nom + ' ' +full.prenom;
                }
            },
            {
                targets: 5,
                render: function(data, type, full, meta) {
                    return (parseFloat(full.montant) * parseFloat(full.sens)).toLocaleString('fr-Fr', {style: 'decimal', minimumFractionDigits: 2});
                }
            },
            {
                targets: 6,
                render: function(data, type, full, meta) {
                    if(full.active == 0) {
                        return `<i role="button" class="fa-sharp fa-solid fa-circle-xmark enable text-danger" id="${full.id}"></i>`
                    } else {
                        return `<i role="button" class="fa-solid fa-circle-notch text-info disable"  id="${full.id}"></i>`
                    }
                }
            },
          
          
        ],
      
        language: datatablesFrench,
    });
    $("#ajouter").on('click', function() {
        $(".input_base").hide();
        $("#ajouter_modal").modal('show');
    })

    var fixes = [];
    var employe = null
    $('.employe_select').on('change', async function() {
        var data = JSON.parse($(this).find('option:selected').attr('data-json'));
        $("#matricule").val(data.matricule);
        $("#contract").val(data.contract);
        $("#nature").val(data.nature);
        $("#cin").val(data.cin.toUpperCase());
        $("#entrele").val(data.date_anciennete);
        $("#profile").val(data.bareme);
        console.log(data);
        try {
            const request = await axios.get(
                Routing.generate('app_mouvement_echeance_get_base', {bareme: data.bareme_id})
                )
            ;
            const response = request.data;
            $("#base").val(response);
            employe = data;

      
        } catch (error) {
            console.log(error);
            const message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
        }
        
    })
    var element = null
    $('.element_select').on('change', function() {

        var data = JSON.parse($(this).find('option:selected').attr('data-json'));
        $("#sens").val(data.sens)
        if(data.absence == 1) {
            $(".input_base").show();
            $("#montant").prop('readonly',true)
            $("#montant").val("");
        } else {
            $(".input_base").hide();
            $("#montant").prop('readonly',false)
            $("#montant").val("");
        }

        element = data;

    })
    $("#nombrejours").on('keyup', function() {
        var nombrejours = $(this).val();
        $("#montant").val("");

        if(nombrejours > 0) {
            var montant = (parseFloat(nombrejours) * parseFloat($("#base").val()) * parseFloat($("#sens").val()) ).toFixed(2)
            $("#montant").val(montant);
        }
    })
   
    $(".add_employe").on('click', function(e) {
        e.preventDefault()
        if(employe == null || element == null) {
            notyf.error('Veuillez remplir tout les champs!');
            return;
        }
        var montant = $("#montant").val();
        if(montant == '') {
            notyf.error('Veuillez remplir le montant!');
            return;
        } 
        var sens = $("#sens").val();
        montant = montant * sens;
        let uniqueId = employe.contract_id+''+element.id;
        let index = fixes.findIndex(e => e.uniqueId == uniqueId);
        if(index == "-1") {
            fixes.push({uniqueId, employe, element, montant, sens})
            
        } else {
            notyf.error('Cette combinaison existait déjà !');
            return;
        }
        renderFixes();

        console.log(fixes);

        
    })

    $("body").on('click', '.remove_echeance' ,function() {
        let id = $(this).parents('tr').attr('id');
        let index = fixes.findIndex(e => e.uniqueId == id)

        fixes.splice(index, 1);

        renderFixes();
    })


    $("#add_fixe").on('submit', async function(e) {
        e.preventDefault();
        var button = $(document.activeElement);
        if(fixes.length == 0) {
            notyf.error("Vous n'avez aucune element fixe!");
            return;
        }
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 9000000,dismissible: false
        });
        button.prop('disabled', true)


        var formData = new FormData(this);
        formData.append('fixes', JSON.stringify(fixes));

        try {
            const request = await axios.post(
                Routing.generate('app_mouvement_fixe_insert'), formData
                )
            ;
            const response = request.data;
            notyf.dismissAll();
            notyf.success(response);

            element = null;
            employe = null;
            button.prop('disabled', false)

            fixes = [];
            
            $("#ajouter_modal").modal('hide');
            renderFixes();
            $("#add_fixe")[0].reset()
            renderSelect2();
            
            
            
        } catch (error) {
            button.prop('disabled', false)
            console.log(error);
            const message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
        }


    })
    

    
    const renderFixes = () => {
        var html = "";
        fixes.map(fixe => {
            html += `
                <tr id="${fixe.uniqueId}">
                    <td>${fixe.employe.nom.toUpperCase()}  ${fixe.employe.prenom.toUpperCase()}</td>
                    <td>${fixe.employe.matricule}</td>
                    <td>${fixe.employe.contract}</td>
                    <td>${fixe.element.designation}</td>
                    <td>${parseFloat(fixe.montant * fixe.sens).toLocaleString('fr-Fr', {style: 'decimal', minimumFractionDigits: 2})}</td>
                    <td><i role="button" class="fa fa-trash text-danger remove_echeance"></i></td>
                </tr>
            `
        
        });
        if ($.fn.DataTable.isDataTable("#list_prets")) {
            $('#list_prets').DataTable().clear().destroy();
        }
        $("#list_prets .list_prets_data").html(html);
        tablePrets = $("#list_prets").DataTable({
            // responsive: true,
            lengthMenu: [
                [10, 15, 25, 50, 100, 20000000000000],
                [10, 15, 25, 50, 100, "All"],
            ],
           
            language: {
                url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
            },
        })


    }

    $("body").on('click', ".disable", async function() {
        try {
            notyf.open({
                type:"info",
                message: "En cours...",
                duration: 9000000,dismissible: false
            });
            const request = await axios.get(
                Routing.generate('app_mouvement_fixe_statut', {element: $(this).attr('id'), statut: 0}),
                )
            ;
            const response = request.data;
            table.ajax.reload( null, false);
            notyf.dismissAll();
        } catch (error) {
            
        }
    })
    $("body").on('click', ".enable", async function() {
        try {
            notyf.open({
                type:"info",
                message: "En cours...",
                duration: 9000000,dismissible: false
            });
            const request = await axios.get(
                Routing.generate('app_mouvement_fixe_statut', {element: $(this).attr('id'), statut: 1}),
                )
            ;
            const response = request.data;
            table.ajax.reload( null, false);
            notyf.dismissAll();


        } catch (error) {
            
        }
    })
})