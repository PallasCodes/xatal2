AOS.init();

const btnBurguer = document.getElementById('btn-burguer')
const btnClose = document.getElementById('btn-close')
const mobileNav = document.getElementById('mobile-nav')

btnBurguer.addEventListener('click', () => {
  mobileNav.classList.toggle('active')
})

btnClose.addEventListener('click', () => {
  mobileNav.classList.toggle('active')
})