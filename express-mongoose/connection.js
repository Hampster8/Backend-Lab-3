const mongoose = require('mongoose');


// connection URL

const databaseURL = 'mongodb+srv://Hamps:Datamus24@cluster0.myb2h.mongodb.net/HKRDatabase?retryWrites=true&w=majority';

async function main() {
    console.log('Connected to database');

    mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });
    const mgDB = mongoose.connection;
    mgDB.on('connected', console.log.bind(console, 'MongoDB & Mongoose connected!'));
}

module.exports = main;