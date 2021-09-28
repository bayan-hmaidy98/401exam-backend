const mongoose = require("mongoose"); 

const fruitSchema = new mongoose.Schema ({
    name: String, 
    image: String,
    price: String,
    email: String,
})

const fruitModel = mongoose.model('fruit', fruitSchema)

module.exports = {
    fruitModel
}