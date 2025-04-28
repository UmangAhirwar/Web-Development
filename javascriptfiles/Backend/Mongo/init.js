const mongoose = require('mongoose');
const Chat = require('./models/chat.js')

main().then(console.log("Connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats = [
    {
        from: "Sam",
        to: "Mickey",
        msg: "lets meet",
        created_at: new Date()
    },
    {
        from: "Samuel",
        to: "John",
        msg: "Arrive early tomorrow",
        created_at: new Date()
    },
    {
        from: "Ajax",
        to: "Ron",
        msg: "Send notes",
        created_at: new Date()
    },
    {
        from: "Mike",
        to: "Paul",
        msg: "I'm late",
        created_at: new Date()
    },
    {
        from: "Nina",
        to: "Raquel",
        msg: "Why not?",
        created_at: new Date()
    },
];

Chat.insertMany(chats);