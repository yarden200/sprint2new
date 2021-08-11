'use strict'

var gElCanvas;
var gCtx;

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    drawImg('2');
    drawText('Hello',10,50);

}



