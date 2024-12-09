let btn = document.querySelector('button');
let h3 = document.querySelector('h1');
let div = document.querySelector('div');

btn.addEventListener("click", function(){
    h3.innerText = getRandomColor()
    console.log("color updated")
    div.style.backgroundColor = getRandomColor();
});

function getRandomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}