let productos = [
    { id: "a", producto: "Reloj", precio: "$300" },
    { id: "b", producto: "Audífonos", precio: "$200" },
    { id: "c", producto: "Audífonos", precio: "$100" },
    { id: "d", producto: "Silla", precio: "$400" }
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
                            <div id=${e.id} class="quantity"></div>
                                                       <button class="btn btn-dark btn-sm m-1" onclick="increment(${e.id})">Agregar</a> 
                            <button class="btn btn-dark btn-sm m-1" onclick="decrement(${e.id})">Eliminar</a>
                        
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


//funciones para agregar productos al carrito 
//cada producto requiere tener una id única para que los calculos funcionen

//se crea un arreglo donde entrarán los productos agregados al carro

let basket = []; 

// increment aumenta la cantidad del producto (según la id) por medio de un botón

let increment = (id) => {
    let selectedItem = id;
    console.log(selectedItem.id);

    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else { search.item += 1; }

    update(selectedItem.id);

    generateCartItems();

};

// decrement disminuye la cantidad del producto (según la id) por medio de un botón

let decrement = (id) => {
    let selectedItem = id;
    console.log(selectedItem.id);

    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else { search.item -= 1; }

    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);

    generateCartItems();
};

//update actualiza la cantidad de cada producto en la card y dentro del carro según la id
//se llama cada vez que se usa un botón increment o decrement

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    
    document.getElementById(id).innerHTML = "Cantidad: " + search.item; 

    //las dos líneas anteriores se pueden borrar si no queremos mostrar la cantidad en cada card (sí aparecerá dentro del carro)
    
    calculation();
};

//calculation suma el total de productos y muestra la cantidad total en el botón para abrir el modal del carro

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = `<i class="bi bi-cart"></i> (` + basket.map((x) => x.item).reduce((x, y) => x + y, 0) + `)`;
};


//función para mostrar el contenido del carrito dentro del modal
//esta función se llama cada vez que se usa un botón de increment o decrement para actualizar las cantidades
//también se llama desde el botón del modal en caso de que no se haya usado un botón al abrir por primera vez el carrito

let label = document.getElementById("label")
let ShoppingCart = document.getElementById("shopping-cart")

let generateCartItems = () => {
    if (basket.length >= 1) {

        label.innerHTML = `<h5>Productos:</h5>`;
        ShoppingCart.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let search = productos.find((y) => y.id === id) || [];
            return `<div class="cart-item">
            <div class="details">
            <div class="title-price">
<h5>${search.producto} x ${item}</h5>
<p>${search.precio}</p></div>
            <div class="cart-buttons"> 
            
        <button class="btn btn-dark btn-sm m-1" onclick="increment(${id})">+</a> 
         <button class="btn btn-dark btn-sm m-1" onclick="decrement(${id})">-</a>
            </div>
            </div>
            </div>`;
        }).join("");
    }
    else {
                label.innerHTML = `<h5>¡Carrito vacío!</h5>`;
                ShoppingCart.innerHTML = "";
    }
};


