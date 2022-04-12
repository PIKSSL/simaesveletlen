window.addEventListener("load",init);
const kepek = ["kep1.jpg","kep1.jpg","kep2.jpg","kep2.jpg","kep3.jpg","kep3.jpg"]

function $(elem){
    return document.querySelectorAll(elem);
}
function ID(elem){
    return document.getElementById(elem);
}

var kattintva = false;
function init(){
    feltolt()
}

function feltolt(){
    let fo = document.getElementById("memm");
    kepek.forEach(function(elem, index){
        fo.innerHTML +="<div class='kept'><img id='"+index+"' src='kepek/hatter.jpg'></img></div>";
    });
    let tarolok = $("#memm div img");
    tarolok.forEach(function(elem,index) {
        elem.addEventListener("click",kattint);
    });
}
var elozo;
var elozoi;
function kattint(){
    let c = event.target;
    c.src = "kepek/"+kepek[c.id]+"";
    c.removeEventListener("click",kattint);
    if(kattintva == false){
        elozo = kepek[c.id];
        elozoi = c.id;
        kattintva = true;
    }else if(kattintva == true){
        if(kepek[c.id] != elozo){
            c.src = "kepek/"+kepek[c.id]+"";
            setTimeout(() =>{
                c.src = "kepek/hatter.jpg";
                c.addEventListener("click",kattint);
                ID(elozoi).src ="kepek/hatter.jpg";
                ID(elozoi).addEventListener("click",kattint);
                kattintva =false;
            },500);
            
        }else{
            setTimeout(() =>{
                c.style.opacity="50%";
                ID(elozoi).style.opacity = "50%";
            },500);
            kattintva = false;
        }
    }

}