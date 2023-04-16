
$(document).ready(function  () {
    diplomes =  [];
    id_diplome = 0;

    function hide_show(hide,hide_2,show,show_2){
        $("body " +show).removeClass('noclick');
        $("body " +show).addClass('click active'); 
        $("body " +show_2).addClass('show active'); 

        $("body " +hide).removeClass('click');
        $("body " +hide).addClass('noclick'); 
        $("body " +hide).removeClass('active'); 
        $("body " +hide_2).removeClass('show active');
        return true;
    }
    // var table = $("#datatables_gestion_inscription").DataTable({
    //     lengthMenu: [
    //         [10, 15, 25, 50, 100, 20000000000000],
    //         [10, 15, 25, 50, 100, "All"],
    //     ],
    //     order: [[0, "desc"]],
    //     ajax: "/inscription/groupes/list",
    //     processing: true,
    //     serverSide: true,
    //     deferRender: true,
    //     responsive: true,
    //     scrollX: true,
    //     drawCallback: function () {
    //         idInscription.forEach((e) => {
    //             $("body tr#" + e)
    //             .find("input")
    //             .prop("checked", true);
    //         });
    //         $("body tr#" + id_inscription).addClass('active_databales')
    //     },
    //     language: {
    //         url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
    //     },
    // });
        $('#example').DataTable({
            language: {
                url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
            },
        });

        let natureCab = null;
        $('.nav-pills a').on('click', function (e) {
            $(this).tab('show')        
            // alert(dossierId)
        })
        $("#ajouter").on('click', function(){
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
        $('#situation_familiale').on('change', function(){
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
            let id = $(this).val()

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
        })
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
            $("#salaire_grille").val($(this).find(":selected").attr('data-paye'))
        })
        $("#salaire_affecte").on("keyup", function(e) {
            let salaireAffecte = $(this).val();
            if(salaireAffecte == "") {
                $('#ppc').val("")
                $('#rpc').val("")
                return;
            }
            let salaireGrille = $("#salaire_grille").val();
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
        $("#new_salarie").on("submit", async function(e) {

            if(diplomes.length > 0){
                e.preventDefault();
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

                    //////////////hide / show 
                    hide_show('#etatcivil','#etat_civil','#contract','#contrat');
              
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
        var Niveau = $("#nv_diplome").find(":selected").text();
        var Diplome = $("#diplome").val();
        var Designation = $("#designation_diplome").val();
        var Ecole = $("#Ecole_diplome").val();
    
            $('#body_diplome tr:last').after('<tr id="'+id_diplome +'"><td>'+Niveau+'</td><td id="'+Diplome +'">'
             +Diplome+'</td><td  id"'+ Designation+'">'+Designation+'</td><td  id"'+ Ecole+'">'+Ecole+'</td><td><button type="button" class="btn btndelete">x</button></td></tr>');

                diplomes.push({"nv_dip": Niveau,"Diplome":Diplome,"Designation":Designation,"Ecole":Ecole,"id":id_diplome});

});
    ////hide and show popup //////////////////////////////////////////////

     



    })
    
    
    