$(document).ready(function() {
    const $headers = $("h2.head");
    
    $headers.css("background-color", "green");
    
    const $innerElements = $headers.find(".inner");
    
    $innerElements.css("font-size", "35px");
});