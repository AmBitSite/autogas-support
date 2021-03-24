<?php
//// ФАЙЛ ДЛЯ РАССЫЛКИ
////Получаем данные из формы

$name = $_POST['name']; // поле с Заговоком
$phone = $_POST['phone']; // поле с Текстом сообщения
$message = $_POST['message']; // поле с Текстом сообщения


$title = 'First Trust and Consulting services - Site Message ';
$message = "Name: $name \n\r
            Phone: $phone \n\r
            Email: $email ";

mail('info@autogas-support.com', $title, $message);

header("Location: /index.html");
exit();