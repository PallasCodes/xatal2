AOS.init();

// MOBILE NAVBAR
const btnBurguer = document.getElementById("btn-burguer");
const mobileNav = document.getElementById("mobile-nav");

btnBurguer.addEventListener("click", () => {
  if (mobileNav.classList.contains("active")) {
    mobileNav.classList.add("unActive");
    setTimeout(() => mobileNav.classList.remove("active"), 590);
  } else {
    mobileNav.classList.add("active");
    mobileNav.classList.remove("unActive");
  }
});

// NAVBAR
const navbar = document.getElementById("nav-wrapper");
let slidedNavbar = false;

function toggleNavbar() {
  if (window.scrollY > 150 && !slidedNavbar) {
    navbar.classList.add("active");
    slidedNavbar = true;
  } else if (window.scrollY < 150 && slidedNavbar) {
    navbar.classList.remove("active");
    slidedNavbar = false;
  }
}

window.addEventListener("scroll", () => {
  toggleNavbar();
});

toggleNavbar();
