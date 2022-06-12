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

window.addEventListener("resize", getTemplate);

CurrentPage = 'DesktopPage';

function getTemplate() {
    if (screen.width >= 500 && CurrentPage !== 'DesktopPage') {
        return window.location.replace("/index.html");
    }

    if (screen.width < 500 && CurrentPage !== 'MobilePage') {
        return window.location.replace("/mobile-index.html");
    }
}

getTemplate();

