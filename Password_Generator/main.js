var inputsifre = document.querySelector("#inputsifre");
var olusturbuton = document.querySelector("#olusturbuton");
var olusansifre = document.querySelector("#olusansifre");
var checkinput = document.querySelectorAll(".form-check-input");
var p = document.createElement("p");
var sifreuzunlugu,j = 0;
var kucukharfler = "abcdefghijklmnopqrstuvwxyz";
var buyukharfler = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var karakterler = "~`!@#$%^&*()_+-={}[]:'<>?,.";
var buyukharfdurum=false,kucukharfdurum=false,sayidurum=false,karakterdurum=false;

olusturbuton.addEventListener("click", function () {
    console.clear();
    buyukharfdurum=false,kucukharfdurum=false,sayidurum=false,karakterdurum=false;
    p.innerHTML = "";
    olusansifre.appendChild(p);
    sifreuzunlugu = inputsifre.value;
    if (sifreuzunlugu == "") {
        p.appendChild(document.createTextNode("Boş bırakmayınız"));
    }


    for (j = 0; j < checkinput.length; j++) {
        if(checkinput[j].checked){
                if (checkinput[j].id == "buyukharf") {
                   buyukharfdurum=true;
                }
                if (checkinput[j].id == "kucukharf") {
                    kucukharfdurum=true;
                }
                if (checkinput[j].id == "sayi") {
                   sayidurum=true;
                }
                if (checkinput[j].id == "karakter") {
                    karakterdurum=true;
                }
        }
    }

    let uretilensifre = [];
    for(let n=0;n<sifreuzunlugu;n++)
    {
        if(buyukharfdurum)
        {
            if(n<sifreuzunlugu)
            uretilensifre[n]=buyukharfler[Math.floor(Math.random()*(buyukharfler.length) )];
            
        }
        if(kucukharfdurum)
        {
            n=n+1;

            if(n<sifreuzunlugu)
            uretilensifre[n]=kucukharfler[Math.floor(Math.random()*(kucukharfler.length))];
           
        }
        if(sayidurum)
        {
            n=n+1;

            if(n<sifreuzunlugu)
            uretilensifre[n]=Math.floor(Math.random()*10);//[0,9]
            
        }
        if(karakterdurum)
        {
            n=n+1;

            if(n<sifreuzunlugu)
            uretilensifre[n]=karakterler[Math.floor(Math.random()*(karakterler.length))];
        }  
    }

    uretilensifre.forEach(element => {
        p.appendChild(document.createTextNode(element));
   });
    
});