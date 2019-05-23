// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection.js');

// create your donut schema:
const DonutSchema = mongoose.Schema({
    //write your schema fields here
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: String,
    price: Number,
    qty: Number
    });


    let Donut = mongoose.model("Donut", DonutSchema);

    // function createDonut(newDonut) {
    //     return DonutCollection.create(newDonut);
    //   }


    // export the donut model with module.exports
module.exports = Donut