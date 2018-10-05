const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users.js');
const profile = require('./routes/api/profile.js');
const posts = require('./routes/api/posts.js');

const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB, catch errors
mongoose.connect(db)
.then(() => console.log("mongoDB connected"))
.catch(err => console.log(err));



app.get('/', (req, res) => {
    res.send("Hello");
});

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));