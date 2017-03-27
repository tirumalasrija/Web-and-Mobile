












$(document).ready(function () {
    
    $("#form_name").validate({
        rules: {
            fname: "required",
        },
        messages: {
            fname: "Please provide Name",
            
        }
            
    });
});
