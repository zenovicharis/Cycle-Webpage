import "./assets/scss/main.scss";

import $ from "jquery";

function ChangePhoneFrame(e) {
  var el = $(e.target).closest(".phone-option");
  var path = el.data("name");
  var video = "./" + path;
  let [_, __, fileName] = path.split("/");
  let [name, ___] = fileName.split(".");
  // debugger;
  $(".phone-option.active").removeClass("active");
  el.addClass("active");
  $(".phone-option-text.active").removeClass("active");
  var text = $("#" + name + "-t").addClass("active");
  $("#video-src").attr("src", video);
  $("#video")[0].load();
}

$(document).on("click", ".phone-option", ChangePhoneFrame);

$(document).ready(function () {
  $(".phone-option").each(function (i, el) {
    var fileName = $($(el).find("source")[0]).attr("src").substring(1);
    console.log(i, $(el).data("name", fileName));
    console.log(i, $(el).data("name"));
  });
  setTimeout(function () {
    $("body").addClass("loaded");
    setTimeout(function () {
      $(".loader").css("transition", "0s");
    }, 4500);
  }, 3500);

  setInterval(function () {
    NextPhoneFrame();
  }, 15000);

  function NextPhoneFrame() {
    var l = $(".phone-option").length;
    var active = $(".phone-option.active").index();
    var next = active + 1;
    if (next == l) {
      next = 0;
    }
    // debugger;
    var path = $(".phone-option").eq(next).data("name");

    let [_, __, fileName] = path.split("/");
    let [name, ___] = fileName.split(".");
    var video = "./" + path;
    $(".phone-option.active").removeClass("active");
    $(".phone-option").eq(next).addClass("active");
    $(".phone-option-text.active").removeClass("active");
    var text = $("#" + name + "-t").addClass("active");
    $("#video-src").attr("src", video);
    $("#video")[0].load();
  }
});
