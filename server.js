const express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('<!DOCTYPE html> <html lang="en" <head><link rel="stylesheet" href= <title>Document</title> </head> <body> <h1>Hola mundo</h1> <body></html>');

});

/*app.get('/person/:id', (req, res) => {
    res.render('person', { ID: req.params.id, qstr: req.query.qstr });
}); */
app.get('/persons/:id', (req, res) => {
    res.render('persons', { ID: req.params.id, message: req.query.message, time: req.query.time });
});



app.listen(PORT);