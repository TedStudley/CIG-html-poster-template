$(document).ready(function () {
  scripts = $('script').detach();
  scripts.appendTo('head');
  $('head').append('<link rel="stylesheet" href="css/poster.css"/>');
  $('head').append('<link rel="stylesheet" href="css/bootstrap.min.css"/>');
  $('head').append('<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>');
  $('head').append('<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax: {inlineMath: [["$","$"], ["\\\\(","\\\\)"]]}});</script>');

  $('body').prepend('<div id="poster">' + $('poster').html() + '</div>');
  $('poster').remove();

  $('#poster').prepend('<div class="row" id="poster-header"></div>');
  
  $('#poster').append('<div class="row" id="header-accent-bar-secondary"></div>');
  $('#poster').append('<div class="row" id="header-accent-bar-primary"></div>');

  $('#poster').append('<div class="row" id="poster-body"></div>');
  $('#poster').append('<div class="row" id="footer-accent-bar"></div>');
  $('#poster').append('<div class="row" id="footer"></div>');
  
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

  $('#poster-body').append('<div class="col-xs-4 col col-left" id="col-1"></div>');
  $('#col-1').append($('column-1').html());
  $('column-1').remove();
  $('#poster-body').append('<div class="col-xs-4 col col-middle" id="col-2"></div>');
  $('#col-2').append($('column-2').html());
  $('column-2').remove();
  $('#poster-body').append('<div class="col-xs-4 col col-right" id="col-3"></div>');
  $('#col-3').append($('column-3').html());
  $('column-3').remove();

  $('section-header').each(function () {
    var header = $(this).contents();
    $(header).unwrap().wrap('<div class="section-header"/>').wrap('<p/>');
    $(header).parent().after('<div class="section-header-accent-bar"/>');
  });
  
  $('media').each(function () {
    $(this).wrap('<div class="media" style="' + $(this).attr('style') + '"></div>');
    $(this).wrap('<div class="media-image"></div>');
    var mediaImgDiv = $(this).parent();
    var mediaDiv = $(mediaImgDiv).parent();
    $(mediaImgDiv).append('<img src="' + $(this).attr('src') +'" style="' + $(this).attr('imgSize') + '"/>');
    $(mediaDiv).append('<div class="media-caption">' + $(this).attr('caption') + '</div>');
    $(mediaImgDiv).find('img').load(function () {
      $(this).parent().parent().find('.media-caption').css('width', $(this).width());
    });
    $(this).remove();
  });
  
  $('equation-box').each(function () {
    $(this).wrap('<div class="media" style="width: 99%;"> </div>');
    $(this).wrap('<p></p>');
  });

  $('#footer').append('<div class="col-xs-4" id="footer-logo-left"></div>');
  $('#footer-logo-left').html('<img id="CIG-logo" src="images/logos/CIG-logo.gif">');
  $('#footer').append('<div class="col-xs-4" id="footer-center"></div>');
  $('#footer-center').append('<div id="footer-notes"></div>');
  var affiliations = $('affiliation');
  for (var i = 0; i < affiliations.length; i += 1) {
    $('#footer-notes').append('[' + $(affiliations[i]).attr('aff') + ']: ' +
                               $(affiliations[i]).attr('name') + ', ' + 
                               $(affiliations[i]).attr('loc') + '<br>');
  }
  $('#footer-notes').append('<br>' + $('footer-note').html());
  $('footer-note').remove();
  $('#footer').append('<div class="col-xs-1" id="footer-logo-sm-right"></div>');
  $('#footer-logo-sm-right').html('<img id="NSF-logo" src="images/logos/NSF-logo.jpg">');
  $('#footer').append('<div class="col-xs-3" id="footer-logo-right"></div>');
  $('#footer-logo-right').html('<img id="UCD-logo" src="images/logos/ucdavis-logo.png">'); 

});
