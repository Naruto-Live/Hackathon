npm init -y :- initialize (package.json)
npm i express
npm i mongoose
npm i ejs
npm install express multer mongoose ejs ( wtf chatgpt for images )
npm install uuid


touch index.js
mongoosejs.com/docs/guide.html

































// mongoose
const mongoose = require('mongoose');

// User description
const Desc = require('./models/user.js');

main()
.then( () => {console.log("Connection Successful")} )
.catch( err => console.log(err) );
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Mapster');
    console.log("Connected to MongoDB");
}


// let Desc1 = new Desc({
//     from: "user1",
//     desc: "There are some garbage in the street. Please clean this ASAP.",
//     created_at: Date.now()
// });


let Description = [
    {
    from: "user1",
    img: "img.png",
    desc: "There are some garbage in the street. Please clean this ASAP.",
    created_at: new Date().toISOString()
},
    {
    from: "user2",
    img: "img.png",
    desc: "Sir!! . There are some garbage in the street. Please clean this ASAP.",
    created_at: new Date().toISOString()
},
    {
    from: "user3",
    img: "img.png",
    desc: "Help me!!",
    created_at: new Date().toISOString()
},
    {
    from: "user4",
    img: "img.png",
    desc: "Please Clean the Street.",
    created_at: new Date().toISOString()
},
    {
    from: "user5",
    img: "img.png",
    desc: "Street is dirty. Please clean it.",
    created_at: new Date().toISOString()
},
    {
    from: "user6",
    img: "img.png",
    desc: "Gutter is full of garbage. Please clean it.",
    created_at: new Date().toISOString()
},
    {
    from: "user7",
    img: "img.png",
    desc: "Sir Please Clean the Gutter.",
    created_at: new Date().toISOString()
},
    {
    from: "user8",
    img: "img.png",
    desc: "New-mission sir ",
    created_at: new Date().toISOString()
},
    {
    from: "user9",
    img: "img.png",
    desc: "Mission 786",
    created_at: new Date().toISOString()
},
    {
    from: "user10",
    img: "img.png",
    desc: "Sir Please Clean the pond.",
    created_at: new Date().toISOString()
}
];

Desc.insertMany(Description);

// Desc1.save()
// .then( (res) => {console.log(res)})
// .catch( (err) => {console.log(err)} );