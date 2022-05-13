<?php
error_reporting(0);
$ad=$_POST["ad"];
$soyad=$_POST["soyad"];
$cinsiyet=$_POST["cinsiyet"];
$mail=$_POST["email"];
$sifre=$_POST["sifre"];
$spor=$_POST["adres"];
if($ad!=""&&$soyad!=""&&$cinsiyet!=""&&$mail!=""&&$sifre!=""&&$spor!= "")
{
echo "Kullanicinin adi.....: ".$_POST["ad"];
echo "<br>";echo "<br>";
echo "Kullanicinin soyadi...: ".$_POST["soyad"];
echo "<br>";echo "<br>";
echo "Kullanicinin cinsiyeti....:".$_POST["cinsiyet"];
echo "<br>";echo "<br>";
echo "Kullanicinin mail adresi....:".$_POST["email"];
echo "<br>";echo "<br>";
echo "Kullanicinin sifresi....:".$_POST["sifre"];
echo "<br>";echo "<br>";
echo "Kullanicinin yasadigi şehir....:".$_POST["spor"];
echo "<br>";echo "<br>";
echo "Kullanicinin bildiği diller....:";
echo "<br>";echo "<br>";
if($_POST["C#"])
{
    echo $_POST["C#"];echo ",";
}
if($_POST["C++"])
{
    echo $_POST["C++"];echo ",";
}
if( $_POST["C"])
{
echo $_POST["C"];echo ",";
}
if($_POST["JavaScript"])
{
echo $_POST["JavaScript"];echo ",";
}
if($_POST["Python"])
{
echo $_POST["Python"];echo ",";
}
if($_POST["PHP"]){
echo $_POST["PHP"];
}
echo "<br>";echo "<br>";
echo "Kullanicinin adresi....:".$_POST["adres"];
}
else{
    header("Refresh: 3;  url=iletisim.html");
}
?>