'use strict';
import {Circle} from "./circle.js";
import {Poligono} from "./poligono.js";

let canvas = document.getElementsByClassName("can")[0];
let context = canvas.getContext('2d');
let cerrarPol = document.getElementsByClassName("cerrar")[0];
let clean = document.getElementsByClassName("clean")[0];
let cancelar = document.getElementsByClassName("cancelar")[0];
let hasPol = false;
let poligono = new Poligono();
let poligonos = [];
let objetoActual = null;

cancelar.addEventListener("click", function(){
    canvas.onclick = null;
})

clean.addEventListener("click", cleanCanvas);
cerrarPol.addEventListener("click", function(){
    poligono.cerrar(context);
    poligonos.push(poligono);
    hasPol = false;
});
canvas.addEventListener("click", dibujar);

canvas.onmousedown = e => {
    var x = e.layerX;
    var y = e.layerY;
    if(poligono.isCenter(x, y)){
        objetoActual = poligono.getCentro();
    }
}
canvas.onmousemove = e => {
    var x = e.clientX;
    var y = e.clientY;
    if(objetoActual!=null){
        cleanCanvas();
        for ( let i = 0; i < poligono.getVertices().length; i++){

            let circulo = poligono.getVertices()[i];
            
            let disX = poligono.getDistanciaX()[i];
            let disY = poligono.getDistanciaY()[i];

            let disXActual = objetoActual.getX() - circulo.getX();
            let disYActual = objetoActual.getY() - circulo.getY();

            let diferenciaX = disXActual - disX;
            let diferenciaY = disYActual - disY;
            
            circulo.setX(circulo.getX() + diferenciaX);
            circulo.setY(circulo.getY() + diferenciaY);
        }
        objetoActual.setX(x)
        objetoActual.setY(y);
        poligono.dibujar(context);
        objetoActual.dibujar(context);
    }
}
canvas.onmouseup = e => {
    objetoActual = null;
}

function dibujar(){
    if(!hasPol){
        poligono = new Poligono();
        hasPol = true;
    }
    var x = event.clientX;
    var y = event.clientY;
    let c = new Circle(10, x, y, 'red');
    poligono.addVertice(c);
    poligono.dibujar(context);
}
    
function cleanCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}