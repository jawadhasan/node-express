const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//ejs view-engine
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'ABC Company',
        address: "XYZ street, dusseldorf, Germany",
        web: "http:example.com"
    });
})

app.listen(port, function () {
    console.log(`server is listening on port: ${port}`);
});

  //res.send('Hello World'); //instead of res.end()
       //res.send({title: 'Express demo'}); //or send JSON

