$(document).ready(function  () {
    $(".block_page").html('Gestion des echeances')
    var tablePrets = $("#list_prets").DataTable({
        // responsive: true,
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
       
        language: datatablesFrench,
    })
    var table = $("#list_echeance").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: Routing.generate('app_mouvement_echeance_list'),
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
            {name: 'periode.code', data: 'periode_code'},
            {name: 'p.montant', data: 'montant', className: 'text-right'},
            {orderable: false},
            {orderable: false},
        ],
        columnDefs: [ 
            {
                targets: 0,
                render: function(data, type, full, meta) {
                    if(full.valider == 1) {
                        return `<input type="checkbox" value="${data}" class="pret_check" disabled/>`;
                    } else {
                        return `<input type="checkbox" value="${data}" class="pret_check"/>`;
                    }
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
                targets: 6,
                render: function(data, type, full, meta) {
                    return (parseFloat(full.montant) * parseFloat(full.sens)).toLocaleString('fr-Fr', {style: 'decimal', minimumFractionDigits: 2});
                }
            },
            {
                targets: 7,
                render: function(data, type, full, meta) {
                    if(full.valider) {
                        return '<i class="fa-sharp fa-solid fa-circle-check text-success" ></i>'
                    } else if(full.active == 0) {
                        return '<i class="fa-sharp fa-solid fa-circle-xmark text-danger" ></i>'
                    } else {
                        return ' <i class="fa-solid fa-circle-notch text-info"></i>'
                    }
                }
            },
            {
                targets: 8,
                render: function(data, type, full, meta) {
                    if(full.bulletin_code == null) {
                        return '';
                    }   
                    return `<span role="button" class="bulletin_download" id="${full.bulletin_id}">${full.bulletin_code}</span>`
                }
            },
           
          
        ],
      
        language: datatablesFrench,
    });
    $("#ajouter").on('click', function() {
        $(".input_base").hide();
        $("#ajouter_modal").modal('show');
    })

    var echeances = [];
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
        var periode = $("#periode").val();
        if(employe == null || element == null || periode == '') {
            notyf.error('Veuillez remplir tout les champs!');
            return;
        }
        var montant = $("#montant").val();
        var sens = $("#sens").val();
        montant = montant * sens;
        var newDate = new Date(periode);
        periode = (newDate.getMonth() + 1).toString().padStart(2, '0')+''+newDate.getFullYear()
        let uniqueId = employe.contract_id+''+element.id+''+periode;
        let index = echeances.findIndex(e => e.uniqueId == uniqueId);
        if(index == "-1") {
            echeances.push({uniqueId, employe, element, montant, sens, periode})
            
        } else {
            notyf.error('Cette combinaison existait déjà !');
            return;
        }
        renderEcheances();

        console.log(echeances);

        
    })

    $("body").on('click', '.remove_echeance' ,function() {
        let id = $(this).parents('tr').attr('id');
        let index = echeances.findIndex(e => e.uniqueId == id)

        echeances.splice(index, 1);

        renderEcheances();
    })


    $("#add_echeance").on('submit', async function(e) {
        e.preventDefault();
        var button = $(document.activeElement);
        if(echeances.length == 0) {
            notyf.error("Vous n'avez aucune echeance!");
            return;
        }
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 9000000,dismissible: false
        });
        button.prop('disabled', true)


        var formData = new FormData(this);
        formData.append('echeances', JSON.stringify(echeances));

        try {
            const request = await axios.post(
                Routing.generate('app_mouvement_echeance_insert'), formData
                )
            ;
            const response = request.data;
            notyf.dismissAll();
            notyf.success(response);

            element = null;
            employe = null;
            button.prop('disabled', false)

            echeances = [];
            
            $("#ajouter_modal").modal('hide');
            renderEcheances();
            $("#add_echeance")[0].reset()
            renderSelect2();
            
            
            
        } catch (error) {
            button.prop('disabled', false)
            console.log(error);
            const message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
        }


    })
    

    
    const renderEcheances = () => {
        var html = "";
        echeances.map(echeance => {
            html += `
                <tr id="${echeance.uniqueId}">
                    <td>${echeance.employe.nom.toUpperCase()}  ${echeance.employe.prenom.toUpperCase()}</td>
                    <td>${echeance.employe.matricule}</td>
                    <td>${echeance.employe.contract}</td>
                    <td>${echeance.element.designation}</td>
                    <td>${echeance.periode}</td>
                    <td>${parseFloat(echeance.montant * echeance.sens).toLocaleString('fr-Fr', {style: 'decimal', minimumFractionDigits: 2})}</td>
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

    $("body").on('click', ".bulletin_download", async function() {
        window.open(Routing.generate('app_bulletin_employe_bulletin_print', {bulletin: $(this).attr('id')}), '_blank');
    })
})