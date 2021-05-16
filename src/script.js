import "./assets/scss/main.scss";

// $(document).ready(function () {
//     $(document.body).addClass("loaded");

//     const slider = new phoneSlider();

//     $(".phone-option").click(function(e) {
//         slider.changeFrame(this);
//     })
// });

// const phoneSlider =  function () {
//     this.setTimer = () => {
//         return setTimeout(() => {
//             this.nextPhoneFrame();
//         }, 15000);
//     }

//     this.timer = this.setTimer()

//     this.numberOfSlides = $(".phone-option").length;

//     this.getActiveIndex = function () {
//         return $(".phone-option.active").index();
//     }

//     this.getNameByIndex = function (i) {
//         return  $(".phone-option").eq(i).data("name");
//     }

//     this.getNextIndex = function () {
//         let next = this.getActiveIndex() + 1;
//         return next == this.numberOfSlides ? 0 : next;
//     }

//     this.getNameOfNextSlide = function (nextIndex) {
//         return $(".phone-option").eq(nextIndex).data("name");
//     }

//     this.removeActiveSlide = function () {
//         $(".phone-option.active").removeClass("active");
//         $(".video.active").removeClass("active");
//         $(".phone-option-text.active").removeClass("active");
//     }

//     this.activateVideoTextByName = function (name) {
//         $(`#${name}-t`).addClass("active");
//         $(`.video.${name}`).addClass("active");
//     }

//     this.changeFrame = function (e) {
//         clearTimeout(this.timer);
//         let name = $(e).data("name");

//         this.removeActiveSlide();

//         $(e).addClass("active");
//         this.activateVideoTextByName(name);
//         this.timer = this.setTimer();

//     }

//     this.nextPhoneFrame = function () {
//         let nextIndex = this.getNextIndex();
//         let name = this.getNameByIndex(nextIndex);

//         this.removeActiveSlide();

//         $(".phone-option").eq(nextIndex).addClass("active");
//         this.activateVideoTextByName(name);

//         this.timer = this.setTimer();
//     }

// }

$(document).ready(function () {
  setTimeout(function () {
    $("body").addClass("loaded");
    setTimeout(function () {
      $(".loader").css("transition", "0s");
    }, 4500);
  }, 3500);
});
function ChangePhoneFrame(e) {
  name = $(e).data("name");
  video = "./vid/" + name + ".mp4";
  $(".phone-option.active").removeClass("active");
  $(e).addClass("active");
  $(".phone-option-text.active").removeClass("active");
  text = $("#" + name + "-t").addClass("active");
  $("#video-src").attr("src", video);
  $("#video")[0].load();
}
setInterval(function () {
  NextPhoneFrame();
}, 15000);
function NextPhoneFrame() {
  l = $(".phone-option").length;
  active = $(".phone-option.active").index();
  next = active + 1;
  if (next == l) {
    next = 0;
  }
  name = $(".phone-option").eq(next).data("name");
  video = "./vid/" + name + ".mp4";
  $(".phone-option.active").removeClass("active");
  $(".phone-option").eq(next).addClass("active");
  $(".phone-option-text.active").removeClass("active");
  text = $("#" + name + "-t").addClass("active");
  $("#video-src").attr("src", video);
  $("#video")[0].load();
}
