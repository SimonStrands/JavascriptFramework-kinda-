let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const CanvasHeight = canvas.clientHeight;
const CanvasWidth = canvas.clientWidth;

var lastUpdate = Date.now();

function Update(){
    ////////////////////////////////////////////////
    //clear screen + Get Delta time               //
    var now = Date.now();                         //
    var dt = (now - lastUpdate) * 0.01;           //
    lastUpdate = now;                             //
    ctx.clearRect(0,0,CanvasWidth, CanvasHeight); //
    ////////////////////////////////////////////////
    //https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
    document.onmousemove
    
    console.log(GetMousePos());
    Draw();
    //console.log("");
    //Reloop Update
    window.requestAnimationFrame(Update);
}
//ONLY USE KEYBOARD() ONCE!!!
Keyboard();

//Start Update
Update();