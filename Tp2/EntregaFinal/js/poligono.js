'use strict'

import { Circle } from "./circle.js";
import { Line } from "./line.js";

export class Poligono {
    constructor(){
        this.vertices = []
        this.centro = new Circle();
        // this.esPoligono = false;
        this.tieneCentro = false;
        this.distanciaX = [];
        this.distanciaY = [];
    }
    dibujar(context){
        this.dibujarVertices(context);
        this.unirVertices(context); 
        if(this.tieneCentro){
            this.centro.dibujar(context);
        }
    }
    dibujarVertices(context){
        for (let i = 0; i < this.vertices.length; i++){
            this.vertices[i].dibujar(context);
        }
    }
    
    unirVertices(context){
        if(this.vertices.length > 1){
            for (let i = 0; i < this.vertices.length-1; i++){
                this.vertices[i].dibujar(context);
                let line = new Line(this.vertices[i], this.vertices[i+1]);
                line.dibujar(context);
            }

            if (this.tieneCentro){
                let line = new Line(this.vertices[0], this.vertices[this.vertices.length-1])
                line.dibujar(context);
            }
            
        }
    }
    getDistanciaX(){
        return this.distanciaX;
    }
    getDistanciaY(){
        return this.distanciaY;
    }
    isCenter(x, y){
        return this.centro.esClickeado(x, y);
    }
    clickCentro(x, y){
        return this.centro.esClickeado(x, y);
    }
    calcularCentro(context){
        let x = 0;
        let y = 0;
        for (let i = 0 ; i < this.vertices.length; i++){
            x += this.vertices[i].getX();
            y += this.vertices[i].getY();
        }
        y = y/this.vertices.length;
        x = x/this.vertices.length;
        let c = new Circle(7, x, y, "green", true);
        return c;
    }
    calcularDistancia(){
        this.distanciaX = [];
        this.distanciaY = [];
        for (let i = 0; i < this.vertices.length; i++){
            this.distanciaX.push(this.centro.getX() - this.vertices[i].getX())
            this.distanciaY.push(this.centro.getY() - this.vertices[i].getY())
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
        let c = this.calcularCentro(context);
        this.setCentro(c);
        this.centro.dibujar(context);
        this.tieneCentro = true;
        this.calcularDistancia();
    }
    hasCenter(){
        return this.tieneCentro;
    }
    setCentro(centro){
        this.centro = centro;
    }
    getCentro(){
        return this.centro;
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
    esPoligono(){
        return this.vertices.length > 2;
    }
}