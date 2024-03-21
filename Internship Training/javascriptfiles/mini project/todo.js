let todo = [];

let req = prompt("Please enter your request");

while(true){
    if(req == "quit"){
        console.log("Quitting the app");
        break;
    }

    else if(req == "add"){
        let task = prompt("Enter the tasks you want to add");
        todo.push(task);
        console.log("Task added");
    }

    else if(req == "list"){
        console.log("-----------------------------------");
        for(i=0; i<length.todo; i++){
            console.log(i, todo[i]);
        }
        console.log("-----------------------------------");     
    }

    else if(req = "delete"){
        let idx = prompt("please enter the task index")
        todo.splice(idx, 1)
    }

    req = prompt("Please enter your request");
    
    
}