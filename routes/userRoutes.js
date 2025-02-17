const express = require('express');
const { getUserInformation } = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/user-info', verifyToken, getUserInformation);

module.exports = router;
