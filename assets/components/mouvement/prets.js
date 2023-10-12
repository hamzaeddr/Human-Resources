$(document).ready(function  () {
    $(".block_page").html('Gestion des prets')
    var tablePrets = $("#list_prets").DataTable({
        // responsive: true,
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
       
        language: datatablesFrench,
    })
    var table = $("#list_prelevements").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: Routing.generate('app_mouvement_prets_list'),
        processing: true,
        serverSide: true,
        deferRender: true,
        responsive: true,
        scrollX: true,
        columns: [
            {name: 'p.id', data: 'id'},
            {name: 'p.code', data: 'code'},
            {name: 'c.id', data: 'contract_id'},
            {name: 'emp.nom', data: 'nom'},
            {name: 'r.designation', data: 'rubrique'},
            {name: 'p.created', data: 'created'},
            {name: 'p.montant', data: 'montant'},
            {name: 'p.nombreMois', data: 'nombreMois'},
            {name: 'p.motif', data: 'motif'},
        ],
        columnDefs: [ 
            {
                targets: 0,
                render: function(data, type, full, meta) {
                    return `<input type="checkbox" value="${data}" class="pret_check"/>`;
                }
            },
            {
                targets: 1,
                render: function(data, type, full, meta) {
                    return `<span class='pret_code' id='${full.id}' role='button'>${data}</span>`;
                }
            },
            {
                targets: 5,
                render: function(data, type, full, meta) {
                    console
                    if(data.date) {
                        return moment(data.date).format('YYYY-MM-DD HH:mm:ss');
                    }
                    return "";
                }
            },
            {
                targets: 3,
                render: function(data, type, full, meta) {
                    return full.nom + ' ' +full.prenom;
                }
            },
           
          
        ],
      
        language: datatablesFrench,
    });
    $("#ajouter").on('click', function() {
        $("#ajouter_modal").modal('show');
    })

    var prets = [];
    $("#montantpret, #montantecheance, #periode").on('change', function() {

        prets = [];

        var periode = $("#periode").val();
        if(periode == '') {
            notyf.error('Veuillez remplir début prêt!');
            return;
        }
        var montantpret = parseFloat($("#montantpret").val());
        var montantecheance = parseFloat($("#montantecheance").val());
        var total = montantpret;
        if(montantpret == '' || montantecheance == '') {
            $("#nombremois").val('');
            $("#dernierecheance").val('');

            return;
        }
        var months = montantpret / montantecheance;
        if(months != Math.floor(Math.abs(months))) {
            months = Math.floor(Math.abs(months)) + 1;
        }

        for (let index = 0; index < months; index++) {
            var newDate = new Date(periode);
            newDate.setMonth(newDate.getMonth() + index );
            // console.log(total, montantecheance, total <= montantecheance)
            if(total <= montantecheance) {
                prets.push({'montant': total, 'periode' : (newDate.getMonth() + 1).toString().padStart(2, '0')+''+newDate.getFullYear()});
            } else {
                total = total - montantecheance;
                prets.push({'montant': montantecheance, 'periode' : (newDate.getMonth() + 1).toString().padStart(2, '0') +''+newDate.getFullYear()});
            }
        }

        renderPrets();
        
    })

    $("#add_pret").on('submit', async function(e) {
        e.preventDefault();
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 9000000,dismissible: false
        });
        if(prets.length == 0) {
            notyf.dismissAll();
            notyf.error('Veuillez ajouter un pret!');
            return;
        }
        var button = $(document.activeElement);
        button.prop('disabled', true)
        let formData = new FormData(this);

       
        formData.append('prets', JSON.stringify(prets));
        try {
            const request = await axios.post(
                Routing.generate('app_mouvement_prets_ajouter'), formData
                )
            ;
            const response = request.data;

            prets = [];
            renderPrets();
            notyf.dismissAll();
            notyf.success(response);
            // table.ajax.reload()
            button.prop('disabled', false)

            $("#ajouter_modal").modal('hide');
            $("#add_pret")[0].reset()
            renderSelect2();


      
        } catch (error) {
            button.prop('disabled', false)

            console.log(error);
            const message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
        }
    })
    $("body").on('click', '.pret_code', async function() {
        var prelevement = $(this).attr('id');
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 9000000,dismissible: false
        });
        try {
            const request = await axios.post(
                Routing.generate('app_mouvement_prets_detail', {prelevement})
                )
            ;
            const response = request.data;
            
            $('#modal_prelevement_detail').find('.modal-body').html(response);
            $('#modal_prelevement_detail').find('#list_prelevement_details').DataTable({
                lengthMenu: [
                    [10, 15, 25, 50, 100, 20000000000000],
                    [10, 15, 25, 50, 100, "All"],
                ],
               
                language: {
                    url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
                },
            })
            $('#modal_prelevement_detail').modal('show');
            notyf.dismissAll();
      
        } catch (error) {
            notyf.dismissAll();

            console.log(error);
            const message = error.response.data;
            notyf.error(message);
        }
    })
    const renderPrets = () => {
        var html = "";
        prets.map(pret => {
            html += `
                <tr>
                    <td></td>
                    <td>${pret.periode}</td>
                    <td>${parseFloat(pret.montant).toLocaleString('fr-Fr', {style: 'decimal', minimumFractionDigits: 2})}</td>
                </tr>
            `
        
        });
        $("#nombremois").val(prets.length)
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