// ===== CARRITO =====
const carrito = document.querySelector('.carrito-btn');

if (carrito) {
  carrito.addEventListener('click', () => {
    alert('Producto agregado al carrito 🛒');
  });
}


// ===== BUSCADOR =====
const search = document.querySelector('.search');

if (search) {
  search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      
      // Validación
      if (search.value.trim() === '') {
        alert('Escribe algo para buscar');
      } else {
        alert('Buscando: ' + search.value);
      }

    }
  });
}


// ===== LOGO INTERACCIÓN =====
const logo = document.querySelector('.logo');

if (logo) {
  logo.addEventListener('click', () => {
    alert('Bienvenido a Punto Cero Collection ✨');
  });
}