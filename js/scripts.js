var inputTitle;
var inputLink;
var read = '<td><input class="read-check" type="checkbox"></td>';
var remove = '<td><button class="remove" type="button" name="remove"> Remove </button> </td>';
var unRead;

$('#submit-button').on('click', function() {

  inputTitle = $('#input-title').val();
  inputLink = $('#input-link').val();

  $('.link-list tr:last').after
    (`<tr><td>${inputTitle}
    </td><td><a href='https://${inputLink}'>link</a>
    </td> ${read} ${remove}</tr>`);

  $('.remove').on('click', function() {
    $(this).parents('tr').remove();
  });

  $('.read-check').on('click', function() {
    if ($('.read-check:checked')) {
      $(this).parents('tr').addClass('read').css('background-color', 'red');
    }
    if ($('.read-check: checked')) {
      $(this).parents('tr').addClass('read').css('background-color', 'red');
    };
  });
});

//need to toggle the classes (when box is unchecked it still has class of read)
//need to make the button functions work outside of the #submit-button
//need to get the first row to not show up on page load
