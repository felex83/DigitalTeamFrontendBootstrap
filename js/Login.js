function login() {
    let i = 0;
    var forms = document.querySelectorAll('#formRegistro')
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (i == 0) {
                if (form.checkValidity()) {
                    loguearse();
                } else {
                    event.stopPropagation()
                    event.preventDefault()
                }

                form.classList.add('was-validated')
                i++;
            }
        }, false)
    })
}

function loguearse() {
    let nombres = document.querySelector("#txtUsuario").value;
    let clave = document.querySelector("#txtPassword").value;
    url = 'http://localhost:3000/empleado';

    document.querySelector('#formRegistro').action = "./Vistas/Principal.html";
}