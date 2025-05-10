require('dotenv').config(); // To use the environment variables
console.log(process.env); // To check the environment variable
const express = require('express'); //requiring express
const app = express(); // setting up the app method
const mongoose = require('mongoose');// requiring mongoose
const path = require('path'); // requiring the path method
const methodOverride = require('method-override');
express.static(path.join(__dirname, 'public')); // setting the path of public folder for using css and other fiiles
const ejsMate = require("ejs-mate");// requiring ejs mate for css 
const ExpressError = require("./utils/ExpressError.js")//requiring the express error file
const session = require("express-session");
const MongoStore = require("connect-mongo"); // To store the session in the db
var flash = require('connect-flash');  
const User = require("./models/user.js");  // requiring user model
const passport = require("passport");
const LocalStrategy = require("passport-local");

//requiring the routing file for listing
const listingRouter = require("./routes/listing.js")
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';
const dbUrl = process.env.ATLASDB_URL; // Set the url inside a variable and passed it to the async function main

main() // Main function to check that db is working or not
.then(()=>{
    console.log("Connected to db")
})
.catch((err)=>{
    console.log("Failed:", err);
})

async function main() { // Connecting to the db
    await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs"); // To set the view engine
app.set("views", path.join(__dirname, "views")); // To set the path of the view folder
app.use(express.urlencoded({extended: true})); // To parse the url encoded data in the show route or in other routes
app.use(methodOverride("_method"));// To use method override 
app.engine('ejs', ejsMate);//To run ejs mate
app.use(express.static(path.join(__dirname, "/public")));

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET, // secret for encrypting the session
    },
    touchAfter: 24 * 3600,
}); // time in seconds

store.on("error", function(e){
    console.log("Session store error", e);
});

const sessionOptions = {
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}





//using express-sessions
app.use(session(sessionOptions));
app.use(flash());


//Using passport authentication
app.use(passport.initialize());
app.use(passport.session()); // To avoid login again and again while browsing pages
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//Using passport authentication

app.use((req, res, next)=>{ // To access the current data of sessions in ejs files
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});



// using the listings file for routing
app.use("/listings", listingRouter);

//using the reviews file for routing
app.use("/listings/:id/reviews", reviewRouter);

//using the user file for routing
app.use("/", userRouter);

// wrong routes error handling 
app.use((req, res, next) => {

    if (!req.route) { // Check if no route handled this request
      next(new ExpressError(404, "Page not found"));
    }

});

app.use((err, req, res, next)=>{

    let {statusCode, message} = err;
   res.render("listings/error.ejs", {message});

})

//Server execution
app.listen(2003, ()=>{
    
    console.log("Server started")
    
});