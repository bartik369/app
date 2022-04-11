const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('bdurl', {
        dbName: '',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, error =>
    ?
    console.log(error) :
    console.log('Connected to DB')
)

const DeviceScheme = new mongoose.Schema({
    id: {

    },
    deviceName: {

    },
    inventoryNumber: {

    },
    userName: {

    }
});

const Device = mongoose.model('devices', DeviceScheme);
Device.createIndexes();



app.use(express.json());
app.use(cors());

app.get('/', (req, resp) => {
    resp.send('The App is working');
});

app.post('/register', async(req, resp) => {
    try {
        const device = new Device(req.body);
        let result = await device.save();
        result = result.toObject()

        if (result) {
            resp.send(req.body);
        }
    } catch (error) {
        resp.send('Something get wrong')
    }
})

app.listen(5000, () => console.log('The server was started on 5000 port'))