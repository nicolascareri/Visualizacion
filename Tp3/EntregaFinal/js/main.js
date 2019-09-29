/* FALTA FIXEAR DESPUÉS DE PERDER, VOLVER A COMENZAR */







'use strict';
import {Juego} from "./juego.js";

const CLASSES = {
    'PJ_STOP': "oldman",
    'BACKGROUND': "background",
    'MIDDLEGROUND': "middle-background",
    'FRONTGROUND': "front-background",
    'OBSTACLE_STOP': "obstaculo",
    'PJ_RUN': "imp",
    "PJ_JUMP": "saltar"
}


let oldman = document.getElementById("oldman");
let back = document.getElementsByClassName("background")[0];
let middle = document.getElementsByClassName("middle-background")[0];
let front = document.getElementsByClassName("front-background")[0];
let obstaculo = document.getElementById("obstaculo");
let enter = document.getElementById("screen");

let idRequest;
let playing = false;

// console.log(back); q
let juego = new Juego(oldman, back, middle, front, obstaculo, enter);

onkeypress = () => {
    if(event.code == "Enter"){
        if(!playing){
            start();
        }
    }
    
}  

function start(){
    playing = true;
    enter.hidden = true;    
    juego.empezarJuego();
    onkeydown = () => {
        if(event.code == "Space" || event.code == "ArrowUp"){
            juego.saltarPersonaje();
        }
    };  
    idRequest = requestAnimationFrame( () => {
        gameLoop(juego);
    });
}
function gameLoop(juego){
    
    if(!juego.gameOver()){
        requestAnimationFrame(() => {
            gameLoop(juego);
        })
    }
    else{
        playing = false;
        juego.terminar();
        enter.hidden = false;
        cancelAnimationFrame(idRequest);
    }
}


