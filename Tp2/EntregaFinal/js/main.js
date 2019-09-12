'use strict';
import {Circle} from "./circle.js";
import {Poligono} from "./poligono.js";

let canvas = document.getElementsByClassName("can")[0];
let context = canvas.getContext('2d');
let dibujarF = document.getElementsByClassName("dibujar")[0];
let cerrarPol = document.getElementsByClassName("cerrar")[0];
let clean = document.getElementsByClassName("clean")[0];
let cancelar = document.getElementsByClassName("cancelar")[0];
let hasPol = false;
let poligono = new Poligono();
let poligonos = [];
let objetoActual = null;
let circuloActual = null;

cancelar.addEventListener("click", function(){
    canvas.onclick = null;
})

cerrarPol.addEventListener("click", function(){
    poligono.cerrar(context);
    poligonos.push(poligono);
    hasPol = false;
});
cancelar.addEventListener("click", function(){
    canvas.removeEventListener("click", dibujar);
});
dibujarF.addEventListener("click", function(){
    canvas.addEventListener("click", dibujar);
});
canvas.addEventListener("click", dibujar);
clean.addEventListener("click", cleanCanvas);

canvas.onmousedown = e => {
    var x = e.layerX;
    var y = e.layerY;
    for(let i = 0 ; i< poligonos.length; i++){
        if(poligonos[i].isCenter(x, y)){
            objetoActual = poligonos[i];
            circuloActual = poligonos[i].getCentro();
            break;
        }
        else{
            let vertices = poligonos[i].getVertices();
            for ( let j = 0 ; j < vertices.length; j++){
                if (vertices[j].esClickeado(x, y)){
                    objetoActual = poligonos[i];
                    circuloActual = vertices[j];
                    break;
                }
            }
        }
    }
}
canvas.ondblclick = e => {
    for(let i = 0 ; i< poligonos.length; i++){
        let vertices = poligonos[i].getVertices();
        for ( let j = 0 ; j < vertices.length; j++){
            if (vertices[j].esClickeado(x, y)){
                objetoActual = poligonos[i];
                circuloActual = vertices[j];
                
                break;
            }
        }
    }   
}
canvas.onmousemove = e => {
    var x = e.clientX;
    var y = e.clientY;
    if(objetoActual!=null){
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (circuloActual.isCentro()){
            for ( let i = 0; i < objetoActual.getVertices().length; i++){
                
                let circulo = objetoActual.getVertices()[i];
                
                let disX = objetoActual.getDistanciaX()[i];
                let disY = objetoActual.getDistanciaY()[i];
                
                let disXActual = objetoActual.getCentro().getX() - circulo.getX();
                let disYActual = objetoActual.getCentro().getY() - circulo.getY();
                
                let diferenciaX = disXActual - disX;
                let diferenciaY = disYActual - disY;
                
                circulo.setX(circulo.getX() + diferenciaX);
                circulo.setY(circulo.getY() + diferenciaY);
            }
            circuloActual.setX(x)
            circuloActual.setY(y);
        }
        else{
            circuloActual.setX(x)
            circuloActual.setY(y);
            let c = objetoActual.calcularCentro(); 
            objetoActual.setCentro(c);
            objetoActual.calcularDistancia();
        }

        poligonos.forEach( p => p.dibujar(context))
    }
}
canvas.onmouseup = e => {
    objetoActual = null;
    circuloActual = null;
}

function dibujar(){
    if(!hasPol){
        poligono = new Poligono();
        hasPol = true;
    }
    var x = event.clientX;
    var y = event.clientY;
    let c = new Circle(10, x, y, 'red', false);
    poligono.addVertice(c);
    poligono.dibujar(context);
}

function cleanCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    poligono = new Poligono();
    poligonos = []
}