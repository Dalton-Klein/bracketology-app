const express = require('express');
const controller = require('./controllers/controller');
const router = express.Router();
router.use(express.json());
router.post('/wzstats', controller.storeWZStats);
router.post('/register', controller.newRegistration);

module.exports = router;