import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

async function MongooseService() {
const uri = process.env.MONGODB_URI 
  try {
    await mongoose.connect(uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    console.log("Connect to MongoDB successfully")
  } catch (error) {
    return {
        Error : error.message
    }
  }
}
 

export default  MongooseService 