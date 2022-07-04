const { Router } = require('express');
const route = Router();
const http = require('../utils/http');
const redisClient = require('../utils/redis');

/**
 * Basic test on users
 * api used -> https://jsonplaceholder.typicode.com/
 */

route.get('/', (req, res) => {
    http().get('/users/')
        .then((response) => {
            return res.send(response.data);
        })
        .catch((err) => {
            return res.status(400).send({ message: err });
        });
});

route.get('/:id', (req, res) => {
    const { id } = req.params;

    try {
        redisClient.get(`user${id}`)
            .then((result) => {
                if (result) {
                    return res.status(200).send(JSON.parse(result));
                }
                http().get(`/users/${id}`)
                    .then((response) => {
                        const user = response.data;
                        redisClient.setEx(`user${id}`, 86400, JSON.stringify(user));
                        return res.status(200).send(user);
                    })
                    .catch((err) => {
                        return res.status(400).send({ error: err });
                    });
            })
            .catch((error) => {
                console.log(error, 'ERR');
            });
    } catch(e) {
        res.status(500).send({ error: e.message });
    }
});

module.exports = route;
