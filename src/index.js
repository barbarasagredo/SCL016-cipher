import cipher from './cipher.js';

const codificar = () => {
  let codigo = document.getElementById("letras").value;
  let offset = document.getElementById("numeros").value;
  let mensaje = cipher.encode(offset, codigo);
  document.getElementById("cajaTexto").innerHTML = mensaje;
}
document.getElementById("botonDescubre").onclick = function () { codificar(); }

const decodificar = () => {
  let codigo = document.getElementById("letras").value;
  let offset = document.getElementById("numeros").value;
  let mensaje = cipher.decode(offset, codigo);
  document.getElementById("cajaTexto").innerHTML = mensaje;
}
document.getElementById("cifrando").onclick = function () { decodificar(); }


//funcion de navegacion pagina 1 a pagina 2
let botonInicio = document.querySelector("#botonInicio"); //boton inicio
botonInicio.addEventListener("click", nextPage);

function nextPage() {
  document.querySelector(".card").style.display = "none"; // none bloquea la página
  document.querySelector(".card2").style.display = "block"; // muestra la página 
  document.querySelector(".card3").style.display = "none";
  document.querySelector(".card4").style.display = "none";
}

//funcion ir a mensaje para padres
let goToParentMessage = document.querySelector("#parentalMessage");
goToParentMessage.addEventListener("click", changeToPArentMessage);

function changeToPArentMessage() {
  document.querySelector(".card").style.display = "none";
  document.querySelector(".card2").style.display = "none";
  document.querySelector(".card3").style.display = "block";
  document.querySelector(".card4").style.display = "none";
}

//boton compartir a redes sociales
let shareRRSS = document.querySelector("#share");
shareRRSS.addEventListener("click", shareTheResult);

function shareTheResult() {
  document.querySelector(".card").style.display = "none";
  document.querySelector(".card2").style.display = "none";
  document.querySelector(".card3").style.display = "none";
  document.querySelector(".card4").style.display = "block";
}

//volver al inicio
let backTofirst = document.querySelector("#volver");
backTofirst.addEventListener("click", allOverAgain);

function allOverAgain() {
  document.querySelector(".card").style.display = "block";
  document.querySelector(".card2").style.display = "none";
  document.querySelector(".card3").style.display = "none";
  document.querySelector(".card4").style.display = "none";
}

//cambiar segundo texto para padres
function cambiarTexto() {
  document.getElementById("primer").innerHTML = 'La finalidad del código secreto es hacer un acercamiento simple para que les niñes descubran el mundo tecnológico por medio de un cifrado de texto simple. <br> Para ello, escribe tu mensaje de amor, el que te dará un código, el cual puedes entregarle a tu hije. Al ingresar el código, descubrirá el mensaje real. <br> Escribe tu mensaje <a href = "#card2"> AQUÍ';
}
document.getElementById("boton").addEventListener("click", cambiarTexto);

