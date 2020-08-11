let screenActive = 0;
let isAnimating = false;
const screenSwitchTime = 1000;
const screenActiveClass = "screen--active";
const $body = $("body");
const $screenList = $(".screen");

setPagerPage();

// ========================================= СКРОЛЛИНГ =================================================================

const clientWidth = document.body.clientWidth;
const container = document.querySelector(".container");
const intro = document.querySelector(".intro");
const introList = document.querySelector(".intro__list");
const clients = document.querySelector(".clients");
const clientsList = document.querySelector(".clients__list");
const awards = document.querySelector(".awards");
const awardsList = document.querySelector(".awards__list");

// ======================== Вертикальный скролл ===============================

function scrollVertical(e) {
  const needToScroll = document.querySelector('.screen--active').classList[0];
  const dir = direction(e);

  if (needToScroll === 'intro' && clientWidth < 1700) {
    window.removeEventListener('mousewheel', scrollVertical);
    intro.addEventListener('mousewheel', scrollIntro);
  }

  else if (needToScroll === 'clients') {
    window.removeEventListener('mousewheel', scrollVertical);
    clients.addEventListener('mousewheel', scrollClients);
  }

  else if (needToScroll === 'awards' && clientWidth < 1900) {
    window.removeEventListener('mousewheel', scrollVertical);
    awards.addEventListener('mousewheel', scrollAwards);
  }

  else {
    moveScreen(dir);
  }
}

window.addEventListener('mousewheel', scrollVertical);

// =================== Определение направления вертикального скролла ====================

function direction(e) {
  return e.wheelDelta / 120 > 0 ? -1 : 1;
}

// ====================== Смена страницы при вертикальном скролле ========================

function moveScreen(direction) {
  if (isAnimating) return;
  const nextScreen = screenActive + direction;
  setScreenActive(nextScreen);
}

function setScreenActive(index) {
  if (isAnimating || index < 0 || index > $screenList.length - 1) return;
  const pagePrev = screenActive;
  isAnimating = true;
  const $active = $(`.${screenActiveClass}`);

  $active.removeClass(screenActiveClass);
  $($screenList.get(index)).addClass(screenActiveClass);
  screenActive = index;
  $body.addClass(`screen-${screenActive}`).removeClass(`screen-${pagePrev}`);
  setTimeout(() => {
    isAnimating = false;
  }, screenSwitchTime);

  setPagerPage();
}

function pageMove(page, container, direction, left) {
  container.style.left = `${left}px`;
  moveScreen(direction);
  window.addEventListener('mousewheel', scrollVertical);
}

// =========================== Горизонтальный скролл ======================================

function scrollIntro(e) {
  let introListLeft = parseInt(introList.style.left.replace('px', ''));
  introList.style.left = `${introListLeft - e.deltaY}px`;

  if (1100 > clientWidth < 1700 && introListLeft < 0) {
    pageMove(intro, introList, 1, 400);
  }

  else if (introListLeft < -600) {
    pageMove(intro, introList, 1, 400);
  }

  else if (introListLeft > 500) {
    pageMove(intro, introList, -1, 400);
  }
}

function scrollClients(e) {
  let clientsListLeft = parseInt(clientsList.style.left.replace('px', ''));
  clientsList.style.left = `${clientsListLeft - e.deltaY}px`;

  if ((clientWidth > 1900 && clientsListLeft < -100) || (1100 > clientWidth < 1900 && clientsListLeft < -700)) {
    pageMove(clients, clientsList, 1, 400);
  }

  else if (clientsListLeft < -1300) {
    pageMove(clients, clientsList, 1, 400);
  }

  else if (clientsListLeft > 500) {
    pageMove(clients, clientsList, -1, 400);
  }
}

function scrollAwards(e) {
  let awardsListLeft = parseInt(awardsList.style.left.replace('px', ''));
  awardsList.style.left = `${awardsListLeft - e.deltaY}px`;

  if (1100 > clientWidth < 1800 && awardsListLeft < -100) {
    pageMove(awards, awardsList, 1, 400);
  }

  else if (awardsListLeft < -800) {
    pageMove(awards, awardsList, 1, 400);
  }

  else if (awardsListLeft > 400) {
    pageMove(awards, awardsList, -1, 400);
  }
}

function setPagerPage() {
  const page = parseInt($(`.${screenActiveClass}`).data("pager"));
  const total = parseInt($(".footer-pager__total").data("pager-total"));
  $(".footer-pager__current").html(page < 10 ? "0" + page : page);
  $(".footer-pager__progress").css({ width: `${(page / total) * 100}%` });
}

$('.js-to-screen').click(function () {
  const $this = $(this);
  setScreenActive($screenList.index($('#' + $this.data('screen'))));
});

// ========================== Настройка жестов для мобильной версии сайта ============================================

$(window).touchwipe({
  wipeUp() { moveScreen(-1); },
  wipeDown() { moveScreen(1); },
  min_move_y: 40,
  preventDefaultEvents: false
});

