const input = document.querySelector('.discussion__input');
const form = document.querySelector('.discussion__form');
const result = document.querySelector('.discussion__result');
const url = "mail.php";

function phoneClear(phone) {
  return phone.replace(/[^/+\d]/g, '');
}

function isPhone(phone) {
  const reg = /^\+{1}\d{11}/;
  return reg.test(phone);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  result.innerHTML = '';

  const phonenumber = phoneClear(input.value);
  const valid = isPhone(phonenumber);

  if (!valid) result.innerHTML = 'Введите корректный номер телефона!';
  else {
    $.post('/mail.php', { phonenumber }, function () {
      input.value = '';
      console.log('Her');
    });
  }

});

new IMask(input, {
  mask: '+{7} (000) 000-00-00',
});

