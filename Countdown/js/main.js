var saat=0;
var dakika=0;
var saniye=0;
var sayac;
var durum=0;
document.querySelector("#sayac").innerHTML=saat+":"+dakika+":"+saniye;

document.querySelector("#baslat").addEventListener("click",function(){

    document.querySelector("#baslat").disabled=true;
    document.querySelector("#sifirla").disabled=false;
    saat=document.querySelector("#saat").value;
    dakika=document.querySelector("#dakika").value;
    saniye=document.querySelector("#saniye").value;
    if(saat=="" || !(saat>=0))
    {
        saat=0;
    }
    if(dakika=="" || !(dakika>=0))
    {
        dakika=0;
    }
    if(saniye=="" || !(saniye>=0))
    {
        saniye=0;
    }
    if(saat==0 && dakika==0 && saniye==0)
    {
        durum=1;
    }

    document.querySelector("#sayac").innerHTML=saat+":"+dakika+":"+saniye;
    
    if(durum==0)
    sayac=setInterval(say, 1000);
    if(durum==1)
    {
        document.querySelector("#baslat").disabled=false;
        document.querySelector("#sifirla").disabled=true;
        durum=0;
    }
});
function say()
        {
        if(saniye==0)
        {
            if(saat==0 && dakika==0)
            {
               durum=1;
                sifirla();
            }
            
            saniye=60;
            {
                
               /* 15:1:1
                  15:1:0
                  15:0:59
                14:59:59
                */
               //saatin olması
                {
                    //saatin olması dakikanın olması 01:02:15
                    if(dakika !=0 && saat !=0)
                    {
                        dakika--;

                    }
                     //saatin olması dakikanın olmaması 01:00:15
                    else if(saat!=0 && dakika==0)
                    {
                        saat--;
                        dakika=59;
                    }
                

                //satin olmaması 
                
                    //satin olmaması dakikanın olması 00:02:15
                    else if(saat==0 && dakika !=0)
                    {
                        dakika--;
                    }
                    //satin olmaması dakikanın olmaması 00:00:15
                    //bunun için yazmaya gerek yok
                }
            }

        }
        saniye--;

            if(durum==1)
            {
                saniye=0;
                durum=0;
            }
                document.querySelector("#sayac").innerHTML=saat+":"+dakika+":"+saniye;
        }

document.querySelector("#sifirla").addEventListener("click",sifirla);
var alarm;
function sifirla()
{
        saat=0;
        dakika=0;
        saniye=0;
        clearInterval(sayac);
        document.querySelector("#baslat").disabled=true;
        document.querySelector("#sifirla").disabled=true;
        document.querySelector("#sayac").innerHTML=saat+":"+dakika+":"+saniye;
        document.querySelector("#uyari").style.display="block";
        alarm=setInterval(() => {
            document.querySelector("#alarm").play();
        }, 1000);
        
    
}

document.querySelector("#uyari").style.display="none";
document.querySelector("#UyariKapat").addEventListener("click",function(){
    document.querySelector("#baslat").disabled=false;
    document.querySelector("#uyari").style.display="none";
    document.querySelector("#alarm").pause();
    clearInterval(alarm);
    saniye=0;
    document.querySelector("#sayac").innerHTML=saat+":"+dakika+":"+saniye;
});

