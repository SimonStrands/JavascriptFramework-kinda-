
function Collider(Gameobject,ColliderObjects,TopOffset,RightOffset,BottomOffset,LeftOffset){
    if (TopOffset === undefined) {
        TopOffset = 0;
    }
    if (RightOffset === undefined) {
        RightOffset = 0;
    }
    if (BottomOffset === undefined) {
        BottomOffset = 0;
    }
    if (LeftOffset === undefined) {
        LeftOffset = 0;
    }
        this.Ls = Gameobject.x + LeftOffset;
        this.Ts = Gameobject.y + TopOffset;
        Gameobject.spritex = Gameobject.width * Gameobject.sprite[1].length;
        Gameobject.spritey = Gameobject.height * Gameobject.sprite.length;
        
        //console.log("///");
        //console.log(Gameobject.name);
        //console.log(Gameobject.x);
        //console.log(Gameobject.spritex);
        //console.log(Gameobject.spritex + Gameobject.x);
        //console.log("///");
        //console.log(Gameobject.sprite[1].length);
        //console.log(Gameobject.sprite.length);
        //console.log(Gameobject.sprite);
    
        this.Rs = Gameobject.x + Gameobject.spritex + RightOffset;
        this.Bs = Gameobject.y + Gameobject.spritey + BottomOffset;
        this.name = Gameobject.name;
        this.id = Gameobject.id;
        this.id = Gameobject.id;
        
        ColliderObjects.push(this);
} 



function checkColliders(ColliderObjects){
    //Check every Object for collision
    for(var i = 0; i < ColliderObjects.length; i++){
        for(var p = 0; p < ColliderObjects.length; p++){
            //Rules for Collision
            if(i != p){
                if(ColliderObjects[i].Ls < ColliderObjects[p].Rs && ColliderObjects[i].Rs > ColliderObjects[p].Ls)
                {
                    ctx.fillStyle = "Green";
                    ctx.fillRect(ColliderObjects[i].Ts, ColliderObjects[i].Ls ,ColliderObjects[i].Bs -ColliderObjects[i].Ts, ColliderObjects[i].Rs - ColliderObjects[i].Ls)
                    console.log("collide");
                }
                
            }
       }
   }
}
