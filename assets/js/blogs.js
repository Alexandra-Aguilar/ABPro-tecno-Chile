var onlyLetters = /^[A-Za-z]+$/;

function validarNoNumeros(){ //Ejemplo de como validamos que no se tipeen números en el buscador
    var txtInput = document.getElementById("filtro").value; 
    if(txtInput.match(onlyLetters)){
        return console.log(true);
    }else{
        return console.log(false);
    }
}