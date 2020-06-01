let screenActive = 0;
let isAnimating = false;
const screenSwitchTime = 1000;
const screenActiveClass = "screen--active";

const $body = $("body");
const $screenList = $(".screen");

setPagerPage();

$(window).on('mousewheel', function (e) {
  const direction = e.originalEvent.wheelDelta / 120 > 0 ? -1 : 1;
  moveScreen(direction);
});

$(window).touchwipe({
	wipeUp() { moveScreen(-1); },
	wipeDown() { moveScreen(1); },
	min_move_y: 40,
	preventDefaultEvents: false
});

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

