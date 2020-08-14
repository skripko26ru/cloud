<?php
if (empty($_POST['phonenumber'])) {
  http_response_code(400);
  echo 'phone required';
} else {
  $name = !empty($_POST['name']) ? $_POST['name'] : '';
  $phonenumber = $_POST['phonenumber'];
  mail("info@digitalcloud.com", "Новый клиент, перезвонить", 'Имя:'.$name.', телефон: '.$phonenumber);
  echo 'OK';
}

