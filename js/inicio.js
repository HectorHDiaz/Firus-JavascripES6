const usuarioActual

document.addEventListener('load', () => {

    usuarioActual = JSON.parse(sessionStorage.getItem('usuarioActual'));
    document.getElementById("userName").textContent(usuarioActual.nombre)

});
