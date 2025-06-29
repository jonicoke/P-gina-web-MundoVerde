  const nav = document.querySelector('#navegacion');
  const secMision = document.querySelector('#mision-y-vision');

  window.addEventListener('scroll', () => {
    const distancia = secMision.getBoundingClientRect().top;

    if (distancia <= 0) {
      nav.classList.add('ocultar');  
    } else {
      nav.classList.remove('ocultar');
    }
  });

  const form = document.getElementById('form-login');
  const mensajeError = document.getElementById('mensaje-error');

  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const usuario = document.getElementById('usuario').value.trim();
    const clave = document.getElementById('contrasena').value;
    
    if (usuario === "mari" && clave === "123") {
      window.location.href = `admin.html?usuario=${encodeURIComponent(usuario)}`;
    } else {
      mensajeError.classList.add("mostrar");
      mensajeError.textContent = "Usuario y/o clave incorrecta";
      setTimeout(() => {
        mensajeError.classList.remove("mostrar");
        mensajeError.textContent = "";
      }, 3000);
    }
  });