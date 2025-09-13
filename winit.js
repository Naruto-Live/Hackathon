// mongoose
const mongoose = require('mongoose');

// Worker data
const Worker = require('./models/worker.js');

main()
.then( () => {initializeWorkers()} )
.catch( err => console.log(err) );
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Mapster');
    console.log("Connected to MongoDB");
}



let Workers = [
    { WorkerId: "WK001", Status: "Free" },
    { WorkerId: "WK002", Status: "Free" },
    { WorkerId: "WK003", Status: "Free" },
    { WorkerId: "WK004", Status: "Free" },
    { WorkerId: "WK005", Status: "Pending" },
    { WorkerId: "WK006", Status: "Pending" },
    { WorkerId: "WK007", Status: "True" },
    { WorkerId: "WK008", Status: "True" },
    { WorkerId: "WK009", Status: "False" },
    { WorkerId: "WK010", Status: "False" }
];


Worker.insertMany(Workers);

