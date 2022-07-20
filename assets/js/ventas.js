let productos = [
    { id: "1", producto: "Reloj", precio: "$300" },
    { id: "2", producto: "Audífonos", precio: "$200" },
    { id: "3", producto: "Audífonos", precio: "$100" },
    { id: "4", producto: "Silla", precio: "$400" }
]

document.getElementById("producto1").innerHTML = productos[0].producto;

document.getElementById("precio1").innerHTML = productos[0].precio;

document.getElementById("producto2").innerHTML = productos[1].producto;

document.getElementById("precio2").innerHTML = productos[1].precio;

document.getElementById("producto3").innerHTML = productos[2].producto;

document.getElementById("precio3").innerHTML = productos[2].precio;

document.getElementById("producto4").innerHTML = productos[3].producto;

document.getElementById("precio4").innerHTML = productos[3].precio;