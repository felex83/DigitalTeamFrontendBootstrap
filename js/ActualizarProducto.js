function actualizarProducto() {
    let i = 0;
    var forms = document.querySelectorAll('#formRegistro')
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (i == 0) {
                if (form.checkValidity()) {
                    actualizar();
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

function actualizar() {
    let nombre = document.querySelector("#txtNombre").value;
    let costo = document.querySelector("#txtCosto").value;
    let cantidad = document.querySelector("#txtCantidad").value;
    let descripcion = document.querySelector("#txtDescripcion").value;

    url = 'http://localhost:3000/productos';
    let datos = {
        nombre: nombre,
        costo: costo,
        cantidad: cantidad,
        descripcion: descripcion
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(mensaje => {
            console.log(mensaje)
        });
}

function regresar() {
    document.querySelector("#formRegistro").action = "ListaProducto.html";
}