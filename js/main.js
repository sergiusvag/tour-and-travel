"use strict";

$(document).ready(function(){
    $("#btn-home").click(function() {
        $('html, body').animate({
            scrollTop: $('#header').offset().top
        }, 1500);
    });
    $("#btn-destinations").click(function() {
        $('html, body').animate({
            scrollTop: $('#featured-destinations').offset().top
        }, 1500);
    });
    $("#btn-about").click(function() {
        $('html, body').animate({
            scrollTop: $('#testimonials').offset().top
        }, 1500);
    });
    $("#btn-stories").click(function() {
        $('html, body').animate({
            scrollTop: $('#trending-stories').offset().top
        }, 1500);
    });
    $("#arrow-up").click(function() {
        $('html, body').animate({
            scrollTop: $('#header').offset().top
        }, 1500);
    });
});