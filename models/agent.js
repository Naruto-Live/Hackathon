// Schema
const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
    AgentId: {
        type: String,
        required: true,
        unique: true   // Ensure every AgentId is unique
    },
    Status: {
        type: String,
        required: true,
        enum: ["Free","True", "False", "Pending"]  // Restrict to valid status values
    }
});


const Agent = mongoose.model('Agents' , AgentSchema );

module.exports = Agent;