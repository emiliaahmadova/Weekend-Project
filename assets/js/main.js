let showBtn = document.querySelector(".menu-button");
let closeBtn = document.querySelector(".btn-close");
let headerMobile = document.querySelector(".header-mobile");
let scrollUp = document.querySelector(".scroll-up");
let html = document.querySelector("html");
let body = document.querySelector("body");

//events
showBtn.addEventListener("click", overlayShow);
closeBtn.addEventListener("click", overlayClose);
window.addEventListener("scroll", stickyNavbar);
headerMobile.addEventListener("click", function (e) {
  if (e.target == this) {
    overlayClose();
  }
});

//functions
function overlayShow() {
  html.classList.add("block-scroll");
}
function overlayClose() {
  html.classList.remove("block-scroll");
}
function stickyNavbar() {
  let headNavbar = document.querySelector(".header-navbar");
  headNavbar.classList.toggle("fixed-navbar", window.scrollY > 75);
}
$(document).ready(function () {
  $(".head-slider").owlCarousel({
    loop: true,
    items: 1,
    dots: true,
  });
  $(".projects-slider").owlCarousel({
    loop: true,
    dots: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      470: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".quote-slider").owlCarousel({
    loop: true,
    items: 2,
    margin: 30,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
  $(".reklam-slider").owlCarousel({
    loop: true,
    margin: 20,
    items: 5,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  $(".dropdown-overlay").click(function () {
    $(this).next().slideToggle("slow");
  });
  $(window).scroll(function () {
    if (window.scrollY > 75) {
      $(".scroll-up").fadeIn().css("display", "flex");
    }
    if (window.scrollY < 75) {
      $(".scroll-up").fadeOut();
    }
  });
  $(".scroll-up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1100, "swing");
  });
  $(".scroll-down").click(function () {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    $("html, body").animate({ scrollTop: scrollBottom }, 1100, "swing");
  });
  $(".editorials").waypoint(
    function (direction) {
      $(".editorials")
        .addClass("animate__animated")
        .css("visibility", "visible")
        .css("animation-duration", "1500ms")
        .css("animation-delay", "0ms")
        .css("animation-name", "fadeInUp");
    },
    {
      offset: "800px",
    }
  );
  $(".active-card").waypoint(
    function (direction) {
      $(".active-card")
        .addClass("animate__animated")
        .css("animation-name", "fadeIn")
        .css("visibility", "visible")
        .css("animation-duration", "1500ms")
        .css("animation-delay", "0ms");
      $(".cards").css("visibility", "visible");
    },
    {
      offset: "800px",
    }
  );

  $(".second-btn").click(function () {
    $.fn.secondBtn();
  });
  $(".first-btn").click(function () {
    $.fn.firstBtn();
  });
  $(".switch-btn").click(function () {
    let circle = $(".circle");
    circle.toggleClass("circle-right");

    if (circle.hasClass("circle-right")) {
      $.fn.secondBtn();
    } else {
      $.fn.firstBtn();
    }
  });

  //functions
  $.fn.secondBtn = function () {
    $(".circle").addClass("circle-right");
    $(".first-btn").removeClass("active-button");
    $(".second-btn").addClass("active-button");
    $(".active-card")
      .next()
      .addClass("active-card")
      .addClass("animate__animated")
      .css("animation-name", "fadeIn")
      .css("animation-duration", "1500ms")
      .css("animation-delay", "0ms");
    $(".active-card").prev().removeClass("active-card");
  };
  $.fn.firstBtn = function () {
    $(".circle").removeClass("circle-right");
    $(".second-btn").removeClass("active-button");
    $(".first-btn").addClass("active-button");
    $(".active-card").prev().addClass("active-card");
    $(".active-card").next().removeClass("active-card");
  };
});
