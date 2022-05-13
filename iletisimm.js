function Mailkontrol(){
    let text = "";
    let mail = document.querySelector("#email").value;
    if(mail === '' || mail.toString().length === 0){
        text = "Mail adresi kısmı boş bırakılamaz."
        mail = false;

    }
    else{ 
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mail.toString().match(mailFormat)){
            mail = true;
            text = "";
  
        }
        else{
            text = "Lütfen e-mail formatında girdi giriniz."
            mail = false;

        }
        
}
document.querySelector("#mailhata").innerHTML = text;  
}
function adkontol(){
let text = "";
    let ad = document.querySelector("#ad").value;
    if(ad === '' || ad.toString().length === 0){
        text = "Adınızı boş bırakmayınız."
        ad = false;
 
    }
    else{ 
        ad=true;
  
    }
    document.querySelector("#adhata").innerHTML = text; 
}
function soyadkontol(){
let text = "";
    let soyad = document.querySelector("#soyad").value;
    if(soyad === '' || soyad.toString().length === 0){
        text = "Soyadınızı boş bırakmayınız."
        soyad = false;

    }
    else{ 
        soyad=true;

    }
    document.querySelector("#soyadhata").innerHTML = text; 
}
function sifrekontol(){
let text = "";
    let sifre = document.querySelector("#sifre").value;
    if(sifre === '' || sifre.toString().length === 0){
        text = "Lütfen bir sifre giriniz."
        sifre = false;

    }
    else{ 
        sifre=true;
    }
    document.querySelector("#sifrehata").innerHTML = text; 
}
function cinsiyetkontrol()
 {
    var cinsiyet= document.forms["iletisim"]["cinsiyet"];
    if(cinsiyet[0].checked==false&&cinsiyet[1].checked==false)
    {
        alert("Lütfen cinsiyetinizi belirtiniz.");
        return false;
    }
}
function kontrolHepsi(){
    let mail = document.querySelector("#email").value;
    let ad = document.querySelector("#ad").value;
    let soyad = document.querySelector("#soyad").value;
    let sifre = document.querySelector("#sifre").value;
  
    if(mail===""&&ad===""&&soyad===""&&sifre===""){
        alert("Boş bırakılan yerler var lütfen doldurunuz");
        return false;
    }
    else{
     return true;
    }

}