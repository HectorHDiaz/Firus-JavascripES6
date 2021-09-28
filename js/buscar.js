//Traer resultados del JSON y mostrar.
$(document).ready(getUser());
domUser(activeUser);


let formFilters = document.getElementById("filtrosForm");

let submitBtn = document.getElementById("btnSubmit");

//Tener los datos del Filtro
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
    fetch("https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/mascotas")
    .then(res=>res.json())
    .then(data=>{
        let filteredData;
        filteredData = data.filter(mascota =>    mascota.especie       == filters[1] 
                                              && mascota.genero        == filters[2] 
                                              && mascota.estaPerdido   == filters[3] 
                                              && mascota.edad          == filters[4]);
        
        console.log(filteredData)

        document.getElementById("resultadosDiv").innerHTML = "";    
        location.href = "#resultadosDiv"
        createCards(filteredData, document.getElementById("resultadosDiv"));
    })
}

//Buscar Todos
$("#btnSubmitTodos").click(()=>{
        fetch("https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/mascotas")
        .then(res=>res.json())
        .then(data=>{
            document.getElementById("resultadosDiv").innerHTML = "";    
            location.href = "#resultadosDiv"
            createCards(data, document.getElementById("resultadosDiv"));
        })
})
