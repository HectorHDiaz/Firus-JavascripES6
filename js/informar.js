let imagenMascota, especieMascota, generoMascota, edadMascota, descripcionMascota, estaPerdido, nombreMascota;
const miListaPerdidos = [];



//Eventos
document.getElementById("perdidoSwitch").addEventListener("input", mostrarInputNombre);

document.getElementById("imagenButton").addEventListener("click", validarImagen);

let miFormulario = document.getElementById("formInforme");
miFormulario.addEventListener("submit", validarInforme);




//Funciones
function validarInforme(e){
    e.preventDefault();
    
    especieMascota = validacionRadio(document.getElementsByName("especieRadio"));
    generoMascota = validacionRadio(document.getElementsByName("generoRadio"));
    edadMascota = document.getElementById("edadSelect").value;
    descripcionMascota = validacionTexto(document.getElementById("descripcionTextArea").value);
    estaPerdido = validacionCheckbox(document.getElementById("perdidoSwitch"));
    nombreMascota = validarNombre(estaPerdido);

    //Validacion de Entradas de Texto
    if(nombreMascota.length < 14 && descripcionMascota.length > 20 && imagenMascota){
        subidaInforme();
    }else{
           validacionError();
    }
}

function subidaInforme(){
    const nuevoPerdido = new MascotaPerdida(1, imagenMascota, especieMascota, generoMascota, edadMascota, descripcionMascota, estaPerdido, nombreMascota);
    agregarEnlistaPerdidos(nuevoPerdido);
    document.location.href="perfil.html";
}

function agregarEnlistaPerdidos(perdidoNuevo){
    miListaPerdidos.push(perdidoNuevo);
    envioListaPerdidos(miListaPerdidos);
}

function envioListaPerdidos(listaPerdidos){
    localStorage.removeItem('nuevaListaPerdidos');
    localStorage.setItem("nuevaListaPerdidos", JSON.stringify(listaPerdidos));   
}




