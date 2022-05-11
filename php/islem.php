<?php
ob_start();
$kadi="B211210306@sakarya.edu.tr";
$sifre="B211210306";
$gelenkadi=$_POST['eposta'];
$gelensifre=$_POST['sifre'];
if ($kadi==$gelenkadi && $sifre==$gelensifre) {
    echo "Hoşgeldiniz  ". $sifre;
    header("refresh:3;url=Anasayfa.html");
}
else{
    echo "Kullanici adi veya sifre yanlis!!";
    header("refresh:3;url=giris.html");
}
?>