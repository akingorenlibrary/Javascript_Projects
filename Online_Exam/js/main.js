var sayfa = 1;
var sorusayisi=3;
var puan=0;
var yanlissayac=0;
var dogrusayac=0;
var cevaplar=new Array();
var tut;
var tut2;
var bossayisi=0;
var durum=0;

var sorular = {
    soru1: {
        soru: "Aşağıdakilerden hangisi OSHO kitabıdır?",
        siklar: {
            a: "Bir Çift Yürek",
            b: "İçimizdeki Biz",
            c: "Meditasyon",
            d: "Şeker Portakalı",
        },
        cevap: "Meditasyon"
    },
    soru2: {
        soru: "Aşağıdakilerden hangisi Dogan CÜCELOĞLU kitabıdır?",
        siklar: {
            a: "Bir Çift Yürek",
            b: "İçimizdeki Biz",
            c: "Meditasyon",
            d: "Şeker Portakalı",
        },
        cevap: "İçimizdeki Biz"
    },
    soru3: {
        soru: "Aşağıdakilerden hangisi Marlo Morgan kitabıdır?",
        siklar: {
            a: "Bir Çift Yürek",
            b: "İçimizdeki Biz",
            c: "Meditasyon",
            d: "Şeker Portakalı",
        },
        cevap: "Bir Çift Yürek"
    }
};


document.querySelector("#SinaviBaslat").addEventListener("click", function () {
    document.querySelector("#sinavibaslatdivi").style.display = "none";
    document.querySelector("#sorukarti").style.display = "block";
    document.querySelector("#sinavibitir").style.display = "block";
    document.querySelector("#bosbirak").style.display = "block";
    sorularigetir();

});
document.querySelector("#bosbirak").style.display = "none";
document.querySelector("#sinavibitir").style.display = "none";
document.querySelector("#sorukarti").style.display = "none";
document.querySelector("#oncekisorubuton").disabled = true;


function sorularigetir() {
    if(sayfa==sorusayisi)
    {
        document.querySelector("#sonrakisorubuton").disabled=true;
    }
    if(sayfa !=sorusayisi)
    {
        document.querySelector("#sonrakisorubuton").disabled=false;
    }
    if(sayfa==1)
    {
      document.querySelector("#oncekisorubuton").disabled = true;
    }
    if(sayfa>1)
    {
      document.querySelector("#oncekisorubuton").disabled = false;
    }
    document.querySelector("#kacincisoru").innerHTML = "Soru " + sayfa;
    document.querySelector("#sorulistesi").innerHTML="";
    for(let i=1;i<=sorusayisi;i++)
    {
        if(sayfa==i)
        {
            document.querySelector("#sorulistesi").innerHTML+="<button type='button' style='margin-top:1px' id='soru"+i+"' class='btn btn-secondary'>"+i+"</button>&nbsp";
        }
        else
        {
            document.querySelector("#sorulistesi").innerHTML+="<button type='button' style='margin-top:1px' id='soru"+i+"' class='btn btn-secondary' disabled>"+i+"</button>&nbsp";
        }
    
    }
    document.querySelector("#soru").innerHTML = sorular["soru" + sayfa].soru;
    document.querySelector("#asikki").innerHTML = sorular["soru" + sayfa].siklar.a;
    document.querySelector("#bsikki").innerHTML = sorular["soru" + sayfa].siklar.b;
    document.querySelector("#csikki").innerHTML = sorular["soru" + sayfa].siklar.c;
    document.querySelector("#dsikki").innerHTML = sorular["soru" + sayfa].siklar.d;
}

var secilensiklabel=document.querySelectorAll(".form-check-label");
var secilensik=document.querySelectorAll(".form-check-input");

 
checkboxlarioku();
document.querySelector("#sonrakisorubuton").addEventListener("click", function () {
    checkboxlarioku();
    if(sayfa<sorusayisi)
    {
        sayfa++;
        sorularigetir();
    }
});
document.querySelector("#oncekisorubuton").addEventListener("click", function () {
    checkboxlarioku();

        sayfa--;
        sorularigetir();
});

function cevapkontrol()
{
    for(let i=0;i<sorusayisi;i++)
    {
        console.log(i,cevaplar[i]);
        tut2=i+1;
        if(cevaplar[i]==sorular["soru"+tut2].cevap)
        {
            puan=puan+33,3;
            dogrusayac++;
        }
        else if(cevaplar[i]=="boş")
        {
            bossayisi++;
        }
        else if(cevaplar[i]==undefined)
        {
            bossayisi++;
        }
        else
        {
            yanlissayac++;
        }
    }
}

function checkboxlarioku()
{
    for(let i=0;i<secilensik.length;i++)
    {
        secilensik[i].addEventListener("click",function(){

                cevaplar[sayfa-1]=secilensiklabel[i].innerHTML;
            
        });
    
    }
}

document.querySelector("#bosbirak").addEventListener("click",function(){
   
    for(let i=0;i<secilensik.length;i++)
    {
        secilensik[i].checked=false;
        cevaplar[sayfa-1]="boş";
    }

});

document.querySelector("#sinavibitir").addEventListener("click",function(){
    checkboxlarioku();
    cevapkontrol();
    document.write("Doğru Sayınız: "+dogrusayac+"<br>Yanlış Sayınız: "+yanlissayac+"<br>"+"Boş Sayısı: "+bossayisi+"<br>Puan: "+puan);
    setTimeout(() => {
        //window.location.reload();
    }, 5000);
});


/*
function Sorulistesi(soru,siklar,cevap)
{
    this.asoru=soru;
        this.asiklar=siklar;
        this.acevap=cevap;
}
*/
/*
class Sorulistesi
{
 constructor(soru,siklar,cevap) 
    {
        this.asoru=soru;
        this.asiklar=siklar;
        this.acevap=cevap;
    }
}

var soru1=new Sorulistesi("Aşağıdakilerden hangisi OSHO kitabıdır?",["Bir Çift Yürek"],["İçimizdeki Biz"],["Meditasyon"],[ "Şeker Portakalı"],"Meditasyon");
var soru2=new Sorulistesi("Aşağıdakilerden hangisi OSHO kitabıdır?",["Bir Çift Yürek"],["İçimizdeki Biz"],["Meditasyon"],[ "Şeker Portakalı"],"Meditasyon");
var soru3=new Sorulistesi("Aşağıdakilerden hangisi OSHO kitabıdır?",["Bir Çift Yürek"],["İçimizdeki Biz"],["Meditasyon"],[ "Şeker Portakalı"],"Meditasyon");
console.log(soru1.asoru);
*/