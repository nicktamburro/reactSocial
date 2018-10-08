const mongoose = require('Mongoose');
const Schema = mongoose.Schema;

//create Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    instruments: {
        type: String,
        required: true
    },
});

module.exports = User = mongoose.model('users', UserSchema);