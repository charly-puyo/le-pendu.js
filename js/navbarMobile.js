// Función para crear elementos de tipo 'a'
function createLink(href, text, imgSrc, imgAlt) {
    const a = document.createElement('a');
    a.classList.add('footer__nav__inferior--a');
    a.href = href;

    if (text) {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = imgAlt;
        a.textContent = text;
        a.appendChild(img);
    }

    return a;
}

// Función para crear botones con imágenes
function createButton(imgSrc, imgAlt, datasetTarget) {
    const button = document.createElement('button');
    button.classList.add('footer__nav__inferior--button', 'btn', 'btn-primary');
    button.type = 'button';

    if (datasetTarget) {
        button.dataset.bsToggle = 'offcanvas';
        button.dataset.bsTarget = datasetTarget;
        button.ariaControls = datasetTarget;
    }

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = imgAlt;
    button.appendChild(img);

    return button;
}

// Función para crear elementos 'br'
function createLineBreak() {
    return document.createElement('br');
}

// Función para crear elementos 'input'
function createSearchInput() {
    const input = document.createElement('input');
    input.classList.add('footer__nav__inferior--input');
    input.type = 'text';
    input.name = '¿Qué estás buscando?';
    input.placeholder = '¿Qué estás buscando?';

    return input;
}

// Crear el elemento 'nav'
const nav = document.createElement('nav');
nav.classList.add('footer__nav__inferior');

// Definir la lista de elementos para el navbar
const navbarElements = [
    { type: 'button', text: 'Productos', imgSrc: '../assets/home.svg', imgAlt: 'home', href: '../pages/index.html' },
    { type: 'button', imgSrc: '../assets/menu.svg', imgAlt: 'menu', datasetTarget: '#offcanvasWithBothOptions' },
    { type: 'offcanvas', id: 'offcanvasWithBothOptions', imgSrc: '../assets/equis-atras.svg', class:"btn-close", imgAlt: 'atras', bodyContent: createLink('../pages/productos.html', 'Productos', '', '') },
    { type: 'button', imgSrc: '../assets/lupa.svg', imgAlt: 'buscar', datasetTarget: '#offcanvasScrolling' },
    { type: 'offcanvas', id: 'offcanvasScrolling', imgSrc: '../assets/equis-atras.svg', imgAlt: 'atras', bodyContent: createSearchInput() },
    { type: 'button', text: 'Mi Cuenta', imgSrc: '../assets/mi-cuenta.svg', imgAlt: 'mi cuenta', href: '../pages/mi-cuenta.html' }
];

// Crear cada elemento del navbar
navbarElements.forEach(element => {
    switch (element.type) {
        case 'button':
            nav.appendChild(createButton(element.imgSrc, element.imgAlt, element.datasetTarget));
            break;
        case 'offcanvas':
            const offcanvas = document.createElement('div');
            offcanvas.classList.add('offcanvas', 'offcanvas-start');
            offcanvas.dataset.bsScroll = 'true';
            offcanvas.tabIndex = '-1';
            offcanvas.id = element.id;
            offcanvas.ariaLabelledby = `${element.id}Label`;

            const offcanvasHeader = document.createElement('div');
            offcanvasHeader.classList.add('offcanvas-header');
            const btnClose = document.createElement('button');
            btnClose.type = 'button';
            btnClose.classList.add('btn-close', 'data-bs-dismiss', 'offcanvas', 'aria-label', 'Close');
            const imgClose = document.createElement('img');
            imgClose.src = element.imgSrc;
            imgClose.alt = element.imgAlt;
            btnClose.appendChild(imgClose);
            offcanvasHeader.appendChild(btnClose);
            offcanvas.appendChild(offcanvasHeader);

            offcanvas.appendChild(createLineBreak());

            const offcanvasBody = document.createElement('div');
            offcanvasBody.classList.add('offcanvas-body');

            if (element.bodyContent) {
                offcanvasBody.appendChild(element.bodyContent);
            }

            offcanvas.appendChild(offcanvasBody);

            nav.appendChild(offcanvas);
            break;
    }
});

// ... (tu código existente)

// Agregar el nuevo botón del carrito
const carritoButton = document.createElement('button');
carritoButton.classList.add('footer__nav__inferior--button', 'btn', 'btn-primary');
carritoButton.type = 'button';
carritoButton.dataset.bsToggle = 'offcanvas';
carritoButton.dataset.bsTarget = '#offcanvasExample';
carritoButton.ariaControls = 'offcanvasExample';

const imgCarrito = document.createElement('img');
imgCarrito.src = '../assets/mi-carrito.svg';
imgCarrito.alt = 'mi carrito';

carritoButton.appendChild(imgCarrito);
nav.appendChild(carritoButton);

// Agregar el nuevo offcanvas del carrito
const offcanvasCarrito = document.createElement('div');
offcanvasCarrito.classList.add('offcanvas', 'offcanvas--carrito', 'offcanvas-start');
offcanvasCarrito.tabIndex = '-1';
offcanvasCarrito.id = 'offcanvasExample';
offcanvasCarrito.ariaLabelledby = 'offcanvasExampleLabel';

const offcanvasHeaderCarrito = document.createElement('div');
offcanvasHeaderCarrito.classList.add('offcanvas-header');

const btnCloseCarrito = document.createElement('button');
btnCloseCarrito.type = 'button';
btnCloseCarrito.classList.add('btn-close', 'data-bs-dismiss', 'offcanvas', 'aria-label', 'Close');

const imgCloseCarrito = document.createElement('img');
imgCloseCarrito.src = '../assets/equis-atras.svg';
imgCloseCarrito.alt = 'atras';

btnCloseCarrito.appendChild(imgCloseCarrito);
offcanvasHeaderCarrito.appendChild(btnCloseCarrito);
offcanvasCarrito.appendChild(offcanvasHeaderCarrito);

const offcanvasBodyCarrito = document.createElement('div');
offcanvasBodyCarrito.classList.add('offcanvas-body');

const carritoProductos = document.createElement('div');
carritoProductos.classList.add('footer__nav__carrito--productos');

offcanvasBodyCarrito.appendChild(carritoProductos);
offcanvasCarrito.appendChild(offcanvasBodyCarrito);

document.body.appendChild(offcanvasCarrito);

// Agregar el nav al body
document.body.appendChild(nav);
