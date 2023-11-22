

$(document).ready(function () {
    $(".humberger i").click(function () {
      $(this).toggleClass("fa-times");
      $(".link_side").toggleClass("active");
    });
  });
  


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:false,
    autoplay: true,
    // autoplaySpeed: 1000,
    smartSpeed: 500,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})