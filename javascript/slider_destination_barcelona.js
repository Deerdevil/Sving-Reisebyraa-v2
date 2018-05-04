$("document").ready(function() {
$(".sliderimages").slick({
    // autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 749,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,


        }
      },
    ]
  })



});
