class Producto {
    constructor(id, imagenUrl, categoria, nombre, precio, unidades) {
        this.id = id;
        this.imagen = obtenerRutaImagen(imagenUrl);
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.unidades = unidades || 0;
    }
}

//Array de productos
const productosHombres = [
    new Producto("1", "../assets/1.jpg", "Zapatillas", "Pensford DC", 55000, 10),
    new Producto("2", "../assets/2.jpg", "Zapatillas", "Manteca DC", 42800),
    new Producto("3", "../assets/3.jpg", "Zapatillas", "Manteca DC", 45700, 5),
    new Producto("4", "../assets/4.jpg", "Zapatillas", "Pensford DC", 60000, 4),
    new Producto("5", "../assets/5.jpg", "Zapatillas", "High-Top", 59500),
    new Producto("6", "../assets/6.jpg", "Zapatillas", "Stag Rs Dc", 39800),
    new Producto("7", "../assets/7.jpg", "Zapatillas", "Pure DC", 45000, 3),
    new Producto("8", "../assets/8.jpg", "Zapatillas", "Plaza DC", 38000),
];

const productosMujeres = [
    new Producto("9", "../assets/9.jpg", "Zapatillas", "Graffik DC", 42000),
    new Producto("10", "../assets/10.jpg", "Zapatillas", "Graffik DC", 38500, 3),
    new Producto("11", "../assets/11.jpg", "Zapatillas", "Crisis DC", 46600),
    new Producto("12", "../assets/12.jpg", "Zapatillas", "Midway DC", 45600, 2),
    new Producto("13", "../assets/13.jpg", "Zapatillas", "Midway DC", 45600, 1),
    new Producto("14", "../assets/14.jpg", "Zapatillas", "Pensford DC", 55000, 10),
    new Producto("15", "../assets/15.jpg", "Zapatillas", "Pensford DC", 55000),
    new Producto("16", "../assets/16.jpg", "Zapatillas", "Pensford DC", 55000, 7),
];

const contenedorProductos = document.getElementById("productos");

function obtenerRutaImagen(imagenUrl) {
    // Obtener la URL base de la página actual
    const urlBase = document.documentElement.baseURI;

    // Si se lee desde index.html, cambiar la ruta base
    if (urlBase.endsWith("index.html")) {
        return `./assets/${imagenUrl}`;
    }

    // De lo contrario, devolver la ruta original
    return `../assets/${imagenUrl}`;
}

function agregarCards(productos) {
    contenedorProductos.innerHTML = '';

    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("main_productos--contenedor");
        card.innerHTML = `
            <img class="main__productos--img" src="${producto.imagen}" alt="foto del producto">
            <p class="main__productos--p">${producto.categoria} ${producto.nombre}</p>
            <h5 class="main__productos--h5">precio: $ ${producto.precio}</h5>
            <p class="main__productos--unidades">En stock: ${producto.unidades}</p>
            <button type="button" class="main__productos--button" onclick="agregarAlCarrito('${producto.id}', '${producto.categoria}', '${producto.nombre}', ${producto.precio})">COMPRAR</button>
        `;
        contenedorProductos.appendChild(card);
    });
}

const todosLosProductos = productosHombres.concat(productosMujeres);
agregarCards(todosLosProductos);

document.addEventListener('productosAgregados', () => {
    const event = new Event('productosAgregados');
    document.dispatchEvent(event);
});