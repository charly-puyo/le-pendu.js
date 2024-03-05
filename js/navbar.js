const menu = [
    { Text: "Inicio", URL: "./index.html", class: "header__nav--a" },
    { Text: "Productos", URL: "./pages/productos.html", class: "header__nav--a" },
    { Text: "Sobre Nosotros", URL: "./pages/sobre-nosotros.html", class: "header__nav--a" },
    { Text: "Contacto", URL: "./pages/contacto.html", class: "header__nav--a" },
];

const navBar = document.getElementById("navBar");
const currentLocation = window.location.pathname;

menu.forEach(link => {
    const ancla = document.createElement('a');
    ancla.textContent = link.Text;

    // Construir URL con doble punto solo si estamos en una subpágina
    ancla.href = currentLocation.includes('/pages/') ? link.URL.replace('./', '../') : link.URL;
    
    ancla.classList.add(link.class);
    navBar.appendChild(ancla);
});


document.addEventListener('DOMContentLoaded', () => {
    // Llama a esta función para inicializar el carrito si hay productos
    actualizarCarrito();
});