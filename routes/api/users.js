const express = require('express');

const router = express.Router();

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
    
})

module.exports = router;