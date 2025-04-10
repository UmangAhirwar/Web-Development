const express = require("express");
const app = express();

const port = 2003;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(port, ()=>{
    console.log("Server started on port", port);
});

app.get("/", (req, res)=>{
    res.render("html");
});

app.get("/ig/:username", (req, res) =>{
    const {username} = req.params;
    const data = require("./data.json");
    const instaData = data[username]
    console.log('instaData:', instaData)
    console.log('instaData:', instaData)
    res.render("instagram.ejs", {instaData});
    console.log(instaData.posts);
});

app.get("/dice", (req, res) =>{
    res.render("diceroll");
});

app.get("/random", (req, res) =>{
    let randm = Math.floor(Math.random() * 10) + 1
    res.render("random", {num : randm});
});  
