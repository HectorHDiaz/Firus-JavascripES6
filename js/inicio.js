const usuarioActual

document.addEventListener('load', () => {

    usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    document.getElementById("userName").textContent(usuarioActual.nombre)

});
