function girisdenem()
{
  var kullanicilar=[{ kullaniciadi:"Eray",parola : "206419"}]
  var girilenkullaniciadi,girilenparola;
  function kontrolEt(){
      girilenkullaniciadi=document.getElementById("eposta").value;
      girilenparola=document.getElementById("sifre").value;
      for(i of kullanicilar)
      {
        if((i.kullaniciadi==girilenkullaniciadi)&&(i.parola==i.girilenparola))
        {
            return true;
        } 
        else
        {
            return false;
        }
    }
  }
}
function girisonayi(){
    girisdenem()
    if(girisdenem()){
        window.open("Anasayfa.html","_self");
    }
    else{
        window.alert("Hatalı kullanici adi ya da parola");
        document.getElementById("eposta").value="";
        document.getElementById("sifre").value="";
    }
}