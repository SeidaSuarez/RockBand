"use strict"
// Obtener el formulario
const form = document.querySelector('.needs-validation');

// Agregar evento de envío al formulario
form.addEventListener('submit', function (event) {
    // Validar el formulario
    if (!form.checkValidity()) {
        event.preventDefault(); // Evitar envío del formulario si no es válido
        event.stopPropagation();
        mostrarAlerta('Es necesario completar todos los campos correctamente.');
    } else {
        
        mostrarAlerta('El formulario ha sido validado correctamente.');
    }

    form.classList.add('was-validated');
});

// Función para mostrar la alerta
function mostrarAlerta(mensaje) {
    // Crear un elemento de alerta
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-info');
    alert.textContent = mensaje;

    // Insertar la alerta antes del formulario
    form.parentNode.insertBefore(alert, form);

    // Esperar 3 segundos y luego eliminar la alerta
    setTimeout(function () {
        alert.remove();
    }, 4000);
}




