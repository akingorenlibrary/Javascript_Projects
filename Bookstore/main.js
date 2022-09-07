var KitapVeriTabani = [];
var duzenle = [];
var sil = [];
var kaydetButon = document.querySelector("#kaydetButon");
var kadiinput = document.querySelector("#kadi");
var yadiinput = document.querySelector("#yadi");
var barkodninput = document.querySelector("#barkodn");
var alertdanger = document.querySelector("#alertDanger");
var alertsuccess = document.querySelector("#alertSuccess");
var kaydedilenKitaplar = document.querySelector("#kaydedilenKitaplar");
var listelenenkitaplar = document.querySelector("#listelenenkitaplar");
var palertdanger = document.createElement("p");
var palertsuccess = document.createElement("p");
var kadi, yadi, barkodn, i = 0;
var kontrolonayi = false;
var guncellenecekindis = -1,
    silinenindis;
var kaydedilenlistelebuton = document.querySelector("#kaydedilenlistelebuton");
var ilkverikaydiyapidi = false;
var kitapsayisi=0;

alertdanger.style.display = "none";
alertsuccess.style.display = "none";
listelenenkitaplar.style.display = "none";
kaydedilenlistelebuton.disabled = true;



kaydedilenlistelebuton.addEventListener("click", function () {
    alertdanger.style.display = "none";
    alertsuccess.style.display = "none";
    listelenenkitaplar.style.display = "block";
    kitapListele();
    duzenlekontrol();
    silkontrol();
  
});

kaydetButon.addEventListener("click", function () {
    if (kaydetButon.innerHTML == "Kaydet") {
        kadi = kadiinput.value;
        yadi = yadiinput.value;
        barkodn = barkodninput.value;
        id = i;
        kontrol();
        if (kontrolonayi) {
            ilkverikaydiyapidi = true;
            listelenenkitaplar.style.display = "block";
            KitapVeriTabani[i] = new KitapListesi(kadi, yadi, barkodn, id);
            i++;
            kitapListele();
            duzenlekontrol();
            silkontrol();
            
        }
    } else if (kaydetButon.innerHTML == "Güncelle") {

        kadi = kadiinput.value;
        yadi = yadiinput.value;
        barkodn = barkodninput.value;
        id = i;
        kontrol();
        if (kontrolonayi) {
            listelenenkitaplar.style.display = "block";
            KitapVeriTabani[guncellenecekindis] = new KitapListesi(kadi, yadi, barkodn, id);
            kaydetButon.innerHTML = "Kaydet";
            palertsuccess.innerHTML = "";
            palertsuccess.appendChild(document.createTextNode("Veriler Güncellendi"));
            kitapListele();
            duzenlekontrol();
            silkontrol();
            setTimeout(() => {
                palertsuccess.style.display = "none";
            }, 5000);
           
        }
    }
});

function kontrol() {

    if (kadi == "" || yadi == "" || barkodn == "") {
        kontrolonayi = false;
        listelenenkitaplar.style.display = "none";
        palertdanger.innerHTML = "";
        alertsuccess.style.display = "none";
        alertdanger.style.display = "block";
        alertdanger.appendChild(palertdanger);
        palertdanger.id = "palert";
        palertdanger.appendChild(document.createTextNode("Boş Bırakmayınız"));
        if (ilkverikaydiyapidi) {
            kaydedilenlistelebuton.disabled = false;
        } else {
            kaydedilenlistelebuton.disabled = true;
        }
        setTimeout(() => {
            alertdanger.style.display = "none";
        }, 5000);

    } else {
        kontrolonayi = true;
        alertdanger.style.display = "none";
        alertsuccess.style.display = "block";
        alertsuccess.appendChild(palertsuccess);
        palertsuccess.id = "palert";
        palertsuccess.innerHTML = "";
        palertsuccess.appendChild(document.createTextNode("Veriler Kaydedildi"));
        kadiinput.value = "";
        yadiinput.value = "";
        barkodninput.value = "";
        setTimeout(() => {
            alertsuccess.style.display = "none";
        }, 5000);

    }

}

function KitapListesi(kadi, yadi, barkodn, id) {
    this.vkadi = kadi;
    this.vyadi = yadi;
    this.vbarkodn = barkodn;
    this.vid = id;
}


function kitapListele() { 
    kaydedilenKitaplar.innerHTML = "";
    kitapsayisi=kitapsayisihesapla();
    if(0==kitapsayisi)
    {
        alertdanger.style.display = "none";
        listelenenkitaplar.style.display = "none";
        alertdanger.style.display = "block";
        palertdanger.innerText="Listelenecek veri yok";
        setTimeout(() => {
            alertdanger.style.display = "none";
        }, 5000);
      
    }
    else
    {
        for (let n = 0; n < i; n++) {
            if (KitapVeriTabani[n] != undefined) {
                kaydedilenKitaplar.innerHTML += "<tr><th scope='row'>" + (n + 1) + "</th><td>" + KitapVeriTabani[n].vkadi + "</td>" +
                    "<td>" + KitapVeriTabani[n].vyadi + "</td><td>" + KitapVeriTabani[n].vbarkodn + "</td>" +
                    "<td><button type='button' class='btn btn-outline-danger' id='skitap" + n + "'>Sil</button></td>" +
                    "<td><button type='button' class='btn btn-outline-primary' id='dkitap" + n + "'>Düzenle</button></td></tr>";
            }
    
    
        }
        silkontrol();
    }
}





function duzenlekontrol() {
    for (let x = 0; x < i; x++) {

        if (KitapVeriTabani[x] != undefined) {
            duzenle[x] = document.querySelector("#dkitap" + x);
            duzenle[x].addEventListener("click", function () {
                kadiinput.value = KitapVeriTabani[x].vkadi;
                yadiinput.value = KitapVeriTabani[x].vyadi;
                barkodninput.value = KitapVeriTabani[x].vbarkodn;
                kaydetButon.innerHTML = "Güncelle";
                guncellenecekindis = x;
                alertdanger.style.display = "none";
                alertsuccess.style.display = "none";

            });
        }
    }
}

function silkontrol() {
    for (let y = 0; y < i; y++) {
        if (KitapVeriTabani[y] != undefined) {
        sil[y] = document.querySelector("#skitap" + y);
        sil[y].addEventListener("click", function () {
            alertdanger.style.display = "none";
            alertsuccess.style.display = "none";
            delete KitapVeriTabani[y];
            delete sil;
            alertsuccess.style.display = "block";
            palertsuccess.innerHTML = "Veriler Silindi";
            setTimeout(() => {
                alertsuccess.style.display = "none";
            }, 5000);
            kitapListele();
        });
    }
}

}



function kitapsayisihesapla(){
    kitapsayisi=0;
    for (let z = 0; z < i; z++) {
    if (KitapVeriTabani[z] != undefined) {
        kitapsayisi++;   
    }
}
return kitapsayisi;
}