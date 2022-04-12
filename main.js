import "./assets/scss/main.scss";

import "swiper/css";
import Swiper from "swiper";
import Gumshoe from "gumshoejs";
import SmoothScroll from "smooth-scroll";

var menu = document.getElementById("menu-toggle");
var header = document.getElementsByTagName("header")[0];
var menuBack = document.getElementById("menu-toggle-back");
var mobileMenuButtons = document.querySelectorAll(".mobile-menu-inner a");
var menuContent = document.getElementById("menu-content");
var questions = document.querySelectorAll(".question-answer");

var spy = new Gumshoe("#menu-list-desktop a", {
  offset: function () {
    return header.getBoundingClientRect().height;
  },
  events: true,
});

document.addEventListener(
  "gumshoeActivate",
  function (event) {
    if (event.detail.content.id === "sponsors") {
      header.classList.add("colored");
    }

    if (event.detail.content.id === "main") {
      header.classList.remove("colored");
    }
  },
  false
);

new SmoothScroll('a[href*="#"]', {
  header: "header",
});

mobileMenuButtons.forEach((link) => {
  link.addEventListener("click", () => {
    menuContent.classList.remove("display");
  });
});

menu.addEventListener("click", () => {
  menuContent.classList.toggle("display");
});

menuBack.addEventListener("click", () => {
  menuContent.classList.toggle("display");
});

questions.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    let radioButton = this.querySelector("input");
    radioButton.checked = !radioButton.checked;
  });
});

const swiper = new Swiper(".card-swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 10,
});
