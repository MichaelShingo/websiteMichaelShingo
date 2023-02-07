const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Song = require('./models/song');
const websiteName = 'Michael Shingo Crawford';
const contentPageObject =  { title: `Bio | ${websiteName}`, logoTextVisibility: 'visible', navColor: '#88AB76' }
// express app

const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://michaelShingo:OGiMhz9tlFHOQyut@personalwebsite.b8q1eel.mongodb.net/personalWebsite?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(5500))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

// listen for requests


app.use(express.static('public')); //defines location of static files , otherwise no links will work 

app.use(morgan('dev'));

// mongoose tests
app.get('/add-song', (req, res) => {
    const song = new Song({
        title: 'Perfect',
        firstName: 'Ed',
        lastName: 'Sheeran',
        genre: 'Pop',
        ensemble: ['v', 'vc', 'vp', 'vh']
    });
    song.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
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
    res.render('biography', contentPageObject);
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio', contentPageObject);
});

app.get('/violinist', (req, res) => {
    res.render('violinist', contentPageObject);
})
app.get('/lessons', (req, res) => {
    res.render('lessons', contentPageObject);
})

app.get('/contact', (req, res) => {
    res.render('contact', contentPageObject);
})





app.get('/song-lists', (req, res) => {
    Song.find()
        .then((result) => {

        })
        .catch((err) => {
            console.log(err);
        })
    const blogs = [
        {title: 'Absolutely phenomenal', text: "Michael did an absolutely phenomenal job. I was completely blown away with his playing ability. I had modest expectations when I used this site, but his skill at playing the violin amazed me. I had asked him to learn two music pieces of music and he played them flawlessly. The pieces were multi-instrumental and he wove in-between the melodies which were usually played by different instruments/vocalists. He also writes and plays his own arrangements that I highly recommend!"},
        {title: 'Amazing job!', text: 'Michael and the harpist Rebecca did an amazing job! They were such a highlight and so worth every penny. They made our wedding truly special. They covered such a range of music and my guests are still talking about the LOTR cover! I am so excited to see my wedding video to watch them because unfortunately as the bride, I didn’t get to see the entire performance. All of my guests wondered how I landed such world-class talent at my wedding! Definitely book Michael, cut some other budget expense if you need to, bc you won’t regret it! There is nothing as moving as walking down the aisle to a live violin! I wish I could have a second wedding just to watch them play again!'}

    ]
    res.render('song-lists', {title: 'Song Lists', blogs});
})






// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./404.html', { root: __dirname});
});