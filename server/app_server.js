const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./DB');

//const productRoute = require('./routes/product.route');

// connect to mongoDB

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true}).then(() => {
    console.log('Database is connected!'), err => {
        console.log('Can not connect to DB ' + err)
    };
    
});

const app = express();
app.use(bodyParser.json());
app.use(cors);
//app.use('/product', productRoute);
let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening to Port ' + port);
});


