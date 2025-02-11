//if you want to change the text 
let paragraph = document.getElementById("description");
paragraph.innerText = "The Paragraph has been changed";
//if you want to access the class elements
let smallImages = document.getElementsByClassName("oldImg");
for(let i = 0; i<smallImages.length; i++){
    console.dir(smallImages[i].src);
}
//query selector
console.dir(document.querySelector("h1").innerText);
console.dir(document.querySelectorAll("img"));