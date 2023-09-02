const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav ul");

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("active");
});

const isLogin = JSON.parse(localStorage.getItem("isLogin"));
const loginBtn = document.getElementById("login-button");
const registerBtn = document.getElementById("register-button");
const logoutBtn = document.getElementById("logout-button");

logoutBtn.addEventListener("click", function (ev) {
  localStorage.setItem("isLogin", "false");
  localStorage.setItem("isAdmin", "false");
});

if (isLogin) {
  loginBtn.classList.add("fade");
  registerBtn.classList.add("fade");
  logoutBtn.classList.remove("fade");
} else {
  loginBtn.classList.remove("fade");
  registerBtn.classList.remove("fade");
  logoutBtn.classList.add("fade");
}
