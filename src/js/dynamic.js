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

// ================== переключение между разноцветными страницами с телефонами на кругах ================

const $performanceList = $('.performance__title');

const $wrap = $('.performance__wrap');
const $image = $('.performance__image');
const $header = $('.header__logo a, .header__nav, .header__phone, .footer__nav, .footer-pager');
const $footer = $('.footer-pager__progress');
const $lines = $('.header__burger-line-1, .header__burger-line-2, .header__burger-line-3');

const $vtbBg = 'performance__vtb-bg';
const $bksBg = 'performance__bks-bg';
const $psbBg = 'performance__psb-bg';
const $rshBg = 'performance__rsh-bg';
const $alpBg = 'performance__alp-bg';
const $clientsBg = [$vtbBg, $bksBg, $psbBg, $rshBg, $alpBg];

const $vtbImg = 'performance__vtb-img';
const $bksImg = 'performance__bks-img';
const $psbImg = 'performance__psb-img';
const $rshImg = 'performance__rsh-img';
const $alpImg = 'performance__alp-img';
const $clientsImg = [$vtbImg, $bksImg, $psbImg, $rshImg, $alpImg];

$performanceList.on('click', function (e) {
  const $this = $(this);
  const $item = $this.closest('.performance__item');
  const $hasActive = $item.hasClass('performance--active');
  const $active = $('.performance--active');
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
    $active.removeClass('performance--active');
    $item.addClass('performance--active');
  }

  if ($id === 'vtb') perf($vtbBg, $vtbImg);
  else if ($id === 'bks') perf($bksBg, $bksImg);
  else if ($id === 'psb') perf($psbBg, $psbImg);
  else if ($id === 'rsh') perf($rshBg, $rshImg);
  else if ($id === 'alp') perf($alpBg, $alpImg);
});


// ================== замена цвета хедера ================

const header = document.querySelector('.header');

window.addEventListener("scroll", function () {
  const offset = window.pageYOffset;

  if (offset > 600) {  
    header.classList.add("header__colors");
  }

  else {  
    header.classList.remove("header__colors");
  }
});






