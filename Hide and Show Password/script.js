let show = document.getElementById("show-btn");
let password = document.getElementById("input-pswd");

show.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    show.innerText = "Hide";
  } else {
    password.type = "password";
    show.innerText = "Show";
  }
};