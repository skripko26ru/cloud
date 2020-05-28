let screenActive = 0;
let isAnimating = false;
const screenSwitchTime = 1000;
const screenActiveClass = "screen--active";

const $main = $("#scroll");
const $body = $("body");
const $screenList = $(".screen");

setPagerPage();
$main.bind("mousewheel", function (e) {
  if (isAnimating) return;
  const pagePrev = screenActive;
  if (!setScreenActive(e.originalEvent.wheelDelta / 120 > 0 ? -1 : 1)) return;

  isAnimating = true;
  $body.addClass(`screen-${screenActive}`).removeClass(`screen-${pagePrev}`);
  setPagerPage();
  setTimeout(() => {
    isAnimating = false;
  }, screenSwitchTime);
});

function setScreenActive(direction) {
  if (
    (direction < 0 && screenActive === 0) ||
    (direction > 0 && screenActive === $screenList.length - 1)
  )
    return false;
  const $active = $(`.${screenActiveClass}`);
  $active.removeClass(screenActiveClass);
  $active[direction > 0 ? "next" : "prev"]().addClass(screenActiveClass);
  screenActive += direction > 0 ? 1 : -1;
  return true;
}

function setPagerPage() {
  const page = parseInt($(`.${screenActiveClass}`).data("pager"));
  const total = parseInt($(".footer-pager__total").data("pager-total"));
  $(".footer-pager__current").html(page < 10 ? "0" + page : page);
  $(".footer-pager__progress").css({ width: `${(page / total) * 100}%` });
}
