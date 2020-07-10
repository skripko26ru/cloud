// ==================== шарик бегает за курсором ====================================

document.addEventListener("DOMContentLoaded", function () {
  let X = Y = -10;
  let ball = document.querySelector('.ball');

  function move() {
    ball.style.left = X + 'px';
    ball.style.top = Y + 'px';
  }

  document.addEventListener("mousemove", function (e) {
    X = e.pageX - 5;
    Y = e.pageY - 5;
  }, false);

  setInterval(move, 100);
});


// ==================== шарик увеличивается над ссылкой  ====================================

let $headers = $('a, .competence__label, .competence__img');
let $ball = $('.ball');

$headers.mousemove(function (e) {
  $ball.addClass('bigball'); 
});

$headers.mouseout(function (e) {
  $ball.removeClass('bigball');
});



