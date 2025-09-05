const express = require('express');
const router = express.Router();
//localhost:4000/api/v1
const authRouter = require('./auth');

router.use('/auth',authRouter);


module.exports = router;