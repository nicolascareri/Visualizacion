'use strict';

let can = document.getElementById("canvas");
let context = can.getContext("2d");

let alto = can.height;
let ancho = can.width;

var imageData = context.createImageData(ancho, alto);

for (let x = 0 ; x < ancho; x++){
    for(let y = 0 ; y < alto; y++){
        setPixel(imageData, x, y, x/alto*255, x/alto*255, x/alto*255, 255);
    }  
}

context.putImageData(imageData, 0, 0);

function setPixel(imageData, x, y, r, g, b, a){
    let index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}

