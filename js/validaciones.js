function validarImagen(){
    imagenMascota = document.getElementById("imagenUrl").value;

    if(validacionTexto(imagenMascota)==false){
        validacionError();
    }else{
        let img = document.getElementById("imagenMascota");
        img.setAttribute("src", imagenMascota)
    }
}


function validacionError(){
    let mensajeMasInfo = document.getElementById("buttonP")
    mensajeMasInfo.textContent = "Por favor, ingresar todos los datos."   
    let masInfo = document.getElementById("divButton");
    masInfo.appendChild(mensajeMasInfo);
}


function validarNombre(estaPerdido){
    if(estaPerdido){
        return validacionTexto(document.getElementById("nombreInput").value);
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
        return true;
    }else{
        return false;
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

