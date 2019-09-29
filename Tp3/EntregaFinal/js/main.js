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
let intervalScore = 0;
let juego = new Juego();

onkeypress = () => {
    if(event.code == "Enter"){
        if(!playing){
            start();
        }
    }
}  
function start(){
    let score = 0;
    intervalScore = setInterval( () => {
       score++;
       juego.actualizarPuntuacion(score);
    } , 10);
    playing = true;
    juego.ocultarIntrucciones();
    juego.empezarJuego();
    onclick = () => {
        if (playing && !juego.isPjJumping()){
            juego.saltarPersonaje();
        }
    } 
    onkeydown = () => {
        if(event.code == "Space" || event.code == "ArrowUp"){
            if(playing && !juego.isPjJumping()){
                juego.saltarPersonaje();
            }
        }
    };  
    idRequest = requestAnimationFrame( () => {
        gameLoop(juego);
    });
}
function gameLoop(juego){
    // let score = 0;;
    if(!juego.gameOver()){
        requestAnimationFrame(() => {           
            // score++;
            // juego.actualizarPuntuacion(score);
            gameLoop(juego);
        })
    }
    else{
        playing = false;
        juego.terminar();
        juego.mostrarInstrucciones();
        cancelAnimationFrame(idRequest);
        clearInterval(intervalScore);
    }
}


