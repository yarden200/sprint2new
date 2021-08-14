'use strict'

var gElCanvas;
var gCtx;
var gElImg;

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
}

function renderGallery() {
    var strHTML = ``
    gImgs.forEach((img) => {
        strHTML += `<img src="${img.url}" class="gallery-img" onclick="onOpenEditor(this,${img.id})">`
    })

    document.querySelector('.gallery').innerHTML = strHTML;
}

function onOpenEditor(elImg, imgId) {
    setGMeme(imgId);
    gElImg = elImg;
    renderCanvas()
    document.body.classList.toggle('editor-open');
}

function onCloseEditor(){
    document.body.classList.toggle('editor-open');
}




// CANVAS //

function renderCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    drawImgByElImg(gElImg);
    renderLines()
}

function renderLines() {
    gMeme.lines.forEach((line) => drawTextLine(line))
}

function drawImgByElImg(elImg) {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawTextLine(line) {
    if (!line.txt) return
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.fillStyle = `${line.color}`
    gCtx.strokeStyle='black'
    gCtx.fillText(line.txt, line.posX, line.posY)
    gCtx.strokeText(line.txt, line.posX, line.posY)
    if (line.isActive) drawLineBorder(line)
}

function drawLineBorder(line) {
    var lineLen = gCtx.measureText(line.txt).width
    gCtx.strokeStyle = 'grey'
    gCtx.beginPath()
    gCtx.rect(line.posX - 5, line.posY - line.size, lineLen + 10, line.size + 5)
    gCtx.stroke()
}

// EDITOR BTNS //

function onAddText() {
    var txt = document.querySelector('[name=textLine]').value
    if (txt === '') return
    addTxt(txt)
    renderCanvas()
}

function onChangeFontSize(diff) {
    changeGMemeFontSize(diff)
    renderCanvas()
}

function onMoveLine(diff) {
    moveLine(diff)
    renderCanvas()
}

function onSwitchLine() {
    switchLine()
    renderCanvas()
}

function onPickColor(color) {
    changeColor(color)
    renderCanvas()
}

function onTextAlign(dir) {
    textAlign(dir)
    renderCanvas()
}


function onChangeFont(font) {
    changeFont(font)
    renderCanvas()
}


function onDeleteLine() {
    deleteLine()
    renderCanvas()
}

function onAddLine() {
    addLine()
    renderCanvas()
}






