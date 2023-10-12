$(document).ready(function  () {
    $(".block_page").html('Parametrage users')
    
    var previousXhr = null;
    let userId = null;
    let dossierId = null;
    $("body").on('click', '#modifier', function(e){
        e.preventDefault();
        userId = $(this).attr('data-id');
        $("#modifier_modal").modal("show")
    })
    var table = $("#list_users").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: {
            url: Routing.generate('app_parametre_user_list'),
            type: "get",
            // beforeSend: function(jqXHR) {
            //     // If there's a previous jqXHR object, abort it
            //     if (previousXhr) {
            //         previousXhr.abort();
            //     }
            //     // Store the current jqXHR object for the new request
            //     previousXhr = jqXHR;
            // }
        },
        processing: true,
        serverSide: true,
        deferRender: true,
        responsive: true,
        scrollX: true,
        columns: [
            {name: 'u.id', data: 'id'},
            {name: 'u.username', data: 'username'},
            {name: 'u.nom', data: 'nom'},
            {name: 'u.prenom', data: 'prenom'},
            {name: 'u.email', data: 'email'},
            {name: 'u.roles', data: 'roles'},
            {orderable: false , searchable: false,data:"enable"},
            {orderable: false , searchable: false, data:"actions"} 
        ],
        columnDefs: [ 
            {
                targets: 0,
                render: function(data, type, full, meta) {
                    return `<input type="checkbox" value="${data}" class="user_check"/>`;
                   
                }
            },
 
            {
                targets: 6,
                render: function(data, type, full, meta) {
                    if(data == true) {
                        return `<i class="fa fa-unlock text-success"/>`;
                    } else {
                        return `<i class="fa fa-lock text-danger"/>`;
                    }
                   
                }
            },
 
        ],
        language: datatablesFrench,
    });

    $("#desactiver").on('click', function(e) {
        e.preventDefault();
        var usersIds = [];
        $('.user_check:checked').each(function(){
            usersIds.push($(this).val());
        });
        if(usersIds.length == 0) {
            notyf.dismissAll();
            notyf.error('Veuillez selectionné un ou plusieur user');
            return;
        }
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment désactiver ?",
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
                formData.append('usersIds', JSON.stringify(usersIds));
                try {
                    const request = await axios.post(
                        Routing.generate('app_parametre_user_desactiver'), formData
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
    $("#activer").on('click', function(e) {
        e.preventDefault();
        var usersIds = [];
        $('.user_check:checked').each(function(){
            usersIds.push($(this).val());
        });
        if(usersIds.length == 0) {
            notyf.dismissAll();
            notyf.error('Veuillez selectionné un ou plusieur user');
            return;
        }
        swalWithBootstrapButtons.fire({
            showClass: {
                popup: 'animatedSwal flipInX faster'
            },
            position: 'top',
            title: "Confirmation ?",
            text: "Voulez vous vraiment activer ?",
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
                formData.append('usersIds', JSON.stringify(usersIds));
                try {
                    const request = await axios.post(
                        Routing.generate('app_parametre_user_activer'), formData
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

    $(".dossier_select").on('change', async function(){
        if($(this).val() == "") {
            dossierId = null;
            $(".buttons input").map(function(e) {
                $(this).prop("checked", false)
            });
            checkInputIfAllChildAreChecked();
            return;
        }
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 9000000,
            dismissible: false
        });
        dossierId = $(this).val()
        try {
            const request = await axios.post(Routing.generate('app_parametre_user_operations', {user: userId, dossier: dossierId}));
            const response = request.data;
            $(".buttons input").map(function(e) {
                $(this).prop("checked", false)
            });
            checkInputIfAllChildAreChecked();
            for (let index = 0; index < response.length; index++) {
                const element = response[index];
                $(".buttons ."+element.id).prop("checked", true);
                
            }
            checkInputIfAllChildAreChecked();
            notyf.dismissAll();
        } catch (error) {
            console.log(error, error.response);
            const message = error.response.data;
            
        }
    })

    $(".Collapsable").on("click", function () {

        $(this).parent().children().toggle();
        $(this).toggle();
    
    });


    const checkInputIfAllChildAreChecked = () => {
        // console.log($(".sousModules"));
        $(".sousModules").each(function() {
            if($(this).parent().find('.inputOperation').not(':checked').length === 0) {
                $(this).find(".inputSousModule").prop("checked", true);
            } else {
                $(this).find(".inputSousModule").prop("checked", false);
            }
        })
       
        $(".modules").each(function() {
            if($(this).parent().find('.inputSousModule').not(':checked').length === 0) {
                $(this).find(".inputModule").prop("checked", true);
            } else {
                $(this).find(".inputModule").prop("checked", false);
            }
        })
        
        // console.log($('.modules').find(".inputModule").not(':checked'))
        if($('.modules').find(".inputModule").not(':checked').length === 0) {
            $('.tous').prop("checked", true);
        } else {
            $('.tous').prop("checked", false);
        }
        
    }   

    $(".inputOperation").on('click', async function (){
        if(dossierId == null) {
            notyf.dismissAll();
            notyf.error('Veuillez selectionné un dossier');
            return;
        }
        let url;
        let operation = $(this).attr("data-operation");
        if($(this).is(":checked")){
            // $(".inputOperation").parent().parent().find("input:checkbox").prop("checked", true);
            url = Routing.generate('app_parametre_user_operation', {operation, userId, dossierId, type:'add'});
        }else{
            // $(".inputOperation").parent().parent().find("input:checkbox").prop("checked", false);
            url = Routing.generate('app_parametre_user_operation', {operation, userId, dossierId, type:'remove'});

        }
        checkInputIfAllChildAreChecked();
        try {
            const request = await axios.post(url);
            const response = request.data;
        } catch (error) {
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            }) 
        }
    })

    $(".inputSousModule").on('click', async function (){
        if(dossierId == null) {
            notyf.dismissAll();
            notyf.error('Veuillez selectionné un dossier');
            return;
        }
        let url;
        let sous_module = $(this).attr("data-module");
        if($(this).is(":checked")){
            $(this).parent().parent().find(".inputOperation").prop("checked", true);
            url = Routing.generate('app_parametre_user_sousmodule', {sous_module, userId, dossierId,type: 'add'});
        }else{
            $(this).parent().parent().find(".inputOperation").prop("checked", false);
            url = Routing.generate('app_parametre_user_sousmodule', {sous_module, userId, dossierId, type:'remove'});
            
            
        }
        checkInputIfAllChildAreChecked()
        try {
            const request = await axios.post(url);
            const response = request.data;
        } catch (error) {
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            }) 
        }
    })

    $(".inputModule").on('click', async function (){
        if(dossierId == null) {
            notyf.dismissAll();
            notyf.error('Veuillez selectionné un dossier');
            return;
        }
        let url;
        let module = $(this).attr("data-id");
        if($(this).is(":checked")){
            $(this).parent().parent().find("input:checkbox").prop("checked", true);
            url = Routing.generate('app_parametre_user_module', {module, userId, dossierId, type: 'add'});
        }else{
            $(this).parent().parent().find("input:checkbox").prop("checked", false);
            url = Routing.generate('app_parametre_user_module', {module, userId, dossierId, type: 'remove'});

        }
        checkInputIfAllChildAreChecked();
        try {
            const request = await axios.post(url);
            const response = request.data;
        } catch (error) {
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            }) 
        }
    })
    $(".tous").on('click', async function (){
        if(dossierId == null) {
            notyf.dismissAll();
            notyf.error('Veuillez selectionné un dossier');
            return;
        }
        let url;
        if($(this).is(":checked")){
            $(".tous").parent().parent().find("input:checkbox").prop("checked", true);
            url = Routing.generate('app_parametre_user_all', {userId, dossierId,type: 'add'});
            
        }else{
            $(".tous").parent().parent().find("input:checkbox").prop("checked", false);
            // $(".inputOperation").parent().parent().find("input:checkbox").prop("checked", false);
            url = Routing.generate('app_parametre_user_all', {userId, dossierId,type: 'remove'});
        }
        checkInputIfAllChildAreChecked();
        try {
            const request = await axios.post(url);
            const response = request.data;
        } catch (error) {
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            }) 
        }
    })
    
})
