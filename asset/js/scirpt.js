let container = document.getElementById("c1");
container.innerText="¡Hola Mundo!";
container.style.backgroundColor="#000000";
container.style.color="#1cb723";
container.style.width="200px";
container.style.height="200px";
container.innerHTML="<input type=”text” placeholder=’escriba su texto’>";

let containers = document.getElementsByClassName("c2");

let aux1=document.querySelectorAll(".c2")
aux1.forEach( function(element) {
    element.style.backgroundColor="#009999";
    element.innerHTML="<input type='text' placeholder='Escriba su texto'>";
});

let boton = document.getElementById("btn-click");

boton.onclick = function(evt)
{
alert("Hola mundo");
}

let btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function(evt)
{
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
} 