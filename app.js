const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Song = require('./models/song');
const websiteName = 'Michael Shingo Crawford';
const contentPageObject =  { title: `Bio | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76' }
const csv = require('csv-parser');
const fs = require('fs');


// TODO update biography
// TODO check top bar on index page
// TODO Encrypt email password and create working forms
// TODO encrypt mongoDB URI
// TODO improve footer mobile resposive
// TODO improve form mobile responsive (add dropdown menu)
// TODO song list search, sort, ensemble selection, # of songs display, select songs and populate contact form

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

// listen for requests
app.get('/add-song', (req, res) => {

})

app.get('/all-songs', (req, res) => {
    Song.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/single-song', (req, res) => {
    Song.findById('63e01996038ad942b29950a8')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/', (req, res,) => {
    res.render('index', { title: `Home | ${websiteName}`, logoTextVisibility: 'hidden', navColor: '#88ab76d8' });
});

app.get('/index', (req, res) => {
    res.render('index', { title: `Home | ${websiteName}`, logoTextVisibility: 'hidden', navColor: '#88ab76d8' });
});

app.get('/biography', (req, res) => {
    res.render('biography', { title: `Bio | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76' });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio', { title: `Portfolio | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76' });
});

app.get('/violinist', (req, res) => {
    res.render('violinist', { title: `Violinist | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76' });
})
app.get('/lessons', (req, res) => {
    res.render('lessons', { title: `Lessons | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76' });
})

app.get('/contact', (req, res) => {
    res.render('contact', { title: `Contact | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76' });
})

app.get('/songs', (req, res) => {
    let songQuery = []
    Song.find()
        .sort('title')
        .then((result) => {
            songQuery = result;
            songCount = songQuery.length
            res.render('songs', { title: `Song List | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', allSongs: songQuery, songCount});
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
        res.render('songs', { title: `Song List | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', allSongs: songQuery, songCount });
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
        res.render('songs', { title: `Song List | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', allSongs: songQuery, songCount });
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
        res.render('songs', { title: `Song List | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', allSongs: songQuery, songCount });
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
        res.render('songs', { title: `Song List | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76', allSongs: songQuery, songCount });
    })
    
});





// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./404.html', { root: __dirname});
});