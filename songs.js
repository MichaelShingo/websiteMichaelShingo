const Datastore = require('nedb');
const database = new Datastore('database.db');
const SOLO = 'Solo Violin';
const CELLO = 'Violin and Cello Duo';
const HARP = 'Violin and Harp Duo';
const PIANO = 'Violin and Piano Duo';
database.loadDatabase();
// database.insert({title: 'Perfect', artistFirst: 'Ed', artistLast: 'Sheeran', genre: 'Pop', ensemble: [SOLO, CELLO, HARP, PIANO]});
// database.insert({title: 'Canon in D', artistFirst: 'Johann', artistLast: 'Pachelbel', genre: 'Classical', ensemble: [SOLO, CELLO, HARP, PIANO]});
// database.insert({title: 'Spring from the Four Seasons', artistFirst: 'Antonio', artistLast: 'Vivaldi', genre: 'Classical', ensemble: [SOLO, CELLO, PIANO]});
// database.insert({title: 'Eine Kleine', artistFirst: 'Wolfgang Amadeus', artistLast: 'Mozart', genre: 'Classical', ensemble: [SOLO, CELLO]});

dataList = database.getAllData;
dataList.foreach(entry => console.log(entry));



