
$(document).ready(function  () {
    $(".block_page").html('Gestion des salaries')

    var employe_id = 0 ;
    var contract_id = 0 ;
    var cnssid = 0 ;
    var cimrid = 0 ;
    var ribid = 0 ;
    diplomes =  [];
    id_diplome = 0;
    selectedDataAttr = '';

    function hide_show(hide,hide_2,show,show_2){
        $("body " +show).removeClass('noclick');
        $("body " +show).addClass('click active'); 
        $("body " +show_2).addClass('show active'); 

        $("body " +hide).removeClass('click').addClass('noclick').removeClass('active');
     
        $("body " +hide_2).removeClass('show').removeClass('active');
        return true;
    }
    var previousXhr = null;
    
    var table =  $('#example').DataTable({
            
            order: [[0, "desc"]],
            ajax: {
                url: Routing.generate('app_salarie_salarie_list'),
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
                {name: 'p.id', data: 'employe_id'},
                {name: 'p.matricule', data: 'matricule'},
                {name: 'p.nom', data: 'nom'},
                {name: 'p.prenom', data: 'prenom'},
                {name: 'p.cin', data: 'cin'},
                {name: 'c.code', data: 'contract'},
                {name: 'n.designation', data: 'nature'},
                {orderable: false , searchable: false, data: 'employe_id'} 

            ],
            columnDefs: [ 
                {
                    targets: 7,
                    render: function(data, type, full, meta) {
                        return `<i class='fa fa-eye text-info contractdet' role="button" id="${data}"></i>`
                       
                    }
                },
            ],
            lengthMenu: [
                [10, 15, 25, 50, 100, 20000000000000],
                [10, 15, 25, 50, 100, "All"],
            ],
            language: datatablesFrench,
        });

        let natureCab = null;
        $('.nav-pills a').on('click', function (e) {
            $(this).tab('show')        
            // alert(dossierId)
        })
        $("#ajouter").on('click', function(){
           
            hide_show('#modal_modifier #plus_info_update','#modal_modifier #plus_info_update','#modal_ajouter #etatcivil','#modal_ajouter #etat_civil');
            hide_show('#modal_modifier #etatcivil_update','#modal_modifier #etatcivil_update','#modal_ajouter #etatcivil','#modal_ajouter #etat_civil');
            hide_show('#modal_modifier #cnss_rib_update','#modal_modifier #cnss_rib_update','#modal_ajouter #etatcivil','#modal_ajouter #etat_civil');
            hide_show('#modal_modifier #contract_update','#modal_modifier #contrat_update','#modal_ajouter #etatcivil','#modal_ajouter #etat_civil');
            hide_show('#modal_ajouter #plus_info','#modal_ajouter #plus_info','#modal_ajouter #etatcivil','#modal_ajouter #etat_civil');
            hide_show('#modal_ajouter #etatcivil','#modal_ajouter #etatcivil','#modal_ajouter #etatcivil','#modal_ajouter #etat_civil');
            hide_show('#modal_ajouter #cnss_rib','#modal_ajouter #cnss_rib','#modal_ajouter #etatcivil','#modal_ajouter #etat_civil');
            hide_show('#modal_ajouter #contract','#modal_ajouter #contrat','#modal_ajouter #etatcivil','#modal_ajouter #etat_civil');


            $("#modal_ajouter").modal("show")
        })
        $("#register").on("submit", async function(e) {
            e.preventDefault();
            const createCancelTokenHandler = createCancel();
    
            let formData = new FormData($(this)[0]);
            notyf.open({
                type:"info",
                message: "En cours...",
                duration: 90000,
            });    
            try {
                const request = await axios.post(
                    Routing.generate('app_register_new'), 
                    formData,
                    {cancelToken: createCancelTokenHandler.token}
                    )
                ;
                const response = request.data;
                await notyf.dismissAll();
                console.log(response)
                notyf.open({
                    type:"info",
                    message: response,
                }); 
            } catch (error) {
                console.log(error);
                const message = error.response.data;
                notyf.dismissAll();
                notyf.error(message);
            }
        })
        $(".nature_salarie").on("change", async function(e) {
            e.preventDefault();
            natureCab = $(this).val()
            if(natureCab == ""){
                return;
            }
            if(natureCab == 1) {
                $(".type_cnss").prop('disabled', false)
            } else {
                $(".type_cnss").prop('disabled', true)
            }

            const createCancelTokenHandler = createCancel();

            try {
                const request = await axios.get(
                    Routing.generate('api_getnaturesalarietype', {natureCab}), 
                    {cancelToken: createCancelTokenHandler.token}
                    )
                ;
                const response = request.data;
                $('.nature_type').html(response.types);
                $('.nature_contrat').html(response.contrats);
                $('.profile').html(response.niveaux);
            } catch (error) {
                console.log(error);
                const message = error.response.data;
                notyf.dismissAll();
                notyf.error(message);
            }
        })
        $('body .situation_familiale').on('change', function(){
            if($(this).val() == 1) {
                $('#nombre_enfant').prop("disabled", true);
            } else {
                $('#nombre_enfant').prop("disabled", false);
            }
        })
        $(".nature_contrat").on("change", async function(e) {
            e.preventDefault();
            if($(this).val() == ""){
                return;
            }
            const createCancelTokenHandler = createCancel();
            let id = $(this).val();

            var selectedOption = $(this).find("option:selected");

            // Get the value and data-attr attribute of the selected option
            // var selectedValue = selectedOption.val();
             selectedDataAttr = selectedOption.data("attr");
    

            try {
                const request = await axios.get(
                    Routing.generate('api_getdureecontrat', {'natureContrat': id}), 
                    {cancelToken: createCancelTokenHandler.token}
                    )
                ;
                const response = request.data;
                $('.duree_contrat').html(response);

                
            } catch (error) {
                console.log(error);
                const message = error.response.data;
                notyf.error(message);
            }
        });

        $(".profil").on("change", async function(e) {

            e.preventDefault();
            if($(this).val() == ""){
                return;
            }
            const createCancelTokenHandler = createCancel();
            var profil = $(this).val();
            // alert(selectedDataAttr);
        
                
                const request2 = await axios.get(

                    Routing.generate('api_getbareme_contract', {'natureContrat': selectedDataAttr, 'profil':profil}),
                    { cancelToken: createCancelTokenHandler.token }
                );
                const response2 = request2.data;
                $('.bareme').html(response2);


        });

        $(".bareme").on("change", async function(e) {
            e.preventDefault();
            console.log("Dropdown changed");
            if($(this).val() == ""){
                return;
            }
            const createCancelTokenHandler = createCancel();
            var selectedOption = $(this).find("option:selected");

           
             var selectedDatasal = selectedOption.data("attr");
               
            setTimeout(function() {
                // Set the value of the input field
                $('.salaire_grille').val(selectedDatasal);
            }, 100); 



        });


        $(".profile").on("change", async function(e) {
            e.preventDefault();
            if($(this).val() == ""){
                return;
            }
            const createCancelTokenHandler = createCancel();
            let niveau = $(this).val()
            try {
                const request = await axios.get(
                    Routing.generate('api_getbareme', {'niveau':niveau , 'natureCab':natureCab}), 
                    {cancelToken: createCancelTokenHandler.token}
                    )
                ;
                const response = request.data;
                $('.bareme').html(response);
            } catch (error) {
                console.log(error);
                const message = error.response.data;
                notyf.error(message);
            }
        })
        $(".bareme").on("change", function(e) {
            e.preventDefault();
            $(".salaire_grille").val($(this).find(":selected").attr('data-paye'))
        })
        $(".salaire_affecte").on("keyup", function(e) {
            let salaireAffecte = $(this).val();
            if(salaireAffecte == "") {
                $('#ppc').val("")
                $('#rpc').val("")
                return;
            }
            let salaireGrille = $(".salaire_grille").val();
            let reste = salaireAffecte - salaireGrille;
            if(reste <= 0) {
                $('#rpc').val((reste * -1).toFixed(2))
                $('#ppc').val("")
            } else {
                $('#rpc').val("")
                $('#ppc').val(reste.toFixed(2))
            }
        })
        
        $("#rib").on("keyup", function(e) {
            if($(this).val().length == 24) {
                $(".checkClass").css('color', 'cadetblue')
            } else {
                $(".checkClass").css('color', 'black')
            }
        })
        $("#modal_ajouter #new_salarie").on("submit", async function(e) {
            e.preventDefault();

            if(diplomes.length > 0){
                const createCancelTokenHandler = createCancel();
                notyf.open({
                    type:"info",
                    message: "En cours...",
                    duration: 90000,
                });    
                let formData = new FormData(this);
                formData.append("diplomes",JSON.stringify(diplomes));
                try {
                    const request = await axios.post(
                        Routing.generate('app_salarie_salarie_new'),
                        formData, 
                        {cancelToken: createCancelTokenHandler.token}
                        )
                    ;
                    const response = request.data;
                     employe_id = response;

                    //////////////hide / show 
                    hide_show('#modal_ajouter #etatcivil','#modal_ajouter #etat_civil','#modal_ajouter #contract','#modal_ajouter #contrat');
                    notyf.dismissAll();
              
                } catch (error) {
                    console.log(error);
                    const message = error.response.data;
                    notyf.dismissAll();
                    notyf.error(message);
                }
            }
            else{
              
                notyf.error("Merci de remplir les diplômes");
                
            }
        
        });


////////////////////////////////////////////Diplome //////////////////////////////        
    
    $(document).on('click', '.btndelete', function() {

       var id = $(this).closest('tr').attr('id');
       $(this).closest('tr').remove();
       var newarray = diplomes.filter((item) => item.id != id);
       diplomes = newarray;

    
 });
 
$('.add_diplome').on('click', function(){
    id_diplome = id_diplome + 1;
        var Niveau = $("#modal_ajouter .new_dip").find(":selected").text();
        var Diplome = $("#diplome").val();
        var Designation = $("#designation_diplome").val();
        var Ecole = $("#Ecole_diplome").val();
    
            $('#body_diplome tr:last').after('<tr id="'+id_diplome +'"><td>'+Niveau+'</td><td id="'+Diplome +'">'
             +Diplome+'</td><td  id"'+ Designation+'">'+Designation+'</td><td  id"'+ Ecole+'">'+Ecole+'</td><td><button type="button" class="btn btndelete">x</button></td></tr>');

                diplomes.push({"nv_dip": Niveau,"Diplome":Diplome,"Designation":Designation,"Ecole":Ecole,"id":id_diplome});

});
    ////hide and show popup //////////////////////////////////////////////

    ////////////////////////cnss////////////////////////////
   

        $("#modal_ajouter #new_contract").on("submit", async function(e) {
            e.preventDefault();

            const createCancelTokenHandler = createCancel();
            notyf.open({
                type:"info",
                message: "En cours...",
                duration: 90000,
            });    
            let formData = new FormData(this);
            formData.append("employe_id",employe_id);

            try {
                const request = await axios.post(
                    Routing.generate('app_salarie_contract'),
                    formData, 
                    {cancelToken: createCancelTokenHandler.token}
                    )
                ;
                const response = request.data;
                contract_id = response;

                //////////////hide / show 
                hide_show('#modal_ajouter #contract','#modal_ajouter #contrat','#modal_ajouter #cnss_rib','#modal_ajouter #cnss_rib');

                notyf.dismissAll();
          
            } catch (error) {
                console.log(error);
                const message = error.response.data;
                notyf.dismissAll();
                notyf.error(message);
            }
           
          
    
    
    
    

        });

        $("#modal_ajouter #new_cnss").on("submit", async function(e) {

        e.preventDefault();

        const createCancelTokenHandler = createCancel();
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 90000,
        });    
        let formData = new FormData(this);
        formData.append("contract_id",contract_id);

        try {
            const request = await axios.post(
                Routing.generate('app_salarie_cnss'),
                formData, 
                {cancelToken: createCancelTokenHandler.token}
                )
            ;
            const response = request.data;
            contract_id = response;

            //////////////hide / show 
            hide_show('#modal_ajouter #cnss_rib','#modal_ajouter #cnss_rib','#modal_ajouter #plus_info','#modal_ajouter #plus_info');


            notyf.dismissAll();
      
        } catch (error) {   
            console.log(error);
            const message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
        }

    });
        $("#modal_ajouter #new_plus").on("submit", async function(e) {

        e.preventDefault();

        const createCancelTokenHandler = createCancel();
        notyf.open({
            type:"info",
            message: "En cours...",
            duration: 90000,
        });    
        let formData = new FormData(this);
        formData.append("employe_id",employe_id);

        try {
            const request = await axios.post(
                Routing.generate('app_salarie_plusinfo'),
                formData, 
                {cancelToken: createCancelTokenHandler.token}
                )
            ;
            const response = request.data;

            //////////////hide / show 
            hide_show('#modal_ajouter #plus_info','#modal_ajouter #plus_info','#modal_ajouter #etatcivil','#modal_ajouter #etatcivil');


            notyf.dismissAll();
      
        } catch (error) {   
            console.log(error);
            const message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
        }
        
        $("body .btnclose").click();

    });


    $(document).on('click', '.contractdet',  function() {
 
        employe_id = $(this).attr('id');
        const createCancelTokenHandler = createCancel();
       
        try {
            $.ajax({             
                type: "POST",
                url: Routing.generate('app_salarie_contractaff'),
                data:'employe_id='+employe_id,
                beforeSend: function() {
                    notyf.open({
                        type:"info",
                        message: "En cours...",
                        duration: 90000,
                    });  
                },
                success: function(data){
                    if ($.fn.DataTable.isDataTable("#contrat_list_details")) {
                        $('#contrat_list_details').DataTable().clear().destroy();
                    }
                    $('#contract_body').html(data);
                    $("#contrat_list_details").DataTable({
                        lengthMenu: [
                            [10, 15, 25, 50, 100, 20000000000000],
                            [10, 15, 25, 50, 100, "All"],
                        ],
                        language: datatablesFrench,
                    })
                    $("#contractModal").modal('show')
                    notyf.dismissAll();
                    
                },error:function(data){

                }
            });


      
        } catch (error) {   
            console.log(error);
            const message = error.response.data;
            notyf.dismissAll();
            notyf.error(message);
        }
        
    });
     
