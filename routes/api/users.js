const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

const router = express.Router();

//load User model
const User = require('../../models/User');

//@ROUTE GET api/users/test
//@DESC tests route 
//@ACCESS public
router.get('/test', (req, res) => {
    res.json({msg: "users works"})
});

//test, because something is weird down below
router.post('/test2', (req, res) => {
    res.json({msg: "this works"})
});
//@ROUTE GET api/users/register
//@DESC registers user
//@ACCESS public

//testing a simpler version
//working... kind of
router.post('/register2', (req, res) => {

//SO THIS IS WHERE THE PROBLEM IS: probably not connecting to Mongo properly to run findOne
//-------------------------------------------------------------------------------
  User.findOne({ email: req.body.email })
        .then(user =>{
            if(user){
                console.log(user);
                //so we have to put things in the database to test a duplicate first,
               return res.status(400).json({email: 'Email already exists'});
            } else {*/
                console.log("no user found");
                 console.log(req.body);
//----------------------------------------------------------------------------------
    const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
            bcrypt.genSalt(10, (err, salt) => {
                    console.log("step one successful");
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        console.log("step two successful");
                        newUser.password = hash;
                newUser.save(console.log("saved"))
                    .then(res.json(newUser));
    
                        
                    
                    });
            });
        });
//})
             
                
router.post('/register', (req, res) =>  {
    User.findOne({ email: req.body.email })
        .then(user =>{
            if(user){
                return res.status(400).json({email: 'Email already exists'});
            } else {

                const avatar = gravatar.url(req.body.email, {
                    s: '200', //size
                    r: 'pg', 
                    d: 'mm'
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