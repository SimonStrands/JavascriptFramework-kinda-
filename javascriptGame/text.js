function newtext(text,x,y,size,color,font){
    if(text === undefined || x === undefined || y=== undefined){
        throw new Error("Something wasn't defined in newtext()");
    }
    if (size === undefined) {
        size = 24;
    }
    if (color === undefined) {
        color = "black";
    }else{String(color)}
    if (font === undefined) {
        font = "Unknown Font, sans-serif";
    }else{String(font)}

    
    ctx.fillStyle = color;
    ctx.font = size + font;  
    ctx.fillText(text, x, y);
}
