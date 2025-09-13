// mongoose
const mongoose = require('mongoose');

// User description
const Munci = require('./models/munci.js');

main()
.then( () => {console.log("Connection Successful")} )
.catch( err => console.log(err) );
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Mapster');
    console.log("Connected to MongoDB");
}



let Muncipal = [
    {
    from: "Jaipur Municipal Corporation",
    locat: "26.8915436,75.8012011",
},
    {
    from: "Eco Wise",
    locat: "28.5333918,77.4533897",
},
    {
    from: "Etco E-Waste Recycler Pvt Ltd",
    locat: "26.943205,75.7729521",
},
    {
    from: "Wastomania Environmental Solution LLP",
    locat: "26.9029837,75.7446592",
}
];

Munci.insertMany(Muncipal);
