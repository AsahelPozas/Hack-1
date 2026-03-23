// Acceder al body y cambiar el color de fondo
document.body.style.backgroundColor ="#F0E9DD";

// Color de letras TRENDING
let textos = document.querySelectorAll(".negro");

textos.forEach(function(elemento) {
  elemento.style.color = "#2A2624";
});

// Contenedor TRENDING
const contenedor = document.querySelector(".trending")
const texto1 = document.querySelectorAll("h4")
texto1[0].innerText = "CONJUNTOS"