//////////////////////////Update modale ////////////////////////////////////////    

    $(document).on('click', '#editContract',  function() {
        hide_show('#modal_modifier #plus_info_update','#modal_modifier #plus_info_update','#modal_modifier #contract_update','#modal_modifier #contrat_update');
        hide_show('#modal_modifier #etatcivil_update','#modal_modifier #etatcivil_update','#modal_modifier #contract_update','#modal_modifier #contrat_update');
        hide_show('#modal_modifier #cnss_rib_update','#modal_modifier #cnss_rib_update','#modal_modifier #contract_update','#modal_modifier #contrat_update');
        hide_show('#modal_ajouter #plus_info','#modal_ajouter #plus_info','#modal_modifier #contract_update','#modal_modifier #contrat_update');
        hide_show('#modal_ajouter #etatcivil','#modal_ajouter #etatcivil','#modal_modifier #contract_update','#modal_modifier #contrat_update');
        hide_show('#modal_ajouter #cnss_rib','#modal_ajouter #cnss_rib','#modal_modifier #contract_update','#modal_modifier #contrat_update');
        hide_show('#modal_ajouter #contrat','#modal_ajouter #contrat','#modal_modifier #contract_update','#modal_modifier #contrat_update');

        contractId = $(this).attr("data-value");
        $('.contractdetbtn').click();

        $("#modal_modifier").modal("show")

        
        // Make an AJAX request to fetch contract details based on the contractId
        $.ajax({
            type: "POST",
            url: Routing.generate('app_salarie_contractinfo'),            // Adjust the URL to your server endpoint
            data: { contract_id: contractId }, // Send the contract ID as data
            beforeSend: function() {
                // Show loading indicator or do other actions before the request is sent
            },
            success: function(data) {
                var id = data[0]['pnatureid'];
                var dure = data[0]['iddure'];
                var datec = data[0]['date_debut']['date'];
                var datec = datec.split(" ")[0];
                var datef = data[0]['date_fin']['date'];
                var datef = datef.split(" ")[0];
                var salaireaf = data[0]['Salaireaffecte'];
                var salairegrille = data[0]['Salairegrille'];
                var bareme = data[0]['bareme'];
                var fonctionid = data[0]['fonctionid'];
                var dossier = data[0]['dossier'];
                var ppc = data[0]['PPC'];
                var rpc = data[0]['RPC'];
                var profil = data[0]['Profil'];


                // $("#modal_modifier .nature_contrat option[id='" + id + "']").prop("selected", true);

                    var $matchingOption = $("#modal_modifier .bareme option[value='" + bareme + "']");

                    $("#modal_modifier .bareme").val($matchingOption.val()).trigger("change");
                    $("#modal_modifier .bareme").prop("disabled", true);
                    

                    var $matchingbareme = $("#modal_modifier .nature_contrat option[value='" + id + "']");

                    $("#modal_modifier .nature_contrat").val($matchingbareme.val()).trigger("change");
                    $("#modal_modifier .nature_contrat").prop("disabled", true);

                    var $matchingdossier = $("#modal_modifier .affectation option[value='" + dossier + "']");

                    $("#modal_modifier .affectation").val($matchingdossier.val()).trigger("change");
                    $("#modal_modifier .affectation").prop("disabled", true);

                    var $matchingfonction = $("#modal_modifier .fonction option[value='" + fonctionid + "']");

                    $("#modal_modifier .fonction").val($matchingfonction.val()).trigger("change");

                  

                    $("#modal_modifier .date_contrat").val(datec);
                    $("#modal_modifier .date_fin").val(datef);
                    
                    setTimeout(function() {
                    $("#modal_modifier .salaire_grille").val(salairegrille);
                }, 1000);
                    $("body #modal_modifier .salaire_grille").prop("readonly", true);  

                    $("#modal_modifier .salaire_affecte").val(salaireaf);
                    $("body #modal_modifier .salaire_affecte").prop("disabled", true);  

                   
                    setTimeout(function() {
                    $("#modal_modifier #ppc").val(ppc);
                }, 1000);
                    $("body #modal_modifier  #ppc").prop("disabled", true); 

                    setTimeout(function() {
                    $("#modal_modifier  #rpc").val(rpc);
                }, 1000);

                    $("body #modal_modifier  #rpc").prop("disabled", true);   

                // Handle the success response here, e.g., update the modal content with the fetched details
                    setTimeout(function() {var $matchingOption2 = $("body #modal_modifier .duree_contrat option[value='" + dure + "']");

                    $("body #modal_modifier .duree_contrat").val($matchingOption2.val()).trigger("change");
                    $("body #modal_modifier .duree_contrat").prop("disabled", true);                }, 1500); // 3000 milliseconds = 3 seconds
                    
                    setTimeout(function() {var $matchingprofil = $("#modal_modifier .profil option[value='" + profil + "']");

                    $("body #modal_modifier .profil").val($matchingprofil.val()).trigger("change");
                    $("body #modal_modifier .profil").prop("disabled", true);   }, 1000);
             
                // For example, you can populate a form with the fetched data
                // $("#contract-details-form").html(data);
            },
            error: function(xhr, textStatus, errorThrown) {
                $('.contractdetbtn').click();

                // Handle errors, e.g., show an error message
                console.error("Error:", errorThrown);
            }
        });
        });
    



