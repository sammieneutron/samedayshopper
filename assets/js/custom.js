$(document).ready(function() {
    $("#list-mode").addClass("hidden");
});


function showMapMode() {
    $("#map-mode").removeClass("hidden");
    $("#list-mode").addClass("hidden");
}

function showListMode() {
    $("#map-mode").addClass("hidden");
    $("#list-mode").removeClass("hidden");
}


$('#map-mode-button').click(function(){
    showMapMode();
});

$('#list-mode-button').click(function(){
    showListMode();
});