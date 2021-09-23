function crearCartas(datosMascotas, ubicacion){
    
    datosMascotas.forEach(mascota => {
        let card = document.createElement("div");
        card.innerHTML=`<div class="col">
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