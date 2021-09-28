//Carga de MisMascotas

$(document).ready(getUser());
getMascotas(activeUser);
domUser(activeUser);
domProfile(activeUser);

function getMascotas(user){
    let location = document.getElementById("mascotas"); 
    fetch("https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/mascotas")
    .then(res=>res.json())
    .then(data=>{ 
        let userMascotas = []; 
        data.forEach(mascotas => {
            if(mascotas.owner == user.name){
                userMascotas.push(mascotas);
            }
        })
        createCards(userMascotas, location);
    });
}

function domProfile(user){
    let banner = document.getElementById("bannerUsuario");
    banner.style.backgroundImage= `url(${user.headerimage})`;
    
    document.getElementById("rangoUsuario").innerHTML = user.role;
    document.getElementById("bioUsuario").innerHTML = user.desc;
    document.getElementById("ubicacionUsuario").innerHTML = user.location;
    document.getElementById("bday").innerHTML = `Fecha de Cumpleaños: ${user.bday}`;
    document.getElementById("joinDate").innerHTML = `Se unió en ${user.joinDate}`;
}

$("#btnCerrarSesion").click(()=>{
    sessionStorage.removeItem('usuarioActual');
    location.href = "../index.html";
});


//Menu de Actividades
$('.actividad').click(function(e){
	$('.actividad').removeClass('active');
	$(this).addClass('active');
    
    $('.resultadoContent').fadeOut(200);
    let activeContent = $(this).attr('value');
    $(activeContent).delay(200).fadeIn(200);
})


//Modal
const modal = $("#myModal");
const btn = $(".misPerdidos");
const span = $(".close");
btn.click(()=> {
    modal.fadeIn(200);
  })
span.click(()=>{
    modal.fadeOut(200);
})
modal.click((e) => {
    modal.fadeOut(200);
})
  