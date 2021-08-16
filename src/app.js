AOS.init();

const btnBurguer = document.getElementById('btn-burguer')
const mobileNav = document.getElementById('mobile-nav')

btnBurguer.addEventListener('click', () => {
  mobileNav.classList.toggle('active')
})