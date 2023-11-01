$(document).ready(function  () {
    $(".block_page").html('Gestion des bulletins')
    var previousXhr = null;

    var table = $("#list_employes").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: {
            url: Routing.generate('app_bulletin_employe_list', {periode: $('#periode').val()}),
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
            {name: 'b.code', data: 'bulletin'},
            {name: 'p.matricule', data: 'matricule'},
            {name: 'p.nom', data: 'nom'},
            {name: 'p.prenom', data: 'prenom'},
            {name: 'nombreJourTravails', data: 'nombreJourTravails', orderable: false , searchable: false},
            {name: 'salaire', data: 'salaire', orderable: false , searchable: false},
            // {name: 'actions' , data: 'actions', orderable: false , searchable: false},
            {orderable: false , searchable: false, data: 'problemes'} 
        ],
        columnDefs: [ 
            {
                targets: 1,
                render: function(data, type, full, meta) {
                    return `<p type="button" data-id='${data}' class="show_bulletin">${data}<p>`
                   
                }
            },
        ],
        language: datatablesFrench,
    });
    $('#periode').on('change', function() {
        table.ajax.url(Routing.generate('app_bulletin_employe_list', {periode: $('#periode').val()})).load()

    })
    $("#generer").on('click', async function() {
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 9000000000000,
        });  
        try {
            let formData = new FormData();
            formData.append("dossier", $('.dossierSelect').val());
            const request = await axios.post(
                Routing.generate('app_bulletin_employe_calcul'),
                formData
                )
            ;
            const response = request.data;
            notyf.dismissAll();
            notyf.success(response);

            table.ajax.reload();

            //////////////hide / show 
            // hide_show('#etatcivil','#etat_civil','#contract','#contrat');
      
        } catch (error) {
            console.log(error);
            const message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
        }
    })
    $("body").on('click', "#problemes", async function() {
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 9000000000000,
        });  
        var contract = $(this).parents('tr').attr('id');
        try {
            let formData = new FormData();
            formData.append("dossier", $('.dossierSelect').val());
            const request = await axios.post(
                Routing.generate('app_bulletin_employe_problemes', {'contract': contract}),
                formData
                )
            ;
            const response = request.data;
            $('#modal_probleme').find('.modal-body').html(response);
            $('#modal_probleme').modal('show');
            // table.ajax.reload();

            //////////////hide / show 
            // hide_show('#etatcivil','#etat_civil','#contract','#contrat');
            notyf.dismissAll();
      
        } catch (error) {
            console.log(error);
            const message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
        }
    })
    $("body").on('click', "#save_problemes", async function() {
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 9000000,
        });
        $("#save_problemes").attr('disabled', true); 
        var problemes = [];
        $("body .tr_problemes").map(function(){
            problemes.push({
                'id': $(this).attr('id'),
                'periode' : $(this).find('.probleme_periode').val()
            });
        })
        // console.log(problemes);
        // return;
        try {
            let formData = new FormData();
            formData.append("problemes", JSON.stringify(problemes));
            const request = await axios.post(
                Routing.generate('app_bulletin_employe_probleme_solves'),
                formData
                )
            ;
            const response = request.data;
            
            table.ajax.reload();
            
            $("#save_problemes").attr('disabled', false); 
            $('#modal_probleme').find('.modal-body').html('');
            $('#modal_probleme').modal('hide');
                
            //////////////hide / show 
            // hide_show('#etatcivil','#etat_civil','#contract','#contrat');
            notyf.dismissAll();

            notyf.success(response);

      
        } catch (error) {
            $("#save_problemes").attr('disabled', false); 

            console.log(error);
            const message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
        }
    })
    
    $("body").on('click', ".show_bulletin", async function() {
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 9000000,
            dismissible: false
        });
        var code = $(this).attr('data-id');
        try {
            const request = await axios.post(
                Routing.generate('app_bulletin_employe_bulletin_details', {code})
                )
            ;
            const response = request.data;

            $('#modal_bulletin_detail').find('.modal-body').html(response);
            $('#modal_bulletin_detail').find('#list_bulletin_details').DataTable({
                lengthMenu: [
                    [10, 15, 25, 50, 100, 20000000000000],
                    [10, 15, 25, 50, 100, "All"],
                ],
               
                language: {
                    url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
                },
            })
            $('#modal_bulletin_detail').modal('show');
            notyf.dismissAll();
      
        } catch (error) {

            console.log(error);
            const message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
        }
    })

    $("body").on('click', ".bulletin_download", async function() {
        window.open(Routing.generate('app_bulletin_employe_bulletin_print', {bulletin: $(this).attr('id')}), '_blank');
    })
})