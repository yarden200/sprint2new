'use strict'

var gImgs = [
    { id: '2', url: 'imgs/2.jpg', keywords: ['happy'] }
];


var gMeme = {
    selectedImgId: '2',
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        },
    ]
}

function drawImg(imgId) {
    var imgUrl=getImgUrlById(imgId)
    var img = new Image()
    img.src = imgUrl
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function drawText(txt, x, y) {
    debugger
    gCtx.font = '48px IMPACT';
    gCtx.fillStyle = 'black';
    gCtx.fillText(txt, x, y);
}

function getImgUrlById(imgId) {
    var img = getImgById(imgId);
    return img.url
}

function getImgById(imgId) {
    var img = gImgs.find(function (img) {
        return imgId === img.id
    })
    return img
}





