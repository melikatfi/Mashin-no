(function() {

    var button = document.querySelectorAll('.button');

    function controls() {
        $(this).addClass('selected').siblings('button').removeClass('selected');
        $('.slideDiv').animate({
            top: -$('.container').height() * $(this).index()
        }, 450);
    }
    function timer(){
        var i = 0; i < button.length; i++
    }

    setInterval(timer,2000)
    /***Event Listeners***/
    for ( var i = 0; i < button.length; i++ ) {
        button[i].addEventListener('click', controls, false);
    }

})();