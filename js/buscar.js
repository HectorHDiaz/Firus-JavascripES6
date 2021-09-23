//Traer resultados del JSON y mostrar.
let resultados = ""

fetch("../js/class/mascotasGuardadas.json")
.then(res=>res.json())
.then(data=>{
    crearCartas(data, document.getElementById("resultadosDiv"));
})
