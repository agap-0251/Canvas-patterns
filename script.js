const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';  // shows backside
let hue = Math.random() * 360;

let number = 0;
let scale = 15;

function drawFlower() {
    let angle = number * 0.1;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;

    ctx.fillStyle = 'hsl('+ hue +', 100%, 50%)';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 30, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue++; 
}

function animate() {
    
    //ctx.clearRect(0, 0, canvas.width, canvas.height)
    if(number > 500)  return;
    drawFlower();

    requestAnimationFrame(animate);
}

animate();

// 0.7 -- flower, 0.1 --snail, 100-flowerFull
