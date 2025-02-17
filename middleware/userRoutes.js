const express = require('express');
const { loginUser } = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', loginUser);

router.get('/profile', verifyToken, (req, res) => {
  res.json({
    success: true,
    message: 'Profile data',
    user: req.user, 
  });
});

module.exports = router;
