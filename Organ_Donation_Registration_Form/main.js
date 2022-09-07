document.querySelector("#Gonder").addEventListener("click",function(){
    
    var Ad=document.querySelector("#ad").value;
    var Soyad=document.querySelector("#soyad").value;
    var KanGrubu=document.querySelector("#KanGrubu").value;
    var AlerjiDurumu=document.querySelector("#AlerjiDurumu").value;
    var OnayveSartlar=document.querySelectorAll("#check");
    var OnayveSartlarLabel=document.querySelectorAll("#checkLabel");
    //---------------------
    var i;
    var durum=0;
    for(i=0;i<OnayveSartlar.length;i++)
    {
        if(OnayveSartlar[i].checked)
        {
            durum=0;
        }
        else
        {
            durum=1;
        }
    }
    if(Ad=="" || Soyad=="")
    {
        durum=1;
    }
    //-----------------------
    if(durum==1)
    {
        document.querySelector("#uyari").style.display="block";
    }
    else if(durum==0)
    {
        for(i=0;i<OnayveSartlar.length;i++)
        {
            if(OnayveSartlar[i].checked)
            {
                console.log(OnayveSartlarLabel[i].innerHTML+" Secili");
            }
        }
        //-------------------
        if(document.querySelector("#flexRadioDefault1").checked)
        {
            console.log("Erkek");
        }
        else if(document.querySelector("#flexRadioDefault2").checked)
        {
            console.log("Kadın");
        }
        //---------------------
        console.log(Ad);
        console.log(Soyad);
        console.log(KanGrubu);
        console.log(AlerjiDurumu);
        //---------------------
        document.querySelector("#okey").style.display="block";
        document.querySelector("#uyari").style.display="none";
    }
    //----------------------

  
});
//----------------------------
document.querySelector("#uyari").style.display="none";
document.querySelector("#okey").style.display="none";
//---------------------------