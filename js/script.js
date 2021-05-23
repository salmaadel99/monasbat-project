$('.hall-slide').owlCarousel({
    loop: true,
    dots: false,
    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            autoHeight: true,
            mouseDrag: false,
            touchDrag: true

        },
        600: {
            items: 1,
        },
        769:{
          items:3
        },
        1000: {
            items: 3

        }
    }
})
$('.consumer').owlCarousel({
    loop: true,
    responsiveClass: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1,
            nav: true,

        },
        600: {
            items: 1,
            nav: true,

        },
        1000: {
            items: 1,
            nav: true,
        }
    }
})