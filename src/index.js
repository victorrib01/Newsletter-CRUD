const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://rasta:fiap@cluster0.s0okz.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(express.json());
app.use(routes);

app.listen(port, ()=>{
    console.log('App running at: http://localhost:'+ port);
});
