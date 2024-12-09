function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10);
        if(internetSpeed > 4){
            resolve("Success: The data was resolved");
        }
        else{
            reject("Failed: weak connection");
        }
    });
}
saveToDb("hello world")
    .then(()=>{
        console.log("Data 1");
        return saveToDb("data 2")
    })
    .then(()=>{
        console.log("Data 2 saved")
        return saveToDb("data 3")
    })
    .then(()=>{
        console.log("Data 3 was saved");
    })
    .catch(()=>{
        console.log("Promise was rejected");
    });