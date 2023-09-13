$(document).ready(function() {
    $("h3").each(function() {
        $(this).next("div").insertBefore(this);
    });
});