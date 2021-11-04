(function(){
  var contactForm = $('#js-contact');
  var contactMessage = document.getElementById('message');
  var contactSubmit = $('#js-contact-submit');

  contactSubmit.prop('disabled', true);

  contactForm.submit(onContactSubmit);
  contactMessage.addEventListener('input', onContactInput);
  $('.js-contact-success').hide();
  $('.js-contact-error').hide();

  function onContactSubmit(event){
    event.preventDefault();
    var form = event.target;
    $.ajax({
      url: "https://formspree.io/ideros21@gmail.com",
      method: "POST",
      dataType: "json",
      data: {
        _subject: 'tu as recu un courriel de ton site',
          email: form.email.value,
          message: form.message.value
      },
      
  }).then((value) => {
    onSubmitSuccess();
  }).catch((value)=>{
    onSubmitError();
  });
    function onSubmitError(){
      $('.js-contact-error').show();
    }

    function onSubmitSuccess(){
      $('#name').val("");
      $('#email').val("");
      $('#message').val("");
      $('.js-contact-success').show();
      contactSubmit.prop('disabled', true);
    }
  }

  function onContactInput(event){
    contactSubmit.attr('disabled', !contactMessage.value.length);
  }
})();
