let inp = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('ul');


btn.addEventListener("click", function(){
    let items = document.createElement('li');
    items.innerText = inp.value;
    list.appendChild(items);
    
    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    items.appendChild(delBtn);
    delBtn.classList.add('delete');

    inp.value="";
});

list.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        console.log("Delete");
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})


// let delBtns = document.querySelectorAll(".delete");
// for(i of delBtns){
//     i.addEventListener("click", function(){
//         let par = delBtns.parentElemtent;
//         par.remove();
//     })
// }
