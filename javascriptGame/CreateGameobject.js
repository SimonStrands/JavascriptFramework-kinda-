var N_ID = 1;
function GameObject(x,y,width,height,name){
    this.x = x;
    this.y = y;
    this.spritex = 1;
    this.spritey = 1;
    this.width = width * this.spritex;
    this.height = height * this.spritey;
    this.sprite = null;
    this.name = name;
    this.id = name + N_ID;
    N_ID++;
}