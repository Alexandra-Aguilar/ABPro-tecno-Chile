function nuevoCliente(){
    var name = document.getElementById("userinput1").value;
    document.getElementById("nombrecliente").innerHTML = name;

    var lastname = document.getElementById("userinput2").value;
    document.getElementById("apellidocliente").innerHTML = lastname;

    var address = document.getElementById("userinput3").value;
    document.getElementById("direccioncliente").innerHTML = address;
}

nuevoCliente();
