const express = require('express');
const path = require('path');
const morgan = require('morgan');

// express app

const app = express();

//register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(5500);

app.use(morgan('dev'));

app.get('/', (req, res,) => {
    res.sendFile('./index.html', { root: __dirname });
});

app.get('/song-lists', (req, res) => {
    const blogs = [
        {title: 'Absolutely phenomenal', text: "Michael did an absolutely phenomenal job. I was completely blown away with his playing ability. I had modest expectations when I used this site, but his skill at playing the violin amazed me. I had asked him to learn two music pieces of music and he played them flawlessly. The pieces were multi-instrumental and he wove in-between the melodies which were usually played by different instruments/vocalists. He also writes and plays his own arrangements that I highly recommend!"},
        {title: 'Amazing job!', text: 'Michael and the harpist Rebecca did an amazing job! They were such a highlight and so worth every penny. They made our wedding truly special. They covered such a range of music and my guests are still talking about the LOTR cover! I am so excited to see my wedding video to watch them because unfortunately as the bride, I didn’t get to see the entire performance. All of my guests wondered how I landed such world-class talent at my wedding! Definitely book Michael, cut some other budget expense if you need to, bc you won’t regret it! There is nothing as moving as walking down the aisle to a live violin! I wish I could have a second wedding just to watch them play again!'}

    ]
    res.render('song-lists', {title: 'Song Lists', blogs});
})


app.get('/biography', (req, res) => {
    res.sendFile('./biography.html', { root: __dirname});
});

app.get('/lessons', (req, res) => {
    res.sendFile('./lessons.html', { root: __dirname});
});

app.get('/violin-lessons', (req, res) => {
    res.redirect('/lessons');
});


// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./404.html', { root: __dirname});
});