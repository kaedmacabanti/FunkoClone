const mongoose = require("mongoose");

const connectionParams = {
    useNewUrlParser:true ,
    useUnifiedTopology: true,
}

const uri = 'mongodb+srv://kaedmacabanti:KAEDM20mongodb@cluster1.iyekj4q.mongodb.net/funko_db?retryWrites=true&w=majority' 
const connection = mongoose.connect(uri,connectionParams).then(()=>console.log("connected to cloud")).catch((err)=>console.log(err))

module.exports = connection