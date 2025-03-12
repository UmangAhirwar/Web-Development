// "use strict";
// value of this on a global scope
console.log(this); // it will show window object as global object



//value of this inside a function
function x(){
    console.log(this);
}

//when used it in a strict mode it will gives us undefine
//the value of this is replaced by GO in non strict mode(this substitution)

x(); // will gives us undefined in strict mode
// window.x(); // will gives us window object in strict mode



//this inside object's method
const  thiss = {
    a: 10,
    b: function(){
        console.log(this) // refering the object thiss
        console.log(this.a) // refering the key a in the object
    }
}
thiss.b(); // will gives us the object thiss

