jQuery(document).ready(function($) {

    $('.portfolio_link').click(function(e) {
        e.preventDefault();
        $id = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $($id).offset().top - 20
        }, 750);
    });

    $('.hover_place').mouseenter( handlerIn ).mouseleave( handlerOut );
});

function handlerIn () {
    $( this ).find(".hover").css( "opacity", "1" );
}
function handlerOut () {
    $( this ).find(".hover").css( "opacity", "0" );
}