$(function () {
  //pageDrag
  $(window).scroll(function () {
    let ht = $(window).scrollTop();
    let h = $(window).height();
    console.log(ht);
    // if(ht>=961){
    //     $(".ma")
    // }
  });
  // main
  $(".lineL").animate({ height: "100%" }, 1000);
  $(".lineR").animate({ height: "100%" }, 1000, function () {
    $(".main img").animate({ opacity: "1" }, 1000, function () {
      $(".main .title").animate({ top: "130px" }, 1000);
      $(".main .title P:first-child").animate(
        { opacity: "1" },
        500,
        function () {
          $(".main .title p:nth-child(2)").animate(
            { opacity: "1" },
            500,
            function () {
              $(".main .text").animate({ bottom: "120px" }, 1000);
              $(".main .text p:first-child").animate(
                { opacity: "1" },
                500,
                function () {
                  $(".main .text p:nth-child(2)").animate(
                    { opacity: "1" },
                    500,
                    function () {
                      $(".main .drag").animate(
                        { bottom: "20px", opacity: "1" },
                        500
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
  $("header").animate({ top: "0" }, 1000);
});
