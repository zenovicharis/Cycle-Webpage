import "./assets/scss/main.scss";

import "swiper/css";
import Swiper from "swiper";
import Gumshoe from "gumshoejs";
import SmoothScroll from "smooth-scroll";

const header = document.getElementsByTagName("header")[0];
const questions = document.querySelectorAll(".question-answer");
const logoLoader = document.querySelector(".logo-container");
const loader = document.querySelector("section.loading");
const wrapper = document.querySelector(".wrapper");

const mainFunction = () => {
  logoLoader.addEventListener("click", function () {
    this.classList.toggle("loaded");
  });

  var spy = new Gumshoe("#menu-list-desktop a", {
    offset: function () {
      return header.getBoundingClientRect().height;
    },
    events: true,
    reflow: true,
  });

  document.addEventListener("gumshoeActivate", headerSpyFunction, false);

  new SmoothScroll('a[href*="#"]', {
    header: "header",
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
};

const headerSpyFunction = function (event) {
  if (event.detail && event.detail.content.id === "main") {
    header.classList.remove("colored");
  } else {
    header.classList.add("colored");
  }
};

const scrollIntoSection = () => {
  let urlElements = window.location.href.split("#");
  let section = urlElements[1];
  if (section) {
    document.getElementById(urlElements[1]).scrollIntoView();
    if (section != "main") {
      headerSpyFunction({});
    }
  }
};

window.addEventListener("load", () => {
  mainFunction();
  logoLoader.classList.add("loaded");
  setTimeout(() => {
    wrapper.classList.remove("hidden");
    loader.classList.add("hidden");
    scrollIntoSection();
  }, 1000);
});
