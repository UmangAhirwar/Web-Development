//setting up--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

//To pass form's data 
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
//For views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Create the connection to database--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Umang@2003",
});

//faker--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//routing--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Home Page
app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) FROM USER";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});
//Adding data
app.get("/user/new", (req, res)=>{
    res.render("new.ejs");
})
app.post("/user", (req, res)=>{
    let {id, username, email, password}=(req.body);
    let q = `INSERT INTO user VALUES ("${id}", "${username}", "${email}", "${password}")`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/user")
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }

})
//User page
app.get("/user", (req, res) =>{
    let q = "SELECT * FROM USER";
    try {
        connection.query(q, (err, users) => {
          if (err) throw err;
          res.render("showuser.ejs", {users})
        });
      } catch (err) {
        console.log(err);
        res.send("Some error in database");
      }
});
//Editing page
app.get("/user/:id/edit", (req, res)=>{
    let {id} = req.params;
    let q = `SELECT * FROM USER WHERE id='${id}'`
    try {
        connection.query(q, (err, result) => {
          if (err) throw err;
          let user = result[0];
          console.log('user:', user);
          res.render("edit.ejs", {user});
        });
      } catch (err) {
        console.log(err);
        res.send("Some error in database");
      }
})
//Updating data
app.patch("/user/:id", (req,res)=>{
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM USER WHERE id='${id}'`
    try {
        connection.query(q, (err, result) => {
          if (err) throw err;
          let user = result[0];
          if(formPass != user.password){
            res.send("Wrong password");
          }
          else{
            let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`
            connection.query(q2, (err, result)=>{
                if (err) throw err;
                res.redirect('/user');
            })
          }
        });
      } catch (err) {
        console.log(err);
        res.send("Some error in database");
      }
});
//Delting user
app.delete("/user/:id",(req, res)=>{
    let {id} = req.params;
    let q = `DELETE FROM USER WHERE id='${id}'`
    try {
        connection.query(q, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      } catch (err) {
        console.log(err);
        res.send("Some error in database");
      }
})
//starting server--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.listen("8080", () => {
  console.log("Server is listening to port 8080");
});
