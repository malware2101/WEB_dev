
const input = document.getElementById("input");
const ctof = document.getElementById("ctof");
const ftoc = document.getElementById("ftoc");
const out = document.getElementById("out");
let temp=Number(input.value);



function convert(){
    if(ctof.checked){
        out.textContent=cel(temp).toFixed(1);

    }
    else if(ftoc.checked){
        out.textContent= fah(temp).toFixed(1);

    }
    else{
        out.textContent="select a unit";
    }

}
function cel(celsius) {
    return (celsius * 9/5) + 32;
}
  
function fah(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}


