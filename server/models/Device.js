const mongoose = require('mongoose');

const DeviceScheme = new mongoose.Schema({
    deviceType: {
        type: String,
        require: true,
    },
    deviceName: {
        type: String
    },
    deviceNumber: {
        type: String
    },
    userName: {
        type: String,
        require: true,
    },
})

const Device = mongoose.model("DeviceData", DeviceScheme);

module.exports = Device;