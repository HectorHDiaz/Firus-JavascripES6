//Traer resultados del JSON y mostrar.
let resultados = ""

fetch("https://my-json-server.typicode.com/HectorHDiaz/JSON-Firus/mascotas")
.then(res=>res.json())
.then(data=>{
    crearCartas(data, document.getElementById("resultadosDiv"));
})
