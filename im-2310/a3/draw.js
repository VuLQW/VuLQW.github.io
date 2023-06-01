const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext('2d');

const colourPicker = document.getElementById("colour-picker");
const sizePicker= document.getElementById("size-picker");
var canvasBox = canvas.getBoundingClientRect();
canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("scream");
   ctx.drawImage(img, 10, 10);
}


var brushColour = '#0000ff';
colourPicker.value = brushColour;
var brushSize = 20;
sizePicker.value = brushSize;
var isDrawing = false; 
ctx.lineCap ='round';

window.addEventListener('resize', function(){
    var tempCanvas = ctx.getImageData(0,0,canvas.width, canvas.height);
    canvasBox = canvas.getBoundingClientRect();
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    ctx.putImageData(tempCanvas, 0, 0);

});

const mouse = {
    x: undefined,
    y: undefined
}


canvas.addEventListener('mousedown', function(event){
ctx.beginPath();
ctx.fillStyle = brushColour;
ctx.strokeStyle = brushColour;
ctx.lineWidth = brushSize;
isDrawing = true;



});

window.addEventListener('mouseup', function(event){
    if(isDrawing){
        isDrawing= false;
    }
//undoStack.push(ctx,getImageData(0,0,window.innerWidth,window.innerHeight));
//this.document.getElementById("image-canvas").style.maskImage = "url(" + canvas.toDataURL() + ")";


});

canvas.addEventListener('mousemove', function(event){
    if(isDrawing){
    mouse.x = event.x - canvasBox.left;
    mouse.y = event.y - canvasBox.top;
    drawLine(); 
    } 
});

function drawLine(){
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
}


colourPicker.addEventListener('input', function(event){
    brushColour = event.target.value;
})
sizePicker.addEventListener('input', function(event){
    brushSize = event.target.value;
})