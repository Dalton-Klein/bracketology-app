const express = require('express');
const controller = require('./controllers/controller');
const router = express.Router();
router.use(express.json());
router.post('/bracket', controller.newBracket);
router.put('/bracket/:id', controller.editBracket);
router.get('/bracket/:id', controller.fetchBracket);
router.post('/entry', controller.newEntry);
router.post('/updateResult', controller.storeWZStats);

module.exports = router;