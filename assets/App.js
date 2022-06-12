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


