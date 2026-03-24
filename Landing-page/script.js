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
joggers2[2].innerText =
    "Un conjunto cómodo y transpirable que mantiene tu enfoque donde más lo necesitas.";

const seamless1 = document.querySelectorAll("h4");
seamless1[1].innerText = "SEAMLESS";
const seamless2 = document.querySelectorAll("p");
seamless2[3].innerText = "Todos los aman, y tú también lo harás.";

const sudaderas1 = document.querySelectorAll("h4");
sudaderas1[2].innerText = "PLAYERAS";
const sudaderas2 = document.querySelectorAll("p");
sudaderas2[4].innerText = "La prenda de transición definitiva que nunca falla.";

const tops1 = document.querySelectorAll("h4");
tops1[3].innerText = "TOPS";
const tops2 = document.querySelectorAll("p");
tops2[5].innerText = "Elige un sostén deportivo que se mueva contigo.";

function addToCart(element) {
    let carro;
    if (!localStorage.getItem("cart")) {
        carro = [];
    } else {
        carro = JSON.parse(localStorage.getItem("cart"));
    }

    carro.push({
        item: element.item,
        cuantity: 1,
        img: element.img,
        value: element.value,
    });

    document.getElementById("cart-cuantity").innerText = carro.length;

    localStorage.setItem("cart", JSON.stringify(carro));


    document.getElementById("popover-div-body").replaceWith(generateCarrito());
}

function deleteFromCart(index) {
    let carro;
    if (!localStorage.getItem("cart")) {
        carro = [];
    } else {
        carro = JSON.parse(localStorage.getItem("cart"));
    }
    
    carro.splice(index, 1);

    document.getElementById("cart-cuantity").innerText = carro.length;
    localStorage.setItem("cart", JSON.stringify(carro));


    document.getElementById("popover-div-body").replaceWith(generateCarrito());


    
}

function addCuantity(index,value){
    let carro;
    if (!localStorage.getItem("cart")) {
        carro = [];
    } else {
        carro = JSON.parse(localStorage.getItem("cart"));
    }
    carro[index].cuantity += value;


    if(carro[index].cuantity === 0){
        
        carro.splice(index, 1);

        document.getElementById("cart-cuantity").innerText = carro.length;
        localStorage.setItem("cart", JSON.stringify(carro));
    document.getElementById("popover-div-body").replaceWith(generateCarrito());

    }else{
        localStorage.setItem("cart", JSON.stringify(carro));
    document.getElementById("popover-div-body").replaceWith(generateCarrito());

    }
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
    res.id = "popover-div-body";

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
        terminar.className = "btn-atletico btn-principal";
        terminar.innerText = "Terminar compra";

        terminarDiv.append(terminar);

        res.append(terminarDiv);
    }

    return res;
}

function createCarritoElement(item, cuantity, img, value, index) {
    const div = document.createElement("div");
    div.id = `item-${index}`
    div.className = "row";
    div.style.width = "100%";

    const imgDiv = document.createElement("div");
    imgDiv.className = "col-3 cart-img-div";
    const imgEle = document.createElement("img");
    imgEle.className ="cart-img"
    imgEle.src = img;
    imgDiv.append(imgEle);

    const titleDiv = document.createElement("div");
    titleDiv.className = "col-7";
    const pTitle = document.createElement("p");
    pTitle.className = "fs-4 lh-1";
    pTitle.innerText = item;

    const pCuantity = document.createElement("p");
    const botonMore = document.createElement("button");
    botonMore.innerHTML = `+`
    botonMore.className = "btn btn-light"
    botonMore.addEventListener("click", () => addCuantity(index,1))
    const botonLess = document.createElement("button");
    botonLess.innerHTML = `-`
    botonLess.className = "btn btn-light"
    botonLess.addEventListener("click", () => addCuantity(index,-1))
    const spanCuantity = document.createElement("span");
    spanCuantity.innerText = cuantity;
    spanCuantity.className = "mx-2"

    pCuantity.append(botonLess,spanCuantity,botonMore)
    titleDiv.append(pTitle,pCuantity);

    const priceDiv = document.createElement("div");
    priceDiv.className = "col-2  d-flex flex-column";
    const pPrice = document.createElement("p");
    pPrice.className = "fs-6  lh-1 fw-light";
    pPrice.innerText = `Total: $${value * cuantity}`;

    const boton = document.createElement("button");
    boton.addEventListener("click", () => deleteFromCart(index));
    boton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg>
    `;
    boton.setAttribute("data-index", index);
    boton.className = "btn btn-light btn-borrar";

    priceDiv.appendChild(pPrice);
    priceDiv.appendChild(boton);

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
