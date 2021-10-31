(function() {
  
  function onContactSubmit(event){
    event.preventDefault();
    var form = event.target;

    // SCAM test
    if (form.robot.value.length) { return false; }

    $.ajax({
        url: "https://formspree.io/ideros21@gmail.com",
        method: "POST",
        data: {
          _subject: form.name.value + ' sent you a message from portfolio',
          email: form.email.value,
          message: form.message.value
        },
        dataType: "json",
        error: onSubmitError,
        success: onSubmitSuccess
    });

    // Show loader

    function onSubmitError(){
      // Show error message, allow trying again
    }

    function onSubmitSuccess(){
      // Show success message
    }
  }

  function onContactInput(event){
    // Disable/enable submit inputs
  }
})()