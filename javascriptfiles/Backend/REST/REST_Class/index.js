//starting a server
const express = require("express");
const app = express();

const port = 2003;

//to use the folders views, public you need to require the path
const path = require("path")

//set the uuid
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')
app.use(methodOverride('X-HTTP-Method-Override'));
//set the engine for views with ejs and set the location of views folder
app.set("view engine", "ejs");
app.set(path.join(__dirname, "views"))
//to use the public folder
app.use(express.static(path.join(__dirname, "public")));

//to parse the data in url form we need to use the middleware
app.use(express.urlencoded({extended:true}));


let posts = [
    {
        id: uuidv4(),
        username: "Umang",
        content: "I am learning coding"
    },
    {
        id: uuidv4(),
        username: "Vinay",
        content: "I am an employee in civil field"
    },
    {
        id: uuidv4(),
        username: "Pratik",
        content: "I am an electrical engineer"
    }
    
]

app.get("/posts", (req, res) =>{
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
})

app.post("/posts", (req,res)=>{
    let {username, content} = req.body;
    let id = uuidv4()
    posts.push({id, username, content});
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res)=>{
    let { id }= req.params;
    let post = posts.find((p) => id === p.id)
    console.log(post)
    res.render("show.ejs", {post})
})

app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(id);
    res.send("Path request working");
})

app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params;  
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
})

//to indicate the server is started or not
app.listen(port, () => {console.log(`server started on port ${port}`)});