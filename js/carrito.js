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
            <img src="../assets/trash.svg" class="header__nav__carrito--trash" type="button" onclick="eliminarDelCarrito('${producto.id}')" alt="eliminar del carrito">           
            <h5 class="header__nav__carrito--h5">(Cod 6318)</h5>
            <input class="header__nav__carrito--input" type="number" name="tentacles" min="1" max="100" data-id="${producto.id}" value="${productoEnCarrito.cantidad}"/>
            <h6 class="header__nav__carrito--h6">$${producto.precio}</h6>
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
