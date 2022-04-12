window.addEventListener("load",init);
const teendok =["Felkelek","Felébredek","Elmélyülök a gondolataimban az ágyon ülve még 30 percig","Felöltözök","Elmélyülök a gondolataimban az ágyon ülve, de már felöltözve"];
const sz =[3,2,54,21,0,12,10]
function $(elem){
    return document.querySelectorAll(elem);
}

function init(){
    kiir();
    sz.sort(function(a,b){
        return Math.random()-0.5;
    });
    console.log(sz);
}

function kiir(){
    teendok.sort();
    let lis = $("#teendok ul")[0];
    teendok.forEach(function(elem,index){
        lis.innerHTML += "<li>"+elem+"</li>";
    })

}

