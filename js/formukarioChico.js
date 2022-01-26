$(document).ready(function() {
    $("#basic-form").validate({
      rules: {

        rut: {
          required: true,
          number: true,
		  minlength: 8,
          maxlength: 8
		  
        },

        

        dgv: {/*if (dv) = 0, 1, 2, 3*/
          required: true,
          number: true,
          maxlength: 1
        },

        name : { 
          
          required  : true,
          minlength : 3,
          maxlength : 50
          },

        fon : {
          required  : true,
		  number: true,
          minlength : 9,
          maxlength : 9
        },

        /*ape : {
          required: true,
          minlength: 3
        },*/

        /*dire : {
          required: true,
          minlength: 3 ,
          maxlength: 100
        },*/
        email: {
          required: true,
          email: true
        },
        weight: {
          required: {
            depends: function(elem) {
              return $("#age").val() > 50
            }
          },
          number: true,
          min: 0
        }
      }
    });
  });