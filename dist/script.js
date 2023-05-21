$(document).ready(function () {
  $(".ham-btn").click(function () {
    $(".nav-links").addClass("show");
  });
  $(".close-btn").click(function () {
    $(".nav-links").removeClass("show");
  });
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


"use strict";
// common idea: https://dribbble.com/shots/20364660-Nibble-Health-Identity-Social-Posting
// carousel animation: https://codepen.io/aija/details/xvXWoK
let CHECKED = false;
document.addEventListener("pointerdown", (e) => {
    CHECKED = !CHECKED;
    document.documentElement.style.setProperty("--light", CHECKED ? 1 : 0);
});