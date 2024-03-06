class Producto {
    constructor(id, imagenUrl, categoria, nombre, precio, unidades) {
        this.id = id;
        this.imagen = imagenUrl;
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

function agregarAlCarrito(id, categoria, nombre, precio) {
    const productoSeleccionado = todosLosProductos.find(producto => producto.id === id);

    if (productoSeleccionado && productoSeleccionado.unidades > 0) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const productoEnCarrito = carrito.find(producto => producto.id === id);

        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;
            actualizarInputCarrito(id, productoEnCarrito.cantidad);
        } else {
            const productoEnCarrito = {
                id,
                categoria,
                nombre,
                precio,
                cantidad: 1
            };
            carrito.push(productoEnCarrito);
            actualizarInputCarrito(id, 1);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        productoSeleccionado.unidades--;

        actualizarCarrito();
        actualizarCards();
    } else {
        Swal.fire("Sin Stock");
    }
}

function actualizarInputCarrito(id, cantidad) {
    const inputProducto = document.querySelector(`.header__nav__carrito--input[data-id="${id}"]`);

    if (inputProducto) {
        inputProducto.value = cantidad;

        if (cantidad === 0) {
            eliminarDelCarrito(id);
        }
    }
}

function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoEnCarrito = carrito.find(producto => producto.id === id);

    if (productoEnCarrito) {
        const productoEnLista = todosLosProductos.find(producto => producto.id === id);
        if (productoEnLista) {
            productoEnLista.unidades += productoEnCarrito.cantidad;
        }

        carrito = carrito.filter(producto => producto.id !== id);
        localStorage.setItem('carrito', JSON.stringify(carrito));

        actualizarCarrito();
        actualizarCards();
    }
}

function actualizarCards() {
    agregarCards(todosLosProductos);
}

function actualizarCarrito() {
    const contenedorCarrito = document.querySelector('.header__nav__carrito-productos');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    contenedorCarrito.innerHTML = '';

    carrito.forEach(productoEnCarrito => {
        const producto = todosLosProductos.find(producto => producto.id === productoEnCarrito.id);

        const productoDiv = document.createElement('div');
        productoDiv.classList.add('header__nav__carrito--productos');
        productoDiv.innerHTML = `
            <div class="header__nav__carrito-img"><img class="header__nav__carrito--img" src="${producto.imagen}"></div>
            <h4 class="header__nav__carrito--h4">${producto.categoria} ${producto.nombre}</h4>
            <button class="header__nav__carrito--trash" onclick="eliminarDelCarrito('${producto.id}')"><img src="../assets/trash.svg" alt="eliminar del carrito"></button>
            <h5 class="header__nav__carrito--h5">(Cod 6318)</h5>
            <input class="header__nav__carrito--input" type="number" name="tentacles" min="1" max="100" data-id="${producto.id}" value="${productoEnCarrito.cantidad}"/>
            <h6 class="header__nav__carrito--h6">precio: $ ${producto.precio}</h6>
        `;
        contenedorCarrito.appendChild(productoDiv);
    });

    // Almacena el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Llama a la función para actualizar el total de productos
    actualizarTotalProductos();
}

// Llama a esta función para inicializar el carrito si hay productos
actualizarCarrito();

// Funcion para calcular el total
function calculateTotalPrice(carrito) {
    let totalPrice = 0;
    carrito.forEach(productoEnCarrito => {
        const producto = todosLosProductos.find(producto => producto.id === productoEnCarrito.id);
        totalPrice += producto.precio * productoEnCarrito.cantidad;
    });
    return totalPrice;
}

// Actualiza TotalPriceProductos
function actualizarTotalProductos() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        const totalElement = document.querySelector('.header__nav__carrito-h3');
        totalElement.innerHTML = '<p>El carrito está vacío</p>';
        return;
    }

    const totalPrice = calculateTotalPrice(carrito);

    // Actualiza el precio toal en HTML
    const totalElement = document.querySelector('.header__nav__carrito-h3');
    totalElement.innerHTML = `
        <h3>Total:</h3><h3>$${totalPrice.toFixed(2)}</h3>
        <button type="button" class="header__nav__carrito--button2">INICIAR COMPRA</button>
    `;
}


//  Llama a la función TotalPriceProductos para mostrar el precio total
actualizarTotalProductos();
