// Parent function
function init(){
    //variable declaration
    let name = "Umang";
    // Child function
    function displayName(){
        console.log(name);
    }
    //variable updation
    name = "Jagdish";
    //returning function as a value.
    return displayName();
}
console.log(init());