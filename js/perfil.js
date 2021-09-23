//Carga de MisMascotas
$(document).ready(obtenerMascotas);

function obtenerMascotas(){
let ubicacion = document.getElementById("mascotas"); 
fetch("../js/class/mascotasGuardadas.json")
.then(res=>res.json())
.then(data=>{ 
    let datos = []; 
    data.forEach(mascotas => {
        if(mascotas.owner == 'Hector Diaz'){
            datos.push(mascotas);
        }
    })

    crearCartas(datos, ubicacion);
});
}

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
