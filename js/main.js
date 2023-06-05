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

/* scroll stop if we hover over the image */

/*
const triggerHover = document.querySelector(".carousel")
const project = document.querySelector(".carousel__face")

project.addEventListener('mouseenter', () => {
  triggerHover.classList.remove('hoverCarousel')
})

project.addEventListener('mouseleave', () => {
  triggerHover.classList.add('hoverCarousel')
})
*/  