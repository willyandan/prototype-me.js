const path = require("path")
const express = require("express")
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const cors = require("cors")
const env = require("../credentials/env.json")
const routes = require("./src/routes/")
const app = express()

// mongoose.connect(env.mongodb_url,{ useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log("Banco conectado com sucesso")
// });

app.use(cors())
app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"../public/")))
// app.use(routes)
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
module.exports = app