const params = new URLSearchParams(window.location.search);
const usuario = params.get("usuario");

if (usuario) {
  document.getElementById("bienvenida").textContent = `Bienvenido/a ${usuario}`;
  document.getElementById("datos-usuario").textContent = `Apellido y nombre: ${usuario} Usuario: ${usuario}`;
  } 
  else {
    document.getElementById("bienvenida").textContent = `Bienvenido/a`;
    document.getElementById("datos-usuario").textContent = `Usuario no especificado.`;
}

const nav = document.querySelector('#navegacion');
const secGestion = document.querySelector('#gestionActividades');

window.addEventListener('scroll', () => {
const distancia = secGestion.getBoundingClientRect().top;

if (distancia < 5) {
    nav.classList.add('ocultar');  
} else {
    nav.classList.remove('ocultar');
}
});

