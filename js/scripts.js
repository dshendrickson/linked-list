var inputTitle;
var inputLink;
var read = '<td><input class="read-check" type="checkbox"></td>';
var remove = '<td><button class="remove" type="button" name="remove"> Remove </button> </td>';
// var unRead;

$('#submit-button').on('click', function() {
  inputTitle = $('#input-title').val();
  inputLink = $('#input-link').val();
  $('.link-list tr:last').after
    (`<tr><td>${inputTitle}
    </td><td><a href='https://${inputLink}'></a>
    </td> ${read} ${remove}</tr>`);
});

$('table').delegate('td', 'click', function () {
 $(this).toggleClass('read', 'unread');
});

$('table').delegate('.remove', 'click', function () {
  $(this).parents('tr').remove();
});


//delegates work when clicked anywhere on the row not just the box/button
//the class of read/uread is only applied to the td element
//need to get the first row to not show up on page load
