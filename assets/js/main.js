function nuevoCliente(){
    var name = document.getElementById("userinput1").value;
    var lastname = document.getElementById("userinput2").value;
    var address = document.getElementById("userinput3").value;
   
    var row="<tr><td>"+name+"</td><td>"+lastname +"</td><td>"+address+"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=row;
    document.getElementById("tb").appendChild(btn);

    document.getElementById("userinput1").value ="";
    document.getElementById("userinput2").value = "";
    document.getElementById("userinput3").value = "";
    //document.getElementById("userinput1").focus();
}

nuevoCliente();

function scrollToTop(){
    window.scrollTo(0,0);
}




function agregar() {

    
    var element = document.getElementById("incrementText");
    var value = element.innerHTML;

    ++value;

    document.getElementById("incrementText").innerHTML = value;

    if (value < 0) {document.getElementById("contador").style.backgroundColor = "red";}
    else if (value > 19) {document.getElementById("contador").style.backgroundColor = "green";}
    else {document.getElementById('contador').style.removeProperty("background-color");}
}

agregar();

function quitar() {
    var element = document.getElementById("incrementText");
    var value = element.innerHTML;

    --value;

    document.getElementById("incrementText").innerHTML = value;

    if (value < 0) {document.getElementById("contador").style.backgroundColor = "red";}
    else if (value > 19) {document.getElementById("contador").style.backgroundColor = "green";}
    else {document.getElementById('contador').style.removeProperty("background-color");}
}

quitar();