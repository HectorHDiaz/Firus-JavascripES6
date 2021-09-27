//Carga de MisMascotas

$(document).ready(obtenerUsuario());
obtenerMascotas(usuarioActual);
domUsuario(usuarioActual);
domPerfil(usuarioActual);

function obtenerMascotas(usuario){
    let ubicacion = document.getElementById("mascotas"); 
    fetch("https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/mascotas")
    .then(res=>res.json())
    .then(data=>{ 
        let datos = []; 
        data.forEach(mascotas => {
            if(mascotas.owner == usuario.name){
                datos.push(mascotas);
            }
        })
        crearCartas(datos, ubicacion);
    });
}

function domPerfil(usuario){
    let banner = document.getElementById("bannerUsuario");
    banner.style.backgroundImage= `url(${usuario.headerimage})`;
    
    document.getElementById("rangoUsuario").innerHTML = usuario.role;
    document.getElementById("bioUsuario").innerHTML = usuario.desc;
    document.getElementById("ubicacionUsuario").innerHTML = usuario.location;
    document.getElementById("bday").innerHTML = `Fecha de Cumpleaños: ${usuario.bday}`;
    document.getElementById("joinDate").innerHTML = `Se unió en ${usuario.joinDate}`;
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
