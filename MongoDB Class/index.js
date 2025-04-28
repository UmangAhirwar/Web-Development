const mongoose = require('mongoose');

main()
.then( () => {console.log("Connection successful")} )
.catch((err) =>{console.log(err)});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

// .then(res =>{console.log(res)})
// .catch(err =>{console.log(err)});



User.find({})
.then(res =>{console.log(res)})
.catch(err =>{console.log(err)});

User.updateOne({name: "Vinay"}, {age: 22})
.then(res =>{console.log(res)})
.catch(err =>{console.log(err)});