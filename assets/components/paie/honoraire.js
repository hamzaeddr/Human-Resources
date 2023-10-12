$(document).ready(function  () {
    $(".block_page").html('Gestion des honoraires')

    var table = $("#list_honoraires").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: Routing.generate('app_paie_honoraire_list'),
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
    $(".upload_file_honoraire_button").on('click', function() {
        $("#upload_file_honoraire").trigger('click');
    })

    let honoraires;
    let tableHonoraire;
    $("#upload_file_honoraire").on('change', async function() {
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
                    duration: 9000000,
                });
                var nature = $(".nature_select").val();
                var paiement = $(".paiement_select").val();
                var dossier = $(".dossier_select").val();
                if(nature == '' || paiement == '' || dossier == '') {
                    notyf.dismissAll();
                    notyf.error('Veuillez remplir tous les champs !');
                    return;
                }
                const formData = new FormData();
                formData.append("file", $("#upload_file_honoraire").prop("files")[0])
                try{
                    const request = await axios.post(Routing.generate("app_paie_honoraire_import", {paiement, nature, dossier}), formData);
                    const data = request.data;
                    honoraires = data;
                    console.log(data);
                    $("#upload_file_honoraire").val(null);
                    if ($.fn.DataTable.isDataTable("#list_bhonoraires")) {
                        $('#list_bhonoraires').DataTable().clear().destroy();
                        $(".honoraire_list_data").empty()
                    }
                    data.map(item => {
                        if(item.newEmploye == false && item.newContract == true) {
                            var html = "<option value=''>choix rib</option>";
                            item.contracts.forEach(element => {
                                html += `<option value="${element.id}">${element.rib}</option>`;   
                            });
                            
                        } else {
                            var html = `<option value="${item.contract_id}">${item.rib}</option>`;   
                        }
                        $(".honoraire_list_data").append(`
                        <tr id="${item.id}">
                            <td>${item.id}</td>
                            <td>${item.nom} ${item.prenom}</td>
                            <td>${parseFloat(item.montant).toLocaleString('fr-Fr', {style: 'decimal', minimumFractionDigits: 2})}</td>
                            <td>${parseFloat(item.montant_mad).toLocaleString('fr-Fr', {style: 'decimal', minimumFractionDigits: 2})}</td>
                            <td>${parseFloat(item.brute_mad).toLocaleString('fr-Fr', {style: 'decimal', minimumFractionDigits: 2})}</td>
                            <td>${parseFloat(item.ir).toLocaleString('fr-Fr', {style: 'decimal', minimumFractionDigits: 2})}</td>
                            <td>${parseFloat(item.ir_mad).toLocaleString('fr-Fr', {style: 'decimal', minimumFractionDigits: 2})}</td>
                            <td width="25%"><select class="select form-control">${html}</select></td>
                            <td><i role="button" class="fa fa-trash text-danger remove_honoraire"></i></td>
                        </tr>
                        `)
                    })

                    // $('body .select2').select2();
                    renderSelect2()
                   
                   
                    tableHonoraire = $("#list_bhonoraires").DataTable({
                        // responsive: true,
                        lengthMenu: [
                            [10, 15, 25, 50, 100, 20000000000000],
                            [10, 15, 25, 50, 100, "All"],
                        ],
                       
                        language: {
                            url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
                        },
                    })

                    
                    $("#upload_file_honoraire").val(null);
                    notyf.dismissAll();

                }catch(error){
                    console.log(error, error.response);
                    const message = error.response.data;
                    notyf.error(message);
                    $("#upload_file_honoraire").val(null);
                } 
            } else {
                $("#upload_file_honoraire").val(null);
            }
        })
    })

    $("body").on('click', '.remove_honoraire', function () {

        var id = $(this).parents('tr').attr('id');
        let index = honoraires.findIndex((e) => e.id == id);
        if(index != "-1") {
            honoraires.splice(index, 1);
            console.log(honoraires);
            tableHonoraire.row('#'+id).remove().draw();
        }

    })

    $("#add_honoraire").on("submit", async function(e) {
        e.preventDefault();
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 9000000,
        });
        var button = $(document.activeElement);
        button.prop('disabled', true)
        let error = false;
        let formData = new FormData(this);

        tableHonoraire.rows().every(function() {
            var data = this.data(); // Array of row data
            console.log(data); // Do something with the row data
            console.log($(data[7]), $(data[7]).val())
            var contractValue = $(data[7]).val();
            var id = data[0];
            if(contractValue == '') {
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
                let index = honoraires.findIndex((e) => e.id == id);
                honoraires[index].selectedContract = contractValue;
            }
        });
        if(error === true) {
            button.prop('disabled', false)

            return;
        }
        let duplicatedHonoraires = []
        honoraires.map(e => {
            let index = duplicatedHonoraires.findIndex((t) => t.selectedContract == e.selectedContract);
            if(index == '-1') {
                duplicatedHonoraires.push(e);
            } else {
                duplicatedHonoraires[index].ir = parseFloat(duplicatedHonoraires[index].ir) + parseFloat(e.ir);
                duplicatedHonoraires[index].ir_mad = parseFloat(duplicatedHonoraires[index].ir_mad) + parseFloat(e.ir_mad);
                duplicatedHonoraires[index].brute = parseFloat(duplicatedHonoraires[index].brute) + parseFloat(e.brute);
                duplicatedHonoraires[index].brute_mad = parseFloat(duplicatedHonoraires[index].brute_mad) + parseFloat(e.brute_mad);
                duplicatedHonoraires[index].montant = parseFloat(duplicatedHonoraires[index].montant) + parseFloat(e.montant);
                duplicatedHonoraires[index].montant_mad = parseFloat(duplicatedHonoraires[index].montant_mad) + parseFloat(e.montant_mad);
            }
        })
        // console.log(duplicatedHonoraires, honoraires);
        // return;
        formData.append('honoraires', JSON.stringify(duplicatedHonoraires));
        try {
            const request = await axios.post(
                Routing.generate('app_paie_honoraire_insert'), formData
                )
            ;
            const response = request.data;

            if ($.fn.DataTable.isDataTable("#list_bhonoraires")) {
                $('#list_bhonoraires').DataTable().clear().destroy();
                $(".honoraire_list_data").empty()
            }
            $("#add_honoraire")[0].reset()
            renderSelect2();
            notyf.dismissAll();
            notyf.success(response);
            button.prop('disabled', false)

            table.ajax.reload()
            $("#upload_modal").modal('hide');



      
        } catch (error) {
            button.prop('disabled', false)

            console.log(error);
            const message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
        }




    })
})