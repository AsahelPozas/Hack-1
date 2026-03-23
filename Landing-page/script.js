const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]',
);
const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl),
);

const popover = new bootstrap.Popover(document.getElementById("carro"), {
    trigger: "click",
    customClass: 'popover-ancho',
    html: true, // permite HTML
    title: "Carro de compra",
    content: generateCarrito,
});

function generateCarrito() {

    let carro = [];
    if (localStorage.getItem("cart")) {
        console.log(localStorage.getItem("cart"));
        carro = JSON.parse(localStorage.getItem("cart"));
    }

    let res = document.createElement("div");

    if (carro.length === 0) {
        const h1 = document.createElement("h1");
        h1.innerText = "No hay elementos en el carrito";
        res.append(h1);
    } else {
        const container = document.createElement("div");
        container.className = "container";

        carro.forEach((element) => {
            console.log(element);
            container.append(
                createCarritoElement(
                    element.item,
                    element.cuantity,
                    element.img,
                    element.value,
                ),
            );
        });

        res.append(container);
    }

    console.log(res.outerHTML);
    return res.outerHTML;
}

function createCarritoElement(item, cuantity, img, value) {
    const div = document.createElement("div");
    div.className = "row";

    div.innerHTML = `
    
        <div class="col-3">
            <img src="${img}">
        </div>
        <div class="col-9">
            <p class="fs-4 lh-1">
                ${item}
            </p>
            <p class="fs-6 lh-1 fw-light">x${cuantity} <span>${value * cuantity}</span></p>
        </div>
    `;


    return div;
}


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
    console.log("sssssssssssssssssss", carro);
    localStorage.setItem("cart", JSON.stringify(carro));
}





document.getElementById("cart-cuantity").innerText = carro.length;
