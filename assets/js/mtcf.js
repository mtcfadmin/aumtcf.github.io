$(document).ready(function () {
    //$(document).snowfall({flakeCount : 800, maxSpeed : 2, maxSize : 5});

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});
