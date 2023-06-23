if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.MWAPI_KEY;
const path = require('path');
const quote = require('./utils/quote');

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/nothere', (req, res) =>{
    const {name, subject} = req.body;
    res.render('nothere', {name, subject, apiKey,});
});

app.post('/boomer', (req, res) => {
    const {name, subject} = req.body;
    res.render('boomer', {name, subject, apiKey});
});

app.post('/quote', (req, res) =>{
    const {name, subject} = req.body;
    res.render('quote', {name, subject, apiKey, quote});
});

app.listen(port, () => {
    console.log(`Serving app on ${port}`)
});


