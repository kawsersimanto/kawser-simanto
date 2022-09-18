// navbar
const navbar = document.querySelector(".c-navbar");

document.addEventListener("scroll", (e) => {
  if (scrollY > 0) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

// cursor
const home = document.querySelector(".home");
const cursor = document.querySelector(".cursor");

home.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX - 40 + "px";
  cursor.style.top = e.pageY - 40 + "px";
});

// init Isotope
var $portfolioList = $(".portfolio-list").isotope();
// filter items on button click
$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $portfolioList.isotope({ filter: filterValue });
});

// counter
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

// owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 40,
  nav: false,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      margin: 20,
      items: 1,
      nav: false,
    },
    768: {
      margin: 30,
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      loop: true,
    },
  },
});
