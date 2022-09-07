var verigirisialani = document.querySelector("#verigirisi");
var listelebutonu = document.querySelector("#listelebutonu");
var listenenveriler = document.querySelector("#listenenveriler");
var ogrencisayisibuton = document.querySelector("#ogrencisayisibuton");
var ogrencisayisiinput = document.querySelector("#ogrencisayisiinput");
var verigiristablosu=document.querySelector("#verigiristablosu");
var listelenenverilertablosu=document.querySelector("#listenenverilertablosu");
var tabloinput=document.querySelector(".form-control");
var kaydet=document.querySelector("#kaydet");
var ogrencisayisi;
var ogrenciadi;
var ogrencisoyadi;
var ogrencinumarasi;
var ogrenciid;

verigirisialani.style.display = "none";
listelebutonu.style.display = "none";
listenenveriler.style.display = "none";

ogrencisayisiinput.addEventListener("input", function () {
    ogrencisayisi = document.querySelector("#ogrencisayisiinput").value;
});

ogrencisayisibuton.addEventListener("click", function () {
    verigirisialani.style.display = "block";
    for (let i = 0; i < ogrencisayisi; i++) {
        verigiristablosu.innerHTML+="<tr><th scope='row'>"+(i+1)+"</th><td><input type='text' class='form-control' id='ogradi"+i+"'></td><td><input type='text' class='form-control' id='ogrsoyadi"+i+"'></td><td><input type='text' class='form-control' id='ogrnumarasi"+i+"'></td></tr>";
    }
})
var ogrenci=new Array(ogrencisayisi);

kaydet.addEventListener("click",function(){
    listenenveriler.style.display = "block";
    for (let i = 0; i < ogrencisayisi; i++) {
        ogrenciid=i;
        ogrenciadi=document.querySelector("#ogradi"+i).value;
        ogrencisoyadi=document.querySelector("#ogrsoyadi"+i).value;
        ogrencinumarasi=document.querySelector("#ogrnumarasi"+i).value;
       // console.log(ogrenciid,ogrenciadi,ogrencisoyadi,ogrencinumarasi);
       ogrenci[i]=new Ogrencilistesi(ogrenciid,ogrenciadi,ogrencisoyadi,ogrencinumarasi);
    }
    for ( i = 0; i < ogrencisayisi; i++) {
        listelenenverilertablosu.innerHTML+="<tr><th scope='row'>"+(i+1)+"</th><td>"+ogrenci[i].ogradi+"</td><td>"+ogrenci[i].ogrsoyadi+"</td><td>"+ogrenci[i].ogrnumarasi+"</td></tr>";
    }

});

function Ogrencilistesi(ogrenciid,ogrenciadi,ogrencisoyadi,ogrencinumarasi)
{
    this.ogrid=ogrenciid;
    this.ogradi=ogrenciadi;
    this.ogrsoyadi=ogrencisoyadi;
    this.ogrnumarasi=ogrencinumarasi;
}

