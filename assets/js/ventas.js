let productos = [
    { id: "1", producto: "Reloj", precio: "$300" },
    { id: "2", producto: "Audífonos", precio: "$200" },
    { id: "3", producto: "Audífonos", precio: "$100" },
    { id: "4", producto: "Silla", precio: "$400" }
]

function eliminarProductos(productos){
    productos.pop();
    productos.shift();
}

//eliminarProductos(productos);



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
