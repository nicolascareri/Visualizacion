'use strict'
export class Circle {
    constructor(radio, x, y, color, centro){
        this.radio = radio;
        this.posX = x;
        this.posY = y;
        this.color = color;
        this.esCentro = centro;
    }
    isCentro(){
        return this.esCentro;
    }
    dibujar(context){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }
    esClickeado(x, y){
        return this.radio > Math.sqrt(Math.pow(x - this.posX ,2) + Math.pow(y - this.posY, 2));
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
    setX(x){
        this.posX = x;
    }
    setY(y){
        this.posY = y;
    }
}