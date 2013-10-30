$(document).ready(function () {
  $('.media').each(function () {
    $(this).children(".media-caption").css("width", $(this).find("img").width());
  });
  
  $('.section-header').each(function () {
    var accentbar = $(this).append('<div class="section-header-accent-bar"></div>');
  });
  
});
