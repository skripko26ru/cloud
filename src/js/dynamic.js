// ==================== логика клика по навигационному "гамбургеру" ====================================

const burger = document.querySelector(".header__burger");
const shade = document.querySelector(".header__shade-hidden");
const navHidden = document.querySelector(".header__nav-hidden");
const horizontanlLine = document.querySelector(".header__burger-line-2");
const daigonalOne = document.querySelector(".header__burger-line-1");
const daigonalTwo = document.querySelector(".header__burger-line-3");

function toggleNav() {
  shade.classList.toggle("header__shade-visible");
  navHidden.classList.toggle("header__nav-visible");
  horizontanlLine.classList.toggle("header__horizontal-line");
  daigonalOne.classList.toggle("header__diagonal-line-1");
  daigonalTwo.classList.toggle("header__diagonal-line-2");
}

burger.addEventListener("click", function () {
  toggleNav();
});

// ==================== переключение между элементами на страницу "Наши компетенции" ====================

const $competenseList = $('.competence__label, .competence__img');
const $competenseItems = $('.competence__item');

$competenseList.on('click', function (e) {
  const $this = $(this);
  const $itemActive = $this.closest('.competence__item');
  $competenseItems.removeClass('competence--active');
  $itemActive.addClass('competence--active');
});

// ==================== переключение между элементами на страницу "Услуги" ====================

const $servicesList = $('.services__label, .services__img');
const $servicesItems = $('.services__item');

$servicesList.on('click', function (e) {
  const $this = $(this);
  const $servicesActive = $this.closest('.services__item');
  $servicesItems.removeClass('services--active');
  $servicesActive.addClass('services--active');
});

// ================== переключение между разноцветными страницами с телефонами на кругах ================

const $showingList = $('.showing__title');

const $wrap = $('.showing__wrap');
const $image = $('.showing__image');
const $header = $('.header__logo a, .header__nav, .header__phone, .footer__nav, .footer-pager');
const $footer = $('.footer-pager__progress');
const $lines = $('.header__burger-line-1, .header__burger-line-2, .header__burger-line-3');

const $vtbBg = 'showing__vtb-bg';
const $bksBg = 'showing__bks-bg';
const $psbBg = 'showing__psb-bg';
const $rshBg = 'showing__rsh-bg';
const $alpBg = 'showing__alp-bg';
const $clientsBg = [$vtbBg, $bksBg, $psbBg, $rshBg, $alpBg];

const $vtbImg = 'showing__vtb-img';
const $bksImg = 'showing__bks-img';
const $psbImg = 'showing__psb-img';
const $rshImg = 'showing__rsh-img';
const $alpImg = 'showing__alp-img';
const $clientsImg = [$vtbImg, $bksImg, $psbImg, $rshImg, $alpImg];

$showingList.on('click', function (e) {
  const $this = $(this);
  const $item = $this.closest('.showing__item');
  const $hasActive = $item.hasClass('showing--active');
  const $active = $('.showing--active');
  const $id = $item.attr('id');

  function perf(bg, img) {
    $clientsBg.map(el => $wrap.removeClass(el));
    $clientsImg.map(el => $image.removeClass(el));
    $wrap.addClass(bg);
    $image.addClass(img);
    $header.removeClass('header__inverse');
    $lines.css('background-color', '#FFF');
    $footer.css('background-color', '#FFF');
    if (bg === $bksBg) {
      $header.addClass('header__inverse');
      $footer.css('background-color', '#43495B');
      $lines.css('background-color', '#43495B');
    }
  }

  if (!$hasActive) {
    $active.removeClass('showing--active');
    $item.addClass('showing--active');
  }

  if ($id === 'vtb') perf($vtbBg, $vtbImg);
  else if ($id === 'bks') perf($bksBg, $bksImg);
  else if ($id === 'psb') perf($psbBg, $psbImg);
  else if ($id === 'rsh') perf($rshBg, $rshImg);
  else if ($id === 'alp') perf($alpBg, $alpImg);
});


// ============================== замена цвета хедера ===================================

const _headerGround = document.querySelectorAll('.header');
const headerGround = Array.from(_headerGround);

const _headerElements = document.querySelectorAll('.header__logo a, .header__menu a, .header__phone ');
const headerElements = Array.from(_headerElements);

const _burgerLines = document.querySelectorAll(".header__burger-line-1, .header__burger-line-2, .header__burger-line-3");
const burgerLines = Array.from(_burgerLines);

console.log(headerGround);

window.addEventListener("scroll", function () {
  const offset = window.pageYOffset;

  if (offset > 750) {
    headerGround.map(el => el.classList.add("header__ground-bg"));
    headerElements.map(el => el.classList.add("header__color-maindark"));
    burgerLines.map(el => el.classList.add("header__ground-maindark"));
  }

  else {
    headerGround.map(el => el.classList.remove("header__ground-bg"));
    headerElements.map(el => el.classList.remove("header__color-maindark"));
    burgerLines.map(el => el.classList.remove("header__ground-maindark"));
  }
});