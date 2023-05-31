$(function () {
  var topScroll = $(".topScroll").offset();
  console.log(topScroll);
  $(window).scroll(function () {
    if ($(window).scrollTop() > topScroll.top) {
      $(".topScroll").addClass("menuScroll");
    } else {
      $(".topScroll").removeClass("menuScroll");
    }
  });
  //   스크롤
});
