const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

const router = express.Router();

//load User model
const user = require('../../models/User');

//@ROUTE GET api/users/test
//@DESC tests route
//@ACCESS public
router.get('/test', (req, res) => {
    res.json({msg: "users works"})
});

//@ROUTE GET api/users/register
//@DESC registers user
//@ACCESS public
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user =>{
            if(user){
                return res.status(400).json({email: 'Email already exists'});
            } else {

                const avatar = gravatar.url(req.body.email, {
                    s: '200', //size
                    rating: 'pg', 
                    default: 'mm'
                });

                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar: avatar,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    console.log("step one");
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                                .catch(err => console.log(err));
                            });
                    });
                }
            });  
});

module.exports = router;