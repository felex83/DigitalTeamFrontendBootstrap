function registrarCliente() {
    let i = 0;
    var forms = document.querySelectorAll('#formRegistro')
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (i == 0) {
                if (form.checkValidity()) {
                    registrar();
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

function registrar() {
    let identificacion = document.querySelector("#txtIdentificacion").value;
    let nombres = document.querySelector("#txtNombres").value;
    let apellidos = document.querySelector("#txtApellidos").value;
    let telefono = document.querySelector("#txtTelefono").value;
    let correo = document.querySelector("#txtCorreo").value;

    url = 'http://localhost:3000/clientes';
    let datos = {
        identificacion: identificacion,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        correo: correo
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
    document.querySelector("#formRegistro").action = "ListaCliente.html";
}