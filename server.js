const express = require('express')
const app = express()

const cors = require('cors');

app.use(cors())

require('dotenv').config();



app.use(express.json());
const PORT = process.env.PORT;

const { getApi, addFruit, favFruit, updateFruit, deleteFruit } = require('./controller/controller.fruit');

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruits", { useNewUrlParser: true, useUnifiedTopology: true });
 

app.get('/',
 function (req, res) { 
  res.send('Hello World') 
})

app.get('/api', getApi);
app.post('/addFruit', addFruit);
app.get('/favFruit', favFruit);
app.put('/update/:id', updateFruit);
app.delete('delete/:id', deleteFruit)

app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
})