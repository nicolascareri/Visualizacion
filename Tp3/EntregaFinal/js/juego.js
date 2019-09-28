"use strict";

import { Personaje } from "./personaje.js";

export class Juego{
    constructor(oldman, back, middle, front){
        this.back = back;
        this.middle = middle;
        this.front = front;
        this.oldman = oldman;
        this.personaje = new Personaje(oldman);
        this.obstaculo = obstaculo;
        this.interval;
    }
    correrPersonaje(){
        this.personaje.correr();
    }
    saltarPersonaje(){
        this.personaje.saltar();
    }
    empezarJuego(){
        this.back.style.animationPlayState = "running";
        this.middle.style.animationPlayState = "running";
        this.front.style.animationPlayState = "running";
        this.obstaculo.style.animationPlayState = "running";
        this.personaje.correr();

    }

    gameOver(){
        return this.hayColision(this.oldman, this.obstaculo);
    }
    terminar(){
        this.personaje.iddle();
        this.back.style.animationPlayState = "paused";
        this.middle.style.animationPlayState = "paused";
        this.front.style.animationPlayState = "paused";
        this.obstaculo.style.animationPlayState = "paused";
    }
    hayColision(objeto1, objeto2){
        if (objeto1.offsetLeft < objeto2.offsetLeft + objeto2.offsetWidth &&
            objeto1.offsetLeft + objeto1.offsetWidth > objeto2.offsetLeft &&
            objeto1.offsetLeft < objeto2.offsetTop + objeto2.offsetHeight &&
            objeto1.offsetHeight + objeto1.offsetTop > objeto2.offsetTop) {
                
            return true;
        }
        else{
            return false;
        }
    }
}