/* -------------------------------------------------------------------------------
 - Cada vez que se recarga la página debe añadir una visita más 
 - Debe persistir el número aunque se cierre el navegador ----> localStorage
  - Si deseas reiniciar el contador, haz clic en el botón "Reestablecer Contador" 
y se pondrá a cero y comenzará de nuevo en 1 en la siguiente visita.
-------------------------------------------------------------------------------- */

// 1 ---> se crea el par clave-valor en localStorage
const recuentoVisitas = localStorage.setItem('claveVisitas', 'contadorVisitas');

// 2 ---> se inicializan 
const claveVisitas = 'contadorVisitas';
let contadorVisitas = localStorage.getItem(claveVisitas);

if (!contadorVisitas || isNaN(contadorVisitas)) {
    contadorVisitas = 1; // si no existe o es NaN, arranca en 1
} else {
    contadorVisitas = parseInt(contadorVisitas) + 1; // si ya existía y era un número, se le suma 1
}

// 3 ---> guardar el valor actulizado para sumarle de nuevo cuando se abra otra vez la página
localStorage.setItem(claveVisitas, contadorVisitas);

// 4 ---> mostrar en el DOM
document.getElementById('contadorVisitas').textContent = contadorVisitas;

// 5 ---> se reestablece el contador al hacer clic en el botón
const btnReestablecer = document.getElementById('btnReestablecer');

btnReestablecer.addEventListener('click', () => {
    localStorage.removeItem(claveVisitas);
    location.reload(); // recargar la página para arrancar con el contador a 1
});