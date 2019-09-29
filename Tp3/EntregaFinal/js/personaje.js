"use strict";
export class Personaje{
    constructor(){ 
        this.oldman = document.getElementById("oldman");
        this.estado;
        this.saltando;
    }
    getEstado(){
        return this.estado;
    }
    setEstado(estado){
        this.estado = estado;
    }
    estaSaltando(){
        return this.saltando;
    }
    setSaltando(saltando){
        this.saltando = saltando;
    }
    saltar(){
        this.oldman.className = "saltar";     
        setTimeout(() => {
            oldman.className = "imp";
            this.setSaltando(false);
        }, 1000);
    }
    correr(){
        this.oldman.className = "imp";
    }
    iddle(){
        this.oldman.className = "oldman";
    }
    getHTMLClass(){
        return this.oldman;
    }
}