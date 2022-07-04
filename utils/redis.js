const { createClient } = require('redis');
const client = createClient({
    url: 'redis://node-redis:6379',
});

client.on('error', (err) => console.log('Redis Client Error', err));
client.connect()
    .catch((err) => {
        throw err;
    });

module.exports = client;
