const DeviceScheme = new mongoose.Schema({
    id: {

    },
    deviceName: {
        type: String,
        required: true,
    },
    inventoryNumber: {
        type: String,
        unique: true,
    },
    userName: {
        required: true,
    }
});

const Device = mongoose.model('devices', DeviceScheme);
Device.createIndexes();

module.exports = Device;