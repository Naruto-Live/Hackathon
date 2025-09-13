// Schema
const mongoose = require('mongoose');

const WorkerSchema = new mongoose.Schema({
    WorkerId: {
        type: String,
        required: true,
        unique: true   // Ensure every WorkerId is unique
    },
    Status: {
        type: String,
        required: true,
        enum: ["Free","True", "False", "Pending"]  // Restrict to valid status values
    }
});


const Worker = mongoose.model('Workers' , WorkerSchema );

module.exports = Worker;