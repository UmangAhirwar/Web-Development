const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');

app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//Mongoose code---      

main().then(console.log("Connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


//Mongoose code---



app.get("/", (req, res)=>{
    res.send("root is working")
})

app.get("/chats", async (req, res) => {
  let chats = await Chat.find({});
  console.log(chats);
  res.render("index.ejs", {chats});
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
    let {from, msg, to} = req.body;
    let newChat = new Chat({
      from: from,
      msg: msg,
      to: to,
      created_at: new Date()
    });
    
    newChat
    .save()
    .then(console.log("Record saved"))
    .catch(err => {console.log(err)});

    res.redirect("/chats")
});

app.get("/chats/:id/edit", (req, res)=>{
  let {id} = req.params;
  let chat = Chat.findById(id);
  res.render("edit.ejs");
})

app.put("/chats/:id", async (req, res)=>{
  let {id} = req.params;
  let {msg: newMsg} = req.body
  let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true});
  console.log("Chat updated")
  res.redirect("/chats");
});














































































app.listen(8080, ()=>{
    console.log("Server started")
})