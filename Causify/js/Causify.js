function scrollTo(hash) {
    location.hash = "#" + hash;
}


$("#startButton").click(function(){
    $('html, body').animate({
           'scrollTop':   $('#startPanel').offset().top
         }, 2000);
});