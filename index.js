// TYPEWRITE PLUGIN
$('#typewriteText')
    .on('typewriteStarted', function() {
        console.log('typewrite has started');
    })
    .on('typewriteComplete', function() {
        console.log('typewrite has complete');
    })
    .on('typewriteTyped', function(event, data) {
        console.log('typewrite has typed', data);
    })
    .on('typewriteRemoved', function(event, data) {
        console.log('typewrite has removed', data);
    })
    .on('typewriteNewLine', function() {
        console.log('typewrite has added a new line');
    })
    .on('typewriteSelected', function(event, data) {
        console.log('typewrite has selected text', data);
    })
    .on('typewriteDelayEnded', function() {
        console.log('typewrite delay has ended');
    })
    .typewrite({
        actions: [
            // {type: 'WITAJ '},
            // {type: '<br>'},
            {type: 'ORGANMISTRZOSTWO '},
            {type: '<br>'},
            {type: 'TOMASZ SZAŁAMAJA'},
            {delay: 1500},
            {remove: {num: 1, type: 'stepped'}},
            {select: {from: 26, to: 34}},
            {delay: 2000},
            {remove: {num: 8, type: 'whole'}},
            {delay: 300},
            {type: 'SZAŁAJDA. '},
        ]
    });




// FOOTER DATE
$(".footer-date").html(new Date().getFullYear());


// VALIDATION FROM Bootstrap

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
