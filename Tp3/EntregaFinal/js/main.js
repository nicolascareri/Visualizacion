/* FALTA FIXEAR DESPUÉS DE PERDER, VOLVER A COMENZAR */







'use strict';
import {Juego} from "./juego.js";

// const CLASSES = {
//     'PJ_STOP': "oldman",
//     'BACKGROUND': "background",
//     'MIDDLEGROUND': "middle-background",
//     'FRONTGROUND': "front-background",
//     'OBSTACLE_STOP': "obstaculo",
//     'PJ_RUN': "imp",
//     "PJ_JUMP": "saltar"
// }

let playing = false;
let idRequest;
let juego = new Juego();

onkeypress = () => {
    if(event.code == "Enter"){
        if(!playing){
            start();
        }
    }
    
}  

function start(){
    juego.ocultarIntrucciones();
    juego.empezarJuego();
    onclick = () => {
        juego.saltarPersonaje();
    } 
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
        juego.mostrarInstrucciones();
        cancelAnimationFrame(idRequest);
    }
}


