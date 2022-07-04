const app = require('./app');
require('dotenv').config();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.listen(port, hostname);
console.log(`Server start hostname ${hostname}:${port}`);
