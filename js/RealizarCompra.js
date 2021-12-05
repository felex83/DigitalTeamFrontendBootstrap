let productos = [];
function Carrito() {
    let i = 0;
    var forms = document.querySelectorAll('#formCarrito')
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (i == 0) {
                if (form.checkValidity()) {
                    llevarCarrito();
                } else {
                    event.stopPropagation()
                }
                event.preventDefault()

                form.classList.add('was-validated')
                i++;
            }
        }, false)
    })
}

function realizarCompra() {
    let hoy = new Date();
    let fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
    let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    productos.forEach(function (producto) {
        let nombre = producto.split(',')[0];
        let cantidad = producto.split(',')[1];
        console.log(nombre + " - " + cantidad);
        url = 'http://localhost:3000/Cliente_producto';
        let datos = {
            nombre: nombre,
            cantidad: cantidad,
            fecha: fecha,
            hora: hora
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(mensaje => {
            console.log(mensaje)
        });
    });
}

function llevarCarrito() {
    let nombre = document.querySelector("#txtProductos").value;
    let cantidad = document.querySelector("#txtCantidad").value;
    productos.push(nombre + "," + cantidad);
    let entrada = nombre + " - " + cantidad;
    if (document.querySelector("#txtCarrito").value != "") entrada = "\n" + entrada;
    document.querySelector("#txtCarrito").value += entrada;
    document.getElementById("txtCarrito").rows = productos.length;
}

function regresar() {
    document.querySelector("#formCarrito").action = "ListaCliente.html";
}