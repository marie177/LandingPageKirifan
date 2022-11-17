// LOADER
// onload = () =>{
//     const load = document.getElementById('load')

//     setTimeout(() => {
//        load.style.display = 'none' 
//     }, 1500);
// }

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


//  MIXITUP FILTER PRODUCTS

var mixerProducts = mixitup('.products__content', {
    selectors: {
        target: '.products__card'
    },
    animation: {
        duration: 300
    }
});

/*DEFAULT PRODUCTS FILTER*/
mixerProducts.filter('.delicacies')

const linkProducts = document.querySelectorAll('.products__item');

function activeProducts() {
    linkProducts.forEach(l => l.classList.remove('active-product'));
    this.classList.add('active-product');
}

linkProducts.forEach(l => l.addEventListener('click', activeProducts));

/*=============== SWIPER PROTOTIPOS ===============*/
var swiperProjects = new Swiper(".prototipos__container", {
    /* debugger;*/
    loop: true,

    //cssMode: true,
    navigation: {

        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        // type: 'bullets',
    },
    breakpoints: {
        350: {
            slidesPerView: 1,
            spaceBetween: 0,     
        },
        850: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
    keyboard: true,
});

/*=============== SWIPER SPONSORS ===============*/
var swiperProjects = new Swiper(".logo__container", {
    /* debugger;*/
    loop: true,
    spaceBetween: 24,

    autoplay:true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: -56,
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: -56,
        },
    },
    mousewheel: true,
    keyboard: true,
});
/*SCROLL UP*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)