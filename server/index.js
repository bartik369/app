const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const DeviceModel = require('./models/Device');
const port = 5001;
const dbUrl = 'mongodb+srv://zzc0de:PfrhsnsqL0cneg@digitalcluster.chauh.mongodb.net/warehouse?retryWrites=true&w=majority'


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
})

app.post('/insert', async (req, res) => {
    const deviceType = req.body.deviceType;
    const deviceName = req.body.deviceName;
    const deviceNumber = req.body.deviceNumber;
    const userName = req.body.userName;

    const device = new DeviceModel({
        deviceType: deviceType,
        deviceName: deviceName,
        deviceNumber: deviceNumber,
        userName: userName,
    })
    try {
        await device.save();
        console.log('Device data has been sent');       
    } catch (error) {
        console.log(`There is the error ${error}` );
    }
})

const start = async() => {
    try {
        app.listen(port, () => console.log('The server is running on 50001 port'))
    } catch (error) {
        console.log(error)
    }
}
start()