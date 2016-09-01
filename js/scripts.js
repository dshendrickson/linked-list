//
//** Global Variables - Listed alphabetically
//

var inputLink = $('#input-link');
var inputTitle = $('#input-title');
var numberOfBookmarks = 1;
var numberOfReadBookmarks = 0;
var numberOfUnreadBookmarks = 0;

//
//** Functions - Listed alphabetically
//

function buildRow(title, link) {
  var read = '<td><button class="read-check" type="button" name="read">Read</td>';
  var remove = '<td><button class="remove" type="button" name="remove"> Remove </button> </td>';
  return `<tr><td>${title}</td><td><a href='https://${link}'>${link}</a></td> ${read}${remove}</tr>`;
};

function bookmarks() {
  numberOfBookmarks = $('tr').length - 1;
  return $('.number-bookmarks').text(numberOfBookmarks);
};

function readBookmarks() {
  numberOfReadBookmarks = $('.read').length;
  return $('.number-read-bookmarks').text(numberOfReadBookmarks);
};

function toggleSubmitButton () {
  if($('#input-title').val() != '' && $('#input-link').val() != '') {
    $('#submit-button').prop('disabled', false);
  } else {
    $('#submit-button').prop('disabled', true);
  }
};

function unreadBookmarks() {
  numberOfUnreadBookmarks = numberOfBookmarks - numberOfReadBookmarks;
  return $('.number-unread-bookmarks').text(numberOfUnreadBookmarks);
};

//
//** Program flow
//

toggleSubmitButton ();
bookmarks();
readBookmarks();
unreadBookmarks();

$(inputTitle).keyup(function() {
  toggleSubmitButton();
});

$(inputLink).keyup(function() {
  toggleSubmitButton();
});

$('#submit-button').on('click', function() {
  var link = inputLink.val();
  var title = inputTitle.val();
  if (inputTitle === '' || inputLink === '') {
    alert('please enter valid title and url');
  } else {
    row = buildRow(title, link);
    $('.link-list tr:last').after(row);
    $(inputTitle).val('');
    $(inputLink).val('');
    toggleSubmitButton();
    bookmarks();
    readBookmarks();
    unreadBookmarks();
  };
});

$('table').on('click', '.read-check', function () {
  $(this).parent().parent().toggleClass('read');
  bookmarks();
  readBookmarks();
  unreadBookmarks();
});

$('table').on('click', '.remove', function () {
  $(this).parents('tr').remove();
  bookmarks();
  readBookmarks();
  unreadBookmarks();
});



//make site responsive
//submit button disabled
//bookmark counter
