'use strict'
export class Poligono {
    constructor(){
        this.vertices = []
        this.centro;
    }
    dibujar(context){
        // for (let i = 0 ; i < this.vertices.length; i++){
        //     context.beginPath();
        //     let anterior = this.vertices[i]
        //     context.moveTo(anterior.getX(), anterior.getY());
        //     context.lineTo(x,y);
        //     context.stroke();
        //     context.closePath();
        // }
    }
    getX(){
        return this.centro;
    }
    setCentro(centro){
        this.centro = centro;
    }
    addVertice(c){
        this.vertices.push(c);
    }
    getVertices(){
        return this.vertices;
    }
    getUltimo(){
        return this.vertices[this.vertices.length-1];
    }
}