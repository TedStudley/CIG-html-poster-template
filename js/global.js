$(document).ready(function () {
  $('.media').each(function ( index ) {
    let imgwidth = $(this).children("media-image").width();
    alert(imgwidth);
  });
});
