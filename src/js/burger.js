const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__wrap");
const horzontanlLine = document.querySelector(".header__burger-line-2");
const daigonalOne = document.querySelector(".header__burger-line-1");
const daigonalTwo = document.querySelector(".header__burger-line-3");

function toggleNav() {
  nav.classList.toggle("header__nav-active");
  horzontanlLine.classList.toggle("header__horizontal-line");
  daigonalOne.classList.toggle("header__diagonal-line-1");
  daigonalTwo.classList.toggle("header__diagonal-line-2");
}

burger.addEventListener("click", function () {
  toggleNav();
});
