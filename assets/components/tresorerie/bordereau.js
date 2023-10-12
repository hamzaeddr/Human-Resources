$(document).ready(function  () {
    $(".block_page").html('Gestion des bordereaux')
   

    var previousXhr = null;
    var table = $("#list_bordereau").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: {
            url: Routing.generate('app_tresorerie_bordereau_list'),
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
            {name: 'b.id', data: 'id'},
            {name: 'b.code', data: 'code'},
            {name: 'd.designation', data: 'dossier_designation'},
            {name: 'p.abreviation', data: 'periode'},
            {name: 'b.type', data: 'type'},
            {name: 'natureContract.designation', data: 'designation'},
            {name: 'b.created', data: 'created'},
            {name: 's.icon', data: 'icon'},
        ],
        columnDefs: [ 
            {
                targets: 0,
                render: function(data, type, full, meta) {
                    if(full.statut == 'problème' || full.statut == 'en cours') {
                        return '';
                    }else if(full.statut == 'intégré') {
                        return `<input type="checkbox" value="${data}" class="" checked disabled/>`;
                    }
                    return `<input type="checkbox" value="${data}" class="bordereau_check"/>`;
                }
            },
           
            {
                targets: 6,
                render: function(data, type, full, meta) {
                    if(data && data.date) {
                        return moment(data.date).format('YYYY-MM-DD HH:mm:ss');
                    }
                    return "";
                }
            },
          
            {
                targets: 7,
                render: function(data, type, full, meta) {
                    return `<i class='${data}'></i> ${full.statut}`;
                }
            },
            
          
          
        ],
      
        language: datatablesFrench,
    });
  
    
    $("#valider").on('click', async function() {
        var bordereauIds = [];
        $('.bordereau_check:checked').each(function(){
            bordereauIds.push($(this).val());
        });
        if(bordereauIds.length == 0) {
            notyf.dismissAll();
            notyf.error('Veuillez selectionné un ou plusieur bordereau');
            return;
        }
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment valider ?",
            type: "warning",
            showCancelButton: true,
            focusConfirm: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then(async (result)  =>  {
        /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                notyf.open({
                    type:"info",
                    message: "En cours...",
                    duration: 9000000,
                    dismissible: false
                });

               
                var formData = new FormData();
                formData.append('bordereauIds', JSON.stringify(bordereauIds));
                try {
                    const request = await axios.post(
                        Routing.generate('app_tresorerie_bordereau_valider'), formData
                        )
                    ;
                    const response = request.data;

                
                    notyf.dismissAll();
                    notyf.success(response);

                    table.ajax.reload()



            
                } catch (error) {
                    console.log(error);
                    const message = error.response.data;
                    notyf.dismissAll();
                    notyf.error(message);
                }

            }
        })
    })
    $("#devalider").on('click', async function() {
        var bordereauIds = [];
        $('.bordereau_check:checked').each(function(){
            bordereauIds.push($(this).val());
        });
        if(bordereauIds.length == 0) {
            notyf.dismissAll();
            notyf.error('Veuillez selectionné un ou plusieur bordereau');
            return;
        }
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment devalider ?",
            type: "warning",
            showCancelButton: true,
            focusConfirm: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
        }).then(async (result)  =>  {
        /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                notyf.open({
                    type:"info",
                    message: "En cours...",
                    duration: 9000000,
                    dismissible: false
                });
               
                var formData = new FormData();
                formData.append('bordereauIds', JSON.stringify(bordereauIds));
                try {
                    const request = await axios.post(
                        Routing.generate('app_tresorerie_bordereau_devalider'), formData
                        )
                    ;
                    const response = request.data;

                
                    notyf.dismissAll();
                    notyf.success(response);

                    table.ajax.reload()



            
                } catch (error) {
                    console.log(error);
                    const message = error.response.data;
                    notyf.dismissAll();
                    notyf.error(message);
                }

            }
        })
    })
    $("#integre").on('click', async function() {
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment integere ?",
            type: "warning",
            showCancelButton: true,
            focusConfirm: true,
            showCloseButton: true,
            confirmButtonText: "<i class='fa fa-check'></i> Oui!",
            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
          }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                notyf.open({
                    type:"info",
                    message: "En cours...",
                    duration: 9000000,
                    dismissible: false
                });

                try {
                    const request = await axios.post(
                        Routing.generate('app_tresorerie_bordereau_integre')
                        )
                    ;
                    const response = request.data;

                
                    notyf.dismissAll();
                    notyf.success(response);

                    table.ajax.reload()



            
                } catch (error) {
                    console.log(error);
                    const message = error.response.data;
                    notyf.dismissAll();
                    notyf.error(message);
                }

            }
        })
    })
})