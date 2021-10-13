//Traer resultados.
$(document).ready(getUser());
$(document).ready(getAllMascotas());
$(document).ready(getAllUsers());
domUser(activeUser);

let formFilters = document.getElementById("filtrosForm");
let getAllButton = document.getElementById("btnSubmitTodos");

//Ejecución de función
formFilters.addEventListener('submit', getfilteredResults)

//Aplicar filtros en la busqueda
function getfilteredResults(e){
    e.preventDefault();
    let filteredData;
    filteredData = allMascotas.filter(mascota =>   mascota.especie == formFilters.especie.value 
                                                && mascota.genero  == formFilters.genero.value 
                                                && mascota.estado  == formFilters.estado.value 
                                                && mascota.edad    == formFilters.edad.value
    );
    document.getElementById("resultadosDiv").innerHTML = "";    
    location.href = "#resultadosDiv"
    createCards(filteredData, document.getElementById("resultadosDiv"));
}

//Buscar Todos
getAllButton.addEventListener('click', getAllResults);

function getAllResults(){
    document.getElementById("resultadosDiv").innerHTML = "";    
    location.href = "#resultadosDiv"
    createCards(allMascotas, document.getElementById("resultadosDiv"));
}
