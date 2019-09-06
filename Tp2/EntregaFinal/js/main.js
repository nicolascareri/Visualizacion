'use strict';
import {Circle} from "./circle.js";
import {Poligono} from "./poligono.js";

let canvas = document.getElementsByClassName("can")[0];
let context = canvas.getContext('2d');
let cerrarPol = document.getElementsByClassName("cerrar")[0];
let clean = document.getElementsByClassName("clean")[0];
let hasPol = false;
let poligono;

clean.addEventListener("click", cleanCanvas);
cerrarPol.addEventListener("click", cerrar);
canvas.addEventListener("click", dibujar);

function dibujar(){
    if(!hasPol){
        poligono = new Poligono();
        hasPol = true;
    }
    var x = event.clientX;
    var y = event.clientY;
    let c = new Circle(10, x, y);
    c.dibujar(context);
    if (poligono.getVertices().length > 0){
        context.beginPath();
        let anterior = poligono.getUltimo();
        context.moveTo(anterior.getX(), anterior.getY());
        context.lineTo(x,y);
        context.stroke();
        context.closePath();
    }
    poligono.addVertice(c);
}
    
function cerrar(){
    if (poligono.getVertices().length > 2){
        let primero = poligono.getVertices()[0];
        let ultimo = poligono.getUltimo();
        context.beginPath();
        context.moveTo(primero.getX(), primero.getY());
        context.lineTo(ultimo.getX(), ultimo.getY());
        context.stroke();
        context.closePath();
        hasPol = false;
    }
}
function cleanCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    poligono = new Poligono();
}