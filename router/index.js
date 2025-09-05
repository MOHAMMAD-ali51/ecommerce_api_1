const express = require('express');
const router = express.Router();
const api = require('./api');
//localhost:4000/api/v1
// api route 
router.use ('/api/v1', api);

// route not found use a middleware
router.use('/', (req, res) => {
    return res.status(404).send({success: false, message: "Route not found"});
    
});

module.exports = router;