const tipoColaboracion = document.getElementById('tipo-colaboracion');
const opciones = document.querySelectorAll('.opcion-extra');

tipoColaboracion.addEventListener('change', () => {
    opciones.forEach(op => op.style.display = 'none');
    const seleccion = tipoColaboracion.value;
    if (seleccion) {
        document.getElementById('opciones-' + seleccion).style.display = 'block';
    }
});
window.onload = () => {
    opciones.forEach(op => op.style.display = 'none');
}


const nav = document.querySelector('#navegacion');
const secForm = document.querySelector('#formulario-colaboracion');

window.addEventListener('scroll', () => {
const distancia = secForm.getBoundingClientRect().top;

if (distancia < 5) {
    nav.classList.add('ocultar');  
} else {
    nav.classList.remove('ocultar');
}
});