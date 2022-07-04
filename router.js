const { Router } = require('express');
const router = Router();

const UserService = require('./services/UserService');

router.use('/users', UserService);

module.exports = router;
