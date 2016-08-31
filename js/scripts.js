var inputTitle = $('#input-title');
var inputLink = $('#input-link');
var read = '<td><button class="read-check" type="button" name="read">Read</td>';
var remove = '<td><button class="remove" type="button" name="remove"> Remove </button> </td>';

//** Funtions

function toggleSubmitButton () {
  if($('#input-title').val() != '' && $('#input-link').val() != '') {
    $('#submit-button').prop('disabled', false);
  } else {
    $('#submit-button').prop('disabled', true);
  }
};

//** Program flow

toggleSubmitButton ();

$(inputTitle).keyup(function() {
  toggleSubmitButton();
});

$('#input-link').keyup(function() {
  toggleSubmitButton();
});

$('#submit-button').on('click', function() {
  var title = inputTitle.val();
  var link = inputLink.val();
  if (inputTitle === '' || inputLink === '') {
    alert('please enter valid title and url');
  } else {
    $('.link-list tr:last').after(`<tr><td>${title}</td><td><a href='https://${link}'>${link}</a></td> ${read}${remove}</tr>`);
    $(inputTitle).val('');
    $(inputLink).val('');
    toggleSubmitButton ();
  };
});

$('table').on('click', '.read-check', function () {
 $(this).parent().parent().toggleClass('read');
 // $(this).parent().parent().css('background', 'grey');
});

$('table').on('click', '.remove', function () {
  $(this).parents('tr').remove();
});



//make site responsive
//submit button disabled
//bookmark counter
