'use strict';
import {Juego} from "./juego.js";

let playing = false;
let idRequest;
let intervalScore = 0;
let juego = new Juego();

onclick = () => {
        if(!playing){
            start();
        }
        else if (playing && !juego.isPjJumping()){
            juego.saltarPersonaje();
        }
}
onkeypress = () => {

    if(event.code == "Enter"){
        if(!playing){
            start();
        }
    }

}   
onkeydown = () => {
    if(event.code == "Space" || event.code == "ArrowUp"){
        if(playing && !juego.isPjJumping()){
            juego.saltarPersonaje();
        }
    }
};  
function start(){
    let score = 0;
    intervalScore = setInterval( () => {
       score++;
       juego.actualizarPuntuacion(score);
    } , 10);
    playing = true;
    juego.ocultarIntrucciones();
    juego.empezarJuego();
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
        clearInterval(intervalScore);
    }
}


