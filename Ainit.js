// mongoose
const mongoose = require('mongoose');

// Agent data
const Agent = require('./models/agent.js');

main()
.then( () => {initializeAgents()} )
.catch( err => console.log(err) );
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Mapster');
    console.log("Connected to MongoDB");
}



let MunicipalAgents = [
    { AgentId: "AG001", Status: "Free" },
    { AgentId: "AG002", Status: "Free" },
    { AgentId: "AG005", Status: "Pending" },
    { AgentId: "AG006", Status: "Pending" },
    { AgentId: "AG007", Status: "True" },
    { AgentId: "AG008", Status: "True" },
    { AgentId: "AG009", Status: "False" },
    { AgentId: "AG010", Status: "False" }
];


Agent.insertMany(MunicipalAgents);

