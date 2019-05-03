var MXPos, MYPos;
var once = false;
function GetMousePos(MouseEvent){
    if (once == false){document.onmousemove = GetMousePos; once = true;}
    MouseEvent = MouseEvent || window.event;
    if (MouseEvent){
        MXPos = MouseEvent.screenX;
        MYPos = MouseEvent.screenY;
    }
}




