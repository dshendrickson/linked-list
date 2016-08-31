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

var numberOfBookmarks = 0;
var numberOfReadBookmarks = 0;
var numberOfUnreadBookmarks = 0;

// $('.number-bookmarks').text(numberOfBookmarks);
// $('.number-read-bookmarks').text(numberOfReadBookmarks);
// $('.number-unread-bookmarks').text(numberOfUnreadBookmarks);

function bookmarks() {
  numberOfBookmarks = $('tr').size();
  return $('.number-bookmarks').text(numberOfBookmarks);
};

function readBookmarks() {
  numberOfReadBookmarks = $('.read').size();
  return $('.number-read-bookmarks').text(numberOfReadBookmarks);
};

function unreadBookmarks() {
  numberOfUnreadBookmarks = numberOfReadBookmarks - numberOfBookmarks;
  return $('.number-unread-bookmarks').text(numberOfUnreadBookmarks);
};

//** Program flow

toggleSubmitButton ();

$(inputTitle).keyup(function() {
  toggleSubmitButton();
});

$(inputLink).keyup(function() {
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
    toggleSubmitButton();
    bookmarks();
    readBookmarks();
    unreadBookmarks();
  };
});

$('table').on('click', '.read-check', function () {
  $(this).parent().parent().toggleClass('read');
});

$('table').on('click', '.remove', function () {
  $(this).parents('tr').remove();
});



//make site responsive
//submit button disabled
//bookmark counter
