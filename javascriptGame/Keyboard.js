

function Keyboard(){
//get all the keys
let one = false;
    //two, three, four, five, six, seven, eight, nine, zero, q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m, space = false;
   document.addEventListener('keydown', function(event) {
       if(event.keyCode === 49){
        one = true;
   }
       if(event.keyCode === 50){
        two = true;
   }
       if(event.keyCode === 51){
        three = true;
   }
       if(event.keyCode === 52){
        four = true;
   }
       if(event.keyCode === 53){
        five = true;
   }
       if(event.keyCode === 54){
        six = true;
   }
       if(event.keyCode === 55){
        seven = true;
   }
       if(event.keyCode === 56){
        eight = true;
   }
       if(event.keyCode === 57){
        nine = true;
   }
       if(event.keyCode === 48){
        zero = true;
   }
       if(event.keyCode === 81){
        q = true;
   }
       if(event.keyCode === 87){
        w = true;
   }
       if(event.keyCode === 69){
        e = true;
   }
       if(event.keyCode === 82){
        r = true;
   }
       if(event.keyCode === 84){
        t = true;
   }
       if(event.keyCode === 89){
        y = true;
   }
       if(event.keyCode === 85){
        u = true;
   }
       if(event.keyCode === 73){
        i = true;
   }
       if(event.keyCode === 79){
        o = true;
   }
        if(event.keyCode === 80){
        p = true;
   }
        if(event.keyCode === 65){
        a = true;
   }
        if(event.keyCode === 83){
        s = true;
   }
        if(event.keyCode === 68){
        d = true;
   }
        if(event.keyCode === 70){
        f = true;
   }
        if(event.keyCode === 71){
        g = true;
   }
        if(event.keyCode === 72){
        h = true;
   }
        if(event.keyCode === 74){
        j = true;
   }
        if(event.keyCode === 75){
        k = true;
   }
        if(event.keyCode === 76){
        l = true;
   }
        if(event.keyCode === 90){
        z = true;
   }
        if(event.keyCode === 88){
        x = true;
   }
        if(event.keyCode === 67){
        c = true;
   }
        if(event.keyCode === 86){
        v = true;
   }
        if(event.keyCode === 66){
        b = true;
   }
        if(event.keyCode === 78){
        n = true;
   }
        if(event.keyCode === 77){
        m = true;
   }
        if(event.keyCode === 32){
        space = true;
   }
}); 
    
   document.addEventListener('keyup', function(event) {
       if(event.keyCode === 49){
        one = false;
   }
       if(event.keyCode === 50){
        two = false;
   }
       if(event.keyCode === 51){
        three = false;
   }
       if(event.keyCode === 52){
        four = false;
   }
       if(event.keyCode === 53){
        five = false;
   }
       if(event.keyCode === 54){
        six = false;
   }
       if(event.keyCode === 55){
        seven = false;
   }
       if(event.keyCode === 56){
        eight = false;
   }
       if(event.keyCode === 57){
        nine = false;
   }
       if(event.keyCode === 48){
        zero = false;
   }
       if(event.keyCode === 81){
        q = false;
   }
       if(event.keyCode === 87){
        w = false;
   }
       if(event.keyCode === 69){
        e = false;
   }
       if(event.keyCode === 82){
        r = false;
   }
       if(event.keyCode === 84){
        t = false;
   }
       if(event.keyCode === 89){
        y = false;
   }
       if(event.keyCode === 85){
        u = false;
   }
       if(event.keyCode === 73){
        i = false;
   }
       if(event.keyCode === 79){
        o = false;
   }
        if(event.keyCode === 80){
        p = false;
   }
        if(event.keyCode === 65){
        a = false;
   }
        if(event.keyCode === 83){
        s = false;
   }
        if(event.keyCode === 68){
        d = false;
   }
        if(event.keyCode === 70){
        f = false;
   }
        if(event.keyCode === 71){
        g = false;
   }
        if(event.keyCode === 72){
        h = false;
   }
        if(event.keyCode === 74){
        j = false;
   }
        if(event.keyCode === 75){
        k = false;
   }
        if(event.keyCode === 76){
        l = false;
   }
        if(event.keyCode === 90){
        z = false;
   }
        if(event.keyCode === 88){
        x = false;
   }
        if(event.keyCode === 67){
        c = false;
   }
        if(event.keyCode === 86){
        v = false;
   }
        if(event.keyCode === 66){
        b = false;
   }
        if(event.keyCode === 78){
        n = false;
   }
        if(event.keyCode === 77){
        m = false;
   }
        if(event.keyCode === 32){
        space = false;
   }
}); 
}




