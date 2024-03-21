const url = "http://jsonplaceholder.typicode.com/users";

function normalizarTexto(texto) {
    if (!texto || typeof texto !== "string") {
        console.error("El texto es inválido.");
        return "";
    }
    return texto.trim().toLowerCase();
}

function iniciarSesion() {
    const nombreElemento = document.getElementById("exampleInputName");
    const emailElemento = document.getElementById("exampleInputEmail1");

    // Verificar si los campos están vacíos
    if (!nombreElemento.value || !emailElemento.value) {
        Swal.fire("Completa los campos para poder ingresar");
        return;
    }

    const nombre = normalizarTexto(nombreElemento.value);
    const email = normalizarTexto(emailElemento.value);

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const datos = JSON.parse(xhr.responseText);
                console.log("Datos obtenidos de la API:", datos);

                // Imprimir los datos ingresados para depuración
                console.log("Nombre ingresado:", nombre);
                console.log("Email ingresado:", email);

                const usuarioValido = datos.find(usuario => {
                    const nombreNormalizado = normalizarTexto(usuario.name);
                    const emailNormalizado = normalizarTexto(usuario.email);
                    console.log("Nombre normalizado en API:", nombreNormalizado);
                    console.log("Email normalizado en API:", emailNormalizado);
                    return nombreNormalizado === nombre && emailNormalizado === email;
                });
                if (usuarioValido) {
                    Swal.fire("Iniciaste sesión correctamente.").then(() => {
                        // Redireccionar
                        setTimeout(() => {
                            window.location.href = "../pages/productos.html";
                        }, 100);
                    });
                } else {
                    Swal.fire("Usuario inválido.");
                }
            } else {
                alert("Error al obtener los datos.");
            }
        }
    };

    xhr.open("GET", url);
    xhr.send();
}
