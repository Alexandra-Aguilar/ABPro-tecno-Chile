let productos = [
    { id: "1", producto: "Reloj", precio: "$300" },
    { id: "2", producto: "Audífonos", precio: "$200" },
    { id: "3", producto: "Audífonos", precio: "$100" },
    { id: "4", producto: "Silla", precio: "$400" }
]


//función para eliminar productos
function eliminarProductos(productos) {
    productos.pop();
    productos.shift();
}




//función para cargar productos
function cargarDatos() {
    var datos = '';
    productos.forEach(function (e) {
        var htmlDatos = `<div class="card m-1 col-6 mx-auto">

                        <div class="card-body">
                            <h5 class="card-title" id="producto1">${e.producto}</h5>
                            <p class="card-text" id="precio1">${e.precio}</p>
                            <a href="#" class="btn btn-dark mt-3">Agregar al carro</a>
                        </div>
   
                        </div>`;
        datos += htmlDatos;
    });
    var datosContenedor = document.getElementById("cards");
    datosContenedor.outerHTML = `<div id="cards" class="container-fluid mx-auto justify-content-center">${datos}</div`;

}

function buscar() {
    var input;
    var filter; 
    var cards; 
    var cardContainer;
    var titulo;
    
    input = document.getElementById("filtro"); //obtenemos el id de input
    
    filter = input.value.toUpperCase(); //los valores ingresados por el input se pasan a mayúscula
    
    cardContainer = document.getElementById("cards");//obtenemos el elemento padre que contiene las card
    
    cards = cardContainer.getElementsByClassName("card");//obtenemos los elementos hijos mediante la clase que comparten todas las card
    
    for (var i = 0; i < cards.length; i++) {
        titulo = cards[i].querySelector(".card-title"); //guardamos los titulos de los productos en la variable titulo
        
        if (titulo.innerText.toUpperCase().indexOf(filter) > -1) { //buscamos coincidencias entre el input(filter) y los titulos(titulo)
            cards[i].style.display = "";                           //indexOf devolverá -1 si no hay coincidencias
        } else {
            cards[i].style.display = "none"; //ocultamos los elementos no coincidentes
        }
    }
}

//función para subir al principio de la página
function scrollToTop() {
    window.scrollTo(0, 0);
}
