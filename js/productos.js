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
    new Producto("1", "../assets/1.jpg", "Zapatillas", "Pensford DC", 125000, 10),
    new Producto("2", "../assets/2.jpg", "Zapatillas", "Manteca DC", 142800),
    new Producto("3", "../assets/3.jpg", "Zapatillas", "Manteca DC", 145700, 5),
    new Producto("4", "../assets/4.jpg", "Zapatillas", "Pensford DC", 125000, 4),
    new Producto("5", "../assets/5.jpg", "Zapatillas", "High-Top", 130500),
    new Producto("6", "../assets/6.jpg", "Zapatillas", "Stag Rs Dc", 139800),
    new Producto("7", "../assets/7.jpg", "Zapatillas", "Pure DC", 145000, 3),
    new Producto("8", "../assets/8.jpg", "Zapatillas", "Plaza DC", 138000),
    new Producto("120", "../assets/120.jpg", "Remera", "Mc Trust Us", 29200, 1),
    new Producto("121", "../assets/121.jpg", "Remera", "Mc Out", 21350),
    new Producto("122", "../assets/122.jpg", "Remera", "Mc Clutch", 30152, 3),
    new Producto("123", "../assets/123.jpg", "Remera", "Mc Hustle", 18546),
    new Producto("124", "../assets/124.jpg", "Remera", "Mc Massive", 28960, 1),
    new Producto("125", "../assets/125.jpg", "Remera", "Mc Star", 24560, 5),
    new Producto("126", "../assets/126.jpg", "Remera", "Mc Digi", 18440),
    new Producto("127", "../assets/127.jpg", "Remera", "Mc Kickback", 27630, 4),
    new Producto("128", "../assets/128.jpg", "Remera", "Mc Slider", 19500),
    new Producto("129", "../assets/129.jpg", "Remera", "Mc Mumbo", 24100, 4),
    new Producto("140", "../assets/140.jpg", "Pantalon", "Skate Bor", 45000, 4),
    new Producto("141", "../assets/141.jpg", "Pantalon", "Work Black", 38950, 5),
    new Producto("142", "../assets/142.jpg", "Pantalon", "Worker Straight", 42125, 1),
    new Producto("143", "../assets/143.jpg", "Pantalon", "Jogging Rogers", 35785, 1),
    new Producto("144", "../assets/144.jpg", "Jean", "Wrk Slim Used", 42300),
    new Producto("145", "../assets/145.jpg", "Jean", "Wrk Baggy", 45225, 2),
    new Producto("146", "../assets/146.jpg", "Jean", "Wrk Straight Basic", 37500),
    new Producto("147", "../assets/147.jpg", "Jean", "WRK Basic Skinny", 36800, 3),
    new Producto("148", "../assets/148.jpg", "Jean", "Wrk Regular", 43900),
    new Producto("149", "../assets/149.jpg", "Jean", "Wrk Skate Basic", 48300, 6)
];

const productosMujeres = [
    new Producto("9", "../assets/9.jpg", "Zapatillas", "Graffik DC", 142000),
    new Producto("10", "../assets/10.jpg", "Zapatillas", "Graffik DC", 138500, 3),
    new Producto("11", "../assets/11.jpg", "Zapatillas", "Crisis DC", 146600),
    new Producto("12", "../assets/12.jpg", "Zapatillas", "Midway DC", 145600, 2),
    new Producto("13", "../assets/13.jpg", "Zapatillas", "Midway DC", 145600, 1),
    new Producto("14", "../assets/14.jpg", "Zapatillas", "Pensford DC", 155000, 10),
    new Producto("15", "../assets/15.jpg", "Zapatillas", "Pensford DC", 155000),
    new Producto("16", "../assets/16.jpg", "Zapatillas", "Pensford DC", 155000, 7),
    new Producto("130", "../assets/130.jpg", "Remera", "Musculosa DC Star", 29200, 1),
    new Producto("131", "../assets/131.jpg", "Remera", "ML Drip", 21350),
    new Producto("132", "../assets/132.jpg", "Remera", "Mc DC Shoes", 30152, 3),
    new Producto("133", "../assets/133.jpg", "Remera", "Mc The Weekend", 18546),
    new Producto("134", "../assets/134.jpg", "Remera", "Mc Good", 28960, 1),
    new Producto("135", "../assets/135.jpg", "Remera", "Mc Good Trip", 24560, 5),
    new Producto("136", "../assets/136.jpg", "Remera", "Ml DC Op", 18440),
    new Producto("137", "../assets/137.jpg", "Remera", "Mc Life Changes", 27630, 4),
    new Producto("138", "../assets/138.jpg", "Remera", "ML Always", 19500),
    new Producto("139", "../assets/139.jpg", "Remera", "ML Everyday", 24100)
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
