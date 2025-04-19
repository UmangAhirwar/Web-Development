const express = require('express');
const app = express();
const port = 2003;
app.use(express.urlencoded({extended: true}));

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});

app.get("/register", (req, res) =>{
    let {user, password} = req.query;
    res.send(`Welcome ${user}`);
});

app.post("/register", (req, res) =>{
    console.log(req.body);
    res.send("Standard POST request");
})
