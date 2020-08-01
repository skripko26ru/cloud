// ==================================== замена цвета хедера при скроллинге ========================================================

const plateBlue = document.querySelector('.plate-blue');
const headerElements = Array.from(document.querySelectorAll('.header__logo a, .header__menu a, .header__phone '));
const burgerLines = Array.from(document.querySelectorAll(".header__burger-line-1, .header__burger-line-2, .header__burger-line-3"));

window.addEventListener("scroll", function () {
  const offset = window.pageYOffset;

  if (offset > 670) {
    plateBlue.style.backgroundColor = "#F9F9FD";
    headerElements.map(el => el.classList.add("header__color-maindark"));
    burgerLines.map(el => el.classList.add("header__ground-maindark"));


  }

  else {
    plateBlue.style.backgroundColor = "#112A94";
    headerElements.map(el => el.classList.remove("header__color-maindark"));
    burgerLines.map(el => el.classList.remove("header__ground-maindark"));
  }
});