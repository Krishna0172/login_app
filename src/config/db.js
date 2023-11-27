const  mongoose  = require('mongoose');
require('dotenv').config();
const {MONGODB_URI} = process.env;
const connectToDB = async()=>{
    try{
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser : true,
            useUnifiedTopology : true}
            )
            console.log('Connected to database')
    }
    catch(error){
        console.log(error);
    }
}

connectToDB();