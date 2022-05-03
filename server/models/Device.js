import mongoose from 'mongoose';

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
    deviceAddTime: {
        type: String,
    },
})

const Device = mongoose.model("DeviceData", DeviceScheme);

export default Device;