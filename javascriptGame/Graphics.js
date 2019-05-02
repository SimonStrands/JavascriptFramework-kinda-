//Different color names for put pixel
var blue = "blue";
var orange = "orange";
var white = "white";
var yellow = "yellow";
var red = "red";
var pink = "pink";
var purple = "purple";
var black = "black";
var green = "green";
var gray = "gray";
var brown = "brown";

function Putpixel(xpos, ypos, color){
    ctx.fillStyle = String(color);
    ctx.fillRect(xpos, ypos, 1, 1);
}