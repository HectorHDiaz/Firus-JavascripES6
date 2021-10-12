let activeUser;
let allMascotas =[];
let users = [];

//Traer resultados de la API, guardarlos y buscarlos en el SessionStorage
async function fetchUsers(){
    fetch("https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/usuarios")
    .then(res=>res.json())
    .then(data=>{  
        users = data;
        sessionStorage.removeItem('allUsers');
        sessionStorage.setItem('allUsers', JSON.stringify(users));
    });
}
function getAllUsers(){   
    users = sessionStorage.getItem('allUsers');
    users = JSON.parse(users);
}
function getUser(){
    const userSession = sessionStorage.getItem('usuarioActual');
    if(userSession){
        activeUser = JSON.parse(userSession);
    }else{
        location.href="../index.html";
    }
}
async function fetchAllMascots(){
    fetch("https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/mascotas")
        .then(res=>res.json())
        .then(data=>{
            sessionStorage.removeItem('allMascotas');
            sessionStorage.setItem('allMascotas', JSON.stringify(data));
        })
}
function getAllMascotas(){   
    allMascotas = sessionStorage.getItem('allMascotas');
    allMascotas = JSON.parse(allMascotas);
}
//Cambiar imagenes y textos por la imagen de perfil y el nombre del usuario 
function domUser(user){
    let userImages = document.getElementsByClassName("userImage");
    for(let i = 0; i < userImages.length; i++){
        userImages[i].src = user.imageURL;
    };
    domTextUser("nombreUsuario", user.name);
}
function domTextUser(attr, userAttr){
    let attrChange = document.getElementsByClassName(attr);
    for(let i = 0; i < attrChange.length; i++){
        attrChange[i].innerHTML = userAttr;
    };
}
//Crear cartas y mostrar, crear modals. Función extra ya que no pude hacer una Arrow Function dentro del Literal Template  
function createCards(dataMascotas, location){
    dataMascotas.forEach(mascota => {
        let card = document.createElement("div");
        card.innerHTML=`<div class="col mb-4">
                            <div onclick="cardModal(event)" id="${mascota.id}" class="card card1" style="background-image:url('${mascota.imagen}')">
                                <div class="cardHead">
                                    <div class="cardHead__title">
                                        <h5 class="card-title">${mascota.nombre}</h5>
                                    </div>
                                    <div class="cardHead__badge">
                                        <span class="badge badge-${mascota.estado}">${mascota.estado}</span>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        location.appendChild(card);
    });
}
function cardModal(e){
    allMascotas.forEach(()=>{
        let contenido = 
            `<div class="modalMascota">
                <div class="mascotaImg" style="background-image: url(${allMascotas[e.target.id].imagen});"></div>
                    <div class="mascotaInfo">
                        <p class="infoTitle">${allMascotas[e.target.id].nombre}</p>
                        <div class="info">
                            <p>Dueño:</p>
                            <p>${users[allMascotas[e.target.id].owner].name}</p>
                        </div> 
                        <div class="info">
                            <p>Especie:</p>
                            <p>${allMascotas[e.target.id].especie}</p>
                        </div> 
                        <div class="info">
                            <p>Genero:</p>
                            <p>${allMascotas[e.target.id].genero}</p>
                        </div> 
                        <div class="info">
                            <p>Edad:</p>
                            <p>${allMascotas[e.target.id].edad}</p>
                        </div>
                        <div class="info">
                            <p>Descripción:</p>
                            <p>${allMascotas[e.target.id].descripcion}</p>
                        </div>
                        <button id="adoptarBtn" class="btn">${getModalBtn(allMascotas[e.target.id].estado)}</button>
                    </div>    
                </div>
            </div>`;            
        showModal(contenido);
    });
}
//Funcion para determinar el texto del botón del Modal en base al estado de la Mascota
function getModalBtn(estado){
    switch(estado){
        case "Adoptado":
            return "Buena!";
        case "Perdido":
            return "Informar";
        case "Adopcion":
            return "Adoptar";
    }
}
function showModal(content){
    let myModal = document.getElementById("myModal");
    let modalLocation = document.getElementById("modal-content");
    let modalElement = document.createElement("div");
    //Carga del contenido al Modal
    modalLocation.innerHTML="";
    modalElement.innerHTML = content;

    modalLocation.appendChild(modalElement);
    myModal.style.display = "block";
    //Validación de Click fuera del Modal para cerrarlo
    window.onclick = function(event) {
        if (event.target == myModal) {
          myModal.style.display = "none";
        }
      }
}

//Validaciones de Informe.html
function validarNombre(estado, input){
    if(estado == "Perdido"){
        return validacionTexto(input);
    }else{
        return "Callejero";
    }
}
function mostrarInputNombre(){
    let input = document.getElementById("nombreSection");
    let check = document.getElementById("perdidoSwitch");

    if (check.checked == true) {
        input.style.display = "block";
      } else {
        input.style.display = "none";
      }
}
function validacionCheckbox(checkbox){
    if(checkbox.checked == true){
        return "Perdido";
    }else{
        return "Adopcion";
    }
}
function validacionRadio(radioGroup){   
    for(i = 0; i < radioGroup.length; i++) {
        if(radioGroup[i].checked){
            return radioGroup[i].value;
        }
    }
}
function validacionTexto(textoValidar){
    if(textoValidar == null || textoValidar == ""){
        return false;
    }else{
        return textoValidar;
    }
}
//Validador URLs de Imagenes
function imageExists(image_url){
    var http = new XMLHttpRequest();
    http.open('HEAD', image_url, false);
    http.send();
    return http.status != 404;
}


