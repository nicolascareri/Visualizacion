'use strict'
export class Circle {
    constructor(radio, x, y, color){
        this.radio = radio;
        this.posX = x;
        this.posY = y;
        this.color = color;
    }
    dibujar(context){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color = color;
    }
    getX(){
        return this.posX;
    }
    getY(){
        return this.posY;
    }
}