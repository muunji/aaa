let slideani = document.getElementById("slideShow");
let slides = document.querySelector(".slides");
let slideImg = document.querySelectorAll(".slides li");
let dots = document.querySelectorAll(".dot");
let currentIdx = 0;
let slideCount = slideImg.length;
dots[0].className += " active";
let prev = document.querySelector(".prev"); //이전 버튼
let next = document.querySelector(".next"); //다음 버튼
let wd = slideani.offsetWidth;
console.log(wd);
let slideWidth = wd;
makeClone(); // 처음이미지와 마지막 이미지 복사 함수
initfunction(); //슬라이드 넓이와 위치값 초기화 함수
function makeClone() {
  let cloneSlide_first = slideImg[0].cloneNode(true);
  let cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first);
  //slides.prepend(cloneSlide_last);
  slides.insertBefore(cloneSlide_last, slides.firstElementChild);
}
function initfunction() {
  slides.style.width = slideWidth * (slideCount + 2) + "px";
  slides.style.left = -slideWidth + "px";
}
function showSlide(n) {
  for (i = 0; i < slideImg.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[n].className += " active";
  slides.style.left = -(n + 1) * slideWidth + "px";
  slides.style.transition = "0.5s";
}
/*function currentSlide(n) {
        showSlide((currentIdx = n));
      }*/
dots.forEach(function (value, index) {
  console.log(value);
  value.onclick = function (e) {
    let j = Array.from(dots).indexOf(e.target);
    showSlide((currentIdx = j));
  };
});
next.onclick = function () {
  if (currentIdx <= slideCount - 1) {
    //슬라이드이동
    slides.style.left = -(currentIdx + 2) * slideWidth + "px";
    slides.style.transition = "0.5s";
  }
  if (currentIdx === slideCount - 1) {
    //마지막 슬라이드 일때
    setTimeout(function () {
      //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
      slides.style.left = -slideWidth + "px";
      slides.style.transition = "0s";
    }, 500);
    currentIdx = -1;
  }
  currentIdx += 1;
  for (i = 0; i < slideImg.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[currentIdx].className += " active";
};
let interval = setInterval(function () {
  next.onclick();
}, 2000);
prev.onclick = function () {
  //이전 버튼 눌렀을때
  console.log(currentIdx);
  if (currentIdx >= 0) {
    slides.style.left = -currentIdx * slideWidth + "px";
    slides.style.transition = "0.5s";
  }
  if (currentIdx === 0) {
    setTimeout(function () {
      slides.style.left = -slideCount * slideWidth + "px";
      slides.style.transition = "0s";
    }, 500);
    currentIdx = slideCount;
  }
  currentIdx -= 1;
  for (i = 0; i < slideImg.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[currentIdx].className += " active";
};
function slide_stop() {
  clearInterval(interval);
}
slideani.addEventListener("mouseenter", function () {
  slide_stop();
});
slideani.addEventListener("mouseleave", function () {
  interval = setInterval(function () {
    next.onclick();
  }, 2000);
});
