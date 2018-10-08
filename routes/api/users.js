const express = require('express');

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
    User.findone({ email: req.body.email })
        .then(user =>{
            if(user){
                return res.status(400).json({email: 'Email already exists'});
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar: avatar,
                    password: req.body.password
                });

            }
        })
    ;
    
})

module.exports = router;