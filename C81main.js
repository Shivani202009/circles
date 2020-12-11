var canvas= document.getElementById("Mycanvas")

ctx=canvas.getContext("2d")
var colour="green"
var width=3
var mouse_event=""

canvas.addEventListener("mouseup",mu)
function mu(e){
    mouse_event="mouseup"
    console.log("mouse is up")
}

canvas.addEventListener("mouseleave",ml)
function ml(e){
    mouse_event="mouseleave"
    console.log("mouse left")
}

canvas.addEventListener("mousedown",md)
function md(e){
    mouse_event="mousedown"
    console.log("mouse is down")
    lastX=e.clientX-canvas.offsetLeft
    lastY=e.clientY-canvas.offsetTop
}

canvas.addEventListener("mousemove",mm)
function mm(e){
    currentX=e.clientX-canvas.offsetLeft
    currentY=e.clientY-canvas.offsetTop
    if(mouse_event=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=colour
        ctx.lineWidth=width
       ctx.arc(currentX,currentY,50,0,2*Math.PI)
        ctx.stroke()
    }
    lastX=currentX
    lastY=currentY
}
