//Traer resultados del JSON y mostrar.
$(document).ready(obtenerUsuario());
domUsuario(usuarioActual);

let filtrosForm = document.getElementById("filtrosForm");

let btnSubmit = document.getElementById("btnSubmit");

let dataFiltrada= [];

//Tener los datos del Filtro
filtrosForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let infoForm =[];
    for(let i = 0; i <= 4; i++){
        infoForm.push(e.target[i].value) 
    }
    getResultadosFiltro(infoForm);
});

//Aplicar filtros en la busqueda
function getResultadosFiltro(filtros){
    fetch("https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/mascotas")
    .then(res=>res.json())
    .then(data=>{
        dataFiltrada = data.filter(mascota => mascota.especieMascota    == filtros[1] 
                                              && mascota.generoMascota  == filtros[2] 
                                              && mascota.estaPerdido    == filtros[3] 
                                              && mascota.edadMascota    == filtros[4] );
        
        document.getElementById("resultadosDiv").innerHTML = "";    
        location.href = "#resultadosDiv"
        crearCartas(dataFiltrada, document.getElementById("resultadosDiv"));
    })
}

//Buscar Todos
$("#btnSubmitTodos").click(()=>{
        fetch("https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/mascotas")
        .then(res=>res.json())
        .then(data=>{
            document.getElementById("resultadosDiv").innerHTML = "";    
            location.href = "#resultadosDiv"
            crearCartas(data, document.getElementById("resultadosDiv"));
        })
})
