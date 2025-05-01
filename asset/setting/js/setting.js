var menu = document.querySelector(".Menu")
var menuBtn = document.querySelector(".menu-icon")
var menuBtnIcon = document.querySelector(".menu-icon i")

menuBtn.addEventListener("click", function () {
  if (menuBtnIcon.classList.contains("bi-list")) {
    menu.style.right = "-5px"
    menuBtnIcon.classList = "bi bi-x"
  } else {
    menu.style.right = "-270px"
    menuBtnIcon.classList = "bi bi-list"
  }
})  