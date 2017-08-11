var dbRef = new Firebase("https://sheild-55d2c.firebaseio.com/");

var contactsRef = dbRef.child('Registration');

$('.addValue').on("click", function( event ) {  
    event.preventDefault();
    if(  $('#usr').val() != '' && $('#eml').val() != '' && $('#reg').val() != '' && $('#pho').val() != '' && $('#sel1').val() != ''){
      contactsRef.push({
          name: $('#usr').val(),
          email: $('#eml').val(),
          reg: $('#reg').val(),
          phone: $('#pho').val(),
          event: $('#sel1').val(),
          
 
          }
        )
        swal("Thanks For Registering", "We will get  in touch soon "+ $('#usr').val()+".\n\n SHEILD-VIT ", "success");
     
        contactForm.reset();
    } else {
        sweetAlert("Oops...", "Please fill all required field", "error");
    
    }
  });