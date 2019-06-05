//Different color names for put pixel
var black = "black";    //0
var blue = "blue";      //1
var orange = "orange";  //2
var white = "white";    //3
var yellow = "yellow";  //4
var red = "red";        //5
var pink = "pink";      //6
var purple = "purple";  //7
var green = "green";    //8
var gray = "gray";      //9
var brown = "brown";    //10

function Putpixel(xpos, ypos, color){
    ctx.fillStyle = String(color);
    ctx.fillRect(xpos, ypos, 1, 1);
}