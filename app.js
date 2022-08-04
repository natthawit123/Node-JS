const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("visws","./src/views");
app.set("visw engine","ejs")

app.get("/", (req,res) =>{

    res.send('index',{username: 'Natthawt+', customers: ["tag11","tag12","tag13"]});
})

app.listen(port, ()=>{
    debug("Listening on port " + chalk.blue(" : "+port));
})