const express = require('express');
const router = express.Router();

const controller = require('../controllers/MainController');


router.get('/', controller.home);
router.get('/detail', controller.detail);
router.get('/success', controller.success);
router.get('/failure', controller.failure);
router.get('/pending', controller.pending);
router.post('/notifications', controller.notifications);


module.exports = router;
