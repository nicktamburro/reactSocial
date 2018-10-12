//importing the node modules we need
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//shortcuts for the api routes
const users = require('./routes/api/users.js');
const profile = require('./routes/api/profile.js');
const posts = require('./routes/api/posts.js');

//we make this mostly just to smooth out code later
const app = express();

//bodyParser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB, catch errors
mongoose.connect(db)
.then(() => console.log("mongoDB connected"))
.catch(err => console.log(err));


//this is for the regular home route, just a test to send hello
app.get('/', (req, res) => {
    res.send("Hello");
});

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server running on port ${port}`));