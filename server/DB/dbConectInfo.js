mongoose.connect('mongodb+srv://zzc0de:PfrhsnsqL0cneg@digitalcluster.chauh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        dbName: '',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, error => error ?
    console.log(error) :
    console.log('Connected to DB')
)

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