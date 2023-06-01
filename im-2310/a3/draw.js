// This creates a canvas and calls to the ID(which is the canvas) declared in the html 
const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext('2d');

// calls to the colour picker and size picker as well as declaring height and weight of the canvas
const colourPicker = document.getElementById("colour-picker");
const sizePicker= document.getElementById("size-picker");
var canvasBox = canvas.getBoundingClientRect();
canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

//this is a function which allows the window to load the 2d canvas
window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

}


var brushColour = '#0000ff'; //A variable is declared which is called brush colour. The brush colour holds the value of #0000ff
colourPicker.value = brushColour; // the value of the colour depends on the value of the brush colour.
var brushSize = 20; // The variable brushSize is declared with a value of 20
sizePicker.value = brushSize; // value of size depends on the brush size 
var isDrawing = false; // isDrawing is false which prevents drawing to start upon opening site
ctx.lineCap ='round'; // lineCap is round to smoothen jagged edges of the paint drawing


window.addEventListener('resize', function(){ //function which resizes the canvas along with the size of window 
    var tempCanvas = ctx.getImageData(0,0,canvas.width, canvas.height); // grabs value of the window to calculate appropiate size and positioning of canvas upon resizing
    canvasBox = canvas.getBoundingClientRect();
    canvas.width = canvas.parentElement.clientWidth; // The width of canvas is resized 
    canvas.height = canvas.parentElement.clientHeight; //The height of canvas is resized
    ctx.putImageData(tempCanvas, 0, 0); 

});

const mouse = {  // enables the mouse thought, x and y are yet to be defined
    x: undefined,
    y: undefined
}


canvas.addEventListener('mousedown', function(event){ // this is the function which creates events when pressing mouse down 
ctx.beginPath(); // The begin path is put into mouse down button so that the drawing only occurs when pressing mousebutton 
ctx.fillStyle = brushColour;  // the fill colour is determined by the declared brushColour which is also linked to the colour picker 
ctx.strokeStyle = brushColour; // the stroke colour is also determined by brushColour
ctx.lineWidth = brushSize; // the variable brushSize determines the width of theline
isDrawing = true; // Putting isDrawing on mouse down as true will only enable drawing feature when pressing down



});

window.addEventListener('mouseup', function(event){ //function stops the drawing feature to occur when releasing the mouse button
    if(isDrawing){
        isDrawing= false; 
    }// If isDrawing is true and is drawing, releasing the mouse (mouseup) will stop the isDrawing from occuring, thus stopping the drawing
    


//undoStack.push(ctx,getImageData(0,0,window.innerWidth,window.innerHeight));
//this.document.getElementById("image-canvas").style.maskImage = "url(" + canvas.toDataURL() + ")";


});

canvas.addEventListener('mousemove', function(event){ // function which allows the drawing to follow the moving mouse instead of only on click (mousedown)
    if(isDrawing){ 
    mouse.x = event.x - canvasBox.left; // pthe x and y axis of the mouse can only draw in the scope of the canvas size
    mouse.y = event.y - canvasBox.top; // the values of the mouse positioning of the drawing begins at the top left corner of the canvas
    drawLine(); 
    } 
});

function drawLine(){ // The function drawLine links the shapes together to create a line. Otherwise line will look like seperated circles 
    ctx.lineTo(mouse.x, mouse.y); 
    ctx.stroke(); 
}


colourPicker.addEventListener('input', function(event){ //This enables the input for the colour picker option. 
    brushColour = event.target.value;    // Choosing certain value would change the brushColour. All of this falls under the colour picker        
})
sizePicker.addEventListener('input', function(event){ // This is enables the input for the brush size option
    brushSize = event.target.value; //Choosing certain value would change the brushSize. All of this falls underthe sizePicker input. 
})