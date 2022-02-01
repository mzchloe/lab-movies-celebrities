//  Iteration 5 
const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String
    },
    genre: {
        type: String
    }, 
    plot: {
        type: String
    },
    cast: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: 'Celebrity',
    }
})

//export the model
module.exports = mongoose.model('Movies', movieSchema)