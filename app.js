import express from 'express';
import MongooseService from './middlewares/mongoose.js';
import cors from 'cors'

import users from './controllers/users/router.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

async function Connect() {
    const connect = await MongooseService();
    return connect;
}

  // routes
app.use('/user', users);


app.listen(PORT, async () => {
    await Connect()
  
    console.log(`Server is listening on port ${PORT}.`);
    console.log(`Server is connecting to db: ${ process.env.NODE_ENV==='test'? process.env.MONGODBTEST : process.env.MONGODB}.`);
});

export default app