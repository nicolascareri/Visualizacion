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
cerrarPol.addEventListener("click", function(){
    poligono.cerrar(context);
    hasPol = false;
});
canvas.addEventListener("click", dibujar);

function dibujar(){
    if(!hasPol){
        poligono = new Poligono();
        hasPol = true;
    }
    var x = event.clientX;
    var y = event.clientY;
    let c = new Circle(10, x, y, '#FF0000');
    poligono.addVertice(c);
    poligono.dibujar(context);
}
    
function cleanCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    poligono = new Poligono();
}