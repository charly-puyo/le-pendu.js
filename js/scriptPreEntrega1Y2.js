//Simulador de incio de sesion exitoso - CONDICIONAL                                          
let usuario = prompt("Ingrese su usuario o mail").toLowerCase();
const password = prompt("Ingrese su contraseña");

if (usuario === "admin" && password === "1234"){
    alert("Iniciaste sesion")
////////////////////////////////////////////////////////////////////////////////////////////////
            let respuesta = prompt("¿Desea añadir productos a su carrito? (SI/NO)").toLowerCase();

            if (respuesta === "si"){
                alert("Añada productos a su carrito")
            ////////////////////////////////////////////////////////////////////////////////////
                    //Agregar productos al carrito - Array de objetos

                    const PRODUCTOS = [
                        { articulo: "Zapatillas Pensford DC", color: "Gris", precio: 55000 },
                        { articulo: "Zapatillas Manteca DC", color: "Mostaza", precio: 42800 },
                        { articulo: "Zapatillas Manteca DC", color: "Negro", precio: 45700 },
                        { articulo: "Zapatillas Pensford DC", color: "Azul", precio: 60000 }
                    ];
                    
                    let total = 0;
                    let deseaAgregarMasProductos = true;
                    
                    while (deseaAgregarMasProductos) {
                        // Construir la lista de productos para el cliente con busqueda y filtrado en el array
                        let listaProductos = "Seleccione un producto:\n";
                        PRODUCTOS.forEach((producto, index) => {
                            listaProductos += `${index + 1}. Artículo: ${producto.articulo}, Color: ${producto.color}, Precio: ${producto.precio}\n`;
                        });
                    
                        // Mostrar el prompt con la lista de productos para que seleccione el cliente
                        let seleccionIndex = parseInt(prompt(listaProductos)) - 1;
                    
                        // Verificar si la selección del usuario es válida
                        if (seleccionIndex >= 0 && seleccionIndex < PRODUCTOS.length) {
                            // Obtener el producto seleccionado
                            let productoSeleccionado = PRODUCTOS[seleccionIndex];
                            // Sumar el precio del producto seleccionado al total
                            total += productoSeleccionado.precio;
                            // Mostrar información del producto seleccionado
                            console.log("Ha seleccionado: " + productoSeleccionado.articulo + " $" + productoSeleccionado.precio);
                        } else {
                            console.log("Selección inválida. Inténtelo de nuevo.");
                        }
                        // Preguntar al usuario si desea agregar más productos
                        let respuesta = prompt("¿Desea añadir otro producto? (SI/NO)").toLowerCase();
                        if (respuesta !== "si") {
                            deseaAgregarMasProductos = false;
                        }
                    }
                    console.log("Su total es: $" + total);
                    
                    alert("Procederemos a la carga de sus datos para el envio")
                    
                    //Simulador de envio - CICLOS
                    let nombrePersona = prompt("Ingrese su nombre completo");
                    let direccion = prompt("Ingrese su direccion");
                    let codigoPostal = prompt("Ingrese su codigo postal");
                    let numeroDeCelular = prompt("Ingrese su numero de celular");

                    for (let i=0; i <= 0; i++){
                        console.log("Datos del cliente \n" + "Nombre completo: " + nombrePersona + "\n" + "Direccion: "+ direccion + "\n" + "CP: " + codigoPostal + "\n" + "Cel: " + numeroDeCelular )
                    }

                    alert("El comprobante de su compra fue enviado a su mail. Gracias por su compra")
            ////////////////////////////////////////////////////////////////////////////////////
                }else{
                alert("¿Desea desloguearse?")
            }
///////////////////////////////////////////////////////////////////////////////////////////////
}else{
    alert("Usuario o contraseña incorrecta")
}
