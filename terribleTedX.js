if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const port = 3000;
const apiKey = process.env.MWAPI_KEY;
const path = require('path');

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
})


app.listen(port, () => {
    console.log(`Serving app on ${port}`)
});

// const dictionaryWord = async (arg) => {
//     const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${arg}?key=${apiKey}`);
//     const dicData = await response.json();
//     const word = dicData[0];
//     console.log(word.shortdef[0]);
//     const wordDef = word.shortdef[0];
//     console.log(wordDef);
//     let div = getElementById('merriamWebster');
//     div.innerHTML = `${wordDef}`;
//     return wordDef
// } 

