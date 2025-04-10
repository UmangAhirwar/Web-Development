const express = require("express");
const app = express();

let port = 2003;

// listen
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});

app.get("/", (req, res)=>{
    res.send("Hello i am route")
});
//parameters in routing
app.get("/:username/:id", (req, res)=>{
    let {username, id} = req.params
    let htmlStr = `<h1> welcome to the page of @${username}${id}`
    res.send(htmlStr);
});
//query
app.get("/search", (req, res)=>{
    console.log(req.query);
    let {q} = req.query;
    res.send(`You tried to search ${q}`);
})