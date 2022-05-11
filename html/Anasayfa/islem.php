<?php
ob_start();
$kadi="B211210306@sakarya.edu.tr";
$sifre="B211210306";
$gelenkadi=$_POST['eposta'];
$gelensifre=$_POST['sifre'];
$kntrl=0;
if(&$gelenkadi=""||$gelensifre="")
{
    $kntrl=1;
}
if ($kadi==$gelenkadi && $sifre==$gelensifre&& $kntrl=0) {
    echo "Hoşgeldiniz  ". $sifre;
    header("refresh:3;url=C:\xampp\htdocs\Web Projesi\html\Anasayfa\Anasayfa.html");
}
else{
    echo "Kullanici adi veya sifre yanlis!!";
    header("refresh:3;url=C:\xampp\htdocs\Web Projesi\html\Anasayfa\giris.html");
}
$kntrl=0;
?>