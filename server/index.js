const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors');
const Device = require('./DB/deviceScheme')

// MONGO SCHEME



app.use(express.json());
app.use(cors());

app.get('/', (req, resp) => {
    resp.send('The App is working');
});

mongoose.connect('mongodb+srv://zzc0de:PfrhsnsqL0cneg@digitalcluster.chauh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        dbName: '',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, error => error ?
    console.log(error) :
    console.log('Connected to DB')
)

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

app.listen(5001, () => console.log('The server was started on 5000 port'))