// // ==================== Круг следует за курсором ====================================

// let ball = document.querySelector('.ball');

// document.addEventListener("DOMContentLoaded", function () {
//   let X = Y = 0;

//   document.addEventListener("mousemove", throttle(function (e) {
//     X = e.pageX - 10;
//     Y = e.pageY - 10;
//   }, 100));

//   function move() {
//     ball.style.left = X + 'px';
//     ball.style.top = Y + 'px';
//   }

//   setInterval(move, 100);
// });

// // Тормозящий декоратор (throttling) 

// function throttle(func, ms) {
//   let isThrottled = false,
//     savedArgs,
//     savedThis;

//   function wrapper() {
//     if (isThrottled) {  // (2)
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }

//     func.apply(this, arguments); // (1)
//     isThrottled = true;

//     setTimeout(function () {
//       isThrottled = false;  // (3)
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, ms);
//   }
//   return wrapper;
// }

// // ==================== Круг увеличивается над ссылкой  ====================================

// let $ball = $('.ball');
// let $links = $(
//   'a:not(a.block-link, a.blog__read, a.blog__arrow, a.client__apple, a.client__android, a.client__title)');
// let $selectors = $(
//   '.competence__wrapper, .showing__content, .showing a, .discussion__form, .contacts__map, .blog__item, .client__content');


// $links.mouseover(function (e) {
//   $ball.addClass('bigball');
// });

// $links.mouseout(function (e) {
//   $ball.removeClass('bigball');
// });

// $selectors.mouseover(function (e) {
//   $ball.removeClass('ball');
// });

// $selectors.mouseout(function (e) {
//   $ball.addClass('ball');
// });

