(function(){
  function contactForm() {
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
        url: "https://formspree.io/f/mleayzob",
        method: "POST",
        dataType: "json",
        data: {
          _subject: form.name.value + ' sent you a message from portfolio',
          email: form.email.value,
          message: form.message.value
        }, 
      }).then(onSubmitSuccess, onSubmitError);
    }

    function onContactInput(event){
      contactSubmit.attr('disabled', !contactMessage.value.length);
    }

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

  function darkmodeSwitcher() {
    const btn = document.querySelector('#js-toggle-darkmode');

    function enableDark() {
      document.body.classList.add('dark')
    }

    function disableDark() {
      document.body.classList.remove('dark')
    }

    btn.addEventListener('click', function() {
      document.body.classList.toggle('dark');  
    })

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      enableDark()
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const isDark = e.matches;
      isDark ? enableDark() : disableDark()
    });
  }
  
  contactForm()
  darkmodeSwitcher()
})();
