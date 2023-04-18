<?php

if (empty($_GET["sayi"])) {
    header("Location: index.php?message=Değer boş olamaz!");
    exit;
}

$sayi = intval($_GET["sayi"]);

if ($sayi % 3 == 0) {
    $message = "Girilen sayı 3'e tam bölünebilir.";
} else {
    $kalan = $sayi % 3;
    $message = "Girdiğiniz sayı 3'e bölünemez.";
}

header("Location: index.php?message=$message");

?>
