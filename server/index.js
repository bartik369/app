const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors');
const DeviceModel = require('./modules/Device')
// MONGO SCHEME

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://zzc0de:PfrhsnsqL0cneg@digitalcluster.chauh.mongodb.net/devices?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get('/', (req, res) => {

})

const start = async() => {
    try {
        app.listen(5001, () => console.log('The server started on 50001 port'))
    } catch (error) {
        console.log(error)
    }
}
start()