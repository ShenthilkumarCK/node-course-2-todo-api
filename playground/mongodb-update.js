// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to conenct ot MongoDB server');
    }
    console.log('Connected to MongoDB server');
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59c48de60746de6404165299')
    }, {
        $set: {
            name: 'CKShenthilkumar'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    db.close();
});