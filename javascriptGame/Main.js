let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const CanvasHeight = canvas.clientHeight;
const CanvasWidth = canvas.clientWidth;

var lastUpdate = Date.now();

var px = 0;
var now = 0,lastUpdate,dt,fps;


function Update(now){
    ////////////////////////////////////////////////
    //clear screen + Get Delta time               //             
    dt = (now - lastUpdate) * 0.01;               //
    fps = (1000 / (dt * 100)).toFixed(2);         //
    lastUpdate = now;                             //
    ctx.clearRect(0,0,CanvasWidth, CanvasHeight); //
    ////////////////////////////////////////////////
    Draw();
    
    newtext(fps, 20, 30, 1, pink);
    //CreateNewTileMap(, Player);
    CreateNewTileMap(Enemy,s5);
    CreateNewTileMap(Fak,s2);
    
    
    //Coliders//
    var ColliderObjects = [];
    //new Collider(Player, ColliderObjects);
    new Collider(Enemy, ColliderObjects);
    new Collider(Fak, ColliderObjects);
    ctx.fillStyle = "red";
    ctx.fillRect(25,35,1,1);
    checkColliders(ColliderObjects);
    ///////////
    
    //Reloop Update
    window.requestAnimationFrame(Update);
    
}
//ONLY CALLED ONCE!!!
Keyboard();     //Use one,two,three,a,b,c,d asf
GetMousePos();  //MXPos, MYPos

//GameObject
var Enemy = new GameObject(20,20,1,1,"Enemy");
var Fak = new GameObject(24,20,2,2,"Fak");
//var Player = new GameObject(1,100,10,10,Player, "Player");

    

//Start Update
Update();