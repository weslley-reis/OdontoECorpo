if (window.matchMedia("(max-width: 800px)").matches) {
  // Viewport is less or equal to 700 pixels wide
  $(".carousel").slick({
    dots: true,
    infinite: true,
    //   slidesToShow: 1,
    slidesToScroll: 1,
  });
} else {
  // Viewport is greater than 700 pixels wide
}
