const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Song = require('./models/song');
const websiteName = 'Michael Shingo Crawford';
const contentPageObject =  { title: `Bio | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76' }
const csv = require('csv-parser');
const fs = require('fs');
const bodyParser = require('body-parser');

// TODO encrypt mongoDB URI

//TODO DESIGN
//add coding to front page video, rethink the "story" of the page 
//populate song list completely, figure out misisng characters



// TODO improve footer mobile resposive
// TODO improve form mobile responsive (radios clash )
//Forms should check for required fields and show message if not filed out 
//Add more reviews and limit to a certain number of characters, so it doesn't affect page layout 


// TODO later songlist sort, select songs and populate contact form

function csvToJSON() { //this is missing 2 entries? 149 documents inserted into MONGO
    const results = [];
    fs.createReadStream('allSongExcel.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            for (let i = 0; i < results.length - 1; i++) {
                results[i]['ensemble'] = results[i]['ensemble'].split(' ');
                if (results[i]['popular'] === 't') {
                    results[i]['popular'] = true;

                } else { 
                    results[i]['popular'] = false;
                }

                const song = new Song(results[i]);
                song.save()
                    .then((result) => {
                        console.log(result);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                //console.log(results[i]['ensemble'].split(' '));
            }
            console.log(results);
        });
}


// express app
const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://michaelShingo:OGiMhz9tlFHOQyut@personalwebsite.b8q1eel.mongodb.net/personalWebsite?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        app.listen(5500)
        //csvToJSON();
    })
    .catch((err) => console.log(err));

app.set('view engine', 'ejs'); //register view engine
app.use(express.static('public')); //defines location of static files , otherwise no links will work 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// listen for requests

app.get('/', (req, res,) => {
    res.render('index', { title: `Home | ${websiteName}`, logoTextVisibility: 'hidden', navColor: '#88ab76d8', displayValue: 'none' });
});

app.get('/index', (req, res) => {
    res.render('index', { title: `Home | ${websiteName}`, logoTextVisibility: 'hidden', navColor: '#88ab76d8', displayValue: 'none' });
});

app.get('/biography', (req, res) => {
    res.render('biography', { title: `Bio | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76' , displayValue: 'inline'});
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio', { title: `Portfolio | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', displayValue: 'inline' });
});

app.get('/violinist', (req, res) => {
    res.render('violinist', { title: `Violinist | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', displayValue: 'inline' });
})
app.get('/lessons', (req, res) => {
    res.render('lessons', { title: `Lessons | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', displayValue: 'inline' });
})

app.get('/contact', (req, res) => {
    res.render('contact', { title: `Contact | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', displayValue: 'inline' });
})

app.get('/songs', (req, res) => {
    let songQuery = []
    Song.find()
        .sort('title')
        .then((result) => {
            songQuery = result;
            songCount = songQuery.length
            res.render('songs', { title: `Song List | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', allSongs: songQuery, songCount, displayValue: 'inline'});
        });

})

app.post('/songs', (req, res) => {
    let songQuery = [];
    songCount = 0;
    let searchTerm = req.body['search-song']
    Song.find({$text: {$search: searchTerm}})
    .sort('title')
    .then((result) => {
        songQuery = result;
        songCount = songQuery.length;
        res.render('songs', { title: `Song List | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', allSongs: songQuery, songCount, displayValue: 'inline'});

    });

})

app.get('/v', (req, res) => {
    let songQuery = []
    Song.find(
        { ensemble: 'v'}
    )
    .sort('title')
    .then((result) => {
        songQuery = result;
        songCount = songQuery.length
        res.render('songs', { title: `Song List | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', allSongs: songQuery, songCount, displayValue: 'inline' });
    })
});

app.get('/vc', (req, res) => {
    let songQuery = []
    Song.find(
        { ensemble: 'vc'}
    )
    .sort('title')
    .then((result) => {
        songQuery = result;
        songCount = songQuery.length
        res.render('songs', { title: `Song List | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', allSongs: songQuery, songCount, displayValue: 'inline' });
    })
});

app.get('/vp', (req, res) => {
    let songQuery = []
    Song.find(
        { ensemble: 'vp'}
    )
    .sort('title')
    .then((result) => {
        songQuery = result;
        songCount = songQuery.length
        res.render('songs', { title: `Song List | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', allSongs: songQuery, songCount, displayValue: 'inline' });
    })
});

app.get('/vh', (req, res) => {
    let songQuery = []
    Song.find(
        { ensemble: 'vh'}
    )
    .sort('title')
    .then((result) => {
        songQuery = result;
        songCount = songQuery.length
        res.render('songs', { title: `Song List | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', allSongs: songQuery, songCount , displayValue: 'inline'});
    })
    
});


// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./404.html', { root: __dirname});
});