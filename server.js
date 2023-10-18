    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors')
    require('dotenv').config();
    require('./users.model')
    const usersRoute = require('./routes/index.js');

    const port = process.env.PORT || "3001";

    const app = express();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors())
    app.use('/', usersRoute);
    const dbURI = process.env.DB_URI;

    mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Database Connected"))
        .catch((err) => console.log(err));

    mongoose.Promise = global.Promise;
    app.use('/', (req,res) => {
        res.send('Hello from express!!')
    });

    module.exports = app;

    app.listen(port, () => {
        console.log(`Listening to requests on http://localhost:${port}`);
    });