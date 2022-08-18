var data = ""; //Variable declarada de manera global

function validarNoNumeros(input) { //Ejemplo de como validamos que no se tipeen números en el buscador
    var onlyLetters = /[^A-Za-z]/gi;
    input.value = input.value.replace(onlyLetters, "");
    //var textInput = document.getElementById("filtro").value;
    buscar(input)
}

function buscar(input) {
    
    var filter;
    var cards;
    var cardContainer;
    var titulo;

    filter = input.value.toUpperCase(); //los valores ingresados por el input se pasan a mayúscula

    cardContainer = document.getElementById("cardsposts");//obtenemos el elemento padre que contiene las card

    cards = cardContainer.getElementsByClassName("card");//obtenemos los elementos hijos mediante la clase que comparten todas las card

    for (var i = 0; i < cards.length; i++) {
        titulo = cards[i].querySelector(".card-title"); //guardamos los titulos de los productos en la variable titulo
        codigo = cards[i].querySelector(".card-title-id");

        if (titulo.innerText.toUpperCase().includes(filter) || codigo.innerText.includes(filter)) { //buscamos si los titulos(titulo) incluyen el input introducido
            cards[i].style.display = "";                           
        } else {
            cards[i].style.display = "none"; //ocultamos los elementos no coincidentes
        }
    }
}

// loader

// loader

var myVar;

function myLoader() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("blogs-body").style.display = "block";
}



// var datosPosts = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },

//     {
//         "userId": 1,
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiatblanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus velaccusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "eum et est occaecati",
//         "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquishic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "nesciunt quas odio",
//         "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimusesse voluptatibus quis\nest aut tenetur dolor neque"
//     },
// ]

/*datosPosts.forEach((post)  =>{
    var cardsposts = document.getElementById("cardsposts");
    cardsposts.innerHTML += `<div class="card col-12 col-md-4">
                                <div class="card-body">
                                <h5 class="card-title">${post.userId}</h5>
                                <h5 class="card-title">${post.title}</h5>
                                <button type="button" class="btn btn-primary" onclick='modalPost("${post.id}")' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Contenido del Post
                                </button>
                                </div>
                            </div>`;

});*/



document.addEventListener("DOMContentLoaded", () => {
    fetchDatos();
})

const fetchDatos = async () => {

    try {

        const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
        data = await res.json();
        crearCard(data) //Enviamos la información como parámetro
        recibirPromise() //Mostramos el mensaje por consola

    } catch (error) {
        alert(error)
    }
}

const crearCard = data => {

    const cards = document.getElementById('cardsposts')
    const templateCard = document.getElementById('template-card').content
    const fragment = document.createDocumentFragment();


    for (let i = 0; i < 20; i++) {

        templateCard.querySelector('.card-title-id').textContent = data[i].id
        templateCard.querySelector('.card-title').textContent = data[i].title
        templateCard.querySelector('.btn-primary').setAttribute('onclick', `modalPost(${data[i].id})`)


        const clon = templateCard.cloneNode(true) //Clonamos la estructura de templateCard
        fragment.appendChild(clon)
    }


    cards.appendChild(fragment);

}

const modalPost = async (id) => { //Método modalPost
    var titlePost = document.getElementById('exampleModalLabel');
    var bodyPost = document.querySelector('.modal-body');

    try {

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dataPost = await res.json()

        if (dataPost !== '') {
            titlePost.innerHTML = dataPost.title
            bodyPost.innerHTML = dataPost.body
            checkFavorito(dataPost)

        } else {
            alert("El post está vacio")
        }

    } catch (error) {
        alert(error)
    }
}



/*function modalPost(id) {
    
    var dato = data.find((post) =>{
        return post.id == id;
    });
    
    console.log(data)
   
    var bodyPost = document.getElementById("exampleModalLabel");
    bodyPost.innerHTML = dato.body;
    console.log(bodyPost)
 
}*/




function retornoPromise() {  //Retornamos la promesa
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Información Enviada')
        }, 3000)
    })
}


const recibirPromise = async () => { //La recibimos en el método asincrono
    const mensajePromise = await retornoPromise();
    console.log(mensajePromise);
}




const favoritos = []

let addFavorito = document.getElementById("agregarFavorito")
let removeFavorito = document.getElementById("eliminarFavorito")


function checkFavorito(post) {

    let postSeleccionado = post
    let search = favoritos.find((x) => x.title === postSeleccionado.title);

    console.log(`Revisando si ${post.title}está en favoritos`)
    if (search === undefined) { addFavorito.style.display = "block"; removeFavorito.style.display = "none"; console.log("El post no está en favoritos") } else {
        addFavorito.style.display = "none";
        removeFavorito.style.display = "block"; console.log("El post ya está en favoritos")
    }

}

function agregarFavorito(post) {
    post.estado = "favorito"
    favoritos.push(post); console.log(`favorito agregado`);
    addFavorito.style.display = "none"
    removeFavorito.style.display = "block"
    console.log(favoritos)
}

function eliminarFavorito(post) {
    delete post.estado
    favoritos.pop(post); console.log(`favorito eliminado`);
    removeFavorito.style.display = "none"
    addFavorito.style.display = "block"
    console.log(favoritos)
}
