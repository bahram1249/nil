import "slick-carousel/slick/slick.min";
(function ($) {
  $(function () {
    $(".productSlider").slick({
      centerMode: false,
      slidesToShow: 1,
      rtl: true,
      arrows: true,
      dots: true,
      draggable: false,
      prevArrow: "<i class='icon-left'></i>",
      nextArrow: "<i class='icon-right'></i>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });

    $(".productSliderMultiple").slick({
      centerMode: false,
      rtl: true,
      infinite: true,
      dots: true,
      arrows: true,
      adaptiveHeight: true,
      swipeToSlide: true,
      draggable: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: "<i class='icon-left'></i>",
      nextArrow: "<i class='icon-right'></i>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });

    $(".megaLink").click(function () {
      $(".items").removeClass("active");
      $(".items[data-mega-item=" + $(this).data("mega-item") + "]").addClass(
        "active"
      );
    });

    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");
      $("nav").toggleClass("active");
    });
    $(".icon-search").click(function (e) {
      e.preventDefault();
      $(".searchBox").slideDown();
    });
    $(".icon-times").click(function () {
      $(".searchBox").slideUp();
    });
  });

  $(".radio").click(function () {
    console.log($(this));
    $(".radio").find("input[type='radio']").prop("checked", false);
    $(".radio").removeClass("active");
    $(this).find("input[type='radio']").prop("checked", true);
    $(this).addClass("active");
  });

  $(".filterItemSingle").click(function () {
    $(this).toggleClass("active");
  });
  $(
    ".filterItemSingle select, .filterItemSingle .controls, .filterItemSingle .checkbox"
  ).click(function (e) {
    e.stopPropagation();
  });
  $(function () {
    $("#price-range").slider({
      range: true,
      min: 0,
      max: 1000,
      values: [0, 1000],
      slide: function (event, ui) {
        $("#price-min").val(ui.values[0]);
        $("#price-max").val(ui.values[1]);
      },
    });
  });

  $("#price-min").change(function (event) {
    var minValue = $("#price-min").val();
    var maxValue = $("#price-max").val();
    if (minValue <= maxValue) {
      $("#price-range").slider("values", 0, minValue);
    } else {
      $("#price-range").slider("values", 0, maxValue);
      $("#price-min").val(maxValue);
    }
  });
  // This isn't very DRY but it's just for demo purpose... oh well.
  $("#price-max").change(function (event) {
    var minValue = $("#price-min").val();
    var maxValue = $("#price-max").val();
    if (maxValue >= minValue) {
      $("#price-range").slider("values", 1, maxValue);
    } else {
      $("#price-range").slider("values", 1, minValue);
      $("#price-max").val(minValue);
    }
  });
  $(".order a").click(function () {
    $(".order a").removeClass();
    $(this).addClass("active");
  });
  // Card's slider
  var $carousel = $(".slider-for");

  $carousel.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    rtl: true,
    autoplay: true,
    infinite: true,
    asNavFor: ".slider-nav",
  });

  $(".slider-nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    rtl: true,
    infinite: true,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
    vertical: true,
    verticalSwiping: true,
  });
  $(".filterCity").click(function () {
    if ($(".filterCity").hasClass("active")) {
      $(".filterListMain").fadeOut();
      $(".cities").fadeIn();
    } else {
      $(".filterListMain").fadeIn();
      $(".cities").fadeOut();
    }
  });

  $(".singleCity, .closeCities").click(function () {
    $(".filterListMain").fadeIn();
    $(".cities").fadeOut();
  });
})(jQuery);
