const express = require('express'); //no filepath needed b/c installed in node_modules
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev')); //log using dev version so more info displayed on screen
app.use(bodyParser.json()); //middleware that parses json formatted data into properties of the request object to make it easier to access the data

app.use('/campsites', campsiteRouter);

app.use(express.static(__dirname + '/public')); //__dirname is special variable in Node = absolute path of the current directory of the file it is in

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
