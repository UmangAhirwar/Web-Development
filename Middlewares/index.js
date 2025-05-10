const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = (req, res, next)=>{
    let {pass} = req.query;
    if(pass === "2003"){
        next();
    }
    throw new ExpressError(401, "Access denied");
};   

app.get("/api", checkToken, (req, res)=>{
    res.send("data");
})
app.get("/admin", (req, res)=>{
    throw new ExpressError(403, "Access to admin in forbidden");
})

app.use((err, req, res, next)=>{
    let {status = 500, message = "Some error occured"} = err;
    res.status(status).send(message);
})
app.get("/", (req, res)=>{
    res.send("This is route page");
})
app.listen(2003, ()=>{
    console.log("Server started");
})