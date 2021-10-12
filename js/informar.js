$(document).ready(getUser());
$(document).ready(getAllMascotas());
domUser(activeUser);

let imagen, especie, genero, edad, descripcion, estado, nombre, owner;

//Eventos
document.getElementById("perdidoSwitch").addEventListener("input", mostrarInputNombre);
document.getElementById("imagenButton").addEventListener("click", ()=>{validarImagen(formInforme.imagenUrl.value)});

let formInforme = document.getElementById("formInforme");
formInforme.addEventListener("submit", validarInforme);

//Funciones
function validarInforme(e){
    e.preventDefault();
    imagen = validarImagen(formInforme.imagenUrl.value);
    especie = validacionRadio(formInforme.especieRadio);
    genero = validacionRadio(formInforme.generoRadio);
    edad = formInforme.edadSelect.value;
    descripcion = validacionTexto(formInforme.descTextArea.value);
    estado = validacionCheckbox(formInforme.perdidoSwitch);
    nombre = validarNombre(estado, formInforme.nombreInput.value);

    //Validacion de Entradas de Texto
    if(nombre.length < 14 && descripcion.length > 20 && !imageExists(imagen)){
        subidaInforme();
    }else{
        validacionError();
    }
}
//POST del Informe de Mascota
function subidaInforme(){
    const nuevaMascota = new MascotaPerdida();
    nuevaMascota.id             = allMascotas.length;
    nuevaMascota.imagen         = formInforme.imagenText.value;
    nuevaMascota.especie        = especie;
    nuevaMascota.genero         = genero;
    nuevaMascota.edad           = edad;
    nuevaMascota.descripcion    = descripcion;
    nuevaMascota.estado         = estado;
    nuevaMascota.nombre         = nombre;
    nuevaMascota.owner          = activeUser.id;

    fetch('https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/mascotas', {
        method:'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify(nuevaMascota)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        allMascotas.push(data);
        sessionStorage.removeItem('allMascotas');
        sessionStorage.setItem('allMascotas', JSON.stringify(allMascotas));  
        location.href = "perfil.html" 
    })
}
//Validacion de Texto y Conexión de la Imagen
function validarImagen(url){
    if(url != "" && imageExists(url)){
        let img = document.getElementById("imagenMascota");
        img.setAttribute("src", url)
        imagen = url;
        formInforme.imagenUrl.style.color = "green"
        formInforme.imagenUrl.style.border = "2px solid green"
    }else{
        formInforme.imagenUrl.value = ""
        formInforme.imagenUrl.style.border = "2px solid red"
        validacionError();
    }
}
//Mensaje de Error 
function validacionError(){
    let mensajeMasInfo = document.getElementById("buttonP")
        mensajeMasInfo.textContent = "Por favor, ingresar todos los datos."   
        let masInfo = document.getElementById("divButton");
        masInfo.appendChild(mensajeMasInfo);
}




