//MMMMMMMMEEEEEEEEEEEEJJJJJJJOOOOOORRRRRRAAAAAAAAAAARRRRRRRRR

//Traer resultados.
$(document).ready(getUser());
$(document).ready(getAllMascotas());
$(document).ready(getAllUsers());
domUser(activeUser);

let formFilters = document.getElementById("filtrosForm");
let submitBtn = document.getElementById("btnSubmit");

//Obtener datos del Formulario y Ejecutar función
formFilters.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formInfo =[];
    for(let i = 0; i <= 4; i++){
        formInfo.push(e.target[i].value) 
    }
    getFiltersUser(formInfo);
});
//Aplicar filtros en la busqueda
function getFiltersUser(filters){
    let filteredData;
    filteredData = allMascotas.filter(mascota =>   mascota.especie       == filters[1] 
                                                && mascota.genero        == filters[2] 
                                                && mascota.estado        == filters[3] 
                                                && mascota.edad          == filters[4]
    );
    document.getElementById("resultadosDiv").innerHTML = "";    
    location.href = "#resultadosDiv"
    createCards(filteredData, document.getElementById("resultadosDiv"));
}
//Buscar Todos
$("#btnSubmitTodos").click(()=>{
    document.getElementById("resultadosDiv").innerHTML = "";    
    location.href = "#resultadosDiv"
    createCards(allMascotas, document.getElementById("resultadosDiv"));
})
