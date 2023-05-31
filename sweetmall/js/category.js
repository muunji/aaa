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
  $(".left .cateSub").hide();
  $(".arrow").click(function () {
    $(this).siblings(".cateSub").slideDown(500);
    $(this).parents().siblings().find(".cateSub").slideUp(500);
  });
  //   menu click
  function brandSlide() {
    $(".brand ul").animate({ marginLeft: "-145px" }, 3000, function () {
      $(".brand ul li").eq(0).appendTo(".brand ul");
      $(".brand ul").css({ marginLeft: "0" });
    });
  }
  brandInterval = setInterval(brandSlide, 3000);
  // brandslide
  $(".filter > ul").hide();
  let c = 0;
  $(".filter button").click(function () {
    if (c == 0) {
      $(this).css({ color: "#f00", border: "1px solid #f00" });
      $(".filter > ul").slideDown(500);
      $(this).html("필터 닫기");
      c = 1;
    } else {
      $(this).css({ color: "#000", border: "1px solid #000" });
      $(".filter > ul").slideUp(500);
      $(this).html("필터 열기");
      c = 0;
    }
  });
});
