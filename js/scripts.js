var inputTitle;
var inputLink;
var read = '<td><button class="read-check" type="button" name="read">Read</td>';
var remove = '<td><button class="remove" type="button" name="remove"> Remove </button> </td>';
var removeButton = document.querySelector('#submit-button');
// var unRead;


$('#submit-button').on('click', function() {
  inputTitle = $('#input-title').val();
  inputLink = $('#input-link').val();
  $('.link-list tr:last').after
    (`<tr><td>${inputTitle}
    </td><td><a href='https://${inputLink}'>${inputLink}</a>
    </td> ${read} ${remove}</tr>`);
});

$('table').on('click', '.read-check', function () {
 $(this).parent().parent().toggleClass('read');
});

$('table').on('click', '.remove', function () {
  $(this).parents('tr').remove();
});





//links show up as read when adding a new row
//delegates work when clicked anywhere on the row not just the box/button
//the class of read/uread is only applied to the td element
//get the url to show up
//need to get the first row to not show up on page load
