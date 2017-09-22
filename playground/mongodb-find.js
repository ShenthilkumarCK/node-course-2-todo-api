const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {
    if (err) {
        console.log('Unable to conenct ot MongoDB server');
    }
    console.log('Connected to MongoDB server');
    db.collection('t').find().count().then((count) => {
        console.log(`Todos ${count}`);
        // console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    db.close();
});