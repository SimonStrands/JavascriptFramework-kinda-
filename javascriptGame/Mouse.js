var MXPos, MYPos;
var once = false;
function GetMousePos(MouseEvent){
    if (once == false){document.onmousemove = GetMousePos; once = true;}
    MouseEvent = MouseEvent || window.event;
    if (MouseEvent){
        //0.375 och 0.25 är standard på denna canvas
        MXPos = MouseEvent.pageX * 0.375;
        MYPos = MouseEvent.pageY * 0.25;
    }
}




