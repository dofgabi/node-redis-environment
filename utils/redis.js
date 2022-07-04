const { createClient } = require('redis');
const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));
client.connect()
    .catch((err) => {
        throw err;
    });

module.exports = client;
