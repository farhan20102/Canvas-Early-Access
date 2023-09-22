//Variables
const canvas = document.getElementById('drawing-canvas');
const context = canvas.getContext('2d');
const clrButton = document.getElementById('clear-btn');
const saveButton = document.getElementById('save-btn');
const brushSize = document.getElementById('brushSize');
const colorPicker = document.getElementById('colorPicker');
let isDrawing = false;

//Functions
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 100;
context.strokeStyle = colorPicker.value;
context.lineWidth = brushSize.value;
context.lineCap = 'round';

//Function to start drawing
function startDrawing(e) {
    isDrawing = true;
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft + 65, e.clientY - canvas.offsetTop + 20);
}

//Function to draw
function draw(e) {
    if (!isDrawing) {
        return;
    }
    context.lineTo(e.clientX - canvas.offsetLeft + 65, e.clientY - canvas.offsetTop + 20);
    context.stroke();
}

//Function to stop drawing
function stopDrawing() {
    isDrawing = false;
    context.closePath();
}

//Function to clear canvas
function clrCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

//Function to change colour
function changeColour() {
    context.strokeStyle = colorPicker.value;
}

//Function to change brush size
function changeBrushSize() {
    context.lineWidth = brushSize.value;
}

//Function o save canvas
function saveCanvas() {
    const image = canvas.toDataURL('image/png')
    const link = document.createElement('a');
    link.href = image;
    link.download = 'drawing.png';
    link.click();
}

//Event Listener
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', stopDrawing)
canvas.addEventListener('mouseout', stopDrawing)
clrButton.addEventListener('click', clrCanvas)
saveButton.addEventListener('click', saveCanvas)
brushSize.addEventListener('input', changeBrushSize)
colorPicker.addEventListener('input', changeColour)