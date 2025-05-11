// This is basically a mongoose program to run query and fetching the data from the data.js

const mongoose = require('mongoose'); 

const Listing = require('../models/listing.js'); //requiring the model
const initData = require("./data.js"); // requiring generated data


const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust'; // Set the url inside a variable and passed it to the async function main

main() // Main function to check that db is working or not
.then(()=>{
    console.log("Connected to db")
})
.catch((err)=>{
    console.log("Failed:", err);
})

async function main() { // Connecting to the db
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => { //function to run queries

    await Listing.deleteMany({}); // to clear the recent saved sample data 
    console.log("The recent data was deleted");

    for(let item of initData.data){ // To add a default owner value to all the sample listings
        item.owner = "681c3739fd905cbefba41316"
    }

    await Listing.insertMany(initData.data); // inserting the data key from the data.js which is saved in the variable named as initData.
    console.log("Data.js added successfully")
}

initDB();

