let nombreUsuario = document.getElementById("nombreUsuario").value;
let idUsuario = document.getElementById("idUsuario").value;
let formIngresar = document.getElementById("sumarForm");


//nombreUsuario.addEventListener('input', validacionNombre(nombreUsuario));
//idUsuario.addEventListener('input', validaciónId(id));

formIngresar.addEventListener('submit', ingresoUsuario(idUsuario, nombreUsuario));



function ingresoUsuario(nombre, id){

    const nuevoUsuario = new usuarioFirus(id, nombre);
    localStorage.setItem("usuarioActual", JSON.stringify(nuevoUsuario));

}