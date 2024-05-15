/* ======================================
    Side Navbar section Starts here
====================================== */

const sidenav = () => {
    const openMenu = document.querySelector("#open-menu");
    const closeMenu = document.querySelector("#close-menu");
    const overlay = document.querySelector(".overlay");

    openMenu.addEventListener('click', () => {
        overlay.classList.add("active");
    })
    closeMenu.addEventListener('click', () => {
        overlay.classList.remove("active")
    })
}

sidenav();

/* ======================================
    Side Navbar section Ends here
====================================== */

/* ======================================
    Swiper Two section Starts here
====================================== */


var swiper = new Swiper(".swiper-1", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    autoplay: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
          slidesPerView: 4,
        }
    }
});

/* ======================================
    Swiper Two section Ends here
====================================== */
/* ======================================
    Search Modal section starts here
====================================== */

const modal = document.querySelector('.search-modal');
const modalBtn = document.querySelector('#open-search-modal');
const closeModal = document.querySelector('#close-modal');

modalBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closemodal)

function openModal(){
    modal.classList.add('search-modal-active');
}

function closemodal(){
    modal.classList.remove('search-modal-active');
}


/* ======================================
    Search Modal section Ends here
====================================== */

/* ======================================
    Drop section Starts here
====================================== */

const dropMenu = () =>{
    const menu = document.querySelector('#drop-menu');
    const dropdown = document.querySelector('.drop-otr');
    const dropIcon = document.querySelector('.drop-icon');

    menu.addEventListener('click', () => {
        dropdown.classList.toggle('drop-active');
        dropIcon.classList.toggle('drop-icon-active');
    });
}

dropMenu();

/* ======================================
    Drop section Ends here
====================================== */

/* ======================================
    Responsive Drop section Starts here
====================================== */

const resDropMenu = () =>{
    const menu = document.querySelector('#res-drop-menu');
    const dropdown = document.querySelector('.res-drop-otr');
    const dropIcon = document.querySelector('.res-drop-icon');

    menu.addEventListener('click', () => {
        dropdown.classList.toggle('res-drop-active');
        dropIcon.classList.toggle('res-drop-icon-active');
    });
}

resDropMenu();

/* ======================================
    Responsive Drop section Ends here
====================================== */
