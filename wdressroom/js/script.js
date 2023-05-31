$(function () {
  // menu fix
  let scroll = $("header").offset();
  console.log(scroll);
  $(window).scroll(function () {
    if ($(window).scrollTop() > scroll.top) {
      $("header").addClass("menuScroll");
    } else {
      $("header").removeClass("menuScroll");
    }
  });
  // visual slide
  let visCurrent = 0;
  let visI = $(".visualBox li").length;
  $(".btn li").eq(0).addClass("on");
  let visWidth = $(".visualBox li").width();
  console.log(visWidth);
  $(".visualBox").append($(".visualBox li").eq(0).clone());
  $(".visualBox").prepend(
    $(".visualBox li")
      .eq(visI - 1)
      .clone()
  );
  $(".visualBox").css({
    width: visWidth * (visI + 2) + "px",
    left: -visWidth + "px",
  });
  function visSlide(n) {
    $(".btn li").removeClass("on");
    $(".btn li").eq(n).addClass("on");
    $("visualBox").css({
      left: -(n + 1) * visWidth + "px",
      transition: "0.5s",
    });
  }
  $(".btn li").click(function () {
    let visN = $(this).index();
    visSlide((visCurrent = visN));
  });
  $(".next").click(function () {
    if (visCurrent <= visI - 1) {
      $(".visualBox").css({
        left: -(visCurrent + 2) * visWidth + "px",
        transition: "0.5s",
      });
    }
    if (visCurrent == visI - 1) {
      setTimeout(function () {
        $(".visualBox").css({ left: -visWidth + "px", transition: "0s" });
      }, 500);
      visCurrent = -1;
    }
    visCurrent += 1;
    $(".btn li").removeClass("on");
    $(".btn li").eq(visCurrent).addClass("on");
  });
  $(".prev").click(function () {
    if (visCurrent >= 0) {
      $(".visualBox").css({
        left: -visCurrent * visWidth + "px",
        transition: "0.5s",
      });
    }
    if (visCurrent == 0) {
      setTimeout(function () {
        $(".visualBox").css({
          left: -visI * visWidth + "px",
          transition: "0s",
        });
      }, 500);
      visCurrent = visI;
    }
    visCurrent -= 1;
    $(".btn li").removeClass("on");
    $(".btn li").eq(visCurrent).addClass("on");
  });
  let visInterval = setInterval(function () {
    $(".next").trigger("click");
  }, 2000);
  $(".visual").hover(
    function () {
      clearInterval(visInterval);
    },
    function () {
      visInterval = setInterval(function () {
        $(".next").trigger("click");
      }, 2000);
    }
  );
  // nav scroll showup
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $(".explain .title").addClass("active");
    } else {
      $(".explain .title").removeClass("active");
    }
    if ($(window).scrollTop() > 700) {
      $(".explain .exSub").addClass("on");
    } else {
      $(".explain .exSub").removeClass("on");
    }
    if ($(window).scrollTop() > 900) {
      $(".explain .tag").addClass("scroll");
    } else {
      $(".explain .tag").removeClass("scroll");
    }
    if ($(window).scrollTop() > 1100) {
      $(".banner").addClass("scroll2");
    } else {
      $(".banner").removeClass("scroll2");
    }
    if ($(window).scrollTop() > 1700) {
      $(".best").addClass("scroll3");
    } else {
      $(".best").removeClass("scroll3");
    }
    if ($(window).scrollTop() > 2300) {
      $(".rose").addClass("scroll4");
    } else {
      $(".rose").removeClass("scroll4");
    }
    if ($(window).scrollTop() > 4300) {
      $(".bg .copy div").addClass("scroll5");
    } else {
      $(".bg .copy div").removeClass("scorll5");
    }
    if ($(window).scrollTop() > 5000) {
      $(".banner2 .banBox ul").addClass("scroll6");
    } else {
      $(".banner2 .banBox ul").removeClass("scorll6");
    }
    if ($(window).scrollTop() > 5400) {
      $(".Youtube").addClass("scroll7");
    } else {
      $(".Youtube").removeClass("scorll7");
    }

    if ($(window).scrollTop() > 6200) {
      $(".review").addClass("scroll8");
    } else {
      $(".review").removeClass("scorll8");
    }
  });
  // Best owl
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
  // bg scroll
  let bgScroll = $(".bgImg").offset();
  console.log(bgScroll);
  $(window).scroll(function () {
    if ($(window).scrollTop() > bgScroll.top) {
      $(".bgImg").addClass("bgFix");
    } else {
      $(".bgImg").removeClass("bgFix");
    }
  });
  // review
  $(".bxslider").bxSlider({
    minSlides: 4,
    maxSlides: 3,
    slideWidth: 500,
    slideMargin: 10,
  });
  // button
  $(".up").click(function () {
    $("html").animate({ scrollTop: "0" }, 1000);
  });
  $(".down").click(function () {
    $("html").animate({ scrollTop: "10000" }, 1500);
  });
});
