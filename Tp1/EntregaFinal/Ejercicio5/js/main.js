"use strict";

let can = document.getElementById("canvas");
let context = can.getContext('2d');
let botonGris = document.getElementById("aplicarGris");
let botonNormal = document.getElementById("aplicarNormal");

let madera = document.getElementsByClassName("madera");
let tela = document.getElementsByClassName("tela");
let cubos = document.getElementsByClassName("cubos");

cubos[0].addEventListener("click", function(){
    image1.src = "images/cubos.jpg"
})

tela[0].addEventListener("click", function(){
    image1.src = "images/linecolors.jpg"
})

madera[0].addEventListener("click", function(){
    image1.src = "images/colors.jpg";
});


let image1 = new Image();
image1.src = "images/linecolors.jpg";

image1.onload = function(){
    can.width = this.width;
    can.height = this.height;
    context.drawImage(this, 0, 0);
    let imageData = context.getImageData(0, 0, this.width, this.height);
    context.putImageData(imageData, 0, 0); 
    botonGris.addEventListener("click", function(){
        aplicarFiltro(imageData);
    });
    let image = this;
    botonNormal.addEventListener("click", function(){
        aplicarNormal(image);
    }); 
}
function cambiarMadera(){
    alert("madera");
}

function aplicarNormal(image){
    context.drawImage(image, 0, 0);
    let imageData = context.getImageData(0, 0, image.width, image.height);
    context.putImageData(imageData, 0, 0);
    
}
function aplicarFiltro(imageData){
    for (let x = 0 ; x < can.width; x++){
        for(let y = 0 ; y < can.height; y++){
            let red = getRed(imageData, x, y);
            let green = getGreen(imageData, x, y);
            let blue = getBlue(imageData, x, y);
            let gris = (red + green+ blue)/3
            setPixel(imageData, x, y, gris, gris, gris, 255);
        }  
    }
    context.putImageData(imageData, 0, 0); 
}
function setPixel(imageData, x, y, r, g, b, a){
    let index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}
function getRed(imageData, x, y){
    let index = (x + y * imageData.width) * 4
    return imageData.data[index+0];
}
function getGreen(imageData, x, y){
    let index = (x + y * imageData.width) * 4
    return imageData.data[index+1];
}
function getBlue(imageData, x, y){
    let index = (x + y * imageData.width) * 4
    return imageData.data[index+2];
}
