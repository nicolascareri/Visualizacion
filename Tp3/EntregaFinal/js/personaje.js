"use strict";
export class Personaje{
    constructor(oldman){ 
        this.oldman = oldman;
    }
    saltar(){
        this.oldman.className = "saltar";     
        setTimeout(() => {oldman.className = "imp";}, 1000);
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