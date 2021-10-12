let imageBanner = document.getElementById("bannerUsuario");
let imageProfile = document.getElementById("userImage"); 
let changeBanner = document.getElementById("buttonChangeBanner")

//Carga de Datos
$(document).ready(getUser());
$(document).ready(getAllMascotas());
$(document).ready(getAllUsers());
$(document).ready(getMascotas(activeUser));
domUser(activeUser);
domProfile(activeUser);

//Filtro de Mascotas del Usuario y llamada a Funcion para Crear Cartas
function getMascotas(user){
    let userMascotas = []; 
    allMascotas.forEach(mascotas => {
        if(mascotas.owner == user.id){
            userMascotas.push(mascotas);
        }
    })
    createCards(userMascotas, document.getElementById('misMascotas'));
}
//Carga de Datos Personales
function domProfile(user){
    imageBanner.style.backgroundImage= `url(${user.headerImage})`;
    
    document.getElementById("rangoUsuario").innerHTML = user.role;
    document.getElementById("bioUsuario").innerHTML = user.desc;
    document.getElementById("ubicacionUsuario").innerHTML = user.location;
    document.getElementById("bday").innerHTML = `Fecha de Cumpleaños: ${user.bday}`;
    document.getElementById("joinDate").innerHTML = `Se unió el ${user.joinDate}`;
}

//Botón Cerrar Sesión
$("#btnCerrarSesion").click(()=>{
    sessionStorage.removeItem('allMascotas');
    sessionStorage.removeItem('usuarioActual');
    location.href = "../index.html";
});
//elección Tab del Menu de Actividades
$('.actividad').click(menuActividades);
function menuActividades(e){
	$('.actividad').removeClass('active');
	$(this).addClass('active');
    
    $('.resultadoContent').fadeOut(200);
    let activeContent = $(this).attr('value');
    $(activeContent).delay(200).fadeIn(200);
}

//Eventos y función para cambio de Imagenes de Perfil y Header
imageProfile.addEventListener('click',()=>{changeImageModal("imageURL")});
changeBanner.addEventListener('click',()=>{changeImageModal("headerImage")});
function changeImageModal(prop){
    let contenido = `<img width="100%" id="formImg" src=${activeUser[prop]}></img>
                      <input type="text" class="form-control" id="newImageUrl" placeholder="Ingrese URL de su Imagen">
                      <button id="imageVerify" class="btn wd-50">Verificar </button>
                      <button id="imageSet" class="btn wd-50">Aceptar</button>`
    showModal(contenido);   
    
    let verify = document.getElementById("imageVerify");
    let imageSet = document.getElementById("imageSet");
    let actualImg = document.getElementById("formImg");
    let newImage = document.getElementById("newImageUrl")

    verify.addEventListener('click',() => {
        if(newImage.value != "" && imageExists(newImage.value)){
            actualImg.src = newImage.value;
        }else{
            newImage.placeholder = "¡Ingresar URL Correcta!";
            newImage.value="";
            newImage.style.borderColor = "red";
        }
    })
    imageSet.addEventListener('click',() => {
        if(newImage.value != "" && imageExists(newImage.value)){
            activeUser[prop] = newImage.value;
            sessionStorage.removeItem('usuarioActual');
            sessionStorage.setItem('usuarioActual', JSON.stringify(activeUser));
            location.href = "perfil.html"
        }else{
            newImage.placeholder = "¡Ingresar URL Correcta!";
            newImage.value="";
            newImage.style.borderColor = "red";
        }
    })
}

//Variables, Eventos y Funcion para cambio de datos Personales.
let descUser = document.getElementById("bioUsuario"),
    locationUser = document.getElementById("ubicacionUsuario"),
    bdayUser = document.getElementById("bday");

    descUser.addEventListener('click',()=>{changeUserText("desc")});
    locationUser.addEventListener('click',()=>{changeUserText("location")});
    bdayUser.addEventListener('click',()=>{changeUserText("bday")});

function changeUserText(prop){
    let contenido = `<p>Ingrese su nuevo texto:</p>
                     <textarea type="text" class="form-control" id="newText" placeholder=""></textarea>
                     <button id="setText" class="btn w-100">Aceptar</button>`;
    showModal(contenido);

    let textInput = document.getElementById("newText");
    let setText = document.getElementById("setText");

    setText.addEventListener('click',()=>{

        activeUser[prop] = textInput.value; 
        sessionStorage.removeItem('usuarioActual');
        sessionStorage.setItem('usuarioActual', JSON.stringify(activeUser));
        location.href = "perfil.html"
    })
}

