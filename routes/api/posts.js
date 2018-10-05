const express = require('express');

const router = express.Router();

//@ROUTE GET api/posts/test
//@DESC tests route
//@ACCESS public
router.get('/test', (req, res) => {
    res.json({msg: "Posts works"})
});

module.exports = router;