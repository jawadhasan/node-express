
const express = require('express'); //commonJS pattern
const chalk = require('chalk'); //colorize our log messages
const path = require('path'); //built-in module

const port = process.env.PORT || 18081;
const app = express();

app.use(express.json())
//setup public directory for static contents
app.use(express.static(path.join(__dirname, 'public')));

//routing
var devices = require('./devices')(app);

app.listen(port, function(){
    console.log(`server is listening on port: ${chalk.green(port)}`);
});

