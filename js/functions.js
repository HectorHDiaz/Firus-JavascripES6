let usuarioActual

function obtenerUsuario(){
    const usersInSesion = sessionStorage.getItem('usuarioActual');
    if(usersInSesion){
        usuarioActual = JSON.parse(usersInSesion);
        }else{
        location.href="../index.html";
    }
}

function domUsuario(usuario){
    let imagenUsuario = document.getElementsByClassName("userImage");
    for(let i = 0; i < imagenUsuario.length; i++){
        imagenUsuario[i].src = usuario.imageURL;
    };
    domTextUsuario("nombreUsuario", usuario.name);
}

function domTextUsuario(atributo, atributoUsuario){
    let cambioAtributo = document.getElementsByClassName(atributo);
    for(let i = 0; i < cambioAtributo.length; i++){
        cambioAtributo[i].innerHTML = atributoUsuario;
    };
}

function crearCartas(datosMascotas, ubicacion){
    datosMascotas.forEach(mascota => {
        let card = document.createElement("div");
        card.innerHTML=`<div class="col mb-4">
                            <div class="card card1" style="background-image:url('${mascota.imagenMascota}')">
                                <div class="cardHead">
                                    <div class="cardHead__title">
                                        <h5 class="card-title">${mascota.nombreMascota}</h5>
                                </div>
                                <div class="cardHead__badge">
                                    <span class="badge badge-success">Perdido</span>
                                </div>
                                </div>
                            </div>
                        </div>`;

        ubicacion.appendChild(card);
    });
}