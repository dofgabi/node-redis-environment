const axios = require('axios');
const baseURL = process.env.API_URL;

/**
 * BaseURL used -> https://jsonplaceholder.typicode.com/
 */

module.exports = () => axios.create({
    baseURL,
});
