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
