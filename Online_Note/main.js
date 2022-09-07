var add = document.querySelector("#add");
var noteadd = document.querySelector("#noteadd");
var alert = document.querySelector("#alert");
var notecount=localStorage.getItem("notecount");
var textarea = [];
var text, getconfrim = false;
var savedelete=[],n=0;
var savenote=[],x=0;
var check=false;

if (localStorage.length > 0) {
    alert.style.display = "none";
    noteadd.innerHTML = "";
    var max=countdeletenote();
    for (let j = 1; j <= max; j++) {
        if (localStorage.getItem("note" + j) != null) {
            textarea[j] = document.createElement("textarea");
            textarea[j].id = "note" + j;
            noteadd.appendChild(textarea[j]);
            text = localStorage.getItem("note" + j);
            textarea[j].appendChild(document.createTextNode(text));
            textarea[j].addEventListener("input", () => {
                var tut=localStorage.getItem("notecount");
                localStorage.setItem("notecount",tut+1);
                localStorage.setItem("note" +(tut+1) , textarea[j].value);
                max++;
            }); 
            deletekontrolinput(j);
        }
    }
}



add.addEventListener("click", () => {
    notecount++;
    alert.style.display = "none";
    textarea[notecount] = document.createElement("textarea");
    textarea[notecount].id = "note" + notecount;
    noteadd.appendChild(textarea[notecount]);
    for (let i = 1; i <= notecount; i++) 
    {
        textarea[i].addEventListener("keyup", () => {
            localStorage.setItem("note" + i, textarea[i].value);
        })  
        
    }
    savenote[x]=notecount;
    savenote.forEach(element => {
        deletekontrolinput(element);
    });
    localStorage.setItem("savenotecount",JSON.stringify(savenote));
    localStorage.setItem("notecount",notecount);
    x++;
});


function countdeletenote()
{
  return Math.max(...(JSON.parse(localStorage.getItem("savenotecount"))));
    
}



function deletekontrolinput(i)
{
        textarea[i].addEventListener("keydown", (element) => {
                if (element.key == "x" && element.ctrlKey == true && getconfrim == false) {
                    deletekontrol(i);
                }
            });
}


function deletekontrol(i) {
    getconfrim = confirm(`Not ${i} silmek istediğinizden emin misiniz?`);
    if (getconfrim) {
        noteadd.removeChild(textarea[i]);
        localStorage.removeItem("note" + i);
        getconfrim = false;
        let tut=localStorage.getItem("notecount");
        localStorage.setItem("notecount",tut-1);
        {
            var savenotecount=JSON.parse(localStorage.getItem("savenotecount"));
            savenotecount.forEach( (element,indis) => {
                if(element==i)
                {
                    delete savenotecount[indis];
                    localStorage.setItem("savenotecount",JSON.stringify(savenotecount));
                }
            });
        }
    }
}
