const express = require('express');
const router = require('./router');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;
//localhost:4000
app.use(router) 






app.listen(PORT, () => {console.log(`Server is running on port ${PORT} `);});
