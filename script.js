var c1=document.querySelector("#color1");
var c2=document.querySelector("#color2");
var css=document.querySelector("#css");
var body=document.getElementById("gradient");

function setting()
{
    body.style.background="linear-gradient(to right, "
    + c1.value+", "+
    c2.value 
    +")" ;
    css.textContent=body.style.background+";";
}


c1.addEventListener("input",setting)

c2.addEventListener("input",setting)
