const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 3000;
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use('/', routes);

app.listen(port, () => {
    console.log(`Serveur Express écoutant sur le port ${port}`);
});