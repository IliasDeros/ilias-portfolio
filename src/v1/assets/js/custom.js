/*
* custom script that defer from the original template
*/
(function(){
  var contactForm = $('#js-contact');
  var contactMessage = document.getElementById('message');
  var contactSubmit = $('#js-contact-submit');
  var contactTryAgain = $('.js-contact-error');
  var hireLink = document.getElementById('js-hire');

  contactSubmit.prop('disabled', true);

  contactForm.submit(onContactSubmit);
  contactMessage.addEventListener('input', onContactInput);
  hireLink.addEventListener('click', onHire);


  function onContactSubmit(event){
    event.preventDefault();
    var form = event.target;

    // SCAM test
    if (form.robot.value.length) { return false; }

    // hide submit
    $('#js-contact-submit').hide();
    $('.js-contact-processing').show();

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

    function onSubmitError(){
      $('.js-contact-processing').hide();
      $('.js-contact-error').show();
    }

    function onSubmitSuccess(){
      $('.js-contact-processing').hide();
      $('.js-contact-success').show();
      $('#js-success-name').text(form.name.value);
      contactInputs.prop('disabled', true);
    }
  }

  function onContactInput(event){
    contactSubmit.attr('disabled', !contactMessage.value.length);
    contactTryAgain.attr('disabled', !contactMessage.value.length);
  }

  function onHire(event){
    contactMessage.value = 'Hello Ilias,\n\nI am interested in your profile and would like to share an opportunity with you.';
  }
})();
