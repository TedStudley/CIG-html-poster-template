$(document).ready(function () {
  scripts = $('script').detach();
  scripts.appendTo('head');
  $('head').append('<link rel="stylesheet" href="css/poster.css"/>');
  $('head').append('<link rel="stylesheet" href="css/bootstrap.min.css"/>');

  $('body').prepend('<div id="poster">' + $('poster').html() + '</div>');
  $('poster').remove();

  $('#poster').prepend('<div class="row" id="poster-header"></div>');
  $('#poster-header').append('<div class="col-xs-12" id="poster-title"></div>');
  $('#poster-title').append($('title').html());
  $('#poster-header').append('<div class="col-xs-12" id="poster-authors"></div>');
  var authors = $('author');
  for (var i = 0; i < authors.length; i += 1) {
    $('#poster-authors').append($(authors[i]).attr('name'));
    $('#poster-authors').append('<sup>[' + $(authors[i]).attr('aff') + ']</sup>');
    if(i != authors.length - 1) {
      $('#poster-authors').append(', ');
    }
  }
  $('title').remove();
  $('author').remove();

  $('#poster').append('<div class="row" id="header-accent-bar-secondary"></div>');
  $('#poster').append('<div class="row" id="header-accent-bar-primary"></div>');
});
