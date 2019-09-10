'use strict';
import { Circle } from "./circle.js";
export class Line {
    constructor(vertice1, vertice2){
        this.v1 = vertice1;
        this.v2 = vertice2;
    }
    dibujar(context){
        context.beginPath();
        context.moveTo(this.v1.getX(), this.v1.getY());
        context.lineTo(this.v2.getX(), this.v2.getY());
        context.stroke();
        context.closePath();
    }
}