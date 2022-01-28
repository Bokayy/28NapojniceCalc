"use-strict"

const iznos = document.getElementById("iznos");
const kvaliteta = document.getElementById("kvaliteta");
const tipIznos = document.getElementById("tip-iznos");

function calculate () {
    const tip = iznos.value * kvaliteta.value
    iznos.value = String();
    kvaliteta.value = String();

    if (tip === "NaN"){
        tipIznos.innerHTML = "Napojnica je 0"
    }else{
        tipIznos.innerHTML = "Napojnica je " + tip + "€";
    }
}

function showTipIznos (){
    const x = tipIznos;
    x.className = "show";
    setTimeout (function () {
    x.className = x.className.replace("show","");
    },3000);
}