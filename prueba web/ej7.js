function cambiarColor(){
    capaMouseOver.style.background = "navy";
} //capa1 corresponde al div de mouseover y cambia el color al pasar el cursor 

function avisoSalida(){
    alert("Hasta luego!");
}//Función utilizada en el div onMouseOut en donde al alejar el cursor del cuadro dará un cartel de aviso

function estilos(){
    capaMouseMove.style="cursor: pointer;";
    capaMouseMove.style="opacity: 50%;";
    capaMouseMove.style="color: black;";
}

function cambiaBoton(color){
    switch (color){
        case 'v': capaClic.style="background-color: green;"; break;
        case 'a': capaClic.style="background-color: yellow;"; break;
    }
}

function avisoRueda(){
    alert("Se ha movido la rueda del ratón");
}

function mousePresionado(){
    parrafoMouse.innerHTML="Esta presionando el clic izquierdo.";
}

function mouseLevantado(){
    parrafoMouse.innerHTML="El clic dejo de presionarse.";
}