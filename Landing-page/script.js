// Acceder al body y cambiar el color de fondo
document.body.style.backgroundColor = "#F0E9DD";

// Color de letras TRENDING
let textos = document.querySelectorAll(".titulo");

textos.forEach(function (elemento) {
    elemento.style.color = "#2A2624";
});

// Contenedor TRENDING
const contenedor = document.querySelector(".trending");

const joggers1 = document.querySelectorAll("h4");
joggers1[0].innerText = "JOGGERS";
const joggers2 = document.querySelectorAll("p");
joggers2[0].innerText =
    "Un conjunto cómodo y transpirable que mantiene tu enfoque donde más lo necesitas.";

const seamless1 = document.querySelectorAll("h4");
seamless1[1].innerText = "SEAMLESS";
const seamless2 = document.querySelectorAll("p");
seamless2[1].innerText = "Todos los aman, y tú también lo harás.";

const sudaderas1 = document.querySelectorAll("h4");
sudaderas1[2].innerText = "PLAYERAS";
const sudaderas2 = document.querySelectorAll("p");
sudaderas2[2].innerText = "La prenda de transición definitiva que nunca falla.";

const tops1 = document.querySelectorAll("h4");
tops1[3].innerText = "TOPS";
const tops2 = document.querySelectorAll("p");
tops2[3].innerText = "Elige un sostén deportivo que se mueva contigo.";
function addToCart(element) {
    let carro;
    if (!localStorage.getItem("cart")) {
        carro = [];
    } else {
        carro = JSON.parse(localStorage.getItem("cart"));
    }

    carro.push({
        item: "item",
        cuantity: 0,
        img: "img",
        value: 0,
    });

    document.getElementById("cart-cuantity").innerText = carro.length;

    localStorage.setItem("cart", JSON.stringify(carro));
}

function deleteFromCart(index) {
    console.log("borrarrrr", index);
    let carro;
    if (!localStorage.getItem("cart")) {
        carro = [];
    } else {
        carro = JSON.parse(localStorage.getItem("cart"));
    }
    carro.splice(index, 1);

    console.log(carro);
    document.getElementById("cart-cuantity").innerText = carro.length;

    localStorage.setItem("cart", JSON.stringify(carro));
}

const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]',
);
const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl),
);

const btn = document.getElementById("carro");

const popover = new bootstrap.Popover(btn, {
    trigger: "click",
    customClass: "popover-ancho",
    html: true,
    title: "Carro de compra",
    content: generateCarrito,
});

function generateCarrito() {
    let carro = [];
    if (localStorage.getItem("cart")) {
        carro = JSON.parse(localStorage.getItem("cart"));
    }

    let res = document.createElement("div");

    if (carro.length === 0) {
        const h1 = document.createElement("h1");
        h1.innerText = "No hay elementos en el carrito";
        res.append(h1);
    } else {
        const container = document.createElement("div");
        container.style.flexDirection = "column";
        container.style.width = "100%";
        container.className = "container ";

        carro.forEach((element, index) => {
            container.appendChild(
                createCarritoElement(
                    element.item,
                    element.cuantity,
                    element.img,
                    element.value,
                    index,
                ),
            );
        });

        res.appendChild(container);

        const terminarDiv = document.createElement("div");
        terminarDiv.className = "d-grid gap-2 col-6 mx-auto";

        const terminar = document.createElement("button");
        terminar.className = "btn btn-primary";
        terminar.innerText = "Terminar compra";

        terminarDiv.append(terminar);

        res.append(terminarDiv);
    }

    return res;
}

function createCarritoElement(item, cuantity, img, value, index) {
    const div = document.createElement("div");
    div.className = "row";
    div.style.width = "100%";

    const imgDiv = document.createElement("div");
    imgDiv.className = "col-3";
    const imgEle = document.createElement("img");
    imgEle.src = img;
    imgDiv.append(imgEle);

    const titleDiv = document.createElement("div");
    titleDiv.className = "col-6";
    const pTitle = document.createElement("p");
    pTitle.className = "fs-4 lh-1";
    pTitle.innerText = item;

    titleDiv.append(pTitle);

    const priceDiv = document.createElement("div");
    priceDiv.className = "col-3  d-flex flex-column";
    const pPrice = document.createElement("p");
    pPrice.className = "fs-6  lh-1 fw-light";
    pPrice.innerText = value * cuantity;

    const boton = document.createElement("a");
    boton.addEventListener("click", () => deleteFromCart(index));
    boton.innerText = `Borrar`;
    boton.setAttribute("data-index", index);
    boton.className = "btn btn-light btn-borrar";

    priceDiv.appendChild(boton);
    priceDiv.appendChild(pPrice);

    div.append(imgDiv);
    div.append(titleDiv);
    div.append(priceDiv);

    return div;
}

let cart;
if (!localStorage.getItem("cart")) {
    cart = [];
} else {
    cart = JSON.parse(localStorage.getItem("cart"));
}
document.getElementById("cart-cuantity").innerText = cart.length;

// ===== CARRITO =====
// ===== BUSCADOR =====
const search = document.querySelector(".search");

if (search) {
    search.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            // Validación
            if (search.value.trim() === "") {
                alert("Escribe algo para buscar");
            } else {
                alert("Buscando: " + search.value);
            }
        }
    });
}

// ===== LOGO INTERACCIÓN =====
const logo = document.querySelector(".logo");

if (logo) {
    logo.addEventListener("click", () => {
        alert("Bienvenido a Punto Cero Collection ✨");
    });
}
