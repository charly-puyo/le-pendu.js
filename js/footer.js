// Obtener el elemento del footer
const footer = document.querySelector('.footer__grid');

// Crear div para horarios de atención
const divHorarios = document.createElement("div");
divHorarios.classList.add("footer__div", "horariosAtencion");

const h4Horarios = document.createElement("h4");
h4Horarios.textContent = "Horarios de atención";

const pLunesViernes = document.createElement("p");
pLunesViernes.textContent = "Lunes a Viernes";

const pHorario = document.createElement("p");
pHorario.textContent = "De 10hs a 20hs";

divHorarios.appendChild(h4Horarios);
divHorarios.appendChild(document.createElement("br"));
divHorarios.appendChild(pLunesViernes);
divHorarios.appendChild(pHorario);

// Obtener la ruta base para las imágenes
let rutaBaseImagenes = "../assets/";

// Obtener la URL base de la página actual
const urlBase = document.documentElement.baseURI;

// Si se lee desde index.html, cambiar la ruta base
if (urlBase.endsWith("index.html")) {
    rutaBaseImagenes = "./assets/";
}

// Crear div para seguir en redes sociales
const divRedes = document.createElement("div");
divRedes.classList.add("footer__div", "seguinosRedes");

const h4Redes = document.createElement("h4");
h4Redes.textContent = "Seguinos en:";

const aFacebook = document.createElement("a");
aFacebook.href = rutaBaseImagenes + "facebook.svg";
aFacebook.href = "https://www.facebook.com/";
aFacebook.target = "_blank";

const imgFacebook = document.createElement("img");
imgFacebook.classList.add("footer__redes");
imgFacebook.src = rutaBaseImagenes + "facebook.svg";
imgFacebook.alt = "facebook";

aFacebook.appendChild(imgFacebook);

const aInstagram = document.createElement("a");
aInstagram.href = rutaBaseImagenes + "instagram.svg";
aInstagram.href = "https://www.instagram.com/";
aInstagram.target = "_blank";

const imgInstagram = document.createElement("img");
imgInstagram.classList.add("footer__redes");
imgInstagram.src = rutaBaseImagenes + "instagram.svg";
imgInstagram.alt = "instagram";

aInstagram.appendChild(imgInstagram);

const aTwitter = document.createElement("a");
aTwitter.href = rutaBaseImagenes + "twitter.svg";
aTwitter.target = "_blank";

const imgTwitter = document.createElement("img");
imgTwitter.classList.add("footer__redes");
imgTwitter.src = rutaBaseImagenes + "twitter.svg";
aTwitter.href = "https://twitter.com/?lang=es";
imgTwitter.alt = "twitter";


aTwitter.appendChild(imgTwitter);

divRedes.appendChild(h4Redes);
divRedes.appendChild(document.createElement("br"));
divRedes.appendChild(aFacebook);
divRedes.appendChild(aInstagram);
divRedes.appendChild(aTwitter);

// Agregar div a la página
document.body.appendChild(divRedes);


// Crear div para derechos de autor y reclamos
const divDerechosAutor = document.createElement("div");
divDerechosAutor.classList.add("footer__div", "DerechosLePendu");

const pDerechosAutor = document.createElement("p");
pDerechosAutor.textContent = "Copyright LE●PENDU- 2023. Todos los derechos reservados. Defensa de las y los consumidores. Para reclamos ";

const aReclamos = document.createElement("a");
aReclamos.classList.add("footer__link");
aReclamos.href = "https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario";
aReclamos.target = "_blank";
aReclamos.textContent = "ingrese aquí.";

pDerechosAutor.appendChild(aReclamos);
divDerechosAutor.appendChild(pDerechosAutor);

// Agregar elementos al footer
footer.appendChild(divHorarios);
footer.appendChild(divRedes);
footer.appendChild(divDerechosAutor);
