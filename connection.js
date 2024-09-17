const mongoose = require('mongoose');
async function connection(){
    try{
    let connection = await mongoose.connect("mongodb://localhost:27017/admin");
    console.log("database connnected with MongoDb...")
    }catch(err) {
   console.log(err.message, "error occured ...")
    }
}
module.exports = connection ;