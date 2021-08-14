'use strict'

var gImgs = [
    { id: '2', url: 'imgs/2.jpg', keywords: ['happy'] },
    { id: '10', url: 'imgs/10.jpg', keywords: ['happy'] }
];

var gMeme = {
    selectedImgId: null,
    selectedLineIdx: 0,
    lines: [
        {
            isActive: true,
            posX: 10,
            posY: 100,
            txt: 'I never eat Falafel',
            size: 20,
            color: 'white',
            font: 'IMPACT'
        },
        {
            isActive: false,
            posX: 10,
            posY: 400,
            txt: 'Canvas HTML',
            size: 20,
            color: 'white',
            font: 'IMPACT'
        }
    ]
}


function setGMeme(imgId) {
    gMeme.selectedImgId = imgId;
    gMeme.selectedLineIdx = 0;
}

function getGMemeCurrLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}

function changeGMemeFontSize(diff) {
    var line = getGMemeCurrLine()
    if (line.size <= 8 && diff < 0 || line.size >= 100 && diff > 0) return
    else line.size += diff;
}

function moveLine(diff) {
    var line = getGMemeCurrLine()
    if (line.posY === 0 && diff < 0 || line.posY === gElCanvas.height && diff > 0) return
    else line.posY += diff
}

function addTxt(txt) {
    var line = getGMemeCurrLine()
    line.txt = txt
}

function switchLine() {
    var line = getGMemeCurrLine()
    line.isActive = false
    var linseLen = gMeme.lines.length
    if (gMeme.selectedLineIdx + 1 === linseLen) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
    line = getGMemeCurrLine()
    line.isActive = true
}

function changeColor(color) {
    var line = getGMemeCurrLine()
    line.color = color
}

function textAlign(dir) {
    var line = getGMemeCurrLine()
    switch (dir) {
        case 'left':
            line.posX = 10
            break;
        case 'center':
            line.posX = 175
            break;
        case 'right':
            line.posX = 350
            break;
        default:
            break;
    }
}

function changeFont(font){
    var line = getGMemeCurrLine()
    line.font = font
}

function deleteLine() {
    var line = getGMemeCurrLine()
    line.txt = null
}

function addLine() {
    var line = getGMemeCurrLine()
    line.isActive = false
    var newLine = createNewLine()
    gMeme.lines.push(newLine)
    var idx = gMeme.lines.findIndex((line) => {
        return line.isActive === true
    })
    gMeme.selectedLineIdx=idx
}

function createNewLine() {
    return {
        isActive: true,
        posX: 10,
        posY: 245,
        txt: 'New Line',
        size: 20,
        color: 'white',
        font: 'IMPACT'
    }
}





