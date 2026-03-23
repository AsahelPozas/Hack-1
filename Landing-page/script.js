// Acceder al body y cambiar el color de fondo
document.body.style.backgroundColor ="#F0E9DD";

// Color de letras TRENDING
let textos = document.querySelectorAll(".negro");

textos.forEach(function(elemento) {
  elemento.style.color = "#2A2624";
});

// Contenedor TRENDING
const contenedor = document.querySelector(".trending")

const joggers1 = document.querySelectorAll("h4")
joggers1[0].innerText = "JOGGERS"
const joggers2 = document.querySelectorAll("p")
joggers2[0].innerText = "Un conjunto cómodo y transpirable que mantiene tu enfoque donde más lo necesitas."

const seamless1 = document.querySelectorAll("h4")
seamless1[1].innerText = "SEAMLESS"
const seamless2 = document.querySelectorAll("p")
seamless2[1].innerText = "Todos los aman, y tú también lo harás."

const sudaderas1 = document.querySelectorAll("h4")
sudaderas1[2].innerText = "SUDADESAS"
const sudaderas2 = document.querySelectorAll("p")
sudaderas2[2].innerText = "La prenda de transición definitiva que nunca falla."

const tops1 = document.querySelectorAll("h4")
tops1[3].innerText = "TOPS"
const tops2 = document.querySelectorAll("p")
tops2[3].innerText = "Elige un sostén deportivo que se mueva contigo."