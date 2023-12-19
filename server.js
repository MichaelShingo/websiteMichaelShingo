const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Song = require('./models/song');
const websiteName = 'Michael Shingo Crawford';
const contentPageObject = {
  title: `Bio | ${websiteName}`,
  logoTextVisibility: 'visible',
  navColor: '#88AB76',
};
const csv = require('csv-parser');
const fs = require('fs');
const bodyParser = require('body-parser');
const csv2 = require('csvtojson');
const moment = require('moment');
const js2xmlparser = require('js2xmlparser');

// TODO encrypt mongoDB URI

//TODO DESIGN
//add coding to front page video, rethink the "story" of the page
//populate song list completely, figure out misisng characters

//SEO
//improve song Lists block on violinists page
//Make biography page more interesting
// TODO improve footer mobile resposive
// add app pages that explain more about the process, maybe include a video
// TODO improve form mobile responsive (radios clash )
//Forms should check for required fields and show message if not filed out
//Add more reviews and limit to a certain number of characters, so it doesn't affect page layout

// TODO later songlist sort, select songs and populate contact form

function csvToJSON2() {
  const results = [];
  csv2()
    .fromFile('allSongExcel.csv')
    .then(function (results) {
      for (let i = 0; i < results.length; i++) {
        results[i]['ensemble'] = results[i]['ensemble'].split(' ');
        if (results[i]['popular'] === 't') {
          results[i]['popular'] = true;
        } else {
          results[i]['popular'] = false;
        }
        console.log(results[i]);
        const song = new Song(results[i]);
        song
          .save()
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
}
function csvToJSON() {
  const results = [];
  fs.createReadStream('allSongExcel.csv')
    .pipe(csv())
    .on('data', (data) => {
      results.push(data);
      // console.log(data);
    })
    .on('end', () => {
      for (let i = 0; i < results.length; i++) {
        results[i]['ensemble'] = results[i]['ensemble'].split(' ');
        if (results[i]['popular'] === 't') {
          results[i]['popular'] = true;
        } else {
          results[i]['popular'] = false;
        }
        //console.log(results[i])
        const song = new Song(results[i]);
        song
          .save()
          .then((result) => {
            //console.log(result);
          })
          .catch((err) => {
            //console.log(err);
          });
        //console.log(results[i]['ensemble'].split(' '));
      }
      //console.log(results);
    });
}

// express app
const app = express();
const PORT = process.env.PORT || 5500;

//connect to mongoDB
const dbURI =
  'mongodb+srv://michaelShingo:OGiMhz9tlFHOQyut@personalwebsite.b8q1eel.mongodb.net/personalWebsite?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.set('trust proxy', true);
    // app.listen(PORT, '10.0.0.79');
    //csvToJSON2();
  })
  .catch((err) => console.log(err));

app.listen(PORT, '0.0.0.0');
app.set('view engine', 'ejs'); //register view engine
app.use(express.static('public')); //defines location of static files , otherwise no links will work
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// listen for requests

app.get('/', (req, res) => {
  res.render('index', {
    title: `${websiteName}`,
    logoTextVisibility: 'hidden',
    navColor: '#88ab76d8',
    displayValue: 'none',
    headerBackColor: 'rgba(255,255,255,0',
  });
});

app.get('/index', (req, res) => {
  res.render('index', {
    title: `${websiteName}`,
    logoTextVisibility: 'hidden',
    navColor: '#88ab76d8',
    displayValue: 'none',
    headerBackColor: 'rgba(255,255,255,0',
  });
});

app.get('/biography', (req, res) => {
  res.render('biography', {
    title: `Bio | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', {
    title: `Portfolio | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/VDML', (req, res) => {
  res.render('VDML', {
    title: `VDML | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/cardmi', (req, res) => {
  res.render('cardmi', {
    title: `CardMi | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/creative-baggage', (req, res) => {
  res.render('creative-baggage', {
    title: `Creative Baggage | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/personal-website', (req, res) => {
  res.render('personal-website', {
    title: `Personal Website | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/bookmi', (req, res) => {
  res.render('bookmi', {
    title: `BookMi | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/cbaiscraper', (req, res) => {
  res.render('cbaiscraper', {
    title: `CB AI Data Processor | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/violintice', (req, res) => {
  res.render('violintice', {
    title: `Violintice | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/panethnic', (req, res) => {
  res.render('panethnic', {
    title: `Panethnic Pourovers | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/miitronome', (req, res) => {
  res.render('miitronome', {
    title: `Miitronome | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/violinist', (req, res) => {
  res.render('violinist', {
    title: `Violinist | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/hire-a-violinist-in-netherlands', (req, res) => {
  res.render('violinistSEO', {
    title: `Hire a Violinist in Netherlands | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/violinistNL', (req, res) => {
  res.render('violinistDutch', {
    title: `Violist | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/wedding-violinist-in-the-netherlands', (req, res) => {
  res.render('weddingViolinist', {
    title: `Violist | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/lessons', (req, res) => {
  res.render('lessons', {
    title: `Lessons | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: `Contact | ${websiteName}`,
    logoTextVisibility: 'visible',
    navColor: '#88AB76',
    displayValue: 'inline',
    headerBackColor: 'rgba(255, 255, 255, .5)',
  });
});

app.get('/songs', (req, res) => {
  let songQuery = [];
  Song.find()
    .sort('title')
    .then((result) => {
      songQuery = result;
      songCount = songQuery.length;
      res.render('songs', {
        title: `Song List | ${websiteName}`,
        logoTextVisibility: 'visible',
        navColor: '#88AB76',
        allSongs: songQuery,
        songCount,
        displayValue: 'inline',
        headerBackColor: 'rgba(255, 255, 255, .5)',
      });
    });
});

app.post('/songs', (req, res) => {
  let songQuery = [];
  songCount = 0;
  let searchTerm = req.body['search-song'];
  Song.find({ $text: { $search: searchTerm } })
    .sort('title')
    .then((result) => {
      songQuery = result;
      songCount = songQuery.length;
      res.render('songs', {
        title: `Song List | ${websiteName}`,
        logoTextVisibility: 'visible',
        navColor: '#88AB76',
        allSongs: songQuery,
        songCount,
        displayValue: 'inline',
        headerBackColor: 'rgba(255, 255, 255, .5)',
      });
    });
});

app.get('/v', (req, res) => {
  let songQuery = [];
  Song.find({ ensemble: 'v' })
    .sort('title')
    .then((result) => {
      songQuery = result;
      songCount = songQuery.length;
      res.render('songs', {
        title: `Song List | ${websiteName}`,
        logoTextVisibility: 'visible',
        navColor: '#88AB76',
        allSongs: songQuery,
        songCount,
        displayValue: 'inline',
        headerBackColor: 'rgba(255, 255, 255, .5)',
      });
    });
});

app.get('/vc', (req, res) => {
  let songQuery = [];
  Song.find({ ensemble: 'vc' })
    .sort('title')
    .then((result) => {
      songQuery = result;
      songCount = songQuery.length;
      res.render('songs', {
        title: `Song List | ${websiteName}`,
        logoTextVisibility: 'visible',
        navColor: '#88AB76',
        allSongs: songQuery,
        songCount,
        displayValue: 'inline',
        headerBackColor: 'rgba(255, 255, 255, .5)',
      });
    });
});

app.get('/vp', (req, res) => {
  let songQuery = [];
  Song.find({ ensemble: 'vp' })
    .sort('title')
    .then((result) => {
      songQuery = result;
      songCount = songQuery.length;
      res.render('songs', {
        title: `Song List | ${websiteName}`,
        logoTextVisibility: 'visible',
        navColor: '#88AB76',
        allSongs: songQuery,
        songCount,
        displayValue: 'inline',
        headerBackColor: 'rgba(255, 255, 255, .5)',
      });
    });
});

app.get('/vh', (req, res) => {
  let songQuery = [];
  Song.find({ ensemble: 'vh' })
    .sort('title')
    .then((result) => {
      songQuery = result;
      songCount = songQuery.length;
      res.render('songs', {
        title: `Song List | ${websiteName}`,
        logoTextVisibility: 'visible',
        navColor: '#88AB76',
        allSongs: songQuery,
        songCount,
        displayValue: 'inline',
        headerBackColor: 'rgba(255, 255, 255, .5)',
      });
    });
});

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname + '/sitemap.xml'));
});

app.get('/1dd82e78f03846c78191108ef835a4a6.txt', (req, res) => {
  res.sendFile(path.join(__dirname + '/1dd82e78f03846c78191108ef835a4a6.txt'));
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./404.html', { root: __dirname });
});
