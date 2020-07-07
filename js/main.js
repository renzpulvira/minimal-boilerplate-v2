const jquery = require("jquery");
import Glide from "@glidejs/glide";
$ = window.$ = window.jQuery = jquery;
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@glidejs/glide/dist/css/glide.core";
import "@glidejs/glide/dist/css/glide.theme";
import "../scss/main.scss";

const smooth_scroll = () => {
  $("a.scroll").each(function () {
    $(this).on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          1000,
          function () {
            $(".header__container").addClass("active");
          }
        );
      }
    });
  });
};

const deferImages = () => {
  var imgDefer = document.getElementsByTagName("img");
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute("data-src")) {
      imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
    }
  }
};

const deferIframes = () => {
  $("iframe").each(function () {
    $(this).attr("src", $(this).attr("data-src"));
  });
};

const initGlide = () => {
  new Glide(".glide").mount();
};

const testimonialSlider = () => {
  $("#testimonial-slider").slick({
    arrows: true,
    dots: true,
    infinite: true,
  });
};

const bannerSlider = (selector) => {
  $(selector).slick({
    arrows: false,
    dots: false,
    infinite: true,
  });
};

// Run functions on load
$(() => {
  smooth_scroll();
  deferImages();
  deferIframes();
  initGlide();
  // bannerSlider("#js-banner-slider");
});

// Back to top function
$(".container").on("click", ".back-to-top", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 800);
});

// Run functions on resize
$(document).on("load resize", () => {
  // Code
});
