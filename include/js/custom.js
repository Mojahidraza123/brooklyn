$('.hero-slider ').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  speed:1000,
  arrows:false,
  dots:true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
       
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
       
      }
    }
  ]
});

$('.slider-box ').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  speed:1000,
  arrows:false,
  dots:true,
  
});



