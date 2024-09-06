const tb = document.getElementById("tb");
const degf = document.getElementById("degf");
const fdig = document.getElementById("fdig");
const submit = document.getElementById("submit");
const display = document.getElementById("display");
let tem;


function convert(){
    if(degf.checked){
       tem= Number(tb.value); 
       tem= 9/5 * tem + 32; 
       display.textContent= tem + "°F";
}
else if(fdig.checked){
       tem= Number(tb.value); 
       tem=(tem-32)*5/9;
       display.textContent= tem + "°C";
}
else{
    display.textContent= "Select a unit";
}
}