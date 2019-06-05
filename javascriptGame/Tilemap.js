function CreateNewTileMap(name, sprites){
    name.sprite = sprites;
    var x = name.x;
    var y = name.y;
    var width = name.width;
    var height = name.height;
    for (var sx = 0; sx < sprites.length; sx++){
        
        for (var sy = 0; sy < sprites[sx].length; sy++){ 
            //fillrect
            
            var yheight = (sy * height + y)/*/sprites.length*/;
            var xwidth = (sx * width + x )/*/ sprites.length[sx]*/;


            ctx.fillStyle = getTilemapColor(sprites[sx][sy]);
            ctx.fillRect(yheight, xwidth, height, width);
            
        
            
        }
    }
}

function getTilemapColor(Color){
    if(Color == 0){return"rgba(0,0,0,0)";}
    else if(Color == 1){return "black";}
    else if(Color == 2){return "white";}
    else if(Color == 3){return "orange";}
    else if(Color == 4){return "blue";}
    else if(Color == 5){return "yellow";}
    else if(Color == 6){return "red";}
    else if(Color == 7){return "pink";}
    else if(Color == 8){return "purple";}
    else if(Color == 9){return "green";}
    else if(Color == 10){return "gray";}
    else if(Color == 11){return "brown";}
}

var s5 = [
    [0,1,1,0],
    [0,1,1,0],
    [1,1,1,1],
    [1,1,1,1],
    [0,1,1,0],
    [0,1,1,0],
    [0,1,1,0]
];

var s2 = [
    [0,1,0,1,0],
    [1,0,1,0,1],
    [0,1,0,1,0],
    [1,0,1,0,1],
    [0,1,0,1,0],
    [1,0,1,0,1],
    [0,1,0,1,0],
    [1,0,1,0,1],
    [0,1,0,1,0],
    [1,0,1,0,1],
    [0,1,0,1,0],
    [1,0,1,0,1]
          ];
var s1 = [
    [],
    [],
    [],
    []
]

/*function createBackgroundLayer(backgrounds, sprites) {
    const buffer = document.createElement('canvas');
    buffer.width = 256;
    buffer.height = 240;

    backgrounds.forEach(background => {
        drawBackground(background, buffer.getContext('2d'), sprites);
    });

    return function drawBackgroundLayer(context) {
        context.drawImage(buffer, 0, 0);
    };
}*/ 