const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
//Partials template
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = now + 'metodo: ' + req.method + ' url:' + req.url
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err)
            console.log('Unable to append to file');
    });
    next();
});
app.use((req, res, next) => {
    res.render('maintenance.hbs');
})
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})


app.get('/', (req, res) => {
    // res.send('Hello Express');
    // res.send({
    //     'name': 'Luiz',
    //     'Age': 10
    // })
    res.render('index.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website'

    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
})
app.get('/bad', (req, res) => {
    res.send({
        errormessage: 'Error'
    });
})


app.listen(3001, () => {
    console.log('Server is up on port 3001');
});