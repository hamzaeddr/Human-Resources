$(document).ready(function  () {
    $(".block_page").html('Reporting Cnss')

    $("#import").on('click', function() {
        $("#file").click();
    })
    

    $("#file").on('change', function() {
        Swal.fire({
            title: 'Vous voulez vraiment importer ce fichier txt ?',
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
                formData.append("file", $("#file").prop("files")[0])
                try{
                    const request = await axios.post(Routing.generate("app_reporting_cnss_import"), formData);
                    const data = request.data;
                   

                    $("#file").val(null);
                   
                    notyf.dismissAll();

                }catch(error){
                    console.log(error, error.response);
                    const message = error.response.data;
                    notyf.error(message);
                    $("#file").val(null);
                } 
            } else {
                $("#file").val(null);
            }
        })
    })

})