'use strict'

import { Circle } from "./circle.js";
import { Line } from "./line.js";

export class Poligono {
    constructor(){
        this.vertices = []
        this.centro;
    }
    dibujar(context){
        let line;
        if(this.vertices.length > 1){
            for (let i = 0; i < this.vertices.length; i++){
                this.vertices[i].dibujar(context);
                line = new Line(this.vertices[i], this.vertices[i+1]);
                line.dibujar(context);
            }
        }
        else{
            this.vertices[0].dibujar(context);
        }
    }
    cerrar(context){
        if (this.getVertices().length > 2){
            let primero = this.getVertices()[0];
            let ultimo = this.getUltimo();
            context.beginPath();
            context.moveTo(primero.getX(), primero.getY());
            context.lineTo(ultimo.getX(), ultimo.getY());
            context.stroke();
        }


        let x = 0;
        let y = 0;

        for (let i = 0 ; i < this.vertices.length; i++){
            x += this.vertices[i].getX();
            y += this.vertices[i].getY();
        }
        y = y/this.vertices.length;
        x = x/this.vertices.length;
        let c = new Circle(7, x, y, "#008f39");
        this.centro = c;
        c.dibujar(context);
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