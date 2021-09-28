const axios = require('axios'); 

const getApi = (req,res) => {
    axios.get('https://fruit-api-301.herokuapp.com/getFruit').then(fruitRes => {res.send(fruitRes.data)})
}

const {fruitModel} = require('../model/model.fruit')

const addFruit = (req,res) => {
    const {title, price, image, email} = req.body;
    const newFruit = new fruitModel ({
        title: title, 
        price: price, 
        image: image,
        email: email
    })

    newFruit.save();
}

const favFruit = (req,res) => {
    const email = req.query.email;
    fruitModel.find({ email: email}, (err,fruit) => err ? res.send(err) : res.send(fruit))
}

const updateFruit = (req, res) => {
    const {id} = req.params;
    const { title, image, price } = req.body;

    fruitModel.findByIdAndUpdate({_id:id}, {title:title, image:image, price:price}, {new: true}, (err, result) => {res.send(result)});
}

const deleteFruit = (req, res) => {
    fruitModel.find({_id:id}, (err, result) => {});
    fruitModel.deleteOne({}, (err, result) => {res.send(result)});
}

module.exports = {
    getApi,
    addFruit,
    favFruit,
    updateFruit,
    deleteFruit
}