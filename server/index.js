import express from 'express';
import mongoose from 'mongoose';
const app = express();
import bodyParser from 'body-parser';
import cors from 'cors';
const port = 5001;
import deviceRoutes from './routes/devices.js';
import { updateDevice } from './controllers/devices.js';
const dbUrl = 'mongodb+srv://zzc0de:12345678910@digitalcluster.chauh.mongodb.net/warehouse?retryWrites=true&w=majority'


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Get
app.get('/devices', deviceRoutes);

app.get('/device/:id', deviceRoutes);

// Post
app.post('/insert', deviceRoutes);

//Delete
app.delete('/device/:id', deviceRoutes)

//Update
app.put('/device/:id', updateDevice);

const start = async() => {
    try {
        app.listen(port, () => console.log('The server is running on 5001 port'))
    } catch (error) {
        console.log(error)
    }
}
start()