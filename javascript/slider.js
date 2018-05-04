$("document").ready(function() {
$(".sliderimages").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  
    responsive: [
      {
        breakpoint: 749,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          dots: true,
        }
      },
    ]
  })



});
