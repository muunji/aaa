$(function () {
  $(".visualPop").css("display", "none");
  $(".visual .listPop").click(function () {
    $(".listPop").addClass("list");
    $(".visualPop").css("display", "flex");
    $(".recom .recomProd .swiper").css("z-index", "-10");
  });
  $(".visualPop .close").click(function () {
    $(".visualPop").css("display", "none");
    $(".listPop").removeClass("list");
    $(".recom .recomProd .swiper").css("z-index", "0");
  });
  // visualPop
  $(".side").css({ right: "-210px" });
  let x = $(".popup").css("right");
  console.log(x);
  $(".popup .up").click(function () {
    if (x == -35 + "px") {
      $(".side").animate({ right: "0" }, 500);
      $(".popup").animate({ right: "160px" }, 500);
      $(".popup .up li:first-child").addClass("off");
      $(".popup .up li:nth-child(2)").addClass("on");
      x = 160 + "px";
    } else {
      $(".side").animate({ right: "-210px" }, 500);
      $(".popup").animate({ right: "-35px" }, 500);
      $(".popup .up li:first-child").removeClass("off");
      $(".popup .up li:nth-child(2)").removeClass("on");
      x = -35 + "px";
    }
  });
  //side
  function saleTime() {
    let now = new Date();
    let nowH = now.getHours();
    let nowM = now.getMinutes();
    let nowS = now.getSeconds();
    let hour = 24;
    let min = 60;
    let sec = 60;
    let timeH = hour - nowH;
    let timeM = min - nowM;
    let timeS = sec - nowS;
    if (timeH < 10) {
      timeH = "0" + timeH;
    } else if (timeH < 0) {
      timeH = "00";
    }
    if (timeM < 10) {
      timeM = "0" + timeM;
    } else if (timeM < 0) {
      timeM = "00";
    }
    if (timeS < 10) {
      timeS = "0" + timeS;
    } else if (timeS < 0) {
      timeS = "00";
    }
    $(".timer").html(timeH + " : " + timeM + " : " + timeS);
  }
  let interval = setInterval(saleTime, 1000);
  // saleTimer
  $(".sale .left").css("display", "none");
  let w = 0;
  console.log(w);
  $(".sale .right").click(function () {
    console.log(w);
    if (w > -600) {
      w = w - 295;
      $(".saleProd").css("left", w + "px");
    } else if (w < -600) {
      $(".saleProd").css("left", "-885px");
      $(".sale .right").css("display", "none");
      w = w - 0;
    }
    $(".sale .left").css("display", "block");
  });
  $(".sale .left").click(function () {
    if (w < 0) {
      w = w + 295;
      $(".saleProd").css("left", w + "px");
    }
    if (w == 0) {
      w = 0;
      $(".saleProd").css("left", "0px");
      $(".sale .left").css("display", "none");
    }
    $(".sale .right").css("display", "block");
  });
  // sale
  $(".sweetTv .left").css("display", "none");
  let t = 0;
  console.log(t);
  $(".sweetTv .right").click(function () {
    $(".sweetTv .left").css("display", "block");
    console.log(t);
    if (t > -1200) {
      t = t - 400;
      $(".tvScreen").css("left", t + "px");
    } else if (t == -1200) {
      $(".sweetTv .right").css("display", "none");
    }
  });
  $(".sweetTv .left").click(function () {
    $(".sweetTv .right").css("display", "block");
    if (t < 0) {
      t = t + 400;
      $(".tvScreen").css("left", t + "px");
    } else if (t == 0) {
      $(".sweetTv .left").css("display", "none");
    }
  });
  // tv
  function tvbgSlide() {
    $(".tvBg").animate({ marginLeft: "-1200px" }, 5000, function () {
      $(".tvBg li").eq(0).appendTo(".tvBg");
      $(".tvBg").css({ marginLeft: "0" });
    });
  }
  tvInterval = setInterval(tvbgSlide, 5000);
  // tvbackground
  $(".insta .left").css("display", "none");
  let i = 0;
  console.log(i);
  $(".insta .right").click(function () {
    console.log(i);
    if (i > -500) {
      i = i - 240;
      $(".board > ul").css("left", i + "px");
    } else if (i < -500) {
      $(".board > ul").css("left", "-700px");
      $(".insta .right").css("display", "none");
    }
    $(".insta .left").css("display", "block");
  });
  $(".insta .left").click(function () {
    if (i < 0) {
      i = i + 240;
      $(".board > ul").css("left", i + "px");
    } else if (i == 0) {
      i = 0;
      $(".board > ul").css("left", "0px");
      $(".insta .left").css("display", "none");
    }
    $(".insta .right").css("display", "block");
  });
  //instaBorad
  var topScroll = $(".topScroll").offset();
  console.log(topScroll);
  $(window).scroll(function () {
    if ($(window).scrollTop() > topScroll.top) {
      $(".topScroll").addClass("menuScroll");
    } else {
      $(".topScroll").removeClass("menuScroll");
    }
  });
  // 스크롤 내릴때 상단 메뉴 고정
  $(".scroll li:first").click(function () {
    $("html").animate({ scrollTop: "0" }, 500);
  });
  $(".scroll li:last").click(function () {
    $("html").animate({ scrollTop: 4000 }, 1000);
  });
  //버튼으로 상하단 이동
});
