import * as h from './hesapla.js';
var baslatbtn = document.querySelector("#baslatbtn");
var durdurbtn = document.querySelector("#durdurbtn");
var sifirlabtn = document.querySelector("#sifirlabtn");
var sayacalani = document.querySelector("#sayacalani");
var saniye = 0,
    dakika = 0,
    saat = 0;
var sayac, tutsaat = 0,
    tutdakika = 0,
    tutsaniye = 0;
var sayac;

durdurbtn.disabled = true;
sifirlabtn.disabled = true;

sayacalani.innerHTML = `${saat}:${dakika}:${saniye}`;
baslatbtn.addEventListener("click", () => {
    saniye = 0;
    dakika = 0;
    saat = 0;
    durdurbtn.disabled = false;
    sifirlabtn.disabled = false;
    baslatbtn.disabled = true;
    sayac = setInterval(say, 1000);
});

durdurbtn.addEventListener("click", () => {
    if (durdurbtn.innerText == "Devam") {
        durdurbtn.innerText = "Durdur";
        saat = tutsaat;
        dakika = tutdakika;
        saniye = tutsaniye;
        sayac = setInterval(say, 1000);
        durdurbtn.disabled = false;
        sifirlabtn.disabled = false;
    }
    else
    {
        tutsaat = saat;
        tutdakika = dakika;
        tutsaniye = saniye;
        durdurbtn.disabled = false;
        sifirlabtn.disabled = true;
        baslatbtn.disabled = true;
        durdurbtn.innerText = "Devam";
        clearInterval(sayac);
    }
});

sifirlabtn.addEventListener("click", () => {
    clearInterval(sayac);
    saniye = 0;
    dakika = 0;
    saat = 0;
    sayacalani.innerHTML = `${saat}:${dakika}:${saniye}`;
    durdurbtn.disabled = true;
    sifirlabtn.disabled = true;
    baslatbtn.disabled = false;
});

function say(){
    saniye++;
    sayacalani.innerHTML = `${saat}:${dakika}:${saniye}`;
    if (saniye == 59) {
        saniye = 0;
        dakika++;
    }
    if (dakika == 59) {
        dakika = 0;
        saat++;
    }
}