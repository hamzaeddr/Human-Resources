$(document).ready(function  () {
    var employeId = 0;
// $("#ajouter_modal").modal('show');
// $('#parret_datatable').DataTable();
var previousXhr = null;
var table =  $('#parret_datatable').DataTable({
            
    order: [[0, "desc"]],
    ajax: {
        url: Routing.generate('app_parret_aff'),
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

        {name: 'a.id', data: 'arret_id'},
        {name: 'p.id', data: 'employe_id'},
        {name: 'p.code', data: 'matricule'},
        {name: 'p.nom', data: 'nom'},
        {name: 'p.prenom', data: 'prenom'},
        {name: 'm.designation', data: 'motif'},
        {name: 'a.DateDebut', data: 'date_debut'},
        {name: 'a.dateFin', data: 'date_fin'},
        {name: 'a.dateReprise', data: 'date_rep'},
        {orderable: false , searchable: false, data: 'arret_id'} 

    ],
  

    columnDefs: [ 
       
        {
            targets: 6,
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
                if(data.date) {
                    return moment(data.date).format('YYYY-MM-DD HH:mm:ss');
                }
                return "";
            }
        },
        {
            targets: 8,
            render: function(data, type, full, meta) {
                if(data.date) {
                    return moment(data.date).format('YYYY-MM-DD HH:mm:ss');
                }
                return "";
            }
        },
        {
            targets: 9,
            render: function(data, type, full, meta) {
                return `<i class='fa fa-eye text-info arret_details' role="button" data-id="${data}"></i>`
               
            }
        }
    ],

    
    lengthMenu: [
        [10, 15, 25, 50, 100, 20000000000000],
        [10, 15, 25, 50, 100, "All"],
    ],
    language: datatablesFrench,
});

$(document).on('change', '.employe_arret',  function() {

    var selectedOption = $(this).find('option:selected');

        // Get the values of data-employe and value attributes
        employeId = selectedOption.data('employe');
        var optionValue = selectedOption.val();

        // Do something with the data
        console.log('Employe ID:', employeId);
        console.log('Option Value:', optionValue);
//data 
        $('#id_emp_arret').val(employeId);
});

$(document).on('change', '#upload_file_arret',  function() {
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
            formData.append("file", $("#upload_file_arret").prop("files")[0])
            try{
                const request = await axios.post(Routing.generate("app_mouvement_arret_mass_upload"), formData);
                $("#upload_file_arret").val(null);
               
                notyf.dismissAll();

            }catch(error){
                console.log(error, error.response);
                const message = error.response.data;
                notyf.error(message);
                $("#upload_file_arret").val(null);

            } 
        } else {
            $("#upload_file_arret").val(null);

        }
        setTimeout(function() {
            notyf.dismissAll();

        }, 5000);

    })
});

$(document).on('click', '.add_arret',  function() {


        var motif_id =  $('.motif_id').val();
        var datedebut =  $('.datedebut').val();
        var datefin =  $('.datefin').val();
        var datereprise =  $('.datereprise').val();
            $.ajax({
               type: "POST",
               url: Routing.generate('app_mouvement_arret_traitement'),
               data:{
                'id_emp_arret':employeId,
                'motif_id':motif_id,
                'datedebut':datedebut,
                'datefin':datefin,
                'datereprise':datereprise,
                
            },
               beforeSend: function() {
                  
               },
               success: function(data){
                //  hide_show('#modal_modifier #plus_info_update','#modal_modifier #plus_info_update','civicivil','#modal_modifier #etatcivil_update');
              
                $("body .btnclose").click();

        //    notyf.dismissAll();
                   
               },error:function(data){
                $("body .btnclose").click();
               
               }
               
           });



     
      
});
$(document).on('click', '#ajouter',  function() {

    $("#ajouter_modal").modal('show');

});

$(".upload_file_button").on('click', function() {
    $("#upload_file_arret").trigger('click');
})

$(".arret_canva").on('click', function() {
    // Define the URL you want to open
    var urlToOpen = Routing.generate('app_mouvement_arret_mass_canvas');

    // Use window.location to open the URL
    window.location.href = urlToOpen;
});

$(".arret_motif").on('click', function() {
    // Define the URL you want to open
    var urlToOpen = Routing.generate('app_mouvement_arret_mass_canvas_motif');

    // Use window.location to open the URL
    window.location.href = urlToOpen;
});

$(".arret_motif").on('click', function() {
    // Define the URL you want to open
    var urlToOpen = Routing.generate('app_mouvement_arret_mass_canvas_motif');

    // Use window.location to open the URL
    window.location.href = urlToOpen;
});



$("body").on('click', ".arret_details", async function() {

    notyf.open({
        type:"info",
        message: "En cours...",
        duration: 9000000,
        dismissible: false
    });
    var code = $(this).attr('data-id');
    try {
        const request = await axios.post(
            Routing.generate('app_parret_aff_details', {code})
            )
        ;
        const response = request.data;

        $('#modal_arret_detail').find('.modal-body').html(response);
        $('#modal_arret_detail').find('#list_arret_details').DataTable({
            lengthMenu: [
                [10, 15, 25, 50, 100, 20000000000000],
                [10, 15, 25, 50, 100, "All"],
            ],
           
            language: {
                url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
            },
        })
        $('#modal_arret_detail').modal('show');
        notyf.dismissAll();
  
    } catch (error) {

        console.log(error);
        const message = error.response.data;
        notyf.dismissAll();
        notyf.error(message);
    }
})



});