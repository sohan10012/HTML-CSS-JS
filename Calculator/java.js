const display = document.getElementById("content");

function Appendtodisplay(input) {
  display.innerHTML += input;
}

function Cleardisplay() {
    display.innerHTML = "";
}

function calculate() {
    try{
    display.innerHTML = eval(display.innerHTML);
    }
    catch(err) {
        display.innerHTML = "Error"
    }
} 

function Delete(){
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
}