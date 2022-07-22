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
    
    input = document.getElementById("filtro");
    
    filter = input.value.toUpperCase();
    
    cardContainer = document.getElementById("cards");
    
    cards = cardContainer.getElementsByClassName("card");
    
    for (var i = 0; i < cards.length; i++) {
        titulo = cards[i].querySelector(".card-title");
        
        if (titulo.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

//función para subir al principio de la página
function scrollToTop() {
    window.scrollTo(0, 0);
}
