
var express = require('express'); //commonJS pattern
var chalk = require('chalk'); //colorize our log messages
var path = require('path'); //built-in module

//var debug = require('debug')('server');// package install req. //instead of cosole.log //also, we tell it we are in server
//var morgan = require("morgan"); //log we traffic, package should be installed as well.

const port = 3000;
var app = express();

//setup public directory for static contents
app.use(express.static(path.join(__dirname, 'public')));

//serving up from node_modules folder
// app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
// app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
// app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));


//app.use(morgan('combined')); //middleware morgan // or use 'tiny' instead of combined

app.get('/', function(req, res){
    //res.send('Hello world');
    //res.sendFile(path.join(__dirname, 'public/index.html')); // __dirname is location of current executable
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // another way
});


app.listen(port, function(){
    console.log(`server is listening on port: ${chalk.green(port)}`);
    //debug('message goes here');
});



// http.createServer(function(req,res){
//     res.writeHead(200, {'content-type': 'text/plain'});
//     res.end('Hello world\n');    
// }).listen(port, ()=>{
//     console.log(`server is listening on port: ${port}`);
// });