//  Iteration 2 Celebrity Model
const mongoose = require('mongoose')

const celebritySchema = new mongoose.Schema({
    name: {
        type: String
    },
    occupation: {
        type: String
    }, 
    catchPhrase: {
        type: String
    }
})

//export the model
module.exports = mongoose.model('Celebrity', celebritySchema)