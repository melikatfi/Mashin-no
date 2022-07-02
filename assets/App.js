(function() {

    var button = document.querySelectorAll('.button');
    const index = 0;

    function controls() {
        $(this).addClass('selected').siblings('button').removeClass('selected');
        $('.slideDiv').animate({
            top: -$('.container').height() * $(this).index()
        }, 450);
    }
    function timer(){
        var x = document.getElementsByClassName(".slide")
        x[index].classList.add('selected');
    }
    setInterval(timer,2000)
    /***Event Listeners***/
    for ( var i = 0; i < button.length; i++ ) {
        button[i].addEventListener('click', controls, false);
    }

})();


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
