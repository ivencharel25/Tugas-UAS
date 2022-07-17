/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* == Testimonial Swiper == */

let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const homeLink = document.querySelector('#home-link')
const productLink = document.querySelector('#products-link')
const contactlink = document.querySelector ('#contac-link')
const aboutLink = document.querySelector ('#about-link')
homeLink.addEventListener('click', function() {
    // tambahkan class active ke home-link
    this.classList.add('active-link')

    // hilangkan class active dari product, contact, about
    productLink.classList.remove('active-link')
    contactLink.classList.remove('active-link')
    aboutLink.classList.remove('active-link')
})

productLink.addEventListener('click', function() {
    // tambahkan class active ke home-link
    this.classList.add('active-link')

    // hilangkan class active dari product, contact, about
    homeLink.classList.remove('active-link')
    contactLink.classList.remove('active-link')
    aboutLink.classList.remove('active-link')
})

contactlink.addEventListener('click', function() {
    // tambahkan class active ke home-link
    this.classList.add('active-link')

    // hilangkan class active dari product, contact, about
    homeLink.classList.remove('active-link')
    productLink.classList.remove('active-link')
    aboutLink.classList.remove('active-link')
})

aboutLink .addEventListener('click', function() {
    // tambahkan class active ke home-link
    this.classList.add('active-link')

    // hilangkan class active dari product, contact, about
    homeLink.classList.remove('active-link')
    productLink.classList.remove('active-link')
    contactlink.classList.remove('active-link')
})

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)