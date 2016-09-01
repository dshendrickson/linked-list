//
//*** Global Variables - Listed alphabetically
//

var inputLink = $('#input-link');
var inputTitle = $('#input-title');
var numberOfBookmarks = 1;
var numberOfReadBookmarks = 0;
var numberOfUnreadBookmarks = 0;

//
//*** Functions - Listed alphabetically
//

function buildRow(title, link) {
  var read = '<td><button class="read-check" type="button" name="read">Read</td>';
  var remove = '<td><button class="remove" type="button" name="remove"> Remove </button> </td>';
  return `<tr><td>${title}</td><td><a href=${link}>${link}</a></td>${read}${remove}</tr>`;
};

function bookmarks() {
  numberOfBookmarks = $('tr').length - 1;
  return $('.number-bookmarks').text(numberOfBookmarks);
};

function clearReadBookmarks() {
  $('.read').remove();
};

function readBookmarks() {
  numberOfReadBookmarks = $('.read').length;
  return $('.number-read-bookmarks').text(numberOfReadBookmarks);
};

function toggleClearReadButton() {
  if($('.read').length <= 0) {
    $('#clear-read-button').prop('disabled', true);
  } else {
    $('#clear-read-button').prop('disabled', false);
  }
};

function toggleSubmitButton() {
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

// http://www.tricksofit.com/2013/12/regular-expression-with-jquery-validation#.V8edjZMrJhE
// http://stackoverflow.com/questions/2723140/validating-url-with-jquery-without-the-validate-plugin
function validLink(link) {
  return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(link);
};

//
//*** Events
//

//
//* Onload
//

toggleSubmitButton ();
bookmarks();
readBookmarks();
toggleClearReadButton()
unreadBookmarks();

//
//* Data Create
//

$(inputTitle).keyup(function() {
  toggleSubmitButton();
});

$(inputLink).keyup(function() {
  toggleSubmitButton();
});

$('#submit-button').on('click', function() {
  var link = inputLink.val();
  var title = inputTitle.val();
  if (link === '' || title === '') {
    alert('please enter a title and url');
  } else {
    if (validLink(link) === false) {
      alert('please enter a valid link');
    } else {
    row = buildRow(title, link);
    $('.link-list tr:last').after(row);
    $(inputTitle).val('');
    $(inputLink).val('');
    toggleSubmitButton();
    bookmarks();
    readBookmarks();
    toggleClearReadButton()
    unreadBookmarks();
    };
  };
});

//
//* Data Update
//

$('table').on('click', '.read-check', function () {
  $(this).parent().parent().toggleClass('read');
  bookmarks();
  readBookmarks();
  toggleClearReadButton()
  unreadBookmarks();
});

//
//* Data Delete
//

$('table').on('click', '.remove', function () {
  $(this).parents('tr').remove();
  bookmarks();
  readBookmarks();
  toggleClearReadButton()
  unreadBookmarks();
});

$('#clear-read-button').on('click', function() {
  clearReadBookmarks();
  bookmarks();
  readBookmarks();
  toggleClearReadButton()
  unreadBookmarks();
});
