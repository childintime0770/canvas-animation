const canvas = document.getElementById('circle');
const ctx = canvas.getContext('2d');

let x = 60,
    y = 60,
    radius = 50,
    // 0deg   - 1.5 * Pi,
    // 90deg  - 0   * Pi, 
    // 180deg - 0.5 * Pi, 
    // 270deg - 1   * Pi
    angleStart = 1.5 * Math.PI,
    points = 1.5
    

//Create gradient
var gradient = ctx.createLinearGradient(0,500,0, 0);
gradient.addColorStop(0, '#59C2FF');
gradient.addColorStop(1, '#FFDF40');


//Draw circle
ctx.beginPath();
ctx.arc(x, x, radius, 0, 2*Math.PI, false);
ctx.lineWidth = 10;
ctx.strokeStyle = 'rgba(200,200,200, 0.2)'
ctx.stroke();

//Draw arc



setInterval(function (){
    if(points<=3){
        let angleEnd = points * Math.PI;
        ctx.beginPath();
        ctx.arc(x, y, radius, angleStart, angleEnd);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.stroke();

        points+=0.01
    }
}, 10)

