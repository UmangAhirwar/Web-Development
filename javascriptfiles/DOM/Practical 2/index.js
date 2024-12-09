// let para = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let btn = document.querySelector('button');

// function changeColor(){
//     this.style.backgroundColor = "blue";
//     console.log(this.innerText);
// }

// para.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// btn.addEventListener("click", changeColor);

let form = document.querySelector("form");
form.addEventListener("submit", function() {
    event.preventDefault();
    let user = document.querySelector('#user');
    console.log(user.value);
    let pass = document.querySelector('#pass');
    console.log(pass.value);
    alert(`Hi ${user.value}, your password is ${pass.value}`);
});