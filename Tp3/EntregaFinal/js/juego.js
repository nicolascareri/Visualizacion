"use strict";

import { Personaje } from "./personaje.js";

export class Juego{
    constructor(){
        this.back =document.getElementsByClassName("background")[0];;
        this.middle = document.getElementsByClassName("middle-background")[0];
        this.front = document.getElementsByClassName("front-background")[0];
        this.personaje = new Personaje();
        this.obstaculo = document.getElementById("obstaculo"); 
        this.interval;
        this.enter = document.getElementById("screen");;
    }
    isPjDead(){
        return this.personaje.getEstado();
    }
    ocultarIntrucciones(){
        let instruc = document.getElementsByClassName("instructions")[0];
        let enter = document.getElementById("screen");
        instruc.hidden = true;        
        enter.hidden = true;
    }
    mostrarInstrucciones(){
        let instruc = document.getElementsByClassName("instructions")[0];
        let enter = document.getElementById("screen");
        instruc.hidden = false;
        enter.hidden = false;
    }
    matarPJ(){
        this.personaje.setEstado(true);
    }
    revivirPJ(){
        this.personaje.setEstado(false);
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
        setTimeout(() => {this.revivirPJ()}, 1000);
        this.personaje.correr();
    }
    gameOver(){
        return this.hayColision(this.personaje.getHTMLClass(), this.obstaculo) && !this.isPjDead();
    }   
    terminar(){
        this.personaje.iddle();
        this.matarPJ();
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