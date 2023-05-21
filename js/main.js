const navbar = document.querySelector('#navbar')
const list = document.querySelector('.navlist')


window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled')
    list.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
    list.classList.remove('scrolled')
  }
})