function writeText(id, text, speed) {
  const elem = document.querySelector(id);
  const txt = text.split('');

  const interval = setInterval(
    function () {
      if (!txt[0]) return clearInterval(interval);
      elem.innerHTML += txt.shift();
    }, speed !== undefined ? speed : 100);

  return false;
};

document.addEventListener('DOMContentLoaded', writeText('.header__logo', 'digital cloud_', 150));