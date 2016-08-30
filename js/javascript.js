var inputTitle;
var inputLink;
var read = '<td><input class="read-check" type="checkbox"></td>';
var remove = '<td><button class="remove" type="button" name="remove"> Remove </button> </td>';

$('#submit-button').on('click', function() {
  inputTitle = $('#input-title').val();
  inputLink = $('#input-link').val();
  $('.link-list tr:last').after
    ('<tr><td>'+ inputTitle +
    '</td><td>'+ inputLink +
    '</td>'+ read + remove +'</tr>');
  $('.remove').on('click', function() {
    $(this).parents('tr').remove();
  $('.read-check').on ('click', function() {
    $(this).addClass('.read');
    });
  });
});