$("body #modal_modifier #cntc_btn").on("click",  function() {

                var datedebut = $("#modal_modifier .date_contrat").val();
                var datefin = $("#modal_modifier .date_fin").val();
                var fonctionupdate = $("#modal_modifier .fonction").val();

                try {
                    $.ajax({
                       type: "POST",
                       url: Routing.generate('app_salarie_updatecontract'),
                       data:{
                        'contract_id' :contractId,
                        'date_contrat' :datedebut,
                        'date_fin' :datefin,
                        'fonction' :fonctionupdate,
                    
                        },
                       beforeSend: function() {
                           notyf.open({
                               type:"info",
                               message: "En cours...",
                               duration: 90000,
                               
                           });  
                       },
                       success: function(data){

                           $('#contract_body').html(data);
                            hide_show('#modal_modifier #contract_update','#modal_modifier #contrat_update','#modal_modifier #cnss_rib_update','#modal_modifier #cnss_rib_update');
                           
                            try {

                                $.ajax({
                                   type: "POST",
                                   url: Routing.generate('app_salarie_get_cnss_cimr'),
                                   data:{
                                    'contract_id' :contractId,
                                   },
                                   dataType: "json",
                                   beforeSend: function() {
                                       
                                   },
                                   success: function(data){
                                   // 'data' contains the array of objects received from the server
                console.log(data);

                // Iterate through the array using $.each()
                $.each(data, function(index, item) {
                    // Access properties of each object
                    var id = item.id;
                    var abreviation = item.abreviation;
                    var type_id = item.type_id;
                    var code = item.code;
                    var date_affiliation = item.date_affiliation;
                    var rib = item.rib;
                    var cotisid = item.cotisid;
                    ribid = item.ribid;

                    // Perform actions for each item, e.g., display data
                    console.log("Index:", index);
                    console.log("ID:", id);
                    console.log("Abreviation:", abreviation);
                    console.log("Type ID:", type_id);
                    console.log("Code:", code);
                    console.log("Date Affiliation:", date_affiliation);
                    console.log("RIB:", rib);
                                         if (type_id === 1) {
                                            $("#modal_modifier #cnss").val(code);
                                            $("#modal_modifier #date_declaration_cnss").val(date_affiliation);
                                             cnssid = cotisid;
                                        }
                                        else if (type_id === 2){
                                            $("#modal_modifier #cimr").val(code);
                                            $("#modal_modifier #date_declaration_cimr").val(date_affiliation);
                                            $("#modal_modifier #rib").val(rib);
                                             cimrid = cotisid;

                                        }
                    
                                      
                                    });
                                           
                                              
            
                                         notyf.dismissAll();
                                       
                                   },error:function(data){
                                    notyf.open({
                                        type:"error",
                                        message: "Error Mis a jour contract ! !",
                                        duration: 90000,
                                    }); 
                                   }
                               });
                   
                   
                         
                           } catch (error) {   
                               console.log(error);
                               const message = error.response.data;
                               notyf.dismissAll();
                               notyf.error(message);
                           }
                             notyf.dismissAll();
                           
                       },error:function(data){
                        notyf.open({
                            type:"error",
                            message: "Error Mis a jour contract ! !",
                            duration: 90000,
                        }); 
                       }
                   });
       
       
             
               } catch (error) {   
                   console.log(error);
                   const message = error.response.data;
                   notyf.dismissAll();
                   notyf.error(message);
               }
        
        
    
        });

        $("body #modal_modifier #cnss_btn").on("click",  function() {
            
            var cnss = $("#modal_modifier #cnss_rib_update #cnss").val();
            var date_cnss = $("#modal_modifier #cnss_rib_update #date_declaration_cnss").val();
            var cimr = $("#modal_modifier #cnss_rib_update #cimr").val();
            var date_cimr = $("#modal_modifier #cnss_rib_update #date_declaration_cimr").val();
            var ribupdated = $("#modal_modifier #cnss_rib_update #rib").val();
            try {
                $.ajax({
                   type: "POST",
                   url: Routing.generate('app_salarie_updatecotis'),
                   data:{
                    'cnssid':cnssid,
                    'cimrid':cimrid,
                    'cnssup':cnss,
                    'date_cnssup':date_cnss,
                    'cimrup':cimr,
                    'date_cimr':date_cimr,
                    'ribup':ribupdated,
                    'ribid':ribid,
                },
                   beforeSend: function() {
                      
                   },
                   success: function(data){
                    hide_show('#modal_modifier #plus_info_update','#modal_modifier #plus_info_update','#modal_ajouter #etatcivil','#modal_ajouter #etatcivil');
                    //  hide_show('#modal_modifier #plus_info_update','#modal_modifier #plus_info_update','civicivil','#modal_modifier #etatcivil_update');

                    $("body .btnclose").click();

               notyf.dismissAll();
                       
                   },error:function(data){
   
                   }
               });
   
   
         
           } catch (error) {   
               console.log(error);
               const message = error.response.data;
               notyf.dismissAll();
               notyf.error(message);
           }

        });
        
        $(document).on('click', '#ajouterContract',  function() {

            
            hide_show('#modal_modifier #plus_info_update','#modal_modifier #plus_info_update','#modal_ajouter #contract','#modal_ajouter #contrat');
            hide_show('#modal_modifier #etatcivil_update','#modal_modifier #etatcivil_update','#modal_ajouter #contract','#modal_ajouter #contrat');
            hide_show('#modal_modifier #cnss_rib_update','#modal_modifier #cnss_rib_update','#modal_ajouter #contract','#modal_ajouter #contrat');
            hide_show('#modal_modifier #contract_update','#modal_modifier #contrat_update','#modal_ajouter #contract','#modal_ajouter #contrat');
            hide_show('#modal_ajouter #plus_info','#modal_ajouter #plus_info','#modal_ajouter #contract','#modal_ajouter #contrat');
            hide_show('#modal_ajouter #etatcivil','#modal_ajouter #etatcivil','#modal_ajouter #contract','#modal_ajouter #contrat');
            hide_show('#modal_ajouter #cnss_rib','#modal_ajouter #cnss_rib','#modal_ajouter #contract','#modal_ajouter #contrat');
            hide_show('#modal_ajouter #contract','#modal_ajouter #contrat','#modal_ajouter #contract','#modal_ajouter #contrat');
            $('#modal_ajouter #contract').click();
            $("body .contractdetbtn").click();
            $("#modal_ajouter").modal("show");

            
        });
    

        document.addEventListener("DOMContentLoaded", function () {
            var ellipsisIcons = document.querySelectorAll(".ellipsis");
            
            ellipsisIcons.forEach(function (icon) {
                icon.addEventListener("click", function () {
                    var editButtons = this.nextElementSibling;
                    editButtons.style.display = (editButtons.style.display === "block") ? "none" : "block";
                });
            });
        }); 

    })
    
    
    