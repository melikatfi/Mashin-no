//main slider
let swiperSlider = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    mousewheelControl: true,
    watchSlidesProgress: true,
    mousewheel: {
        releaseOnEdges: true,
    },
    preloadImages: true,
    hashNavigation: {
        watchState: true,
    },
    autoplay: 2500,
});
//amazing products
let swiperAmazing = new Swiper(".swiper-amazing", {
    loop: true,
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 3,
    // breakpoints: {
    //     1920: {
    //         slidesPerView: 5,
    //         spaceBetween: 30,
    //     },
    //     1028: {
    //         slidesPerView: 2,
    //         spaceBetween: 30,
    //     },
    //     480: {
    //         slidesPerView: 1,
    //         spaceBetween: 10,
    //     },
    //     },
});
//special products
let swiperSpecial = new Swiper(".swiper-special", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets',
    },
    mousewheelControl: true,
    // watchSlidesProgress: true,
});
//blog
let swiperBlog = new Swiper(".swiper-blog", {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    paginationClickable: true,
    spaceBetween: 20,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheelControl: true,
    // watchSlidesProgress: true,
});
//mobile menu opener
function openMobile(){
    let mobileMenu = document.getElementById("mobile-ul")
    mobileMenu.classList.toggle("show")
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

$(document).on('change', '.checking', function () {
    if( $(this).prop('checked') ){
        $(this).closest('.color').addClass('active');
    }
    else{
        $(this).closest('.color').removeClass('active');
    }
});
