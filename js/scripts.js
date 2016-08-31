var read = '<td><button class="read-check" type="button" name="read">Read</td>';
var remove = '<td><button class="remove" type="button" name="remove"> Remove </button> </td>';


$('#submit-button').on('click', function() {
var inputTitle = $('#input-title').val();
var inputLink = $('#input-link').val();
    if (inputTitle === '' || inputLink === '') {
    alert('please enter information');
      } else {
        $('.link-list tr:last').after
        (`<tr><td>${inputTitle}
        </td><td><a href='https://${inputLink}'>${inputLink}</a>
        </td> ${read} ${remove}</tr>`);
  };
});

$('table').on('click', '.read-check', function () {
 $(this).parent().parent().toggleClass('read');
});

$('table').on('click', '.remove', function () {
  $(this).parents('tr').remove();
});



//make site responsive
