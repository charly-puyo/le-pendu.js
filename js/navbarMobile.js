// Crear el elemento nav
const nav = document.createElement('nav');
nav.classList.add('footer__nav__inferior');

// Crear el primer botón con enlace
const button1 = document.createElement('button');
button1.classList.add('footer__nav__inferior--button', 'btn', 'btn-primary');
button1.type = 'button';
const a1 = document.createElement('a');
a1.classList.add('footer__nav__inferior--a');
a1.href = '../pages/index.html';
const img1 = document.createElement('img');
img1.src = '../assets/home.svg';
img1.alt = 'home';
a1.appendChild(img1);
button1.appendChild(a1);
nav.appendChild(button1);

// Crear el segundo botón con offcanvas
const button2 = document.createElement('button');
button2.classList.add('footer__nav__inferior--button', 'btn', 'btn-primary');
button2.type = 'button';
button2.dataset.bsToggle = 'offcanvas';
button2.dataset.bsTarget = '#offcanvasWithBothOptions';
button2.ariaControls = 'offcanvasWithBothOptions';
const img2 = document.createElement('img');
img2.src = '../assets/menu.svg';
img2.alt = 'menu';
button2.appendChild(img2);
nav.appendChild(button2);

// Crear el offcanvas
const offcanvas1 = document.createElement('div');
offcanvas1.classList.add('offcanvas', 'offcanvas-start');
offcanvas1.dataset.bsScroll = 'true';
offcanvas1.tabIndex = '-1';
offcanvas1.id = 'offcanvasWithBothOptions';
offcanvas1.ariaLabelledby = 'offcanvasWithBothOptionsLabel';

// Crear el encabezado del offcanvas
const offcanvasHeader1 = document.createElement('div');
offcanvasHeader1.classList.add('offcanvas-header');
const btnClose1 = document.createElement('button');
btnClose1.type = 'button';
btnClose1.classList.add('btn-close', 'data-bs-dismiss', 'offcanvas', 'aria-label', 'Close');
const imgClose1 = document.createElement('img');
imgClose1.src = '../assets/equis-atras.svg';
imgClose1.alt = 'atras';
btnClose1.appendChild(imgClose1);
offcanvasHeader1.appendChild(btnClose1);
offcanvas1.appendChild(offcanvasHeader1);

// Agregar una línea en blanco
const br1 = document.createElement('br');
offcanvas1.appendChild(br1);

// Crear el cuerpo del offcanvas
const offcanvasBody1 = document.createElement('div');
offcanvasBody1.classList.add('offcanvas-body');

// Crear el menú
const footerMenu1 = document.createElement('nav');
footerMenu1.classList.add('footer__menu');
const ul1 = document.createElement('ul');
ul1.classList.add('footer__menu--ul');
const li1 = document.createElement('li');
li1.classList.add('footer__menu--li');
const a2 = document.createElement('a');
a2.classList.add('footer__menu--a');
a2.href = '../pages/productos.html';
a2.textContent = 'Productos';
li1.appendChild(a2);
ul1.appendChild(li1);
footerMenu1.appendChild(ul1);
offcanvasBody1.appendChild(footerMenu1);
offcanvas1.appendChild(offcanvasBody1);

// Agregar el offcanvas al nav
nav.appendChild(offcanvas1);

// Crear el tercer botón con offcanvas
const button3 = document.createElement('button');
button3.classList.add('footer__nav__inferior--button', 'btn', 'btn-primary');
button3.type = 'button';
button3.dataset.bsToggle = 'offcanvas';
button3.dataset.bsTarget = '#offcanvasScrolling';
button3.ariaControls = 'offcanvasScrolling';
const img3 = document.createElement('img');
img3.src = '../assets/lupa.svg';
img3.alt = 'buscar';
button3.appendChild(img3);
nav.appendChild(button3);

// Crear el segundo offcanvas
const offcanvas2 = document.createElement('div');
offcanvas2.classList.add('offcanvas', 'offcanvas-start');
offcanvas2.dataset.bsScroll = 'true';
offcanvas2.tabIndex = '-1';
offcanvas2.id = 'offcanvasScrolling';
offcanvas2.ariaLabelledby = 'offcanvasScrollingLabel';

// Crear el encabezado del offcanvas
const offcanvasHeader2 = document.createElement('div');
offcanvasHeader2.classList.add('offcanvas-header');
const btnClose2 = document.createElement('button');
btnClose2.type = 'button';
btnClose2.classList.add('btn-close', 'data-bs-dismiss', 'offcanvas', 'aria-label', 'Close');
const imgClose2 = document.createElement('img');
imgClose2.src = '../assets/equis-atras.svg';
imgClose2.alt = 'atras';
btnClose2.appendChild(imgClose2);
offcanvasHeader2.appendChild(btnClose2);
offcanvas2.appendChild(offcanvasHeader2);

// Agregar una línea en blanco
const br2 = document.createElement('br');
offcanvas2.appendChild(br2);

// Crear el cuerpo del offcanvas
const offcanvasBody2 = document.createElement('div');
offcanvasBody2.classList.add('offcanvas-body');

// Crear el input de búsqueda
const input = document.createElement('input');
input.classList.add('footer__nav__inferior--input');
input.type = 'text';
input.name = '¿Qué estás buscando?';
input.placeholder = '¿Qué estás buscando?';
offcanvasBody2.appendChild(input);
offcanvas2.appendChild(offcanvasBody2);

// Agregar el offcanvas al nav
nav.appendChild(offcanvas2);

// Crear el cuarto botón
const button4 = document.createElement('button');
button4.classList.add('footer__nav__inferior--button', 'btn', 'btn-primary');
button4.type = 'button';
const a3 = document.createElement('a');
a3.classList.add('footer__nav__inferior--a');
a3.href = '../pages/mi-cuenta.html';
const img4 = document.createElement('img');
img4.src = '../assets/mi-cuenta.svg';
img4.alt = 'mi cuenta';
a3.appendChild(img4);
button4.appendChild(a3);
nav.appendChild(button4);

// Agregar el nav al body
document.body.appendChild(nav);