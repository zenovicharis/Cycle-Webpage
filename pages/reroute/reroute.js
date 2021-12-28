import "./../../assets/scss/reroute.scss";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const link = document.getElementById("link");
const error = document.getElementById("error-message");
const loading = document.getElementById("loading");

if (params["token"] && params["path"]) {
  // let base = link.getAttribute("href");
  // base += `${params["path"]}?token=${params["token"]}`;
  // console.log(base);
  // link.setAttribute("href", base);
  // link.click();
} else {
  // error.classList.remove("hidden");
  // loading.classList.add("hidden");
}
