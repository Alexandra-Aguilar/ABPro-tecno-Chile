var onlyLetters = /^[A-Za-z]+$/;

function validarNoNumeros(){ //Ejemplo de como validamos que no se tipeen números en el buscador
    var txtInput = document.getElementById("filtro").value; 
    if(txtInput.match(onlyLetters)){
        return console.log(true);
    }else{
        return console.log(false);
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