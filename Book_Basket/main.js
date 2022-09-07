var durum=0;
var sayac=0;
var olumsuzalert=document.querySelector("#olumsuzalert");
var olumlualert=document.querySelector("#olumlualert");
var aramabuton=document.querySelector("#arabuton");
var sonuclistele=document.querySelector("#sonuclistele");
var input=document.querySelector("#arananyazar");
var girilenyazar;

olumsuzalert.style.display="none";
olumlualert.style.display="none";

/*
class Yazarlistesi
{
    constructor(yazaradi,yazarkitabi)
    {
        this.ayazaradi=yazaradi;
        this.ayazarkitabi=yazarkitabi;
    }
}
*/
function Yazarlistesi(yazaradi,yazarkitabi)
{
    this.ayazaradi=yazaradi;
    this.ayazarkitabi=yazarkitabi;
}

var yazar1=new Yazarlistesi("osho",["Meditasyon 1","Meditasyon 2"]);
var yazar2=new Yazarlistesi("Doğan CÜCELOĞLU",["İçimizdeki Biz","İnsan İnsana"]);
var yazarlar=new Yazarlistesi();
var yazarkayitlari=[yazar1,yazar2];

input.addEventListener("input",function(){
    girilenyazar=input.value;
    if(girilenyazar=="")
    {
        alert("boş bırakmayınız");
        olumsuzalert.style.display="none";
        olumlualert.style.display="none";
    }
    
});

aramabuton.addEventListener("click",function(){
    durum=0;
    sayac=0;
    sonuclistele.innerHTML="";
    {
        for(let i=0;i<2;i++)
        {
            if(girilenyazar===yazarkayitlari[i].ayazaradi)
            {
                durum=1;
                olumlualert.style.display="block";
                yazarkayitlari[i].ayazarkitabi.forEach(element => {
                sonuclistele.innerHTML +=element+"<br>";
                sayac++;
               });
              olumlualert.innerHTML=sayac+" Kitap Bulundu";
              olumsuzalert.style.display="none";
            }
        }
        if(durum==0)
        {
            olumsuzalert.style.display="block";
            olumlualert.style.display="none";
        }
    }
   
});

