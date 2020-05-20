const _ = require('lodash');

module.exports = function (app) {

    //in-memory array
    _devices = [];

    //create
    app.post('/devices', function (req, res) {

        //todo: validation
        _devices.push(req.body);
        res.send({ info: 'device created successfully' });
    });

    //read (GetAll)
    app.get('/devices', function (req, res) {
        res.send(_devices);
    });

    //read (GetById)
    app.get('/devices/:id', function (req, res) {
        res.send(
            _.find(_devices, { name: req.params.id }) //name is being used as id for example
        );
    });

    //Update
    app.put('/devices/:id', function (req, res) {
        let index = _findIndex(_devices, { name: req.params.id });
        _.merge(_devices[index], req.body)
        res.send({ info: 'device updated successfully' });
    });

    //Update
    app.delete('/devices/:id', function (req, res) {

       _.remove(_devices, function(device){
           return device.name === req.params.id;
       });
        res.send({ info: 'device deleted successfully' });
    });

};