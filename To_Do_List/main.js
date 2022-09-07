var girileninput = document.querySelector("#girileninput");
var listelealani = document.querySelector("#listele");
var altbaslik = document.querySelector("#altbaslik");
listelealani.style.display = "none";
altbaslik.style.display = "none";
var girileninputdegeri;
var ul = document.createElement("ul");
var li = [];
var text, i = 0;
var tiklanantext;
var tiklanantext2;

girileninput.addEventListener("input", function () {
    girileninputdegeri = document.querySelector("#girileninput").value;
});
girileninput.addEventListener("keypress", function (element) 
{
     

    if (element.key === "Enter") 
    {


        listelealani.style.display = "block";
        altbaslik.style.display = "block";
        i++;


        li[i] = document.createElement("li");
        text = document.createTextNode(girileninputdegeri)
        li[i].appendChild(text);
        li[i].id = i;
        ul.appendChild(li[i]);
        listelealani.appendChild(ul);


        document.querySelector("#girileninput").value = "";
    
        
        li.forEach(element => {
            element.addEventListener("click",function(){
                tiklanantext=element.innerHTML;
                element.innerHTML="<del class='ustucizili' id='"+element.id+"'>"+tiklanantext+"<del>";
            });
        });

    }
});


