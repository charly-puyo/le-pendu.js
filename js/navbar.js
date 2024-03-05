const menu = [
    { Text: "Inicio", URL: "../pages/index.html", class: "header__nav--a" },
    { Text: "Productos", URL: "../pages/productos.html", class: "header__nav--a" },
    { Text: "Sobre Nosotros", URL: "../pages/sobre-nosotros.html", class: "header__nav--a" },
    { Text: "Contacto", URL: "../pages/contacto.html", class: "header__nav--a" },
];

const navBar = document.getElementById("navBar");

menu.forEach(link => {
    const ancla = document.createElement('a');
    ancla.textContent = link.Text;
    ancla.href = link.URL;
    ancla.classList.add(link.class);
    navBar.appendChild(ancla);
});

document.addEventListener('DOMContentLoaded', () => {
    // Llama a esta función para inicializar el carrito si hay productos
    actualizarCarrito();
});