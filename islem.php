<?php
ob_start();
$kadi="B211210306@sakarya.edu.tr";
$sifre="B211210306";
$gelenkadi=$_POST['eposta'];
$gelensifre=$_POST['sifre'];
$kntrl=false;
if($gelenkadi==""||$gelensifre=="")
{
    $kntrl=true;
}
if ($kadi==$gelenkadi && $sifre==$gelensifre&& $kntrl==false) {
    echo "Hoşgeldiniz  ". $sifre;
    header("refresh:3;url=index.html");
}
else{
    echo "Kullanici adi veya sifre yanlis!!";
    header("refresh:3;url=giris.html");
}
$kntrl=0;
?>