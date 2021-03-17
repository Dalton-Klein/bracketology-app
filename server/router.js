const express = require('express');
const controller = require('./controllers/controller');
const router = express.Router();
router.use(express.json());
router.post('/bracket', controller.newBracket);
router.post('/entry', controller.newEntry);
router.post('/updateResult', controller.storeWZStats);

module.exports = router;