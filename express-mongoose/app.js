const express = require('express');
const app = express();
const PORT = process.env.PORT || 1338;
const User = require('./User');
const connection = require('./connection');

connection();

// middleware
app.use(express.json()); // lets us work with JSON in backend and frontend

app.listen(PORT, () => {
    console.log('App running on port ' + PORT);
});