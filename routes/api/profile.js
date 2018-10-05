const express = require('express');

const router = express.Router();

//@ROUTE GET api/profile/test
//@DESC tests route
//@ACCESS public
router.get('/test', (req, res) => {
    res.json({msg: "Profile works"})
});

module.exports = router;