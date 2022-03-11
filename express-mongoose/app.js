const express = require('express');
const app = express();
const PORT = process.env.PORT || 1338;
const User = require('./User');
const connection = require('./connection');

connection();

// middleware
app.use(express.json()); // lets us work with JSON in backend and frontend


app.post('/user', (req, res) => {
    const data = new User(req-body);
    data.save()
    .then(user => {
        console.log('user saved', user);
        res.json({
            success: true,
            user
        });
    })
    .catch(err => {
        console.log(err);
    });

});


app.listen(PORT, () => {
    console.log('App running on port ' + PORT);
});