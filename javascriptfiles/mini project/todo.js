//Acessing all the elements
let inp = document.querySelector('input');
let add = document.querySelector('button');
let tasks = document.querySelector('ul');

//Adding eventlistener to the add button
add.addEventListener("click", ()=>{
    
    let task = document.createElement('li');
    task.innerText = inp.value;
    tasks.appendChild(task);

    let delBtn = document.createElement('button');
    delBtn.innerText = "Delete"
    task.appendChild(delBtn);
    
    inp.value = "";
})