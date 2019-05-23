
// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

// create your donut schema:
const Ingredient = new Schema({
    name: String,
    amount: String,
    donutId: ObjectId
})
// export the Ingredient model with module.exports
module.exports = mongoose.model('Ingredient', Ingredient)
