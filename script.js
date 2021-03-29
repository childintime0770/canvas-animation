const canvas = document.getElementById('circle');
const ctx = canvas.getContext('2d');

let x = 250,
    y = 250,
    lineWidth = 50;
    radius = 200,
    percentage = 80;
    maxPoints = 100;
    angle = 0 - Math.PI / 2;
    points = 0;
    colorRatio = 0;

const maxAngle = percentage * (2 * Math.PI) / 100 - Math.PI / 2;
//Draw circle
function drawCircle(ctx) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = 'rgba(200,200,200, 0.2)'
    ctx.stroke();
}

function pickHex(color1, color2, weight) {
    var w1 = weight;
    var w2 = 1 - w1;
    var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)];
    return rgb;
}

drawCircle(ctx);

//Draw arc



console.log(percentage / 100 * 360);
setInterval(function (){
    if(angle <= maxAngle){
        const color = pickHex([87, 193, 255], [18, 112, 226], colorRatio)
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.arc(x + radius * Math.cos(angle), y + radius * Math.sin(angle), lineWidth / 2, 0, 2*Math.PI);
        ctx.fillStyle = 'rgb('+color.join()+')';
        ctx.fill();
        ctx.strokeStyle = 'rgb('+color.join()+')';
        ctx.stroke();
        
        angle += Math.PI / 180;
        colorRatio += 1 / 360 * (percentage / 100);
        
    }
}, 10)

