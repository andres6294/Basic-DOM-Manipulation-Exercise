let mensaje = document.getElementById("mensaje");
let btnMostrar = document.getElementById("btnMostrar");
let btnPresiona = document.getElementById("btnPresiona");

mensaje.style.color = "black";
mensaje.style.fontSize = "20px";
mensaje.style.border = "none";
mensaje.style.display = "block";
btnMostrar.textContent = "Ocultar";

function btn(){
    if(mensaje.style.color === "black"){
        mensaje.style.color = "green";
        mensaje.textContent = "El texto ahora es verde";
        btnPresiona.style.backgroundColor = "green";
    } else if(mensaje.style.color === "green"){
        mensaje.style.color = "red";
        mensaje.textContent = "El texto ahora es rojo";
        btnPresiona.style.backgroundColor = "red";
    } else{
        mensaje.style.color = "black"
        mensaje.textContent = "El texto ahora es negro";
        btnPresiona.style.backgroundColor = "";
    }

    if(mensaje.style.fontSize === "20px"){
        mensaje.style.fontSize = "30px";
        mensaje.style.background = "#cce5ff";
    } else if(mensaje.style.fontSize === "30px"){
        mensaje.style.fontSize = "40px";
        mensaje.style.background = "#fff3cd";
    } else{
        mensaje.style.fontSize = "20px";
        mensaje.style.background = "";
    }
}

function borde(){
    if(mensaje.style.border === "none"){
        mensaje.style.border = "3px solid blue";
    } else if (mensaje.style.border === "3px solid blue") {
        mensaje.style.border = "3px solid red";
    } else {
        mensaje.style.border = "none";
    }
}

function mostrar(){
    if(mensaje.style.display === "none"){
        mensaje.style.display = "block";
        btnMostrar.textContent = "Ocultar";
    } else {
        mensaje.style.display = "none";
        btnMostrar.textContent = "Mostrar";
    }
}

function resetear(){
    mensaje.style.color = "black";
    mensaje.style.fontSize = "20px";
    mensaje.style.border = "none";
    mensaje.style.display = "block";
    mensaje.style.background = "";
    mensaje.textContent = "El color, tamaño, visualización y borde del texto cambian al presionar los botones";

    btnMostrar.textContent = "Ocultar";
    btnPresiona.style.backgroundColor = "";
}