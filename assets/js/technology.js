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
    Swiper One section Starts here
====================================== */


var swiper = new Swiper(".swiper-1", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
    }
});

/* ======================================
    Swiper One section Ends here
====================================== */

/* ======================================
    News section Starts here
====================================== */

const newsmodal = () => {

    const modalBox1 = document.querySelector('.news-box1');
    const modalBox2 = document.querySelector('.news-box2');
    const modalBox3 = document.querySelector('.news-box3');
    const modalBox4 = document.querySelector('.news-box4');

    const newsModal1 = document.querySelector('.news-modal1');
    const newsModal2 = document.querySelector('.news-modal2');
    const newsModal3 = document.querySelector('.news-modal3');
    const newsModal4 = document.querySelector('.news-modal4');

    // For Box ONE

    modalBox1.addEventListener('click', () => {
        newsModal1.style.display = "block"
        newsModal2.style.display = "none"
        newsModal3.style.display = "none"
        newsModal4.style.display = "none"
        modalBox1.classList.add('news-box-active');
        modalBox2.classList.remove('news-box-active');
        modalBox3.classList.remove('news-box-active');
        modalBox4.classList.remove('news-box-active');
    });

    // For Box TWO

    modalBox2.addEventListener('click', () => {
        newsModal1.style.display = "none"
        newsModal2.style.display = "block"
        newsModal3.style.display = "none"
        newsModal4.style.display = "none"
        modalBox1.classList.remove('news-box-active');
        modalBox2.classList.add('news-box-active');
        modalBox3.classList.remove('news-box-active');
        modalBox4.classList.remove('news-box-active');
    });

    // For Box THREE

    modalBox3.addEventListener('click', () => {
        newsModal1.style.display = "none"
        newsModal2.style.display = "none"
        newsModal3.style.display = "block"
        newsModal4.style.display = "none"
        modalBox1.classList.remove('news-box-active');
        modalBox2.classList.remove('news-box-active');
        modalBox3.classList.add('news-box-active');
        modalBox4.classList.remove('news-box-active');
    });

    // For Box FOUR

    modalBox4.addEventListener('click', () => {
        newsModal1.style.display = "none"
        newsModal2.style.display = "none"
        newsModal3.style.display = "none"
        newsModal4.style.display = "block"
        modalBox1.classList.remove('news-box-active');
        modalBox2.classList.remove('news-box-active');
        modalBox3.classList.remove('news-box-active');
        modalBox4.classList.add('news-box-active');
    });


}
newsmodal();

/* ======================================
    News section Ends here
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