$(document).ready(function(){
    $('.slider_recall').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

        $(".call_back_btn").click(function(event) {
            event.preventDefault();
            $(".overlay").fadeIn(
                400,
                function() {
                    $(".popup_callback")
                        .css("display", "block")
                        .animate({ opacity: 1, top: "50%" }, 200);
                }
            );
        });
        $(".close, .overlay").click(function() {
            $(".popup_callback").animate(
                { opacity: 0, top: "45%" },
                200,
                function() {
                    $(this).css("display", "none");
                    $(".overlay").fadeOut(400);
                }
            );
        });

        $(".btn_bottom").click(function(event) {
            event.preventDefault();
            $(".overlay").fadeIn(
                400,
                function() {
                    $(".popup_writeUs")
                        .css("display", "block")
                        .animate({ opacity: 1, top: "50%" }, 200);
                }
            );
        });
        $(".close, .overlay").click(function() {
            $(".popup_writeUs").animate(
                { opacity: 0, top: "45%" },
                200,
                function() {
                    $(this).css("display", "none");
                    $(".overlay").fadeOut(400);
                }
            );
        });

});

function selection(e){
    $(".modal-forms").each(function(){
        $(this).addClass("hidden")
    }),
    $("#"+e).removeClass("hidden")
}
