$(document).ready(function () {
  $('.media').each(function () {
    $(this).children(".media-caption").css("width", $(this).find("img").width());
  });
});
