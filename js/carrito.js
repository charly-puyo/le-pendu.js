function agregarAlCarrito(id, categoria, nombre, precio) {
    const productoSeleccionado = todosLosProductos.find(producto => producto.id === id);

    if (productoSeleccionado && productoSeleccionado.unidades > 0) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const productoEnCarrito = carrito.find(producto => producto.id === id);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Se añadio al carrito",
            showConfirmButton: false,
            timer: 1500
            });
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




// Agrega un evento de escritura al campo de búsqueda
document.addEventListener('DOMContentLoaded', () => {
    const buscadorInput = document.getElementById('buscadorInput');
    const opcionesBusqueda = document.getElementById('opcionesBusqueda'); // Agrega esta línea

    // Simulación de datos de opciones
    const opciones = ['Opción 1', 'Opción 2', 'Opción 3'];

    // Agregar evento de escucha al input
    buscadorInput.addEventListener('input', actualizarOpciones);

    // Función para actualizar las opciones de búsqueda
    function actualizarOpciones() {
        const valorBusqueda = buscadorInput.value.toLowerCase();

        // Filtrar opciones basadas en la entrada del usuario
        const opcionesFiltradas = opciones.filter(opcion => opcion.toLowerCase().includes(valorBusqueda));

        // Mostrar opciones en la lista
        mostrarOpciones(opcionesFiltradas);
    }

    function mostrarOpciones(opcionesMostradas) {
        // Limpiar lista
        opcionesBusqueda.innerHTML = '';
    
        if (opcionesMostradas.length > 0) {
            opcionesBusqueda.classList.add('mostrar-opciones');
            // Agregar cada opción a la lista
            opcionesMostradas.forEach(opcion => {
                const li = document.createElement('li');
                li.classList.add('header__buscador__opciones-busqueda-li');
                li.textContent = opcion;
                li.addEventListener('click', () => seleccionarOpcion(opcion));
                opcionesBusqueda.appendChild(li);
            });
        } else {
            opcionesBusqueda.classList.remove('mostrar-opciones');
        }
    }
    
    

    function seleccionarOpcion(opcionSeleccionada) {
        buscadorInput.value = opcionSeleccionada;

        // Limpiar la lista después de seleccionar una opción
        opcionesBusqueda.innerHTML = '';
    }

    // Función para filtrar productos basándose en la cadena de búsqueda
    function filtrarProductos() {
        const textoBusqueda = buscadorInput.value.toLowerCase();


        // Filtra los productos que coinciden con la cadena de búsqueda
        const productosFiltrados = todosLosProductos.filter(producto => {
            const nombreProducto = `${producto.categoria} ${producto.nombre}`.toLowerCase();
            return nombreProducto.includes(textoBusqueda);
        });

        // Actualiza las cards con los productos filtrados
        agregarCards(productosFiltrados);
    }

    // Agrega el evento de escucha al input del buscador
    buscadorInput.addEventListener('input', filtrarProductos);
});







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

    // Actualiza el precio total en HTML
    const totalElement = document.querySelector('.header__nav__carrito-h3');
    totalElement.innerHTML = `
                            <h3>Total:</h3><h3>$${totalPrice.toFixed(2)}</h3>
                            <button id="carrito--button2" type="button" class="header__nav__carrito--button2" onclick="redirigirIniciarCompra()">INICIAR COMPRA</button>
                            `
;
}

function redirigirIniciarCompra(){
    window.location.href = '../pages/iniciar-compra.html';
    
}

//  Llama a la función TotalPriceProductos para mostrar el precio total
actualizarTotalProductos();
