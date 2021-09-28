let activeUser;
let allMascots;

function getUser(){
    const userSession = sessionStorage.getItem('usuarioActual');
    if(userSession){
        activeUser = JSON.parse(userSession);
        }else{
        location.href="../index.html";
    }
}

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

function createCards(dataMascotas, location){
    dataMascotas.forEach(mascota => {
        let card = document.createElement("div");
        card.innerHTML=`<div class="col mb-4">
                            <div onclick="createModal(event)" id="${mascota.id}" class="card card1" style="background-image:url('${mascota.imagen}')">
                                <div class="cardHead">
                                    <div class="cardHead__title">
                                        <h5 class="card-title">${mascota.nombre}</h5>
                                </div>
                                <div class="cardHead__badge">
                                    <span class="badge badge-success">Perdido</span>
                                </div>
                                </div>
                            </div>
                        </div>`;
        location.appendChild(card);
    });
}

function createModal(e){
    fetch("https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/mascotas")
    .then(res=>res.json())
    .then(data=>{
        console.log(data[e.target.id].nombre)

        let myModal = document.getElementById("myModal");
        let modalLocation = document.getElementById("modal-content");
        let modalElement = document.createElement("div");

        modalLocation.innerHTML=""; 

        modalElement.innerHTML = `  <div style="height:20em; background-image: url(${data[e.target.id].imagen}); background-position: center; background-size: cover;"></div>
                                    <p>${data[e.target.id].nombre}</p>
                                    <p>${data[e.target.id].especie}</p>
                                    <p>${data[e.target.id].genero}</p>
                                    <p>${data[e.target.id].edad}</p>
                                    <p>${data[e.target.id].descripcion}</p>
                                    <p>${data[e.target.id].owner}</p>`;   
        modalLocation.appendChild(modalElement);

        myModal.style.display = "block";

        window.onclick = function(event) {
            if (event.target == myModal) {
              myModal.style.display = "none";
            }
          }

        });
}


