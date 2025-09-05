//database configuration function

const { default: mongoose } = require("mongoose");


async function connectDB(){
    const DB_URL = process.env.MONGO_DB_URL;
    mongoose.connect("DB_URL").then(()=>{console.log("database connected")}).catch((err)=>{console.log(err)});
    console.log("DB connected");
 }

// exporting database  function
module.exports = connectDB;
