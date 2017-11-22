$(document).ready(function(){
    $("#aboutus").click(function() {
        $('html, body').animate({
            scrollTop: $("#id5").offset().top
        }, 1000);
    });
});
