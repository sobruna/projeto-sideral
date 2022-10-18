const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    role: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('jobs', jobSchema)
