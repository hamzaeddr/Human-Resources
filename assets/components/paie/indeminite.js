$(document).ready(function  () {
    $(".block_page").html('Gestion des indeminites')

    var table = $("#list_indeminite").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: Routing.generate('app_paie_indeminite_list'),
        processing: true,
        serverSide: true,
        deferRender: true,
        responsive: true,
        scrollX: true,
        columns: [
            {name: 'b.id', data: 'id'},
            {name: 'b.code', data: 'code'},
            {name: 'd.designation', data: 'dossier'},
            {name: 'b.created ', data: 'created'},
            {name: 'b.observation', data: 'observation'},
            {name: 'periode.code', data: 'code_periode'},
            {name: 'p.designation', data: 'paiement'},
            {name: 'b.id', data: 'id', orderable: false, searchable: false},
        ],
        columnDefs: [ 
            {
                targets: 0,
                render: function(data, type, full, meta) {
                    return `<input type="checkbox" value="${data}" class="honoraire"/>`;
                }
            },
            {
                targets: 3,
                render: function(data, type, full, meta) {
                    if(data.date) {
                        return moment(data.date).format('YYYY-MM-DD HH:mm:ss');
                    }
                    return "";
                }
            },
            {
                targets: 7,
                render: function(data, type, full, meta) {
                    return `
                    `
                }
            }
        ],
      
        language: datatablesFrench,
    });

    $("#upload").on('click', function() {
        $("#upload_modal").modal('show');
    })
  

    var tableIndeminites = $("#list_indeminites").DataTable({
        // responsive: true,
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
       
        language: datatablesFrench,
    })
    let indeminites = [];
    $(".add_employe").on('click', function() {
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 9000000,dismissible: false
        });
        var contract = $('.employe_select').val();
        var montant = $('.montant').val();
        var montantMad = $('.montant_mad').val();
        if(contract == '' || montant == '' || montantMad == '') {
            notyf.dismissAll();
            notyf.error('Veuillez remplir tout les champs!');
            return;
        }
        let index = indeminites.findIndex(i => i.contract == contract)
        if(index != '-1') {
            notyf.dismissAll();
            notyf.error('Employe déja exist!');
            return;
        }
        var rib = $('.employe_select').find('option:selected').attr('data-rib');
        var name = $('.employe_select').find('option:selected').attr('data-name');

        indeminites.push({contract, name, montant, montantMad, rib});
        console.log(indeminites);
        renderTableIndiminite();

        notyf.dismissAll();

    })
    let contract_rib;
    $("body").on('click', '.ajouter_rib', function(e) {
        e.preventDefault();

        contract_rib = $(this).parents('tr').attr('id');
        $("#rib_modal").modal('show');
        
    })

    $("#add_rib").on('submit', async function(e) {
        e.preventDefault();
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 9000000,dismissible: false
        });

        try {
            let formData = new FormData(this);
            formData.append('contract',contract_rib);
            const request = await axios.post(
                Routing.generate('app_paie_indeminite_add_rib'),
                formData
                )
            ;
            const response = request.data;

            $(".employe_select").html(response.data);
            renderSelect2();

            let index = indeminites.findIndex(e => e.contract == contract_rib)
            if(index != '-1') {
                indeminites[index].rib = response.rib
                renderTableIndiminite();
            }
            $("#rib_modal").modal('hide');
            
            notyf.dismissAll();
            $('#add_rib')[0].reset();
      
        } catch (error) {
            notyf.dismissAll();
            console.log(error);
            const message = error.response.data;
            notyf.error(message);
        }

        
        
    })

    $("body").on('click', '.delete_indeminite', function() {
        var contract = $(this).parents('tr').attr('id')
        let index = indeminites.findIndex(e => e.contract == contract)
        if(index != '-1') {
            indeminites.splice(index, 1)
            renderTableIndiminite();
        }
    })


    $(".upload_file_button").on('click', function() {
        $("#upload_file_indeminite").trigger('click');
    })

    $("#upload_file_indeminite").on('change', async function() {
        Swal.fire({
            title: 'Vous voulez vraiment importer ce fichier excel ?',
            showCancelButton: true,
            position: 'top',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Valider'
        }).then(async (result)  =>  {
        /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                notyf.open({
                    type:"info",
                    message: "En cours...",
                    duration: 9000000,dismissible: false
                });
              
                const formData = new FormData();
                formData.append("file", $("#upload_file_indeminite").prop("files")[0])
                try{
                    const request = await axios.post(Routing.generate("app_paie_indeminite_import"), formData);
                    const data = request.data;
                    data.map(e => {
                        let index = indeminites.findIndex(i => i.contract == e.contract);
                        if(index == '-1') {
                            indeminites.push(e)
                        }
                    });
                    renderTableIndiminite();

                    $("#upload_file_indeminite").val(null);                   
                   
                   
                    $("#upload_file_indeminite").val(null);
                    notyf.dismissAll();

                }catch(error){
                    console.log(error, error.response);
                    const message = error.response.data;
                    notyf.error(message);
                    $("#upload_file_indeminite").val(null);
                } 
            } else {
                $("#upload_file_indeminite").val(null);
            }
        })
    })


    $("#add_indeminite").on('submit', async function(e) {
        e.preventDefault();
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 9000000,dismissible: false
        });
        if(indeminites.length == 0) {
            notyf.dismissAll();
            notyf.error('Veuillez ajouter un ou plusieurs bénéficiaires !');
            return;
        }
        var button = $(document.activeElement);
        button.prop('disabled', true)
        let error = false;
        let formData = new FormData(this);

        indeminites.map((e) => {
            if(e.rib == '') {
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
        if(error === true) {
            button.prop('disabled', false)

            return;
        }
        formData.append('indeminites', JSON.stringify(indeminites));
        try {
            const request = await axios.post(
                Routing.generate('app_paie_indeminite_insert'), formData
                )
            ;
            const response = request.data;

            indeminites = [];
            renderTableIndiminite();
            notyf.dismissAll();
            notyf.success(response);
            table.ajax.reload()
            button.prop('disabled', false)

            $("#upload_modal").modal('hide');
            $("#add_indeminite")[0].reset()
            renderSelect2();


      
        } catch (error) {
            button.prop('disabled', false)

            console.log(error);
            const message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
        }
    })
    



    const renderTableIndiminite = () => {
        var html = "";
        indeminites.map(indeminite => {
            html += `
            <tr id="${indeminite.contract}">
                <td>${indeminite.contract}</td>
                <td>${indeminite.name}</td>
                <td>${indeminite.montant}</td>
                <td>${indeminite.montantMad}</td>
                <td>${indeminite.rib != '' ? indeminite.rib : '<a href="#" class="ajouter_rib">Ajouter RIB ?</a>'}</td>
                <td><i role="button" class='fa-solid fa-trash text-danger mr-2 delete_indeminite' data-id='${indeminite.contract}'></i> </td>
            </tr>
            `
        
        });
        if ($.fn.DataTable.isDataTable("#list_indeminites")) {
            $('#list_indeminites').DataTable().clear().destroy();
        }
        $("#list_indeminites .list_indeminites_data").html(html);
        tableIndeminites = $("#list_indeminites").DataTable({
            // responsive: true,
            lengthMenu: [
                [1, 15, 25, 50, 100, 20000000000000],
                [1, 15, 25, 50, 100, "All"],
            ],
           
            language: {
                url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
            },
        })


    }
})