const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    empName: {
        type: String,
        require: true
    },
    empEmail: {
        type: String,
        require: true
    },
    empId: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('Emp', empSchema)