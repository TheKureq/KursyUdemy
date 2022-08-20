$('.team-carousel').slick({
	arrows: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
    autoplay: true,
    mobileFirst: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
    ]
});

