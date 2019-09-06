'use strict'
export class Circle {
    constructor(radio, x, y){
        this.radio = radio;
        this.posX = x;
        this.posY = y;
    }
    dibujar(context){
        context.fillStyle='#FF0000';
        context.beginPath();
        context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }
    getX(){
        return this.posX;
    }
    getY(){
        return this.posY;
    }
}