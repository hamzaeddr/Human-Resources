$(document).ready(function  () {
    var employeId = 0;
alert('ok');
$("#ajouter_modal").modal('show');


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

               }
           });


     
      
});

});