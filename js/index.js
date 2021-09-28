
let loginForm = document.getElementById("sumarForm");
let users = [];
let loggedUser={};

$(document).ready(getUsers);

loginForm.addEventListener('submit', loginUser);


function getUsers(){
    fetch("https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/usuarios")
    .then(res=>res.json())
    .then(data=>{  
        users = data;
    });
}

function loginUser(e){
    e.preventDefault();
    users.forEach(user =>{
        if(user.username == document.getElementById("nombreUsuario").value){
            loggedUser = user;
            console.log("Usuario Conseguido")
        }
    });
    if(loggedUser.pass == document.getElementById("passUsuario").value){
        sessionStorage.setItem('usuarioActual', JSON.stringify(loggedUser));
        location.href="pages/inicio.html";
    }else{
        alert("Usuario o Contraseña incorrecta!");
    }
}

