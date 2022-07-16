function nuevoCliente(){
    var name = document.getElementById("userinput1").value;
    var lastname = document.getElementById("userinput2").value;
    var address = document.getElementById("userinput3").value;
   
    var row="<tr><td>"+name+"</td><td>"+lastname +"</td><td>"+address+"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=row;
    document.getElementById("tb").appendChild(btn);
}

nuevoCliente();

function scrollToTop(){
    window.scrollTo(0,0);
}
