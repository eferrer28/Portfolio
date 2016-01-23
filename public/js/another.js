"use strict";

$(document).ready(function() {
  $('.mobile-nav').click(function() {
    $('.main-container').toggleClass('menu-active');
    $('.mobile-nav').toggleClass('menu-active');
    $('#sidebar-wrapper').toggleClass('menu-active');
  });
});