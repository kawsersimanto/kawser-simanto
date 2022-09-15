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
