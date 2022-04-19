const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors');
const DeviceModel = require('./models/Device')


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://zzc0de:PfrhsnsqL0cneg@digitalcluster.chauh.mongodb.net/devices?retryWrites=true&w=majority', {
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
        console.log('Device data has been sent')
        
    } catch (error) {
        console.log(error)
    }
})

const start = async() => {
    try {
        app.listen(5001, () => console.log('The server started on 50001 port'))
    } catch (error) {
        console.log(error)
    }
}
start()