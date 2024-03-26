let x=0
let y=0
let maxX=570
let maxY=570
let ball=document.getElementById("ball")

function move(){
    ball.style.transform=`translate(${x+"px"},${y+"px"})`
}

move()

setInterval(() => {
    
}, 10);