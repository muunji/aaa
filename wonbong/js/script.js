$(function () {
  $(".scroll .menu .sub").css({ height: "0", overflow: "hidden" });
  $(".menuBg").css({ height: "0" });
  $(".scroll .menu").hover(
    function () {
      $(".scroll .menu .sub").css({ height: "240px", overflow: "hidden" });
      $(".menuBg").css({ height: "240px" });
    },
    function () {
      $(".scroll .menu .sub").css({ height: "0", overflow: "hidden" });
      $(".menuBg").css({ height: "0" });
    }
  );
  $(".scroll .menu > ul li").hover(
    function () {
      $(this).css("color", "#bfb800");
    },
    function () {
      $(this).css("color", "#727272");
    }
  );
  $(".scroll .menu .sub li").hover(
    function () {
      $(this).css("background", "#fff").css("color", "#bfb800");
    },
    function () {
      $(this).css("background", "none").css("color", "#fff");
    }
  );
  // menuhover
  $(".slide li:gt(0)").fadeOut();
  function visualNext() {
    $(".slide li:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo(".slide");
  }
  let visualInterval = setInterval(visualNext, 3000);
  //   visual slide
  $(".prodPic li").eq(0).find("a").addClass("on");
  function mypic(im, pa) {
    im.attr("src", pa)
      .css("opacity", "0.5")
      .stop()
      .animate({ opacity: "1" }, 1000);
  }
  let i = 1;
  function picmove() {
    if (i < 3) {
      i++;
    } else {
      i = 1;
    }
    $(".prodPic li")
      .eq(i - 1)
      .find("a")
      .children("img")
      .addClass("on");
    let path = "images/main" + i + ".jpg";
    let txtPath = "images/prod_txt" + i + ".png";
    mypic($(".pic img"), path);
    mypic($(".text img"), txtPath);
    $(".prodPic li a").each(function () {
      if ($(this).hasClass("on")) {
        $(this).removeClass("on");
      }
    });
    $(".prodPic li")
      .eq(i - 1)
      .find("a")
      .addClass("on");
  }
  let picInterval = setInterval(picmove, 2500);
  $(".prodPic li a").click(function (e) {
    e.preventDefault();
    let path = $(this).attr("href");
    let txtPath = $(".prodTxt li a").attr("href");
    console.log(path);
    console.log(txtPath);
    mypic($(".pic img"), path);
    mypic($(".text img"), txtPath);
    $(".prodPic li a").each(function () {
      if ($(this).hasClass("on")) {
        $(this).removeClass("on");
      }
    });
    $(this).addClass("on");
  });
  $(".pic").hover(
    function () {
      clearInterval(picInterval);
    },
    function () {
      picInterval = setInterval(picmove, 2500);
    }
  );
  //   prod slide
  $(".subBtn li").eq(0).find("a").addClass("on");
  function mysub(im, pa) {
    im.attr("src", pa);
  }
  let subI = 1;
  function subMove() {
    if (subI < 3) {
      subI++;
    } else {
      subI = 1;
    }
    $(".subBtn li")
      .eq(subI - 1)
      .find("a")
      .children("img")
      .addClass("on");
    let path = "images/sub" + subI + ".png";
    mysub($(".subPic img"), path);
    $(".subBtn li a").each(function () {
      if ($(this).hasClass("on")) {
        $(this).removeClass("on");
      }
    });
    $(".subBtn li")
      .eq(subI - 1)
      .find("a")
      .addClass("on");
  }
  let subInterval = setInterval(subMove, 2000);
  $(".subBtn li a").click(function (e) {
    e.preventDefault();
    let path = $(this).attr("href");
    console.log(path);
    mysub($(".subPic img"), path);
    $(".subBtn li a").each(function () {
      if ($(this).hasClass("on")) {
        $(this).removeClass("on");
      }
    });
    $(this).addClass("on");
  });
  $(".projProd").hover(
    function () {
      clearInterval(subInterval);
    },
    function () {
      subInterval = setInterval(subMove, 2000);
    }
  );
  //   projProd slide
  let banWidth = $(".ban").width();
  console.log(banWidth);
  $(".controll .next").click(function () {
    $(".banner .ban > ul").animate({ left: "-1150px" }, 500);
  });
  $(".controll .prev").click(function () {
    $(".banner .ban > ul").animate({ left: "0px" }, 500);
  });
  //   banner slide
  var menuScroll = $(".scroll").offset();
  console.log(menuScroll);
  function logoScroll(img, path) {
    img.attr("src", path);
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > menuScroll.top) {
      $(".scroll").addClass("topScroll");
      $(".menuBg").addClass("bgScroll");
      logoScroll($(".project img"), "images/brand_logo_scroll.png");
    } else {
      $(".scroll").removeClass("topScroll");
      $(".menuBg").removeClass("bgScroll");
      logoScroll($(".project img"), "images/brand_logo.png");
    }
  });
  // scroll
});
