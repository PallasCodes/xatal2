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

// BUDGET CALCULATOR
const btnsNext = document.querySelectorAll(".btnNext");
const stepsWrapper = document.getElementById("steps-wrapper");
const stepBtns = document.querySelectorAll(".stepBtn");
const btnsFinish = document.querySelectorAll(".btnFinish");

// BUDGET ANWERS
let custom = true;
document
  .getElementById("template")
  .addEventListener("click", () => (custom = false));
document
  .getElementById("custom")
  .addEventListener("click", () => (custom = true));

let manageable = true;
document
  .getElementById("noManageable")
  .addEventListener("click", () => (manageable = false));
document.getElementById("manageable", () => (manageable = true));

let payments = true;
document
  .getElementById("noPayments")
  .addEventListener("click", () => (payments = false));
document
  .getElementById("payments")
  .addEventListener("click", () => (payments = true));

let catalog = true;
document
  .getElementById("noCatalog")
  .addEventListener("click", () => (catalog = false));
document
  .getElementById("catalog")
  .addEventListener("click", () => (catalog = true));

let pages = 1;
document.getElementById("pages1").addEventListener("click", () => (pages = 1));
document.getElementById("pages3").addEventListener("click", () => (pages = 3));
document.getElementById("pages5").addEventListener("click", () => (pages = 5));
document.getElementById("pages6").addEventListener("click", () => (pages = 6));

let blog = true;
document
  .getElementById("noBlog")
  .addEventListener("click", () => (blog = false));
document.getElementById("blog").addEventListener("click", () => (blog = true));

let translateX = 0;

btnsNext.forEach((btn) => {
  btn.addEventListener("click", () => {
    translateX += 100;
    stepsWrapper.style.transform = `translateX(-${translateX}%)`;
  });
});

let price = 650;

const cost = document.getElementById('cost')

btnsFinish.forEach((btn) => {
  btn.addEventListener("click", () => {
    custom ? (price += 1500) : (price += 1000);
    manageable ? (price += 1500) : (price += 1000);
    payments ? (price += 3000) : (price += 0);
    catalog ? (price += 2500) : (price += 0);
    switch (pages) {
      case 1:
        price += 500;
        break;
      case 3:
        price += 1000;
        break;
      case 5:
        price += 1500;
        break;
      case 6:
        price += 2000;
        break;
      default:
        break;
    }    
    cost.textContent = '$' + numberWithCommas(price) + ' MXN'
    price = 1000;
  });
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

stepBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    translateX = parseInt(btn.dataset.number);
    stepsWrapper.style.transform = `translateX(-${translateX}%)`;
  });
});
