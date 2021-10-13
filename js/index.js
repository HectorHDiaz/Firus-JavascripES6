
let loginForm = document.getElementById("loginForm");
let registerForm = document.getElementById("registerForm");
let loggedUser={};

$(document).ready(fetchUsers());
$(document).ready(fetchAllMascots());

loginForm.addEventListener('submit', loginUser);
registerForm.addEventListener('submit', registerUser);
//Logueo de Usuario
function loginUser(e){
    e.preventDefault();
    users.forEach(user =>{
        if(user.username == document.getElementById("nombreUsuario").value){
            loggedUser = user;
        }
    });
    if(loggedUser.pass == document.getElementById("passUsuario").value){
        sessionStorage.setItem('usuarioActual', JSON.stringify(loggedUser));
        location.href="pages/inicio.html";
    }else{
        alert("Usuario o Contraseña incorrecta!");
    }
}
//Cambio al Formulario Registrar
let containerLogin = document.getElementById("containerLogin");
let registerDiv = document.getElementById("registerContainer");
let loginDiv = document.getElementById("loginContainer");

let registerBtn = document.getElementById("registerBtn")
let loginBtn = document.getElementById("loginBtn")

registerBtn.addEventListener('click', toggleForms)
loginBtn.addEventListener('click', toggleForms)
function toggleForms(){
    if(loginDiv.classList.contains('active')){
        loginDiv.classList.remove('active')
        registerDiv.classList.add('active')
        containerLogin.style.backgroundImage='url("../media/gatonegromano.jpg")'
    }else{
        registerDiv.classList.remove('active')
        loginDiv.classList.add('active')
        containerLogin.style.backgroundImage = "url('../media/info1.png')"
    }
}


//POST del Registro de Usuario
function registerUser(e){
    e.preventDefault();

    if( registerForm.name.value != " " &&
        registerForm.email.value != " " &&
        registerForm.username.value != " " &&
        registerForm.pass.value != " "
    ){
        let joinDate = new Date();
        let registroUsuario = new usuarioFirus();
        registroUsuario.name = registerForm.name.value;
        registroUsuario.email = registerForm.email.value;
        registroUsuario.username = registerForm.username.value;
        registroUsuario.pass = registerForm.pass.value;
        registroUsuario.joinDate = `Se unió el ${joinDate.getMonth()}/${joinDate.getFullYear()}`;

        fetch('https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/usuarios', {
            method:'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(registroUsuario)
        })
        .then((response) => response.json())
        .then((data) => {
            activeUser = data;
            sessionStorage.removeItem('usuarioActual');
            sessionStorage.setItem('usuarioActual', JSON.stringify(activeUser));
            location.href="pages/inicio.html"
        });
    }
}

