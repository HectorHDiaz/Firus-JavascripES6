
let formIngresar = document.getElementById("sumarForm");
let usuarios = [];

$(document).ready(obtenerUsuarios);

formIngresar.addEventListener('submit', ingresoUsuario);



 function ingresoUsuario(e){
    e.preventDefault();
    let usuarioIngreso={};
    usuarios.forEach(usuario =>{
        if(usuario.user == document.getElementById("nombreUsuario").value){
            usuarioIngreso = usuario;
            console.log("Usuario Conseguido")
        }
    });
    if(usuarioIngreso.pass == document.getElementById("passUsuario").value){
        sessionStorage.setItem('usuarioActual', JSON.stringify(usuarioIngreso));
        location.href="/pages/inicio.html";
    }else{
        alert("Ingrese Usuario y Contraseña correcta!");
    }
}

function obtenerUsuarios(){
    fetch("https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/usuarios")
    .then(res=>res.json())
    .then(data=>{  
        usuarios = data;
    });
}
