const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors')

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

require('./config/db.js');

require('./route.js')(app);

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});